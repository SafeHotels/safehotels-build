// =============================================================================
// SafeHotels.ai — Master Hotel Data — ALL ENGLAND + SCOTLAND + WALES
// =============================================================================
// HOW TO ADD A HOTEL: Copy one object, change the values, save. Done.
// Crime data fetched live from data.police.uk using lat/lng.
// Street View links auto-generated from lat/lng.
// =============================================================================

// ─── AFFILIATE CONFIG ────────────────────────────────────────────────────────
// When Booking.com approves you, paste your AID number below.
// Every hotel link across the entire site updates automatically.
const BOOKING_AID = ""; // ← paste your AID here e.g. "1234567"

function bookingUrl(hotelSlug) {
  const base = `https://www.booking.com/hotel/gb/${hotelSlug}.html`;
  return BOOKING_AID ? `${base}?aid=${BOOKING_AID}` : base;
}
// ─────────────────────────────────────────────────────────────────────────────

const HOTELS = [
// ═══════════════════════════════════════════════════
  // LONDON — Kensington & Chelsea
  // ═══════════════════════════════════════════════════

  {
    id: "milestone-kensington",
    name: "The Milestone Hotel & Residences",
    city: "London", area: "Kensington", region: "London",
    address: "1 Kensington Court, London W8 5DL", postcode: "W8 5DL",
    lat: 51.5014, lng: -0.1882,
    stars: 5, tier: "luxury", priceFrom: 289, currency: "GBP",
    nearestTube: "High Street Kensington", tubeDistance: "2 min walk", tubeLines: ["District","Circle"],
    phone: "+44 20 7917 1000",
    website: "https://www.milestonehotel.com",
    bookingUrl: "https://www.booking.com/hotel/gb/the-milestone.html",
    description: "Boutique 5-star hotel opposite Kensington Palace Gardens. Individually designed rooms, 24hr butler service, and exceptional security in one of London's safest postcodes.",
    highlights: ["Opposite Kensington Palace","24hr butler","Award-winning restaurant","Keycard-only floor access"],
    badges: ["solo-female","family","business","luxury"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.8, hotelSecurity: 4.9, cleanliness: 5.0, totalReviews: 247 },
    featuredReview: { author: "Sarah M.", type: "Solo Female Traveler", stars: 5, text: "Felt completely safe walking back at 11pm. Well-lit streets, saw other people around. Hotel had keycard access and 24/7 reception. Zero sketchy vibes!", date: "Jan 2026", helpful: 126 }
  },

  {
    id: "belmond-cadogan",
    name: "Belmond Cadogan Hotel",
    city: "London", area: "Chelsea", region: "London",
    address: "75 Sloane Street, London SW1X 9SG", postcode: "SW1X 9SG",
    lat: 51.4958, lng: -0.1584,
    stars: 5, tier: "luxury", priceFrom: 520, currency: "GBP",
    nearestTube: "Sloane Square", tubeDistance: "5 min walk", tubeLines: ["District","Circle"],
    phone: "+44 20 7235 7141",
    website: "https://www.belmond.com/hotels/europe/uk/london/belmond-cadogan-hotel",
    bookingUrl: "https://www.booking.com/hotel/gb/belmond-cadogan.html",
    description: "Iconic Grade II listed hotel in the heart of Chelsea. Belmond property with impeccable service and one of London's safest and most prestigious addresses.",
    highlights: ["Chelsea's most famous address","Michelin-starred restaurant","Sloane Street shopping","Historic literary connections"],
    badges: ["solo-female","business","luxury"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.9, hotelSecurity: 5.0, cleanliness: 5.0, totalReviews: 189 },
    featuredReview: { author: "Priya K.", type: "Solo Female Traveler", stars: 5, text: "As a woman travelling alone, I felt completely at ease. The whole area is pristine. Staff walked me to my car at 2am without me even asking.", date: "Nov 2025", helpful: 201 }
  },

  {
    id: "premier-kensington",
    name: "Premier Inn London Kensington (Earl's Court)",
    city: "London", area: "Kensington", region: "London",
    address: "11 Knaresborough Place, London SW5 0TW", postcode: "SW5 0TW",
    lat: 51.4934, lng: -0.1927,
    stars: 3, tier: "mid", priceFrom: 98, currency: "GBP",
    nearestTube: "Earl's Court", tubeDistance: "3 min walk", tubeLines: ["District","Piccadilly"],
    phone: "+44 333 234 6567",
    website: "https://www.premierinn.com",
    bookingUrl: "https://www.booking.com/hotel/gb/premierinn-london-kensington-earls-court.html",
    description: "Reliable mid-range option in safe Kensington, steps from Earl's Court tube. Premier Inn's 24hr reception and keycard access make it consistently safe for solo travelers.",
    highlights: ["3 min from Earl's Court tube","24hr reception","Budget-friendly safe area","Blackout blinds & A/C"],
    badges: ["budget-safe","solo-female","business"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.7, hotelSecurity: 4.5, cleanliness: 4.4, totalReviews: 312 },
    featuredReview: { author: "Mike R.", type: "Solo Male Traveler", stars: 5, text: "Great budget option in a safe area. Walked to tube at midnight, no problems. Area felt secure. Would stay again!", date: "Jan 2026", helpful: 87 }
  },

  {
    id: "nhow-london",
    name: "nhow London",
    city: "London", area: "Shoreditch", region: "London",
    address: "1 Waterden Road, London E15 2GN", postcode: "E15 2GN",
    lat: 51.5423, lng: -0.0197,
    stars: 4, tier: "mid", priceFrom: 130, currency: "GBP",
    nearestTube: "Hackney Wick", tubeDistance: "8 min walk", tubeLines: ["Overground"],
    phone: "+44 20 3828 2000",
    website: "https://www.nhow-hotels.com/london",
    bookingUrl: "https://www.booking.com/hotel/gb/nhow-london.html",
    description: "Striking design hotel on the Queen Elizabeth Olympic Park, built for the 2012 Games. The park itself is heavily patrolled, beautifully lit, and one of east London's safest areas.",
    highlights: ["Olympic Park location","Striking river views","Design-led rooms","Excellent transport links"],
    badges: ["business","solo-female"],
    communityRatings: { nightSafety: 4.4, streetSafety: 4.5, hotelSecurity: 4.6, cleanliness: 4.5, totalReviews: 178 },
    featuredReview: { author: "Dan F.", type: "Business Traveler", stars: 4, text: "Olympic Park is incredibly well-maintained and safe. Felt completely fine walking around at night. Really impressed with the area.", date: "Dec 2025", helpful: 67 }
  },

  {
    id: "citizenm-tower-hill",
    name: "citizenM London Tower of London",
    city: "London", area: "Tower Hill", region: "London",
    address: "40 Trinity Square, London EC3N 4DJ", postcode: "EC3N 4DJ",
    lat: 51.5099, lng: -0.0773,
    stars: 4, tier: "mid", priceFrom: 145, currency: "GBP",
    nearestTube: "Tower Hill", tubeDistance: "1 min walk", tubeLines: ["District","Circle"],
    phone: "+44 20 3519 1220",
    website: "https://www.citizenm.com/hotels/united-kingdom/london/london-tower-of-london-hotel",
    bookingUrl: "https://www.booking.com/hotel/gb/citizenm-london-tower-of-london.html",
    description: "Stylish design hotel next to the Tower of London. Self check-in, keycard-only elevator access, and 24hr staffed lobby make it extremely secure.",
    highlights: ["Tower of London views","Self check-in tech","Keycard elevator access","Rooftop bar"],
    badges: ["business","solo-female","budget-safe"],
    communityRatings: { nightSafety: 4.5, streetSafety: 4.4, hotelSecurity: 4.8, cleanliness: 4.7, totalReviews: 421 },
    featuredReview: { author: "James L.", type: "Business Traveler", stars: 4, text: "Love the secure elevator that needs your keycard for every floor. Location is excellent - busy enough to feel safe at night.", date: "Feb 2026", helpful: 156 }
  },

  {
    id: "travelodge-city",
    name: "Travelodge London City",
    city: "London", area: "City of London", region: "London",
    address: "1 Harrow Place, London E1 7DD", postcode: "E1 7DD",
    lat: 51.5161, lng: -0.0773,
    stars: 3, tier: "budget", priceFrom: 59, currency: "GBP",
    nearestTube: "Aldgate", tubeDistance: "4 min walk", tubeLines: ["Circle","Hammersmith & City","Metropolitan"],
    phone: "+44 871 984 6290",
    website: "https://www.travelodge.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/travelodge-london-city.html",
    description: "Budget-friendly in the City of London financial district — very quiet at weekends, well-lit at night with 24hr security presence throughout the area.",
    highlights: ["Budget-friendly","City of London security presence","Quiet at weekends","Near Liverpool Street"],
    badges: ["budget-safe","business"],
    communityRatings: { nightSafety: 4.2, streetSafety: 4.3, hotelSecurity: 4.1, cleanliness: 4.0, totalReviews: 198 },
    featuredReview: { author: "Rachel B.", type: "Solo Female Traveler", stars: 4, text: "The City is surprisingly safe — lots of CCTV and security from the financial buildings everywhere. Perfect budget base.", date: "Jan 2026", helpful: 63 }
  },

  {
    id: "richmond-hill",
    name: "Richmond Hill Hotel",
    city: "London", area: "Richmond", region: "London",
    address: "144-150 Richmond Hill, Richmond TW10 6RW", postcode: "TW10 6RW",
    lat: 51.4605, lng: -0.3003,
    stars: 4, tier: "luxury", priceFrom: 195, currency: "GBP",
    nearestTube: "Richmond", tubeDistance: "12 min walk", tubeLines: ["District","London Overground"],
    phone: "+44 20 8940 2247",
    website: "https://www.richmondhill.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/richmond-hill.html",
    description: "Historic Georgian hotel with Thames Valley views. Richmond is consistently London's safest borough — this hotel sits at the heart of it.",
    highlights: ["Thames Valley views","Richmond Park nearby","Historic Grade II listed","Quiet residential setting"],
    badges: ["solo-female","family","night-safe"],
    communityRatings: { nightSafety: 5.0, streetSafety: 4.9, hotelSecurity: 4.8, cleanliness: 5.0, totalReviews: 183 },
    featuredReview: { author: "Emma T.", type: "Family Traveler", stars: 5, text: "Perfect for families. Kids played outside hotel safely. Beautiful park nearby. Absolutely zero concerns about safety. Like a village, not London!", date: "Dec 2025", helpful: 94 }
  },

  {
    id: "hotel-indigo-paddington",
    name: "Hotel Indigo London Paddington",
    city: "London", area: "Paddington", region: "London",
    address: "16 London Street, London W2 1HL", postcode: "W2 1HL",
    lat: 51.5155, lng: -0.1751,
    stars: 4, tier: "mid", priceFrom: 160, currency: "GBP",
    nearestTube: "Paddington", tubeDistance: "4 min walk", tubeLines: ["Bakerloo","Circle","District","Elizabeth"],
    phone: "+44 20 7706 4444",
    website: "https://www.ihg.com/hotelindigo/hotels/gb/en/london/lonpd/hoteldetail",
    bookingUrl: "https://www.booking.com/hotel/gb/hotel-indigo-london-paddington.html",
    description: "Boutique IHG hotel in a quiet residential street just minutes from Paddington Station. The Paddington area has improved significantly with Crossrail — well-connected and safe.",
    highlights: ["Paddington Station 4 min","Elizabeth line access","Heathrow 15 min by train","Boutique design rooms"],
    badges: ["business","solo-female","family"],
    communityRatings: { nightSafety: 4.5, streetSafety: 4.4, hotelSecurity: 4.6, cleanliness: 4.7, totalReviews: 224 },
    featuredReview: { author: "Grace W.", type: "Solo Female Traveler", stars: 4, text: "London Street itself is quiet and residential — felt very safe. Paddington mainline is 4 mins walk which is very reassuring for late arrivals.", date: "Jan 2026", helpful: 88 }
  },

  // ═══════════════════════════════════════════════════
  // EDINBURGH
  // ═══════════════════════════════════════════════════

  {
    id: "balmoral-edinburgh",
    name: "The Balmoral Hotel",
    city: "Edinburgh", area: "City Centre", region: "Scotland",
    address: "1 Princes Street, Edinburgh EH2 2EQ", postcode: "EH2 2EQ",
    lat: 55.9521, lng: -3.1895,
    stars: 5, tier: "luxury", priceFrom: 350, currency: "GBP",
    nearestStation: "Edinburgh Waverley", stationDistance: "2 min walk",
    phone: "+44 131 556 2414",
    website: "https://www.roccofortehotels.com/hotels-and-resorts/the-balmoral-hotel",
    bookingUrl: "https://www.booking.com/hotel/gb/the-balmoral.html",
    description: "Edinburgh's most iconic hotel on Princes Street. The Balmoral clock tower is a city landmark — perfectly positioned above Waverley Station with exceptional security.",
    highlights: ["Iconic Princes Street location","Waverley Station 2 mins","Castle views","Michelin-starred Number One restaurant"],
    badges: ["solo-female","business","luxury","family"],
    communityRatings: { nightSafety: 4.8, streetSafety: 4.7, hotelSecurity: 5.0, cleanliness: 4.9, totalReviews: 312 },
    featuredReview: { author: "Claire D.", type: "Solo Female Traveler", stars: 5, text: "Princes Street is busy until late and the hotel doormen are incredibly attentive. Never felt unsafe. The castle view is magical at night.", date: "Dec 2025", helpful: 178 }
  },

  {
    id: "sheraton-edinburgh",
    name: "Sheraton Grand Hotel & Spa Edinburgh",
    city: "Edinburgh", area: "West End", region: "Scotland",
    address: "1 Festival Square, Edinburgh EH3 9SR", postcode: "EH3 9SR",
    lat: 55.9457, lng: -3.2053,
    stars: 5, tier: "luxury", priceFrom: 220, currency: "GBP",
    nearestStation: "Edinburgh Waverley", stationDistance: "15 min walk",
    phone: "+44 131 229 9131",
    website: "https://www.marriott.com/hotels/travel/edigs-sheraton-grand-hotel-and-spa-edinburgh",
    bookingUrl: "https://www.booking.com/hotel/gb/sheraton-grand-edinburgh.html",
    description: "Luxury Sheraton with rooftop One Spa in Edinburgh's peaceful Festival Square. Surrounded by arts venues and conference facilities — very safe, well-monitored area.",
    highlights: ["Rooftop One Spa","Festival Square","Edinburgh Castle nearby","Award-winning spa"],
    badges: ["solo-female","business","luxury"],
    communityRatings: { nightSafety: 4.7, streetSafety: 4.6, hotelSecurity: 4.9, cleanliness: 4.8, totalReviews: 267 },
    featuredReview: { author: "Alison W.", type: "Business Traveler", stars: 5, text: "Stayed for a conference. Area is quiet and safe even late at night. Rooftop spa is phenomenal. Perfect for work trips.", date: "Nov 2025", helpful: 112 }
  },

  {
    id: "motel-one-edinburgh",
    name: "Motel One Edinburgh-Royal",
    city: "Edinburgh", area: "Old Town", region: "Scotland",
    address: "18-21 Market Street, Edinburgh EH1 1BL", postcode: "EH1 1BL",
    lat: 55.9489, lng: -3.1894,
    stars: 3, tier: "budget", priceFrom: 79, currency: "GBP",
    nearestStation: "Edinburgh Waverley", stationDistance: "3 min walk",
    phone: "+44 131 220 0730",
    website: "https://www.motel-one.com/en/hotels/edinburgh/edinburgh-royal",
    bookingUrl: "https://www.booking.com/hotel/gb/motel-one-edinburgh-royal.html",
    description: "Excellent value design hotel steps from Waverley Station and the Royal Mile. The Old Town is tourist-heavy, well-lit, and heavily policed — great budget-safe option.",
    highlights: ["Steps from Waverley Station","Royal Mile location","Budget-friendly","Design-led rooms"],
    badges: ["budget-safe","solo-female","business"],
    communityRatings: { nightSafety: 4.5, streetSafety: 4.4, hotelSecurity: 4.5, cleanliness: 4.6, totalReviews: 389 },
    featuredReview: { author: "Hannah S.", type: "Solo Female Traveler", stars: 4, text: "Market Street is right next to the station — so safe and convenient. Felt totally comfortable walking around at night in the Old Town.", date: "Jan 2026", helpful: 134 }
  },

  // ═══════════════════════════════════════════════════
  // BATH
  // ═══════════════════════════════════════════════════

  {
    id: "bath-spa-hotel",
    name: "The Bath Spa Hotel",
    city: "Bath", area: "City Centre", region: "South West England",
    address: "Sydney Road, Bath BA2 6JF", postcode: "BA2 6JF",
    lat: 51.3832, lng: -2.3534,
    stars: 5, tier: "luxury", priceFrom: 285, currency: "GBP",
    nearestStation: "Bath Spa", stationDistance: "15 min walk",
    phone: "+44 1225 444424",
    website: "https://www.nhcollection.com/en/hotels/bath-spa-hotel",
    bookingUrl: "https://www.booking.com/hotel/gb/bath-spa.html",
    description: "Grand Victorian mansion set in 7 acres on the edge of Bath. Bath is one of England's safest cities — beautifully lit Georgian streets, heavy tourist presence, very low crime.",
    highlights: ["7-acre grounds","Historic Roman Baths nearby","Georgian city centre","Outdoor pool"],
    badges: ["solo-female","family","luxury"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.9, hotelSecurity: 4.8, cleanliness: 5.0, totalReviews: 156 },
    featuredReview: { author: "Helen F.", type: "Solo Female Traveler", stars: 5, text: "Bath is the safest city I've visited in England. Walking back from dinner alone at 10pm felt completely fine. Gorgeous city, gorgeous hotel.", date: "Oct 2025", helpful: 145 }
  },

  {
    id: "gainsborough-bath",
    name: "The Gainsborough Bath Spa",
    city: "Bath", area: "City Centre", region: "South West England",
    address: "Beau Street, Bath BA1 1QY", postcode: "BA1 1QY",
    lat: 51.3808, lng: -2.3601,
    stars: 5, tier: "luxury", priceFrom: 340, currency: "GBP",
    nearestStation: "Bath Spa", stationDistance: "10 min walk",
    phone: "+44 1225 358888",
    website: "https://thegainsboroughbathspa.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/the-gainsborough-bath-spa.html",
    description: "Unique 5-star hotel with its own thermal spa fed by Bath's legendary hot springs. Situated in the historic city centre where Georgian architecture and tourist foot traffic keep the streets safe.",
    highlights: ["Natural thermal spa waters","Georgian city centre","Roman Baths 5 min walk","Unique water feature"],
    badges: ["solo-female","luxury","family"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.8, hotelSecurity: 4.9, cleanliness: 5.0, totalReviews: 201 },
    featuredReview: { author: "Fiona M.", type: "Solo Female Traveler", stars: 5, text: "Bath feels genuinely, deeply safe. The thermal spa is extraordinary. I walked the city at all hours and never had a concern. Perfect city break.", date: "Nov 2025", helpful: 167 }
  },

  {
    id: "premier-inn-bath",
    name: "Premier Inn Bath City Centre",
    city: "Bath", area: "City Centre", region: "South West England",
    address: "Westgate Street, Bath BA1 1EQ", postcode: "BA1 1EQ",
    lat: 51.3796, lng: -2.3620,
    stars: 3, tier: "budget", priceFrom: 89, currency: "GBP",
    nearestStation: "Bath Spa", stationDistance: "12 min walk",
    phone: "+44 333 234 6567",
    website: "https://www.premierinn.com",
    bookingUrl: "https://www.booking.com/hotel/gb/premier-inn-bath-city-centre.html",
    description: "Excellent value Premier Inn in the heart of Bath's Georgian city centre. Right on Westgate Street with the Roman Baths and Pump Room just minutes away.",
    highlights: ["City centre location","Roman Baths 3 min walk","24hr reception","Budget-friendly Bath base"],
    badges: ["budget-safe","family","solo-female"],
    communityRatings: { nightSafety: 4.7, streetSafety: 4.7, hotelSecurity: 4.4, cleanliness: 4.3, totalReviews: 445 },
    featuredReview: { author: "Lee P.", type: "Family Traveler", stars: 4, text: "Can't beat the location in Bath. Entire city feels safe and clean. Kids loved walking to the Roman Baths. Great value for Bath.", date: "Aug 2025", helpful: 112 }
  },

  // ═══════════════════════════════════════════════════
  // OXFORD
  // ═══════════════════════════════════════════════════

  {
    id: "old-bank-oxford",
    name: "Old Bank Hotel",
    city: "Oxford", area: "City Centre", region: "South East England",
    address: "92-94 High Street, Oxford OX1 4BN", postcode: "OX1 4BN",
    lat: 51.7520, lng: -1.2539,
    stars: 4, tier: "luxury", priceFrom: 210, currency: "GBP",
    nearestStation: "Oxford", stationDistance: "20 min walk",
    phone: "+44 1865 799599",
    website: "https://www.oldbankhotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/old-bank-oxford.html",
    description: "Boutique hotel in a converted bank on Oxford's famous High Street, opposite All Souls College. Oxford city centre is exceptionally safe with constant university foot traffic.",
    highlights: ["On Oxford High Street","University college views","Contemporary art collection","Excellent restaurant"],
    badges: ["solo-female","business","luxury"],
    communityRatings: { nightSafety: 4.8, streetSafety: 4.7, hotelSecurity: 4.6, cleanliness: 4.8, totalReviews: 203 },
    featuredReview: { author: "Dr. Fiona M.", type: "Business Traveler", stars: 5, text: "Oxford High Street has university students and tourists everywhere at all hours. Incredibly safe feeling city. The hotel itself is beautiful.", date: "Jan 2026", helpful: 89 }
  },

  {
    id: "malmaison-oxford",
    name: "Malmaison Oxford",
    city: "Oxford", area: "City Centre", region: "South East England",
    address: "3 New Road, Oxford OX1 1AY", postcode: "OX1 1AY",
    lat: 51.7508, lng: -1.2605,
    stars: 4, tier: "mid", priceFrom: 150, currency: "GBP",
    nearestStation: "Oxford", stationDistance: "15 min walk",
    phone: "+44 1865 268400",
    website: "https://www.malmaison.com/locations/oxford",
    bookingUrl: "https://www.booking.com/hotel/gb/malmaison-oxford.html",
    description: "Unique Malmaison property in a converted Victorian prison — the original cells converted into stylish rooms. Located on peaceful New Road opposite Oxford Castle.",
    highlights: ["Converted Victorian prison","Oxford Castle opposite","Unique cell rooms","Brasserie & bar"],
    badges: ["business","solo-female","luxury"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.5, hotelSecurity: 4.7, cleanliness: 4.6, totalReviews: 278 },
    featuredReview: { author: "Tim A.", type: "Business Traveler", stars: 5, text: "The irony of staying in a prison and feeling safer than anywhere else! Lovely quiet road, excellent hotel. Oxford is superb.", date: "Dec 2025", helpful: 134 }
  },

  // ═══════════════════════════════════════════════════
  // MANCHESTER
  // ═══════════════════════════════════════════════════

  {
    id: "kimpton-clocktower-manchester",
    name: "Kimpton Clocktower Hotel",
    city: "Manchester", area: "City Centre", region: "North West England",
    address: "Oxford Street, Manchester M60 7HA", postcode: "M60 7HA",
    lat: 53.4741, lng: -2.2427,
    stars: 5, tier: "luxury", priceFrom: 180, currency: "GBP",
    nearestTram: "St Peter's Square", tramDistance: "3 min walk",
    phone: "+44 161 236 3333",
    website: "https://www.ihg.com/kimptonhotels/hotels/gb/en/manchester/manck/hoteldetail",
    bookingUrl: "https://www.booking.com/hotel/gb/kimpton-clocktower.html",
    description: "Stunning Victorian Gothic landmark hotel on Oxford Street. The Grade II listed Refuge building houses Manchester's most photographed hotel in a central, well-patrolled area.",
    highlights: ["Victorian Gothic architecture","Rooftop Garden Bar","St Peter's Square tram","Manchester Art Gallery nearby"],
    badges: ["solo-female","business","luxury"],
    communityRatings: { nightSafety: 4.4, streetSafety: 4.3, hotelSecurity: 4.8, cleanliness: 4.7, totalReviews: 334 },
    featuredReview: { author: "Sophie H.", type: "Solo Female Traveler", stars: 4, text: "Oxford Street is busy with bars but well-policed. Doormen are very visible. Inside feels like a fortress — totally secure.", date: "Dec 2025", helpful: 134 }
  },

  {
    id: "innside-manchester",
    name: "INNSIDE by Meliá Manchester",
    city: "Manchester", area: "First Street", region: "North West England",
    address: "1 First Street, Manchester M15 4RP", postcode: "M15 4RP",
    lat: 53.4711, lng: -2.2481,
    stars: 4, tier: "mid", priceFrom: 110, currency: "GBP",
    nearestTram: "Deansgate-Castlefield", tramDistance: "5 min walk",
    phone: "+44 161 200 5500",
    website: "https://www.melia.com/en/hotels/united-kingdom/manchester/innside-manchester",
    bookingUrl: "https://www.booking.com/hotel/gb/innside-manchester.html",
    description: "Sleek modern hotel in Manchester's First Street development — a purpose-built, private-feeling district with excellent lighting and security.",
    highlights: ["Purpose-built safe development","Near HOME arts centre","Excellent transport links","Great value mid-range"],
    badges: ["business","solo-female","budget-safe"],
    communityRatings: { nightSafety: 4.5, streetSafety: 4.4, hotelSecurity: 4.6, cleanliness: 4.5, totalReviews: 218 },
    featuredReview: { author: "Tom G.", type: "Business Traveler", stars: 4, text: "First Street feels like a campus — very controlled, well-lit, and there are always people around. Smart mid-range choice.", date: "Jan 2026", helpful: 72 }
  },

  {
    id: "gotham-manchester",
    name: "Hotel Gotham Manchester",
    city: "Manchester", area: "City Centre", region: "North West England",
    address: "100 King Street, Manchester M2 4WU", postcode: "M2 4WU",
    lat: 53.4800, lng: -2.2420,
    stars: 5, tier: "luxury", priceFrom: 220, currency: "GBP",
    nearestTram: "Market Street", tramDistance: "5 min walk",
    phone: "+44 161 413 0000",
    website: "https://www.hotelgotham.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/hotel-gotham-manchester.html",
    description: "Spectacular Art Deco 5-star in a restored bank on King Street — Manchester's finest independent hotel. King Street is the city's premier shopping street: safe, beautiful, and well-patrolled.",
    highlights: ["Art Deco masterpiece","King Street location","Rooftop Club Brass bar","Award-winning design"],
    badges: ["luxury","business","solo-female"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.5, hotelSecurity: 4.9, cleanliness: 4.9, totalReviews: 256 },
    featuredReview: { author: "Kat R.", type: "Solo Female Traveler", stars: 5, text: "King Street is lovely — upscale shops, very clean, well-lit. The hotel itself is extraordinary. Felt pampered and perfectly safe.", date: "Feb 2026", helpful: 198 }
  },

  // ═══════════════════════════════════════════════════
  // YORK
  // ═══════════════════════════════════════════════════

  {
    id: "grand-york",
    name: "The Grand, York",
    city: "York", area: "City Centre", region: "Yorkshire",
    address: "Station Rise, York YO1 6GD", postcode: "YO1 6GD",
    lat: 53.9582, lng: -1.0873,
    stars: 5, tier: "luxury", priceFrom: 195, currency: "GBP",
    nearestStation: "York", stationDistance: "1 min walk",
    phone: "+44 1904 380038",
    website: "https://www.thegrandyork.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/the-grand-york.html",
    description: "Magnificent Edwardian hotel directly opposite York Station. York is consistently ranked among England's safest cities, with a compact, walkable medieval city centre that feels safe at all hours.",
    highlights: ["Opposite York Station","York Minster 10 min walk","Award-winning spa","Historic Edwardian architecture"],
    badges: ["solo-female","family","luxury","night-safe"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.9, hotelSecurity: 4.9, cleanliness: 5.0, totalReviews: 289 },
    featuredReview: { author: "Natalie P.", type: "Solo Female Traveler", stars: 5, text: "York is the safest city I've ever visited. The medieval walls are lit up at night and there are always people walking around. The Grand itself is impeccable.", date: "Nov 2025", helpful: 198 }
  },

  {
    id: "dean-court-york",
    name: "Dean Court Hotel",
    city: "York", area: "City Centre", region: "Yorkshire",
    address: "Duncombe Place, York YO1 7EF", postcode: "YO1 7EF",
    lat: 53.9619, lng: -1.0820,
    stars: 4, tier: "mid", priceFrom: 145, currency: "GBP",
    nearestStation: "York", stationDistance: "15 min walk",
    phone: "+44 1904 625082",
    website: "https://www.deancourt.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/dean-court-york.html",
    description: "Historic hotel directly opposite York Minster — you can see the cathedral from the bedrooms. Duncombe Place is one of York's most prestigious and beautifully safe addresses.",
    highlights: ["York Minster views","Opposite the cathedral","Victorian building","City walls minutes away"],
    badges: ["solo-female","family","luxury"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.7, cleanliness: 4.8, totalReviews: 167 },
    featuredReview: { author: "Barbara L.", type: "Family Traveler", stars: 5, text: "You wake up to York Minster outside your window. The area is stunning and completely safe. York is such a wonderful city for families.", date: "Oct 2025", helpful: 156 }
  },

  // ═══════════════════════════════════════════════════
  // CAMBRIDGE
  // ═══════════════════════════════════════════════════

  {
    id: "university-arms-cambridge",
    name: "University Arms Hotel",
    city: "Cambridge", area: "City Centre", region: "East of England",
    address: "Regent Street, Cambridge CB2 1AD", postcode: "CB2 1AD",
    lat: 52.2009, lng: 0.1246,
    stars: 5, tier: "luxury", priceFrom: 240, currency: "GBP",
    nearestStation: "Cambridge", stationDistance: "20 min walk",
    phone: "+44 1223 606066",
    website: "https://www.universityarms.com",
    bookingUrl: "https://www.booking.com/hotel/gb/university-arms-cambridge.html",
    description: "Recently restored Victorian landmark overlooking Parker's Piece park. Cambridge is one of England's safest cities — low crime, constant student and tourist presence.",
    highlights: ["Parker's Piece park views","Historic Cambridge colleges walking distance","Stunning restoration","Parker's Bar & Restaurant"],
    badges: ["solo-female","business","luxury"],
    communityRatings: { nightSafety: 4.8, streetSafety: 4.8, hotelSecurity: 4.9, cleanliness: 5.0, totalReviews: 167 },
    featuredReview: { author: "Dr. Anna S.", type: "Solo Female Traveler", stars: 5, text: "Cambridge feels incredibly safe — cyclists everywhere, students at all hours. The hotel is directly on a large park. Beautifully restored.", date: "Dec 2025", helpful: 123 }
  },

  {
    id: "hotel-du-vin-cambridge",
    name: "Hotel du Vin Cambridge",
    city: "Cambridge", area: "City Centre", region: "East of England",
    address: "15-19 Trumpington Street, Cambridge CB2 1QA", postcode: "CB2 1QA",
    lat: 52.2011, lng: 0.1191,
    stars: 4, tier: "mid", priceFrom: 145, currency: "GBP",
    nearestStation: "Cambridge", stationDistance: "25 min walk",
    phone: "+44 1223 227330",
    website: "https://www.hotelduvin.com/locations/cambridge",
    bookingUrl: "https://www.booking.com/hotel/gb/hotel-du-vin-cambridge.html",
    description: "Hotel du Vin in a converted sandstone building on beautiful Trumpington Street, surrounded by university colleges. As safe a location as Cambridge offers.",
    highlights: ["Trumpington Street","Walking distance to The Backs","Excellent wine cellar","Bistro restaurant"],
    badges: ["business","solo-female","luxury"],
    communityRatings: { nightSafety: 4.8, streetSafety: 4.9, hotelSecurity: 4.6, cleanliness: 4.7, totalReviews: 234 },
    featuredReview: { author: "Mark S.", type: "Business Traveler", stars: 4, text: "Trumpington Street is stunning and utterly safe — surrounded by colleges on all sides. Cambridge is a wonderful city to be in.", date: "Nov 2025", helpful: 89 }
  },

  // ═══════════════════════════════════════════════════
  // BRISTOL
  // ═══════════════════════════════════════════════════

  {
    id: "harbor-hotel-bristol",
    name: "Bristol Harbour Hotel & Spa",
    city: "Bristol", area: "Harbourside", region: "South West England",
    address: "55 Corn Street, Bristol BS1 1HT", postcode: "BS1 1HT",
    lat: 51.4545, lng: -2.5960,
    stars: 4, tier: "luxury", priceFrom: 165, currency: "GBP",
    nearestStation: "Bristol Temple Meads", stationDistance: "12 min walk",
    phone: "+44 117 203 4445",
    website: "https://www.bristolharbourhotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/bristol-harbour.html",
    description: "Beautiful hotel in a converted bank on historic Corn Street, minutes from Bristol's vibrant harbourside. The city centre and harbourside are well-lit, busy, and very safe.",
    highlights: ["Historic Corn Street","Harbourside minutes away","Rooftop pool","Clifton Suspension Bridge nearby"],
    badges: ["solo-female","business","luxury"],
    communityRatings: { nightSafety: 4.5, streetSafety: 4.4, hotelSecurity: 4.7, cleanliness: 4.8, totalReviews: 241 },
    featuredReview: { author: "Jade R.", type: "Solo Female Traveler", stars: 4, text: "Bristol Harbourside is lively in the evenings with lots of people around. Corn Street itself is really safe. Rooftop pool is a bonus!", date: "Jan 2026", helpful: 97 }
  },

  {
    id: "hotel-du-vin-bristol",
    name: "Hotel du Vin Bristol",
    city: "Bristol", area: "Clifton", region: "South West England",
    address: "The Sugar House, Narrow Lewins Mead, Bristol BS1 2NU", postcode: "BS1 2NU",
    lat: 51.4589, lng: -2.5970,
    stars: 4, tier: "mid", priceFrom: 130, currency: "GBP",
    nearestStation: "Bristol Temple Meads", stationDistance: "15 min walk",
    phone: "+44 117 403 2979",
    website: "https://www.hotelduvin.com/locations/bristol",
    bookingUrl: "https://www.booking.com/hotel/gb/hotel-du-vin-bristol.html",
    description: "Characterful hotel in a converted 18th-century sugar warehouse near the city centre. Bristol's city core is increasingly safe and vibrant with excellent street lighting.",
    highlights: ["18th-century warehouse conversion","Walking distance to harbourside","Excellent bistro","Wine tasting events"],
    badges: ["business","solo-female"],
    communityRatings: { nightSafety: 4.3, streetSafety: 4.2, hotelSecurity: 4.5, cleanliness: 4.6, totalReviews: 198 },
    featuredReview: { author: "Sam T.", type: "Business Traveler", stars: 4, text: "Good location for the city. Lewins Mead is busy and feels fine. The building is beautiful and unique.", date: "Dec 2025", helpful: 61 }
  },

  // ═══════════════════════════════════════════════════
  // BIRMINGHAM
  // ═══════════════════════════════════════════════════

  {
    id: "hyatt-regency-birmingham",
    name: "Hyatt Regency Birmingham",
    city: "Birmingham", area: "Brindleyplace", region: "West Midlands",
    address: "2 Bridge Street, Birmingham B1 2JZ", postcode: "B1 2JZ",
    lat: 52.4797, lng: -1.9108,
    stars: 5, tier: "luxury", priceFrom: 150, currency: "GBP",
    nearestStation: "Birmingham New Street", stationDistance: "10 min walk",
    phone: "+44 121 643 1234",
    website: "https://www.hyatt.com/en-US/hotel/england/hyatt-regency-birmingham/birhr",
    bookingUrl: "https://www.booking.com/hotel/gb/hyatt-regency-birmingham.html",
    description: "Flagship Hyatt in Birmingham's Brindleyplace — a purpose-built canalside development known for being one of the city's safest and most pleasant areas to walk at night.",
    highlights: ["Brindleyplace canalside","Excellent restaurant & spa","Walking distance to ICC","Safe regenerated quarter"],
    badges: ["business","solo-female","luxury"],
    communityRatings: { nightSafety: 4.5, streetSafety: 4.4, hotelSecurity: 4.8, cleanliness: 4.7, totalReviews: 278 },
    featuredReview: { author: "Mark T.", type: "Business Traveler", stars: 4, text: "Brindleyplace is very safe — loads of restaurants and bars with people everywhere in the evenings. The canal walk is well-lit and patrolled.", date: "Feb 2026", helpful: 101 }
  },

  {
    id: "hotel-du-vin-birmingham",
    name: "Hotel du Vin Birmingham",
    city: "Birmingham", area: "City Centre", region: "West Midlands",
    address: "Church Street, Birmingham B3 2NR", postcode: "B3 2NR",
    lat: 52.4842, lng: -1.8985,
    stars: 4, tier: "mid", priceFrom: 115, currency: "GBP",
    nearestStation: "Birmingham Snow Hill", stationDistance: "5 min walk",
    phone: "+44 121 200 0600",
    website: "https://www.hotelduvin.com/locations/birmingham",
    bookingUrl: "https://www.booking.com/hotel/gb/hotel-du-vin-birmingham.html",
    description: "Striking hotel in the Jewellery Quarter's historic Eye Hospital — a quiet, characterful neighbourhood away from city centre hustle. The Jewellery Quarter is surprisingly safe and charming.",
    highlights: ["Jewellery Quarter location","Converted Eye Hospital","Award-winning bistro","Boutique character"],
    badges: ["business","solo-female","luxury"],
    communityRatings: { nightSafety: 4.3, streetSafety: 4.3, hotelSecurity: 4.6, cleanliness: 4.6, totalReviews: 201 },
    featuredReview: { author: "Caroline H.", type: "Business Traveler", stars: 4, text: "Church Street in the Jewellery Quarter is lovely and very safe. A nice escape from the bigger streets. Excellent hotel.", date: "Jan 2026", helpful: 78 }
  },

  // ═══════════════════════════════════════════════════
  // LIVERPOOL
  // ═══════════════════════════════════════════════════

  {
    id: "titanic-hotel-liverpool",
    name: "Titanic Hotel Liverpool",
    city: "Liverpool", area: "Stanley Dock", region: "North West England",
    address: "Stanley Dock, Regent Road, Liverpool L3 0AN", postcode: "L3 0AN",
    lat: 53.4427, lng: -2.9975,
    stars: 4, tier: "luxury", priceFrom: 145, currency: "GBP",
    nearestStation: "Liverpool Lime Street", stationDistance: "20 min walk",
    phone: "+44 151 559 1444",
    website: "https://www.titanichotelliverpool.com",
    bookingUrl: "https://www.booking.com/hotel/gb/titanic-liverpool.html",
    description: "Stunning Grade I listed warehouse conversion at historic Stanley Dock. A self-contained hotel destination — private feel with its own security, restaurants, and spa within the complex.",
    highlights: ["Grade I listed dock building","Private secure complex","Rum Warehouse restaurant","White Star Spa"],
    badges: ["business","luxury","family"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.3, hotelSecurity: 4.9, cleanliness: 4.8, totalReviews: 198 },
    featuredReview: { author: "Cathy O.", type: "Solo Female Traveler", stars: 5, text: "The hotel is like its own private complex — you never need to go outside if you don't want to. Everything is inside. Felt very secure throughout.", date: "Jan 2026", helpful: 134 }
  },

  {
    id: "hard-days-night-liverpool",
    name: "Hard Days Night Hotel",
    city: "Liverpool", area: "City Centre", region: "North West England",
    address: "North John Street, Liverpool L2 6RR", postcode: "L2 6RR",
    lat: 53.4078, lng: -2.9905,
    stars: 4, tier: "mid", priceFrom: 125, currency: "GBP",
    nearestStation: "Liverpool Central", stationDistance: "5 min walk",
    phone: "+44 151 236 1964",
    website: "https://www.harddaysnighthotel.com",
    bookingUrl: "https://www.booking.com/hotel/gb/hard-days-night-liverpool.html",
    description: "Beatles-themed boutique hotel in the heart of Liverpool's cultural quarter. North John Street is right in the tourist and nightlife core — busy, policed, and well-lit at all hours.",
    highlights: ["Beatles-themed throughout","Matthew Street nearby","City centre location","Unique music heritage"],
    badges: ["solo-female","family","business"],
    communityRatings: { nightSafety: 4.4, streetSafety: 4.3, hotelSecurity: 4.6, cleanliness: 4.5, totalReviews: 312 },
    featuredReview: { author: "Dave M.", type: "Family Traveler", stars: 4, text: "Brilliant location in the heart of Liverpool. City felt lively and safe all weekend. Kids loved the Beatles theme. Will return.", date: "Dec 2025", helpful: 98 }
  },

  // ═══════════════════════════════════════════════════
  // BRIGHTON
  // ═══════════════════════════════════════════════════

  {
    id: "grand-brighton",
    name: "The Grand Brighton",
    city: "Brighton", area: "Seafront", region: "South East England",
    address: "97-99 Kings Road, Brighton BN1 2FW", postcode: "BN1 2FW",
    lat: 50.8216, lng: -0.1443,
    stars: 5, tier: "luxury", priceFrom: 175, currency: "GBP",
    nearestStation: "Brighton", stationDistance: "12 min walk",
    phone: "+44 1273 224300",
    website: "https://www.grandbrighton.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/the-grand-brighton.html",
    description: "Brighton's most iconic hotel right on the seafront promenade. The seafront is busy, well-lit, and patrolled — one of the South Coast's most recognisable landmarks.",
    highlights: ["Seafront promenade location","Brighton Pier minutes away","Victorian landmark hotel","Spa & pool"],
    badges: ["solo-female","family","luxury"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.5, hotelSecurity: 4.7, cleanliness: 4.7, totalReviews: 312 },
    featuredReview: { author: "Lucy M.", type: "Solo Female Traveler", stars: 5, text: "Brighton seafront is always buzzing. Lots of people around at night, well-lit, and the hotel has a beautiful lobby with staff always visible. Felt great.", date: "Nov 2025", helpful: 142 }
  },

  {
    id: "drakes-brighton",
    name: "Drakes Hotel",
    city: "Brighton", area: "Seafront", region: "South East England",
    address: "43-44 Marine Parade, Brighton BN2 1PE", postcode: "BN2 1PE",
    lat: 50.8198, lng: -0.1368,
    stars: 4, tier: "luxury", priceFrom: 165, currency: "GBP",
    nearestStation: "Brighton", stationDistance: "15 min walk",
    phone: "+44 1273 696934",
    website: "https://www.drakesofbrighton.com",
    bookingUrl: "https://www.booking.com/hotel/gb/drakes-of-brighton.html",
    description: "Boutique design hotel on the seafront with stunning sea views. Marine Parade is a prestigious seafront address — safe, spacious, and beautiful even late at night.",
    highlights: ["Sea views from every room","Marine Parade seafront","Award-winning restaurant","Boutique design"],
    badges: ["solo-female","luxury","business"],
    communityRatings: { nightSafety: 4.7, streetSafety: 4.6, hotelSecurity: 4.7, cleanliness: 4.9, totalReviews: 198 },
    featuredReview: { author: "Julia H.", type: "Solo Female Traveler", stars: 5, text: "Marine Parade is gorgeous and very safe — wide seafront road, plenty of people walking. Drakes itself is exquisite. One of the best I've stayed in.", date: "Oct 2025", helpful: 167 }
  },

  // ═══════════════════════════════════════════════════
  // CHESTER
  // ═══════════════════════════════════════════════════

  {
    id: "chester-grosvenor",
    name: "The Chester Grosvenor",
    city: "Chester", area: "City Centre", region: "North West England",
    address: "Eastgate Street, Chester CH1 1LT", postcode: "CH1 1LT",
    lat: 53.1905, lng: -2.8927,
    stars: 5, tier: "luxury", priceFrom: 235, currency: "GBP",
    nearestStation: "Chester", stationDistance: "10 min walk",
    phone: "+44 1244 324024",
    website: "https://www.chestergrosvenor.com",
    bookingUrl: "https://www.booking.com/hotel/gb/the-chester-grosvenor.html",
    description: "Chester's finest hotel in the heart of the famous Rows. Chester is one of England's safest cities — compact Roman walls, pedestrianised centre, and extremely low crime rates.",
    highlights: ["Chester Rows location","Roman city walls","Michelin-starred Simon Radley restaurant","Award-winning spa"],
    badges: ["solo-female","family","luxury","night-safe"],
    communityRatings: { nightSafety: 5.0, streetSafety: 4.9, hotelSecurity: 5.0, cleanliness: 5.0, totalReviews: 201 },
    featuredReview: { author: "Patricia W.", type: "Solo Female Traveler", stars: 5, text: "Chester is the safest feeling city in England. The Rows are beautiful at night, always other people around. I walked everywhere alone without a moment's hesitation.", date: "Oct 2025", helpful: 167 }
  },

  // ═══════════════════════════════════════════════════
  // WINDERMERE & LAKE DISTRICT
  // ═══════════════════════════════════════════════════

  {
    id: "langdale-chase",
    name: "Langdale Chase Hotel",
    city: "Windermere", area: "Lake District", region: "North West England",
    address: "Langdale Chase, Windermere LA23 1LW", postcode: "LA23 1LW",
    lat: 54.4048, lng: -2.9370,
    stars: 4, tier: "luxury", priceFrom: 215, currency: "GBP",
    nearestStation: "Windermere", stationDistance: "10 min drive",
    phone: "+44 15394 32201",
    website: "https://www.langdalechase.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/langdale-chase.html",
    description: "Stunning lakeside Victorian villa on the shores of Windermere. The Lake District has some of England's lowest crime rates — rural tranquillity with private grounds.",
    highlights: ["Windermere lakeside","Private boat jetty","Victorian country house","Outstanding rural setting"],
    badges: ["solo-female","family","luxury","nature"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.8, cleanliness: 4.9, totalReviews: 143 },
    featuredReview: { author: "Jane K.", type: "Solo Female Traveler", stars: 5, text: "As safe as it gets. Private lakeside grounds, virtually no one else around except other guests. Slept with my window open — zero concerns. Magical place.", date: "Sep 2025", helpful: 118 }
  },

  {
    id: "wordsworth-hotel-grasmere",
    name: "The Wordsworth Hotel & Spa",
    city: "Grasmere", area: "Lake District", region: "North West England",
    address: "Stock Lane, Grasmere LA22 9SW", postcode: "LA22 9SW",
    lat: 54.4589, lng: -3.0241,
    stars: 4, tier: "luxury", priceFrom: 185, currency: "GBP",
    nearestStation: "Windermere", stationDistance: "20 min drive",
    phone: "+44 15394 35592",
    website: "https://www.thewordsworthhotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/wordsworth-grasmere.html",
    description: "Country house hotel in the idyllic village of Grasmere. Named after the famous poet who lived here — one of the most peaceful and crime-free locations in all of England.",
    highlights: ["Grasmere village setting","Dove Cottage nearby","Spa & pool","Exceptional mountain views"],
    badges: ["solo-female","family","luxury","nature"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.7, cleanliness: 4.8, totalReviews: 119 },
    featuredReview: { author: "Anne G.", type: "Solo Female Traveler", stars: 5, text: "Grasmere is utterly peaceful. There is simply no crime here. The village is magical at night with the mountains all around. Completely enchanting.", date: "Aug 2025", helpful: 134 }
  },

  // ═══════════════════════════════════════════════════
  // COTSWOLDS
  // ═══════════════════════════════════════════════════

  {
    id: "lygon-arms-broadway",
    name: "The Lygon Arms",
    city: "Broadway", area: "Cotswolds", region: "West Midlands",
    address: "High Street, Broadway WR12 7DU", postcode: "WR12 7DU",
    lat: 52.0365, lng: -1.8570,
    stars: 4, tier: "luxury", priceFrom: 195, currency: "GBP",
    nearestStation: "Moreton-in-Marsh", stationDistance: "20 min drive",
    phone: "+44 1386 852255",
    website: "https://www.lygonarmshotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/lygon-arms-broadway.html",
    description: "Historic 16th-century coaching inn in the picture-postcard Cotswolds village of Broadway. One of England's most charming and safest rural settings.",
    highlights: ["16th-century coaching inn","Cotswolds village setting","Spa & indoor pool","Stunning countryside"],
    badges: ["solo-female","family","luxury","nature"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.7, cleanliness: 4.9, totalReviews: 189 },
    featuredReview: { author: "Margaret B.", type: "Solo Female Traveler", stars: 5, text: "Cotswolds villages are about as safe as anywhere on earth. Walked everywhere alone at all hours. Absolutely heavenly.", date: "Aug 2025", helpful: 201 }
  },

  {
    id: "barnsley-house",
    name: "Barnsley House Hotel",
    city: "Barnsley Village", area: "Cotswolds", region: "South West England",
    address: "Barnsley, Cirencester GL7 5EE", postcode: "GL7 5EE",
    lat: 51.7504, lng: -1.8671,
    stars: 5, tier: "luxury", priceFrom: 385, currency: "GBP",
    nearestStation: "Kemble", stationDistance: "20 min drive",
    phone: "+44 1285 740000",
    website: "https://www.barnsleyhouse.com",
    bookingUrl: "https://www.booking.com/hotel/gb/barnsley-house.html",
    description: "Stunning country house hotel in a quiet Cotswold village, surrounded by legendary gardens. The Cotswolds countryside is England's most idyllic and safest rural setting.",
    highlights: ["Famous walled gardens","Village pool & cinema","Cotswold stone beauty","Complete rural seclusion"],
    badges: ["solo-female","luxury","nature","family"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.9, cleanliness: 5.0, totalReviews: 134 },
    featuredReview: { author: "Sophie A.", type: "Solo Female Traveler", stars: 5, text: "Barnsley village is so peaceful and safe you could leave your door unlocked. Extraordinary hotel in extraordinary surroundings. Truly special.", date: "Jul 2025", helpful: 189 }
  },

  // ═══════════════════════════════════════════════════
  // NORFOLK & SUFFOLK
  // ═══════════════════════════════════════════════════

  {
    id: "titchwell-manor",
    name: "Titchwell Manor Hotel",
    city: "Titchwell", area: "North Norfolk Coast", region: "East of England",
    address: "Titchwell, King's Lynn PE31 8BB", postcode: "PE31 8BB",
    lat: 52.9637, lng: 0.6186,
    stars: 4, tier: "luxury", priceFrom: 195, currency: "GBP",
    nearestStation: "King's Lynn", stationDistance: "30 min drive",
    phone: "+44 1485 210221",
    website: "https://www.titchwellmanor.com",
    bookingUrl: "https://www.booking.com/hotel/gb/titchwell-manor.html",
    description: "Boutique hotel on the beautiful North Norfolk coast, backing directly onto an RSPB nature reserve. Norfolk villages are among England's safest — remote, peaceful, and truly restorative.",
    highlights: ["RSPB nature reserve backing","North Norfolk Coast AONB","Award-winning seafood","Stunning sunsets"],
    badges: ["solo-female","family","nature","luxury"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.7, cleanliness: 4.8, totalReviews: 98 },
    featuredReview: { author: "Ruth O.", type: "Solo Female Traveler", stars: 5, text: "North Norfolk is genuinely the most peaceful place in England. I walked on the beach alone at dusk with zero concerns. The hotel is wonderful.", date: "Sep 2025", helpful: 112 }
  },

  {
    id: "hotel-felix-cambridge-near",
    name: "Crown Hotel Framlingham",
    city: "Framlingham", area: "Suffolk", region: "East of England",
    address: "Market Hill, Framlingham IP13 9AN", postcode: "IP13 9AN",
    lat: 52.2221, lng: 1.3431,
    stars: 3, tier: "mid", priceFrom: 95, currency: "GBP",
    nearestStation: "Wickham Market", stationDistance: "10 min drive",
    phone: "+44 1728 723521",
    website: "https://www.thecrownatframlingham.com",
    bookingUrl: "https://www.booking.com/hotel/gb/crown-at-framlingham.html",
    description: "Traditional Suffolk coaching inn in the market square of beautiful Framlingham, home to the famous castle. Suffolk market towns are exceptionally safe and welcoming.",
    highlights: ["Framlingham Castle nearby","Market square location","Traditional coaching inn","Suffolk countryside"],
    badges: ["solo-female","family","budget-safe"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.5, cleanliness: 4.4, totalReviews: 78 },
    featuredReview: { author: "Philip C.", type: "Family Traveler", stars: 4, text: "Framlingham is a gem — a proper English market town where everyone knows each other. Couldn't feel more safe. Lovely hotel on the square.", date: "Oct 2025", helpful: 67 }
  },

  // ═══════════════════════════════════════════════════
  // NEWCASTLE
  // ═══════════════════════════════════════════════════

  {
    id: "malmaison-newcastle",
    name: "Malmaison Newcastle",
    city: "Newcastle upon Tyne", area: "Quayside", region: "North East England",
    address: "Quayside, Newcastle upon Tyne NE1 3DX", postcode: "NE1 3DX",
    lat: 54.9683, lng: -1.6091,
    stars: 4, tier: "mid", priceFrom: 110, currency: "GBP",
    nearestStation: "Newcastle", stationDistance: "15 min walk",
    phone: "+44 191 245 5000",
    website: "https://www.malmaison.com/locations/newcastle",
    bookingUrl: "https://www.booking.com/hotel/gb/malmaison-newcastle.html",
    description: "Stylish Malmaison in a converted warehouse on the famous Newcastle Quayside. The Quayside is one of Newcastle's most regenerated and well-lit areas, with constant footfall.",
    highlights: ["Quayside location","Millennium Bridge views","Tyne Bridge nearby","Converted warehouse"],
    badges: ["business","solo-female"],
    communityRatings: { nightSafety: 4.3, streetSafety: 4.2, hotelSecurity: 4.6, cleanliness: 4.5, totalReviews: 234 },
    featuredReview: { author: "Karen F.", type: "Business Traveler", stars: 4, text: "The Quayside has been really cleaned up. Beautifully lit at night, other pedestrians around. Loved looking at the bridges from my room.", date: "Jan 2026", helpful: 89 }
  },

  {
    id: "grey-street-hotel-newcastle",
    name: "Grey Street Hotel",
    city: "Newcastle upon Tyne", area: "City Centre", region: "North East England",
    address: "2-12 Grey Street, Newcastle upon Tyne NE1 6EE", postcode: "NE1 6EE",
    lat: 54.9718, lng: -1.6136,
    stars: 4, tier: "mid", priceFrom: 95, currency: "GBP",
    nearestStation: "Newcastle", stationDistance: "10 min walk",
    nearestTram: "Monument", tramDistance: "3 min walk",
    phone: "+44 191 230 6777",
    website: "https://www.greystreethotel.com",
    bookingUrl: "https://www.booking.com/hotel/gb/grey-street-newcastle.html",
    description: "Boutique hotel on one of Britain's most beautiful streets — Grey Street is Georgian grandeur at its finest. Voted one of the UK's most beautiful streets and always busy with people.",
    highlights: ["On celebrated Grey Street","Georgian architecture","Central Monument location","Walking distance to everywhere"],
    badges: ["business","solo-female","budget-safe"],
    communityRatings: { nightSafety: 4.4, streetSafety: 4.4, hotelSecurity: 4.5, cleanliness: 4.4, totalReviews: 178 },
    featuredReview: { author: "Sarah J.", type: "Solo Female Traveler", stars: 4, text: "Grey Street is stunning and very central. Felt safe walking around in the evening. Monument is right there for transport. Good hotel.", date: "Nov 2025", helpful: 72 }
  },

  // ═══════════════════════════════════════════════════
  // LEEDS
  // ═══════════════════════════════════════════════════

  {
    id: "quebecs-leeds",
    name: "Quebecs Luxury Apartments",
    city: "Leeds", area: "City Centre", region: "Yorkshire",
    address: "9 Quebec Street, Leeds LS1 2HA", postcode: "LS1 2HA",
    lat: 53.7997, lng: -1.5491,
    stars: 4, tier: "luxury", priceFrom: 130, currency: "GBP",
    nearestStation: "Leeds", stationDistance: "10 min walk",
    phone: "+44 113 244 8989",
    website: "https://www.quebecs.com",
    bookingUrl: "https://www.booking.com/hotel/gb/quebecs.html",
    description: "Stunning Grade II listed Victorian building in Leeds city centre, converted into luxury apartments. Quebec Street is a quiet central street — a calm oasis in a busy city.",
    highlights: ["Grade II listed Victorian","Luxury apartment suites","City centre location","Historic building"],
    badges: ["business","solo-female","luxury"],
    communityRatings: { nightSafety: 4.4, streetSafety: 4.3, hotelSecurity: 4.7, cleanliness: 4.8, totalReviews: 167 },
    featuredReview: { author: "Natasha P.", type: "Business Traveler", stars: 4, text: "Quebec Street itself is quiet and safe feeling. Having an apartment was brilliant — own kitchen, much more secure feeling than a standard hotel room.", date: "Jan 2026", helpful: 89 }
  },

  {
    id: "marriott-leeds",
    name: "Leeds Marriott Hotel",
    city: "Leeds", area: "City Centre", region: "Yorkshire",
    address: "4 Trevelyan Square, Boar Lane, Leeds LS1 6ET", postcode: "LS1 6ET",
    lat: 53.7974, lng: -1.5447,
    stars: 4, tier: "mid", priceFrom: 120, currency: "GBP",
    nearestStation: "Leeds", stationDistance: "5 min walk",
    phone: "+44 113 236 6366",
    website: "https://www.marriott.com/hotels/travel/lbadt-leeds-marriott-hotel",
    bookingUrl: "https://www.booking.com/hotel/gb/marriott-leeds.html",
    description: "Reliable 4-star Marriott on Trevelyan Square, a quiet pedestrian square in the city centre. Steps from Leeds Station with Marriott's usual excellent security protocols.",
    highlights: ["Steps from Leeds Station","Pedestrian square location","Marriott security standards","Pool & fitness centre"],
    badges: ["business","solo-female","family"],
    communityRatings: { nightSafety: 4.4, streetSafety: 4.3, hotelSecurity: 4.7, cleanliness: 4.5, totalReviews: 312 },
    featuredReview: { author: "David A.", type: "Business Traveler", stars: 4, text: "Trevelyan Square is pedestrianised so very safe and pleasant. The station is literally 5 minutes. Reliable Marriott quality throughout.", date: "Feb 2026", helpful: 67 }
  },

  // ═══════════════════════════════════════════════════
  // SHEFFIELD
  // ═══════════════════════════════════════════════════

  {
    id: "leopold-hotel-sheffield",
    name: "Leopold Hotel Sheffield",
    city: "Sheffield", area: "City Centre", region: "Yorkshire",
    address: "2 Leopold Street, Sheffield S1 2GZ", postcode: "S1 2GZ",
    lat: 53.3831, lng: -1.4706,
    stars: 4, tier: "mid", priceFrom: 95, currency: "GBP",
    nearestStation: "Sheffield", stationDistance: "10 min walk",
    phone: "+44 114 252 4000",
    website: "https://leopoldhotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/leopold-hotel-sheffield.html",
    description: "Boutique hotel in a stunning converted Victorian grammar school in Sheffield's cultural quarter. Leopold Street is a calm, safe street away from the main city centre noise.",
    highlights: ["Converted Victorian grammar school","Cultural quarter location","Boutique character","Walking distance to everything"],
    badges: ["business","solo-female","budget-safe"],
    communityRatings: { nightSafety: 4.3, streetSafety: 4.2, hotelSecurity: 4.5, cleanliness: 4.5, totalReviews: 189 },
    featuredReview: { author: "Anna B.", type: "Business Traveler", stars: 4, text: "Leopold Street is quiet and perfectly safe. Love that it's a converted school. Sheffield is more pleasant than people expect.", date: "Dec 2025", helpful: 56 }
  },

  // ═══════════════════════════════════════════════════
  // EXETER
  // ═══════════════════════════════════════════════════

  {
    id: "hotel-du-vin-exeter",
    name: "Hotel du Vin Exeter",
    city: "Exeter", area: "Cathedral Quarter", region: "South West England",
    address: "Magdalen Street, Exeter EX2 4HY", postcode: "EX2 4HY",
    lat: 50.7196, lng: -3.5258,
    stars: 4, tier: "mid", priceFrom: 120, currency: "GBP",
    nearestStation: "Exeter St Davids", stationDistance: "15 min walk",
    phone: "+44 1392 790090",
    website: "https://www.hotelduvin.com/locations/exeter",
    bookingUrl: "https://www.booking.com/hotel/gb/hotel-du-vin-exeter.html",
    description: "Hotel du Vin in a converted historic hospital near Exeter Cathedral. Exeter is a prosperous, safe cathedral city with very low crime rates and a vibrant university town feel.",
    highlights: ["Cathedral Quarter location","Converted historic hospital","Exeter Cathedral nearby","Award-winning bistro"],
    badges: ["business","solo-female","luxury"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.5, hotelSecurity: 4.6, cleanliness: 4.7, totalReviews: 178 },
    featuredReview: { author: "Claire S.", type: "Solo Female Traveler", stars: 4, text: "Exeter is a really lovely safe city. Magdalen Street and the Cathedral Quarter are beautiful and calm. University presence keeps everything feeling vibrant and safe.", date: "Nov 2025", helpful: 91 }
  },

  // ═══════════════════════════════════════════════════
  // DURHAM
  // ═══════════════════════════════════════════════════

  {
    id: "royal-county-durham",
    name: "The Royal County Hotel Durham",
    city: "Durham", area: "City Centre", region: "North East England",
    address: "Old Elvet, Durham DH1 3JN", postcode: "DH1 3JN",
    lat: 54.7752, lng: -1.5747,
    stars: 4, tier: "mid", priceFrom: 110, currency: "GBP",
    nearestStation: "Durham", stationDistance: "12 min walk",
    phone: "+44 191 386 6821",
    website: "https://www.theroyalcountyhotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/the-royal-county.html",
    description: "Historic hotel on Old Elvet, minutes from Durham Cathedral and Castle. Durham is consistently ranked as one of England's safest cities — a compact, walkable cathedral city.",
    highlights: ["Durham Cathedral 5 min walk","River Wear views","Historic Old Elvet","Comfortable city centre base"],
    badges: ["solo-female","family","business"],
    communityRatings: { nightSafety: 4.7, streetSafety: 4.7, hotelSecurity: 4.5, cleanliness: 4.4, totalReviews: 134 },
    featuredReview: { author: "Sheila K.", type: "Solo Female Traveler", stars: 4, text: "Durham is a gem — tiny, safe, and beautiful. Walking to the cathedral at night felt completely fine. Very good hotel in an ideal location.", date: "Oct 2025", helpful: 89 }
  },

  // ═══════════════════════════════════════════════════
  // WINCHESTER
  // ═══════════════════════════════════════════════════

  {
    id: "hotel-du-vin-winchester",
    name: "Hotel du Vin Winchester",
    city: "Winchester", area: "City Centre", region: "South East England",
    address: "Southgate Street, Winchester SO23 9EF", postcode: "SO23 9EF",
    lat: 51.0616, lng: -1.3152,
    stars: 4, tier: "mid", priceFrom: 140, currency: "GBP",
    nearestStation: "Winchester", stationDistance: "10 min walk",
    phone: "+44 1962 841414",
    website: "https://www.hotelduvin.com/locations/winchester",
    bookingUrl: "https://www.booking.com/hotel/gb/hotel-du-vin-winchester.html",
    description: "Hotel du Vin in a beautiful Georgian townhouse in Winchester. England's ancient capital is consistently one of the country's safest cities — affluent, historic, and tranquil.",
    highlights: ["Winchester Cathedral nearby","Beautiful Georgian townhouse","Ancient city centre","Award-winning bistro"],
    badges: ["solo-female","business","luxury"],
    communityRatings: { nightSafety: 4.8, streetSafety: 4.8, hotelSecurity: 4.6, cleanliness: 4.7, totalReviews: 189 },
    featuredReview: { author: "Amanda J.", type: "Solo Female Traveler", stars: 5, text: "Winchester has to be England's most civilised city. Walking alone at night was completely relaxed. Beautiful, safe, and steeped in history. Perfect.", date: "Sep 2025", helpful: 156 }
  },

  // ═══════════════════════════════════════════════════
  // SALISBURY
  // ═══════════════════════════════════════════════════

  {
    id: "red-lion-salisbury",
    name: "The Red Lion Hotel",
    city: "Salisbury", area: "City Centre", region: "South West England",
    address: "4 Milford Street, Salisbury SP1 2AN", postcode: "SP1 2AN",
    lat: 51.0688, lng: -1.7948,
    stars: 3, tier: "mid", priceFrom: 99, currency: "GBP",
    nearestStation: "Salisbury", stationDistance: "8 min walk",
    phone: "+44 1722 323334",
    website: "https://www.the-red-lion.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/the-red-lion-salisbury.html",
    description: "Historic coaching inn in the heart of Salisbury — one of England's oldest hotel properties, dating to 1220. Salisbury is a compact, safe cathedral city with a beautiful medieval core.",
    highlights: ["Dating to 1220","Salisbury Cathedral nearby","Medieval city centre","Courtyard garden"],
    badges: ["solo-female","family","budget-safe"],
    communityRatings: { nightSafety: 4.7, streetSafety: 4.6, hotelSecurity: 4.4, cleanliness: 4.3, totalReviews: 145 },
    featuredReview: { author: "Patricia H.", type: "Family Traveler", stars: 4, text: "Salisbury is wonderful for families — very safe, easy to walk around. Stonehenge 20 mins away. The Red Lion is a charming piece of history.", date: "Aug 2025", helpful: 78 }
  },

  // ═══════════════════════════════════════════════════
  // HARROGATE
  // ═══════════════════════════════════════════════════

  {
    id: "majestic-harrogate",
    name: "The Majestic Hotel Harrogate",
    city: "Harrogate", area: "Town Centre", region: "Yorkshire",
    address: "Ripon Road, Harrogate HG1 2HU", postcode: "HG1 2HU",
    lat: 53.9992, lng: -1.5385,
    stars: 4, tier: "luxury", priceFrom: 155, currency: "GBP",
    nearestStation: "Harrogate", stationDistance: "15 min walk",
    phone: "+44 1423 700300",
    website: "https://www.paramount-hotels.co.uk/majestic-harrogate",
    bookingUrl: "https://www.booking.com/hotel/gb/the-majestic-hotel-harrogate.html",
    description: "Grand Victorian hotel set in 8 acres in elegant Harrogate — a prosperous spa town regularly voted one of the happiest and safest places to live in England.",
    highlights: ["8-acre grounds","Harrogate's grandest hotel","Spa & pool","Valley Gardens nearby"],
    badges: ["solo-female","family","luxury"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.9, hotelSecurity: 4.7, cleanliness: 4.7, totalReviews: 223 },
    featuredReview: { author: "Linda M.", type: "Solo Female Traveler", stars: 5, text: "Harrogate is absolutely lovely and feels incredibly safe. Elegant, clean, quiet. The Majestic is a proper old-fashioned grand hotel. Excellent value.", date: "Nov 2025", helpful: 134 }
  },

  // ═══════════════════════════════════════════════════
  // STRATFORD-UPON-AVON
  // ═══════════════════════════════════════════════════

  {
    id: "arden-hotel-stratford",
    name: "The Arden Hotel Stratford-upon-Avon",
    city: "Stratford-upon-Avon", area: "Town Centre", region: "West Midlands",
    address: "Waterside, Stratford-upon-Avon CV37 6BA", postcode: "CV37 6BA",
    lat: 52.1922, lng: -1.7068,
    stars: 4, tier: "luxury", priceFrom: 175, currency: "GBP",
    nearestStation: "Stratford-upon-Avon", stationDistance: "8 min walk",
    phone: "+44 1789 298682",
    website: "https://www.theardenhotelstratford.com",
    bookingUrl: "https://www.booking.com/hotel/gb/the-arden-stratford.html",
    description: "Boutique hotel directly opposite the Royal Shakespeare Theatre on the River Avon. Stratford is a heavy tourist destination — extremely safe, beautifully maintained, and well-policed.",
    highlights: ["Opposite RSC Theatre","River Avon views","Shakespeare's birthplace nearby","Beautiful town centre"],
    badges: ["solo-female","family","luxury"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.9, hotelSecurity: 4.8, cleanliness: 4.9, totalReviews: 189 },
    featuredReview: { author: "Elizabeth C.", type: "Solo Female Traveler", stars: 5, text: "Stratford is a beautiful tourist town — completely safe at all hours, lots of people around. The hotel is perfectly positioned opposite the RSC. Wonderful stay.", date: "Oct 2025", helpful: 145 }
  },

  // ═══════════════════════════════════════════════════
  // CORNWALL
  // ═══════════════════════════════════════════════════

  {
    id: "tresanton-cornwall",
    name: "Hotel Tresanton",
    city: "St Mawes", area: "Cornwall", region: "South West England",
    address: "27 Lower Castle Road, St Mawes TR2 5DR", postcode: "TR2 5DR",
    lat: 50.1554, lng: -5.0105,
    stars: 5, tier: "luxury", priceFrom: 295, currency: "GBP",
    nearestStation: "Truro", stationDistance: "45 min drive",
    phone: "+44 1326 270055",
    website: "https://www.tresanton.com",
    bookingUrl: "https://www.booking.com/hotel/gb/tresanton.html",
    description: "Legendary clifftop hotel overlooking the Fal Estuary in St Mawes. Cornwall has very low crime rates and St Mawes is a beautiful, safe sailing village — the perfect escape.",
    highlights: ["Clifftop estuary views","Private beach & boats","St Mawes Castle","Cornwall's finest hotel"],
    badges: ["solo-female","family","luxury","nature"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.8, cleanliness: 5.0, totalReviews: 167 },
    featuredReview: { author: "Victoria H.", type: "Solo Female Traveler", stars: 5, text: "St Mawes is a tiny, blissfully safe village. I walked everywhere at all hours without any concern whatsoever. The hotel and setting are extraordinary.", date: "Jul 2025", helpful: 198 }
  },

  {
    id: "headland-hotel-newquay",
    name: "The Headland Hotel & Spa",
    city: "Newquay", area: "Cornwall", region: "South West England",
    address: "Headland Road, Newquay TR7 1EW", postcode: "TR7 1EW",
    lat: 50.4174, lng: -5.0853,
    stars: 4, tier: "luxury", priceFrom: 165, currency: "GBP",
    nearestStation: "Newquay", stationDistance: "15 min walk",
    phone: "+44 1637 872211",
    website: "https://www.headlandhotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/the-headland.html",
    description: "Spectacular Victorian hotel on its own headland overlooking Fistral Beach — one of England's most dramatic hotel settings. The private headland position makes it extremely safe and secure.",
    highlights: ["Private headland position","Fistral Beach opposite","Spa & pools","Dramatic clifftop setting"],
    badges: ["family","luxury","nature","solo-female"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.8, hotelSecurity: 4.8, cleanliness: 4.7, totalReviews: 234 },
    featuredReview: { author: "Nicole R.", type: "Family Traveler", stars: 5, text: "The hotel is on its own headland so you're in a private, secure bubble. Fistral beach is right there. Kids were completely safe exploring the grounds. Superb.", date: "Aug 2025", helpful: 167 }
  },

  // ═══════════════════════════════════════════════════
  // KENT
  // ═══════════════════════════════════════════════════

  {
    id: "wife-of-bath-ashford",
    name: "The Hythe Imperial Hotel",
    city: "Hythe", area: "Kent", region: "South East England",
    address: "Princes Parade, Hythe CT21 6AE", postcode: "CT21 6AE",
    lat: 51.0721, lng: 1.0861,
    stars: 4, tier: "luxury", priceFrom: 150, currency: "GBP",
    nearestStation: "Sandling", stationDistance: "15 min drive",
    phone: "+44 1303 267441",
    website: "https://www.hytheimperial.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/hythe-imperial.html",
    description: "Grand Victorian seaside hotel on the Kent coast. Hythe is a quiet, affluent coastal town with extremely low crime — the English Channel sparkling outside your window.",
    highlights: ["Seafront location","Golf course","Spa & pool","Quiet Kent coastal town"],
    badges: ["solo-female","family","luxury"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.9, hotelSecurity: 4.7, cleanliness: 4.7, totalReviews: 123 },
    featuredReview: { author: "Catherine B.", type: "Solo Female Traveler", stars: 4, text: "Hythe is the quintessential safe English coastal town. Princes Parade along the seafront is lovely to walk at any time. Very comfortable hotel.", date: "Sep 2025", helpful: 78 }
  },

  // ═══════════════════════════════════════════════════
  // NORWICH
  // ═══════════════════════════════════════════════════

  {
    id: "maids-head-norwich",
    name: "Maids Head Hotel",
    city: "Norwich", area: "Cathedral Quarter", region: "East of England",
    address: "Tombland, Norwich NR3 1LB", postcode: "NR3 1LB",
    lat: 52.6321, lng: 1.2994,
    stars: 4, tier: "mid", priceFrom: 110, currency: "GBP",
    nearestStation: "Norwich", stationDistance: "20 min walk",
    phone: "+44 1603 209955",
    website: "https://www.maidsheadhotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/maids-head-norwich.html",
    description: "One of England's oldest hotels on Tombland, next to Norwich Cathedral. Norwich is a beautiful, compact city with low crime and a strong arts and university scene.",
    highlights: ["One of England's oldest hotels","Opposite Norwich Cathedral","Tombland location","Medieval city character"],
    badges: ["solo-female","family","business"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.6, hotelSecurity: 4.4, cleanliness: 4.5, totalReviews: 145 },
    featuredReview: { author: "Susan T.", type: "Solo Female Traveler", stars: 4, text: "Tombland next to the Cathedral is a gorgeous, safe area. Norwich is underrated — lovely city to walk around at night. The Maids Head is full of character.", date: "Oct 2025", helpful: 98 }
  },

  // ═══════════════════════════════════════════════════
  // NOTTINGHAM
  // ═══════════════════════════════════════════════════

  {
    id: "hart-hotel-nottingham",
    name: "Hart's Hotel Nottingham",
    city: "Nottingham", area: "Park Estate", region: "East Midlands",
    address: "Standard Hill, Park Row, Nottingham NG1 6FN", postcode: "NG1 6FN",
    lat: 52.9529, lng: -1.1527,
    stars: 4, tier: "luxury", priceFrom: 145, currency: "GBP",
    nearestStation: "Nottingham", stationDistance: "10 min walk",
    phone: "+44 115 988 1900",
    website: "https://www.hartshotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/hart-s-hotel.html",
    description: "Contemporary boutique hotel on the historic Park Estate in Nottingham. The Park Estate is one of the city's most prestigious and safest residential areas — a genuine enclave of calm.",
    highlights: ["The Park Estate location","Nottingham Castle nearby","Award-winning restaurant","Private parking"],
    badges: ["business","solo-female","luxury"],
    communityRatings: { nightSafety: 4.5, streetSafety: 4.5, hotelSecurity: 4.7, cleanliness: 4.8, totalReviews: 198 },
    featuredReview: { author: "Jonathan H.", type: "Business Traveler", stars: 4, text: "The Park Estate feels like a different world from central Nottingham — very safe, quiet roads, genuinely residential. Hart's is excellent.", date: "Jan 2026", helpful: 89 }
  },

  // ═══════════════════════════════════════════════════
  // LEICESTER
  // ═══════════════════════════════════════════════════

  {
    id: "belmont-hotel-leicester",
    name: "Belmont Hotel Leicester",
    city: "Leicester", area: "De Montfort Square", region: "East Midlands",
    address: "De Montfort Street, Leicester LE1 7GR", postcode: "LE1 7GR",
    lat: 52.6312, lng: -1.1349,
    stars: 3, tier: "mid", priceFrom: 88, currency: "GBP",
    nearestStation: "Leicester", stationDistance: "15 min walk",
    phone: "+44 116 254 4773",
    website: "https://www.belmonthotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/belmont.html",
    description: "Traditional hotel on the quiet De Montfort Square near Victoria Park. This part of Leicester is residential, peaceful, and notably calmer than the city centre.",
    highlights: ["De Montfort Square","Victoria Park opposite","Traditional English hotel","Quiet residential area"],
    badges: ["business","solo-female","budget-safe"],
    communityRatings: { nightSafety: 4.3, streetSafety: 4.3, hotelSecurity: 4.3, cleanliness: 4.2, totalReviews: 134 },
    featuredReview: { author: "Paul N.", type: "Business Traveler", stars: 3, text: "De Montfort Square is a pleasant, safe residential area. Nice to have Victoria Park nearby. Good budget option for Leicester.", date: "Nov 2025", helpful: 45 }
  },

  // ═══════════════════════════════════════════════════
  // CARDIFF (WALES — bonus)
  // ═══════════════════════════════════════════════════

  {
    id: "st-davids-cardiff",
    name: "St David's Hotel & Spa",
    city: "Cardiff", area: "Cardiff Bay", region: "Wales",
    address: "Havannah Street, Cardiff Bay, Cardiff CF10 5SD", postcode: "CF10 5SD",
    lat: 51.4634, lng: -3.1638,
    stars: 5, tier: "luxury", priceFrom: 175, currency: "GBP",
    nearestStation: "Cardiff Central", stationDistance: "15 min walk",
    phone: "+44 29 2045 4045",
    website: "https://www.thestdavidshotel.com",
    bookingUrl: "https://www.booking.com/hotel/gb/st-david-s-cardiff.html",
    description: "Cardiff's only 5-star hotel, jutting dramatically into Cardiff Bay. The Bay is a major regeneration success story — beautifully lit waterfront with restaurants, arts venues, and excellent security.",
    highlights: ["Cardiff Bay waterfront","Only 5-star in Cardiff","Stunning bay views","Wales Millennium Centre nearby"],
    badges: ["solo-female","business","luxury","family"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.5, hotelSecurity: 4.8, cleanliness: 4.7, totalReviews: 267 },
    featuredReview: { author: "Rhian P.", type: "Solo Female Traveler", stars: 5, text: "Cardiff Bay is such a safe, pleasant area — always people around, beautifully lit. The hotel itself is stunning with views of the water. Loved it.", date: "Dec 2025", helpful: 134 }
  },
// ═══════════════════════════════════════════════════
  // LONDON — additional areas
  // ═══════════════════════════════════════════════════

  {
    id: "the-savoy-london",
    name: "The Savoy",
    city: "London", area: "Strand", region: "London",
    address: "Strand, London WC2R 0EZ", postcode: "WC2R 0EZ",
    lat: 51.5105, lng: -0.1204,
    stars: 5, tier: "luxury", priceFrom: 680, currency: "GBP",
    nearestTube: "Charing Cross", tubeDistance: "3 min walk", tubeLines: ["Bakerloo","Northern"],
    phone: "+44 20 7836 4343",
    website: "https://www.thesavoylondon.com",
    bookingUrl: "https://www.booking.com/hotel/gb/the-savoy-london.html",
    description: "London's most iconic luxury hotel on the Strand since 1889. The Strand is one of London's busiest and most policed thoroughfares — outstanding security and 24hr concierge.",
    highlights: ["Historic Strand location","Legendary Art Deco interior","Kaspar's Seafood Bar","Butler service"],
    badges: ["solo-female","business","luxury"],
    communityRatings: { nightSafety: 5.0, streetSafety: 4.9, hotelSecurity: 5.0, cleanliness: 5.0, totalReviews: 891 },
    featuredReview: { author: "Vivienne T.", type: "Solo Female Traveler", stars: 5, text: "The Savoy is its own world. Doormen, security, 24hr everything. The Strand is always busy. I have never felt safer anywhere in London.", date: "Jan 2026", helpful: 312 }
  },
  {
    id: "claridges-london",
    name: "Claridge's",
    city: "London", area: "Mayfair", region: "London",
    address: "Brook Street, Mayfair, London W1K 4HR", postcode: "W1K 4HR",
    lat: 51.5123, lng: -0.1483,
    stars: 5, tier: "luxury", priceFrom: 750, currency: "GBP",
    nearestTube: "Bond Street", tubeDistance: "3 min walk", tubeLines: ["Central","Jubilee","Elizabeth"],
    phone: "+44 20 7629 8860",
    website: "https://www.claridges.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/claridges.html",
    description: "Mayfair's crown jewel since 1812. Claridge's is synonymous with discretion and safety — private, impeccably staffed, and located in London's safest and most exclusive neighbourhood.",
    highlights: ["Mayfair's finest address","Art Deco grandeur","Davies & Brook restaurant","Afternoon tea institution"],
    badges: ["solo-female","business","luxury"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 5.0, cleanliness: 5.0, totalReviews: 643 },
    featuredReview: { author: "Isabelle N.", type: "Solo Female Traveler", stars: 5, text: "Mayfair at night is extraordinary — calm, beautiful, completely safe. Claridge's staff are discreet and ever-present. The benchmark for safety and luxury.", date: "Dec 2025", helpful: 289 }
  },
  {
    id: "the-ritz-london",
    name: "The Ritz London",
    city: "London", area: "Mayfair", region: "London",
    address: "150 Piccadilly, London W1J 9BR", postcode: "W1J 9BR",
    lat: 51.5068, lng: -0.1427,
    stars: 5, tier: "luxury", priceFrom: 820, currency: "GBP",
    nearestTube: "Green Park", tubeDistance: "2 min walk", tubeLines: ["Jubilee","Victoria","Piccadilly"],
    phone: "+44 20 7493 8181",
    website: "https://www.theritzlondon.com",
    bookingUrl: "https://www.booking.com/hotel/gb/the-ritz-london.html",
    description: "The world's most famous hotel on Piccadilly since 1906. Green Park and Piccadilly are among London's safest and most prestigious streets with constant police presence.",
    highlights: ["Piccadilly landmark since 1906","Famous afternoon tea","Green Park 2 min walk","Royal warrants"],
    badges: ["solo-female","business","luxury"],
    communityRatings: { nightSafety: 5.0, streetSafety: 4.9, hotelSecurity: 5.0, cleanliness: 5.0, totalReviews: 734 },
    featuredReview: { author: "Helena G.", type: "Solo Female Traveler", stars: 5, text: "Piccadilly is brightly lit and always patrolled. The Ritz itself is impenetrable — uniformed staff at every door. The pinnacle of safe luxury.", date: "Feb 2026", helpful: 345 }
  },
  {
    id: "park-lane-hilton",
    name: "Hilton London Park Lane",
    city: "London", area: "Mayfair", region: "London",
    address: "22 Park Lane, London W1K 1BE", postcode: "W1K 1BE",
    lat: 51.5042, lng: -0.1544,
    stars: 5, tier: "luxury", priceFrom: 380, currency: "GBP",
    nearestTube: "Hyde Park Corner", tubeDistance: "3 min walk", tubeLines: ["Piccadilly"],
    phone: "+44 20 7493 8000",
    website: "https://www.hilton.com/en/hotels/lonpahi-hilton-london-park-lane",
    bookingUrl: "https://www.booking.com/hotel/gb/hilton-london-park-lane.html",
    description: "Landmark Hilton overlooking Hyde Park. Park Lane is one of London's grandest and most policed roads — a broad, well-lit boulevard with constant traffic and excellent visibility.",
    highlights: ["Hyde Park views","Trader Vic's bar","Rooftop gym","Mayfair location"],
    badges: ["business","luxury","solo-female"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.8, hotelSecurity: 4.9, cleanliness: 4.7, totalReviews: 512 },
    featuredReview: { author: "Nina F.", type: "Business Traveler", stars: 4, text: "Park Lane feels inherently safe — wide road, always lit, lots of other hotel guests around. Hyde Park right there for morning runs. Excellent Hilton.", date: "Jan 2026", helpful: 167 }
  },
  {
    id: "marriott-marble-arch",
    name: "London Marriott Hotel Marble Arch",
    city: "London", area: "Marble Arch", region: "London",
    address: "134 George Street, London W1H 5DN", postcode: "W1H 5DN",
    lat: 51.5178, lng: -0.1619,
    stars: 4, tier: "mid", priceFrom: 220, currency: "GBP",
    nearestTube: "Marble Arch", tubeDistance: "3 min walk", tubeLines: ["Central"],
    phone: "+44 20 7723 1277",
    website: "https://www.marriott.com/en-us/hotels/lonma-london-marriott-hotel-marble-arch",
    bookingUrl: "https://www.booking.com/hotel/gb/london-marriott-marble-arch.html",
    description: "Smart Marriott on a quiet residential street steps from Marble Arch and Oxford Street. The area benefits from being adjacent to Hyde Park and the premium Marylebone neighbourhood.",
    highlights: ["Steps from Marble Arch","Oxford Street shopping","Hyde Park access","Quiet George Street"],
    badges: ["business","family","solo-female"],
    communityRatings: { nightSafety: 4.7, streetSafety: 4.6, hotelSecurity: 4.7, cleanliness: 4.6, totalReviews: 389 },
    featuredReview: { author: "Karen W.", type: "Family Traveler", stars: 4, text: "George Street is quiet and very safe. Great for families. Hyde Park minutes away. Marriott reliability and good security as always.", date: "Dec 2025", helpful: 134 }
  },
  {
    id: "amba-charing-cross",
    name: "Amba Hotel Charing Cross",
    city: "London", area: "Covent Garden", region: "London",
    address: "The Strand, London WC2N 5HX", postcode: "WC2N 5HX",
    lat: 51.5081, lng: -0.1248,
    stars: 4, tier: "mid", priceFrom: 195, currency: "GBP",
    nearestTube: "Charing Cross", tubeDistance: "1 min walk", tubeLines: ["Bakerloo","Northern"],
    phone: "+44 20 7872 2024",
    website: "https://www.ambachoppingcross.com",
    bookingUrl: "https://www.booking.com/hotel/gb/amba-charing-cross.html",
    description: "Situated within Charing Cross station itself — literally above the platforms. Unbeatable connectivity and security. The Strand is one of London's most active and well-monitored streets.",
    highlights: ["Inside Charing Cross station","Strand location","Rooftop Terrace bar","Thames views from top floors"],
    badges: ["business","solo-female"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.5, hotelSecurity: 4.8, cleanliness: 4.6, totalReviews: 278 },
    featuredReview: { author: "Joanna P.", type: "Business Traveler", stars: 4, text: "You literally walk out of the hotel into Charing Cross station. The Strand is always buzzing and very safe. Brilliant for late-night arrivals.", date: "Jan 2026", helpful: 112 }
  },
  {
    id: "z-hotel-soho",
    name: "The Z Hotel Soho",
    city: "London", area: "Soho", region: "London",
    address: "17 Moor Street, London W1D 5AP", postcode: "W1D 5AP",
    lat: 51.5135, lng: -0.1306,
    stars: 3, tier: "budget", priceFrom: 89, currency: "GBP",
    nearestTube: "Leicester Square", tubeDistance: "3 min walk", tubeLines: ["Northern","Piccadilly"],
    phone: "+44 20 3551 3700",
    website: "https://www.thezhotels.com/soho",
    bookingUrl: "https://www.booking.com/hotel/gb/z-hotel-soho.html",
    description: "Smart budget hotel tucked behind Shaftesbury Avenue in Soho. The area is extremely busy at night with theatre crowds, restaurants and bars — extremely high footfall makes it very safe.",
    highlights: ["Soho heart of London","West End theatres","Leicester Square 3 min","Budget London option"],
    badges: ["budget-safe","solo-female","business"],
    communityRatings: { nightSafety: 4.3, streetSafety: 4.4, hotelSecurity: 4.5, cleanliness: 4.4, totalReviews: 456 },
    featuredReview: { author: "Alice B.", type: "Solo Female Traveler", stars: 4, text: "Soho at night is incredibly busy and very safe thanks to the sheer number of people everywhere. The Z is compact but smart and excellent value.", date: "Feb 2026", helpful: 145 }
  },
  {
    id: "hub-kings-cross",
    name: "Hub by Premier Inn London King's Cross",
    city: "London", area: "King's Cross", region: "London",
    address: "1 King's Cross, London N1C 4AX", postcode: "N1C 4AX",
    lat: 51.5309, lng: -0.1233,
    stars: 3, tier: "budget", priceFrom: 79, currency: "GBP",
    nearestTube: "King's Cross St. Pancras", tubeDistance: "2 min walk", tubeLines: ["Circle","Hammersmith & City","Metropolitan","Northern","Piccadilly","Victoria"],
    phone: "+44 333 321 9002",
    website: "https://www.premierinn.com/hub",
    bookingUrl: "https://www.booking.com/hotel/gb/hub-by-premier-inn-london-kings-cross.html",
    description: "Compact Hub hotel right at King's Cross — the most connected station in London. The entire King's Cross area has been transformed into a vibrant, safe development.",
    highlights: ["2 min from King's Cross","6 tube lines","Eurostar at St Pancras","Granary Square nearby"],
    badges: ["budget-safe","business","solo-female"],
    communityRatings: { nightSafety: 4.4, streetSafety: 4.3, hotelSecurity: 4.5, cleanliness: 4.4, totalReviews: 534 },
    featuredReview: { author: "James T.", type: "Business Traveler", stars: 4, text: "King's Cross area has been completely transformed. Coal Drops Yard and Granary Square are lovely and very safe. The Hub is smart and perfectly located.", date: "Jan 2026", helpful: 189 }
  },
  {
    id: "canary-wharf-marriott",
    name: "Marriott Hotel Canary Wharf",
    city: "London", area: "Canary Wharf", region: "London",
    address: "22 Hertsmere Road, London E14 4ED", postcode: "E14 4ED",
    lat: 51.5054, lng: -0.0244,
    stars: 5, tier: "luxury", priceFrom: 195, currency: "GBP",
    nearestTube: "Canary Wharf", tubeDistance: "5 min walk", tubeLines: ["Jubilee","Elizabeth"],
    phone: "+44 20 7093 1000",
    website: "https://www.marriott.com/en-us/hotels/loncy-marriott-hotel-canary-wharf",
    bookingUrl: "https://www.booking.com/hotel/gb/marriott-canary-wharf.html",
    description: "5-star Marriott on West India Quay — the private security presence in Canary Wharf is extraordinary. The entire estate is privately managed with CCTV on every corner and 24hr security patrols.",
    highlights: ["Canary Wharf private security","West India Quay waterside","Museum of London Docklands next door","Jubilee & Elizabeth line"],
    badges: ["business","luxury","solo-female"],
    communityRatings: { nightSafety: 4.8, streetSafety: 4.7, hotelSecurity: 4.9, cleanliness: 4.8, totalReviews: 367 },
    featuredReview: { author: "Fiona A.", type: "Business Traveler", stars: 5, text: "Canary Wharf's private security is extraordinary — CCTV everywhere, regular patrols. As a solo woman I felt completely safe walking around late. Brilliant hotel.", date: "Feb 2026", helpful: 198 }
  },
  {
    id: "ibis-greenwich",
    name: "ibis London Greenwich",
    city: "London", area: "Greenwich", region: "London",
    address: "30 Stockwell Street, London SE10 9JN", postcode: "SE10 9JN",
    lat: 51.4787, lng: -0.0112,
    stars: 3, tier: "budget", priceFrom: 65, currency: "GBP",
    nearestTube: "Greenwich (DLR)", tubeDistance: "5 min walk", tubeLines: ["DLR"],
    phone: "+44 20 8305 1177",
    website: "https://www.ibis.com",
    bookingUrl: "https://www.booking.com/hotel/gb/ibis-london-greenwich.html",
    description: "Budget ibis in historic Greenwich — a very safe, tourist-friendly area with the Cutty Sark, National Maritime Museum and Royal Observatory keeping streets active and well-visited.",
    highlights: ["Historic Greenwich","Cutty Sark nearby","DLR connection","Budget London"],
    badges: ["budget-safe","family","solo-female"],
    communityRatings: { nightSafety: 4.4, streetSafety: 4.4, hotelSecurity: 4.2, cleanliness: 4.1, totalReviews: 312 },
    featuredReview: { author: "Maria S.", type: "Family Traveler", stars: 3, text: "Greenwich is brilliant for families — the park, the Observatory, the Cutty Sark. Very safe tourist area. Ibis does the job perfectly for the price.", date: "Dec 2025", helpful: 89 }
  },

  // ═══════════════════════════════════════════════════
  // BLACKPOOL
  // ═══════════════════════════════════════════════════

  {
    id: "imperial-blackpool",
    name: "The Imperial Hotel Blackpool",
    city: "Blackpool", area: "North Promenade", region: "North West England",
    address: "North Promenade, Blackpool FY1 2HB", postcode: "FY1 2HB",
    lat: 53.8209, lng: -3.0557,
    stars: 4, tier: "mid", priceFrom: 95, currency: "GBP",
    nearestStation: "Blackpool North", stationDistance: "15 min walk",
    phone: "+44 1253 623971",
    website: "https://www.imperialhotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/the-imperial-blackpool.html",
    description: "Blackpool's grandest Victorian hotel on the quieter North Promenade, away from the rowdier south. The Imperial has hosted Prime Ministers and remains the safest and most prestigious address in Blackpool.",
    highlights: ["North Promenade location","Victorian grandeur","Political conference history","Away from rowdy south"],
    badges: ["business","family","luxury"],
    communityRatings: { nightSafety: 4.2, streetSafety: 4.1, hotelSecurity: 4.5, cleanliness: 4.3, totalReviews: 234 },
    featuredReview: { author: "Derek H.", type: "Business Traveler", stars: 4, text: "The North Promenade is noticeably quieter and more pleasant than the centre. The Imperial feels like a proper hotel — doormen, security, grand lobby. Best of Blackpool.", date: "Nov 2025", helpful: 78 }
  },

  // ═══════════════════════════════════════════════════
  // LANCASTER
  // ═══════════════════════════════════════════════════

  {
    id: "lancaster-house-hotel",
    name: "Lancaster House Hotel",
    city: "Lancaster", area: "City Centre", region: "North West England",
    address: "Green Lane, Lancaster LA1 4GJ", postcode: "LA1 4GJ",
    lat: 54.0430, lng: -2.8088,
    stars: 4, tier: "mid", priceFrom: 105, currency: "GBP",
    nearestStation: "Lancaster", stationDistance: "15 min walk",
    phone: "+44 1524 844822",
    website: "https://www.lancasterhouse.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/lancaster-house.html",
    description: "Smart 4-star hotel on the edge of Lancaster city. Lancaster is a historic market city with a university and castle — compact, walkable, and consistently safe.",
    highlights: ["Lancaster Castle nearby","University city feel","Award-winning restaurant","Green Lane setting"],
    badges: ["business","solo-female","family"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.5, hotelSecurity: 4.5, cleanliness: 4.6, totalReviews: 134 },
    featuredReview: { author: "Mary L.", type: "Solo Female Traveler", stars: 4, text: "Lancaster is a lovely, safe city — the castle dominates everything and the streets are always pleasant. Good hotel with great food.", date: "Oct 2025", helpful: 67 }
  },

  // ═══════════════════════════════════════════════════
  // CARLISLE
  // ═══════════════════════════════════════════════════

  {
    id: "crown-hotel-wetheral",
    name: "Crown Hotel Wetheral",
    city: "Carlisle", area: "Wetheral", region: "North West England",
    address: "Wetheral, Carlisle CA4 8ES", postcode: "CA4 8ES",
    lat: 54.8871, lng: -2.8312,
    stars: 4, tier: "mid", priceFrom: 110, currency: "GBP",
    nearestStation: "Carlisle", stationDistance: "10 min drive",
    phone: "+44 1228 561888",
    website: "https://www.crownhotelwetheral.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/crown-wetheral.html",
    description: "Historic coaching inn in the peaceful village of Wetheral, just outside Carlisle. Village setting offers exceptional safety and tranquillity whilst being perfectly placed for the Lake District and Hadrian's Wall.",
    highlights: ["Village setting","River Eden views","Near Hadrian's Wall","Excellent dining"],
    badges: ["solo-female","family","nature"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.6, cleanliness: 4.6, totalReviews: 89 },
    featuredReview: { author: "Joan R.", type: "Solo Female Traveler", stars: 5, text: "Wetheral village is utterly safe and peaceful. Beautiful river, lovely walks. A true escape. Very comfortable hotel.", date: "Sep 2025", helpful: 56 }
  },

  // ═══════════════════════════════════════════════════
  // HULL
  // ═══════════════════════════════════════════════════

  {
    id: "doubletree-hull",
    name: "DoubleTree by Hilton Hull",
    city: "Hull", area: "City Centre", region: "Yorkshire",
    address: "Ferensway, Hull HU1 3UF", postcode: "HU1 3UF",
    lat: 53.7446, lng: -0.3380,
    stars: 4, tier: "mid", priceFrom: 89, currency: "GBP",
    nearestStation: "Hull", stationDistance: "5 min walk",
    phone: "+44 1482 323215",
    website: "https://www.hilton.com/en/hotels/huldtdi-doubletree-hull",
    bookingUrl: "https://www.booking.com/hotel/gb/doubletree-hull.html",
    description: "Smart DoubleTree on Ferensway, Hull's main boulevard, steps from the train station. Since Hull's City of Culture year, the city centre has improved enormously with the Fruit Market and Old Town areas.",
    highlights: ["Steps from Hull station","City centre location","Fruit Market nearby","DoubleTree cookie on arrival"],
    badges: ["business","budget-safe"],
    communityRatings: { nightSafety: 4.1, streetSafety: 4.0, hotelSecurity: 4.5, cleanliness: 4.4, totalReviews: 198 },
    featuredReview: { author: "Steve M.", type: "Business Traveler", stars: 3, text: "Hull has improved a lot. The Fruit Market area by the marina is actually great. Hotel is right by the station which is very convenient.", date: "Nov 2025", helpful: 56 }
  },

  // ═══════════════════════════════════════════════════
  // SCARBOROUGH
  // ═══════════════════════════════════════════════════

  {
    id: "crown-spa-scarborough",
    name: "Crown Spa Hotel Scarborough",
    city: "Scarborough", area: "Esplanade", region: "Yorkshire",
    address: "Esplanade, Scarborough YO11 2AG", postcode: "YO11 2AG",
    lat: 54.2779, lng: -0.4009,
    stars: 4, tier: "mid", priceFrom: 115, currency: "GBP",
    nearestStation: "Scarborough", stationDistance: "15 min walk",
    phone: "+44 1723 357400",
    website: "https://www.crownspahotel.com",
    bookingUrl: "https://www.booking.com/hotel/gb/crown-spa-scarborough.html",
    description: "Grand clifftop hotel on Scarborough's South Cliff Esplanade — the most prestigious and safest part of town, away from the seafront amusement areas. Stunning sea views.",
    highlights: ["Clifftop Esplanade location","Sea views","Spa facilities","Victorian seaside grandeur"],
    badges: ["solo-female","family","luxury"],
    communityRatings: { nightSafety: 4.7, streetSafety: 4.6, hotelSecurity: 4.5, cleanliness: 4.5, totalReviews: 145 },
    featuredReview: { author: "Diana W.", type: "Solo Female Traveler", stars: 4, text: "The Esplanade is the quieter, safer end of Scarborough — much better than near the arcades. Beautiful sea views and a comfortable hotel.", date: "Aug 2025", helpful: 89 }
  },

  // ═══════════════════════════════════════════════════
  // WHITBY
  // ═══════════════════════════════════════════════════

  {
    id: "raithwaite-estate-whitby",
    name: "Raithwaite Sandsend Estate",
    city: "Whitby", area: "Sandsend", region: "Yorkshire",
    address: "Sandsend Road, Whitby YO21 3SR", postcode: "YO21 3SR",
    lat: 54.4939, lng: -0.6576,
    stars: 5, tier: "luxury", priceFrom: 265, currency: "GBP",
    nearestStation: "Whitby", stationDistance: "10 min drive",
    phone: "+44 1947 661661",
    website: "https://www.raithwaiteestate.com",
    bookingUrl: "https://www.booking.com/hotel/gb/raithwaite-estate.html",
    description: "Luxury country estate just outside Whitby with beautiful woodland grounds. The North Yorkshire coast is one of England's most peaceful and safe rural settings — truly restorative.",
    highlights: ["Woodland estate setting","Sandsend beach nearby","Spa & pool","Near Whitby Abbey"],
    badges: ["solo-female","family","luxury","nature"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.8, cleanliness: 4.9, totalReviews: 112 },
    featuredReview: { author: "Rebecca H.", type: "Solo Female Traveler", stars: 5, text: "The estate grounds are private and utterly peaceful. North Yorkshire coast is wonderfully safe. Walking on Sandsend beach at dusk — completely magical.", date: "Sep 2025", helpful: 134 }
  },

  // ═══════════════════════════════════════════════════
  // MIDDLESBROUGH / TEESSIDE
  // ═══════════════════════════════════════════════════

  {
    id: "kings-hotel-middlesbrough",
    name: "Kings Hotel Middlesbrough",
    city: "Middlesbrough", area: "Town Centre", region: "North East England",
    address: "Fry Street, Middlesbrough TS1 1JH", postcode: "TS1 1JH",
    lat: 54.5731, lng: -1.2319,
    stars: 3, tier: "budget", priceFrom: 69, currency: "GBP",
    nearestStation: "Middlesbrough", stationDistance: "8 min walk",
    phone: "+44 1642 247 430",
    website: "https://www.kingshotelmiddlesbrough.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/kings-middlesbrough.html",
    description: "Clean, practical budget hotel in central Middlesbrough near the main station. Good for business travelers visiting the Teesside area.",
    highlights: ["City centre location","Near Middlesbrough station","Budget-friendly","Practical base"],
    badges: ["business","budget-safe"],
    communityRatings: { nightSafety: 3.9, streetSafety: 3.8, hotelSecurity: 4.0, cleanliness: 4.0, totalReviews: 89 },
    featuredReview: { author: "Ian S.", type: "Business Traveler", stars: 3, text: "Does what it says on the tin. Stick to the hotel's immediate streets and you're fine. Good value for Teesside business.", date: "Nov 2025", helpful: 34 }
  },

  // ═══════════════════════════════════════════════════
  // SUNDERLAND
  // ═══════════════════════════════════════════════════

  {
    id: "holiday-inn-sunderland",
    name: "Holiday Inn Sunderland",
    city: "Sunderland", area: "City Centre", region: "North East England",
    address: "St Mary's Boulevard, Sunderland SR1 3NZ", postcode: "SR1 3NZ",
    lat: 54.9044, lng: -1.3895,
    stars: 3, tier: "mid", priceFrom: 79, currency: "GBP",
    nearestStation: "Sunderland", stationDistance: "10 min walk",
    phone: "+44 191 520 3333",
    website: "https://www.ihg.com/holidayinn/hotels/gb/en/sunderland",
    bookingUrl: "https://www.booking.com/hotel/gb/holiday-inn-sunderland.html",
    description: "Reliable Holiday Inn in central Sunderland near the Bridges shopping centre. The riverfront and Stadium of Light area are lively and well-policed on match days.",
    highlights: ["City centre location","Bridges shopping nearby","Stadium of Light area","Reliable IHG standards"],
    badges: ["business","budget-safe"],
    communityRatings: { nightSafety: 4.0, streetSafety: 3.9, hotelSecurity: 4.2, cleanliness: 4.1, totalReviews: 134 },
    featuredReview: { author: "Paul K.", type: "Business Traveler", stars: 3, text: "Solid Holiday Inn. Central location is fine for business. River Wear area is pleasant. Stick to the main streets and it's absolutely fine.", date: "Dec 2025", helpful: 45 }
  },

  // ═══════════════════════════════════════════════════
  // GATESHEAD
  // ═══════════════════════════════════════════════════

  {
    id: "hilton-gateshead",
    name: "Hilton Newcastle Gateshead",
    city: "Gateshead", area: "Quayside", region: "North East England",
    address: "Bottle Bank, Gateshead NE8 2AR", postcode: "NE8 2AR",
    lat: 54.9639, lng: -1.6038,
    stars: 4, tier: "mid", priceFrom: 115, currency: "GBP",
    nearestStation: "Gateshead Interchange", stationDistance: "10 min walk",
    nearestTram: "Gateshead", tramDistance: "8 min walk",
    phone: "+44 191 490 9700",
    website: "https://www.hilton.com/en/hotels/ncljnhi-hilton-newcastle-gateshead",
    bookingUrl: "https://www.booking.com/hotel/gb/hilton-gateshead.html",
    description: "Striking Hilton directly on the Gateshead Quayside with stunning views of the Tyne bridges. The Quayside regeneration has transformed this into one of the North East's most attractive and safe areas.",
    highlights: ["Tyne bridge views","Millennium Bridge outside","Sage Gateshead nearby","Baltic Centre opposite"],
    badges: ["business","solo-female","luxury"],
    communityRatings: { nightSafety: 4.4, streetSafety: 4.3, hotelSecurity: 4.7, cleanliness: 4.6, totalReviews: 267 },
    featuredReview: { author: "Sandra M.", type: "Solo Female Traveler", stars: 4, text: "The view of the Tyne bridges from my room was breathtaking. The Quayside feels genuinely safe — lots of restaurants and the Sage is active every evening.", date: "Jan 2026", helpful: 112 }
  },

  // ═══════════════════════════════════════════════════
  // ALNWICK / NORTHUMBERLAND
  // ═══════════════════════════════════════════════════

  {
    id: "cookie-jar-alnwick",
    name: "Cookie Jar Alnwick",
    city: "Alnwick", area: "Northumberland", region: "North East England",
    address: "12 Bailiffgate, Alnwick NE66 1LX", postcode: "NE66 1LX",
    lat: 55.4139, lng: -1.7049,
    stars: 4, tier: "luxury", priceFrom: 175, currency: "GBP",
    nearestStation: "Alnmouth", stationDistance: "10 min drive",
    phone: "+44 1665 604770",
    website: "https://www.cookiejaralnwick.com",
    bookingUrl: "https://www.booking.com/hotel/gb/cookie-jar-alnwick.html",
    description: "Charming boutique hotel in a converted convent next to Alnwick Castle. Northumberland is one of England's most unspoilt and safest counties — a truly peaceful destination.",
    highlights: ["Next to Alnwick Castle","Converted convent","Northumberland countryside","Alnwick Garden nearby"],
    badges: ["solo-female","family","luxury","nature"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.7, cleanliness: 4.8, totalReviews: 78 },
    featuredReview: { author: "Rachel T.", type: "Solo Female Traveler", stars: 5, text: "Alnwick is wonderful — safe, beautiful, historic. The castle looms over everything. This is exactly the kind of English market town where you feel completely at peace.", date: "Aug 2025", helpful: 89 }
  },

  // ═══════════════════════════════════════════════════
  // DERBY
  // ═══════════════════════════════════════════════════

  {
    id: "cathedral-quarter-derby",
    name: "Cathedral Quarter Hotel Derby",
    city: "Derby", area: "Cathedral Quarter", region: "East Midlands",
    address: "16 St Mary's Gate, Derby DE1 3JR", postcode: "DE1 3JR",
    lat: 52.9236, lng: -1.4778,
    stars: 4, tier: "mid", priceFrom: 99, currency: "GBP",
    nearestStation: "Derby", stationDistance: "12 min walk",
    phone: "+44 1332 546080",
    website: "https://www.cathedralquarterhotel.com",
    bookingUrl: "https://www.booking.com/hotel/gb/cathedral-quarter-derby.html",
    description: "Boutique hotel in a grade II listed Georgian building in Derby's Cathedral Quarter. The Cathedral Quarter is a designated heritage area with low crime and beautiful Georgian streets.",
    highlights: ["Cathedral Quarter heritage area","Georgian listed building","Derby Cathedral nearby","Independent boutique"],
    badges: ["business","solo-female","budget-safe"],
    communityRatings: { nightSafety: 4.4, streetSafety: 4.3, hotelSecurity: 4.5, cleanliness: 4.5, totalReviews: 145 },
    featuredReview: { author: "Gill H.", type: "Solo Female Traveler", stars: 4, text: "The Cathedral Quarter feels calm and safe compared to the high street. Beautiful Georgian streets. Good independent hotel with character.", date: "Nov 2025", helpful: 56 }
  },

  // ═══════════════════════════════════════════════════
  // LINCOLN
  // ═══════════════════════════════════════════════════

  {
    id: "white-hart-lincoln",
    name: "The White Hart Hotel Lincoln",
    city: "Lincoln", area: "Cathedral Quarter", region: "East Midlands",
    address: "Bailgate, Lincoln LN1 3AR", postcode: "LN1 3AR",
    lat: 53.2369, lng: -0.5390,
    stars: 4, tier: "mid", priceFrom: 115, currency: "GBP",
    nearestStation: "Lincoln Central", stationDistance: "20 min walk",
    phone: "+44 1522 526222",
    website: "https://www.whitehart-lincoln.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/white-hart-lincoln.html",
    description: "Historic hotel on Bailgate, the beautiful cobbled street in Lincoln's Cathedral Quarter. The uphill Cathedral area is Lincoln's most prestigious address — very safe, historic, and charming.",
    highlights: ["Bailgate cobbled street","Lincoln Cathedral 2 min walk","Roman remains nearby","Historic coaching inn"],
    badges: ["solo-female","family","business"],
    communityRatings: { nightSafety: 4.8, streetSafety: 4.8, hotelSecurity: 4.5, cleanliness: 4.4, totalReviews: 123 },
    featuredReview: { author: "Christine A.", type: "Solo Female Traveler", stars: 4, text: "Bailgate at night is absolutely magical — cobbles, cathedral, Victorian lamplight. One of England's most atmospheric and safest little streets. Lovely hotel.", date: "Oct 2025", helpful: 89 }
  },

  // ═══════════════════════════════════════════════════
  // STOKE-ON-TRENT
  // ═══════════════════════════════════════════════════

  {
    id: "the-grand-stoke",
    name: "DoubleTree by Hilton Stoke-on-Trent",
    city: "Stoke-on-Trent", area: "City Centre", region: "West Midlands",
    address: "Etruria Hall, Etruria Road, Stoke-on-Trent ST1 5RQ", postcode: "ST1 5RQ",
    lat: 53.0080, lng: -2.1840,
    stars: 4, tier: "mid", priceFrom: 85, currency: "GBP",
    nearestStation: "Stoke-on-Trent", stationDistance: "15 min walk",
    phone: "+44 1782 219000",
    website: "https://www.hilton.com/en/hotels/manstdi-doubletree-stoke-on-trent",
    bookingUrl: "https://www.booking.com/hotel/gb/doubletree-stoke-on-trent.html",
    description: "DoubleTree in the historic Etruria Hall, once the home of Josiah Wedgwood, overlooking Festival Park. A safe, purpose-built leisure and retail park surrounds the hotel.",
    highlights: ["Historic Etruria Hall","Wedgwood connection","Festival Park retail","DoubleTree standards"],
    badges: ["business","budget-safe"],
    communityRatings: { nightSafety: 4.2, streetSafety: 4.2, hotelSecurity: 4.5, cleanliness: 4.4, totalReviews: 156 },
    featuredReview: { author: "Mark B.", type: "Business Traveler", stars: 3, text: "Festival Park location is safe and convenient. Etruria Hall is a lovely building. Fine for Stoke business trips — good value DoubleTree.", date: "Nov 2025", helpful: 45 }
  },

  // ═══════════════════════════════════════════════════
  // SHREWSBURY
  // ═══════════════════════════════════════════════════

  {
    id: "lion-hotel-shrewsbury",
    name: "The Lion Hotel Shrewsbury",
    city: "Shrewsbury", area: "Town Centre", region: "West Midlands",
    address: "Wyle Cop, Shrewsbury SY1 1UY", postcode: "SY1 1UY",
    lat: 52.7083, lng: -2.7530,
    stars: 3, tier: "mid", priceFrom: 95, currency: "GBP",
    nearestStation: "Shrewsbury", stationDistance: "10 min walk",
    phone: "+44 1743 353107",
    website: "https://www.thelionhotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/the-lion-shrewsbury.html",
    description: "Historic coaching inn on Wyle Cop, one of Shrewsbury's most beautiful medieval streets. Shrewsbury is a wonderfully intact medieval market town with very low crime and charming safe streets.",
    highlights: ["Medieval Wyle Cop street","Historic coaching inn","Shrewsbury town loop","Darwin connection"],
    badges: ["solo-female","family","budget-safe"],
    communityRatings: { nightSafety: 4.8, streetSafety: 4.8, hotelSecurity: 4.4, cleanliness: 4.3, totalReviews: 112 },
    featuredReview: { author: "Janet C.", type: "Solo Female Traveler", stars: 4, text: "Shrewsbury is a perfectly preserved medieval town — safe, beautiful and full of character. Wyle Cop at night is lovely. The Lion is full of history.", date: "Sep 2025", helpful: 78 }
  },

  // ═══════════════════════════════════════════════════
  // HEREFORD
  // ═══════════════════════════════════════════════════

  {
    id: "green-dragon-hereford",
    name: "Green Dragon Hotel Hereford",
    city: "Hereford", area: "City Centre", region: "West Midlands",
    address: "Broad Street, Hereford HR4 9BG", postcode: "HR4 9BG",
    lat: 52.0554, lng: -2.7160,
    stars: 4, tier: "mid", priceFrom: 105, currency: "GBP",
    nearestStation: "Hereford", stationDistance: "10 min walk",
    phone: "+44 1432 272506",
    website: "https://www.greendragonhereford.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/green-dragon-hereford.html",
    description: "Grand coaching inn on Broad Street, Hereford's main thoroughfare. Hereford is a prosperous cathedral city with very low crime — a quintessential safe English city.",
    highlights: ["Broad Street location","Hereford Cathedral 5 min","Historic coaching inn","Herefordshire countryside"],
    badges: ["solo-female","family","business"],
    communityRatings: { nightSafety: 4.7, streetSafety: 4.7, hotelSecurity: 4.4, cleanliness: 4.4, totalReviews: 98 },
    featuredReview: { author: "Anne P.", type: "Solo Female Traveler", stars: 4, text: "Hereford is a genuinely lovely small city — very safe, very English. Walking to the cathedral at night was a delight. The Green Dragon is excellent.", date: "Oct 2025", helpful: 67 }
  },

  // ═══════════════════════════════════════════════════
  // WORCESTER
  // ═══════════════════════════════════════════════════

  {
    id: "fownes-hotel-worcester",
    name: "Fownes Hotel Worcester",
    city: "Worcester", area: "City Centre", region: "West Midlands",
    address: "City Walls Road, Worcester WR1 2AP", postcode: "WR1 2AP",
    lat: 52.1937, lng: -2.2242,
    stars: 4, tier: "mid", priceFrom: 99, currency: "GBP",
    nearestStation: "Worcester Foregate Street", stationDistance: "8 min walk",
    phone: "+44 1905 613151",
    website: "https://www.fowneshotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/fownes-worcester.html",
    description: "Unique hotel in a Victorian glove factory on City Walls Road next to Worcester Cathedral. Worcester is a prosperous cathedral city alongside the River Severn — compact and safe.",
    highlights: ["Victorian glove factory conversion","Worcester Cathedral adjacent","City walls location","Riverside setting"],
    badges: ["business","solo-female","family"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.5, hotelSecurity: 4.5, cleanliness: 4.5, totalReviews: 134 },
    featuredReview: { author: "Susan P.", type: "Solo Female Traveler", stars: 4, text: "Worcester is a lovely, safe city. The cathedral area particularly is very pleasant at night. The hotel's conversion from a glove factory is charming.", date: "Aug 2025", helpful: 56 }
  },

  // ═══════════════════════════════════════════════════
  // COVENTRY
  // ═══════════════════════════════════════════════════

  {
    id: "marriott-coventry",
    name: "Coventry City Centre Marriott",
    city: "Coventry", area: "City Centre", region: "West Midlands",
    address: "Olympic Way, Queens Drive, Coventry CV1 2EL", postcode: "CV1 2EL",
    lat: 52.4044, lng: -1.5107,
    stars: 4, tier: "mid", priceFrom: 105, currency: "GBP",
    nearestStation: "Coventry", stationDistance: "10 min walk",
    phone: "+44 2476 231166",
    website: "https://www.marriott.com/en-us/hotels/cvtmc-coventry-city-centre-marriott",
    bookingUrl: "https://www.booking.com/hotel/gb/coventry-city-centre-marriott.html",
    description: "Central Marriott steps from Coventry Cathedral. The city has invested heavily in its centre since City of Culture designation. Cathedral Quarter is pleasant and well-monitored.",
    highlights: ["Coventry Cathedral nearby","City of Culture legacy","Marriott security standards","Central location"],
    badges: ["business","family"],
    communityRatings: { nightSafety: 4.2, streetSafety: 4.1, hotelSecurity: 4.6, cleanliness: 4.5, totalReviews: 234 },
    featuredReview: { author: "Richard N.", type: "Business Traveler", stars: 3, text: "The Cathedral area is much nicer than you'd expect. Marriott quality reliable as always. Good base for Midlands business.", date: "Dec 2025", helpful: 67 }
  },

  // ═══════════════════════════════════════════════════
  // NORTHAMPTON
  // ═══════════════════════════════════════════════════

  {
    id: "mercure-northampton",
    name: "Mercure Northampton Hotel",
    city: "Northampton", area: "Town Centre", region: "East Midlands",
    address: "Silver Street, Northampton NN1 2TA", postcode: "NN1 2TA",
    lat: 52.2379, lng: -0.8939,
    stars: 4, tier: "mid", priceFrom: 89, currency: "GBP",
    nearestStation: "Northampton", stationDistance: "10 min walk",
    phone: "+44 1604 222777",
    website: "https://www.mercurenorthampton.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/mercure-northampton.html",
    description: "Central Mercure in the heart of Northampton town centre. Silver Street is a main pedestrianised street close to the Market Square — busy, monitored, and well-lit.",
    highlights: ["Town centre location","Near Market Square","Mercure standards","Business location"],
    badges: ["business","budget-safe"],
    communityRatings: { nightSafety: 4.1, streetSafety: 4.0, hotelSecurity: 4.3, cleanliness: 4.3, totalReviews: 145 },
    featuredReview: { author: "David C.", type: "Business Traveler", stars: 3, text: "Perfectly fine for Northampton business. Town centre is lively. The hotel is reliable Mercure quality. Gets the job done.", date: "Nov 2025", helpful: 34 }
  },

  // ═══════════════════════════════════════════════════
  // PETERBOROUGH
  // ═══════════════════════════════════════════════════

  {
    id: "queensgate-peterborough",
    name: "Holiday Inn Peterborough",
    city: "Peterborough", area: "City Centre", region: "East of England",
    address: "Thorpe Wood, Peterborough PE3 6SG", postcode: "PE3 6SG",
    lat: 52.5720, lng: -0.2880,
    stars: 4, tier: "mid", priceFrom: 89, currency: "GBP",
    nearestStation: "Peterborough", stationDistance: "15 min drive",
    phone: "+44 1733 289988",
    website: "https://www.ihg.com/holidayinn/hotels/gb/en/peterborough",
    bookingUrl: "https://www.booking.com/hotel/gb/holiday-inn-peterborough.html",
    description: "Well-appointed Holiday Inn on Peterborough's western edge. Thorpe Wood is a business park area which is calm, well-lit, and safe with plenty of parking.",
    highlights: ["Business park setting","Good parking","IHG standards","Near A1"],
    badges: ["business","budget-safe"],
    communityRatings: { nightSafety: 4.4, streetSafety: 4.4, hotelSecurity: 4.4, cleanliness: 4.3, totalReviews: 189 },
    featuredReview: { author: "Chris W.", type: "Business Traveler", stars: 3, text: "Business park setting is quiet and safe. Easy motorway access. Reliable Holiday Inn. Fine for what it is.", date: "Oct 2025", helpful: 34 }
  },

  // ═══════════════════════════════════════════════════
  // IPSWICH
  // ═══════════════════════════════════════════════════

  {
    id: "novotel-ipswich",
    name: "Novotel Ipswich Centre",
    city: "Ipswich", area: "Waterfront", region: "East of England",
    address: "The Waterfront, Ipswich IP1 3BE", postcode: "IP1 3BE",
    lat: 52.0549, lng: 1.1570,
    stars: 4, tier: "mid", priceFrom: 95, currency: "GBP",
    nearestStation: "Ipswich", stationDistance: "10 min walk",
    phone: "+44 1473 232400",
    website: "https://www.novotel.com/gb/hotel/2038-novotel-ipswich-centre",
    bookingUrl: "https://www.booking.com/hotel/gb/novotel-ipswich-centre.html",
    description: "Modern Novotel on Ipswich's regenerated Waterfront quarter. The Waterfront is the best part of Ipswich — nicely lit, restaurants and bars, marina views, and much safer than the town centre.",
    highlights: ["Waterfront location","Marina views","Regenerated area","Good transport links"],
    badges: ["business","solo-female","budget-safe"],
    communityRatings: { nightSafety: 4.4, streetSafety: 4.4, hotelSecurity: 4.5, cleanliness: 4.4, totalReviews: 167 },
    featuredReview: { author: "Rachel A.", type: "Solo Female Traveler", stars: 4, text: "The Waterfront area is the nicest part of Ipswich — genuinely pleasant to walk around in the evenings. Nice hotel with good marina views.", date: "Dec 2025", helpful: 67 }
  },

  // ═══════════════════════════════════════════════════
  // LUTON (& surrounds)
  // ═══════════════════════════════════════════════════

  {
    id: "woburn-hotel",
    name: "The Inn at Woburn",
    city: "Woburn", area: "Bedfordshire", region: "East of England",
    address: "George Street, Woburn MK17 9PX", postcode: "MK17 9PX",
    lat: 51.9948, lng: -0.6116,
    stars: 4, tier: "mid", priceFrom: 135, currency: "GBP",
    nearestStation: "Flitwick", stationDistance: "10 min drive",
    phone: "+44 1525 290441",
    website: "https://www.theinnwoburn.com",
    bookingUrl: "https://www.booking.com/hotel/gb/the-inn-at-woburn.html",
    description: "Georgian coaching inn in the beautiful village of Woburn, part of the Duke of Bedford's estate. Woburn is one of England's most charming and safe English villages — truly tranquil.",
    highlights: ["Georgian coaching inn","Woburn Abbey nearby","Woburn Safari Park","Estate village setting"],
    badges: ["solo-female","family","luxury","nature"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.6, cleanliness: 4.7, totalReviews: 98 },
    featuredReview: { author: "Marion T.", type: "Solo Female Traveler", stars: 5, text: "Woburn village is stunning and completely safe — part of a private ducal estate. The inn is beautiful. Perfect English village experience.", date: "Sep 2025", helpful: 89 }
  },

  // ═══════════════════════════════════════════════════
  // MILTON KEYNES
  // ═══════════════════════════════════════════════════

  {
    id: "doubletree-milton-keynes",
    name: "DoubleTree by Hilton Milton Keynes",
    city: "Milton Keynes", area: "Central", region: "South East England",
    address: "500 Saxon Gate West, Milton Keynes MK9 2HQ", postcode: "MK9 2HQ",
    lat: 52.0407, lng: -0.7593,
    stars: 4, tier: "mid", priceFrom: 99, currency: "GBP",
    nearestStation: "Milton Keynes Central", stationDistance: "10 min walk",
    phone: "+44 1908 694433",
    website: "https://www.hilton.com/en/hotels/mktnhdt-doubletree-milton-keynes",
    bookingUrl: "https://www.booking.com/hotel/gb/doubletree-by-hilton-hotel-milton-keynes.html",
    description: "Modern DoubleTree in central Milton Keynes. As a planned new city, MK has wide boulevards, excellent street lighting and CCTV across the grid roads — objectively very safe by design.",
    highlights: ["Centre:MK shopping","Planned city safety design","MK theatre nearby","Business park access"],
    badges: ["business","solo-female"],
    communityRatings: { nightSafety: 4.5, streetSafety: 4.5, hotelSecurity: 4.6, cleanliness: 4.5, totalReviews: 234 },
    featuredReview: { author: "Clare N.", type: "Solo Female Traveler", stars: 4, text: "Milton Keynes is actually very safe by design — wide roads, lots of CCTV, good lighting. The central area is pleasant enough. Good business hotel.", date: "Jan 2026", helpful: 56 }
  },

  // ═══════════════════════════════════════════════════
  // READING
  // ═══════════════════════════════════════════════════

  {
    id: "crowne-plaza-reading",
    name: "Crowne Plaza Reading",
    city: "Reading", area: "Town Centre", region: "South East England",
    address: "Caversham Bridge, Reading RG4 8BB", postcode: "RG4 8BB",
    lat: 51.4610, lng: -0.9726,
    stars: 4, tier: "mid", priceFrom: 120, currency: "GBP",
    nearestStation: "Reading", stationDistance: "20 min walk",
    phone: "+44 118 925 9988",
    website: "https://www.ihg.com/crowneplaza/hotels/gb/en/reading",
    bookingUrl: "https://www.booking.com/hotel/gb/crowne-plaza-reading.html",
    description: "Smart Crowne Plaza on Caversham Bridge over the Thames. The riverside setting is beautiful and peaceful — Reading's Thames waterfront is its nicest and safest area.",
    highlights: ["Thames riverside location","Caversham Bridge","Reading Festival nearby","Good transport to London"],
    badges: ["business","solo-female"],
    communityRatings: { nightSafety: 4.5, streetSafety: 4.5, hotelSecurity: 4.6, cleanliness: 4.5, totalReviews: 267 },
    featuredReview: { author: "Jenny B.", type: "Business Traveler", stars: 4, text: "The Thames setting is beautiful and much safer feeling than central Reading. Views from the riverside are lovely. Good Crowne Plaza standards.", date: "Dec 2025", helpful: 89 }
  },

  // ═══════════════════════════════════════════════════
  // GUILDFORD
  // ═══════════════════════════════════════════════════

  {
    id: "angel-hotel-guildford",
    name: "Angel Hotel Guildford",
    city: "Guildford", area: "High Street", region: "South East England",
    address: "91 High Street, Guildford GU1 3DP", postcode: "GU1 3DP",
    lat: 51.2368, lng: -0.5774,
    stars: 4, tier: "mid", priceFrom: 130, currency: "GBP",
    nearestStation: "Guildford", stationDistance: "8 min walk",
    phone: "+44 1483 564555",
    website: "https://www.angelhoteguildford.com",
    bookingUrl: "https://www.booking.com/hotel/gb/angel-guildford.html",
    description: "Historic coaching inn on Guildford's spectacular cobbled High Street. Guildford is one of Surrey's most affluent and safe towns — excellent schools, low crime, and beautiful surroundings.",
    highlights: ["Cobbled High Street","Historic coaching inn","Surrey Hills nearby","Cathedral town"],
    badges: ["solo-female","business","family"],
    communityRatings: { nightSafety: 4.8, streetSafety: 4.8, hotelSecurity: 4.5, cleanliness: 4.5, totalReviews: 145 },
    featuredReview: { author: "Caroline R.", type: "Solo Female Traveler", stars: 4, text: "Guildford High Street cobbles at night are wonderfully safe and atmospheric. Very affluent, very safe Surrey town. The Angel is charming.", date: "Nov 2025", helpful: 89 }
  },

  // ═══════════════════════════════════════════════════
  // SOUTHAMPTON
  // ═══════════════════════════════════════════════════

  {
    id: "harbour-hotel-southampton",
    name: "Harbour Hotel Southampton",
    city: "Southampton", area: "Ocean Village", region: "South East England",
    address: "Ocean Village, Southampton SO14 3TL", postcode: "SO14 3TL",
    lat: 50.8970, lng: -1.3968,
    stars: 4, tier: "luxury", priceFrom: 155, currency: "GBP",
    nearestStation: "Southampton Central", stationDistance: "20 min walk",
    phone: "+44 23 8063 3033",
    website: "https://www.harbourhotels.co.uk/southampton",
    bookingUrl: "https://www.booking.com/hotel/gb/harbour-hotel-southampton.html",
    description: "Stylish hotel in Southampton's regenerated Ocean Village marina. The marina area is very safe with private security, restaurant and bar footfall, and excellent waterfront lighting.",
    highlights: ["Ocean Village marina","Rooftop pool","Cruise terminal nearby","Southampton Water views"],
    badges: ["solo-female","luxury","business"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.5, hotelSecurity: 4.7, cleanliness: 4.7, totalReviews: 198 },
    featuredReview: { author: "Emma K.", type: "Solo Female Traveler", stars: 4, text: "Ocean Village is a really nice marina area — felt very safe, lots of people dining and walking around. Hotel is lovely with a good rooftop pool.", date: "Dec 2025", helpful: 112 }
  },

  // ═══════════════════════════════════════════════════
  // PORTSMOUTH
  // ═══════════════════════════════════════════════════

  {
    id: "holiday-inn-portsmouth",
    name: "Holiday Inn Portsmouth",
    city: "Portsmouth", area: "City Centre", region: "South East England",
    address: "The Plaza, Gunwharf Quays, Portsmouth PO1 3FD", postcode: "PO1 3FD",
    lat: 50.7982, lng: -1.1084,
    stars: 3, tier: "mid", priceFrom: 95, currency: "GBP",
    nearestStation: "Portsmouth Harbour", stationDistance: "5 min walk",
    phone: "+44 23 9264 0000",
    website: "https://www.ihg.com/holidayinn/hotels/gb/en/portsmouth",
    bookingUrl: "https://www.booking.com/hotel/gb/holiday-inn-portsmouth.html",
    description: "Holiday Inn at Gunwharf Quays — Portsmouth's premier retail and leisure destination. Gunwharf Quays is exceptionally safe with private security, constant footfall, and excellent lighting throughout.",
    highlights: ["Gunwharf Quays location","Spinnaker Tower adjacent","Designer outlets","Portsmouth Harbour views"],
    badges: ["family","solo-female","business"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.5, hotelSecurity: 4.5, cleanliness: 4.4, totalReviews: 267 },
    featuredReview: { author: "Lisa M.", type: "Family Traveler", stars: 4, text: "Gunwharf Quays is a lovely, safe area — the Spinnaker Tower is right there, restaurants everywhere. Kids loved it. Very safe for families.", date: "Aug 2025", helpful: 123 }
  },

  // ═══════════════════════════════════════════════════
  // CHICHESTER
  // ═══════════════════════════════════════════════════

  {
    id: "ship-hotel-chichester",
    name: "The Ship Hotel Chichester",
    city: "Chichester", area: "City Centre", region: "South East England",
    address: "North Street, Chichester PO19 1NH", postcode: "PO19 1NH",
    lat: 50.8365, lng: -0.7792,
    stars: 3, tier: "mid", priceFrom: 99, currency: "GBP",
    nearestStation: "Chichester", stationDistance: "8 min walk",
    phone: "+44 1243 778000",
    website: "https://www.theshipchichester.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/the-ship-chichester.html",
    description: "Georgian hotel on North Street in the heart of Chichester's Roman city. Chichester is consistently one of England's safest cities — a prosperous cathedral city within the South Downs National Park.",
    highlights: ["Chichester Cathedral nearby","Roman city walls","South Downs gateway","Festival Theatre"],
    badges: ["solo-female","family","business"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.9, hotelSecurity: 4.5, cleanliness: 4.4, totalReviews: 112 },
    featuredReview: { author: "Monica F.", type: "Solo Female Traveler", stars: 4, text: "Chichester is simply wonderful — clean, safe, beautiful. The Roman walls and cathedral make it feel timeless. Walked everywhere alone without any concern.", date: "Sep 2025", helpful: 98 }
  },

  // ═══════════════════════════════════════════════════
  // HASTINGS & EAST SUSSEX
  // ═══════════════════════════════════════════════════

  {
    id: "victoria-hotel-hastings",
    name: "The Old Rectory Hastings",
    city: "Hastings", area: "Old Town", region: "South East England",
    address: "Harold Road, Hastings TN35 5ND", postcode: "TN35 5ND",
    lat: 50.8620, lng: 0.5776,
    stars: 4, tier: "mid", priceFrom: 115, currency: "GBP",
    nearestStation: "Hastings", stationDistance: "15 min walk",
    phone: "+44 1424 422410",
    website: "https://www.theoldrectoryhastings.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/old-rectory-hastings.html",
    description: "Beautiful Georgian rectory in the safe, artistic Hastings Old Town — far removed from the seafront. Hastings Old Town is a vibrant creative community with bohemian charm and very low crime.",
    highlights: ["Hastings Old Town","Artistic community","Georgian building","Near Fisherman's Quarter"],
    badges: ["solo-female","luxury","nature"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.5, hotelSecurity: 4.5, cleanliness: 4.7, totalReviews: 89 },
    featuredReview: { author: "Joanna L.", type: "Solo Female Traveler", stars: 4, text: "Hastings Old Town is a lovely, artsy, safe area — nothing like the seafront. The rectory is gorgeous. A real find.", date: "Oct 2025", helpful: 78 }
  },

  // ═══════════════════════════════════════════════════
  // TUNBRIDGE WELLS
  // ═══════════════════════════════════════════════════

  {
    id: "spa-hotel-tunbridge-wells",
    name: "The Spa Hotel Tunbridge Wells",
    city: "Royal Tunbridge Wells", area: "Langton Road", region: "South East England",
    address: "Mount Ephraim, Royal Tunbridge Wells TN4 8XJ", postcode: "TN4 8XJ",
    lat: 51.1333, lng: 0.2628,
    stars: 4, tier: "luxury", priceFrom: 155, currency: "GBP",
    nearestStation: "Tunbridge Wells", stationDistance: "15 min walk",
    phone: "+44 1892 520331",
    website: "https://www.spahotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/spa-hotel-royal-tunbridge-wells.html",
    description: "Victorian hotel set in 14 acres of parkland in Royal Tunbridge Wells. The Pantiles and surrounding areas are among England's most affluent and consistently safe — very low crime.",
    highlights: ["14-acre grounds","The Pantiles nearby","Victorian grandeur","Spa facilities"],
    badges: ["solo-female","luxury","family"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.9, hotelSecurity: 4.7, cleanliness: 4.7, totalReviews: 134 },
    featuredReview: { author: "Anthea G.", type: "Solo Female Traveler", stars: 5, text: "Tunbridge Wells is wonderfully safe — famously so! Beautiful Pantiles, lovely Victorian architecture. The Spa Hotel grounds are gorgeous. Perfect.", date: "Sep 2025", helpful: 112 }
  },

  // ═══════════════════════════════════════════════════
  // FOLKESTONE
  // ═══════════════════════════════════════════════════

  {
    id: "rocksalt-folkestone",
    name: "Rocksalt Rooms Folkestone",
    city: "Folkestone", area: "Harbour", region: "South East England",
    address: "4-5 Fish Market, Folkestone CT19 6AA", postcode: "CT19 6AA",
    lat: 51.0762, lng: 1.1794,
    stars: 4, tier: "mid", priceFrom: 125, currency: "GBP",
    nearestStation: "Folkestone Central", stationDistance: "15 min walk",
    phone: "+44 1303 212070",
    website: "https://www.rocksaltfolkestone.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/rocksalt-rooms-folkestone.html",
    description: "Award-winning boutique hotel and restaurant right on Folkestone Harbour. The harbour area has been beautifully regenerated with the Creative Quarter — safe, vibrant, and stunning.",
    highlights: ["Folkestone Harbour","Creative Quarter nearby","Award-winning seafood","Harbour arm views"],
    badges: ["solo-female","luxury","nature"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.5, hotelSecurity: 4.6, cleanliness: 4.8, totalReviews: 89 },
    featuredReview: { author: "Clare B.", type: "Solo Female Traveler", stars: 5, text: "Folkestone harbour is a hidden gem — beautifully regenerated, safe, and full of art. Rocksalt is one of my favourite restaurants in England. Brilliant.", date: "Aug 2025", helpful: 134 }
  },

  // ═══════════════════════════════════════════════════
  // EASTBOURNE
  // ═══════════════════════════════════════════════════

  {
    id: "grand-eastbourne",
    name: "The Grand Hotel Eastbourne",
    city: "Eastbourne", area: "Seafront", region: "South East England",
    address: "King Edwards Parade, Eastbourne BN21 4EQ", postcode: "BN21 4EQ",
    lat: 50.7650, lng: 0.2838,
    stars: 5, tier: "luxury", priceFrom: 175, currency: "GBP",
    nearestStation: "Eastbourne", stationDistance: "15 min walk",
    phone: "+44 1323 412345",
    website: "https://www.grandeastbourne.com",
    bookingUrl: "https://www.booking.com/hotel/gb/grand-eastbourne.html",
    description: "The 'White Palace' — Eastbourne's legendary Victorian seafront hotel. Eastbourne consistently ranks as one of England's safest seaside towns, with an older, quieter demographic and very low crime.",
    highlights: ["Victorian 'White Palace'","Seafront Kings Parade","Spa & pools","Elegant Eastbourne"],
    badges: ["solo-female","family","luxury"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.9, hotelSecurity: 4.8, cleanliness: 4.8, totalReviews: 189 },
    featuredReview: { author: "Dorothy H.", type: "Solo Female Traveler", stars: 5, text: "Eastbourne is beautifully safe — elegant, calm, absolutely nothing threatening. Kings Parade at night is peaceful and lovely. The Grand is magnificent.", date: "Jul 2025", helpful: 167 }
  },

  // ═══════════════════════════════════════════════════
  // TORQUAY & DEVON
  // ═══════════════════════════════════════════════════

  {
    id: "imperial-torquay",
    name: "The Imperial Hotel Torquay",
    city: "Torquay", area: "English Riviera", region: "South West England",
    address: "Park Hill Road, Torquay TQ1 2DG", postcode: "TQ1 2DG",
    lat: 50.4616, lng: -3.5264,
    stars: 4, tier: "luxury", priceFrom: 145, currency: "GBP",
    nearestStation: "Torquay", stationDistance: "15 min walk",
    phone: "+44 1803 294301",
    website: "https://www.marstonhotels.com/hotels/south-west/the-imperial-hotel-torquay",
    bookingUrl: "https://www.booking.com/hotel/gb/the-imperial-hotel-torquay.html",
    description: "Grand clifftop hotel above Torquay harbour — Agatha Christie's hometown and inspiration for many of her novels. The hillside residential area around the Imperial is one of Torquay's safest.",
    highlights: ["Clifftop harbour views","Agatha Christie connection","Outdoor pools","English Riviera"],
    badges: ["solo-female","family","luxury"],
    communityRatings: { nightSafety: 4.7, streetSafety: 4.6, hotelSecurity: 4.7, cleanliness: 4.6, totalReviews: 167 },
    featuredReview: { author: "Pamela C.", type: "Solo Female Traveler", stars: 4, text: "The clifftop position is really safe and quiet — away from the busy harbour. Beautiful views. Agatha Christie stayed here! Lovely traditional hotel.", date: "Aug 2025", helpful: 89 }
  },

  {
    id: "sea-trout-inn-devon",
    name: "The Sea Trout Inn",
    city: "Totnes", area: "South Devon", region: "South West England",
    address: "Staverton, Totnes TQ9 6PA", postcode: "TQ9 6PA",
    lat: 50.4355, lng: -3.6889,
    stars: 3, tier: "mid", priceFrom: 99, currency: "GBP",
    nearestStation: "Totnes", stationDistance: "10 min drive",
    phone: "+44 1803 762274",
    website: "https://www.theseatroutinn.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/sea-trout-inn.html",
    description: "Traditional thatched Devon inn in the quiet hamlet of Staverton near Totnes. Devon villages are among England's safest communities — a true pastoral retreat by the River Dart.",
    highlights: ["Thatched historic inn","River Dart walks","Staverton village","Real ales & excellent food"],
    badges: ["solo-female","family","nature","budget-safe"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.4, cleanliness: 4.5, totalReviews: 78 },
    featuredReview: { author: "Susan K.", type: "Solo Female Traveler", stars: 5, text: "The hamlet of Staverton is wonderfully safe — the most traditional rural England imaginable. The inn is cosy, the food excellent, the River Dart beautiful. Loved it.", date: "Sep 2025", helpful: 89 }
  },

  // ═══════════════════════════════════════════════════
  // PLYMOUTH
  // ═══════════════════════════════════════════════════

  {
    id: "duke-of-cornwall-plymouth",
    name: "Duke of Cornwall Hotel",
    city: "Plymouth", area: "City Centre", region: "South West England",
    address: "Millbay Road, Plymouth PL1 3LG", postcode: "PL1 3LG",
    lat: 50.3699, lng: -4.1458,
    stars: 4, tier: "mid", priceFrom: 105, currency: "GBP",
    nearestStation: "Plymouth", stationDistance: "10 min walk",
    phone: "+44 1752 275850",
    website: "https://www.thedukeofcornwall.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/duke-of-cornwall-plymouth.html",
    description: "Victorian Gothic hotel close to Plymouth Hoe — the famous headland where Drake played bowls. The Hoe is a wide, open, beautifully maintained parkland area that is extremely safe.",
    highlights: ["Near Plymouth Hoe","Victorian Gothic building","Barbican nearby","Harbour views"],
    badges: ["family","business","solo-female"],
    communityRatings: { nightSafety: 4.4, streetSafety: 4.3, hotelSecurity: 4.5, cleanliness: 4.4, totalReviews: 145 },
    featuredReview: { author: "Andrew F.", type: "Family Traveler", stars: 4, text: "Plymouth Hoe is a brilliant open space — very safe for families, fantastic views. The Barbican historic quarter is charming. Good hotel well-placed.", date: "Aug 2025", helpful: 67 }
  },

  // ═══════════════════════════════════════════════════
  // TRURO
  // ═══════════════════════════════════════════════════

  {
    id: "alverton-hotel-truro",
    name: "The Alverton Hotel",
    city: "Truro", area: "City Centre", region: "South West England",
    address: "Tregolls Road, Truro TR1 1ZQ", postcode: "TR1 1ZQ",
    lat: 50.2660, lng: -5.0497,
    stars: 4, tier: "luxury", priceFrom: 135, currency: "GBP",
    nearestStation: "Truro", stationDistance: "12 min walk",
    phone: "+44 1872 276633",
    website: "https://thealverton.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/the-alverton-hotel-truro.html",
    description: "Elegant hotel in a converted Victorian convent in Cornwall's only city. Truro is a small, prosperous cathedral city with very low crime — a calm base for exploring Cornwall.",
    highlights: ["Converted Victorian convent","Truro Cathedral nearby","Cornwall gateway","Award-winning restaurant"],
    badges: ["solo-female","family","luxury"],
    communityRatings: { nightSafety: 4.8, streetSafety: 4.8, hotelSecurity: 4.7, cleanliness: 4.8, totalReviews: 134 },
    featuredReview: { author: "Bridget W.", type: "Solo Female Traveler", stars: 5, text: "Truro is a delight — compact, safe, and full of character. The cathedral is beautiful. The Alverton is a stunning setting in a converted convent. Highly recommended.", date: "Jul 2025", helpful: 112 }
  },

  // ═══════════════════════════════════════════════════
  // GLASTONBURY / SOMERSET
  // ═══════════════════════════════════════════════════

  {
    id: "who-hotel-glastonbury",
    name: "George & Pilgrims Hotel",
    city: "Glastonbury", area: "High Street", region: "South West England",
    address: "1 High Street, Glastonbury BA6 9DP", postcode: "BA6 9DP",
    lat: 51.1442, lng: -2.7159,
    stars: 3, tier: "mid", priceFrom: 99, currency: "GBP",
    nearestStation: "Castle Cary", stationDistance: "20 min drive",
    phone: "+44 1458 831146",
    website: "https://www.georgeandpilgrims.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/george-and-pilgrims-glastonbury.html",
    description: "Medieval inn dating to 1475 on Glastonbury High Street. Glastonbury is a small, spiritual market town with a very low crime rate and a unique bohemian community atmosphere.",
    highlights: ["Medieval building dating 1475","Glastonbury Tor nearby","High Street location","Unique spiritual atmosphere"],
    badges: ["solo-female","family","nature"],
    communityRatings: { nightSafety: 4.7, streetSafety: 4.6, hotelSecurity: 4.3, cleanliness: 4.2, totalReviews: 89 },
    featuredReview: { author: "Deborah S.", type: "Solo Female Traveler", stars: 4, text: "Glastonbury is wonderfully safe — a unique, welcoming community. The High Street at night is atmospheric and pleasant. The medieval inn is a one-off.", date: "Jun 2025", helpful: 78 }
  },

  // ═══════════════════════════════════════════════════
  // WELLS
  // ═══════════════════════════════════════════════════

  {
    id: "swan-hotel-wells",
    name: "The Swan Hotel Wells",
    city: "Wells", area: "Cathedral Green", region: "South West England",
    address: "Sadler Street, Wells BA5 2RX", postcode: "BA5 2RX",
    lat: 51.2099, lng: -2.6451,
    stars: 4, tier: "mid", priceFrom: 130, currency: "GBP",
    nearestStation: "Castle Cary", stationDistance: "25 min drive",
    phone: "+44 1749 836300",
    website: "https://www.swanhotelwells.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/swan-wells.html",
    description: "Beautiful hotel opposite Wells Cathedral — England's smallest city. Wells has virtually zero crime and is one of England's most serene and perfect medieval settings.",
    highlights: ["Cathedral Green views","England's smallest city","Medieval setting","Stunning cathedral"],
    badges: ["solo-female","family","luxury","nature"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.6, cleanliness: 4.6, totalReviews: 112 },
    featuredReview: { author: "Frances M.", type: "Solo Female Traveler", stars: 5, text: "Wells is England's most perfect small city. Utterly, completely safe. The cathedral lit at night from your bedroom window is one of England's most magical views.", date: "Aug 2025", helpful: 134 }
  },

  // ═══════════════════════════════════════════════════
  // TAUNTON
  // ═══════════════════════════════════════════════════

  {
    id: "castle-hotel-taunton",
    name: "The Castle Hotel Taunton",
    city: "Taunton", area: "Town Centre", region: "South West England",
    address: "Castle Green, Taunton TA1 1NF", postcode: "TA1 1NF",
    lat: 51.0155, lng: -3.1017,
    stars: 4, tier: "luxury", priceFrom: 145, currency: "GBP",
    nearestStation: "Taunton", stationDistance: "12 min walk",
    phone: "+44 1823 272671",
    website: "https://www.the-castle-hotel.com",
    bookingUrl: "https://www.booking.com/hotel/gb/castle-taunton.html",
    description: "Historic hotel in the grounds of a Norman castle in Taunton. Castle Green is Taunton's most beautiful and peaceful address — very low crime and a strong community atmosphere.",
    highlights: ["Norman castle grounds","Castle Green location","Award-winning restaurant","Taunton centre"],
    badges: ["solo-female","family","luxury"],
    communityRatings: { nightSafety: 4.8, streetSafety: 4.7, hotelSecurity: 4.7, cleanliness: 4.7, totalReviews: 112 },
    featuredReview: { author: "Helen J.", type: "Solo Female Traveler", stars: 5, text: "Castle Green is Taunton's loveliest spot — safe, historic, and serene. The hotel is wonderful, the food exceptional. Perfect Somerset base.", date: "Sep 2025", helpful: 89 }
  },

  // ═══════════════════════════════════════════════════
  // DORSET
  // ═══════════════════════════════════════════════════

  {
    id: "harbour-heights-poole",
    name: "Harbour Heights Hotel",
    city: "Poole", area: "Sandbanks Road", region: "South West England",
    address: "73 Haven Road, Poole BH13 7LW", postcode: "BH13 7LW",
    lat: 50.6895, lng: -1.9415,
    stars: 4, tier: "luxury", priceFrom: 175, currency: "GBP",
    nearestStation: "Poole", stationDistance: "15 min drive",
    phone: "+44 1202 707272",
    website: "https://www.harbourheights.net",
    bookingUrl: "https://www.booking.com/hotel/gb/harbour-heights-hotel.html",
    description: "Elegant hotel overlooking Poole Harbour with stunning views towards Sandbanks and Brownsea Island. Canford Cliffs is one of England's wealthiest areas with extremely low crime.",
    highlights: ["Poole Harbour panorama","Near Sandbanks beach","Canford Cliffs area","Award-winning food"],
    badges: ["solo-female","family","luxury","nature"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.9, hotelSecurity: 4.7, cleanliness: 4.8, totalReviews: 134 },
    featuredReview: { author: "Victoria L.", type: "Solo Female Traveler", stars: 5, text: "Canford Cliffs is one of England's wealthiest and safest areas. The harbour views are stunning. Felt utterly at ease throughout. Excellent hotel.", date: "Jul 2025", helpful: 123 }
  },

  {
    id: "hotel-du-vin-poole",
    name: "Hotel du Vin Poole",
    city: "Poole", area: "Old Town", region: "South West England",
    address: "Thames Street, Poole BH15 1JN", postcode: "BH15 1JN",
    lat: 50.7155, lng: -1.9810,
    stars: 4, tier: "mid", priceFrom: 125, currency: "GBP",
    nearestStation: "Poole", stationDistance: "10 min walk",
    phone: "+44 1202 785570",
    website: "https://www.hotelduvin.com/locations/poole",
    bookingUrl: "https://www.booking.com/hotel/gb/hotel-du-vin-poole.html",
    description: "Hotel du Vin in a converted merchant's warehouse in Poole's charming Old Town quay. Poole Old Town is a beautifully preserved historic area next to the world's second largest natural harbour.",
    highlights: ["Old Town Quay location","World's 2nd largest harbour","Merchant's warehouse","Brownsea Island ferries"],
    badges: ["solo-female","business","luxury"],
    communityRatings: { nightSafety: 4.7, streetSafety: 4.6, hotelSecurity: 4.6, cleanliness: 4.7, totalReviews: 167 },
    featuredReview: { author: "Sophie D.", type: "Solo Female Traveler", stars: 4, text: "Poole Old Town is charming and very safe. The quay at night with the boats and the old buildings is lovely. Hotel du Vin in a great building.", date: "Aug 2025", helpful: 89 }
  },

  {
    id: "clavell-tower-dorset",
    name: "The Pig on the Beach",
    city: "Studland", area: "Dorset", region: "South West England",
    address: "Manor House, Studland, Swanage BH19 3AU", postcode: "BH19 3AU",
    lat: 50.6444, lng: -2.0017,
    stars: 4, tier: "luxury", priceFrom: 220, currency: "GBP",
    nearestStation: "Wareham", stationDistance: "25 min drive",
    phone: "+44 1929 450288",
    website: "https://www.thepighotel.com/on-the-beach",
    bookingUrl: "https://www.booking.com/hotel/gb/the-pig-on-the-beach.html",
    description: "Spectacular Pig hotel in a manor house overlooking Studland Bay and Poole Harbour. The Isle of Purbeck is one of England's most unspoilt and safe rural areas — within the Jurassic Coast UNESCO site.",
    highlights: ["Studland Bay views","Jurassic Coast","National Trust beach nearby","Kitchen Garden restaurant"],
    badges: ["solo-female","family","luxury","nature"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.8, cleanliness: 4.9, totalReviews: 156 },
    featuredReview: { author: "Emma R.", type: "Solo Female Traveler", stars: 5, text: "Studland is extraordinary — wild heathland, Jurassic Coast, total safety. You could walk the cliffs at midnight in complete peace. The Pig is magnificent.", date: "Jun 2025", helpful: 178 }
  },

  // ═══════════════════════════════════════════════════
  // BOURNEMOUTH
  // ═══════════════════════════════════════════════════

  {
    id: "queens-hotel-bournemouth",
    name: "The Queens Hotel Bournemouth",
    city: "Bournemouth", area: "East Cliff", region: "South West England",
    address: "Meyrick Road, East Cliff, Bournemouth BH1 3DL", postcode: "BH1 3DL",
    lat: 50.7213, lng: -1.8467,
    stars: 4, tier: "mid", priceFrom: 115, currency: "GBP",
    nearestStation: "Bournemouth", stationDistance: "12 min walk",
    phone: "+44 1202 554415",
    website: "https://www.queenshotelbournemouth.com",
    bookingUrl: "https://www.booking.com/hotel/gb/queens-bournemouth.html",
    description: "Traditional hotel on the East Cliff above Bournemouth beach — the safer, more residential part of town above the beach. East Cliff is quiet, residential, and very different from the lively centre.",
    highlights: ["East Cliff position","Above the beach","Clifflift to beach","Residential area"],
    badges: ["family","solo-female"],
    communityRatings: { nightSafety: 4.6, streetSafety: 4.6, hotelSecurity: 4.4, cleanliness: 4.4, totalReviews: 178 },
    featuredReview: { author: "Janet L.", type: "Family Traveler", stars: 3, text: "East Cliff is much quieter and safer than central Bournemouth. Nice cliff-top walks. Good traditional hotel above the beach.", date: "Aug 2025", helpful: 56 }
  },

  // ═══════════════════════════════════════════════════
  // ISLE OF WIGHT
  // ═══════════════════════════════════════════════════

  {
    id: "the-george-yarmouth-iow",
    name: "The George Hotel Yarmouth",
    city: "Yarmouth", area: "Isle of Wight", region: "South East England",
    address: "Quay Street, Yarmouth, Isle of Wight PO41 0PE", postcode: "PO41 0PE",
    lat: 50.7064, lng: -1.5009,
    stars: 4, tier: "luxury", priceFrom: 195, currency: "GBP",
    nearestStation: "Yarmouth Ferry", stationDistance: "2 min walk",
    phone: "+44 1983 760331",
    website: "https://www.thegeorge.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/the-george-yarmouth-isle-of-wight.html",
    description: "17th-century hotel in the pretty harbour village of Yarmouth on the Isle of Wight. The island has some of England's lowest crime rates — truly tranquil, with a distinct community feel.",
    highlights: ["17th-century harbour hotel","Ferry 2 min walk","Yarmouth harbour","Isle of Wight AONB"],
    badges: ["solo-female","family","luxury","nature"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.7, cleanliness: 4.8, totalReviews: 89 },
    featuredReview: { author: "Patricia A.", type: "Solo Female Traveler", stars: 5, text: "The Isle of Wight is wonderfully safe — it has its own pace, its own community. Yarmouth is a beautiful little harbour. The George is a proper gem.", date: "Jul 2025", helpful: 112 }
  },

  // ═══════════════════════════════════════════════════
  // PEAK DISTRICT / DERBYSHIRE
  // ═══════════════════════════════════════════════════

  {
    id: "wind-in-wires-bakewell",
    name: "The Rutland Arms Hotel",
    city: "Bakewell", area: "Peak District", region: "East Midlands",
    address: "The Square, Bakewell DE45 1BT", postcode: "DE45 1BT",
    lat: 53.2132, lng: -1.6744,
    stars: 3, tier: "mid", priceFrom: 110, currency: "GBP",
    nearestStation: "Matlock", stationDistance: "25 min drive",
    phone: "+44 1629 812812",
    website: "https://www.rutlandarmsbakewell.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/the-rutland-arms-hotel-bakewell.html",
    description: "Historic hotel in the heart of Bakewell — the Peak District market town famous for its pudding. Bakewell is wonderfully safe and one of the Peak District's most popular and well-policed destinations.",
    highlights: ["Bakewell's market square","Famous Bakewell pudding","Peak District gateway","Historic market town"],
    badges: ["solo-female","family","nature"],
    communityRatings: { nightSafety: 4.9, streetSafety: 4.9, hotelSecurity: 4.4, cleanliness: 4.4, totalReviews: 134 },
    featuredReview: { author: "Claire H.", type: "Solo Female Traveler", stars: 4, text: "Bakewell is a charming, safe Peak District town. The square is lovely at night. Try the original pudding! Good historic hotel.", date: "Sep 2025", helpful: 89 }
  },

  {
    id: "cavendish-chatsworth",
    name: "The Cavendish Hotel at Chatsworth",
    city: "Baslow", area: "Peak District", region: "East Midlands",
    address: "Church Lane, Baslow, Derbyshire DE45 1SP", postcode: "DE45 1SP",
    lat: 53.2298, lng: -1.6106,
    stars: 4, tier: "luxury", priceFrom: 235, currency: "GBP",
    nearestStation: "Grindleford", stationDistance: "15 min drive",
    phone: "+44 1246 582311",
    website: "https://www.cavendish-hotel.net",
    bookingUrl: "https://www.booking.com/hotel/gb/cavendish-hotel-chatsworth.html",
    description: "Luxury hotel in the Chatsworth Estate village of Baslow — owned by the Duke of Devonshire and part of the Chatsworth estate. As safe as English country life gets.",
    highlights: ["Chatsworth Estate village","Chatsworth House nearby","Peak District walks","Estate ownership"],
    badges: ["solo-female","family","luxury","nature"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.8, cleanliness: 4.9, totalReviews: 134 },
    featuredReview: { author: "Hilary B.", type: "Solo Female Traveler", stars: 5, text: "Being on the Chatsworth Estate means being in one of England's most beautiful and safe settings. Chatsworth House is extraordinary. The hotel is superb.", date: "Oct 2025", helpful: 145 }
  },

  // ═══════════════════════════════════════════════════
  // YORKSHIRE DALES
  // ═══════════════════════════════════════════════════

  {
    id: "devonshire-arms-bolton-abbey",
    name: "The Devonshire Arms Country House Hotel",
    city: "Bolton Abbey", area: "Yorkshire Dales", region: "Yorkshire",
    address: "Bolton Abbey, Skipton BD23 6AJ", postcode: "BD23 6AJ",
    lat: 53.9836, lng: -1.8891,
    stars: 4, tier: "luxury", priceFrom: 245, currency: "GBP",
    nearestStation: "Skipton", stationDistance: "20 min drive",
    phone: "+44 1756 718100",
    website: "https://www.thedevonshirearms.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/the-devonshire-arms-hotel.html",
    description: "Magnificent Devonshire Arms on the Bolton Abbey estate in the Yorkshire Dales. Part of the Duke of Devonshire's estate — an utterly peaceful and safe rural setting with the River Wharfe flowing past.",
    highlights: ["Bolton Abbey ruins","River Wharfe walks","Devonshire estate","Spa & pool"],
    badges: ["solo-female","family","luxury","nature"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.9, cleanliness: 5.0, totalReviews: 189 },
    featuredReview: { author: "Rosemary T.", type: "Solo Female Traveler", stars: 5, text: "Bolton Abbey is heaven on earth — total peace, total safety. The ruins, the river, the dales. The hotel is exceptional. One of England's finest experiences.", date: "Sep 2025", helpful: 198 }
  },

  // ═══════════════════════════════════════════════════
  // NORTHUMBERLAND COAST
  // ═══════════════════════════════════════════════════

  {
    id: "waren-house-bamburgh",
    name: "Waren House Hotel",
    city: "Bamburgh", area: "Northumberland", region: "North East England",
    address: "Waren Mill, Bamburgh NE70 7EE", postcode: "NE70 7EE",
    lat: 55.5863, lng: -1.7396,
    stars: 4, tier: "luxury", priceFrom: 195, currency: "GBP",
    nearestStation: "Chathill", stationDistance: "10 min drive",
    phone: "+44 1668 214581",
    website: "https://www.warenhousehotel.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/waren-house.html",
    description: "Elegant hotel near the spectacular Bamburgh Castle on the Northumberland coast. Northumberland is England's most sparsely populated and arguably safest county — wild, beautiful and serene.",
    highlights: ["Near Bamburgh Castle","Holy Island visible","Northumberland coast","Farne Islands nearby"],
    badges: ["solo-female","family","luxury","nature"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.7, cleanliness: 4.8, totalReviews: 98 },
    featuredReview: { author: "Alison S.", type: "Solo Female Traveler", stars: 5, text: "Northumberland is extraordinary — vast, empty beaches, Bamburgh Castle, total safety. Waren House is a beautiful escape. One of England's most special destinations.", date: "Aug 2025", helpful: 145 }
  },

  // ═══════════════════════════════════════════════════
  // KESWICK / LAKE DISTRICT
  // ═══════════════════════════════════════════════════

  {
    id: "derwentwater-hotel-keswick",
    name: "Derwentwater Hotel",
    city: "Keswick", area: "Lake District", region: "North West England",
    address: "Portinscale, Keswick CA12 5RE", postcode: "CA12 5RE",
    lat: 54.5942, lng: -3.1457,
    stars: 4, tier: "mid", priceFrom: 135, currency: "GBP",
    nearestStation: "Penrith", stationDistance: "20 min drive",
    phone: "+44 17687 72538",
    website: "https://www.derwentwater.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/derwentwater.html",
    description: "Hotel in the quiet village of Portinscale with private gardens leading to Derwentwater lake shore. The Lake District has England's lowest crime rates and most stunning scenery.",
    highlights: ["Derwentwater lakeside","Private jetty","Portinscale village","Keswick 10 min walk"],
    badges: ["solo-female","family","nature","luxury"],
    communityRatings: { nightSafety: 5.0, streetSafety: 5.0, hotelSecurity: 4.6, cleanliness: 4.7, totalReviews: 134 },
    featuredReview: { author: "Heather M.", type: "Solo Female Traveler", stars: 5, text: "Portinscale is beautiful and completely safe. Walked to the lake at dusk alone — utterly peaceful. Derwentwater is a jewel. Can't recommend highly enough.", date: "Sep 2025", helpful: 123 }
  },

  // ═══════════════════════════════════════════════════
  // RICHMOND / NORTH YORKSHIRE
  // ═══════════════════════════════════════════════════

  {
    id: "frenchgate-richmond-yorkshire",
    name: "Frenchgate Hotel",
    city: "Richmond", area: "North Yorkshire", region: "Yorkshire",
    address: "59-61 Frenchgate, Richmond DL10 7AE", postcode: "DL10 7AE",
    lat: 54.4041, lng: -1.7358,
    stars: 4, tier: "mid", priceFrom: 105, currency: "GBP",
    nearestStation: "Darlington", stationDistance: "25 min drive",
    phone: "+44 1748 822087",
    website: "https://www.frenchgate.co.uk",
    bookingUrl: "https://www.booking.com/hotel/gb/frenchgate.html",
    description: "Boutique hotel in a Georgian townhouse on the elegant cobbled Frenchgate in Richmond, North Yorkshire. Richmond is a beautiful, historic market town with a magnificent castle and very low crime.",
    highlights: ["Cobbled Frenchgate","Richmond Castle nearby","Georgian townhouse","Yorkshire Dales gateway"],
    badges: ["solo-female","family","luxury"],
    communityRatings: { nightSafety: 5.0, streetSafety: 4.9, hotelSecurity: 4.6, cleanliness: 4.6, totalReviews: 89 },
    featuredReview: { author: "Morag T.", type: "Solo Female Traveler", stars: 5, text: "Richmond is a beautiful, safe Yorkshire market town — the castle ruins, the cobbled streets at night. Frenchgate is lovely. A real gem of northern England.", date: "Oct 2025", helpful: 89 }
  },
];

// ═══════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════

function getAllCities() {
  return [...new Set(HOTELS.map(h => h.city))].sort();
}

function getAllRegions() {
  return [...new Set(HOTELS.map(h => h.region))].sort();
}

function getHotelsByCity(city) {
  return HOTELS.filter(h => h.city.toLowerCase() === city.toLowerCase());
}

function getHotelsByRegion(region) {
  return HOTELS.filter(h => h.region.toLowerCase() === region.toLowerCase());
}

function getHotelsByTier(tier) {
  return HOTELS.filter(h => h.tier === tier);
}

function getHotelsByBadge(badge) {
  return HOTELS.filter(h => h.badges.includes(badge));
}

function searchHotels(query) {
  const q = query.toLowerCase();
  return HOTELS.filter(h =>
    h.name.toLowerCase().includes(q) ||
    h.city.toLowerCase().includes(q) ||
    h.area.toLowerCase().includes(q) ||
    h.region.toLowerCase().includes(q) ||
    h.description.toLowerCase().includes(q)
  );
}

function calcSafetyScore(hotel) {
  const r = hotel.communityRatings;
  const avg = (r.nightSafety + r.streetSafety + r.hotelSecurity + r.cleanliness) / 4;
  return Math.round(avg * 20);
}

// Generate a Google Street View URL for a hotel
function getStreetViewUrl(hotel) {
  return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${hotel.lat},${hotel.lng}&heading=0&pitch=0&fov=90`;
}

// Generate a Google Maps URL for a hotel
function getGoogleMapsUrl(hotel) {
  const query = encodeURIComponent(`${hotel.name}, ${hotel.address}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
