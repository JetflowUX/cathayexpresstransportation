import React, { lazy, createElement } from 'react';
import {
  CalendarClockIcon,
  CheckCircle2Icon,
  MapIcon,
  RouteIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import { ButtonLink, Reveal, SectionHeading } from '../components/Ui';
export function PublicTransit() {
  return (
    <>
      <PageHero
        eyebrow="Community mobility"
        title="Public transit that keeps communities connected."
        description="Our public transit partnerships bring reliable, accessible options to the places people need to go—every day."
        image="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85">
        
        <ButtonLink to="/contact" variant="light" className="mt-8">
          Discuss a transit program
        </ButtonLink>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Built around everyday access"
          title="Practical transportation for the whole community." />
        
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
          [
          RouteIcon,
          'Purposeful routes',
          'Responsive routes help connect neighborhoods to healthcare, work, retail, and community resources.'],

          [
          CalendarClockIcon,
          'Clear scheduling',
          'Reliable schedules and easy-to-understand rider information make planning simpler.'],

          [
          CheckCircle2Icon,
          'Accessible vehicles',
          'Accessibility is built into our fleet planning and rider support from the start.']].

          map(([Icon, title, copy]) =>
          <Reveal key={title as string}>
              <article className="rounded-2xl border border-slate-200 p-7">
                <span className="text-teal-700">
                  {createElement(Icon as React.ElementType, {
                  size: 27
                })}
                </span>
                <h2 className="mt-5 text-xl font-extrabold tracking-[-.03em] text-slate-950">
                  {title as string}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {copy as string}
                </p>
              </article>
            </Reveal>
          )}
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Getting started"
              title="Find the right route or program."
              description="Public transit availability, eligibility, and schedules vary by community and program. Our support team can help you understand your options." />
            
            <ul className="mt-7 space-y-4 text-sm text-slate-700">
              {[
              'Share the area and destinations you need to reach.',
              'We’ll explain available routes, programs, and eligibility details.',
              'Receive clear scheduling and rider information before your first trip.'].
              map((item) =>
              <li key={item} className="flex gap-3">
                  <CheckCircle2Icon
                  className="shrink-0 text-emerald-600"
                  size={19} />
                
                  {item}
                </li>
              )}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-2">
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem]">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1000&q=85"
                  alt="Public transit bus traveling through a city"
                  className="absolute inset-0 h-full w-full object-cover opacity-70" />
                
                <div className="absolute inset-0 flex items-end p-7">
                  <div className="rounded-2xl bg-white p-5">
                    <MapIcon className="text-teal-700" size={23} />
                    <p className="mt-3 text-sm font-bold text-slate-950">
                      Route planning support
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Reach out for local availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>);

}