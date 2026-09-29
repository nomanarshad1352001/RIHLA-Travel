"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { whatsappLink } from "@/lib/site";
import { WhatsAppGlyph } from "@/components/Footer";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          href={whatsappLink("Assalamu alaikum Rihla, I'd like some advice about a journey.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Rihla"
          className="group fixed right-5 bottom-5 z-50 flex items-center gap-0 sm:right-7 sm:bottom-7"
        >
          <span className="pointer-events-none mr-0 max-w-0 overflow-hidden rounded-full bg-navy-950 text-sm font-semibold whitespace-nowrap text-cream-50 opacity-0 shadow-xl transition-all duration-500 ease-out group-hover:mr-3 group-hover:max-w-44 group-hover:px-4 group-hover:py-2.5 group-hover:opacity-100">
            WhatsApp Rihla
          </span>
          <span className="relative grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-[0_14px_34px_-8px_rgba(34,193,94,0.65)] transition-transform duration-300 group-hover:scale-105">
            <span className="absolute inset-0 animate-ping-soft rounded-full bg-wa" />
            <WhatsAppGlyph className="relative h-7 w-7" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
