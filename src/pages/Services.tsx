import React, { createElement } from 'react';
import {
  AmbulanceIcon,
  BusFrontIcon,
  CarFrontIcon,
  PlaneIcon,
  UsersRoundIcon,
  BoxIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Reveal, SectionHeading } from '../components/Ui';
const services = [
  [
    'Medical transportation',
    'Planned rides to routine care, chemotherapy, dialysis, hospital discharges, and rehabilitation.',
    AmbulanceIcon,
    'medical'
  ],
  [
    'Wheelchair transportation',
    'ADA-compliant accessibility with power lifts, ramps, and 4-point securement tie-downs.',
    BoxIcon,
    'wheelchair'
  ],
  [
    'Public transit',
    'Flexible community transit route partnerships connecting residents to essential local destinations.',
    BusFrontIcon,
    'public-transit'
  ],
  [
    'Airport transportation',
    'Accessible transfers for seniors and passengers with mobility equipment at JFK, LGA, and Newark.',
    PlaneIcon,
    'airport'
  ],
  [
    'Corporate transportation',
    'Well-coordinated, reliable shuttle and executive options for regional healthcare partnerships.',
    CarFrontIcon,
    'corporate'
  ],
  [
    'Special needs transportation',
    'Special education school bus services with safety securements and trained attendants.',
    UsersRoundIcon,
    'school-bus'
  ]
];


export function Services() {
  return (
    <>
      <PageHero
        eyebrow="How we help"
        title="Transportation shaped around care."
        description="From regular medical treatments to school commutes and specialized paratransit, our operations are built around safety and punctuality."
        image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=85" />
      
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Our services"
          title="Clinical mobility with professional support."
          description="Choose the transportation that meets your requirements. Our dispatch coordinators can help you coordinate standing orders or individual transfers." />
        
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, copy, Icon, id], index) =>
          <Reveal delay={index * 0.04} key={title as string}>
              <article id={id as string} className="flex h-full flex-col rounded-2xl border border-slate-200 p-7 shadow-[0_8px_30px_rgb(15,23,42,0.04)] scroll-mt-24 transition duration-200 hover:border-brand-blue/30">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  {createElement(Icon as React.ElementType, {
                  size: 23
                })}
                </span>
                <h2 className="mt-6 text-xl font-extrabold tracking-[-.035em] text-slate-950">
                  {title as string}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {copy as string}
                </p>
                <Link
                to="/assessment"
                className="mt-6 text-sm font-bold text-blue-700 hover:text-brand-blue">
                
                  Request this service →
                </Link>
              </article>
            </Reveal>
          )}
        </div>
      </section>
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
            [
            'Centralized dispatch',
            'Continuous 24/7 routing and coordinator communication keeps rides running on time.'],

            [
            'Accessible & compliant',
            'Full ADA compliance, including power lifts, wheelchair locks, and stretcher options.'],

            [
            'Vetted, sensitive team',
            'All drivers undergo background checks, drug testing, and special-needs sensitivity training.']].

            map(([title, copy]) =>
            <div
              key={title}
              className="rounded-2xl border border-white/10 p-7">
              
                <h3 className="text-lg font-extrabold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>);

}