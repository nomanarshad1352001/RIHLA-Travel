/* ──────────────────────────────────────────────────────────────
   Rihla Travel UK — demonstration content
   All packages, prices, reviews and figures are illustrative
   dummy data for design purposes.
   ────────────────────────────────────────────────────────────── */

const px = (id: number, w = 1600, h?: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}${h ? `&h=${h}&fit=crop` : ""}`;

export const IMG = {
  heroPoster:
    "https://images.pexels.com/videos/38255864/devotion-eid-faith-grand-mosque-38255864.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
  heroVideo:
    "https://videos.pexels.com/video-files/38255864/16243365_3840_2160_60fps.mp4",
  kaabaAerial: px(35332385, 1600, 1000),
  kaabaCrowd: px(35446836, 1600, 1060),
  tawaf: px(35269078, 1000, 1300),
  clockTower: px(5004002, 1000, 1350),
  madinahDome: px(38498727, 1600, 1000),
  madinahCourtyard: px(33169785, 1600, 1100),
  madinahCrowd: px(20277839, 1600, 1000),
  madinahMinaret: px(11259857, 1400, 900),
  prayerInterior: px(13997035, 1600, 1000),
  mosqueArches: px(12123501, 1600, 1000),
  mosqueGeometric: px(36232116, 1000, 1350),
  mosqueChandeliers: px(34734461, 1000, 1350),
  mosqueCeiling: px(36318057, 1000, 1350),
  hotelMarble: px(14011664, 1600, 1000),
  hotelLobby: px(29000086, 1600, 1000),
  hotelChandelier: px(33824477, 1400, 900),
  airplaneWing: px(91217, 1600, 1000),
  familyAirport: px(11668208, 1200, 900),
  familyAirport2: px(11668205, 1000, 1350),
  quranBeads: px(8407961, 1000, 1350),
  quranWhite: px(15707529, 1200, 900),
  quranBlue: px(7249183, 1400, 900),
  tasbihMan: px(36519880, 1000, 1400),
  womenPraying: px(8488989, 1000, 1350),
  airportLuggage: px(3728284, 1000, 1350),
} as const;

/* ── Packages ───────────────────────────────────────────────── */

export type TravelPackage = {
  slug: string;
  kind: "umrah" | "hajj";
  title: string;
  category: "3-Star" | "4-Star" | "5-Star" | "Seasonal" | "Hajj";
  badge?: string;
  nights: number;
  split: string;
  hotels: string;
  distance: string;
  price: number;
  features: string[];
  image: string;
  alt: string;
};

export const UMRAH_PACKAGES: TravelPackage[] = [
  {
    slug: "essential-umrah",
    kind: "umrah",
    title: "Essential Umrah",
    category: "3-Star",
    badge: "Great Value",
    nights: 10,
    split: "6 nights Makkah · 4 nights Madinah",
    hotels: "Comfortable 3★ hotels, both cities",
    distance: "Approx. 600m from the Haram",
    price: 1095,
    features: [
      "Return flights from London Heathrow",
      "Umrah visa assistance included",
      "Shared airport & intercity transfers",
      "Guided Umrah on arrival day",
      "Ziyarat options available",
      "Rihla Care support throughout",
    ],
    image: IMG.kaabaCrowd,
    alt: "Pilgrims gathered at the Holy Kaaba in Makkah",
  },
  {
    slug: "classic-umrah",
    kind: "umrah",
    title: "Classic Umrah",
    category: "4-Star",
    badge: "Most Popular",
    nights: 12,
    split: "7 nights Makkah · 5 nights Madinah",
    hotels: "Quality 4★ hotels, both cities",
    distance: "Approx. 350m from the Haram",
    price: 1395,
    features: [
      "Return flights from LHR, MAN or BHX",
      "Umrah visa assistance included",
      "Daily breakfast in both cities",
      "Makkah & Madinah Ziyarat tours",
      "Shared transfers throughout",
      "Rihla Care support throughout",
    ],
    image: IMG.madinahDome,
    alt: "The Green Dome of the Prophet's Mosque in Madinah",
  },
  {
    slug: "premium-umrah",
    kind: "umrah",
    title: "Premium Umrah",
    category: "5-Star",
    badge: "Rihla Signature",
    nights: 10,
    split: "5 nights Makkah · 5 nights Madinah",
    hotels: "Premium 5★ hotels, Clock Tower district",
    distance: "Approx. 150m from the Haram",
    price: 1895,
    features: [
      "Return flights, preferred airline options",
      "Umrah visa assistance included",
      "Daily breakfast + one dinner per city",
      "Private airport transfers",
      "Full Ziyarat programme with guide",
      "24/7 dedicated Rihla Care line",
    ],
    image: IMG.kaabaAerial,
    alt: "Aerial view of Masjid al-Haram and the Kaaba",
  },
  {
    slug: "ramadan-umrah",
    kind: "umrah",
    title: "Ramadan — Last 10 Nights",
    category: "Seasonal",
    badge: "Ramadan 1447",
    nights: 10,
    split: "10 nights in Makkah",
    hotels: "4★ hotel on a half-board basis",
    distance: "Approx. 300m from the Haram",
    price: 2195,
    features: [
      "Suhoor & iftar arranged daily",
      "Umrah visa assistance included",
      "Laylat al-Qadr programme guidance",
      "Group taraweeh arrangements",
      "Shared transfers throughout",
      "Rihla Care support throughout",
    ],
    image: IMG.mosqueChandeliers,
    alt: "Ornate mosque interior lit for the holy nights",
  },
  {
    slug: "december-family-umrah",
    kind: "umrah",
    title: "December Family Umrah",
    category: "Seasonal",
    badge: "School Holidays",
    nights: 9,
    split: "5 nights Makkah · 4 nights Madinah",
    hotels: "4★ hotels with quad & family rooms",
    distance: "Approx. 400m from the Haram",
    price: 1245,
    features: [
      "Child-friendly pacing & guidance",
      "Quad rooms for families of four",
      "Umrah visa assistance included",
      "Daily breakfast in both cities",
      "Family Ziyarat coached tours",
      "Rihla Care support throughout",
    ],
    image: IMG.familyAirport,
    alt: "A mother and daughter at the airport before departure",
  },
  {
    slug: "luxury-umrah",
    kind: "umrah",
    title: "Luxury Umrah Collection",
    category: "5-Star",
    badge: "Fully Tailored",
    nights: 14,
    split: "7 nights Makkah · 7 nights Madinah",
    hotels: "Landmark 5★ hotels, Haram views",
    distance: "Steps from the Haram",
    price: 2650,
    features: [
      "Business class upgrade options",
      "Kaaba-view room upgrade options",
      "Private chauffeur throughout",
      "Private scholar-guided Ziyarat",
      "Flexible dates, fully tailored",
      "Personal Rihla concierge",
    ],
    image: IMG.hotelMarble,
    alt: "Marble foyer of a luxury five-star hotel",
  },
];

export const HAJJ_PACKAGES: TravelPackage[] = [
  {
    slug: "hajj-value",
    kind: "hajj",
    title: "Hajj Value — Shifting",
    category: "Hajj",
    badge: "Hajj 2026",
    nights: 21,
    split: "Makkah · Aziziyah · Mina · Madinah",
    hotels: "3★ / 4★ combination, shifting package",
    distance: "Shuttles arranged during Hajj days",
    price: 6495,
    features: [
      "Return flights & Hajj visa processing",
      "Nusuk registration guidance",
      "Mina, Arafah & Muzdalifah arrangements",
      "Meals provided during Hajj days",
      "Experienced group leaders & scholar",
      "Pre-departure Hajj seminar included",
    ],
    image: IMG.kaabaCrowd,
    alt: "Pilgrims gathered for the Hajj season in Makkah",
  },
  {
    slug: "hajj-express",
    kind: "hajj",
    title: "Hajj Express — 2 Weeks",
    category: "Hajj",
    badge: "Time-Efficient",
    nights: 14,
    split: "Makkah · Mina · Madinah",
    hotels: "5★ Makkah · 4★ Madinah",
    distance: "Approx. 400m from the Haram",
    price: 8495,
    features: [
      "Return flights & Hajj visa processing",
      "Non-shifting Makkah hotel",
      "Upgraded Mina camp allocation",
      "Meals provided during Hajj days",
      "Dedicated guide per small group",
      "Pre-departure Hajj seminar included",
    ],
    image: IMG.airplaneWing,
    alt: "Airplane wing above sunset clouds en route to Jeddah",
  },
  {
    slug: "hajj-premium",
    kind: "hajj",
    title: "Hajj Premium — Non-Shifting",
    category: "Hajj",
    badge: "Rihla Signature",
    nights: 21,
    split: "Makkah · Mina · Madinah",
    hotels: "5★ hotels throughout, non-shifting",
    distance: "Steps from the Haram",
    price: 9995,
    features: [
      "Return flights & Hajj visa processing",
      "Non-shifting — one room throughout",
      "Premium Mina camp, closest categories",
      "Full board during Hajj days",
      "Private transfers & named guide",
      "Qurbani arranged on your behalf",
    ],
    image: IMG.madinahCourtyard,
    alt: "The courtyard of the Prophet's Mosque in Madinah",
  },
];

export const INCLUSIONS = [
  { icon: "Plane", label: "Return flights", note: "From major UK airports" },
  { icon: "FileCheck", label: "Visa assistance", note: "Documentation handled" },
  { icon: "Hotel", label: "Verified hotels", note: "Distances stated honestly" },
  { icon: "Bus", label: "All transfers", note: "Airport & intercity" },
  { icon: "MapPin", label: "Ziyarat tours", note: "With experienced guides" },
  { icon: "Headset", label: "24/7 Rihla Care", note: "Before, during & after" },
] as const;

/* ── Rihla Care ─────────────────────────────────────────────── */

export const CARE_STAGES = [
  {
    step: "01",
    key: "plan",
    label: "PLAN",
    icon: "Compass",
    title: "We plan around you",
    tagline: "Your journey begins with a conversation, not a checkout.",
    points: [
      "Free consultation with a named Rihla consultant",
      "Transparent, itemised quotes — every cost explained",
      "Honest advice on dates, routes, hotels and pacing",
      "Flexible payment plans to spread the cost",
    ],
  },
  {
    step: "02",
    key: "prepare",
    label: "PREPARE",
    icon: "ClipboardCheck",
    title: "Prepared with confidence",
    tagline: "You will never wonder “what happens next?”.",
    points: [
      "Pre-departure seminar & printed journey guide",
      "Ihram, packing and vaccination checklists",
      "Visa, documents and Nusuk guidance handled",
      "Meet your guide & group before you fly",
    ],
  },
  {
    step: "03",
    key: "travel",
    label: "TRAVEL",
    icon: "PlaneTakeoff",
    title: "Accompanied, never alone",
    tagline: "A Rihla guide travels with you from check-in.",
    points: [
      "Airport meet & greet at departure",
      "Group WhatsApp with daily reminders & duas",
      "On-ground team in both Makkah and Madinah",
      "Guided Umrah step-by-step on arrival",
    ],
  },
  {
    step: "04",
    key: "support",
    label: "SUPPORT",
    icon: "HeartHandshake",
    title: "Cared for around the clock",
    tagline: "Whatever arises, a real person answers.",
    points: [
      "24/7 emergency line, answered by our team",
      "Wheelchair & mobility assistance arranged",
      "Dietary and medical requirements catered for",
      "Daily check-ins for elderly travellers",
    ],
  },
  {
    step: "05",
    key: "return",
    label: "RETURN",
    icon: "Home",
    title: "Welcomed home",
    tagline: "The relationship doesn't end at arrivals.",
    points: [
      "Welcome-home call within 48 hours",
      "Your feedback personally reviewed",
      "Return-traveller benefits & priority access",
      "Invitation to the Rihla alumni community",
    ],
  },
] as const;

/* ── Commitments (Why Rihla) ────────────────────────────────── */

export const COMMITMENTS = [
  {
    icon: "HandCoins",
    title: "No Hidden Charges",
    summary: "The price we quote is the price you pay.",
    detail:
      "Every quote is fully itemised before you commit — flights, hotels, transfers, visas and taxes. If it isn't listed, it doesn't exist. No airport surprises, no supplements appearing later, no fine print.",
    proof: "Itemised written quote before any deposit",
  },
  {
    icon: "Eye",
    title: "Transparent Information",
    summary: "Honest answers to honest questions.",
    detail:
      "We name your hotels, state distances to the Haram in metres, disclose flight times and layovers, and tell you plainly what a package can't do. If a cheaper date serves you better, we'll tell you.",
    proof: "Hotel names & Haram distances in every quote",
  },
  {
    icon: "Hotel",
    title: "Carefully Selected Hotels",
    summary: "Inspected by us, approved for you.",
    detail:
      "Every hotel in our collection is walked, photographed and reviewed by the Rihla team — lifts that work at Fajr time, genuine walking distances, breakfast quality, and prayer-friendly rooms.",
    proof: "Personally inspected hotel collection",
  },
  {
    icon: "Headset",
    title: "Dedicated Support",
    summary: "One consultant, start to finish.",
    detail:
      "You are never passed between departments. Your named consultant plans your journey, prepares you for it, and remains reachable while you travel — with a 24/7 line during your trip.",
    proof: "Named consultant + 24/7 in-country line",
  },
  {
    icon: "HeartHandshake",
    title: "Customer Satisfaction",
    summary: "Measured in pilgrims who return.",
    detail:
      "Over 98% of Rihla travellers say they would recommend us to family — the highest compliment in our community. Every review is read by our founders and shapes how we serve the next group.",
    proof: "4.9/5 average across verified reviews",
  },
] as const;

/* ── Stats ──────────────────────────────────────────────────── */

export const STATS = [
  { value: 5000, suffix: "+", label: "Pilgrims guided since 2019" },
  { value: 4.9, suffix: "/5", label: "Average pilgrim rating", decimals: 1 },
  { value: 98, suffix: "%", label: "Would recommend Rihla" },
  { value: 40, suffix: "+", label: "Group departures every year" },
] as const;

/* ── Testimonials ───────────────────────────────────────────── */

export const TESTIMONIALS = [
  {
    quote:
      "From the first phone call to the moment we landed home, everything was exactly as they said it would be. The hotel really was two minutes from the Haram. I have never felt so looked after.",
    name: "Fatima & Ahmed K.",
    location: "Birmingham",
    journey: "Premium Umrah · December 2025",
  },
  {
    quote:
      "It was my first Umrah and I travelled alone. The seminar answered questions I didn't even know I had, and the guide walked our group through every rukn on the first night. Truly priceless.",
    name: "Yusuf M.",
    location: "London",
    journey: "Classic Umrah · February 2025",
  },
  {
    quote:
      "Eleven of us, three generations — and my mother in a wheelchair. Rihla arranged her chair, her room near lifts, even her favourite dates at iftar. They treat your family like their own.",
    name: "The Chaudhry Family",
    location: "Leicester",
    journey: "December Family Umrah · 2025",
  },
  {
    quote:
      "The last ten nights of Ramadan were the most precious of my life. Sahoor and iftar were seamless, and our guide kept us away from the crowds at just the right times.",
    name: "Aisha R.",
    location: "Manchester",
    journey: "Ramadan Last 10 · 1446 AH",
  },
  {
    quote:
      "For Hajj you need people you can trust completely. The seminar, the Mina arrangements, the calm leadership on the Day of Arafah — Rihla delivered on every single promise.",
    name: "Brother Tariq & Group",
    location: "London",
    journey: "Hajj Premium · 1446 AH",
  },
  {
    quote:
      "Travelling as two sisters, safety and ease mattered most. Our female consultant planned everything — we never once felt out of our depth.",
    name: "Sadia & Rehana",
    location: "Glasgow",
    journey: "Sisters' Classic Umrah · 2025",
  },
  {
    quote:
      "They told me plainly what the shifting package would and wouldn't feel like. That honesty is why, when the days got hard, I trusted them completely.",
    name: "Imran H.",
    location: "Bradford",
    journey: "Hajj Express · 1446 AH",
  },
  {
    quote:
      "Three generations of our family stood before the Kaaba together. My grandfather wept — and our guide quietly had tissues ready. That is Rihla.",
    name: "The Begum Family",
    location: "Luton",
    journey: "Family Umrah · Easter 2025",
  },
  {
    quote:
      "Our room looked directly at the Kaaba. Watching Tahajjud from that window on our last night was worth every penny — and Rihla made it simple.",
    name: "Adam & Sumayya K.",
    location: "Cardiff",
    journey: "Luxury Umrah · 2025",
  },
  {
    quote:
      "The Ziyarat guide didn't just drive us around — he narrated the seerah at every hill until Uhud felt like yesterday. My children still talk about it.",
    name: "Nusrat J.",
    location: "Sheffield",
    journey: "Umrah & Ziyarat · 2025",
  },
] as const;

/* ── FAQs ───────────────────────────────────────────────────── */

export const UMRAH_FAQS = [
  {
    q: "Do I need a visa for Umrah, and do you arrange it?",
    a: "Yes — and we handle it for you. Depending on your passport and travel plans, we'll advise whether an Umrah visa or tourist eVisa serves you best, prepare the documentation, and keep you updated at every step. Saudi regulations change periodically; our advisors always confirm the latest requirements for your situation.",
  },
  {
    q: "How much deposit do I need to secure my place?",
    a: "Places can be secured from £200 per person, with the balance payable in instalments. Your consultant will agree a payment plan that suits your circumstances before you commit to anything.",
  },
  {
    q: "Are flights included in the package price?",
    a: "Yes. All packages shown include return flights from major UK airports — London Heathrow, Gatwick, Manchester or Birmingham. Departure airport, airline, times and any layovers are confirmed in writing with your quote.",
  },
  {
    q: "How far are your hotels really from the Haram?",
    a: "We state walking distances in metres, measured by our own team — not estimated from a map. Where a hotel requires a shuttle at prayer times, we tell you plainly and include it in the package.",
  },
  {
    q: "Can sisters travel for Umrah without a mahram?",
    a: "Guidance on this has evolved under recent Saudi regulations, and many sisters now travel in organised groups. Because every situation is different, our advisors — including female consultants — will explain the current rules and help you plan with complete confidence.",
  },
  {
    q: "Is my money protected?",
    a: "All flight-inclusive packages are financially protected, and you will receive written confirmation of the protection arrangements with your invoice. Payments are made by secure bank transfer or card — never cash.",
  },
  {
    q: "When is the best time of year to perform Umrah?",
    a: "Ramadan carries immense reward but also the largest crowds and highest prices. December to February offers mild weather and school-holiday alignment, while September to November is often the best value. Tell us your priorities and we'll advise honestly.",
  },
  {
    q: "What should I pack for Umrah?",
    a: "We've written a complete Rihla Packing Checklist in our Resources centre — covering ihram, footwear, prayer items, medication and the small things most pilgrims forget. Every booked customer also receives a printed copy at the pre-departure seminar.",
  },
] as const;

export const HAJJ_FAQS = [
  {
    q: "How do I register for Hajj from the UK?",
    a: "Hajj places are allocated through the official Nusuk platform and licensed operators. We guide you through registration step-by-step, ensure your documentation is correct, and keep you informed on timelines for the 1447 / 2026 season.",
  },
  {
    q: "What is the difference between shifting and non-shifting packages?",
    a: "A shifting package includes a period in standard accommodation outside central Makkah (often Aziziyah) during peak days, reducing cost significantly. A non-shifting package keeps you in one hotel throughout. We'll explain the honest trade-offs of each before you decide.",
  },
  {
    q: "How physically demanding is Hajj, and how do I prepare?",
    a: "Hajj involves walking long distances in heat, often on little sleep. Our six-month preparation programme includes a progressive walking plan, health and vaccination guidance, and honest advice on fitness — including options for elderly pilgrims and those with limited mobility.",
  },
  {
    q: "Are meals included during the Hajj days?",
    a: "Yes. Meals are provided in Mina and Arafah on all our packages, ranging from full catering to premium full board depending on the package. Dietary requirements are recorded well in advance.",
  },
  {
    q: "Can I pay for Hajj in instalments?",
    a: "Yes. Most of our Hujjaj spread payments over 6–18 months. A deposit secures your place, and your consultant will structure a plan around your circumstances with everything documented in writing.",
  },
] as const;

/* ── Resources ──────────────────────────────────────────────── */

export type ResourceBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "dua"; arabic: string; translit: string; translation: string };

export type Resource = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  minutes: number;
  icon: string;
  image?: string;
  content: ResourceBlock[];
};

export const RESOURCE_CATEGORIES = [
  "All",
  "Umrah Guides",
  "Hajj Preparation",
  "Checklists",
  "Duas",
  "City Guides",
  "Travel Advice",
] as const;

export const RESOURCES: Resource[] = [
  {
    id: "umrah-step-by-step",
    category: "Umrah Guides",
    title: "Umrah Step-by-Step",
    excerpt: "Ihram, Tawaf, Sa'i and Halq — the complete walkthrough for first-time pilgrims.",
    minutes: 8,
    icon: "MoonStar",
    image: IMG.kaabaAerial,
    content: [
      { type: "p", text: "Umrah consists of four essential acts. Take your time with each — there is no race, only presence of heart." },
      { type: "h", text: "1. Ihram — intention & the sacred state" },
      { type: "p", text: "Before crossing the Miqat, bathe, trim nails, and men change into the two white unstitched cloths. Women wear ordinary modest dress. Make your intention and recite the Talbiyah: Labbayk Allahumma labbayk…" },
      { type: "h", text: "2. Tawaf — seven circuits of the Kaaba" },
      { type: "p", text: "Begin at the Black Stone corner, keeping the Kaaba on your left. Seven circuits counter-clockwise. Men uncover the right shoulder and walk briskly in the first three circuits where crowds allow. Pray two rak'ahs behind Maqam Ibrahim afterwards if possible." },
      { type: "h", text: "3. Sa'i — between Safa and Marwah" },
      { type: "p", text: "Seven lengths between the hills of Safa and Marwah, beginning at Safa facing the Kaaba in dua. The green-lit section marks where men jog lightly." },
      { type: "h", text: "4. Halq or Taqsir — completing Umrah" },
      { type: "p", text: "Men shave (halq — most rewarded) or trim; women cut a fingertip's length. Your Umrah is complete — mabroor, in sha Allah." },
      { type: "list", items: ["Refrain from scented products while in ihram", "Keep pebbles, floor markings and prayer areas clear for others", "Drink Zamzam with intention — it is for whatever you drink it for"] },
    ],
  },
  {
    id: "first-umrah",
    category: "Umrah Guides",
    title: "Your First Umrah: What to Expect",
    excerpt: "The crowds, the first sight of the Kaaba, the emotions — gently explained.",
    minutes: 6,
    icon: "Sparkles",
    image: IMG.tawaf,
    content: [
      { type: "p", text: "Nothing fully prepares you for your first glimpse of the Kaaba — protect that moment. Agree with your group beforehand that the first Tawaf is unhurried." },
      { type: "list", items: ["Land, rest, then perform Umrah when refreshed if possible", "The Haram is busiest 30 minutes before and after each prayer", "Hydration matters more than you think — Zamzam points are everywhere", "Set a fixed meeting point with family in case you are separated", "Friday in Makkah is beautiful but intense — arrive early"] },
      { type: "p", text: "Your Rihla guide performs the first Umrah alongside the group, so you'll never face the rituals alone." },
    ],
  },
  {
    id: "hajj-six-months",
    category: "Hajj Preparation",
    title: "Hajj: The 6-Month Countdown",
    excerpt: "A month-by-month preparation plan — fitness, documents, rituals and mindset.",
    minutes: 10,
    icon: "CalendarDays",
    image: IMG.kaabaCrowd,
    content: [
      { type: "h", text: "6 months out" },
      { type: "list", items: ["Begin a daily walking habit — target 5km comfortably", "Book vaccinations and a general health check", "Attend the Rihla Hajj seminar (in person or online)"] },
      { type: "h", text: "3 months out" },
      { type: "list", items: ["Study the rites: our seminar handbook covers each day", "Break in your walking sandals — never travel with new footwear", "Settle debts, write your will, and seek forgiveness of those you've wronged"] },
      { type: "h", text: "1 month out" },
      { type: "list", items: ["Pack with the Rihla checklist — 15kg discipline pays off in Mina", "Memorise the core duas and Talbiyah", "Confirm medication supplies for the full trip plus one week"] },
      { type: "p", text: "Hajj is as much a spiritual as a physical undertaking — arrive with a heart already at the Haram." },
    ],
  },
  {
    id: "days-of-hajj",
    category: "Hajj Preparation",
    title: "The Days of Hajj Explained",
    excerpt: "From Yawm al-Tarwiyah to Tawaf al-Wada — what actually happens, day by day.",
    minutes: 9,
    icon: "ScrollText",
    image: IMG.madinahCourtyard,
    content: [
      { type: "h", text: "8 Dhul-Hijjah — Mina" },
      { type: "p", text: "Enter ihram and proceed to Mina. Five prayers, overnight in the tent city. Rest deeply — tomorrow is the greatest day." },
      { type: "h", text: "9 Dhul-Hijjah — Arafah" },
      { type: "p", text: "The Day of Arafah: Hajj itself. Stand in dua until sunset, then move to Muzdalifah for Maghrib and Isha, sleeping under the stars and collecting pebbles." },
      { type: "h", text: "10 Dhul-Hijjah — Eid & Rami" },
      { type: "p", text: "Stone Jamrat al-Aqabah, offer Qurbani, shave or trim, and perform Tawaf al-Ifadah and Sa'i. The major restrictions of ihram are lifted." },
      { type: "h", text: "11–13 Dhul-Hijjah — Days of Tashreeq" },
      { type: "p", text: "Stone all three Jamarat each afternoon, remaining in Mina. Depart for Makkah before sunset on the 12th or stay to the 13th." },
      { type: "p", text: "Before leaving Makkah for home, the farewell Tawaf (al-Wada) is your last act in the sacred city." },
    ],
  },
  {
    id: "packing-checklist",
    category: "Checklists",
    title: "The Rihla Packing Checklist",
    excerpt: "Sixty items, refined over five years of pilgrim feedback — forget nothing.",
    minutes: 5,
    icon: "Luggage",
    image: IMG.airportLuggage,
    content: [
      { type: "h", text: "Ihram & prayer" },
      { type: "list", items: ["Two sets of ihram cloth (men)", "Ihram belt or neck pouch", "Unscented soap & toiletries for ihram days", "Pocket prayer mat", "Small Quran & dua booklet", "Tasbih counter"] },
      { type: "h", text: "Clothing & footwear" },
      { type: "list", items: ["Broken-in walking sandals (never new)", "Slip-on shoes for mosque entrances", "Shoe bag — you will thank yourself", "Light layers — air-conditioning is powerful indoors", "Abaya-friendly pin set / undercaps"] },
      { type: "h", text: "Health & documents" },
      { type: "list", items: ["Passport + 2 photocopies kept separately", "Vaccination certificates", "Medication in original packaging + prescription copy", "Rehydration salts & blister plasters", "UK & Saudi plug adaptors, power bank"] },
      { type: "p", text: "Booked travellers receive the full printed checklist — with our team's handwritten additions — at the pre-departure seminar." },
    ],
  },
  {
    id: "duas-collection",
    category: "Duas",
    title: "Duas for the Journey",
    excerpt: "Essential supplications with Arabic, transliteration and meaning.",
    minutes: 7,
    icon: "BookOpen",
    image: IMG.quranBeads,
    content: [
      { type: "dua", arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ", translit: "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun", translation: "Glory to Him who has subjected this to us, and we could never have it otherwise; and surely, to our Lord we shall return. — The travel dua" },
      { type: "dua", arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ", translit: "Labbayk Allahumma labbayk, labbayka la sharika laka labbayk", translation: "Here I am, O Allah, here I am. Here I am, You have no partner, here I am. — The Talbiyah" },
      { type: "dua", arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", translit: "Allahummaf-tah li abwaba rahmatik", translation: "O Allah, open for me the doors of Your mercy. — On entering the mosque" },
      { type: "p", text: "At the first sight of the Kaaba, many scholars mention that duas are accepted — prepare yours in advance and ask with certainty." },
    ],
  },
  {
    id: "makkah-guide",
    category: "City Guides",
    title: "Makkah City Guide",
    excerpt: "Navigating the Haram, gates, Zamzam, prayer spots and quiet hours.",
    minutes: 8,
    icon: "Building2",
    image: IMG.clockTower,
    content: [
      { type: "list", items: ["King Abdul Aziz Gate (Gate 1) leads directly to the mataf", "Prayer areas fill from the mataf outward — arrive 60–90 min early on Fridays", "Zamzam stations are signposted on every floor", "Upper floors and roof offer calmer Tawaf at off-peak hours", "Keep hotel name & gate meeting points saved offline — signal is congested at peak times"] },
      { type: "p", text: "After Fajr until sunrise is the most serene time in the Haram — guard those hours." },
    ],
  },
  {
    id: "madinah-guide",
    category: "City Guides",
    title: "Madinah City Guide",
    excerpt: "The Prophet's City — Riyad ul-Jannah, salutations, and sacred etiquette.",
    minutes: 8,
    icon: "MoonStar",
    image: IMG.madinahDome,
    content: [
      { type: "list", items: ["Riyad ul-Jannah visits are booked via the Nusuk app — book early in your stay", "Send salutations upon the Prophet ﷺ with composure — this is a place of adab", "Quba Mosque: two rak'ahs carry the reward of an Umrah — visit Saturday mornings if able", "Uhud, Qiblatain and the Seven Mosques are covered on our guided Ziyarat", "Dates from Madinah (Ajwa especially) make the most beloved gifts home"] },
      { type: "p", text: "Madinah rewards stillness. Schedule nothing-heavy afternoons and let the city calm you." },
    ],
  },
  {
    id: "ziyarat-guide",
    category: "City Guides",
    title: "Ziyarat: The Sacred Sites",
    excerpt: "Uhud, Quba, Jabal al-Thawr and more — with context that brings them alive.",
    minutes: 9,
    icon: "MapPin",
    image: IMG.madinahCrowd,
    content: [
      { type: "h", text: "In Madinah" },
      { type: "list", items: ["Mount Uhud & the graves of the martyrs — love for the Uhud community", "Quba — the first mosque of Islam", "Masjid al-Qiblatain — where the qiblah turned", "Jannat al-Baqi — send salam upon the buried companions"] },
      { type: "h", text: "In Makkah" },
      { type: "list", items: ["Jabal al-Nour & the Cave of Hira (external view recommended; the climb is demanding)", "Cave of Thawr — refuge on the Hijrah route", "Jannat al-Mu'alla cemetery"] },
      { type: "p", text: "Ziyarat is a lesson in seerah, not a photo stop. Our guides narrate each site so it remains with you long after you return." },
    ],
  },
  {
    id: "health-vaccinations",
    category: "Travel Advice",
    title: "Health, Vaccinations & Fitness",
    excerpt: "Required vaccinations, managing medication, and building walking fitness.",
    minutes: 6,
    icon: "HeartPulse",
    image: IMG.tasbihMan,
    content: [
      { type: "list", items: ["Meningococcal ACWY vaccination is required for pilgrimage visas", "Seasonal flu & COVID-19 boosters are advised — check current Saudi requirements", "Bring medication in original packaging with a prescription copy", "Build to 5km daily walking 8 weeks before departure", "Pace yourself in heat — midday rituals are worth adjusting around"] },
      { type: "p", text: "If you have a condition that concerns you, tell your consultant — we plan worship around health, not despite it." },
    ],
  },
  {
    id: "money-sim",
    category: "Travel Advice",
    title: "Money, SIM & Connectivity",
    excerpt: "Riyals, cards, data eSIMs and staying reachable without roaming bills.",
    minutes: 4,
    icon: "Wallet",
    image: IMG.quranWhite,
    content: [
      { type: "list", items: ["Cards are widely accepted; carry £100–£150 equivalent in riyals for small vendors", "eSIMs from UK providers are simplest — install before you fly", "Save your hotel location pin offline in both cities", "Agree a daily check-in time with family back home", "Keep Rihla's 24/7 number saved as a favourite contact"] },
    ],
  },
  {
    id: "elderly-parents",
    category: "Travel Advice",
    title: "Travelling with Elderly Parents",
    excerpt: "Wheelchairs, pacing, lift access and the small adjustments that change everything.",
    minutes: 6,
    icon: "Users",
    image: IMG.womenPraying,
    content: [
      { type: "list", items: ["Wheelchairs can be arranged at both Harams — request at booking", "Choose hotels near lifts and gates; distance beats star-rating for elders", "Plan one major ritual per day maximum", "Electric scooters are permitted on upper Tawaf floors", "Our guides perform daily check-ins for travellers over 65"] },
      { type: "p", text: "Serving elderly pilgrims is the heart of Rihla Care — tell us their needs and we will quietly take care of the rest." },
    ],
  },
];

/* ── Hotels showcase ────────────────────────────────────────── */

export const HOTELS = [
  {
    city: "Makkah",
    name: "Signature Partner Hotel — Abraj District",
    image: IMG.hotelMarble,
    alt: "Grand marble foyer of a partner hotel in Makkah",
    points: ["150m from King Abdul Aziz Gate", "Haram and partial Kaaba-view categories", "Full buffet breakfast with early Fajr service", "Dedicated family & accessible floors"],
  },
  {
    city: "Madinah",
    name: "Signature Partner Hotel — Markaziya",
    image: IMG.hotelLobby,
    alt: "Elegant lobby of a partner hotel in Madinah",
    points: ["Under 3 minutes to the Prophet's Mosque", "Views towards the Green Dome", "Ziyarat departure lounge in the lobby", "Quiet rooms guaranteed on request"],
  },
] as const;

/* ── Family & Group ─────────────────────────────────────────── */

export const FAMILY_PILLARS = [
  {
    icon: "Users",
    title: "Families with Children",
    text: "Quad rooms, child-paced itineraries, pram-friendly routes and guides who genuinely enjoy little ones. School-holiday departures every December, Easter and summer.",
  },
  {
    icon: "Accessibility",
    title: "Elderly & Limited Mobility",
    text: "Wheelchairs at both Harams, lift-adjacent rooms, electric scooter Tawaf options and daily check-ins for travellers over 65.",
  },
  {
    icon: "UsersRound",
    title: "Group Leaders & Organisers",
    text: "Mosque, community and family groups of 10–200. We handle payments per family, rooming lists and briefings — you gather the people, we carry the logistics.",
  },
  {
    icon: "Sparkles",
    title: "First-Time Pilgrims",
    text: "Extra seminars, slower pacing, and a guide who explained your first Umrah ten thousand times — and still loves it.",
  },
  {
    icon: "Moon",
    title: "Sisters' Groups",
    text: "Sister-led departures with female consultants on the ground — travel, ask and worship with complete ease.",
  },
  {
    icon: "Luggage",
    title: "Custom Requirements",
    text: "Dietary needs, connecting relatives flying from different cities, extended stays, Taif & AlUla add-ons — if it matters to you, we plan for it.",
  },
] as const;

/* ── About ──────────────────────────────────────────────────── */

export const VALUES = [
  {
    arabic: "أمانة",
    word: "Amanah",
    title: "Trust",
    text: "A pilgrim's journey is an amanah placed in our hands. We guard it as such — in every quote, hotel and promise.",
  },
  {
    arabic: "إحسان",
    word: "Ihsan",
    title: "Excellence",
    text: "To worship Allah as though you see Him — ihsan is our standard for every detail, from the seminar hall to the Mina tent.",
  },
  {
    arabic: "صدق",
    word: "Sidq",
    title: "Honesty",
    text: "Distances in metres, flights named, limitations stated plainly. Truthful dealing is worship, and it is our marketing.",
  },
  {
    arabic: "رحمة",
    word: "Rahmah",
    title: "Compassion",
    text: "The elderly, the anxious first-timer, the family of eleven — mercy in service is the heart of the Rihla name.",
  },
] as const;

export const TIMELINE = [
  { year: "2018", title: "A living-room beginning", text: "Rihla is founded in East London by brothers who had organised one too many stressful pilgrimages for family — and decided Britain deserved better." },
  { year: "2019", title: "The first hundred", text: "Our first 100 pilgrims travel. Every single one is called personally on their return — a tradition we have never dropped." },
  { year: "2021", title: "First Hajj group", text: "We guide our first Hajj group and build the six-month preparation programme that now defines our Hajj season." },
  { year: "2023", title: "Rihla Care is born", text: "Plan · Prepare · Travel · Support · Return — our five-stage care journey is formalised across every package we sell." },
  { year: "2024", title: "The Journey Planner", text: "We launch the Rihla Journey Planner so every pilgrim — however niche their needs — receives a genuinely personal proposal." },
  { year: "2026", title: "5,000 pilgrims & beyond", text: "Five thousand pilgrims served, a 4.9/5 rating, and a promise unchanged since that living room: Your Journey. Our Care." },
] as const;

/* ── Hajj days ──────────────────────────────────────────────── */

export const HAJJ_DAYS = [
  { day: "8", name: "Yawm al-Tarwiyah", place: "Mina", text: "Enter ihram and travel to the tent city of Mina. Five prayers and a night of rest — the quiet before the greatest day." },
  { day: "9", name: "Day of Arafah", place: "Arafah → Muzdalifah", text: "Hajj is Arafah. Stand in dua until sunset, then rest beneath the stars in Muzdalifah." },
  { day: "10", name: "Yawm an-Nahr", place: "Jamarat · Makkah", text: "Stone Jamrat al-Aqabah, offer Qurbani, shave or trim, perform Tawaf al-Ifadah. Eid for the world; liberation for you." },
  { day: "11–13", name: "Ayyam al-Tashreeq", place: "Mina", text: "Days of remembrance — stone the three Jamarat each afternoon and dwell in the company of millions." },
  { day: "​", name: "Tawaf al-Wada", place: "Makkah", text: "The farewell circuits. Eyes wet, hearts full — until the next invitation, in sha Allah." },
] as const;
