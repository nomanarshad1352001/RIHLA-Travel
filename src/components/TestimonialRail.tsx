import { Star, Quote, BadgeCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Pattern, SectionHeading } from "@/components/decor";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

type Review = (typeof TESTIMONIALS)[number];

function initials(name: string) {
  return name
    .replace(/^The\s+/i, "")
    .split(/\s+/)
    .map((w) => w[0])
    .filter((c) => c && /[a-z]/i.test(c))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="card-lift flex w-[20.5rem] shrink-0 flex-col rounded-3xl border border-cream-100/10 bg-navy-900/75 p-6 backdrop-blur hover:border-gold-500/40 sm:w-[23.5rem] sm:p-7">
      <div className="flex items-center justify-between">
        <span className="flex gap-0.5 text-gold-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" />
          ))}
        </span>
        <Quote className="h-5 w-5 rotate-180 text-gold-500/35" />
      </div>
      <blockquote className="mt-4 flex-1 text-[13.5px] leading-relaxed text-pretty text-cream-100/78">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-cream-100/10 pt-4.5">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-500/45 bg-gold-500/10 font-display text-sm font-semibold text-gold-300">
          {initials(review.name)}
        </span>
        <span className="min-w-0">
          <span className="flex items-center gap-1.5 text-sm font-extrabold text-cream-50">
            <span className="truncate">{review.name}</span>
            <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
          </span>
          <span className="block truncate text-[10.5px] font-bold tracking-[0.13em] text-cream-100/45 uppercase">
            {review.location} · {review.journey}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function RailRow({ items, reverse = false }: { items: readonly Review[]; reverse?: boolean }) {
  return (
    <div className="group mask-fade-x overflow-hidden">
      <div
        className={cn(
          "flex w-max group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee-slow"
        )}
      >
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex gap-5 pr-5">
            {items.map((r) => (
              <ReviewCard key={`${r.name}-${copy}`} review={r} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialRail() {
  const half = Math.ceil(TESTIMONIALS.length / 2);
  const rowA = TESTIMONIALS.slice(0, half);
  const rowB = TESTIMONIALS.slice(half);

  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <Pattern className="text-gold-500/[0.05]" id="rail" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="wrap relative">
        <Reveal>
          <SectionHeading
            dark
            arabic="آراء ضيوفنا"
            kicker="Pilgrim Voices"
            title={
              <>
                From ten cities,{" "}
                <em className="gold-grad-text">one word: shukran</em>
              </>
            }
            description="Real journeys, rated by the families who lived them — sliding endlessly, like the gratitude itself. Hover any card to pause and read."
          />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mx-auto mt-8 flex w-fit items-center gap-4 rounded-full border border-gold-500/30 bg-gold-500/8 px-6 py-3">
            <span className="font-display text-2xl font-semibold text-gold-300">4.9 / 5</span>
            <span className="h-4 w-px bg-gold-500/40" />
            <span className="flex gap-0.5 text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span className="h-4 w-px bg-gold-500/40" />
            <span className="text-[11px] font-extrabold tracking-[0.16em] text-cream-100/60 uppercase">
              480+ verified reviews
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="relative mt-14 space-y-5">
          <RailRow items={rowA} />
          <RailRow items={rowB} reverse />
        </div>
      </Reveal>
    </section>
  );
}
