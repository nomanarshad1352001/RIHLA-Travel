import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, CalendarCheck, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Pattern, SectionHeading } from "@/components/decor";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { WhatsAppGlyph } from "@/components/Footer";
import { SITE, whatsappLink } from "@/lib/site";
import { IMG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Rihla — Call, WhatsApp or Send an Enquiry",
  description:
    "Speak to the Rihla team: free Umrah and Hajj advice by phone, WhatsApp or email. Send an enquiry and receive a personal reply within one working day.",
};

const METHODS = [
  {
    icon: Phone,
    title: "Call the Team",
    detail: SITE.phone,
    note: SITE.hoursWeek,
    href: SITE.phoneHref,
    cta: "Call Now",
  },
  {
    icon: null,
    title: "WhatsApp Rihla",
    detail: SITE.whatsappDisplay,
    note: "Messages answered daily, often within the hour",
    href: whatsappLink("Assalamu alaikum Rihla, I'd like some advice please."),
    cta: "Open WhatsApp",
  },
  {
    icon: CalendarCheck,
    title: "Book a Consultation",
    detail: "Free 20-minute call",
    note: "A dedicated consultant, at a time that suits you",
    href: "#enquiry",
    cta: "Request a Slot",
  },
  {
    icon: MapPin,
    title: "Visit the Office",
    detail: "45 Commercial Road, London",
    note: "Mon–Sat · Tea is always on",
    href: "#enquiry",
    cta: "Plan a Visit",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={IMG.hotelMarble}
        alt="The grand marble foyer of a partner hotel"
        arabic="تواصل معنا"
        kicker="Contact Rihla"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title={
          <>
            Salaam — {" "}
            <em className="gold-grad-text">how can we serve you?</em>
          </>
        }
        description="Umrah advice, Hajj registration, a quote for eleven people, or a question you're almost embarrassed to ask — we answer all of it, warmly and without obligation."
      />

      {/* ── Methods ──────────────────────────────── */}
      <section className="relative bg-cream-50 py-20 sm:py-24">
        <div className="wrap">
          <Stagger className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4" stagger={0.08}>
            {METHODS.map((m) => (
              <StaggerItem key={m.title}>
                <a
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card-lift group flex h-full flex-col rounded-3xl border border-navy-900/8 bg-white p-7 hover:border-gold-500/45 hover:shadow-[0_30px_60px_-28px_rgba(8,19,36,0.3)]"
                >
                  <span className="relative grid h-12 w-12 place-items-center">
                    <span
                      className="absolute inset-0 rotate-45 rounded-xl border border-gold-500/40 bg-gold-500/8 transition-transform duration-500 group-hover:rotate-[135deg]"
                    />
                    {m.icon ? (
                      <m.icon className="relative h-5 w-5 text-gold-700" />
                    ) : (
                      <WhatsAppGlyph className="relative h-5 w-5 text-wa" />
                    )}
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-semibold text-navy-900">{m.title}</h2>
                  <p className="mt-1.5 text-sm font-extrabold text-gold-700">{m.detail}</p>
                  <p className="mt-1 flex-1 text-[12.5px] leading-relaxed text-navy-700/60">{m.note}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11.5px] font-extrabold tracking-[0.18em] text-navy-900 uppercase transition-colors group-hover:text-gold-700">
                    {m.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Form + aside ─────────────────────────── */}
      <section id="enquiry" className="relative scroll-mt-24 bg-cream-100 py-20 sm:py-28">
        <div className="wrap grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading
              align="left"
              arabic="أرسل استفسارك"
              kicker="Send an Enquiry"
              title="Tell us about your journey"
              description="A personal reply from a named consultant within one working day — usually much sooner. For urgent travel, please call."
            />
            <Reveal delay={0.1} className="mt-8">
              <Suspense
                fallback={
                  <div className="flex h-96 items-center justify-center rounded-[2rem] bg-white">
                    <Loader2 className="h-7 w-7 animate-spin text-gold-600" />
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </Reveal>
          </div>

          <div className="space-y-5 lg:sticky lg:top-28">
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-[2rem] border border-gold-500/25 bg-navy-950 p-8">
                <Pattern className="text-gold-500/[0.08]" id="contact-side" />
                <h3 className="relative font-display text-2xl font-semibold text-cream-50">
                  What happens next
                </h3>
                <ol className="relative mt-6 space-y-5">
                  {[
                    "We read every enquiry personally — no bots, no scripts",
                    "A named consultant replies with honest, itemised guidance",
                    "Refine together until it feels right — book only when settled",
                  ].map((t, i) => (
                    <li key={t} className="flex items-start gap-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold-500/50 text-xs font-extrabold text-gold-300">
                        {i + 1}
                      </span>
                      <p className="text-[13.5px] leading-relaxed text-cream-100/70">{t}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="rounded-[2rem] border border-navy-900/8 bg-white p-8">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold-700" />
                  <h3 className="font-display text-xl font-semibold text-navy-900">Office Hours</h3>
                </div>
                <p className="mt-4 text-sm font-bold text-navy-800">{SITE.hoursWeek}</p>
                <p className="mt-1 text-sm text-navy-700/65">{SITE.hoursSun}</p>
                <div className="my-5 h-px bg-navy-900/8" />
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gold-700" />
                  <h3 className="font-display text-xl font-semibold text-navy-900">Find Us</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-navy-700/75">{SITE.address}</p>
                <p className="mt-2 text-xs text-navy-700/50">2 minutes from Whitechapel station</p>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="flex items-start gap-3.5 rounded-2xl border border-emerald-600/25 bg-emerald-600/6 p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                <p className="text-[12.5px] leading-relaxed font-semibold text-emerald-900/85">
                  We will never pressure you to book. Advice is free — genuinely. If another
                  option serves you better, we'll tell you so.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <Link
                href="/journey-planner"
                className="group flex items-center justify-between rounded-2xl border border-gold-500/35 bg-gold-500/8 p-5 transition-colors hover:bg-gold-500/15"
              >
                <span className="text-sm font-extrabold text-navy-900">
                  Prefer a guided start? <span className="block text-xs font-semibold text-navy-700/70">Try the Journey Planner instead</span>
                </span>
                <ArrowRight className="h-5 w-5 text-gold-700 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
