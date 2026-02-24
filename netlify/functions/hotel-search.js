// ============================================================
// SafeHotels.ai — Netlify Serverless Function
// Endpoint: /.netlify/functions/hotel-search
//
// What it does:
//   1. Geocodes the user's city with Nominatim (free, no key)
//   2. Calls Travelpayouts Hotel Data API to get hotels near lat/lng
//   3. Calls data.police.uk to get crime stats for those coords
//   4. Returns enriched hotel results with a safety score
// ============================================================

const TRAVELPAYOUTS_TOKEN = "0479e2cf95de9480df4cab134c607941";

exports.handler = async function (event, context) {
  // CORS headers — allow requests from same origin
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  const params = event.queryStringParameters || {};
  const { location, checkin, checkout, guests } = params;

  if (!location) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "location parameter is required" }),
    };
  }

  try {
    // ── Step 1: Geocode the location ───────────────────────────
    const geoUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      location + ", UK"
    )}&format=json&limit=1&countrycodes=gb`;

    const geoRes = await fetch(geoUrl, {
      headers: { "User-Agent": "SafeHotels.ai/1.0 (safehotels.ai)" },
    });
    const geoData = await geoRes.json();

    if (!geoData || geoData.length === 0) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: "Location not found. Try a UK city name like 'London' or 'Manchester'." }),
      };
    }

    const lat = parseFloat(geoData[0].lat);
    const lng = parseFloat(geoData[0].lon);
    const locationName = geoData[0].display_name.split(",")[0];

    // ── Step 2: Call Travelpayouts Hotel API ───────────────────
    // Using the Hotels Selections API (no check-in required for basic listings)
    const checkInDate = checkin || getTodayPlus(1);
    const checkOutDate = checkout || getTodayPlus(2);
    const adultsCount = parseGuests(guests);

    const tpUrl = buildTravelpayoutsUrl(lat, lng, checkInDate, checkOutDate, adultsCount);

    let hotels = [];
    try {
      const tpRes = await fetch(tpUrl, {
        headers: { "X-Access-Token": TRAVELPAYOUTS_TOKEN },
      });
      const tpData = await tpRes.json();
      hotels = extractHotels(tpData, lat, lng);
    } catch (tpErr) {
      console.error("Travelpayouts error:", tpErr.message);
      // Fall through with empty hotels — crime data still works
    }

    // ── Step 3: Get crime data from data.police.uk ─────────────
    const crimeData = await getCrimeData(lat, lng);

    // ── Step 4: Build safety score and merge ───────────────────
    const { crimeScore, crimeLabel, crimeCount, crimeBreakdown } = scoreCrime(crimeData);

    // Enrich each hotel with crime context
    const enrichedHotels = hotels.map((hotel) =>
      enrichHotel(hotel, crimeScore, crimeLabel, crimeCount, checkInDate, checkOutDate, adultsCount)
    );

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        location: locationName,
        lat,
        lng,
        checkin: checkInDate,
        checkout: checkOutDate,
        guests: adultsCount,
        crime: {
          score: crimeScore,
          label: crimeLabel,
          totalCrimes: crimeCount,
          breakdown: crimeBreakdown,
          source: "data.police.uk",
          period: "last 3 months",
        },
        hotels: enrichedHotels,
        totalResults: enrichedHotels.length,
      }),
    };
  } catch (err) {
    console.error("hotel-search error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Search failed. Please try again." }),
    };
  }
};

// ── Travelpayouts URL builder ────────────────────────────────
function buildTravelpayoutsUrl(lat, lng, checkin, checkout, adults) {
  // Hotel Search API — returns hotels near a lat/lng point
  const base = "https://engine.hotellook.com/api/v2/search/start.json";
  return (
    `${base}?token=${TRAVELPAYOUTS_TOKEN}` +
    `&marker=501240` +
    `&lat=${lat}&lon=${lng}` +
    `&checkIn=${checkin}&checkOut=${checkout}` +
    `&adultsCount=${adults}&childrenCount=0&rooms=1` +
    `&currency=gbp&lang=en-gb` +
    `&waitForResult=0&limit=20`
  );
}

// ── Extract & normalise hotels from Travelpayouts response ───
function extractHotels(data, searchLat, searchLng) {
  if (!data || !data.results) return [];

  const results = data.results;
  if (!Array.isArray(results)) return [];

  return results.slice(0, 15).map((h) => ({
    id: h.id || h.hotelId,
    name: h.hotelName || h.name || "Unknown Hotel",
    stars: h.stars || 3,
    lat: h.location?.lat || searchLat,
    lng: h.location?.lon || searchLng,
    address: h.address || "",
    priceMin: h.priceFrom ? Math.round(h.priceFrom) : null,
    priceMax: h.priceTo ? Math.round(h.priceTo) : null,
    currency: "GBP",
    rating: h.rating ? parseFloat(h.rating).toFixed(1) : null,
    reviewCount: h.reviewCount || 0,
    photoUrl: h.photoUrl || null,
    bookingUrl: buildBookingUrl(h, h.checkIn, h.checkOut),
    source: "travelpayouts",
  }));
}

// ── Build affiliate deep-link to Booking.com ─────────────────
function buildBookingUrl(hotel, checkin, checkout) {
  const hotelId = hotel.id || hotel.hotelId || "";
  // Travelpayouts affiliate redirect with marker
  return (
    `https://search.hotellook.com/?marker=501240` +
    `&hotelId=${hotelId}` +
    `&checkIn=${checkin}&checkOut=${checkout}` +
    `&adultsCount=2&currency=gbp&lang=en-gb`
  );
}

// ── Fetch crime data from data.police.uk ─────────────────────
async function getCrimeData(lat, lng) {
  const months = getLastThreeMonths();
  const crimeArrays = await Promise.all(
    months.map(async (month) => {
      try {
        const url = `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${lng}&date=${month}`;
        const res = await fetch(url);
        if (!res.ok) return [];
        return await res.json();
      } catch {
        return [];
      }
    })
  );
  return crimeArrays.flat();
}

// ── Score crime data ──────────────────────────────────────────
function scoreCrime(crimes) {
  if (!crimes || crimes.length === 0) {
    return { crimeScore: 80, crimeLabel: "Unknown", crimeCount: 0, crimeBreakdown: {} };
  }

  const breakdown = {};
  crimes.forEach((c) => {
    const cat = c.category || "other";
    breakdown[cat] = (breakdown[cat] || 0) + 1;
  });

  const totalCrimes = crimes.length;

  // Score: fewer crimes = higher safety score
  // Calibrated for a 1-mile UK urban radius over 3 months:
  // < 50  = very safe (90–100)
  // 50–150 = safe (75–89)
  // 150–300 = moderate (55–74)
  // 300–500 = elevated (35–54)
  // 500+  = high (0–34)
  let score;
  let label;

  if (totalCrimes < 50) {
    score = 95 - Math.floor(totalCrimes / 5);
    label = "Very Safe";
  } else if (totalCrimes < 150) {
    score = 89 - Math.floor((totalCrimes - 50) / 7);
    label = "Safe";
  } else if (totalCrimes < 300) {
    score = 74 - Math.floor((totalCrimes - 150) / 10);
    label = "Moderate";
  } else if (totalCrimes < 500) {
    score = 54 - Math.floor((totalCrimes - 300) / 10);
    label = "Elevated";
  } else {
    score = Math.max(10, 34 - Math.floor((totalCrimes - 500) / 20));
    label = "High Crime";
  }

  // Format breakdown with readable category names
  const readableBreakdown = {};
  const categoryNames = {
    "anti-social-behaviour": "Anti-social behaviour",
    "burglary": "Burglary",
    "criminal-damage-arson": "Criminal damage",
    "drugs": "Drugs",
    "possession-of-weapons": "Weapons",
    "public-order": "Public order",
    "robbery": "Robbery",
    "shoplifting": "Shoplifting",
    "theft-from-the-person": "Theft from person",
    "vehicle-crime": "Vehicle crime",
    "violent-crime": "Violent crime",
    "other-crime": "Other crime",
    "other-theft": "Other theft",
  };

  Object.entries(breakdown)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .forEach(([k, v]) => {
      readableBreakdown[categoryNames[k] || k] = v;
    });

  return { crimeScore: Math.max(0, Math.min(100, score)), crimeLabel: label, crimeCount: totalCrimes, crimeBreakdown: readableBreakdown };
}

// ── Enrich hotel with safety data ────────────────────────────
function enrichHotel(hotel, crimeScore, crimeLabel, crimeCount, checkin, checkout, adults) {
  // Each hotel shares the area-level crime score (we adjust slightly by hotel stars/tier as a proxy)
  const hotelBonus = (hotel.stars || 3) * 1.5 - 3;
  const finalScore = Math.min(99, Math.round(crimeScore + hotelBonus));
  const safetyLabel = finalScore >= 85 ? "Very Safe" : finalScore >= 70 ? "Safe" : finalScore >= 55 ? "Moderate" : "Check Area";

  return {
    ...hotel,
    safetyScore: finalScore,
    safetyLabel,
    crimeLabel,
    bookingUrl: hotel.bookingUrl || buildFallbackUrl(hotel.name, checkin, checkout, adults),
  };
}

// ── Fallback Booking.com URL if no hotel ID ──────────────────
function buildFallbackUrl(hotelName, checkin, checkout, adults) {
  const q = encodeURIComponent(hotelName || "hotels");
  return (
    `https://www.booking.com/search.html?ss=${q}` +
    `&checkin=${checkin}&checkout=${checkout}&group_adults=${adults}` +
    `&aid=` // insert AID when available
  );
}

// ── Date helpers ─────────────────────────────────────────────
function getTodayPlus(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function getLastThreeMonths() {
  const months = [];
  const d = new Date();
  for (let i = 1; i <= 3; i++) {
    const m = new Date(d.getFullYear(), d.getMonth() - i, 1);
    months.push(`${m.getFullYear()}-${String(m.getMonth() + 1).padStart(2, "0")}`);
  }
  return months;
}

function parseGuests(guests) {
  if (!guests) return 2;
  const n = parseInt(guests);
  return isNaN(n) ? 2 : Math.max(1, Math.min(10, n));
}
