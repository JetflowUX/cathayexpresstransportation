import React, { createElement } from 'react';
import {
  BadgeDollarSignIcon,
  HeartHandshakeIcon,
  SparklesIcon,
  UsersRoundIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import { DemoForm, Reveal, SectionHeading } from '../components/Ui';
const openings = [
[
'Mobility Coordinator',
'Operations · Hybrid',
'Help riders and families turn complex travel needs into clear, reassuring plans.'],

[
'Professional Driver',
'Field operations · Local',
'Deliver safe, patient-centered support as part of a respectful local team.'],

[
'Transit Program Specialist',
'Community programs · Local',
'Partner with agencies and riders to make essential transportation more accessible.']];


export function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers at Northstar"
        title="Work that helps people get where they need to be."
        description="Join a team that treats transportation as a vital part of care, independence, and community connection."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85" />
      
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Life here"
          title="Meaningful work, made sustainable." />
        
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
          [
          HeartHandshakeIcon,
          'People before process',
          'We bring patience, respect, and warmth to every rider and teammate interaction.'],

          [
          UsersRoundIcon,
          'A team you can count on',
          'We communicate openly and step in for one another when it matters.'],

          [
          SparklesIcon,
          'Room to grow',
          'Training and development help you grow your craft and your career.'],

          [
          BadgeDollarSignIcon,
          'Practical benefits',
          'We offer competitive packages designed to support everyday wellbeing.']].

          map(([Icon, title, copy]) =>
          <Reveal key={title as string}>
              <article className="rounded-2xl border border-slate-200 p-6">
                <span className="text-teal-700">
                  {createElement(Icon as React.ElementType, {
                  size: 25
                })}
                </span>
                <h2 className="mt-5 font-extrabold text-slate-950">
                  {title as string}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {copy as string}
                </p>
              </article>
            </Reveal>
          )}
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <SectionHeading
            eyebrow="Open opportunities"
            title="Find your place in the journey." />
          
          <div className="mt-8 space-y-4">
            {openings.map(([title, meta, copy]) =>
            <article
              key={title}
              className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 md:flex-row md:items-center md:justify-between">
              
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.14em] text-teal-700">
                    {meta}
                  </p>
                  <h2 className="mt-2 text-xl font-extrabold tracking-[-.03em] text-slate-950">
                    {title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    {copy}
                  </p>
                </div>
                <a
                href="#apply"
                className="shrink-0 rounded-xl bg-blue-700 px-5 py-3 text-center text-sm font-bold text-white hover:bg-blue-800">
                
                  Apply now
                </a>
              </article>
            )}
          </div>
        </div>
      </section>
      <section
        id="apply"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_.8fr] lg:px-8">
        
        <Reveal>
          <SectionHeading
            eyebrow="Introduce yourself"
            title="Interested in joining us?"
            description="Send a brief application and our team will follow up when there’s a fit. This demonstration form does not submit to a hiring system." />
          
        </Reveal>
        <Reveal delay={0.08}>
          <DemoForm
            title="Start your application"
            fields={['name', 'email', 'phone', 'message']}
            buttonText="Send application" />
          
        </Reveal>
      </section>
    </>);

}