import { IMG } from "@/lib/data";
import { SectionHeading, ArabicWatermark } from "@/components/decor";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

const SHOTS = [
  { src: IMG.mosqueCeiling, caption: "Ceilings of devotion", arabic: "زخرفة", aspect: "aspect-[3/4]", alt: "Intricate calligraphy on a mosque ceiling" },
  { src: IMG.kaabaCrowd, caption: "One ummah, one qibla", arabic: "الحرم", aspect: "aspect-[4/3]", alt: "Thousands of pilgrims at the Holy Kaaba" },
  { src: IMG.womenPraying, caption: "Moments of sukoon", arabic: "سكينة", aspect: "aspect-[3/4]", alt: "Worshippers praying by a glowing window" },
  { src: IMG.prayerInterior, caption: "Shoulder to shoulder", arabic: "جماعة", aspect: "aspect-[4/3]", alt: "Congregational prayer inside a mosque" },
  { src: IMG.mosqueGeometric, caption: "Sacred geometry", arabic: "هندسة", aspect: "aspect-[3/4]", alt: "Geometric arches inside a mosque" },
  { src: IMG.madinahCrowd, caption: "The Prophet's city", arabic: "المدينة", aspect: "aspect-[4/3]", alt: "Pilgrims outside the Prophet's Mosque in Madinah" },
  { src: IMG.tasbihMan, caption: "Dhikr between prayers", arabic: "ذكر", aspect: "aspect-[3/4]", alt: "A worshipper holding prayer beads" },
  { src: IMG.mosqueArches, caption: "Arches of light", arabic: "أقواس", aspect: "aspect-[4/3]", alt: "Ornate mosque arches and calligraphy" },
] as const;

export default function SacredGallery() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
      <ArabicWatermark
        word="مشاهد"
        className="top-4 -right-8 text-[14rem] text-navy-900/[0.03]"
      />
      <div className="wrap relative">
        <Reveal>
          <SectionHeading
            arabic="مشاهد"
            kicker="The Sacred Gallery"
            title={
              <>
                Windows to the <em className="text-gold-600">Haramain</em>
              </>
            }
            description="Captured by pilgrims on Rihla journeys — the places your heart already knows, waiting for your eyes."
          />
        </Reveal>

        <Stagger
          className="mt-16 columns-2 gap-4 [column-fill:balance] sm:gap-5 md:columns-3 xl:columns-4"
          stagger={0.07}
        >
          {SHOTS.map((s) => (
            <StaggerItem key={s.caption} className="mb-4 break-inside-avoid sm:mb-5">
              <figure className="group relative overflow-hidden rounded-3xl shadow-[0_18px_44px_-20px_rgba(8,19,36,0.35)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-110",
                    s.aspect
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-90" />
                <span className="pointer-events-none absolute inset-3 rounded-2xl border border-gold-400/0 transition-all duration-500 group-hover:border-gold-400/45" />
                <figcaption className="absolute right-0 bottom-0 left-0 p-5 transition-all duration-500 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                  <p className="font-arabic text-xl leading-none text-gold-300" dir="rtl">
                    {s.arabic}
                  </p>
                  <p className="mt-1.5 text-[10.5px] font-extrabold tracking-[0.22em] text-cream-100/90 uppercase">
                    {s.caption}
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-[11px] font-bold tracking-[0.24em] text-navy-700/45 uppercase">
            Makkah · Madinah · Every Rihla journey between
          </p>
        </Reveal>
      </div>
    </section>
  );
}
