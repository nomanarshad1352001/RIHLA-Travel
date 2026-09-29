import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import PlannerClient from "@/components/PlannerClient";
import { IMG } from "@/lib/data";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Rihla Journey Planner — Your Personal Umrah & Hajj Proposal",
  description:
    "Answer six gentle questions — dates, travellers, airport, hotels, budget and needs — and receive a personal, itemised journey proposal from a dedicated Rihla consultant.",
};

export default function JourneyPlannerPage() {
  return (
    <>
      <PageHero
        image={IMG.madinahMinaret}
        alt="The Green Dome and minarets of the Prophet's Mosque"
        arabic="خطط رحلتك"
        kicker="Rihla Journey Planner"
        crumbs={[{ label: "Home", href: "/" }, { label: "Journey Planner" }]}
        title={
          <>
            Six questions.{" "}
            <em className="gold-grad-text">One personal Rihla.</em>
          </>
        }
        description="Tell us about your journey — dates, travellers, comfort and budget — and a dedicated consultant will craft an itemised proposal around your life, not our brochure."
      />
      <Suspense
        fallback={
          <div className="flex min-h-[40vh] items-center justify-center bg-cream-50">
            <Loader2 className="h-8 w-8 animate-spin text-gold-600" />
          </div>
        }
      >
        <PlannerClient />
      </Suspense>
    </>
  );
}
