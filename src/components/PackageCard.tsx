import Link from "next/link";
import { BedDouble, MapPin, Hotel, Check, ArrowRight } from "lucide-react";
import type { TravelPackage } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function PackageCard({
  pkg,
  dark = false,
}: {
  pkg: TravelPackage;
  dark?: boolean;
}) {
  return (
    <article
      className={cn(
        "card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border shadow-[0_20px_50px_-24px_rgba(8,19,36,0.28)]",
        dark
          ? "border-cream-100/10 bg-navy-900 hover:shadow-[0_34px_70px_-24px_rgba(0,0,0,0.7)]"
          : "border-navy-900/8 bg-white hover:border-gold-500/40 hover:shadow-[0_34px_70px_-26px_rgba(8,19,36,0.36)]"
      )}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden sm:h-56">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pkg.image}
          alt={pkg.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-navy-950/10" />
        {pkg.badge && (
          <span className="absolute top-4 left-4 rounded-full bg-gold-500 px-3.5 py-1.5 text-[10.5px] font-extrabold tracking-[0.14em] text-navy-950 uppercase shadow-lg">
            {pkg.badge}
          </span>
        )}
        <span className="absolute top-4 right-4 rounded-full border border-cream-100/30 bg-navy-950/45 px-3 py-1.5 text-[10.5px] font-bold tracking-[0.14em] text-cream-100 uppercase backdrop-blur">
          {pkg.category}
        </span>
        <div className="absolute bottom-4 left-5 flex items-baseline gap-1.5 text-cream-50">
          <span className="font-display text-4xl font-semibold">{pkg.nights}</span>
          <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-80">nights</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3
          className={cn(
            "font-display text-[1.7rem] leading-tight font-semibold",
            dark ? "text-cream-50" : "text-navy-900"
          )}
        >
          {pkg.title}
        </h3>

        <div className={cn("mt-3 space-y-2 text-[13px]", dark ? "text-cream-100/65" : "text-navy-700/75")}>
          <p className="flex items-center gap-2">
            <BedDouble className="h-4 w-4 shrink-0 text-gold-600" />
            {pkg.split}
          </p>
          <p className="flex items-center gap-2">
            <Hotel className="h-4 w-4 shrink-0 text-gold-600" />
            {pkg.hotels}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-gold-600" />
            {pkg.distance}
          </p>
        </div>

        <ul className={cn("mt-5 space-y-2 border-t border-dashed pt-5 text-[13px]", dark ? "border-cream-100/15 text-cream-100/75" : "border-navy-900/12 text-navy-800/85")}>
          {pkg.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" strokeWidth={3} />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className={cn("text-[10.5px] font-bold tracking-[0.2em] uppercase", dark ? "text-cream-100/50" : "text-navy-700/55")}>
                From, per person
              </p>
              <p className={cn("font-display text-[2rem] leading-none font-semibold", dark ? "text-gold-300" : "text-navy-900")}>
                £{pkg.price.toLocaleString("en-GB")}
              </p>
            </div>
            <p className={cn("max-w-[9rem] text-right text-[11px] leading-snug", dark ? "text-cream-100/45" : "text-navy-700/50")}>
              Flights · Hotels · Visa · Transfers
            </p>
          </div>

          <div className="mt-5 flex gap-2.5">
            <Link
              href={`/contact?subject=${pkg.kind === "hajj" ? "Hajj%20Enquiry" : "Umrah%20Enquiry"}&pkg=${pkg.slug}`}
              className="btn btn-gold h-11 flex-1 px-4 text-[12.5px]"
            >
              Request a Quote
            </Link>
            <Link
              href={`/journey-planner?journey=${pkg.kind}`}
              className={cn(
                "btn h-11 px-4 text-[12.5px]",
                dark ? "btn-outline-light" : "btn-outline-navy"
              )}
              aria-label={`Plan ${pkg.title} in the Journey Planner`}
            >
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
