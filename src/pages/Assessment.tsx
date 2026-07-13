import React, { createElement, useState, type FormEvent } from 'react';
import {
  ClipboardCheckIcon,
  FileTextIcon,
  MessageCircleMoreIcon,
  SendIcon,
  CheckCircle2Icon
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { FaqList, Reveal, SectionHeading } from '../components/Ui';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is a transportation assessment?',
    answer: 'It’s a brief intake process that helps us evaluate your mobility level, coordinate billing details with Medicaid brokers like MAS, and allocate the appropriate paratransit vehicle.'
  },
  {
    question: 'What insurance brokers do you coordinate with?',
    answer: 'We connect directly with MAS (Medical Answering Services) for NYC/Monroe/Chenango/Dutchess Medicaid coordinates, ModivCare, and accept private payment structures.'
  },
  {
    question: 'What information should I have ready?',
    answer: 'Please have the patient’s Medicaid number (if applicable), pickup/destination addresses, specific mobility equipment types, and clinic/doctor appointment schedules.'
  }
];

export function Assessment() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mobility: 'ambulatory',
    insurance: 'medicaid-mas',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Online Intake"
        title="NEMT & Paratransit Intake Assessment"
        description="Submit a pre-scheduling inquiry to match your medical transfer requirements with our specialized fleet and regional dispatch centers."
        image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85"
      />
      
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="The assessment process"
          title="Simple steps. Complete clinical compliance."
        />
        
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            [
              MessageCircleMoreIcon,
              '1. Intake Details',
              'Tell us about your mobility needs, insurance coordinator, and requested routing.'
            ],
            [
              ClipboardCheckIcon,
              '2. Fleet Allocation',
              'Our dispatch centers review regional availability (Flushing, Norwich, Rochester, or Poughkeepsie).'
            ],
            [
              FileTextIcon,
              '3. Ride Confirmation',
              'We verify compliance details, coordinate broker authorization codes, and schedule the trip.'
            ]
          ].map(([Icon, title, copy]) => (
            <Reveal key={title as string}>
              <article className="rounded-2xl border border-slate-200 p-7">
                <span className="text-brand-blue">
                  {createElement(Icon as React.ElementType, {
                    size: 27
                  })}
                </span>
                <h2 className="mt-6 text-lg font-extrabold text-slate-950">
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

      <section className="bg-slate-50 py-20 border-t border-b border-slate-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Request an assessment"
              title="Coordinate your clinical transportation."
              description="Fill out our paratransit pre-screening intake form. A regional dispatch coordinator will contact you to coordinate authorizations."
            />
            
            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
              <strong>Medical Emergency?</strong> Cathay Express Transportation provides non-emergency medical transportation only. If you are experiencing a medical emergency, call 911 immediately.
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
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
                    <CheckCircle2Icon className="mx-auto text-emerald-600" size={36} aria-hidden="true" />
                    <p className="mt-3 text-base font-bold text-emerald-900">
                      Assessment Submitted Successfully
                    </p>
                    <p className="mt-2 text-sm text-emerald-800">
                      Our dispatch coordinators are reviewing your details. We will contact you or your healthcare facility shortly.
                    </p>
                    <button
                      type="button"
                      className="mt-4 text-xs font-bold text-emerald-700 underline underline-offset-4"
                      onClick={() => setSent(false)}
                    >
                      Submit Another Intake Form
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
                        Full Name
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                          placeholder="Passenger or coordinator name"
                        />
                      </label>
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
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
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
                      <label className="block text-sm font-semibold text-slate-700">
                        Mobility Level Required
                        <select
                          value={formData.mobility}
                          onChange={e => setFormData({ ...formData, mobility: e.target.value })}
                          className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 bg-white outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                        >
                          <option value="ambulatory">Ambulatory (Self-walk / Livery)</option>
                          <option value="wheelchair">Wheelchair Paratransit (Hydraulic Lift)</option>
                          <option value="stretcher">Stretcher Medical Transfer (Recumbent)</option>
                          <option value="school-bus">Special Needs School Bus Transportation</option>
                        </select>
                      </label>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        Medicaid Broker / Billing Category
                        <select
                          value={formData.insurance}
                          onChange={e => setFormData({ ...formData, insurance: e.target.value })}
                          className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 bg-white outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                        >
                          <option value="medicaid-mas">NYS Medicaid (MAS Coordinator)</option>
                          <option value="medicaid-modivcare">NYS Medicaid (ModivCare Coordinator)</option>
                          <option value="private-pay">Private Pay / Facility-Billed Invoice</option>
                          <option value="commercial">Commercial Insurance</option>
                        </select>
                      </label>
                      <div className="grid gap-2 grid-cols-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Date
                          <input
                            required
                            type="date"
                            value={formData.date}
                            onChange={e => setFormData({ ...formData, date: e.target.value })}
                            className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                          />
                        </label>
                        <label className="block text-sm font-semibold text-slate-700">
                          Appt. Time
                          <input
                            required
                            type="time"
                            value={formData.time}
                            onChange={e => setFormData({ ...formData, time: e.target.value })}
                            className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        Pickup Address
                        <input
                          required
                          type="text"
                          value={formData.pickup}
                          onChange={e => setFormData({ ...formData, pickup: e.target.value })}
                          className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                          placeholder="Street, City, Zip"
                        />
                      </label>
                      <label className="block text-sm font-semibold text-slate-700">
                        Destination Clinic / Address
                        <input
                          required
                          type="text"
                          value={formData.destination}
                          onChange={e => setFormData({ ...formData, destination: e.target.value })}
                          className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                          placeholder="Facility name or address"
                        />
                      </label>
                    </div>

                    <label className="block text-sm font-semibold text-slate-700">
                      Mobility Equipment & Special Request Notes
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                        className="mt-1.5 w-full resize-none rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                        placeholder="Detail any Q'Straint securement requests, helper escort accompanying passenger, or special clinical discharge info..."
                      />
                    </label>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-3.5 text-sm font-bold text-white transition hover:bg-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/30"
                    >
                      <SendIcon size={16} aria-hidden="true" />
                      Submit Pre-Scheduling Intake
                    </button>
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
            title="What to expect before you book."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <FaqList items={faqs} />
        </Reveal>
      </section>
    </>
  );
}