import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import { Pattern } from "@/components/decor";

const journeys = [
  { href: "/umrah", label: "Umrah Packages" },
  { href: "/hajj", label: "Hajj Packages" },
  { href: "/family-group", label: "Family & Group" },
  { href: "/journey-planner", label: "Journey Planner" },
  { href: "/rihla-care", label: "Rihla Care" },
];

const company = [
  { href: "/about", label: "About Rihla" },
  { href: "/why-rihla", label: "Why Rihla" },
  { href: "/resources", label: "Rihla Resources" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-cream-100">
      <Pattern className="text-gold-500/[0.05]" id="footer" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="wrap relative grid gap-14 py-20 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.1fr]">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="relative grid h-12 w-12 place-items-center">
              <span className="absolute inset-0 rotate-45 rounded-[10px] border border-gold-500/70" />
              <span className="font-arabic text-2xl leading-none text-gold-400">ر</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.7rem] font-semibold tracking-[0.22em] text-cream-50">
                RIHLA
              </span>
              <span className="mt-1 text-[0.5625rem] font-bold tracking-[0.42em] text-gold-400/90">
                TRAVEL UK
              </span>
            </span>
          </Link>
          <p className="mt-6 font-display text-2xl font-medium italic text-gold-300">
            “{SITE.slogan}”
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-100/60">
            Premium Umrah, Hajj and Ziyarat journeys from the UK — planned with
            complete transparency and delivered with genuine care, from your
            first call to your safe return home.
          </p>
          <div className="mt-7 flex gap-3">
            {[
              { icon: InstagramGlyph, label: "Instagram" },
              { icon: FacebookGlyph, label: "Facebook" },
              { icon: YoutubeGlyph, label: "YouTube" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-cream-100/15 text-cream-100/70 transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <nav aria-label="Journeys">
          <h3 className="text-[11px] font-extrabold tracking-[0.3em] text-gold-400 uppercase">
            Journeys
          </h3>
          <ul className="mt-5 space-y-3">
            {journeys.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-cream-100/65 transition-colors hover:text-gold-300"
                >
                  {l.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h3 className="text-[11px] font-extrabold tracking-[0.3em] text-gold-400 uppercase">
            Company
          </h3>
          <ul className="mt-5 space-y-3">
            {company.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-cream-100/65 transition-colors hover:text-gold-300"
                >
                  {l.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-[11px] font-extrabold tracking-[0.3em] text-gold-400 uppercase">
            Speak to Us
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-cream-100/65">
            <li>
              <a href={SITE.phoneHref} className="flex items-start gap-3 transition-colors hover:text-gold-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>
                  {SITE.phone}
                  <span className="block text-xs text-cream-100/45">Call for Umrah advice, free</span>
                </span>
              </a>
            </li>
            <li>
              <a href={whatsappLink("Assalamu alaikum Rihla, I'd like some advice please.")} className="flex items-start gap-3 transition-colors hover:text-gold-300">
                <WhatsAppGlyph className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{SITE.whatsappDisplay}<span className="block text-xs text-cream-100/45">WhatsApp Rihla anytime</span></span>
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 transition-colors hover:text-gold-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              {SITE.address}
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                {SITE.hoursWeek}
                <span className="block">{SITE.hoursSun}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-cream-100/10">
        <div className="wrap flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream-100/45 sm:flex-row">
          <p>© 2026 Rihla Travel UK Ltd · {SITE.slogan}</p>
          <p className="text-center sm:text-right">
            Registered in England & Wales · Prices shown are indicative examples for demonstration
          </p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.45 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.24-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.3Z" />
    </svg>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7.4h2.5l.4-2.9h-2.9V8.8c0-.84.24-1.4 1.44-1.4h1.56V4.8c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.1H8v2.9h2.4V21h3.1Z" />
    </svg>
  );
}

function YoutubeGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M21.6 7.2a2.6 2.6 0 0 0-1.83-1.84C18.16 5 12 5 12 5s-6.16 0-7.77.36A2.6 2.6 0 0 0 2.4 7.2 27.2 27.2 0 0 0 2 12c0 1.6.13 3.2.4 4.8a2.6 2.6 0 0 0 1.83 1.84C5.84 19 12 19 12 19s6.16 0 7.77-.36a2.6 2.6 0 0 0 1.83-1.84c.27-1.6.4-3.2.4-4.8s-.13-3.2-.4-4.8ZM10 15.2V8.8L15.4 12 10 15.2Z" />
    </svg>
  );
}
