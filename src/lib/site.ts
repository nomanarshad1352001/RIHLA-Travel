export const SITE = {
  name: "Rihla Travel UK",
  shortName: "Rihla",
  arabic: "رحلة",
  slogan: "Your Journey. Our Care.",
  tagline: "Premium Umrah, Hajj & Ziyarat journeys from the United Kingdom",
  phone: "+44 20 7946 0000",
  phoneHref: "tel:+442079460000",
  phoneDisplay: "020 7946 0000",
  whatsappDisplay: "+44 7700 900 123",
  whatsappNumber: "447700900123",
  email: "salaam@rihlatravel.co.uk",
  address: "Suite 4, 45 Commercial Road, London E1 1LA, United Kingdom",
  hoursWeek: "Monday – Saturday · 9:30am – 6:30pm",
  hoursSun: "Sunday · 11:00am – 4:00pm",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const NAV_LINKS = [
  { href: "/umrah", label: "Umrah" },
  { href: "/hajj", label: "Hajj" },
  { href: "/family-group", label: "Family & Group" },
  { href: "/rihla-care", label: "Rihla Care" },
  { href: "/resources", label: "Resources" },
  { href: "/why-rihla", label: "Why Rihla" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const JOURNEY_OPTIONS = [
  { value: "umrah", label: "Umrah" },
  { value: "hajj", label: "Hajj 2026 / 1447" },
  { value: "ziyarat", label: "Ziyarat Tour" },
  { value: "family", label: "Family & Group" },
] as const;

export const AIRPORTS = [
  "London Heathrow (LHR)",
  "London Gatwick (LGW)",
  "Manchester (MAN)",
  "Birmingham (BHX)",
  "Glasgow (GLA)",
  "Other / Not sure yet",
] as const;
