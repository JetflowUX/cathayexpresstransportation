import React, { createElement, useState, type FormEvent } from 'react';
import {
  BadgeDollarSignIcon,
  HeartHandshakeIcon,
  SparklesIcon,
  UsersRoundIcon,
  SendIcon,
  CheckCircle2Icon
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal, SectionHeading } from '../components/Ui';
import { AnimatePresence, motion } from 'framer-motion';

const openings = [
  [
    'Mobility Coordinator',
    'Operations · Hybrid',
    'Help riders and families turn complex travel needs into clear, reassuring plans.'
  ],
  [
    'Professional Driver',
    'Field operations · Local',
    'Deliver safe, patient-centered support as part of a respectful local team.'
  ],
  [
    'Transit Program Specialist',
    'Community programs · Local',
    'Partner with agencies and riders to make essential transportation more accessible.'
  ]
];

export function Careers() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'coordinator',
    license: 'none',
    experience: '1-3',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Careers at Cathay Express"
        title="Work that helps people get where they need to be."
        description="Join a team that treats clinical and special needs transportation as a vital pillar of health access, independence, and community connection in New York."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
      />
      
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Life here"
          title="Meaningful work, made sustainable."
        />
        
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              HeartHandshakeIcon,
              'People before process',
              'We bring patience, respect, and warmth to every rider and teammate interaction.'
            ],
            [
              UsersRoundIcon,
              'A team you can count on',
              'We communicate openly and step in for one another when it matters.'
            ],
            [
              SparklesIcon,
              'Room to grow',
              'Training and development help you grow your craft and your career.'
            ],
            [
              BadgeDollarSignIcon,
              'Practical benefits',
              'We offer competitive packages designed to support everyday wellbeing.'
            ]
          ].map(([Icon, title, copy]) => (
            <Reveal key={title as string}>
              <article className="rounded-2xl border border-slate-200 p-6 h-full">
                <span className="text-brand-blue">
                  {createElement(Icon as React.ElementType, {
                    size: 25
                  })}
                </span>
                <h2 className="mt-5 font-extrabold text-slate-950">
                  {title as string}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {copy as string}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20 border-t border-b border-slate-150">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <SectionHeading
            eyebrow="Open opportunities"
            title="Find your place in the journey."
          />
          
          <div className="mt-8 space-y-4">
            {openings.map(([title, meta, copy]) => (
              <article
                key={title}
                className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.14em] text-brand-blue">
                    {meta}
                  </p>
                  <h2 className="mt-2 text-xl font-extrabold tracking-[-.03em] text-slate-950">
                    {title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
                    {copy}
                  </p>
                </div>
                <a
                  href="#apply"
                  className="shrink-0 rounded-xl bg-brand-blue px-5 py-3 text-center text-sm font-bold text-white hover:bg-brand-navy transition duration-200"
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
        className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_.8fr] lg:px-8"
      >
        <Reveal>
          <SectionHeading
            eyebrow="Introduce yourself"
            title="Interested in joining us?"
            description="Submit our online employment inquiry. A paratransit recruitment coordinator will review your driving credentials or coordination experience."
          />
          
          <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-blue-900">
            <strong>Driver Requirements:</strong> All paratransit drivers must be at least 21 years of age, pass clean NYS DMV record screens, drug tests, and undergo certified passenger assistance training (PAT/PASS).
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
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
                  <CheckCircle2Icon className="mx-auto text-emerald-600" size={36} aria-hidden="true" />
                  <p className="mt-3 text-base font-bold text-emerald-900">
                    Inquiry Submitted Successfully
                  </p>
                  <p className="mt-2 text-sm text-emerald-800">
                    Thank you for your interest in joining Cathay Express. Our recruitment team will review your parameters and follow up shortly.
                  </p>
                  <button
                    type="button"
                    className="mt-4 text-xs font-bold text-emerald-700 underline underline-offset-4"
                    onClick={() => setSent(false)}
                  >
                    Submit Another Application
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
                    Full Name
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                      placeholder="Your full name"
                    />
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      Email Address
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                        placeholder="name@email.com"
                      />
                    </label>
                    <label className="block text-sm font-semibold text-slate-700">
                      Phone Number
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                        placeholder="(212) 555-0199"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-semibold text-slate-700">
                      Desired Role
                      <select
                        value={formData.position}
                        onChange={e => setFormData({ ...formData, position: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 bg-white outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                      >
                        <option value="coordinator">Mobility Coordinator (Hybrid)</option>
                        <option value="driver">Professional Paratransit Driver (Field)</option>
                        <option value="specialist">Transit Program Specialist</option>
                        <option value="dispatch">Base Dispatch & Admin Operations</option>
                      </select>
                    </label>
                    <label className="block text-sm font-semibold text-slate-700">
                      NYS License Class
                      <select
                        value={formData.license}
                        onChange={e => setFormData({ ...formData, license: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 bg-white outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                      >
                        <option value="class-d">Class D (Standard Operator)</option>
                        <option value="class-e">Class E (For-Hire / Taxi)</option>
                        <option value="cdl-c">Commercial License (CDL Class C)</option>
                        <option value="cdl-b">Commercial License (CDL Class B)</option>
                        <option value="none">None / Non-Driving Role Applicant</option>
                      </select>
                    </label>
                  </div>

                  <label className="block text-sm font-semibold text-slate-700">
                    Years of Relevant Transport/Livery Experience
                    <select
                      value={formData.experience}
                      onChange={e => setFormData({ ...formData, experience: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 bg-white outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                    >
                      <option value="none">No prior experience (Training program option)</option>
                      <option value="1-3">1 - 3 years of commercial/NEMT driving</option>
                      <option value="3-5">3 - 5 years of commercial/NEMT driving</option>
                      <option value="5-plus">5+ years of clinical/paratransit driving</option>
                    </select>
                  </label>

                  <label className="block text-sm font-semibold text-slate-700">
                    Resume Summary & DMV Record Self-Disclosure
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1.5 w-full resize-none rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                      placeholder="Briefly state your DMV clean license points, physical credentials, or prior medical shuttle work history..."
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-3.5 text-sm font-bold text-white transition hover:bg-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/30"
                  >
                    <SendIcon size={16} aria-hidden="true" />
                    Submit Application Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </section>
    </>
  );
}