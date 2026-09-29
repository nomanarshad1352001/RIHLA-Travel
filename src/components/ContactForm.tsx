"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, MessageCircle, Phone, Mail, Send } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { easeLux } from "@/components/motion";

const SUBJECTS = [
  "Umrah Enquiry",
  "Hajj Enquiry",
  "Hajj Registration",
  "Hajj Seminar",
  "Family & Group",
  "Group Enquiry",
  "Ziyarat Tour",
  "Visa Assistance",
  "Something Else",
];

export default function ContactForm() {
  const params = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: SUBJECTS[0],
    message: "",
    via: "WhatsApp",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const [reference, setReference] = useState<string | null>(null);

  useEffect(() => {
    const subject = params.get("subject");
    const pkg = params.get("pkg");
    if (subject && SUBJECTS.includes(subject)) {
      setForm((f) => ({ ...f, subject }));
    } else if (subject) {
      setForm((f) => ({ ...f, subject: decodeURIComponent(subject) }));
    }
    if (pkg) {
      setForm((f) => ({
        ...f,
        message: `Assalamu alaikum — I'd like a quote for the "${pkg.replace(/-/g, " ")}" package, please.`,
      }));
    }
  }, [params]);

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: string[] = [];
    if (form.name.trim().length < 2) errs.push("Please tell us your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.push("Please enter a valid email address.");
    if (form.message.trim().length < 10) errs.push("Please write a few words about your enquiry.");
    setErrors(errs);
    if (errs.length) return;
    setSending(true);
    setTimeout(() => {
      setReference(`RQ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 89999)}`);
      setSending(false);
    }, 1300);
  }

  if (reference) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: easeLux }}
        className="flex min-h-[30rem] flex-col items-center justify-center rounded-[2rem] border border-gold-500/30 bg-navy-950 p-10 text-center"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.25 }}
          className="grid h-18 w-18 place-items-center rounded-full bg-gold-500"
        >
          <Check className="h-8 w-8 text-navy-950" strokeWidth={3} />
        </motion.span>
        <h3 className="mt-7 font-display text-3xl font-medium text-cream-50 sm:text-4xl">
          Received with shukran, {form.name.split(" ")[0]}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-cream-100/65">
          A named consultant will reply via {form.via} within one working day —
          usually much sooner. Your enquiry reference:
        </p>
        <p className="mt-5 rounded-xl border border-gold-500/40 bg-gold-500/10 px-6 py-3 font-display text-2xl font-semibold tracking-[0.12em] text-gold-300">
          {reference}
        </p>
        <a
          href={whatsappLink(`Assalamu alaikum Rihla, I just sent an enquiry (${reference}) about: ${form.subject}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold mt-8 h-11 px-6 text-[12.5px]"
        >
          <MessageCircle className="h-4 w-4" /> Chat now on WhatsApp
        </a>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-[2rem] border border-navy-900/8 bg-white p-8 shadow-[0_30px_70px_-34px_rgba(8,19,36,0.35)] sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="label">Full name *</label>
          <input id="c-name" className="field" placeholder="Your name" value={form.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="c-email" className="label">Email address *</label>
          <input id="c-email" type="email" className="field" placeholder="you@email.co.uk" value={form.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="c-phone" className="label">Phone / WhatsApp</label>
          <input id="c-phone" type="tel" className="field" placeholder="07XXX XXXXXX" value={form.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="c-subject" className="label">Enquiry about</label>
          <select id="c-subject" className="field" value={form.subject} onChange={(e) => set("subject", e.target.value)}>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-message" className="label">Your message *</label>
          <textarea
            id="c-message"
            rows={5}
            className="field resize-none"
            placeholder="Dates, group size, questions, budget — anything that helps us help you."
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <p className="label">Preferred reply method</p>
          <div className="flex flex-wrap gap-2">
            {[
              { v: "WhatsApp", icon: MessageCircle },
              { v: "Phone", icon: Phone },
              { v: "Email", icon: Mail },
            ].map(({ v, icon: Ic }) => (
              <button
                key={v}
                type="button"
                onClick={() => set("via", v)}
                className={cn(
                  "btn h-10 rounded-xl border px-4 text-xs font-extrabold",
                  form.via === v
                    ? "border-gold-500 bg-gold-500 text-navy-950"
                    : "border-navy-900/15 text-navy-700 hover:border-gold-600/60"
                )}
              >
                <Ic className="h-3.5 w-3.5" /> {v}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {errors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 space-y-1.5 rounded-2xl border border-red-300/60 bg-red-50 p-4"
          >
            {errors.map((e) => (
              <p key={e} className="text-[13px] font-bold text-red-700">{e}</p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-xs text-[11.5px] leading-relaxed text-navy-700/55">
          Your details are used only to respond to this enquiry — never sold,
          never spammed. Amanah applies to data too.
        </p>
        <button type="submit" disabled={sending} className="btn btn-gold h-13 px-8 text-sm disabled:opacity-70">
          {sending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send My Enquiry <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
