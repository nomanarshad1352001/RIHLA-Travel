import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { Pattern, SectionHeading, ArabicWatermark } from "@/components/decor";
import { Reveal, Stagger, StaggerItem, Counter } from "@/components/motion";
import { IMG, VALUES, TIMELINE, STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Rihla — Our Story, Vision & Values",
  description:
    "Rihla Travel UK was founded by British Muslims to serve pilgrims the way we'd serve our own family. Discover our story, our values and our commitment: Your Journey. Our Care.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={IMG.madinahCourtyard}
        alt="The courtyard of the Prophet's Mosque in Madinah"
        arabic="قصتنا"
        kicker="About Rihla"
        tall
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title={
          <>
            Built by pilgrims,{" "}
            <em className="gold-grad-text">for pilgrims</em>
          </>
        }
        description="A British Muslim family business with one measure of success: did we care for your journey the way we would care for our own mother's?"
      />

      {/* ── Story ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
        <ArabicWatermark word="رحلة" className="top-8 -right-10 text-[16rem] text-navy-900/[0.03]" />
        <div className="wrap relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              arabic="البداية"
              kicker="Our Story"
              title={
                <>
                  From a living room in East London,{" "}
                  <em className="text-gold-600">to thousands of pilgrims</em>
                </>
              }
            />
            <Reveal delay={0.08}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-700/80 sm:text-lg">
                <p>
                  Rihla began in 2018 around a kitchen table, untangling yet
                  another family member's stressful Umrah booking — the vague
                  hotel distances, the disappearing agent, the price that grew
                  after the deposit. We knew our community deserved better, and
                  that “better” was simple to describe: honesty, care and
                  competence.
                </p>
                <p>
                  Eight years later, over five thousand pilgrims have travelled
                  with us — first Umrahs, three-generation family journeys,
                  scholar-led Hajj groups. The office grew, the team grew, but
                  the founding rule never changed: every pilgrim gets the
                  journey we would want for our own parents.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <figure className="mt-9 rounded-3xl border border-gold-500/30 bg-white p-8">
                <Quote className="h-8 w-8 rotate-180 text-gold-500/50" strokeWidth={1.5} />
                <blockquote className="mt-4 font-display text-xl leading-relaxed text-navy-800 italic sm:text-2xl">
                  “We named the company Rihla — journey — because that is what
                  you entrust to us. Not a booking. A journey. We sign every
                  proposal the same way: Your Journey. Our Care.”
                </blockquote>
                <figcaption className="mt-5 text-[11px] font-extrabold tracking-[0.22em] text-gold-700 uppercase">
                  The Founders · Rihla Travel UK
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="gold-frame overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(8,19,36,0.45)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG.clockTower}
                  alt="The Makkah skyline and Abraj Al-Bait clock tower"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 w-44 overflow-hidden rounded-3xl border-4 border-cream-50 shadow-2xl sm:-right-10 sm:w-56">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG.mosqueGeometric}
                  alt="Geometric patterns inside a mosque"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Values ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
        <Pattern className="text-gold-500/[0.06]" id="values" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              dark
              arabic="قيمنا"
              kicker="Our Values"
              title={
                <>
                  Four words we are{" "}
                  <em className="gold-grad-text">accountable to</em>
                </>
              }
              description="Values that fit in Arabic, live in English, and decide every hard call we make."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4" stagger={0.1}>
            {VALUES.map((v) => (
              <StaggerItem key={v.word}>
                <div className="card-lift group h-full rounded-3xl border border-cream-100/10 bg-navy-900/70 p-7 text-center hover:border-gold-500/40">
                  <p className="font-arabic text-5xl leading-tight text-gold-400" dir="rtl">
                    {v.arabic}
                  </p>
                  <p className="mt-3 text-[11px] font-extrabold tracking-[0.3em] text-gold-300/80 uppercase">
                    {v.word}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-cream-50">{v.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-cream-100/55">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream-100 py-24 sm:py-32">
        <ArabicWatermark word="مسيرة" className="-bottom-10 -left-8 text-[14rem] text-navy-900/[0.03]" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              arabic="المسيرة"
              kicker="The Journey So Far"
              title={
                <>
                  Eight years,{" "}
                  <em className="text-gold-600">five thousand journeys</em>
                </>
              }
            />
          </Reveal>
          <div className="relative mx-auto mt-16 max-w-3xl">
            <span className="absolute top-0 bottom-0 left-[5.5rem] hidden w-px bg-gradient-to-b from-gold-500/10 via-gold-500/45 to-gold-500/10 sm:block" />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.04}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                    <p className="w-20 shrink-0 font-display text-3xl font-semibold text-gold-600 sm:text-right">
                      {t.year}
                    </p>
                    <span className="relative z-10 mt-4 hidden h-2.5 w-2.5 shrink-0 rotate-45 bg-gold-500 shadow-[0_0_0_5px_var(--color-cream-100)] sm:block" />
                    <div className="card-lift flex-1 rounded-3xl border border-navy-900/8 bg-white p-6 hover:border-gold-500/45 sm:p-7">
                      <h3 className="font-display text-[1.55rem] font-semibold text-navy-900">{t.title}</h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-navy-700/70">{t.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision band ──────────────────────────── */}
      <section className="relative overflow-hidden bg-emerald-950 py-24 sm:py-28">
        <Pattern className="text-gold-500/[0.07]" id="vision" strokeWidth={0.6} />
        <div className="wrap relative text-center">
          <Reveal>
            <p className="font-arabic text-2xl text-gold-400" dir="rtl">رؤيتنا</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.12] font-medium tracking-tight text-cream-50 text-balance sm:text-5xl">
              To be the most trusted name in British Muslim travel —{" "}
              <em className="gold-grad-text">one cared-for journey at a time</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-100/60">
              Not the biggest. The most trusted. We would rather guide five
              hundred journeys beautifully than five thousand carelessly.
            </p>
          </Reveal>
          <Stagger className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4" stagger={0.1}>
            {STATS.map((s) => (
              <StaggerItem key={s.label}>
                <div className="rounded-3xl border border-cream-100/12 bg-navy-950/50 p-5 backdrop-blur">
                  <Counter
                    to={s.value}
                    suffix={s.suffix}
                    decimals={"decimals" in s ? s.decimals : 0}
                    className="font-display text-4xl font-semibold text-gold-300"
                  />
                  <p className="mt-2 text-[10.5px] leading-snug font-bold tracking-[0.16em] text-cream-100/50 uppercase">
                    {s.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15}>
            <Link href="/rihla-care" className="btn btn-outline-light mt-12 h-12 px-7 text-sm">
              See How Rihla Care Works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand
        arabic="أهلاً بكم في رحلة"
        kicker="Join the Family"
        title="Come and meet the people behind the name"
        note="Visit our London office · Mon–Sat 9:30–18:30 · Or simply call for a chat"
      />
    </>
  );
}
