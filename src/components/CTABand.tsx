import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import { Pattern, GoldRule } from "@/components/decor";
import { Reveal } from "@/components/motion";
import { WhatsAppGlyph } from "@/components/Footer";

export default function CTABand({
  arabic = "رحلتك تبدأ هنا",
  kicker = "Begin Your Rihla",
  title = "Your Journey. Our Care.",
  description = "Tell us where your heart is headed. A dedicated Rihla consultant will shape a journey around your dates, your family and your budget — transparently, and with no obligation.",
  note = "Free consultation · Reply within one working day · No hidden charges, ever",
}: {
  arabic?: string;
  kicker?: string;
  title?: React.ReactNode;
  description?: string;
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <Pattern className="text-gold-500/[0.07]" id="cta" />
      <div className="absolute -top-40 left-1/2 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="wrap relative text-center">
        <Reveal>
          <p className="font-arabic text-3xl text-gold-400 sm:text-4xl" dir="rtl">
            {arabic}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="eyebrow mt-5 text-gold-300">
            <span className="h-1 w-1 rotate-45 bg-current" />
            {kicker}
            <span className="h-1 w-1 rotate-45 bg-current" />
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-5xl leading-[1.05] font-medium tracking-tight text-balance text-cream-50 sm:text-6xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-100/65 sm:text-lg">
            {description}
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link href="/journey-planner" className="btn btn-gold h-13 px-8 text-sm">
              Plan Your Rihla
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink("Assalamu alaikum Rihla, I'd like to plan a journey.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light h-13 px-7 text-sm"
            >
              <WhatsAppGlyph className="h-4.5 w-4.5 text-wa" />
              WhatsApp Rihla
            </a>
            <a href={SITE.phoneHref} className="btn h-11 px-4 text-sm font-bold text-cream-100/75 transition-colors hover:text-gold-300">
              <Phone className="h-4 w-4 text-gold-400" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.36}>
          <p className="mt-8 text-[11px] font-bold tracking-[0.24em] text-cream-100/40 uppercase">
            {note}
          </p>
        </Reveal>

        <Reveal delay={0.42}>
          <GoldRule light className="mt-12 opacity-80" />
        </Reveal>
      </div>
    </section>
  );
}
