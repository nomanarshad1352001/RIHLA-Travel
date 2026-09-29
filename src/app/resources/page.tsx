import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import ResourcesBrowser from "@/components/ResourcesBrowser";
import { SectionHeading } from "@/components/decor";
import { Reveal } from "@/components/motion";
import { IMG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Rihla Resources — Umrah Guides, Duas & Checklists",
  description:
    "The Rihla knowledge centre: step-by-step Umrah guides, Hajj preparation, packing checklists, duas, Makkah & Madinah city guides and practical travel advice.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        image={IMG.quranBlue}
        alt="An open Quran with prayer beads"
        arabic="المصادر"
        kicker="Rihla Resources"
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        title={
          <>
            Prepare with {" "}
            <em className="gold-grad-text">knowledge, travel with peace</em>
          </>
        }
        description="Guides, checklists, duas and city wisdom — written by our team, refined by thousands of pilgrim questions, free for every traveller whether you book with us or not."
      />

      <section className="relative bg-cream-50 py-20 sm:py-28">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              arabic="مركز المعرفة"
              kicker="The Knowledge Centre"
              title={
                <>
                  Every question a pilgrim asks,{" "}
                  <em className="text-gold-600">answered gently</em>
                </>
              }
              description="Filter by topic, open a guide, and prepare at your own pace. Booked pilgrims receive printed editions at the pre-departure seminar."
            />
          </Reveal>
          <div className="mt-14">
            <ResourcesBrowser />
          </div>
        </div>
      </section>

      {/* Printed guides band */}
      <section className="relative overflow-hidden bg-emerald-950 py-20 sm:py-24">
        <div className="absolute inset-0 opacity-[0.55]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMG.mosqueChandeliers}
            alt=""
            aria-hidden
            loading="lazy"
            className="h-full w-full object-cover opacity-25"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/70 to-transparent" />
        <div className="wrap relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <SectionHeading
            dark
            align="left"
            arabic="الدليل المطبوع"
            kicker="The Rihla Handbook"
            title="Prefer paper? So do we."
            description="Every booked pilgrim receives the printed Rihla Handbook — the complete guide, packing checklist and dua collection in one beautifully bound companion, with space for your own notes at the Haram."
          />
          <Reveal delay={0.1} className="flex flex-col items-start gap-4 lg:items-end">
            <Link href="/journey-planner" className="btn btn-gold h-13 px-8 text-sm">
              Book & Receive Your Handbook
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-cream-100/45 uppercase">
              <Download className="h-3.5 w-3.5" />
              Digital edition included free
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand
        arabic="اَلْعِلْمُ قَبْلَ السَّفَر"
        kicker="Knowledge Before Travel"
        title="Ready when you are"
        description="Read everything, ask anything, book only when your heart is settled. Our consultants answer questions all day — pilgrim or not."
        note="Free guidance · WhatsApp answered daily · No obligation to book"
      />
    </>
  );
}
