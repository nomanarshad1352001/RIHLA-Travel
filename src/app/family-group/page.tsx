import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PhoneCall, PencilRuler, PlaneTakeoff, HeartHandshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Testimonials from "@/components/Testimonials";
import { IconByName } from "@/components/icons";
import { Pattern, SectionHeading, ArabicWatermark } from "@/components/decor";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { IMG, FAMILY_PILLARS, TESTIMONIALS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Family & Group Umrah — Tailored Pilgrimages",
  description:
    "Tailored Umrah for families, elderly travellers, group leaders and first-time pilgrims. Quad rooms, wheelchair arrangements, child-paced itineraries and dedicated Rihla Care.",
};

const STEPS = [
  {
    icon: PhoneCall,
    title: "Tell us about your people",
    text: "Who is travelling, ages, mobility, health considerations and the pace your family actually keeps.",
  },
  {
    icon: PencilRuler,
    title: "We design around them",
    text: "Room configurations, flight timings, lift-adjacent hotels, Ziyarat pacing — itemised in one clear proposal.",
  },
  {
    icon: PlaneTakeoff,
    title: "Travel together, guided",
    text: "A Rihla guide with your group from check-in, keeping eleven people feeling like one family, not a tour crowd.",
  },
  {
    icon: HeartHandshake,
    title: "Cared for at every step",
    text: "Wheelchairs at the Harams, daily check-ins for elders, and someone to call at 3am if a child falls ill.",
  },
];

export default function FamilyGroupPage() {
  const quote = TESTIMONIALS[2];

  return (
    <>
      <PageHero
        image={IMG.familyAirport}
        alt="A mother and daughter embracing at the airport before their journey"
        arabic="عائلة"
        kicker="Family & Group Travel"
        tall
        crumbs={[{ label: "Home", href: "/" }, { label: "Family & Group" }]}
        title={
          <>
            Pilgrimage is sweeter{" "}
            <em className="gold-grad-text">shared</em>
          </>
        }
        description="Three generations at the Kaaba. Your mother's wheelchair arranged before you land. Your children guided through their first Umrah by someone who loves doing exactly that. This is travel designed around your people."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/journey-planner?journey=family" className="btn btn-gold h-13 px-7 text-sm">
            Plan Our Family Rihla
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact?subject=Group%20Enquiry" className="btn btn-outline-light h-13 px-7 text-sm">
            I'm a Group Leader
          </Link>
        </div>
      </PageHero>

      {/* ── Pillars ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
        <ArabicWatermark word="معاً" className="top-4 -right-8 text-[15rem] text-navy-900/[0.03]" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              arabic="لكل مسافر"
              kicker="Who We Design For"
              title={
                <>
                  Every traveller,{" "}
                  <em className="text-gold-600">every need</em>
                </>
              }
              description="A pilgrimage for a family of eleven is not an Umrah package — it is an exercise in love and logistics. We specialise in both."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {FAMILY_PILLARS.map((p) => (
              <StaggerItem key={p.title}>
                <div className="card-lift group h-full rounded-3xl border border-navy-900/8 bg-white p-7 hover:border-gold-500/45 hover:shadow-[0_30px_60px_-28px_rgba(8,19,36,0.28)]">
                  <span className="relative grid h-13 w-13 place-items-center">
                    <span className="absolute inset-0 rotate-45 rounded-xl border border-gold-500/40 bg-gold-500/8 transition-transform duration-500 group-hover:rotate-[135deg]" />
                    <IconByName name={p.icon} className="relative h-5.5 w-5.5 text-gold-700" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900">{p.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-navy-700/70">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── How it works ─────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
        <Pattern className="text-gold-500/[0.06]" id="fam-steps" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="wrap relative">
          <Reveal>
            <SectionHeading
              dark
              arabic="كيف نعمل"
              kicker="How We Tailor"
              title={
                <>
                  Designed around your people,{" "}
                  <em className="gold-grad-text">not our brochure</em>
                </>
              }
            />
          </Reveal>
          <div className="relative mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <span className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent xl:block" />
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative text-center xl:text-left">
                  <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold-500/40 bg-navy-900 shadow-[0_0_0_8px_rgba(5,11,22,1)] xl:mx-0">
                    <s.icon className="h-5.5 w-5.5 text-gold-400" strokeWidth={1.8} />
                  </div>
                  <p className="mt-6 font-display text-5xl leading-none font-light text-gold-500/30">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-[1.45rem] font-semibold text-cream-50">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-cream-100/55">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature split ────────────────────────── */}
      <section className="relative overflow-hidden bg-cream-100 py-24 sm:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              arabic="بر الوالدين"
              kicker="For the Ones Who Raised You"
              title={
                <>
                  Taking your parents to the Haram is{" "}
                  <em className="text-gold-600">the gift of your life</em>
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-navy-700/80 sm:text-lg">
                Many of our most moving journeys are grown children bringing
                their parents to Umrah. We treat those journeys accordingly:
                wheelchairs arranged at both Harams, rooms beside the lifts,
                shorter walking routes, rest built into every day, and a guide
                who checks on your father by name each morning.
              </p>
            </Reveal>
            <Stagger className="mt-8 space-y-3.5" stagger={0.08}>
              {[
                "Wheelchairs & electric scooters arranged in advance",
                "Lift-adjacent, step-free rooms on request",
                "One major ritual per day — rest is worship too",
                "Medication, dietary & mobility notes carried by your guide",
              ].map((t) => (
                <StaggerItem key={t}>
                  <p className="flex items-start gap-3 text-[14px] font-semibold text-navy-800">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-gold-500" />
                    {t}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2}>
              <blockquote className="mt-9 rounded-3xl border border-gold-500/30 bg-white p-7">
                <p className="font-display text-lg leading-relaxed text-navy-800 italic">
                  “{quote.quote}”
                </p>
                <footer className="mt-4 text-[11px] font-extrabold tracking-[0.2em] text-gold-700 uppercase">
                  {quote.name} · {quote.location}
                </footer>
              </blockquote>
            </Reveal>
          </div>
          <Reveal className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="gold-frame overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(8,19,36,0.45)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG.familyAirport2}
                  alt="A mother and daughter travelling together"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-6 w-44 overflow-hidden rounded-3xl border-4 border-cream-100 shadow-2xl sm:-left-12 sm:w-56">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG.prayerInterior}
                  alt="A family praying together in a mosque"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28">
        <Pattern className="text-gold-500/[0.05]" id="fam-testi" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="wrap relative grid items-start gap-12 lg:grid-cols-[0.8fr_1.4fr]">
          <SectionHeading
            dark
            align="left"
            arabic="عائلات سعيدة"
            kicker="Families We've Served"
            title="From Leeds to Lahore-by-marriage — they travelled together"
          />
          <Reveal delay={0.1}>
            <Testimonials dark />
          </Reveal>
        </div>
      </section>

      <CTABand
        arabic="رحلة العائلة"
        kicker="Bring Your People"
        title="Let's design your family's Rihla"
        description="Tell us who is travelling and what they need — the Journey Planner takes six gentle questions and returns a personal, itemised proposal for your family or group."
        note="Groups of 10–200 welcome · Rooming lists handled · Per-family payment plans"
      />
    </>
  );
}
