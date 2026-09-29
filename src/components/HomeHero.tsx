"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { IMG } from "@/lib/data";
import { easeLux } from "@/components/motion";
import { Pattern } from "@/components/decor";

const trustItems = [
  "5,000+ pilgrims guided",
  "4.9/5 pilgrim rating",
  "No hidden charges",
  "24/7 Rihla Care line",
];

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950">
      {/* Background video */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.06]">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={IMG.heroPoster}
        >
          <source src={IMG.heroVideo} type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-navy-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-navy-950/15 to-transparent" />
      <Pattern className="text-gold-500/[0.08]" id="home-hero" />

      {/* Content */}
      <motion.div style={{ y: contentY, opacity: fade }} className="wrap relative pt-32 pb-40">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: easeLux }}
          className="font-arabic text-2xl text-gold-400 sm:text-3xl"
          dir="rtl"
        >
          رحلتك · رعايتنا
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: easeLux }}
          className="eyebrow mt-4 text-cream-100/85"
        >
          <span className="h-1 w-1 rotate-45 bg-gold-400" />
          Umrah · Hajj · Ziyarat — from the UK
          <span className="h-1 w-1 rotate-45 bg-gold-400" />
        </motion.p>

        <h1 className="mt-6 font-display leading-[0.98] font-medium tracking-tight text-cream-50">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.55, ease: easeLux }}
              className="block text-[clamp(3.2rem,9.5vw,7.5rem)]"
            >
              Your Journey.
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-3">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.72, ease: easeLux }}
              className="gold-grad-text animate-shimmer block text-[clamp(3.2rem,9.5vw,7.5rem)] italic"
            >
              Our Care.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: easeLux }}
          className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-cream-100/78 sm:text-lg"
        >
          Premium pilgrimages to Makkah &amp; Madinah — planned with complete
          transparency, priced without surprises, and delivered with genuine
          care from your first call to your safe return home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: easeLux }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link href="/journey-planner" className="btn btn-gold h-14 px-8 text-sm">
            Plan Your Rihla
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/umrah" className="btn btn-outline-light h-14 px-8 text-sm">
            Explore Umrah Packages
          </Link>
        </motion.div>
      </motion.div>

      {/* Trust bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.35, ease: easeLux }}
        className="absolute right-0 bottom-0 left-0"
      >
        <div className="wrap pb-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-cream-100/15 pt-6">
            <div className="flex items-center gap-2">
              <span className="flex text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </span>
              <span className="text-xs font-bold tracking-[0.18em] text-cream-100/85 uppercase">
                Rated by pilgrims
              </span>
            </div>
            {trustItems.map((t) => (
              <span key={t} className="hidden items-center gap-2.5 text-xs font-bold tracking-[0.18em] text-cream-100/60 uppercase sm:flex">
                <span className="h-1 w-1 rotate-45 bg-gold-500" />
                {t}
              </span>
            ))}
            <span className="ml-auto hidden items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-cream-100/45 uppercase lg:flex">
              Scroll
              <ChevronDown className="h-4 w-4 animate-bounce text-gold-400" />
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
