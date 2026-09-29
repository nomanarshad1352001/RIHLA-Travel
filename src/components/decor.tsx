import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/* Subtle Islamic 8-point star geometric pattern (two overlapping squares) */
export function Pattern({
  className,
  id = "pat",
  strokeWidth = 0.7,
}: {
  className?: string;
  id?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      <defs>
        <pattern
          id={`rihla-${id}`}
          width="104"
          height="104"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
            <rect x="34" y="34" width="36" height="36" />
            <rect
              x="34"
              y="34"
              width="36"
              height="36"
              transform="rotate(45 52 52)"
            />
            <circle cx="52" cy="52" r="2.4" />
            <circle cx="0" cy="0" r="1.6" />
            <circle cx="104" cy="0" r="1.6" />
            <circle cx="0" cy="104" r="1.6" />
            <circle cx="104" cy="104" r="1.6" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#rihla-${id})`} />
    </svg>
  );
}

/* Gold hairline rule with centre diamond */
export function GoldRule({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)} aria-hidden>
      <span
        className={cn(
          "h-px w-14 bg-gradient-to-r from-transparent to-gold-500/70",
          light && "to-gold-300/80"
        )}
      />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" />
      <span
        className={cn(
          "h-px w-14 bg-gradient-to-l from-transparent to-gold-500/70",
          light && "to-gold-300/80"
        )}
      />
    </div>
  );
}

/* Four-point star separator (marquee etc.) */
export function StarMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-3 w-3", className)} aria-hidden>
      <path d="M12 0c.9 6.6 5.4 11.1 12 12-6.6.9-11.1 5.4-12 12-.9-6.6-5.4-11.1-12-12C6.6 11.1 11.1 6.6 12 0Z" />
    </svg>
  );
}

export function Eyebrow({
  children,
  tone = "gold",
  className,
}: {
  children: ReactNode;
  tone?: "gold" | "gold-light" | "navy";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow",
        tone === "gold" && "text-gold-600",
        tone === "gold-light" && "text-gold-300",
        tone === "navy" && "text-navy-700",
        className
      )}
    >
      <span className="h-1 w-1 rotate-45 bg-current" />
      {children}
      <span className="h-1 w-1 rotate-45 bg-current" />
    </span>
  );
}

export function SectionHeading({
  kicker,
  arabic,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: {
  kicker: string;
  arabic?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {arabic && (
        <p
          className={cn(
            "font-arabic text-xl leading-none",
            dark ? "text-gold-400" : "text-gold-600"
          )}
          dir="rtl"
        >
          {arabic}
        </p>
      )}
      <div className={cn(arabic && "mt-3")}>
        <Eyebrow tone={dark ? "gold-light" : "gold"}>{kicker}</Eyebrow>
      </div>
      <h2
        className={cn(
          "mt-5 font-display text-4xl leading-[1.08] font-medium tracking-tight text-balance sm:text-5xl",
          dark ? "text-cream-50" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-pretty",
            dark ? "text-cream-100/65" : "text-navy-700/75"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* Giant Arabic watermark word */
export function ArabicWatermark({
  word,
  className,
}: {
  word: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute font-arabic leading-none select-none",
        className
      )}
      dir="rtl"
    >
      {word}
    </span>
  );
}

/* CSS-animated marquee (rendered twice for seamless loop) */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-8 font-display text-2xl font-medium italic tracking-wide text-cream-100/90 sm:text-3xl">
            {item}
          </span>
          <StarMark className="text-gold-400" />
        </span>
      ))}
    </div>
  );
  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div className="flex w-max animate-marquee">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
