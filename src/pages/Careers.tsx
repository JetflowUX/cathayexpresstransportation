import React, { createElement, useState, type FormEvent } from "react";
import {
  BadgeDollarSignIcon,
  CheckCircle2Icon,
  HeartHandshakeIcon,
  SendIcon,
  SparklesIcon,
  UserRoundCheckIcon,
  UsersRoundIcon,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Button, ButtonLink, Reveal, SectionHeading } from "../components/Ui";

type Benefit = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

const benefits: Benefit[] = [
  {
    title: "People-first culture",
    copy: "Compassion, respect, and reliability shape how we serve riders and each other.",
    icon: HeartHandshakeIcon,
  },
  {
    title: "Supportive team model",
    copy: "Operations, dispatch, and drivers collaborate in real time to keep service smooth.",
    icon: UsersRoundIcon,
  },
  {
    title: "Growth pathways",
    copy: "Structured training and mentoring help you grow into more responsibility over time.",
    icon: SparklesIcon,
  },
  {
    title: "Competitive package",
    copy: "Compensation and benefits are designed to support practical long-term stability.",
    icon: BadgeDollarSignIcon,
  },
];

const openings = [
  [
    "Mobility Coordinator",
    "Operations · Hybrid",
    "Help riders and families turn complex transportation needs into clear and reassuring plans.",
  ],
  [
    "Professional Driver",
    "Field operations · Local",
    "Deliver safe, patient-centered service as part of a respectful local team.",
  ],
  [
    "Transit Program Specialist",
    "Community programs · Local",
    "Partner with agencies and riders to make essential transportation more accessible.",
  ],
];

export function Careers() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "coordinator",
    license: "none",
    experience: "1-3",
    message: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Careers at Cathay Express"
        title="Build work that directly supports health access and independence."
        description="Join a team that treats medical and special-needs transportation as an essential community service across New York."
        image="/ENJOY-THE-RIDE.jpg"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="#apply" variant="light">
            Apply today
          </ButtonLink>
          <ButtonLink to="/contact" variant="ghost">
            Ask recruiting team
          </ButtonLink>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Life at Cathay"
          title="A mission-driven workplace with practical support."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="ui-card ui-card-hover p-6 h-full">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  {createElement(item.icon, { size: 20 })}
                </span>
                <h2 className="mt-5 text-base font-extrabold text-slate-950">
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
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <SectionHeading
            eyebrow="Open roles"
            title="Find your place in the journey."
          />

          <div className="mt-8 space-y-4">
            {openings.map(([title, meta, copy]) => (
              <article
                key={title}
                className="ui-card p-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.13em] text-brand-blue">
                    {meta}
                  </p>
                  <h2 className="mt-2 text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                    {title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
                    {copy}
                  </p>
                </div>
                <a
                  href="#apply"
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-brand-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-navy"
                >
                  Apply now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="apply"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.95fr_1.05fr] lg:px-8"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Apply"
            title="Interested in joining our team?"
            description="Complete this inquiry form and our recruitment team will contact you with next steps."
          />

          <div className="mt-7 rounded-2xl border border-sky-200 bg-sky-50 p-5 text-sm leading-6 text-sky-900">
            <p className="font-bold">Driver qualification note</p>
            <p className="mt-1">
              Driver candidates must meet age, background, and DMV requirements
              and complete passenger assistance and safety training.
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <UserRoundCheckIcon
                size={18}
                className="mt-0.5 shrink-0 text-brand-blue"
              />
              <p>
                Most applicants receive a recruiting response in 3-5 business
                days.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h3 className="text-xl font-extrabold tracking-[-0.03em] text-slate-950">
              Employment Inquiry Form
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
                    Inquiry submitted successfully
                  </p>
                  <p className="mt-2 text-sm text-emerald-800">
                    Thank you for your interest. Our recruitment team will
                    review your details and follow up shortly.
                  </p>
                  <button
                    type="button"
                    className="mt-4 text-xs font-bold text-emerald-700 underline underline-offset-4"
                    onClick={() => setSent(false)}
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 space-y-4"
                >
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
                      placeholder="Your full name"
                    />
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
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
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      Desired role
                      <select
                        value={formData.position}
                        onChange={(e) =>
                          setFormData({ ...formData, position: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                      >
                        <option value="coordinator">
                          Mobility Coordinator (Hybrid)
                        </option>
                        <option value="driver">
                          Professional Driver (Field)
                        </option>
                        <option value="specialist">
                          Transit Program Specialist
                        </option>
                        <option value="dispatch">
                          Dispatch & Administrative Operations
                        </option>
                      </select>
                    </label>
                    <label className="block text-sm font-semibold text-slate-700">
                      NYS license class
                      <select
                        value={formData.license}
                        onChange={(e) =>
                          setFormData({ ...formData, license: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                      >
                        <option value="class-d">Class D</option>
                        <option value="class-e">Class E</option>
                        <option value="cdl-c">CDL Class C</option>
                        <option value="cdl-b">CDL Class B</option>
                        <option value="none">
                          None / Non-driving applicant
                        </option>
                      </select>
                    </label>
                  </div>

                  <label className="block text-sm font-semibold text-slate-700">
                    Relevant experience
                    <select
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                    >
                      <option value="none">No prior experience</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-plus">5+ years</option>
                    </select>
                  </label>

                  <label className="block text-sm font-semibold text-slate-700">
                    Resume summary and notes
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-1.5 w-full resize-none rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                      placeholder="Share your transportation, dispatch, or clinical support experience."
                    />
                  </label>

                  <Button
                    type="submit"
                    className="w-full"
                  >
                    <SendIcon size={16} aria-hidden="true" />
                    Submit application inquiry
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </section>
    </>
  );
}
