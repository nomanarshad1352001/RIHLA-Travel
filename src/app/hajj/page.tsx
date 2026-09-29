import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users, Tent, ScrollText } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
import PackageCard from "@/components/PackageCard";
import { Pattern, SectionHeading, GoldRule, ArabicWatermark } from "@/components/decor";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { IMG, HAJJ_PACKAGES, HAJJ_FAQS, HAJJ_DAYS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hajj Packages 2026 · 1447 — from the UK",
  description:
    "Hajj 2026 packages from the UK: shifting, express and premium non-shifting options with scholar guides, Mina arrangements and a six-month preparation programme.",
};

const SUPPORT = [
  {
    icon: GraduationCap,
    title: "Six-Month Preparation",
    text: "Seminars, fitness plans and a printed handbook — you arrive at Mina already knowing the days ahead.",
  },
  {
    icon: Users,
    title: "Scholar-Led Groups",
    text: "Experienced scholars and group leaders who have guided Hajj for years — calm voices in the crowds.",
  },
  {
    icon: Tent,
    title: "Mina, Arranged Properly",
    text: "Honest camp categories, meals on the Hajj days, and logistics explained before you ever see the tents.",
  },
  {
    icon: ScrollText,
    title: "Nusuk & Visa Guidance",
    text: "We walk you through registration, documentation and timelines for the 1447 season — step by step.",
  },
];

export default function HajjPage() {
  return (
    <>
      <PageHero
        image={IMG.kaabaCrowd}
        alt="Thousands of pilgrims gathered at the Holy Kaaba during Hajj"
        arabic="حج"
        kicker="Hajj 2026 · 1447 AH"
        tall
        crumbs={[{ label: "Home", href: "/" }, { label: "Hajj" }]}
        title={
          <>
            Hajj — the journey of{" "}
            <em className="gold-grad-text">a lifetime</em>
          </>
        }
        description="Shifting, express and premium non-shifting Hajj packages for UK pilgrims — with scholar guidance, honest Mina arrangements and six months of preparation beside you."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#hajj-packages" className="btn btn-gold h-13 px-7 text-sm">
            View Hajj Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact?subject=Hajj%20Registration" className="btn btn-outline-light h-13 px-7 text-sm">
            Register Your Interest
          </Link>
          <span className="text-xs font-bold tracking-[0.2em] text-cream-100/55 uppercase">
            Places are limited — early registration advised
          </span>
        </div>
      </PageHero>

      {/* ── Intro ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
        <ArabicWatermark word="حَجّ" className="top-6 -right-8 text-[15rem] text-navy-900/[0.035]" />
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="gold-frame relative mx-auto max-w-md overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(8,19,36,0.45)] lg:mx-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG.tawaf}
                alt="Pilgrims in ihram performing Tawaf"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 to-transparent p-7">
                <p className="font-arabic text-xl text-gold-300" dir="rtl">وَحَجُّ الْبَيْتِ</p>
                <p className="mt-1 text-[11px] font-bold tracking-[0.22em] text-cream-100/70 uppercase">
                  A pillar of Islam · A lifetime of longing
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              arabic="فريضة العمر"
              kicker="The Fifth Pillar"
              title={
                <>
                  You only perform Hajj properly{" "}
                  <em className="text-gold-600">once — prepare for it that way</em>
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-navy-700/80 sm:text-lg">
                Hajj forgives no shortcuts. The difference between a journey of
                serene worship and one of avoidable hardship is almost always
                preparation — physical, logistical and spiritual. That is why
                every Rihla Hajj package begins six months before your flight.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-700/80 sm:text-lg">
                Our groups are deliberately small, our scholars have stood at
                Arafah dozens of times, and our Mina arrangements are described
                to you honestly — camp category, catering and walking routes —
                before you pay a deposit.
              </p>
            </Reveal>
            <Stagger className="mt-9 grid gap-4 sm:grid-cols-2" stagger={0.1}>
              {SUPPORT.map((s) => (
                <StaggerItem key={s.title}>
                  <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-5 hover:border-gold-500/40">
                    <s.icon className="h-5.5 w-5.5 text-gold-700" strokeWidth={1.8} />
                    <h3 className="mt-3 text-sm font-extrabold text-navy-900">{s.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-navy-700/65">{s.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ── Packages ─────────────────────────────── */}
      <section id="hajj-packages" className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
        <Pattern className="text-gold-500/[0.06]" id="hajj-pkg" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              dark
              arabic="باقات الحج"
              kicker="Hajj Packages 2026 · 1447"
              title={
                <>
                  Three ways to answer{" "}
                  <em className="gold-grad-text">the call</em>
                </>
              }
              description="From accessible value to the premium non-shifting Signature experience — every package includes scholar guidance, the preparation programme and meals during the Hajj days."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3" stagger={0.12}>
            {HAJJ_PACKAGES.map((pkg) => (
              <StaggerItem key={pkg.slug}>
                <PackageCard pkg={pkg} dark />
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15}>
            <p className="mt-10 text-center text-xs tracking-wide text-cream-100/40">
              Illustrative per-person pricing · Qurbani can be arranged on all packages · Payment plans available over 6–18 months
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Days of Hajj ─────────────────────────── */}
      <section className="relative overflow-hidden bg-cream-100 py-24 sm:py-32">
        <ArabicWatermark word="مناسك" className="-bottom-10 -right-8 text-[14rem] text-navy-900/[0.03]" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              arabic="أيام الحج"
              kicker="The Rites"
              title={
                <>
                  The days of Hajj,{" "}
                  <em className="text-gold-600">explained simply</em>
                </>
              }
              description="You will live these five days with your Rihla guide beside you — but understanding them now turns anxiety into longing."
            />
          </Reveal>

          <div className="relative mx-auto mt-16 max-w-3xl">
            <span className="absolute top-0 bottom-0 left-[1.35rem] w-px bg-gradient-to-b from-gold-500/10 via-gold-500/50 to-gold-500/10 sm:left-1/2" />
            <div className="space-y-10">
              {HAJJ_DAYS.map((d, i) => (
                <Reveal key={d.name} delay={i * 0.05}>
                  <div className={`relative flex gap-6 sm:gap-0 ${i % 2 ? "sm:flex-row-reverse" : ""}`}>
                    <div className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-500/50 bg-white shadow-[0_0_0_6px_var(--color-cream-100)] sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                      <span className="font-display text-sm font-bold text-gold-700">{d.day || "✦"}</span>
                    </div>
                    <div className={`flex-1 sm:w-1/2 ${i % 2 ? "sm:pr-14" : "sm:ml-auto sm:pl-14"}`}>
                      <div className="card-lift rounded-3xl border border-navy-900/8 bg-white p-6 hover:border-gold-500/45">
                        <p className="eyebrow text-gold-600">{d.place}</p>
                        <h3 className="mt-2 font-display text-2xl font-semibold text-navy-900">
                          {d.name}
                        </h3>
                        <p className="mt-2 text-[13.5px] leading-relaxed text-navy-700/70">{d.text}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Seminar band ─────────────────────────── */}
      <section className="relative overflow-hidden bg-emerald-950 py-20 sm:py-24">
        <Pattern className="text-gold-500/[0.07]" id="seminar" strokeWidth={0.6} />
        <div className="wrap relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <SectionHeading
            dark
            align="left"
            arabic="ندوة الحج"
            kicker="Free Pre-Departure Seminar"
            title="Six months of preparation — beginning with one evening"
            description="Join the Rihla Hajj Seminar in London or online: the rites explained, fitness and vaccination guidance, packing discipline, and honest answers about what Hajj actually feels like. Free for registered pilgrims and their families."
          />
          <Reveal delay={0.1} className="lg:text-right">
            <Link href="/contact?subject=Hajj%20Seminar" className="btn btn-gold h-13 px-8 text-sm">
              Reserve My Seat
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-4 text-[11px] font-bold tracking-[0.2em] text-cream-100/45 uppercase">
              Next seminar: London & online · open to all
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section className="relative bg-cream-50 py-24 sm:py-32">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[0.85fr_1.35fr]">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              arabic="أسئلة الحجاج"
              kicker="Hajj FAQs"
              title="Asked by every Haji, answered plainly"
              description="Registration, shifting packages, fitness and payments — the essentials before you commit."
            />
            <GoldRule className="mt-8 justify-start! hidden lg:flex" />
          </div>
          <Reveal delay={0.1}>
            <FAQ items={HAJJ_FAQS} />
          </Reveal>
        </div>
      </section>

      <CTABand
        arabic="وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ"
        kicker="Hajj 2026 · 1447"
        title="Register your interest for Hajj"
        description="UK Hajj places are strictly limited and allocated early. Register with Rihla now and your consultant will guide you through Nusuk registration and package selection the moment allocations open."
        note="Early registration strongly advised · Payment plans available · Scholar-led groups"
      />
    </>
  );
}
