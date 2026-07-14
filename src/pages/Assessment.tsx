import React, { createElement, useState, type FormEvent } from "react";
import {
  CheckCircle2Icon,
  ClipboardCheckIcon,
  FileTextIcon,
  MessageCircleMoreIcon,
  SendIcon,
  ShieldAlertIcon,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Button, FaqList, Reveal, SectionHeading } from "../components/Ui";

const faqs = [
  {
    question: "What is a transportation assessment?",
    answer:
      "It is a short intake process used to evaluate mobility support needs, scheduling details, and broker or billing information before final booking.",
  },
  {
    question: "Which brokers can you coordinate with?",
    answer:
      "We coordinate with MAS in New York counties and can also support ModivCare and private-pay structures depending on your route and eligibility.",
  },
  {
    question: "What information should I prepare?",
    answer:
      "Have your pickup and destination addresses, appointment date/time, mobility level, and billing or insurance category ready.",
  },
];

type Step = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    title: "Share ride requirements",
    copy: "Tell us about mobility type, appointment details, and routing constraints.",
    icon: MessageCircleMoreIcon,
  },
  {
    title: "Dispatch review",
    copy: "Our team confirms vehicle fit, regional coverage, and coordination steps.",
    icon: ClipboardCheckIcon,
  },
  {
    title: "Confirmation workflow",
    copy: "We follow up with scheduling and broker alignment to finalize your request.",
    icon: FileTextIcon,
  },
];

export function Assessment() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    mobility: "ambulatory",
    insurance: "medicaid-mas",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Transportation Assessment"
        title="Start your non-emergency transportation intake."
        description="Submit a brief request so our team can match your route, support needs, and broker requirements with the right service plan."
        image="/Plan-your-trip.jpg"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Assessment flow"
          title="Clear process. Fast coordinator follow-up."
          description="Our intake helps reduce booking friction and ensures the assigned vehicle matches your mobility and scheduling needs."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  {createElement(item.icon, { size: 22 })}
                </span>
                <h2 className="mt-5 text-lg font-extrabold tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {item.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Request intake"
              title="Coordinate your ride details"
              description="Complete the form and a transportation coordinator will review your request and contact you with next steps."
            />

            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
              <div className="flex gap-3">
                <ShieldAlertIcon size={18} className="mt-0.5 shrink-0" />
                <p>
                  Cathay Express provides non-emergency transportation only. In
                  an emergency, call 911 immediately.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
              <p className="font-bold text-slate-900">
                Helpful before you submit
              </p>
              <ul className="mt-2 space-y-2">
                <li>Have pickup and destination addresses ready.</li>
                <li>Confirm appointment time and mobility level.</li>
                <li>
                  Include broker or billing category details when available.
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h3 className="text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                Transportation Intake Form
              </h3>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 rounded-xl bg-emerald-50 p-6 text-center"
                  >
                    <CheckCircle2Icon
                      className="mx-auto text-emerald-600"
                      size={36}
                      aria-hidden="true"
                    />
                    <p className="mt-3 text-base font-bold text-emerald-900">
                      Assessment submitted successfully
                    </p>
                    <p className="mt-2 text-sm text-emerald-800">
                      Our dispatch team is reviewing your request and will
                      follow up shortly.
                    </p>
                    <button
                      type="button"
                      className="mt-4 text-xs font-bold text-emerald-700 underline underline-offset-4"
                      onClick={() => setSent(false)}
                    >
                      Submit another assessment
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        Full name
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                          placeholder="Passenger or coordinator name"
                        />
                      </label>
                      <label className="block text-sm font-semibold text-slate-700">
                        Email address
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                          placeholder="name@email.com"
                        />
                      </label>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        Phone number
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                          placeholder="(212) 555-0199"
                        />
                      </label>
                      <label className="block text-sm font-semibold text-slate-700">
                        Mobility level
                        <select
                          value={formData.mobility}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              mobility: e.target.value,
                            })
                          }
                          className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                        >
                          <option value="ambulatory">Ambulatory</option>
                          <option value="wheelchair">Wheelchair</option>
                          <option value="stretcher">Stretcher</option>
                          <option value="school-bus">
                            Special Needs School Transportation
                          </option>
                        </select>
                      </label>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        Broker / billing category
                        <select
                          value={formData.insurance}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              insurance: e.target.value,
                            })
                          }
                          className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                        >
                          <option value="medicaid-mas">
                            NYS Medicaid (MAS)
                          </option>
                          <option value="medicaid-modivcare">
                            NYS Medicaid (ModivCare)
                          </option>
                          <option value="private-pay">
                            Private Pay / Facility Invoice
                          </option>
                          <option value="commercial">
                            Commercial Insurance
                          </option>
                        </select>
                      </label>

                      <div className="grid grid-cols-2 gap-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Date
                          <input
                            required
                            type="date"
                            value={formData.date}
                            onChange={(e) =>
                              setFormData({ ...formData, date: e.target.value })
                            }
                            className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                          />
                        </label>
                        <label className="block text-sm font-semibold text-slate-700">
                          Time
                          <input
                            required
                            type="time"
                            value={formData.time}
                            onChange={(e) =>
                              setFormData({ ...formData, time: e.target.value })
                            }
                            className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        Pickup address
                        <input
                          required
                          type="text"
                          value={formData.pickup}
                          onChange={(e) =>
                            setFormData({ ...formData, pickup: e.target.value })
                          }
                          className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                          placeholder="Street, city, ZIP"
                        />
                      </label>
                      <label className="block text-sm font-semibold text-slate-700">
                        Destination
                        <input
                          required
                          type="text"
                          value={formData.destination}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              destination: e.target.value,
                            })
                          }
                          className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                          placeholder="Clinic or facility address"
                        />
                      </label>
                    </div>

                    <label className="block text-sm font-semibold text-slate-700">
                      Notes and special requests
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        className="mt-1.5 w-full resize-none rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                        placeholder="Include mobility equipment, escort details, or discharge notes."
                      />
                    </label>

                    <Button
                      type="submit"
                      className="w-full"
                    >
                      <SendIcon size={16} aria-hidden="true" />
                      Submit transportation assessment
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Common questions"
            title="What to expect next."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <FaqList items={faqs} />
        </Reveal>
      </section>
    </>
  );
}
