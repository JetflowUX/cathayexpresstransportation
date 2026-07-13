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
'Planned rides to routine care, treatment, discharge, rehabilitation, and follow-up appointments.',
AmbulanceIcon],

[
'Wheelchair transportation',
'Accessible vehicles and trained teams for riders who use mobility devices or need extra boarding support.',
BoxIcon],

[
'Public transit',
'Flexible community routes connecting people with work, healthcare, shopping, and everyday essentials.',
BusFrontIcon],

[
'Airport transportation',
'Reliable door-to-door travel for flyers who need an easier start or end to their trip.',
PlaneIcon],

[
'Corporate transportation',
'Professional, well-coordinated transportation for employees, guests, and scheduled business needs.',
CarFrontIcon],

[
'Special needs transportation',
'Personalized coordination for riders whose journey needs more time, structure, or support.',
UsersRoundIcon]];


export function Services() {
  return (
    <>
      <PageHero
        eyebrow="How we help"
        title="Transportation shaped around real life."
        description="From a single appointment to an ongoing mobility plan, our services are designed to meet people where they are."
        image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=85" />
      
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Our services"
          title="A calmer, more capable way to move."
          description="Choose the support that fits your day. Our coordinators can help you identify the right service before you book." />
        
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, copy, Icon], index) =>
          <Reveal delay={index * 0.04} key={title as string}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 p-7 shadow-[0_8px_30px_rgb(15,23,42,0.04)]">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-50 text-teal-700">
                  {createElement(Icon as React.ElementType, {
                  size: 23
                })}
                </span>
                <h2 className="mt-6 text-xl font-extrabold tracking-[-.035em] text-slate-950">
                  {title as string}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {copy as string}
                </p>
                <Link
                to="/assessment"
                className="mt-6 text-sm font-bold text-blue-700 hover:text-teal-700">
                
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
            'Thoughtful coordination',
            'Clear confirmations and practical reminders help your day stay on track.'],

            [
            'Accessible by design',
            'Support and vehicle needs are considered before your ride is assigned.'],

            [
            'A consistent team',
            'Our drivers and coordinators bring calm, professional care to every interaction.']].

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