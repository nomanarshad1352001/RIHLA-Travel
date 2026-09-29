"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Clock, X } from "lucide-react";
import { RESOURCES, RESOURCE_CATEGORIES, type Resource, type ResourceBlock } from "@/lib/data";
import { IconByName } from "@/components/icons";
import { GoldRule } from "@/components/decor";
import { easeLux } from "@/components/motion";
import { cn } from "@/lib/utils";

function Block({ block }: { block: ResourceBlock }) {
  switch (block.type) {
    case "h":
      return (
        <h3 className="mt-8 font-display text-2xl font-semibold text-navy-900 first:mt-0">
          {block.text}
        </h3>
      );
    case "p":
      return <p className="mt-4 text-[15px] leading-relaxed text-navy-700/85">{block.text}</p>;
    case "list":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[14.5px] text-navy-800/85">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-600" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "dua":
      return (
        <div className="mt-6 rounded-3xl border border-gold-500/35 bg-gradient-to-b from-gold-500/8 to-transparent p-7 text-center">
          <p className="font-arabic text-2xl leading-[2.2] text-navy-900 sm:text-[1.7rem]" dir="rtl">
            {block.arabic}
          </p>
          <p className="mt-4 text-[13.5px] text-navy-700/70 italic">{block.translit}</p>
          <p className="mt-3 border-t border-gold-500/25 pt-4 text-[13.5px] leading-relaxed font-semibold text-gold-700">
            {block.translation}
          </p>
        </div>
      );
  }
}

export default function ResourcesBrowser() {
  const [cat, setCat] = useState<string>("All");
  const [active, setActive] = useState<Resource | null>(null);

  const visible = cat === "All" ? RESOURCES : RESOURCES.filter((r) => r.category === cat);

  const openById = useCallback((id: string) => {
    const found = RESOURCES.find((r) => r.id === id);
    if (found) {
      setCat("All");
      setActive(found);
    }
  }, []);

  useEffect(() => {
    if (window.location.hash) openById(window.location.hash.slice(1));
  }, [openById]);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {RESOURCE_CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "btn h-10.5 rounded-full border px-5 text-[12px] font-extrabold tracking-[0.12em] uppercase",
              c === cat
                ? "border-gold-500 bg-gold-500 text-navy-950 shadow-[0_10px_24px_-8px_rgba(198,161,79,0.6)]"
                : "border-navy-900/15 text-navy-700 hover:border-gold-600 hover:text-gold-700"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {visible.map((r, idx) => (
            <motion.article
              key={r.id}
              layout
              initial={{ opacity: 0, scale: 0.94, filter: "blur(5px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.94, filter: "blur(5px)" }}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.04, 0.3), ease: easeLux }}
              id={r.id}
            >
              <button
                onClick={() => setActive(r)}
                className="card-lift group flex h-full w-full flex-col rounded-3xl border border-navy-900/8 bg-white p-6 text-left hover:border-gold-500/45 hover:shadow-[0_30px_60px_-28px_rgba(8,19,36,0.3)]"
              >
                <div className="flex items-start justify-between">
                  <span className="relative grid h-12 w-12 place-items-center">
                    <span className="absolute inset-0 rotate-45 rounded-xl border border-gold-500/40 bg-gold-500/8 transition-transform duration-500 group-hover:rotate-[135deg]" />
                    <IconByName name={r.icon} className="relative h-5 w-5 text-gold-700" />
                  </span>
                  <ArrowUpRight className="h-4.5 w-4.5 text-navy-900/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-600" />
                </div>
                <p className="eyebrow mt-5 text-gold-700">{r.category}</p>
                <h3 className="mt-2.5 font-display text-[1.45rem] leading-snug font-semibold text-navy-900">
                  {r.title}
                </h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-navy-700/65">{r.excerpt}</p>
                <span className="mt-5 flex items-center gap-2 text-[11px] font-extrabold tracking-[0.16em] text-navy-700/50 uppercase">
                  <Clock className="h-3.5 w-3.5 text-gold-600" />
                  {r.minutes} min read
                </span>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Reader modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <button
              aria-label="Close guide"
              onClick={() => setActive(null)}
              className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.55, ease: easeLux }}
              className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[2rem] bg-cream-50 shadow-2xl sm:rounded-[2rem]"
            >
              {active.image && (
                <div className="relative h-44 shrink-0 overflow-hidden sm:h-56">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream-50 via-cream-50/35 to-transparent" />
                </div>
              )}
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-navy-950/70 text-cream-100 backdrop-blur transition-colors hover:bg-gold-500 hover:text-navy-950"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="overflow-y-auto px-7 pt-6 pb-8 sm:px-10">
                <p className="eyebrow text-gold-700">
                  {active.category} · {active.minutes} minute read
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight font-semibold text-navy-900 sm:text-4xl">
                  {active.title}
                </h2>
                <GoldRule className="my-6 justify-start" />
                {active.content.map((b, i) => (
                  <Block key={i} block={b} />
                ))}
                <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-navy-950 p-7 text-center sm:flex-row sm:text-left">
                  <div className="flex-1">
                    <p className="font-display text-xl font-semibold text-cream-50">
                      Ready to put this into practice?
                    </p>
                    <p className="mt-1 text-[13px] text-cream-100/60">
                      Your consultant will tailor everything in this guide to your journey.
                    </p>
                  </div>
                  <a href="/journey-planner" className="btn btn-gold h-11 shrink-0 px-5 text-[12.5px]">
                    Plan Your Rihla <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
