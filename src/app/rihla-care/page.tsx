import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, PhoneCall, Clock, BadgeCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { IconByName } from "@/components/icons";
import { Pattern, SectionHeading, GoldRule, ArabicWatermark } from "@/components/decor";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { IMG, CARE_STAGES } from "@/lib/data";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Rihla Care — Plan · Prepare · Travel · Support · Return",
  description:
    "The signature Rihla Care experience: a structured five-stage journey supporting you before, during and after your pilgrimage. Your Journey. Our Care.",
};

const STAGE_IMAGES = [
  IMG.hotelLobby,
  IMG.airportLuggage,
  IMG.airplaneWing,
  IMG.madinahMinaret,
  IMG.familyAirport,
];

const PROMISES = [
  "A named consultant — never a call-centre queue",
  "Every inclusion itemised before your deposit",
  "A real person answers the 24/7 line while you travel",
  "If we can do it better for less, we tell you",
];

export default function RihlaCarePage() {
  return (
    <>
      <PageHero
        image={IMG.prayerInterior}
        alt="Worshippers praying inside a beautiful mosque"
        arabic="رعاية رحلة"
        kicker="The Signature Experience"
        tall
        crumbs={[{ label: "Home", href: "/" }, { label: "Rihla Care" }]}
        title={
          <>
            Your Journey.{" "}
            <em className="gold-grad-text">Our Care.</em>
          </>
        }
        description="Rihla Care is the structured experience behind every journey we arrange — five stages of deliberate, documented care, from your first question to your welcome-home call."
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {CARE_STAGES.map((s, i) => (
            <span key={s.key} className="flex items-center gap-6">
              <span className="text-[11.5px] font-extrabold tracking-[0.28em] text-gold-300 uppercase">
                {s.label}
              </span>
              {i < CARE_STAGES.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-gold-500/60" />
              )}
            </span>
          ))}
        </div>
      </PageHero>

      {/* ── Intro ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream-50 py-24 text-center sm:py-28">
        <ArabicWatermark word="رعاية" className="top-2 left-1/2 -translate-x-1/2 text-[16rem] text-navy-900/[0.03]" />
        <div className="wrap relative">
          <Reveal>
            <p className="font-arabic text-2xl text-gold-600" dir="rtl">رعاية</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1.1] font-medium tracking-tight text-navy-900 text-balance sm:text-5xl">
              Ra'aya — the Arabic art of <em className="text-gold-600">looking after</em> what is entrusted to you
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-700/75 sm:text-lg">
              Most agencies sell you a booking. Rihla takes responsibility for a
              journey. These five stages are not marketing language — they are
              the operating system our team works to, journey after journey.
            </p>
          </Reveal>
          <GoldRule className="mt-10" />
        </div>
      </section>

      {/* ── Stages ───────────────────────────────── */}
      <section className="relative bg-cream-100 pb-10">
        {CARE_STAGES.map((stage, i) => (
          <div
            key={stage.key}
            id={stage.key}
            className={cn(
              "relative overflow-hidden py-16 sm:py-20",
              i % 2 === 0 ? "bg-cream-100" : "bg-cream-50"
            )}
          >
            <div className="wrap grid items-center gap-12 lg:grid-cols-2">
              <div className={cn("relative", i % 2 === 1 && "lg:order-2")}>
                <Reveal>
                  <div className="relative">
                    <span className="absolute -top-10 -left-2 font-display text-[7rem] leading-none font-light text-gold-500/18 select-none sm:-left-6 sm:text-[9rem]">
                      {stage.step}
                    </span>
                    <div className="relative pt-16 pl-6 sm:pt-20 sm:pl-10">
                      <span className="relative grid h-14 w-14 place-items-center">
                        <span className="absolute inset-0 rotate-45 rounded-xl border border-gold-500/45 bg-gold-500/10" />
                        <IconByName name={stage.icon} className="relative h-6 w-6 text-gold-700" />
                      </span>
                      <p className="eyebrow mt-6 text-gold-700">Stage {stage.step} · {stage.label}</p>
                      <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-navy-900 sm:text-5xl">
                        {stage.title}
                      </h2>
                      <p className="mt-4 max-w-md font-display text-xl text-gold-700 italic">
                        {stage.tagline}
                      </p>
                      <ul className="mt-7 max-w-md space-y-3.5">
                        {stage.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-3 text-[14.5px] text-navy-800/85">
                            <span className="mt-0.5 grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full bg-emerald-600/12">
                              <Check className="h-3 w-3 text-emerald-700" strokeWidth={3.5} />
                            </span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={0.12} className={cn(i % 2 === 1 && "lg:order-1")}>
                <div className="relative mx-auto max-w-md lg:mx-0">
                  <div className="gold-frame overflow-hidden rounded-[2rem] shadow-[0_36px_70px_-28px_rgba(8,19,36,0.4)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={STAGE_IMAGES[i]}
                      alt={`${stage.label} — Rihla Care stage`}
                      loading="lazy"
                      className="aspect-[5/4] w-full object-cover"
                    />
                  </div>
                  <span className="absolute -right-3 -bottom-3 hidden h-24 w-24 rotate-45 rounded-2xl border border-gold-500/30 sm:block" />
                </div>
              </Reveal>
            </div>
            {i < CARE_STAGES.length - 1 && (
              <div className="wrap mt-16 sm:mt-20">
                <div className="mx-auto flex max-w-xs items-center gap-4">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500/40" />
                  <ArrowRight className="h-4 w-4 rotate-90 text-gold-600" />
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500/40" />
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* ── Care promise ─────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28">
        <Pattern className="text-gold-500/[0.06]" id="promise" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading
              dark
              align="left"
              arabic="وعدنا"
              kicker="The Rihla Promise"
              title={
                <>
                  If it matters to your journey,{" "}
                  <em className="gold-grad-text">it is our responsibility</em>
                </>
              }
              description="Care you can hold us to. Every booking confirms these commitments in writing, and every pilgrim rates us against them on return."
            />
          </div>
          <Stagger className="space-y-3.5" stagger={0.1}>
            {PROMISES.map((p) => (
              <StaggerItem key={p}>
                <div className="flex items-start gap-3.5 rounded-2xl border border-cream-100/12 bg-navy-900/60 p-5">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" strokeWidth={1.8} />
                  <p className="text-sm font-semibold text-cream-100/85">{p}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Stagger className="wrap relative mt-16 grid gap-4 sm:grid-cols-3" stagger={0.1}>
          {[
            { icon: PhoneCall, t: "Under 4 rings", d: "Average answer time on the pilgrim line during travel season" },
            { icon: Clock, t: "24 / 7", d: "Our on-ground care line, every day you are away" },
            { icon: BadgeCheck, t: "48 hours", d: "Until your welcome-home call after landing back in the UK" },
          ].map((s) => (
            <StaggerItem key={s.t}>
              <div className="card-lift h-full rounded-3xl border border-gold-500/25 bg-navy-900/70 p-7 text-center">
                <s.icon className="mx-auto h-6 w-6 text-gold-400" strokeWidth={1.8} />
                <p className="mt-4 font-display text-3xl font-semibold text-gold-300">{s.t}</p>
                <p className="mt-2 text-[12.5px] leading-relaxed text-cream-100/55">{s.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2} className="mt-14 text-center">
          <Link href="/journey-planner" className="btn btn-gold h-13 px-8 text-sm">
            Experience It — Plan Your Rihla
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-[11px] font-bold tracking-[0.22em] text-cream-100/40 uppercase">
            Or call {SITE.phoneDisplay} — free advice, no pressure
          </p>
        </Reveal>
      </section>

      <CTABand
        arabic="أنت في أيدٍ أمينة"
        kicker="You Are In Safe Hands"
        title="Travel with people who treat your journey as an amanah"
      />
    </>
  );
}
