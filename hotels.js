// =============================================================================
// SafeHotels.ai: shared hotel helpers
// =============================================================================
// Hotel results now come from our own UK hotel list (data/uk-hotels-*.json,
// from OpenStreetMap) via /api/hotel-search. This file only keeps the helper
// the search page uses to build a "Check prices" link.
// =============================================================================

// Set this to your Stay22 affiliate ID (from hub.stay22.com) so links earn commission.
const STAY22_AID = "";

// Builds a Stay22 link to a hotel, which shows prices from Booking.com, Expedia and others
function bookingUrl(hotel, checkin, checkout, guests) {
  const p = new URLSearchParams({
    hotelname: hotel.name || "",
    address: [hotel.address, hotel.city, "UK"].filter(Boolean).join(", "),
    adults: String(guests || 2),
  });
  if (STAY22_AID) p.set("aid", STAY22_AID);
  if (checkin) p.set("checkin", checkin);
  if (checkout) p.set("checkout", checkout);
  return "https://www.stay22.com/allez/roam?" + p.toString();
}

// Kept empty on purpose: we no longer show hand-written hotel entries or ratings.
const HOTELS = [];
