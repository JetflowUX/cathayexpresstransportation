import React from 'react';
import {
  UsersRoundIcon,
  ShieldCheckIcon,
  CalendarCheck2Icon,
  NetworkIcon,
  CheckCircle2Icon,
  ActivityIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal, SectionHeading, ButtonLink } from '../components/Ui';

export function BrokersPartnerships() {
  return (
    <>
      <PageHero
        eyebrow="Brokers & Partnerships"
        title="Dependable coordination for healthcare networks."
        description="We collaborate with Medicaid brokers, private insurance agencies, and NY medical centers to deliver seamless paratransit and special-needs rides."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
      >
        <ButtonLink to="/contact" variant="light" className="mt-8">
          Partner with our team
        </ButtonLink>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Clinical Collaboration"
          title="Why brokers and facilities choose Cathay Express."
          description="We understand that timely transport is a core element of clinical outcomes. Our dispatch teams prioritize transparency, compliance, and passenger comfort."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            [
              NetworkIcon,
              'Medicaid Broker Integration',
              'We work directly with major NY brokers including MAS (Medical Answering Services) and ModivCare, resolving authorization issues and ensuring clean trip verification.'
            ],
            [
              CalendarCheck2Icon,
              'Standing Order Management',
              'We specialize in scheduling and executing recurring medical transport schedules, maintaining high-frequency dialysis and physical therapy trips without gaps.'
            ],
            [
              ShieldCheckIcon,
              'Facility Dashboard & Support',
              'Our coordinators provide patient boarding status, direct dispatch contact, and electronic trip documentation to support hospital discharge workflows.'
            ]
          ].map(([Icon, title, copy], index) => (
            <Reveal key={title as string} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-slate-200 p-7 hover:border-brand-blue/30 transition duration-200">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  {React.createElement(Icon as React.ElementType, { size: 20 })}
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {title as string}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {copy as string}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-8 items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Our Partnerships"
              title="A commitment to long-term collaboration."
              description="At Cathay Express Transportation, we view partnerships as a long-term responsibility to support patient outcomes. We align with diverse regional programs:"
            />

            <ul className="mt-8 space-y-4 text-sm text-slate-700">
              {[
                'Dialysis and Oncology center scheduling integrations.',
                'Medicaid paratransit coordination across Queens, NYC, and upstate bases.',
                'Special education paratransit routes under NYS school board guidelines.',
                'Commercial hospital discharge contracts for ambulatory & stretcher rides.'
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2Icon className="shrink-0 text-brand-blue" size={19} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <ActivityIcon className="text-brand-blue" size={32} />
              <h3 className="mt-4 text-xl font-extrabold text-slate-950">
                Facility dispatch integration
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Need to coordinate patient discharge or standing orders for a dialysis department? Contact our clinical logistics coordinators directly. We resolve authorization issues, coordinate appropriate vehicle classes, and manage scheduled trips with absolute punctuality.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/contact" className="w-full text-center">
                  Get in Touch
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
