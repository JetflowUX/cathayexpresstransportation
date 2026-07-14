import React, { lazy, createElement } from 'react';
import {
  AwardIcon,
  HeartHandshakeIcon,
  LightbulbIcon,
  ShieldCheckIcon,
  UsersRoundIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal, SectionHeading } from '../components/Ui';
const values = [
[
'Dignity in every detail',
'We design every interaction around the person making the journey.',
HeartHandshakeIcon],

[
'Safety without compromise',
'Thoughtful standards, trained teams, and clear accountability guide our work.',
ShieldCheckIcon],

[
'Better together',
'We work alongside families, care teams, and communities to solve real mobility needs.',
UsersRoundIcon],

[
'Always improving',
'We listen closely, learn quickly, and make practical changes that matter.',
LightbulbIcon]];


export function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Care starts long before the appointment."
        description="Cathay Express Transportation exists to remove the uncertainty that too often surrounds medical transportation. We make movement feel more dependable, personal, and dignified."
        image="/ABOUT-US.jpg" />
      
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What guides us"
            title="Every journey is an opportunity to make life easier." />
          
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              We started with a simple belief: getting to clinical care should never be a
              source of stress. Today, Cathay Express Transportation coordinates non-emergency
              ambulatory, wheelchair, and stretcher rides for patients, families, clinics, 
              nursing homes, and school districts across New York State.
            </p>
            <p>
              Serving key regions including NYC, Long Island, Rochester, and Poughkeepsie, our central 
              dispatch operations run 24 hours a day, 7 days a week, ensuring patients, seniors, and 
              students with special needs reach their destination with professional oversight and complete safety.
            </p>
          </div>
        </Reveal>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <SectionHeading
            eyebrow="Our values"
            title="A clear standard for every mile." />
          
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map(([title, text, Icon], index) =>
            <Reveal delay={index * 0.05} key={title as string}>
                <article className="ui-card p-6 h-full">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    {createElement(Icon as React.ElementType, {
                    size: 21
                  })}
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold tracking-[-.03em] text-slate-950">
                    {title as string}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {text as string}
                  </p>
                </article>
              </Reveal>
            )}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem]">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1000&q=85"
              alt="Healthcare professional speaking with a patient"
              className="aspect-[4/3] w-full object-cover" />
          
          </div>
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Leadership"
            title="Grounded in care. Built for compliance."
            description="Our leadership team brings together expertise in healthcare logistics, state and DOT compliance, and clinical transportation operations. We manage complex scheduling so patients can focus on recovery." />
          
          <div className="mt-7 flex items-center gap-4 rounded-2xl border border-slate-200 p-5">
            <AwardIcon className="text-brand-blue" size={28} />
            <p className="text-sm leading-6 text-slate-700">
              We are building a clinical transportation experience that earns confidence
              through compliance, safety protocols, and compassionate, on-time operations.
            </p>
          </div>
        </Reveal>
      </section>
    </>);

}