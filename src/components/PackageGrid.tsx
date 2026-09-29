"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PackageCard from "@/components/PackageCard";
import { easeLux } from "@/components/motion";
import { cn } from "@/lib/utils";
import type { TravelPackage } from "@/lib/data";

export default function PackageGrid({
  packages,
  filters,
}: {
  packages: TravelPackage[];
  filters: string[];
}) {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? packages : packages.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "btn h-10.5 rounded-full border px-5 text-[12px] font-extrabold tracking-[0.12em] uppercase transition-all",
              f === active
                ? "border-gold-500 bg-gold-500 text-navy-950 shadow-[0_10px_24px_-8px_rgba(198,161,79,0.6)]"
                : "border-navy-900/15 bg-transparent text-navy-700 hover:border-gold-600 hover:text-gold-700"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((pkg) => (
            <motion.div
              key={pkg.slug}
              layout
              initial={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
              transition={{ duration: 0.55, ease: easeLux }}
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-10 text-center text-xs tracking-wide text-navy-700/55">
        Prices are illustrative per-person rates based on two adults sharing · Every quote is fully itemised before you commit
      </p>
    </div>
  );
}
