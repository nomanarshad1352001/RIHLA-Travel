"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { easeLux } from "@/components/motion";
import { cn } from "@/lib/utils";

export default function Testimonials({ dark = false }: { dark?: boolean }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6500);
    return () => clearInterval(t);
  }, [paused, count]);

  const item = TESTIMONIALS[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Quote
        className={cn(
          "absolute -top-6 -left-2 h-24 w-24 rotate-180",
          dark ? "text-gold-500/15" : "text-gold-500/25"
        )}
        strokeWidth={1}
      />
      <div className="relative min-h-[19rem] sm:min-h-[15rem]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
            transition={{ duration: 0.7, ease: easeLux }}
          >
            <div className="flex gap-1 text-gold-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote
              className={cn(
                "mt-5 font-display text-2xl leading-snug font-medium text-pretty italic sm:text-[1.85rem]",
                dark ? "text-cream-50" : "text-navy-900"
              )}
            >
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className={cn("text-sm font-extrabold tracking-wide", dark ? "text-gold-300" : "text-gold-700")}>
                {item.name}
              </span>
              <span className={cn("text-xs font-semibold tracking-[0.18em] uppercase", dark ? "text-cream-100/50" : "text-navy-700/55")}>
                {item.location} · {item.journey}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-5">
        <div className="flex gap-2.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === index
                  ? "w-9 bg-gold-500"
                  : dark
                    ? "w-3 bg-cream-100/25 hover:bg-cream-100/45"
                    : "w-3 bg-navy-900/18 hover:bg-navy-900/35"
              )}
            />
          ))}
        </div>
        <div className="ml-auto flex gap-2">
          <button
            onClick={() => setIndex((index - 1 + count) % count)}
            aria-label="Previous testimonial"
            className={cn(
              "grid h-11 w-11 place-items-center rounded-full border transition-all hover:-translate-y-0.5",
              dark
                ? "border-cream-100/20 text-cream-100/70 hover:border-gold-400 hover:text-gold-300"
                : "border-navy-900/15 text-navy-800 hover:border-gold-600 hover:text-gold-700"
            )}
          >
            <ChevronLeft className="h-4.5 w-4.5" />
          </button>
          <button
            onClick={() => setIndex((index + 1) % count)}
            aria-label="Next testimonial"
            className={cn(
              "grid h-11 w-11 place-items-center rounded-full border transition-all hover:-translate-y-0.5",
              dark
                ? "border-cream-100/20 text-cream-100/70 hover:border-gold-400 hover:text-gold-300"
                : "border-navy-900/15 text-navy-800 hover:border-gold-600 hover:text-gold-700"
            )}
          >
            <ChevronRight className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
