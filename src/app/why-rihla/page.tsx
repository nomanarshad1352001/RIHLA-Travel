import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Testimonials from "@/components/Testimonials";
import { IconByName } from "@/components/icons";
import { Pattern, SectionHeading, ArabicWatermark } from "@/components/decor";
import { Reveal, Stagger, StaggerItem, Counter } from "@/components/motion";
import { IMG, COMMITMENTS, STATS } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Why Rihla — No Hidden Charges, Honest Hotels, Real Care",
  description:
    "Our five commitments: no hidden charges, transparent information, carefully selected hotels, dedicated support and customer satisfaction. This is why pilgrims trust Rihla.",
};

const COMPARISON = [
  {
    aspect: "Pricing",
    them: "“From £999”* — plus supplements discovered later",
    us: "One itemised quote; the price you see is the price you pay",
  },
  {
    aspect: "Hotel distance",
    them: "“Close to the Haram” — measured generously",
    us: "Metres, walked by our own team and stated in writing",
  },
  {
    aspect: "Hotel names",
    them: "“5-star hotel or similar”",
    us: "Named, inspected hotels confirmed before you pay",
  },
  {
    aspect: "Support",
    them: "A sales line that goes quiet after payment",
    us: "A named consultant before, during and after — 24/7 while away",
  },
  {
    aspect: "Preparation",
    them: "A voucher and a prayer",
    us: "Seminars, checklists and a guide beside your first Umrah",
  },
];

export default function WhyRihlaPage() {
  return (
    <>
      <PageHero
        image={IMG.mosqueArches}
        alt="Ornate arches and calligraphy inside a mosque"
        arabic="لماذا رحلة"
        kicker="Why Rihla"
        tall
        crumbs={[{ label: "Home", href: "/" }, { label: "Why Rihla" }]}
        title={
          <>
            Trust is not claimed.{" "}
            <em className="gold-grad-text">It is itemised.</em>
          </>
        }
        description="Five commitments govern every Rihla journey. They cost us more, they limit what we sell — and they are exactly why 98% of our pilgrims recommend us."
      />

      {/* ── Commitments ──────────────────────────── */}
      <section className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
        <ArabicWatermark word="التزام" className="top-6 -left-10 text-[15rem] text-navy-900/[0.03]" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              arabic="التزاماتنا الخمسة"
              kicker="The Five Commitments"
              title={
                <>
                  What we promise, {" "}
                  <em className="text-gold-600">in writing</em>
                </>
              }
            />
          </Reveal>

          <div className="mt-16 space-y-6">
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.title} delay={0.04 * i}>
                <article
                  className={cn(
                    "card-lift group grid gap-8 rounded-[2rem] border border-navy-900/8 bg-white p-8 hover:border-gold-500/45 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center"
                  )}
                >
                  <div className="flex items-center gap-6 lg:flex-col lg:items-start lg:gap-3">
                    <span className="font-display text-6xl leading-none font-light text-gold-500/40 transition-colors duration-500 group-hover:text-gold-500/70 sm:text-7xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative grid h-13 w-13 place-items-center">
                      <span className="absolute inset-0 rotate-45 rounded-xl border border-gold-500/40 bg-gold-500/8 transition-transform duration-500 group-hover:rotate-[135deg]" />
                      <IconByName name={c.icon} className="relative h-5.5 w-5.5 text-gold-700" />
                    </span>
                  </div>
                  <div className="max-w-2xl">
                    <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
                      {c.title}
                    </h2>
                    <p className="mt-1.5 font-display text-lg text-gold-700 italic">{c.summary}</p>
                    <p className="mt-3.5 text-[14.5px] leading-relaxed text-navy-700/75">{c.detail}</p>
                  </div>
                  <div className="lg:w-56 lg:justify-self-end">
                    <div className="flex items-start gap-3 rounded-2xl border border-emerald-600/20 bg-emerald-600/6 p-5">
                      <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600" strokeWidth={3} />
                      <p className="text-[12.5px] leading-snug font-bold text-emerald-800/90">
                        {c.proof}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ───────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
        <Pattern className="text-gold-500/[0.06]" id="compare" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              dark
              arabic="الفرق"
              kicker="The Difference"
              title={
                <>
                  The industry standard vs{" "}
                  <em className="gold-grad-text">the Rihla standard</em>
                </>
              }
              description="We are happy to be compared — bring us any quote and we'll walk you through it line by line, even if you don't choose us."
            />
          </Reveal>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-cream-100/12">
            <div className="hidden grid-cols-[0.8fr_1.1fr_1.1fr] border-b border-cream-100/12 bg-navy-900/80 text-[11px] font-extrabold tracking-[0.22em] uppercase sm:grid">
              <span className="p-5 text-cream-100/50">What you ask</span>
              <span className="border-l border-cream-100/12 p-5 text-cream-100/40">The usual answer</span>
              <span className="border-l border-gold-500/30 p-5 text-gold-300">The Rihla answer</span>
            </div>
            <Stagger>
              {COMPARISON.map((row, i) => (
                <StaggerItem key={row.aspect}>
                  <div
                    className={cn(
                      "grid gap-4 border-b border-cream-100/8 p-6 last:border-0 sm:grid-cols-[0.8fr_1.1fr_1.1fr] sm:gap-0 sm:p-0",
                      i % 2 === 1 && "bg-cream-100/[0.025]"
                    )}
                  >
                    <p className="text-sm font-extrabold tracking-wide text-cream-50 uppercase sm:p-5">
                      {row.aspect}
                    </p>
                    <div className="flex items-start gap-3 sm:border-l sm:border-cream-100/12 sm:p-5">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" />
                      <p className="text-[13.5px] leading-relaxed text-cream-100/50">{row.them}</p>
                    </div>
                    <div className="flex items-start gap-3 sm:border-l sm:border-gold-500/25 sm:bg-gold-500/[0.045] sm:p-5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={3} />
                      <p className="text-[13.5px] leading-relaxed font-semibold text-cream-100/85">{row.us}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────── */}
      <section className="relative bg-cream-100 py-20 sm:py-24">
        <Stagger className="wrap grid grid-cols-2 gap-y-12 lg:grid-cols-4" stagger={0.1}>
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="px-4 text-center">
              <Counter
                to={s.value}
                suffix={s.suffix}
                decimals={"decimals" in s ? s.decimals : 0}
                className="font-display text-5xl font-semibold text-navy-900 sm:text-6xl"
              />
              <p className="mt-2.5 text-[11px] font-bold tracking-[0.2em] text-navy-700/55 uppercase">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── Voices ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream-50 py-24 sm:py-28">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[0.8fr_1.4fr]">
          <SectionHeading
            align="left"
            arabic="شهادة"
            kicker="Proof, Not Promises"
            title="Our pilgrims say it better than we can"
          />
          <Reveal delay={0.1}>
            <Testimonials />
          </Reveal>
        </div>
        <Reveal delay={0.2} className="wrap mt-12">
          <Link
            href="/journey-planner"
            className="group inline-flex items-center gap-2 text-[12.5px] font-extrabold tracking-[0.18em] text-gold-700 uppercase"
          >
            Put our commitments to the test
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </section>

      <CTABand
        arabic="بلا رسوم خفية"
        kicker="No Hidden Charges, Ever"
        title="Get a quote you can actually hold us to"
        note="Fully itemised in writing · Free consultation · No obligation"
      />
    </>
  );
}
