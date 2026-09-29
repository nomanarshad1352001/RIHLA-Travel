import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import PackageCard from "@/components/PackageCard";
import TestimonialRail from "@/components/TestimonialRail";
import SacredGallery from "@/components/SacredGallery";
import CTABand from "@/components/CTABand";
import { IconByName } from "@/components/icons";
import {
  Pattern,
  Marquee,
  SectionHeading,
  Eyebrow,
  GoldRule,
  ArabicWatermark,
} from "@/components/decor";
import { Reveal, Stagger, StaggerItem, Counter } from "@/components/motion";
import {
  IMG,
  UMRAH_PACKAGES,
  CARE_STAGES,
  COMMITMENTS,
  STATS,
  RESOURCES,
  INCLUSIONS,
} from "@/lib/data";

const SERVICES = [
  {
    icon: "MoonStar",
    title: "Umrah Packages",
    text: "Year-round Umrah with hotels honestly measured from the Haram — from essential value to steps-away luxury.",
    href: "/umrah",
    arabic: "عمرة",
  },
  {
    icon: "Tent",
    title: "Hajj Packages",
    text: "Shifting, express and premium non-shifting Hajj — with six months of preparation beside you.",
    href: "/hajj",
    arabic: "حج",
  },
  {
    icon: "Users",
    title: "Family & Group",
    text: "Three generations, one journey. Child-paced itineraries, accessible hotels and group-leader support.",
    href: "/family-group",
    arabic: "عائلة",
  },
  {
    icon: "MapPin",
    title: "Ziyarat Tours",
    text: "Uhud, Quba, Thawr and beyond — guided visits to the sacred sites with seerah brought to life.",
    href: "/resources",
    arabic: "زيارة",
  },
  {
    icon: "FileCheck",
    title: "Visa Assistance",
    text: "Umrah visas, tourist eVisas and Nusuk guidance — documentation handled by people who do it daily.",
    href: "/contact",
    arabic: "تأشيرة",
  },
];

export default function HomePage() {
  const featured = [
    UMRAH_PACKAGES.find((p) => p.slug === "premium-umrah")!,
    UMRAH_PACKAGES.find((p) => p.slug === "classic-umrah")!,
    UMRAH_PACKAGES.find((p) => p.slug === "ramadan-umrah")!,
  ];
  const resourcePicks = ["packing-checklist", "duas-collection", "makkah-guide"].map(
    (id) => RESOURCES.find((r) => r.id === id)!
  );

  return (
    <>
      <HomeHero />

      {/* ── Marquee ─────────────────────────────── */}
      <div className="relative border-y border-gold-500/25 bg-emerald-950 py-5">
        <Pattern className="text-gold-500/[0.05]" id="marquee" />
        <Marquee
          items={[
            "Umrah Packages",
            "Hajj 2026 · 1447",
            "Family & Group",
            "Ziyarat Tours",
            "Visa Assistance",
            "Rihla Care",
            "No Hidden Charges",
          ]}
        />
      </div>

      {/* ── Welcome ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
        <ArabicWatermark
          word="رحلة"
          className="top-10 -right-10 text-[16rem] text-navy-900/[0.035]"
        />
        <div className="wrap relative grid items-center gap-16 lg:grid-cols-2">
          {/* Collage */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <Reveal>
              <div className="gold-frame relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(8,19,36,0.45)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG.tawaf}
                  alt="Pilgrims performing Tawaf around the Kaaba"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2} className="absolute -right-6 -bottom-10 w-44 sm:-right-10 sm:w-56">
              <div className="overflow-hidden rounded-3xl border-4 border-cream-50 shadow-[0_30px_60px_-20px_rgba(8,19,36,0.5)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG.madinahCourtyard}
                  alt="The courtyard of the Prophet's Mosque in Madinah"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.35} className="absolute -top-7 -left-5 sm:-left-9">
              <div className="flex items-center gap-3 rounded-2xl border border-gold-500/30 bg-navy-950/92 px-5 py-4 shadow-2xl backdrop-blur">
                <span className="font-arabic text-3xl leading-none text-gold-400" dir="rtl">
                  عمرة
                </span>
                <span className="text-[10.5px] leading-snug font-bold tracking-[0.18em] text-cream-100/85 uppercase">
                  Umrah from <span className="block text-gold-300">£1,095 pp</span>
                </span>
              </div>
            </Reveal>
          </div>

          {/* Copy */}
          <div className="pt-6 lg:pt-0">
            <SectionHeading
              align="left"
              arabic="أهلاً وسهلاً"
              kicker="Welcome to Rihla"
              title={
                <>
                  Ahlan wa sahlan —{" "}
                  <em className="gold-grad-text not-italic italic">you were invited.</em>
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-navy-700/80 sm:text-lg">
                Every pilgrim who has stood before the Kaaba says the same thing:
                you do not simply decide to go — you are invited. Rihla exists to
                honour that invitation; a British Muslim family business arranging
                Umrah, Hajj and Ziyarat the way we would arrange it for our own
                elders and children.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-700/80 sm:text-lg">
                That means honest prices, honestly measured hotels, and a named
                consultant who walks with you before, during and after the journey.
              </p>
            </Reveal>
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
              {INCLUSIONS.map((inc) => (
                <StaggerItem key={inc.label}>
                  <div className="flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold-500/35 bg-gold-500/10">
                      <IconByName name={inc.icon} className="h-4.5 w-4.5 text-gold-700" />
                    </span>
                    <span>
                      <span className="block text-sm font-extrabold text-navy-900">{inc.label}</span>
                      <span className="block text-xs text-navy-700/60">{inc.note}</span>
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2}>
              <Link
                href="/why-rihla"
                className="group mt-9 inline-flex items-center gap-2 text-sm font-extrabold tracking-wide text-gold-700 uppercase"
              >
                Why pilgrims choose Rihla
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Stats band ──────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20">
        <Pattern className="text-gold-500/[0.07]" id="stats" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <Stagger className="wrap relative grid grid-cols-2 gap-y-10 lg:grid-cols-4" stagger={0.12}>
          {STATS.map((s, i) => (
            <StaggerItem key={s.label} className="relative px-4 text-center">
              {i !== 0 && <span className="divider-v absolute top-1 left-0 hidden lg:block" />}
              <Counter
                to={s.value}
                suffix={s.suffix}
                decimals={"decimals" in s ? s.decimals : 0}
                className="font-display text-5xl font-semibold text-gold-300 sm:text-6xl"
              />
              <p className="mt-2.5 text-[11px] font-bold tracking-[0.2em] text-cream-100/55 uppercase">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── Services ────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream-100 py-24 sm:py-32">
        <ArabicWatermark
          word="خدماتنا"
          className="-bottom-14 -left-8 text-[13rem] text-navy-900/[0.03]"
        />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              arabic="خدماتنا"
              kicker="What We Do"
              title={
                <>
                  Sacred journeys,{" "}
                  <em className="text-gold-600">thoughtfully arranged</em>
                </>
              }
              description="Five ways we serve the travellers of Britain — each delivered with the same signature Rihla Care."
            />
          </Reveal>
          <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" stagger={0.08}>
            {SERVICES.map((s) => (
              <StaggerItem key={s.title}>
                <Link
                  href={s.href}
                  className="card-lift group flex h-full flex-col rounded-3xl border border-navy-900/8 bg-white p-7 hover:border-gold-500/45 hover:shadow-[0_30px_60px_-28px_rgba(8,19,36,0.3)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="relative grid h-13 w-13 place-items-center">
                      <span className="absolute inset-0 rotate-45 rounded-xl border border-gold-500/40 bg-gold-500/8 transition-transform duration-500 group-hover:rotate-[135deg]" />
                      <IconByName name={s.icon} className="relative h-5.5 w-5.5 text-gold-700" />
                    </span>
                    <span className="font-arabic text-xl leading-none text-gold-500/70" dir="rtl">
                      {s.arabic}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-navy-700/70">
                    {s.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11.5px] font-extrabold tracking-[0.18em] text-gold-700 uppercase">
                    Explore
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Rihla Care path ─────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
        <Pattern className="text-gold-500/[0.06]" id="care" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              dark
              arabic="رعاية رحلة"
              kicker="The Rihla Experience"
              title={
                <>
                  Rihla Care — <em className="gold-grad-text">Your Journey. Our Care.</em>
                </>
              }
              description="A structured five-stage experience, so you're cared for before, during and after you travel. Never alone, never guessing."
            />
          </Reveal>

          <div className="relative mt-20">
            <span className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-transparent via-gold-500/45 to-transparent lg:block" />
            <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5" stagger={0.14}>
              {CARE_STAGES.map((stage) => (
                <StaggerItem key={stage.key}>
                  <div className="group relative text-center">
                    <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold-500/40 bg-navy-900 shadow-[0_0_0_8px_rgba(5,11,22,1)] transition-all duration-500 group-hover:border-gold-400 group-hover:shadow-[0_0_0_8px_rgba(5,11,22,1),0_0_36px_rgba(198,161,79,0.35)]">
                      <IconByName name={stage.icon} className="h-5.5 w-5.5 text-gold-400" />
                    </div>
                    <p className="mt-6 font-display text-5xl leading-none font-light text-gold-500/35 transition-colors duration-500 group-hover:text-gold-400/60">
                      {stage.step}
                    </p>
                    <h3 className="mt-2.5 text-sm font-extrabold tracking-[0.3em] text-cream-50 uppercase">
                      {stage.label}
                    </h3>
                    <p className="mx-auto mt-2.5 max-w-[15rem] text-[12.5px] leading-relaxed text-cream-100/50">
                      {stage.tagline}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.2} className="mt-16 text-center">
            <Link href="/rihla-care" className="btn btn-outline-light h-12 px-7 text-sm">
              Experience Rihla Care
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Featured packages ───────────────────── */}
      <section className="relative bg-cream-50 py-24 sm:py-32">
        <div className="wrap">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              align="left"
              arabic="باقات العمرة"
              kicker="Featured Umrah"
              title={
                <>
                  Umrah packages,{" "}
                  <em className="text-gold-600">honestly priced</em>
                </>
              }
            />
            <Link
              href="/umrah"
              className="btn btn-outline-navy h-12 px-6 text-[12.5px]"
            >
              View All Umrah Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3" stagger={0.12}>
            {featured.map((pkg) => (
              <StaggerItem key={pkg.slug}>
                <PackageCard pkg={pkg} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Quote band ──────────────────────────── */}
      <section className="relative flex min-h-[62vh] items-center overflow-hidden bg-navy-950 py-24">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMG.madinahDome}
            alt="The Green Dome of the Prophet's Mosque in Madinah"
            loading="lazy"
            className="h-full w-full object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/55 to-navy-950/90" />
        <div className="wrap relative text-center">
          <Reveal>
            <GoldRule light className="mb-10 opacity-80" />
            <blockquote className="mx-auto max-w-3xl">
              <p className="font-arabic text-2xl leading-relaxed text-gold-300 sm:text-3xl" dir="rtl">
                لَا تُشَدُّ الرِّحَالُ إِلَّا إِلَى ثَلَاثَةِ مَسَاجِدَ
              </p>
              <p className="mt-6 font-display text-3xl leading-snug font-medium text-balance text-cream-50 italic sm:text-4xl">
                “Do not set out on a journey except to three mosques — the Sacred
                Mosque, the Mosque of the Messenger ﷺ, and Al-Aqsa.”
              </p>
              <footer className="eyebrow mt-8 justify-center text-gold-400">
                Sahih al-Bukhari · Sahih Muslim
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── Commitments strip ───────────────────── */}
      <section className="relative bg-cream-100 py-24 sm:py-28">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              arabic="التزاماتنا"
              kicker="Why Rihla"
              title={
                <>
                  Five commitments,{" "}
                  <em className="text-gold-600">no exceptions</em>
                </>
              }
              description="The promises every Rihla journey is built on — written down, itemised, and kept."
            />
          </Reveal>
          <Stagger className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible" stagger={0.08}>
            {COMMITMENTS.map((c, i) => (
              <StaggerItem key={c.title} className="min-w-[15rem] snap-start lg:min-w-0">
                <div className="card-lift h-full rounded-3xl border border-navy-900/8 bg-white p-6 hover:border-gold-500/45">
                  <div className="flex items-center justify-between">
                    <IconByName name={c.icon} className="h-6 w-6 text-gold-700" strokeWidth={1.8} />
                    <span className="font-display text-3xl font-light text-gold-500/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[15px] font-extrabold text-navy-900">{c.title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-navy-700/65">{c.summary}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15} className="mt-10 text-center">
            <Link
              href="/why-rihla"
              className="group inline-flex items-center gap-2 text-[12.5px] font-extrabold tracking-[0.18em] text-gold-700 uppercase"
            >
              Read our full commitments
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Pilgrim voices — railing slider ─────── */}
      <TestimonialRail />

      {/* ── Sacred gallery ──────────────────────── */}
      <SacredGallery />

      {/* ── Resources teaser ────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
        <Pattern className="text-gold-500/[0.05]" id="res" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="wrap relative">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              dark
              align="left"
              arabic="المصادر"
              kicker="Rihla Resources"
              title={
                <>
                  Prepare with <em className="gold-grad-text">confidence</em>
                </>
              }
            />
            <Link href="/resources" className="btn btn-outline-light h-12 px-6 text-[12.5px]">
              Open the Knowledge Centre
              <BookOpen className="h-4 w-4" />
            </Link>
          </Reveal>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.12}>
            {resourcePicks.map((r) => (
              <StaggerItem key={r.id}>
                <Link
                  href={`/resources#${r.id}`}
                  className="card-lift group relative flex h-80 flex-col justify-end overflow-hidden rounded-3xl border border-cream-100/10"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.image}
                    alt={r.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-1000 group-hover:scale-108 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/35 to-transparent" />
                  <div className="relative p-7">
                    <span className="eyebrow text-gold-300">
                      {r.category} · {r.minutes} min read
                    </span>
                    <h3 className="mt-3 font-display text-[1.65rem] leading-tight font-semibold text-cream-50">
                      {r.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-cream-100/65">
                      {r.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[11.5px] font-extrabold tracking-[0.18em] text-gold-300 uppercase">
                      Read guide
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Planner teaser ──────────────────────── */}
      <section className="relative overflow-hidden bg-emerald-950 py-24 sm:py-28">
        <Pattern className="text-gold-500/[0.07]" id="plan-teaser" strokeWidth={0.6} />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-transparent to-emerald-950/60" />
        <div className="wrap relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              dark
              align="left"
              arabic="خطط رحلتك"
              kicker="Rihla Journey Planner"
              title={
                <>
                  Not sure where to begin?{" "}
                  <em className="gold-grad-text">Start here.</em>
                </>
              }
              description="Answer six gentle questions — dates, travellers, airport, hotels, budget and needs — and a dedicated consultant will craft your personal journey proposal within one working day."
            />
            <Reveal delay={0.15}>
              <Link href="/journey-planner" className="btn btn-gold mt-8 h-13 px-8 text-sm">
                Open the Journey Planner
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Stagger className="space-y-4" stagger={0.12}>
            {[
              { n: "1", t: "Tell us your journey", d: "Dates, departure airport and who is travelling — including any mobility or family needs." },
              { n: "2", t: "We design your Rihla", d: "A named consultant shapes options across hotels, flights and pacing — every cost itemised." },
              { n: "3", t: "Travel with Rihla Care", d: "Plan · Prepare · Travel · Support · Return. You are never travelling alone." },
            ].map((s) => (
              <StaggerItem key={s.n}>
                <div className="flex items-start gap-5 rounded-3xl border border-cream-100/12 bg-navy-950/45 p-6 backdrop-blur transition-colors hover:border-gold-500/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-500/50 font-display text-xl font-semibold text-gold-300">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-cream-50">{s.t}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-cream-100/60">{s.d}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand arabic="سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا" />
    </>
  );
}
