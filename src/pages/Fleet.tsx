import React from 'react';
import {
  CarIcon,
  ShieldCheckIcon,
  WrenchIcon,
  BusIcon,
  ActivityIcon,
  CheckCircle2Icon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal, SectionHeading, ButtonLink } from '../components/Ui';

const fleetClasses = [
  {
    title: 'Livery & Ambulatory Sedans',
    description: 'Clean, comfortable standard vehicles for ambulatory patients who walk independently but require reliable transportation. Ideal for routine dialysis, outpatient procedures, and follow-up medical visits.',
    icon: CarIcon,
    features: ['Independent boarding', 'Climate-controlled cabins', 'Clean, smoke-free environments', 'Compassionate drivers']
  },
  {
    title: 'Wheelchair Accessible Vans',
    description: 'ADA-compliant paratransit vans equipped with commercial hydraulic lifts or low-angle ramps. Designed for passengers using manual or powered wheelchairs.',
    icon: ActivityIcon,
    features: ["Q'Straint 4-point tie-downs", 'Extra-wide side/rear entry', 'High-top ceilings for comfort', 'ADA safety certification']
  },
  {
    title: 'Stretcher Paratransit',
    description: 'Specially configured transport vans for patients who must remain in a lying position. Includes heavy-duty cot mounts, locking bars, and is supported by 2-Man Assist teams when requested.',
    icon: ShieldCheckIcon,
    features: ['Sturdy locking mechanisms', 'Smooth air-ride suspension', '2-Man Assist team support', 'Facility-to-facility transfers']
  },
  {
    title: 'Special Needs School Buses',
    description: 'Dedicated school buses configured for children with developmental, physical, or medical challenges. Operated by qualified drivers accompanied by trained safety monitors.',
    icon: BusIcon,
    features: ['Child safety restraints', 'Wheelchair lock areas', 'Special-needs sensitivity trained staff', 'Consistent daily routes']
  }
];

export function Fleet() {
  return (
    <>
      <PageHero
        eyebrow="Our Vehicles"
        title="A diverse fleet configured for accessibility."
        description="From ambulatory sedans to paratransit wheelchair vans and stretcher transports, we operate fully compliant vehicles across NYC and New York State."
        image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=85"
      >
        <ButtonLink to="/assessment" variant="light" className="mt-8">
          Request a ride assessment
        </ButtonLink>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Our vehicle classes"
          title="The right support for every passenger."
          description="We match every scheduled ride with a vehicle configured for your specific physical and medical boarding requirements."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {fleetClasses.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between hover:border-brand-blue/30 transition duration-200">
                  <div>
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <Icon size={24} />
                    </span>
                    <h3 className="mt-6 text-xl font-extrabold tracking-[-.035em] text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {item.description}
                    </p>
                  </div>
                  <ul className="mt-6 border-t border-slate-100 pt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                        <CheckCircle2Icon className="text-brand-blue shrink-0" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky-300">
                Maintenance & Safety
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">
                Uncompromising vehicle standards.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                To guarantee absolute reliability, our vehicles undergo rigorous inspections. We believe safety begins long before a passenger boards.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  [WrenchIcon, 'Daily Multi-Point Inspections', 'Every driver performs a checklist audit of wheelchair lifts, securements, brakes, and climate systems before leaving the depot.'],
                  [ShieldCheckIcon, '100% NYS DOT Certified', 'Our operations and fleets meet or exceed New York State DOT safety and compliance standards for clinical transit.'],
                  [CheckCircle2Icon, 'Advanced Restraint Systems', "We use industry-standard Q'Straint tie-downs and locking bars to guarantee passengers remain safe and comfortable during the journey."]
                ].map(([Icon, title, copy]) => (
                  <div key={title as string} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-300">
                      {React.createElement(Icon as React.ElementType, { size: 20 })}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">{title as string}</h4>
                      <p className="mt-1 text-xs leading-5 text-slate-300">{copy as string}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-[2rem] bg-slate-900 p-2">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1000&q=85"
                  alt="Mechanic inspecting vehicle safety systems"
                  className="aspect-[4/3] w-full rounded-[1.8rem] object-cover opacity-80"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
