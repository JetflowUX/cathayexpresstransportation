import React, { createElement } from 'react';
import {
  ClipboardCheckIcon,
  FileTextIcon,
  MessageCircleMoreIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import { DemoForm, FaqList, Reveal, SectionHeading } from '../components/Ui';
const faqs = [
{
  question: 'What is a transportation assessment?',
  answer:
  'It’s a conversation that helps us understand your mobility needs, preferences, and the kind of support that may make your trips more comfortable.'
},
{
  question: 'What information should I have ready?',
  answer:
  'Helpful details include your desired pickup and drop-off locations, appointment timing, mobility equipment, and any support preferences.'
},
{
  question: 'Does an assessment guarantee service?',
  answer:
  'An assessment helps us determine available options. Service depends on location, timing, program eligibility, and vehicle availability.'
}];

export function Assessment() {
  return (
    <>
      <PageHero
        eyebrow="Get started"
        title="Let’s find the transportation support that fits."
        description="A short assessment helps us understand the journey ahead and match you with the most appropriate mobility option."
        image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85" />
      
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="The assessment process"
          title="Simple questions. More confidence." />
        
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
          [
          MessageCircleMoreIcon,
          '1. Tell us about the trip',
          'Share your pickup, destination, schedule, and the support that would be helpful.'],

          [
          ClipboardCheckIcon,
          '2. Review your options',
          'A mobility coordinator considers service availability and your transportation needs.'],

          [
          FileTextIcon,
          '3. Receive next steps',
          'We’ll explain the available options and what to expect when you book.']].

          map(([Icon, title, copy]) =>
          <Reveal key={title as string}>
              <article className="rounded-2xl border border-slate-200 p-7">
                <span className="text-teal-700">
                  {createElement(Icon as React.ElementType, {
                  size: 27
                })}
                </span>
                <h2 className="mt-6 text-lg font-extrabold text-slate-950">
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
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Request an assessment"
              title="Start with the details you know."
              description="Please don’t include urgent medical information in this demonstration form. For an emergency, call 911." />
            
            <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
              Northstar Mobility is not an emergency medical transportation
              provider.
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <DemoForm
              title="Transportation assessment request"
              buttonText="Request assessment" />
            
          </Reveal>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Common questions"
            title="What to expect before you book." />
          
        </Reveal>
        <Reveal delay={0.08}>
          <FaqList items={faqs} />
        </Reveal>
      </section>
    </>);

}