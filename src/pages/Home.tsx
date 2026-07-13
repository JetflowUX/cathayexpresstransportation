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
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ButtonLink, FaqList, Reveal, SectionHeading } from '../components/Ui';
const banner = [
  [
    'Medical transportation',
    'Comfortable, coordinated rides for routine care.',
    AmbulanceIcon,
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85',
    'https://images.unsplash.com/photo-1584466991708-4b9a6c0f0b6b?auto=format&fit=crop&w=1000&q=85'
  ],
  [
    'Public transit',
    'Connected routes built around real community needs.',
    BusFrontIcon,
    'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1800&q=85',
    'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1000&q=85'
  ],
  [
    'Corporate transportation',
    'Reliable mobility for your teams and guests.',
    CarFrontIcon,
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1800&q=85',
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=85'
  ],
  [
    'Senior transportation',
    'Patient, helpful service that preserves independence.',
    HeartHandshakeIcon,
    'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1800&q=85',
    'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=85'
  ],
  [
    'Wheelchair transportation',
    'Accessible vehicles and attentive door-through-door support.',
    BoxIcon,
    'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1800&q=85',
    'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1000&q=85'
  ]
];


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
  'Whenever possible, please make non-urgent requests at least 48 hours ahead. Our dispatch team will always try to accommodate short-notice needs.'
},
{
  question: 'Can a companion travel with me?',
  answer:
  'Yes. A companion may join you depending on vehicle capacity and the service requested.'
},
{
  question: 'Do you provide emergency transportation?',
  answer:
  'No. Cathay Express Transportation is not an emergency medical provider. Please call 911 for immediate medical emergencies.'
}];

function MedicaidBrokerHelper() {
  const [selectedCounty, setSelectedCounty] = useState('nyc');

  const counties = {
    nyc: {
      name: 'NYC / Queens / Brooklyn / Staten Island',
      broker: 'MAS (Medical Answering Services)',
      phone: '1-800-850-5340',
      web: 'www.medanswering.com',
      note: 'Instruct MAS to coordinate paratransit with Cathay Express Transportation (Flushing Base ID: N18645).'
    },
    monroe: {
      name: 'Monroe County (Rochester / Upstate)',
      broker: 'MAS (Medical Answering Services)',
      phone: '1-866-932-7740',
      web: 'www.medanswering.com',
      note: 'Instruct MAS to coordinate paratransit with Cathay Express Transportation (Rochester Base ID: N18645).'
    },
    chenango: {
      name: 'Chenango County (Norwich / Upstate)',
      broker: 'MAS (Medical Answering Services)',
      phone: '1-855-360-3545',
      web: 'www.medanswering.com',
      note: 'Instruct MAS to coordinate paratransit with Cathay Express Transportation (Norwich Base ID: N18645).'
    },
    dutchess: {
      name: 'Dutchess County (Poughkeepsie / Hudson Valley)',
      broker: 'MAS (Medical Answering Services)',
      phone: '1-855-360-3543',
      web: 'www.medanswering.com',
      note: 'Instruct MAS to coordinate paratransit with Cathay Express Transportation (Poughkeepsie Base ID: N18645).'
    }
  };

  const current = counties[selectedCounty as keyof typeof counties];

  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {Object.entries(counties).map(([id, item]) => (
          <button
            key={id}
            type="button"
            onClick={() => setSelectedCounty(id)}
            className={`rounded-xl px-3 py-2.5 text-center text-xs font-bold transition duration-200 ${
              selectedCounty === id
                ? 'bg-brand-blue text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70'
            }`}
          >
            {id.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50/50 p-5 space-y-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">
            Regional Base Coverage
          </span>
          <span className="text-sm font-bold text-slate-950 mt-1 block">
            {current.name}
          </span>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">
              Authorized Broker
            </span>
            <span className="text-sm font-bold text-slate-800 mt-1 block">
              {current.broker}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">
              Broker Phone Number
            </span>
            <a
              href={`tel:${current.phone.replace(/[^0-9]/g, '')}`}
              className="text-sm font-bold text-brand-blue hover:underline mt-1 block"
            >
              {current.phone}
            </a>
          </div>
        </div>

        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">
            Online Booking Portal
          </span>
          <a
            href={`https://${current.web}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-blue hover:underline mt-1 block"
          >
            {current.web} →
          </a>
        </div>

        <div className="border-t border-slate-200/60 pt-4 text-xs leading-5 text-slate-600">
          <strong className="text-slate-950 font-bold block mb-1">Preferred Provider Instruction:</strong>
          {current.note}
        </div>
      </div>
    </div>
  );
}

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
      <section className="relative overflow-hidden bg-brand-navy pt-[76px]">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={banner[active][3] as string}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              alt=""
              className="h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-32">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="flex flex-col justify-center">
            

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
              
              Reliable Non-Emergency Medical Transportation You Can Trust
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
              
              Safe, timely, and professional ambulatory, wheelchair, and stretcher
              mobility solutions across New York City, Long Island, and Upstate New York.
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
              
              <ButtonLink to="/assessment">Book Transportation</ButtonLink>
              <ButtonLink to="/contact" variant="light">
                Contact Us
              </ButtonLink>
            </motion.div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 text-sm font-semibold text-slate-200">
              <span className="flex items-center gap-2">
                <ShieldCheckIcon size={18} className="text-brand-blue" />
                <span className="text-xs font-bold">100% NYS DOT Compliant</span>
              </span>
              <div className="flex items-center gap-2 text-slate-200">
                <Clock3Icon size={18} className="text-brand-blue" />
                24/7 ride support
              </div>
            </div>
          </motion.div>
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
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={banner[active][4] as string}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  alt={banner[active][0] as string}
                  className="aspect-[4/4.2] w-full rounded-[1.55rem] object-cover"
                />
              </AnimatePresence>
            </div>
            <div className="absolute -bottom-5 -left-2 rounded-2xl bg-white p-4 shadow-xl sm:-left-7">
              <p className="text-2xl font-extrabold tracking-[-.05em] text-slate-950">
                4.9{' '}
                <StarIcon
                  className="inline fill-amber-400 text-amber-400"
                  size={19} />
                
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-700">
                from rider feedback
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-xs font-extrabold uppercase tracking-[.15em] text-slate-700">
              NY Operational Services
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
                  className: 'text-brand-blue'
                })}
                <span>{banner[active][0]}</span>
                <span className="hidden font-normal text-slate-700 sm:inline">
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
                className={`h-1.5 rounded-full transition-all ${active === i ? 'w-6 bg-brand-blue' : 'w-1.5 bg-slate-300'}`} />

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
            className={`flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.02)] backdrop-blur-sm transition duration-200 hover:border-brand-blue/30 hover:bg-white hover:shadow-md ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
            
              <div>
                <p className="text-3xl font-extrabold tracking-[-.05em] text-brand-blue">
                  {number}
                </p>
                <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-700">{label}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-slate-50 border-t border-b border-slate-200/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Medicaid Coordinates"
                title="How to request Cathay Express through your Medicaid broker."
                description="In New York State, all non-emergency medical transportation (NEMT) must be authorized and scheduled through regional Medicaid brokers. To ride with us, you simply request Cathay Express as your preferred provider."
              />
              <div className="mt-6 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  1. Contact your regional Medicaid broker (MAS or ModivCare) at least 3 business days before your appointment.
                </p>
                <p>
                  2. Provide the coordinator with your appointment details, medical facility address, and vehicle requirements (wheelchair, stretcher, or ambulatory).
                </p>
                <p>
                  3. <strong>Crucial Step:</strong> Explicitly ask the broker to assign <strong>Cathay Express Transportation</strong> as your preferred provider.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-extrabold tracking-[-0.03em] text-slate-950">
                  Select Your County to View Broker Details
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Find the exact booking number and website for your regional Medicaid broker coordinator.
                </p>
                
                <MedicaidBrokerHelper />
              </div>
            </Reveal>
          </div>
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
              <article className="group flex min-h-[230px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-extrabold tracking-[-.03em] text-slate-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{copy}</p>
                <Link
                to="/services"
                className="mt-auto pt-5 text-sm font-bold text-blue-700 hover:text-brand-blue">
                
                  Explore service <span aria-hidden="true">→</span>
                </Link>
              </article>
            </Reveal>
          )}
        </div>
      </section>
      <section className="bg-brand-navy py-20">
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
              light
              eyebrow="Why Choose Us"
              title="Setting the standard for passenger safety & trust."
              description="We align with Medicaid, OPWDD, and NYS DOT standards to provide unparalleled service quality across NY." />
            
            <div className="mt-8 grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2">
              {[
              [BadgeCheckIcon, 'Reliable'],
              [ShieldCheckIcon, 'Safe'],
              [UserRoundCheckIcon, 'Professional Drivers'],
              [Clock3Icon, 'On-Time Service'],
              [HeartHandshakeIcon, 'Compassionate Care'],
              [MapPinIcon, 'GPS Tracked Vehicles'],
              [BadgeCheckIcon, 'Fully Insured'],
              [UsersRoundIcon, 'Customer Support']].
              map(([Icon, label]) =>
              <div
                key={label as string}
                className="flex gap-3 text-sm font-bold text-white">
                
                  {createElement(Icon as React.ElementType, {
                  size: 20,
                  className: 'shrink-0 text-brand-blue'
                })}
                  {label as string}
                </div>
              )}
            </div>
            <ButtonLink to="/about" variant="light" className="mt-10">
              About Cathay Express
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
                <span className="text-xs font-extrabold tracking-[.15em] text-brand-blue">
                  {number}
                </span>
                <h3 className="mt-8 text-lg font-extrabold tracking-[-.03em] text-slate-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{copy}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
      <section className="bg-brand-light py-20">
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
                    <span className="block mt-1 text-slate-600">{role}</span>
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
      <section className="bg-slate-50 py-16 border-t border-b border-slate-200 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <p className="text-center text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
            We Proudly Serve & Connect With NY Medicaid Brokers & Insurance Providers
          </p>
          <div className="relative mt-8 overflow-hidden [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,_black_calc(100%_-_128px),_transparent_100%)]">
            <div className="animate-marquee-slow flex gap-20 items-center">
              {[
                '/partners/1.png',
                '/partners/2.png',
                '/partners/3.png',
                '/partners/4.png',
                '/partners/5.png',
                '/partners/6.png',
                '/partners/7.png',
                '/partners/8.png',
                '/partners/9.png',
                '/partners/10.png',
                '/partners/11.png',
                '/partners/12.png',
                '/partners/13.png',
                '/partners/image-12.png',
                '/partners/image-15.png',
                '/partners/NYCM_Insurance_Logo.svg_.png',
                '/partners/TNJH-Logo2019-footer-e1562697695240.png',
                '/partners/1.png',
                '/partners/2.png',
                '/partners/3.png',
                '/partners/4.png',
                '/partners/5.png',
                '/partners/6.png',
                '/partners/7.png',
                '/partners/8.png',
                '/partners/9.png',
                '/partners/10.png',
                '/partners/11.png',
                '/partners/12.png',
                '/partners/13.png',
                '/partners/image-12.png',
                '/partners/image-15.png',
                '/partners/NYCM_Insurance_Logo.svg_.png',
                '/partners/TNJH-Logo2019-footer-e1562697695240.png'
              ].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Partner logo"
                  className="h-14 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity max-w-[180px]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-5 mb-5 overflow-hidden rounded-[2rem] bg-blue-800 sm:mx-8 xl:mx-auto xl:mb-8 xl:max-w-7xl">
        <div className="grid items-center gap-8 px-7 py-12 sm:px-12 lg:grid-cols-[1fr_auto] lg:py-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.17em] text-blue-200">
              Book your transportation today
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-[-.05em] text-white sm:text-4xl">
              Reliable non-emergency medical rides across NY.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/assessment" variant="light">
              Book transportation
            </ButtonLink>
            <ButtonLink
              to="/contact"
              variant="ghost">
              
              Contact us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>);

}