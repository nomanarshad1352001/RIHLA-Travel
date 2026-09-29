import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
import PackageGrid from "@/components/PackageGrid";
import { IconByName } from "@/components/icons";
import { Pattern, SectionHeading, GoldRule, ArabicWatermark } from "@/components/decor";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { whatsappLink } from "@/lib/site";
import { IMG, UMRAH_PACKAGES, INCLUSIONS, UMRAH_FAQS, HOTELS, RESOURCES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Umrah Packages from the UK — from £1,095",
  description:
    "Premium Umrah packages 2026: 3★ to 5★ hotels honestly measured from the Haram, flights from UK airports, visa assistance and the signature Rihla Care experience.",
};

const PREP_GUIDES = ["umrah-step-by-step", "packing-checklist", "duas-collection", "health-vaccinations"].map(
  (id) => RESOURCES.find((r) => r.id === id)!
);

export default function UmrahPage() {
  return (
    <>
      <PageHero
        image={IMG.kaabaAerial}
        alt="Aerial view of Masjid al-Haram and the Holy Kaaba in Makkah"
        arabic="عمرة"
        kicker="Umrah from the UK"
        tall
        crumbs={[{ label: "Home", href: "/" }, { label: "Umrah" }]}
        title={
          <>
            Umrah — the journey{" "}
            <em className="gold-grad-text">your heart has been packing for</em>
          </>
        }
        description="Year-round Umrah packages with hotels honestly measured in metres from the Haram, flights from every major UK airport, and a guide beside you on your very first Tawaf."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#umrah-packages" className="btn btn-gold h-13 px-7 text-sm">
            View Umrah Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={whatsappLink("Assalamu alaikum Rihla, I'd like Umrah advice please.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light h-13 px-7 text-sm"
          >
            <MessageCircle className="h-4 w-4 text-wa" />
            Get Umrah Advice
          </a>
          <span className="text-xs font-bold tracking-[0.2em] text-cream-100/55 uppercase">
            From £1,095 · 10–14 nights
          </span>
        </div>
      </PageHero>

      {/* ── Packages ─────────────────────────────── */}
      <section id="umrah-packages" className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
        <ArabicWatermark word="عمرة" className="top-8 -left-10 text-[15rem] text-navy-900/[0.03]" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              arabic="باقات العمرة"
              kicker="Umrah Packages 2025–2026"
              title={
                <>
                  Choose your <em className="text-gold-600">Umrah</em>
                </>
              }
              description="Every package includes flights, visa assistance, transfers and Rihla Care. Filter by comfort level — or let the Journey Planner build something personal."
            />
          </Reveal>
          <div className="mt-14">
            <PackageGrid
              packages={UMRAH_PACKAGES}
              filters={["All", "3-Star", "4-Star", "5-Star", "Seasonal"]}
            />
          </div>
        </div>
      </section>

      {/* ── Inclusions ───────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28">
        <Pattern className="text-gold-500/[0.06]" id="inc" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              dark
              arabic="كل شيء مشمول"
              kicker="No Surprises"
              title={
                <>
                  Included in <em className="gold-grad-text">every</em> Umrah package
                </>
              }
              description="The quote we give you is the price you pay. These essentials are always included — itemised in writing."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {INCLUSIONS.map((inc) => (
              <StaggerItem key={inc.label}>
                <div className="card-lift flex h-full items-start gap-4 rounded-3xl border border-cream-100/10 bg-navy-900/70 p-6 hover:border-gold-500/40">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-gold-500/35 bg-gold-500/10">
                    <IconByName name={inc.icon} className="h-5 w-5 text-gold-400" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-cream-50">{inc.label}</h3>
                    <p className="mt-1 text-[13px] text-cream-100/55">{inc.note}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Accommodation ────────────────────────── */}
      <section className="relative bg-cream-100 py-24 sm:py-32">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              arabic="فنادق مختارة"
              kicker="Accommodation"
              title={
                <>
                  Hotels we have <em className="text-gold-600">walked ourselves</em>
                </>
              }
              description="Every Rihla partner hotel is personally inspected — genuine walking distances, lifts that work at Fajr, and breakfasts worth waking for."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 lg:grid-cols-2" stagger={0.12}>
            {HOTELS.map((h) => (
              <StaggerItem key={h.city}>
                <article className="card-lift group grid h-full overflow-hidden rounded-3xl border border-navy-900/8 bg-white shadow-[0_24px_60px_-32px_rgba(8,19,36,0.3)] hover:border-gold-500/40 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-56 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={h.image}
                      alt={h.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-108"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-navy-950/70 px-3.5 py-1.5 font-arabic text-sm text-gold-300 backdrop-blur">
                      {h.city === "Makkah" ? "مكة" : "المدينة"}
                    </span>
                  </div>
                  <div className="p-7">
                    <p className="eyebrow text-gold-600">{h.city}</p>
                    <h3 className="mt-3 font-display text-2xl leading-tight font-semibold text-navy-900">
                      {h.name}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {h.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-[13px] text-navy-700/80">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Preparation ──────────────────────────── */}
      <section className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
        <div className="wrap">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              align="left"
              arabic="الاستعداد"
              kicker="Prepare Confidently"
              title={
                <>
                  Walk in prepared,{" "}
                  <em className="text-gold-600">not worried</em>
                </>
              }
            />
            <Link href="/resources" className="btn btn-outline-navy h-12 px-6 text-[12.5px]">
              All Rihla Resources
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {PREP_GUIDES.map((g) => (
              <StaggerItem key={g.id}>
                <Link
                  href={`/resources#${g.id}`}
                  className="card-lift group flex h-full flex-col rounded-3xl border border-navy-900/8 bg-white p-7 hover:border-gold-500/45"
                >
                  <span className="relative grid h-12 w-12 place-items-center">
                    <span className="absolute inset-0 rotate-45 rounded-xl border border-gold-500/40 bg-gold-500/8 transition-transform duration-500 group-hover:rotate-[135deg]" />
                    <IconByName name={g.icon} className="relative h-5 w-5 text-gold-700" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.45rem] leading-snug font-semibold text-navy-900">
                    {g.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-navy-700/65">{g.excerpt}</p>
                  <span className="eyebrow mt-5 text-gold-700">
                    {g.minutes} min read <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section className="relative bg-cream-100 py-24 sm:py-32">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[0.85fr_1.35fr]">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              arabic="أسئلة شائعة"
              kicker="Umrah FAQs"
              title="Questions, answered honestly"
              description="The questions every pilgrim asks — answered without fine print. Anything else, our consultants are one call away."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-3xl border border-gold-500/30 bg-navy-950 p-7 text-cream-100">
                <p className="font-display text-2xl font-semibold text-gold-300">
                  Still unsure?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/65">
                  Ask us anything — routes, hotels, visas or mahram guidance. Free advice, zero pressure.
                </p>
                <a
                  href={whatsappLink("Assalamu alaikum Rihla, I have a question about Umrah.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold mt-5 h-11 px-5 text-[12.5px]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Ask on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <FAQ items={UMRAH_FAQS} />
          </Reveal>
        </div>
      </section>

      <CTABand
        arabic="لبيك اللهم لبيك"
        kicker="Answer the Call"
        title="Labbayk — begin your Umrah"
        note="Umrah from £1,095 · Visa assistance included · 24/7 support while you travel"
      />
    </>
  );
}
