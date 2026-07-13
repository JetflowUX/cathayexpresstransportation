import React, { useEffect, useState, lazy, createElement } from 'react';
import {
  AmbulanceIcon,
  BadgeCheckIcon,
  BusFrontIcon,
  CalendarCheckIcon,
  CarFrontIcon,
  Clock3Icon,
  HeartHandshakeIcon,
  MapPinIcon,
  PlaneIcon,
  ShieldCheckIcon,
  StarIcon,
  UsersRoundIcon,
  UserRoundCheckIcon,
  BoxIcon } from
'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ButtonLink, FaqList, Reveal, SectionHeading } from '../components/Ui';
const banner = [
[
'Medical transportation',
'Comfortable, coordinated rides for routine care.',
AmbulanceIcon],

[
'Public transit',
'Connected routes built around real community needs.',
BusFrontIcon],

[
'Corporate transportation',
'Reliable mobility for your teams and guests.',
CarFrontIcon],

[
'Senior transportation',
'Patient, helpful service that preserves independence.',
HeartHandshakeIcon],

[
'Wheelchair transportation',
'Accessible vehicles and attentive door-through-door support.',
BoxIcon]];


const services = [
[
'Medical transportation',
'Reliable trips to appointments, treatment, and follow-up care.',
AmbulanceIcon],

[
'Wheelchair transportation',
'Purpose-built accessibility and trained support for every journey.',
BoxIcon],

[
'Public transit',
'Flexible community mobility connecting people to essential destinations.',
BusFrontIcon],

[
'Airport transportation',
'A calm, coordinated start or finish to your trip.',
PlaneIcon],

[
'Corporate transportation',
'Professional service for teams, clients, and scheduled events.',
CarFrontIcon],

[
'Special needs transportation',
'Personalized travel support for individual mobility needs.',
UsersRoundIcon]];


const faqs = [
{
  question: 'How far ahead should I schedule?',
  answer:
  'Whenever possible, please make non-urgent requests at least 48 hours ahead. Our team will always try to accommodate short-notice needs.'
},
{
  question: 'Can a companion travel with me?',
  answer:
  'Yes. A companion may be able to join you depending on vehicle capacity and the service requested.'
},
{
  question: 'Do you provide emergency transportation?',
  answer:
  'No. Northstar Mobility is not an emergency medical provider. Please call 911 for immediate medical emergencies.'
}];

export function Home() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % banner.length),
      4200
    );
    return () => window.clearInterval(timer);
  }, []);
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 pt-[76px]">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85"
            alt=""
            className="h-full w-full object-cover" />
          
        </div>
        <div className="relative mx-auto grid min-h-[670px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-24">
          <div>
            <motion.p
              initial={{
                opacity: 0,
                y: 12
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.45
              }}
              className="text-xs font-extrabold uppercase tracking-[.18em] text-teal-300">
              
              Movement, made more human
            </motion.p>
            <motion.h1
              initial={{
                opacity: 0,
                y: 18
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.55,
                delay: 0.08
              }}
              className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] text-white sm:text-5xl lg:text-6xl">
              
              Reliable transportation for the care that matters.
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 18
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.55,
                delay: 0.16
              }}
              className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              
              From the front door to the clinic and safely back again, Northstar
              Mobility brings care, clarity, and confidence to every ride.
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                y: 18
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.55,
                delay: 0.24
              }}
              className="mt-8 flex flex-wrap gap-3">
              
              <ButtonLink to="/assessment">Book transportation</ButtonLink>
              <ButtonLink to="/contact" variant="light">
                Talk to our team
              </ButtonLink>
            </motion.div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 text-sm font-semibold text-slate-200">
              <span className="flex items-center gap-2">
                <ShieldCheckIcon size={18} className="text-teal-300" />
                Safety-first operations
              </span>
              <span className="flex items-center gap-2">
                <Clock3Icon size={18} className="text-teal-300" />
                24/7 ride support
              </span>
            </div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.7,
              delay: 0.15
            }}
            className="relative mx-auto w-full max-w-xl">
            
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1584466991708-4b9a6c0f0b6b?auto=format&fit=crop&w=1000&q=85"
                alt="Professional driver helping a passenger into a mobility vehicle"
                className="aspect-[4/4.2] w-full rounded-[1.55rem] object-cover" />
              
            </div>
            <div className="absolute -bottom-5 -left-2 rounded-2xl bg-white p-4 shadow-xl sm:-left-7">
              <p className="text-2xl font-extrabold tracking-[-.05em] text-slate-950">
                4.9{' '}
                <StarIcon
                  className="inline fill-amber-400 text-amber-400"
                  size={19} />
                
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-500">
                from rider feedback
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-xs font-extrabold uppercase tracking-[.15em] text-slate-500">
              Mobility, wherever life leads
            </p>
            <div className="relative min-h-[28px] overflow-hidden">
              <motion.div
                key={banner[active][0]}
                initial={{
                  opacity: 0,
                  y: 16
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0
                }}
                className="flex items-center gap-3 text-sm font-bold text-slate-900">
                
                {createElement(banner[active][2], {
                  size: 19,
                  className: 'text-teal-600'
                })}
                <span>{banner[active][0]}</span>
                <span className="hidden font-normal text-slate-500 sm:inline">
                  — {banner[active][1]}
                </span>
              </motion.div>
            </div>
            <div className="flex gap-1.5">
              {banner.map((item, i) =>
              <button
                key={item[0]}
                aria-label={`Show ${item[0]}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${active === i ? 'w-6 bg-teal-600' : 'w-1.5 bg-slate-300'}`} />

              )}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
          {[
          ['18+', 'years moving communities'],
          ['250k+', 'rides coordinated'],
          ['24/7', 'live ride support'],
          ['100%', 'licensed & insured'],
          ['4.9/5', 'rider satisfaction']].
          map(([number, label], index) =>
          <Reveal
            key={label}
            className={`flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.02)] backdrop-blur-sm transition duration-200 hover:border-teal-300 hover:bg-white hover:shadow-md ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
            
              <div>
                <p className="text-3xl font-extrabold tracking-[-.05em] text-teal-700">
                  {number}
                </p>
                <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-600">{label}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Every kind of journey"
          title="Transportation designed around people, not schedules."
          description="Our teams coordinate the small details so every traveler feels expected, supported, and ready to go." />
        
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, copy, Icon], index) =>
          <Reveal delay={index * 0.04} key={title}>
              <article className="group flex min-h-[230px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-extrabold tracking-[-.03em] text-slate-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                <Link
                to="/services"
                className="mt-auto pt-5 text-sm font-bold text-blue-700 hover:text-teal-700">
                
                  Explore service <span aria-hidden="true">→</span>
                </Link>
              </article>
            </Reveal>
          )}
        </div>
      </section>
      <section className="bg-slate-950 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem]">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1100&q=85"
                alt="Caring driver assisting an older passenger"
                className="aspect-[4/3] h-full w-full object-cover" />
              
            </div>
          </Reveal>
          <Reveal className="lg:py-4">
            <SectionHeading
              eyebrow="A better way to get there"
              title="The difference is in how you feel along the way."
              description="We pair experienced teams with practical technology to make every journey feel more certain." />
            
            <div className="mt-8 grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2">
              {[
              [BadgeCheckIcon, 'Reliable coordination'],
              [ShieldCheckIcon, 'Safety standards'],
              [UserRoundCheckIcon, 'Professional drivers'],
              [MapPinIcon, 'GPS-informed arrivals'],
              [HeartHandshakeIcon, 'Compassionate care'],
              [Clock3Icon, 'On-time focus']].
              map(([Icon, label]) =>
              <div
                key={label as string}
                className="flex gap-3 text-sm font-bold text-white">
                
                  {createElement(Icon as React.ElementType, {
                  size: 20,
                  className: 'shrink-0 text-teal-300'
                })}
                  {label as string}
                </div>
              )}
            </div>
            <ButtonLink to="/about" variant="light" className="mt-10">
              Why Northstar
            </ButtonLink>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Simple from the start"
          title="A ride experience with fewer unknowns."
          align="center" />
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
          [
          '01',
          'Book',
          'Tell us where, when, and what support will make your trip easier.'],

          [
          '02',
          'Confirm',
          'A mobility coordinator confirms the plan and answers questions.'],

          [
          '03',
          'Pickup',
          'Your trained driver arrives prepared, with time to help.'],

          [
          '04',
          'Safe arrival',
          'We get you there with care, then keep you informed.']].

          map(([number, title, copy], index) =>
          <Reveal key={title} delay={index * 0.05}>
              <div className="relative rounded-2xl bg-slate-50 p-6">
                <span className="text-xs font-extrabold tracking-[.15em] text-teal-700">
                  {number}
                </span>
                <h3 className="mt-8 text-lg font-extrabold tracking-[-.03em] text-slate-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
      <section className="bg-teal-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <SectionHeading
            eyebrow="What riders remember"
            title="More than a ride. A source of reassurance."
            align="center" />
          
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
            [
            '“My driver knew exactly how to make the trip comfortable. I arrived relaxed and on time.”',
            'Marisol R.',
            'Rider since 2022'],

            [
            '“The communication made all the difference. I knew my father was in good hands.”',
            'David L.',
            'Family member'],

            [
            '“Northstar has become a dependable extension of our care coordination team.”',
            'Kara M.',
            'Clinic coordinator']].

            map(([quote, name, role], index) =>
            <Reveal delay={index * 0.06} key={name} className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}>
                <figure className="rounded-2xl bg-white p-7 shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({
                      length: 5
                    }).map((_, i) =>
                    <StarIcon key={i} size={15} fill="currentColor" />
                    )}
                    </div>
                    <blockquote className="mt-5 text-lg font-bold leading-7 tracking-[-.02em] text-slate-800">
                      {quote}
                    </blockquote>
                  </div>
                  <figcaption className="mt-7 text-sm">
                    <span className="font-bold text-slate-950">{name}</span>
                    <span className="block mt-1 text-slate-500">{role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            )}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Helpful answers"
            title="Questions before your first ride?"
            description="Our coordinators are always happy to walk you through the details." />
          
        </Reveal>
        <Reveal delay={0.08}>
          <FaqList items={faqs} />
        </Reveal>
      </section>
      <section className="mx-5 mb-5 overflow-hidden rounded-[2rem] bg-blue-800 sm:mx-8 xl:mx-auto xl:mb-8 xl:max-w-7xl">
        <div className="grid items-center gap-8 px-7 py-12 sm:px-12 lg:grid-cols-[1fr_auto] lg:py-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.17em] text-teal-200">
              Ready when you are
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-[-.05em] text-white sm:text-4xl">
              Transportation that puts care in motion.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/assessment" variant="light">
              Book transportation
            </ButtonLink>
            <ButtonLink
              to="/contact"
              variant="secondary"
              className="border-white/40 bg-transparent text-white hover:bg-white hover:text-blue-800">
              
              Contact us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>);

}