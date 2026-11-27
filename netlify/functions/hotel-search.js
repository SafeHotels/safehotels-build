// ============================================================
// SafeHotels.ai: Netlify Serverless Function
// Endpoint: /.netlify/functions/hotel-search  (also /api/hotel-search)
//
// What it does:
//   1. Finds the searched place with Nominatim (free, no key)
//   2. Looks up nearby hotels in our own UK hotel list
//      (data/uk-hotels.json, from OpenStreetMap)
//   3. Gets street-level crime for the area from data.police.uk
//   4. Gives each hotel a safety score from the crimes recorded
//      near it, and a Stay22 "Check prices" link
//
// Settings (Netlify > Site configuration > Environment variables):
//   STAY22_AID   your Stay22 affiliate ID (from hub.stay22.com)
// ============================================================

// The hotel list is split in two files to keep each upload small
const HOTELS = [
  ...require("../../data/uk-hotels-1.json"),
  ...require("../../data/uk-hotels-2.json"),
];

const STAY22_AID = process.env.STAY22_AID || "";
const SEARCH_RADIUS_KM = 1.5;   // hotels shown around the searched place
const WIDER_RADIUS_KM = 6;      // used if too few hotels nearby
const HOTEL_CRIME_RADIUS_M = 250; // crimes counted "near" a hotel
const MAX_RESULTS = 40;

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };

  const params = event.queryStringParameters || {};
  const location = (params.location || "").trim();
  if (!location) return reply(400, { error: "location parameter is required" });

  const checkin = params.checkin || "";
  const checkout = params.checkout || "";
  const guests = parseGuests(params.guests);

  try {
    // 1. Where did they search?
    const geoUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1&countrycodes=gb`;
    const geoRes = await fetch(geoUrl, { headers: { "User-Agent": "SafeHotels.ai/1.0 (https://safehotels.ai)" } });
    const geo = await geoRes.json();
    if (!geo || geo.length === 0) {
      return reply(404, { error: "We couldn't find that place. Try a UK town, area or postcode, e.g. 'Manchester' or 'W8 5DL'." });
    }
    const lat = parseFloat(geo[0].lat);
    const lng = parseFloat(geo[0].lon);
    const locationName = geo[0].display_name.split(",")[0];

    // 2. Nearby hotels from our list
    let radius = SEARCH_RADIUS_KM;
    let nearby = hotelsWithin(lat, lng, radius);
    if (nearby.length < 5) {
      radius = WIDER_RADIUS_KM;
      nearby = hotelsWithin(lat, lng, radius);
    }
    nearby = nearby.slice(0, MAX_RESULTS);

    // 3. Crime around the searched place (police.uk covers about 1 mile)
    const { crimes, month } = await getCrimes(lat, lng);
    const area = scoreArea(crimes);

    // 4. Score each hotel by crimes recorded near it
    const results = nearby.map((h) => {
      const withinCrimeData = h.distanceKm <= 1.4; // police.uk only returns crimes within ~1 mile of the search point
      let safetyScore = null, safetyLabel = "No data", crimesNearby = null, scoreBasis = "none";
      if (crimes && withinCrimeData) {
        crimesNearby = crimes.filter((c) => metres(h.lat, h.lon, c.lat, c.lng) <= HOTEL_CRIME_RADIUS_M).length;
        ({ safetyScore, safetyLabel } = scoreHotel(crimesNearby));
        scoreBasis = "hotel";
      } else if (crimes) {
        ({ safetyScore, safetyLabel } = { safetyScore: area.score, safetyLabel: area.label });
        scoreBasis = "area";
      }
      return {
        id: h.osm_id,
        name: h.name,
        type: h.type,
        stars: h.stars ? parseInt(h.stars, 10) || null : null,
        lat: h.lat,
        lng: h.lon,
        address: [h.address, h.town, h.postcode].filter(Boolean).join(", "),
        postcode: h.postcode || null,
        website: h.website || null,
        distanceKm: Math.round(h.distanceKm * 10) / 10,
        priceMin: null,
        currency: "GBP",
        rating: null,
        reviewCount: 0,
        photoUrl: null,
        safetyScore,
        safetyLabel,
        crimesNearby,
        scoreBasis,
        bookingUrl: stay22Url(h, checkin, checkout, guests),
        source: "openstreetmap",
      };
    });

    return reply(200, {
      location: locationName,
      lat,
      lng,
      checkin,
      checkout,
      guests,
      radiusKm: radius,
      crime: {
        score: area.score,
        label: area.label,
        totalCrimes: crimes ? crimes.length : null,
        breakdown: area.breakdown,
        source: "data.police.uk",
        period: month ? `month of ${month}` : "not available",
        note: `Hotel scores count crimes recorded within ${HOTEL_CRIME_RADIUS_M}m of each hotel in that month.`,
      },
      hotels: results,
      totalResults: results.length,
      attribution: "Hotel data © OpenStreetMap contributors. Crime data from data.police.uk (Open Government Licence).",
    });
  } catch (err) {
    console.error("hotel-search error:", err);
    return reply(500, { error: "Search failed. Please try again." });
  }
};

// ── Helpers ──────────────────────────────────────────────────
function reply(statusCode, body) {
  return { statusCode, headers, body: JSON.stringify(body) };
}

function metres(lat1, lon1, lat2, lon2) {
  const R = 6371000, toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1), dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function hotelsWithin(lat, lng, km) {
  // quick box filter first, then exact distance
  const dLat = km / 111, dLng = km / (111 * Math.cos((lat * Math.PI) / 180));
  const out = [];
  for (const h of HOTELS) {
    if (Math.abs(h.lat - lat) > dLat || Math.abs(h.lon - lng) > dLng) continue;
    const d = metres(lat, lng, h.lat, h.lon) / 1000;
    if (d <= km) out.push({ ...h, distanceKm: d });
  }
  return out.sort((a, b) => a.distanceKm - b.distanceKm);
}

async function getCrimes(lat, lng) {
  try {
    // police.uk publishes a couple of months behind, so ask for its latest month
    const upd = await (await fetch("https://data.police.uk/api/crime-last-updated")).json();
    const month = (upd.date || "").slice(0, 7);
    const url = `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${lng}${month ? `&date=${month}` : ""}`;
    const res = await fetch(url);
    if (!res.ok) return { crimes: null, month: null }; // e.g. too many crimes in central areas, or no coverage
    const raw = await res.json();
    const crimes = raw
      .filter((c) => c.location)
      .map((c) => ({ category: c.category, lat: parseFloat(c.location.latitude), lng: parseFloat(c.location.longitude) }));
    return { crimes, month };
  } catch (e) {
    console.error("police.uk error:", e.message);
    return { crimes: null, month: null };
  }
}

// Area score: all crimes within ~1 mile in one month
function scoreArea(crimes) {
  if (!crimes) return { score: null, label: "No data", breakdown: {} };
  const n = crimes.length;
  let score, label;
  if (n < 50) { score = 95 - Math.floor(n / 5); label = "Very Safe"; }
  else if (n < 150) { score = 85 - Math.floor((n - 50) / 7); label = "Safe"; }
  else if (n < 400) { score = 70 - Math.floor((n - 150) / 15); label = "Moderate"; }
  else if (n < 800) { score = 52 - Math.floor((n - 400) / 25); label = "Elevated"; }
  else { score = Math.max(10, 35 - Math.floor((n - 800) / 50)); label = "High Crime"; }

  const names = {
    "anti-social-behaviour": "Anti-social behaviour", burglary: "Burglary",
    "criminal-damage-arson": "Criminal damage", drugs: "Drugs",
    "possession-of-weapons": "Weapons", "public-order": "Public order",
    robbery: "Robbery", shoplifting: "Shoplifting", "theft-from-the-person": "Theft from person",
    "vehicle-crime": "Vehicle crime", "violent-crime": "Violent crime",
    "other-crime": "Other crime", "other-theft": "Other theft", "bicycle-theft": "Bicycle theft",
  };
  const counts = {};
  crimes.forEach((c) => (counts[c.category] = (counts[c.category] || 0) + 1));
  const breakdown = {};
  Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 6)
    .forEach(([k, v]) => (breakdown[names[k] || k] = v));
  return { score: Math.max(0, Math.min(100, score)), label, breakdown };
}

// Hotel score: crimes within 250m in one month
function scoreHotel(n) {
  if (n < 10) return { safetyScore: 95 - n, safetyLabel: "Very Safe" };
  if (n < 30) return { safetyScore: 85 - Math.floor((n - 10) / 2), safetyLabel: "Safe" };
  if (n < 70) return { safetyScore: 74 - Math.floor((n - 30) / 2), safetyLabel: "Moderate" };
  if (n < 150) return { safetyScore: 54 - Math.floor((n - 70) / 4), safetyLabel: "Elevated" };
  return { safetyScore: Math.max(10, 34 - Math.floor((n - 150) / 10)), safetyLabel: "High Crime" };
}

function stay22Url(h, checkin, checkout, guests) {
  const p = new URLSearchParams({
    hotelname: h.name,
    address: [h.address, h.town, h.postcode, "UK"].filter(Boolean).join(", "),
    adults: String(guests),
  });
  if (STAY22_AID) p.set("aid", STAY22_AID);
  if (checkin) p.set("checkin", checkin);
  if (checkout) p.set("checkout", checkout);
  return `https://www.stay22.com/allez/roam?${p.toString()}`;
}

function parseGuests(g) {
  const n = parseInt(g, 10);
  return isNaN(n) ? 2 : Math.max(1, Math.min(10, n));
}
