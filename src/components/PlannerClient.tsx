"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  MoonStar,
  Tent,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight,
  Check,
  CheckCircle2,
  Minus,
  Plus,
  Loader2,
  CalendarDays,
  PlaneTakeoff,
  Wallet,
  Hotel,
  BedDouble,
  Landmark,
  MessageCircle,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";
import { easeLux } from "@/components/motion";
import { Pattern } from "@/components/decor";
import { AIRPORTS, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ── types & constants ───────────────────────────── */

type FormData = {
  journey: string;
  month: string;
  flexibility: string;
  duration: string;
  adults: number;
  children: number;
  infants: number;
  elderly: boolean;
  wheelchair: boolean;
  firstTime: boolean;
  airport: string;
  hotelRating: string;
  roomType: string;
  proximity: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  contactVia: string;
  notes: string;
  consent: boolean;
};

const INITIAL: FormData = {
  journey: "",
  month: "",
  flexibility: "My dates are fixed",
  duration: "10 nights",
  adults: 2,
  children: 0,
  infants: 0,
  elderly: false,
  wheelchair: false,
  firstTime: false,
  airport: AIRPORTS[0],
  hotelRating: "4★ Classic",
  roomType: "Twin",
  proximity: "Easy walking distance",
  budget: "£1,200 – £1,600",
  name: "",
  email: "",
  phone: "",
  contactVia: "WhatsApp",
  notes: "",
  consent: false,
};

const STEPS = ["Journey", "Dates", "Travellers", "Comfort", "Details", "Review"];

const JOURNEYS = [
  { value: "umrah", icon: MoonStar, title: "Umrah", desc: "The lesser pilgrimage, year-round", arabic: "عمرة" },
  { value: "hajj", icon: Tent, title: "Hajj 2026 · 1447", desc: "The journey of a lifetime", arabic: "حج" },
  { value: "ziyarat", icon: MapPin, title: "Ziyarat Tour", desc: "Sacred sites of Makkah & Madinah", arabic: "زيارة" },
  { value: "family", icon: Users, title: "Family & Group", desc: "Tailored for your people", arabic: "عائلة" },
];

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const YEARS = [2026, 2027];
const DURATIONS = ["7 nights", "9 nights", "10 nights", "12 nights", "14 nights", "21+ nights", "Not sure yet"];
const RATINGS = ["3★ Comfortable", "4★ Classic", "5★ Premium", "Advise me"];
const ROOMS = ["Single", "Twin", "Triple", "Quad", "Family room"];
const PROXIMITY = ["Steps from the Haram", "Easy walking distance", "Best value — shuttle is fine"];
const BUDGETS = ["£900 – £1,200", "£1,200 – £1,600", "£1,600 – £2,200", "£2,200+", "Not sure yet"];
const FLEXIBILITY = ["My dates are fixed", "Flexible ± 2 weeks", "Fully flexible — advise me"];

/* ── small primitives ────────────────────────────── */

function OptionChip({
  selected,
  onClick,
  children,
  className,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "btn h-11 rounded-xl border px-4 text-[13px] font-bold transition-all",
        selected
          ? "border-gold-500 bg-gold-500 text-navy-950 shadow-[0_8px_20px_-6px_rgba(198,161,79,0.55)]"
          : "border-navy-900/15 bg-white text-navy-800 hover:border-gold-600/60 hover:text-gold-700",
        className
      )}
    >
      {children}
    </button>
  );
}

function Counter({
  label,
  note,
  value,
  onChange,
  min = 0,
  max = 20,
}: {
  label: string;
  note: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-navy-900/10 bg-white px-5 py-4">
      <div>
        <p className="text-sm font-extrabold text-navy-900">{label}</p>
        <p className="text-xs text-navy-700/55">{note}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          onClick={() => onChange(Math.max(min, value - 1))}
          className="grid h-9 w-9 place-items-center rounded-full border border-navy-900/15 text-navy-800 transition-colors hover:border-gold-600 hover:text-gold-700 disabled:opacity-30"
          disabled={value <= min}
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-6 text-center font-display text-2xl font-semibold text-navy-900 tabular-nums">
          {value}
        </span>
        <button
          type="button"
          aria-label={`Increase ${label}`}
          onClick={() => onChange(Math.min(max, value + 1))}
          className="grid h-9 w-9 place-items-center rounded-full border border-navy-900/15 text-navy-800 transition-colors hover:border-gold-600 hover:text-gold-700 disabled:opacity-30"
          disabled={value >= max}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Toggle({
  label,
  note,
  checked,
  onChange,
}: {
  label: string;
  note: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
      className={cn(
        "flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all",
        checked ? "border-gold-500 bg-gold-500/8" : "border-navy-900/10 bg-white hover:border-gold-600/50"
      )}
    >
      <div>
        <p className="text-sm font-extrabold text-navy-900">{label}</p>
        <p className="text-xs text-navy-700/55">{note}</p>
      </div>
      <span
        className={cn(
          "relative h-7 w-12 shrink-0 rounded-full transition-colors duration-300",
          checked ? "bg-gold-500" : "bg-navy-900/15"
        )}
      >
        <span
          className={cn(
            "absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300",
            checked && "translate-x-5"
          )}
        />
      </span>
    </button>
  );
}

/* ── main component ──────────────────────────────── */

export default function PlannerClient() {
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [year, setYear] = useState(YEARS[0]);
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const j = params.get("journey");
    if (j && JOURNEYS.some((x) => x.value === j)) {
      setData((d) => ({ ...d, journey: j }));
    }
  }, [params]);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const scrollTop = () =>
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  function validate(target = step): string[] {
    const errs: string[] = [];
    if (target === 0 && !data.journey) errs.push("Please choose the journey closest to your heart.");
    if (target === 1 && !data.month) errs.push("Please choose a month — or “Not sure yet”.");
    if (target === 4) {
      if (data.name.trim().length < 2) errs.push("Please tell us your name.");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.push("Please enter a valid email address.");
      if (!data.consent) errs.push("Please allow us to contact you about your enquiry.");
    }
    return errs;
  }

  function next() {
    const errs = validate();
    setErrors(errs);
    if (errs.length) return;
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
    scrollTop();
  }

  function back() {
    setErrors([]);
    setStep((s) => Math.max(0, s - 1));
    scrollTop();
  }

  function submit() {
    setSubmitting(true);
    setTimeout(() => {
      const ref = `RH-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 89999)}`;
      setReference(ref);
      setSubmitting(false);
      scrollTop();
    }, 1400);
  }

  const journeyLabel = JOURNEYS.find((j) => j.value === data.journey)?.title;

  /* ── success view ─────────────────────────────── */
  if (reference) {
    return (
      <section ref={topRef} className="relative overflow-hidden bg-cream-50 py-20 sm:py-28">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: easeLux }}
            className="relative mx-auto max-w-2xl overflow-hidden rounded-[2rem] border border-gold-500/30 bg-navy-950 p-10 text-center shadow-[0_40px_80px_-30px_rgba(8,19,36,0.5)] sm:p-14"
          >
            <Pattern className="text-gold-500/[0.08]" id="planner-success" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.3 }}
              className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-gold-500"
            >
              <Check className="h-9 w-9 text-navy-950" strokeWidth={3} />
            </motion.div>
            <h2 className="relative mt-8 font-display text-4xl font-medium text-cream-50 sm:text-5xl">
              Mabrook, {data.name.split(" ")[0]}.
            </h2>
            <p className="relative mt-4 text-base leading-relaxed text-cream-100/70">
              Your journey brief is with our consultants now. Your personal
              reference is below — quote it whenever you call or message us.
            </p>
            <p className="relative mx-auto mt-7 inline-block rounded-2xl border border-gold-500/40 bg-gold-500/10 px-8 py-4 font-display text-3xl font-semibold tracking-[0.12em] text-gold-300">
              {reference}
            </p>
            <div className="relative mx-auto mt-10 max-w-md space-y-3.5 text-left">
              {[
                "A dedicated consultant reviews your brief within working hours",
                `We contact you via ${data.contactVia} with a personal, itemised proposal`,
                "We refine it together until it feels exactly right — no obligation",
              ].map((t, i) => (
                <div key={t} className="flex items-start gap-3.5 rounded-2xl border border-cream-100/10 bg-navy-900/60 p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold-500/50 text-xs font-extrabold text-gold-300">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-cream-100/75">{t}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappLink(`Assalamu alaikum Rihla, my reference is ${reference}. I just submitted a Journey Planner brief for ${journeyLabel ?? "a journey"}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold h-12 px-6 text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                Continue on WhatsApp
              </a>
              <a href="/" className="btn btn-outline-light h-12 px-6 text-sm">
                Return Home
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  /* ── wizard ───────────────────────────────────── */
  return (
    <section ref={topRef} className="relative scroll-mt-24 overflow-hidden bg-cream-50 py-16 sm:py-24">
      <div className="wrap">
        {/* Progress */}
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="flex items-center">
            {STEPS.map((label, i) => (
              <div key={label} className={cn("flex items-center", i < STEPS.length - 1 && "flex-1")}>
                <button
                  type="button"
                  onClick={() => i < step && (setStep(i), setErrors([]))}
                  className="group flex flex-col items-center gap-2"
                >
                  <span
                    className={cn(
                      "grid h-9 w-9 place-items-center rounded-full border text-xs font-extrabold transition-all duration-400",
                      i < step
                        ? "border-gold-500 bg-gold-500 text-navy-950 group-hover:scale-110"
                        : i === step
                          ? "border-gold-500 bg-navy-950 text-gold-300 shadow-[0_0_0_5px_rgba(198,161,79,0.2)]"
                          : "border-navy-900/20 bg-white text-navy-700/50"
                    )}
                  >
                    {i < step ? <Check className="h-4 w-4" strokeWidth={3} /> : i + 1}
                  </span>
                  <span
                    className={cn(
                      "hidden text-[10px] font-extrabold tracking-[0.16em] uppercase sm:block",
                      i === step ? "text-navy-900" : "text-navy-700/45"
                    )}
                  >
                    {label}
                  </span>
                </button>
                {i < STEPS.length - 1 && (
                  <span className="relative mx-2 mb-0 h-0.5 flex-1 rounded bg-navy-900/10 sm:mb-5">
                    <span
                      className="absolute inset-0 rounded bg-gold-500 transition-transform duration-500"
                      style={{ transform: `scaleX(${i < step ? 1 : 0})`, transformOrigin: "left" }}
                    />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
          {/* Step card */}
          <div className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-navy-900/8 bg-white p-7 shadow-[0_30px_70px_-34px_rgba(8,19,36,0.35)] sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 34, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -34, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: easeLux }}
              >
                {/* STEP 0 — journey */}
                {step === 0 && (
                  <div>
                    <StepTitle arabic="الرحلة" kicker="Step 1 of 6" title="What journey is calling you?" />
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {JOURNEYS.map((j) => (
                        <button
                          key={j.value}
                          type="button"
                          onClick={() => set("journey", j.value)}
                          className={cn(
                            "group relative flex items-start gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-300",
                            data.journey === j.value
                              ? "border-gold-500 bg-gold-500/8 shadow-[0_16px_34px_-16px_rgba(198,161,79,0.5)]"
                              : "border-navy-900/10 bg-white hover:border-gold-500/50"
                          )}
                        >
                          <span className="relative grid h-12 w-12 shrink-0 place-items-center">
                            <span className="absolute inset-0 rotate-45 rounded-xl border border-gold-500/40 bg-gold-500/8" />
                            <j.icon className="relative h-5 w-5 text-gold-700" />
                          </span>
                          <span className="flex-1">
                            <span className="flex items-center justify-between gap-2">
                              <span className="text-[15px] font-extrabold text-navy-900">{j.title}</span>
                              <span className="font-arabic text-lg leading-none text-gold-500/70" dir="rtl">{j.arabic}</span>
                            </span>
                            <span className="mt-1 block text-xs leading-relaxed text-navy-700/60">{j.desc}</span>
                          </span>
                          {data.journey === j.value && (
                            <span className="absolute top-3 right-3 grid h-5.5 w-5.5 place-items-center rounded-full bg-gold-500">
                              <Check className="h-3 w-3 text-navy-950" strokeWidth={3.5} />
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                    <p className="mt-5 flex items-center gap-2 text-xs text-navy-700/55">
                      <Sparkles className="h-3.5 w-3.5 text-gold-600" />
                      Not sure? Choose the closest — your consultant will refine it with you.
                    </p>
                  </div>
                )}

                {/* STEP 1 — dates */}
                {step === 1 && (
                  <div>
                    <StepTitle arabic="التاريخ" kicker="Step 2 of 6" title="When would you like to travel?" />
                    <div className="mt-8">
                      <div className="flex items-center justify-between gap-4">
                        <p className="label mb-0">Preferred month</p>
                        <div className="flex gap-2">
                          {YEARS.map((y) => (
                            <OptionChip key={y} selected={year === y} onClick={() => setYear(y)} className="h-9 px-4 text-xs">
                              {y}
                            </OptionChip>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
                        {MONTHS.map((m) => {
                          const value = `${m} ${year}`;
                          return (
                            <OptionChip
                              key={m}
                              selected={data.month === value}
                              onClick={() => set("month", value)}
                              className="h-10.5 justify-center px-2 text-xs"
                            >
                              {m.slice(0, 3)}
                            </OptionChip>
                          );
                        })}
                      </div>
                      <button
                        type="button"
                        onClick={() => set("month", "Not sure yet")}
                        className={cn(
                          "mt-3 w-full rounded-xl border-2 border-dashed px-4 py-3 text-[13px] font-bold transition-all",
                          data.month === "Not sure yet"
                            ? "border-gold-500 bg-gold-500/8 text-gold-700"
                            : "border-navy-900/15 text-navy-700/70 hover:border-gold-600/50"
                        )}
                      >
                        Not sure yet — advise me on the best time
                      </button>
                    </div>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="label">Date flexibility</p>
                        <div className="flex flex-wrap gap-2">
                          {FLEXIBILITY.map((f) => (
                            <OptionChip key={f} selected={data.flexibility === f} onClick={() => set("flexibility", f)} className="h-10 text-xs">
                              {f}
                            </OptionChip>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="label">Trip length</p>
                        <div className="flex flex-wrap gap-2">
                          {DURATIONS.map((d) => (
                            <OptionChip key={d} selected={data.duration === d} onClick={() => set("duration", d)} className="h-10 text-xs">
                              {d}
                            </OptionChip>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2 — travellers */}
                {step === 2 && (
                  <div>
                    <StepTitle arabic="المسافرون" kicker="Step 3 of 6" title="Who is travelling?" />
                    <div className="mt-8 space-y-3.5">
                      <Counter label="Adults" note="Ages 12 and above" value={data.adults} min={1} onChange={(v) => set("adults", v)} />
                      <Counter label="Children" note="Ages 2 – 11" value={data.children} onChange={(v) => set("children", v)} />
                      <Counter label="Infants" note="Under 2 years" value={data.infants} onChange={(v) => set("infants", v)} />
                    </div>
                    <p className="label mt-8">Anything we should plan around?</p>
                    <div className="space-y-3.5">
                      <Toggle label="Elderly travellers" note="Slower pacing, lift-adjacent rooms, daily check-ins" checked={data.elderly} onChange={(v) => set("elderly", v)} />
                      <Toggle label="Wheelchair assistance" note="Arranged at airports and both Harams" checked={data.wheelchair} onChange={(v) => set("wheelchair", v)} />
                      <Toggle label="First-time pilgrims" note="Extra guidance, seminar and a fully guided first Umrah" checked={data.firstTime} onChange={(v) => set("firstTime", v)} />
                    </div>
                  </div>
                )}

                {/* STEP 3 — comfort */}
                {step === 3 && (
                  <div>
                    <StepTitle arabic="الراحة" kicker="Step 4 of 6" title="Departure & comfort preferences" />
                    <div className="mt-8 space-y-8">
                      <div>
                        <p className="label flex items-center gap-2"><PlaneTakeoff className="h-3.5 w-3.5 text-gold-600" /> Departure airport</p>
                        <div className="flex flex-wrap gap-2">
                          {AIRPORTS.map((a) => (
                            <OptionChip key={a} selected={data.airport === a} onClick={() => set("airport", a)} className="h-10 text-xs">
                              {a}
                            </OptionChip>
                          ))}
                        </div>
                      </div>
                      <div className="grid gap-8 sm:grid-cols-2">
                        <div>
                          <p className="label flex items-center gap-2"><Hotel className="h-3.5 w-3.5 text-gold-600" /> Hotel comfort</p>
                          <div className="flex flex-wrap gap-2">
                            {RATINGS.map((r) => (
                              <OptionChip key={r} selected={data.hotelRating === r} onClick={() => set("hotelRating", r)} className="h-10 text-xs">{r}</OptionChip>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="label flex items-center gap-2"><BedDouble className="h-3.5 w-3.5 text-gold-600" /> Room type</p>
                          <div className="flex flex-wrap gap-2">
                            {ROOMS.map((r) => (
                              <OptionChip key={r} selected={data.roomType === r} onClick={() => set("roomType", r)} className="h-10 text-xs">{r}</OptionChip>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="label flex items-center gap-2"><Landmark className="h-3.5 w-3.5 text-gold-600" /> Distance from the Haram</p>
                        <div className="flex flex-wrap gap-2">
                          {PROXIMITY.map((p) => (
                            <OptionChip key={p} selected={data.proximity === p} onClick={() => set("proximity", p)} className="h-10 text-xs">{p}</OptionChip>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="label flex items-center gap-2"><Wallet className="h-3.5 w-3.5 text-gold-600" /> Budget per person</p>
                        <div className="flex flex-wrap gap-2">
                          {BUDGETS.map((b) => (
                            <OptionChip key={b} selected={data.budget === b} onClick={() => set("budget", b)} className="h-10 text-xs">{b}</OptionChip>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4 — details */}
                {step === 4 && (
                  <div>
                    <StepTitle arabic="بياناتك" kicker="Step 5 of 6" title="Where do we send your proposal?" />
                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="label" htmlFor="p-name">Full name *</label>
                        <input id="p-name" className="field" placeholder="e.g. Khadija Rahman" value={data.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" />
                      </div>
                      <div>
                        <label className="label" htmlFor="p-email">Email address *</label>
                        <input id="p-email" type="email" className="field" placeholder="you@email.co.uk" value={data.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
                      </div>
                      <div>
                        <label className="label" htmlFor="p-phone">Phone / WhatsApp</label>
                        <input id="p-phone" type="tel" className="field" placeholder="07XXX XXXXXX" value={data.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" />
                      </div>
                      <div className="sm:col-span-2">
                        <p className="label">Preferred way to reach you</p>
                        <div className="flex gap-2">
                          {[
                            { v: "WhatsApp", icon: MessageCircle },
                            { v: "Phone", icon: Phone },
                            { v: "Email", icon: Mail },
                          ].map(({ v, icon: Ic }) => (
                            <OptionChip key={v} selected={data.contactVia === v} onClick={() => set("contactVia", v)} className="h-10 text-xs">
                              <Ic className="h-3.5 w-3.5" /> {v}
                            </OptionChip>
                          ))}
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="label" htmlFor="p-notes">Anything else? (optional)</label>
                        <textarea id="p-notes" rows={4} className="field resize-none" placeholder="Anniversaries, health notes, connecting family from another city, dua requests — anything." value={data.notes} onChange={(e) => set("notes", e.target.value)} />
                      </div>
                      <div className="sm:col-span-2">
                        <button
                          type="button"
                          onClick={() => set("consent", !data.consent)}
                          className="flex items-start gap-3 text-left"
                        >
                          <span className={cn(
                            "mt-0.5 grid h-5.5 w-5.5 shrink-0 place-items-center rounded-md border-2 transition-all",
                            data.consent ? "border-gold-500 bg-gold-500" : "border-navy-900/25 bg-white"
                          )}>
                            {data.consent && <Check className="h-3.5 w-3.5 text-navy-950" strokeWidth={3.5} />}
                          </span>
                          <span className="text-[13px] leading-relaxed text-navy-700/75">
                            I'm happy for Rihla Travel UK to contact me about this enquiry.
                            No spam, no pressure — just a personal proposal and honest advice. *
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5 — review */}
                {step === 5 && (
                  <div>
                    <StepTitle arabic="المراجعة" kicker="Step 6 of 6" title="Review your journey brief" />
                    <div className="mt-8 space-y-4">
                      {[
                        { label: "Journey", value: journeyLabel, edit: 0 },
                        { label: "Travel window", value: `${data.month} · ${data.duration}`, edit: 1 },
                        { label: "Flexibility", value: data.flexibility, edit: 1 },
                        {
                          label: "Travellers",
                          value: `${data.adults} adult${data.adults > 1 ? "s" : ""}${data.children ? ` · ${data.children} child${data.children > 1 ? "ren" : ""}` : ""}${data.infants ? ` · ${data.infants} infant${data.infants > 1 ? "s" : ""}` : ""}`,
                          edit: 2,
                        },
                        {
                          label: "Special requirements",
                          value: [data.elderly && "Elderly travellers", data.wheelchair && "Wheelchair assistance", data.firstTime && "First-time pilgrims"].filter(Boolean).join(" · ") || "None noted",
                          edit: 2,
                        },
                        { label: "Departure", value: data.airport, edit: 3 },
                        { label: "Comfort", value: `${data.hotelRating} · ${data.roomType} · ${data.proximity}`, edit: 3 },
                        { label: "Budget per person", value: data.budget, edit: 3 },
                        { label: "Contact", value: `${data.name} · ${data.email}${data.phone ? ` · ${data.phone}` : ""}`, edit: 4 },
                      ].map((row) => (
                        <div key={row.label} className="flex items-start justify-between gap-4 rounded-2xl border border-navy-900/8 bg-cream-50 px-5 py-4">
                          <div>
                            <p className="text-[10.5px] font-extrabold tracking-[0.18em] text-navy-700/50 uppercase">{row.label}</p>
                            <p className="mt-1 text-sm font-bold text-navy-900">{row.value}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => { setStep(row.edit); scrollTop(); }}
                            className="shrink-0 text-[11px] font-extrabold tracking-[0.14em] text-gold-700 uppercase underline-offset-4 hover:underline"
                          >
                            Edit
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* errors */}
                <AnimatePresence>
                  {errors.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-6 space-y-1.5 rounded-2xl border border-red-300/60 bg-red-50 p-4"
                    >
                      {errors.map((e) => (
                        <p key={e} className="text-[13px] font-bold text-red-700">{e}</p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>

            {/* nav buttons */}
            <div className="mt-10 flex items-center justify-between border-t border-navy-900/8 pt-6">
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                className="btn btn-outline-navy h-11 px-5 text-[12.5px] disabled:opacity-0"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </button>
              {step < STEPS.length - 1 ? (
                <button type="button" onClick={next} className="btn btn-gold h-12 px-7 text-[13px]">
                  Continue <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    const errs = validate(4);
                    setErrors(errs);
                    if (!errs.length) submit();
                  }}
                  disabled={submitting}
                  className="btn btn-gold h-12 px-7 text-[13px] disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending your brief…
                    </>
                  ) : (
                    <>
                      Send My Journey Brief <CheckCircle2 className="h-4 w-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* live summary */}
          <aside className="sticky top-28 hidden lg:block">
            <div className="relative overflow-hidden rounded-[2rem] border border-gold-500/25 bg-navy-950 p-7">
              <Pattern className="text-gold-500/[0.08]" id="planner-side" />
              <p className="eyebrow relative text-gold-300">Your Rihla So Far</p>
              <div className="relative mt-5 space-y-4">
                <SummaryRow label="Journey" value={journeyLabel} />
                <SummaryRow label="When" value={data.month || undefined} sub={data.month ? data.duration : undefined} />
                <SummaryRow
                  label="Travellers"
                  value={`${data.adults + data.children + data.infants} traveller${data.adults + data.children + data.infants > 1 ? "s" : ""}`}
                  sub={[data.elderly && "elderly", data.wheelchair && "wheelchair", data.firstTime && "first Umrah"].filter(Boolean).join(" · ") || undefined}
                />
                <SummaryRow label="Comfort" value={`${data.hotelRating} · ${data.roomType}`} sub={data.proximity} />
                <SummaryRow label="Budget pp" value={data.budget} />
              </div>
              <div className="relative mt-6 border-t border-cream-100/10 pt-5">
                <p className="text-[12px] leading-relaxed text-cream-100/55">
                  <span className="font-bold text-gold-300">Rihla Care</span> is included in every
                  proposal — Plan · Prepare · Travel · Support · Return.
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-navy-900/8 bg-white p-5 text-center">
              <p className="text-[12px] text-navy-700/60">Prefer to talk it through?</p>
              <a href="tel:+442079460000" className="mt-1 block font-display text-xl font-semibold text-navy-900 hover:text-gold-700">
                020 7946 0000
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function StepTitle({ arabic, kicker, title }: { arabic: string; kicker: string; title: string }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="eyebrow text-gold-600">{kicker}</p>
        <p className="font-arabic text-2xl leading-none text-gold-500/60" dir="rtl">{arabic}</p>
      </div>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-navy-900 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function SummaryRow({ label, value, sub }: { label: string; value?: string; sub?: string }) {
  return (
    <div>
      <p className="text-[10px] font-extrabold tracking-[0.22em] text-cream-100/40 uppercase">{label}</p>
      <p className={cn("mt-1 text-sm font-bold", value ? "text-cream-50" : "text-cream-100/30 italic")}>
        {value ?? "Not chosen yet"}
      </p>
      {sub && <p className="text-xs text-gold-300/80">{sub}</p>}
    </div>
  );
}
