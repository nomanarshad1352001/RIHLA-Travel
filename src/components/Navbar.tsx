"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { easeLux } from "@/components/motion";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="group flex items-center gap-3">
      <span className="relative grid h-11 w-11 place-items-center">
        <span className="absolute inset-0 rotate-45 rounded-[10px] border border-gold-500/70 transition-transform duration-500 group-hover:rotate-[135deg]" />
        <span className="font-arabic text-xl leading-none text-gold-400">ر</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.55rem] font-semibold tracking-[0.22em] text-cream-50">
          RIHLA
        </span>
        <span className="mt-1 text-[0.5625rem] font-bold tracking-[0.42em] text-gold-400/90">
          TRAVEL UK
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-gold-500/15 bg-navy-950/90 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-navy-950/70 to-transparent"
        )}
      >
        <div className="wrap flex h-20 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-6 xl:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative py-2 text-[11.5px] font-bold tracking-[0.16em] uppercase transition-colors",
                    active ? "text-gold-300" : "text-cream-100/78 hover:text-cream-50"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold-400 transition-transform duration-400",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="hidden items-center gap-2 text-[12px] font-bold tracking-wide text-cream-100/80 transition-colors hover:text-gold-300 lg:flex"
            >
              <Phone className="h-3.5 w-3.5 text-gold-400" />
              {SITE.phoneDisplay}
            </a>
            <Link
              href="/journey-planner"
              className="btn btn-gold hidden h-11 px-5 text-[12.5px] sm:inline-flex"
            >
              Plan Your Rihla
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 place-items-center rounded-full border border-cream-100/20 text-cream-100 transition-colors hover:border-gold-400 hover:text-gold-300 xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: easeLux }}
            className="fixed inset-0 z-40 overflow-y-auto bg-navy-950/98 backdrop-blur-2xl xl:hidden"
          >
            <div className="via-gold-500/10 absolute inset-0 bg-gradient-to-b from-transparent to-transparent" />
            <div className="wrap flex min-h-full flex-col pt-32 pb-12">
              <motion.nav
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
                className="flex flex-col gap-1"
              >
                {[{ href: "/journey-planner", label: "Journey Planner" }, ...NAV_LINKS].map((link, i) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeLux } },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "group flex items-baseline gap-4 border-b border-cream-100/8 py-4",
                        pathname === link.href ? "text-gold-300" : "text-cream-100"
                      )}
                    >
                      <span className="text-[11px] font-bold tracking-[0.3em] text-gold-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-4xl font-medium transition-colors group-hover:text-gold-300">
                        {link.label}
                      </span>
                      <ArrowRight className="ml-auto h-5 w-5 text-gold-500 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-auto flex flex-col gap-4 pt-12"
              >
                <p className="font-arabic text-2xl text-gold-400" dir="rtl">
                  رحلتك · رعايتنا
                </p>
                <p className="text-sm font-semibold tracking-[0.28em] text-cream-100/60 uppercase">
                  {SITE.slogan}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a href={SITE.phoneHref} className="btn btn-outline-light h-11 px-5 text-sm">
                    <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
                  </a>
                  <Link
                    href="/journey-planner"
                    onClick={() => setOpen(false)}
                    className="btn btn-gold h-11 px-6 text-sm"
                  >
                    Plan Your Rihla <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
