"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { easeLux } from "@/components/motion";
import { cn } from "@/lib/utils";

export default function FAQ({
  items,
  dark = false,
  defaultOpen = 0,
}: {
  items: readonly { q: string; a: string }[];
  dark?: boolean;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div
      className={cn(
        "divide-y overflow-hidden rounded-3xl border",
        dark
          ? "divide-cream-100/10 border-cream-100/12 bg-navy-900/60"
          : "divide-navy-900/8 border-navy-900/10 bg-white shadow-[0_24px_60px_-32px_rgba(8,19,36,0.22)]"
      )}
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-5 px-6 py-5.5 text-left transition-colors sm:px-8"
            >
              <span
                className={cn(
                  "font-display text-lg font-semibold text-gold-600 tabular-nums",
                  dark && "text-gold-400"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "flex-1 text-[15px] font-bold sm:text-base",
                  dark ? "text-cream-50" : "text-navy-900"
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-400",
                  isOpen
                    ? "rotate-45 border-gold-500 bg-gold-500 text-navy-950"
                    : dark
                      ? "border-cream-100/20 text-cream-100/60"
                      : "border-navy-900/15 text-navy-700"
                )}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: easeLux }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "pr-10 pb-6 pl-16 text-sm leading-relaxed sm:pl-[4.25rem] sm:text-[15px]",
                      dark ? "text-cream-100/65" : "text-navy-700/80"
                    )}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
