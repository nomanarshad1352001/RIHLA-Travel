import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Pattern, GoldRule } from "@/components/decor";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export default function PageHero({
  image,
  alt,
  kicker,
  arabic,
  title,
  description,
  crumbs,
  tall = false,
  children,
}: {
  image: string;
  alt: string;
  kicker: string;
  arabic?: string;
  title: React.ReactNode;
  description?: string;
  crumbs?: { label: string; href?: string }[];
  tall?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-navy-950",
        tall ? "min-h-[82vh]" : "min-h-[64vh]"
      )}
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt}
          className="h-full w-full animate-kenburns object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-transparent" />
      <Pattern className="text-gold-500/[0.07]" id={`hero-${kicker}`} />

      <div className="wrap relative pt-40 pb-16 sm:pb-20">
        {crumbs && (
          <Reveal y={14} duration={0.7}>
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] uppercase">
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="text-cream-100/55 transition-colors hover:text-gold-300">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-gold-300">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3 text-gold-500/70" />}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        <div className="max-w-3xl">
          {arabic && (
            <Reveal delay={0.05}>
              <p className="font-arabic text-2xl text-gold-400 sm:text-3xl" dir="rtl">
                {arabic}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <p className="eyebrow mt-3 text-gold-300">
              <span className="h-1 w-1 rotate-45 bg-current" />
              {kicker}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <h1 className="mt-5 font-display text-5xl leading-[1.04] font-medium tracking-tight text-balance text-cream-50 sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.28}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-cream-100/70 sm:text-lg">
                {description}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.38}>
              <div className="mt-9">{children}</div>
            </Reveal>
          )}
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0">
        <GoldRule light className="pb-8 opacity-70" />
      </div>
    </section>
  );
}
