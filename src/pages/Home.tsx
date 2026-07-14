import React, { createElement, useEffect, useState } from "react";
import {
  AmbulanceIcon,
  ArrowRightIcon,
  BadgeCheckIcon,
  BoxIcon,
  BusFrontIcon,
  CarFrontIcon,
  CheckCircle2Icon,
  Clock3Icon,
  HeartHandshakeIcon,
  MapPinIcon,
  ShieldCheckIcon,
  StarIcon,
  UsersRoundIcon,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button, ButtonLink, FaqList, Reveal, SectionHeading, AnimeScrollReveal, FloatingParticles } from "../components/Ui";

type BannerItem = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  backdrop: string;
  cardImage: string;
};

const bannerItems: BannerItem[] = [
  {
    title: "Medical transportation",
    subtitle:
      "Comfortable, coordinated rides for routine care and follow-up visits.",
    icon: AmbulanceIcon,
    backdrop:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85",
    cardImage: "/fleet-5.jpg",
  },
  {
    title: "Public transit programs",
    subtitle:
      "Flexible routes built around real community and agency requirements.",
    icon: BusFrontIcon,
    backdrop:
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1800&q=85",
    cardImage: "/fleet-1.jpg",
  },
  {
    title: "Wheelchair transportation",
    subtitle:
      "Accessible vehicles and attentive support for every leg of the trip.",
    icon: BoxIcon,
    backdrop:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1800&q=85",
    cardImage: "/Big-Blue.png",
  },
  {
    title: "Corporate & facility mobility",
    subtitle:
      "Reliable transportation for teams, clinics, and partner organizations.",
    icon: CarFrontIcon,
    backdrop:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1800&q=85",
    cardImage: "/nemt_shuttle_van.png",
  },
];

const serviceCards = [
  {
    title: "Ambulatory & Livery",
    copy: "Low-stress, punctual transportation for routine visits and outpatient care.",
    icon: HeartHandshakeIcon,
    to: "/services#ambulatory",
  },
  {
    title: "Wheelchair Trips",
    copy: "Lift-equipped vehicles with trained drivers and proper securement support.",
    icon: BoxIcon,
    to: "/services#wheelchair",
  },
  {
    title: "Stretcher Transport",
    copy: "Professional recumbent transport for discharge and inter-facility movement.",
    icon: AmbulanceIcon,
    to: "/services#stretcher",
  },
  {
    title: "Special Needs School",
    copy: "Consistent and supportive transport for students with specialized needs.",
    icon: UsersRoundIcon,
    to: "/services#school-bus",
  },
  {
    title: "Paratransit",
    copy: "Trusted ADA-conscious travel coordinated with Medicaid and local programs.",
    icon: BusFrontIcon,
    to: "/services#paratransit",
  },
  {
    title: "Public Transit Programs",
    copy: "Community-focused route programs built with agency and county requirements.",
    icon: MapPinIcon,
    to: "/public-transit",
  },
];

const faqs = [
  {
    question: "How far ahead should I schedule?",
    answer:
      "Whenever possible, please request non-urgent rides at least 48 hours in advance. Our dispatch team always tries to accommodate short-notice needs.",
  },
  {
    question: "Can a companion travel with me?",
    answer:
      "Yes. A companion can often join based on vehicle capacity and the service type requested.",
  },
  {
    question: "Do you provide emergency transportation?",
    answer:
      "No. Cathay Express Transportation provides non-emergency transportation only. Please call 911 for immediate emergencies.",
  },
];

function MedicaidBrokerHelper() {
  const [selectedCounty, setSelectedCounty] = useState("nyc");

  const counties = {
    nyc: {
      name: "NYC / Queens / Brooklyn / Staten Island",
      broker: "MAS (Medical Answering Services)",
      phone: "1-800-850-5340",
      web: "www.medanswering.com",
      note: "Ask MAS to assign Cathay Express Transportation (Flushing Base ID: N18645).",
    },
    monroe: {
      name: "Monroe County (Rochester / Upstate)",
      broker: "MAS (Medical Answering Services)",
      phone: "1-866-932-7740",
      web: "www.medanswering.com",
      note: "Ask MAS to assign Cathay Express Transportation (Rochester Base ID: N18645).",
    },
    chenango: {
      name: "Chenango County (Norwich / Upstate)",
      broker: "MAS (Medical Answering Services)",
      phone: "1-855-360-3545",
      web: "www.medanswering.com",
      note: "Ask MAS to assign Cathay Express Transportation (Norwich Base ID: N18645).",
    },
    dutchess: {
      name: "Dutchess County (Poughkeepsie / Hudson Valley)",
      broker: "MAS (Medical Answering Services)",
      phone: "1-855-360-3543",
      web: "www.medanswering.com",
      note: "Ask MAS to assign Cathay Express Transportation (Poughkeepsie Base ID: N18645).",
    },
  };

  const current = counties[selectedCounty as keyof typeof counties];

  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {Object.entries(counties).map(([id]) => (
          <Button
            key={id}
            type="button"
            variant={selectedCounty === id ? "primary" : "secondary"}
            onClick={() => setSelectedCounty(id)}
            className="!py-2 !px-3 text-xs w-full"
          >
            {id.toUpperCase()}
          </Button>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-500">
          County Coverage
        </p>
        <p className="mt-1 text-sm font-bold text-slate-900">{current.name}</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-500">
              Broker
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-800">
              {current.broker}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-500">
              Phone
            </p>
            <a
              href={`tel:${current.phone.replace(/[^0-9]/g, "")}`}
              className="mt-1 block text-sm font-semibold text-brand-blue hover:underline"
            >
              {current.phone}
            </a>
          </div>
        </div>

        <a
          href={`https://${current.web}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
        >
          {current.web}
          <ArrowRightIcon size={14} />
        </a>

        <p className="mt-4 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-600">
          {current.note}
        </p>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <>
      <section 
        className="relative overflow-hidden bg-brand-navy bg-cover bg-center"
        style={{ backgroundImage: "url('/fleet-cover.jpg')" }}
      >
        {/* Dark high-contrast overlay to guarantee text legibility */}
        <div className="absolute inset-0 bg-brand-navy/85 lg:bg-gradient-to-r lg:from-brand-navy/95 lg:via-brand-navy/85 lg:to-brand-navy/30" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Anime.js Floating Particles */}
        <FloatingParticles />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:grid lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-10 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              <span className="text-sky-300">#1</span> NYC & New York State’s NEMT & Special Needs Transportation Provider
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Reliable, professional, and compliant non-emergency medical and special-needs student transportation serving NYC, Long Island, Westchester, and Upstate New York.
            </p>

            {/* Original Trust Badges - Snug and Centered */}
            <div className="mt-6 mx-auto lg:mx-0 w-fit flex items-center justify-center gap-5 bg-white/5 p-2.5 px-4 rounded-xl border border-white/10 backdrop-blur-sm">
              <a
                href="https://sbsconnect.nyc.gov/vendor-profile/?guid=989c57ca-d9a0-423e-89c1-dbb0e06a0a75"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-105 duration-200 h-9 flex items-center shrink-0"
              >
                <img src="/sbs-logo.png" alt="NYC SBS certified minority vendor" className="h-9 w-auto object-contain" />
              </a>
              <span className="h-6 w-px bg-white/10 shrink-0" />
              <a
                href="https://www.bbb.org/us/ny/flushing/profile/transportation/cathay-express-transportation-inc-0121-157453"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-105 duration-200 h-9 flex items-center shrink-0"
              >
                <img src="/bbb-logo.png" alt="BBB Accredited Business" className="h-9 w-auto object-contain" />
              </a>
              <span className="h-6 w-px bg-white/10 shrink-0" />
              <a
                href="https://www.topratedlocal.com/cathay-express-transportation-reviews?utm_source=badge&utm_medium=organic"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-105 duration-200 h-9 flex items-center shrink-0"
              >
                <img src="/top-rated-logo.png" alt="Top Rated Local" className="h-9 w-auto object-contain" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                to="/transportation-assessment"
                className="!bg-[#17B49D] hover:!bg-[#00806D] !border-[#17B49D] hover:!border-[#00806D] !text-white transition duration-200"
              >
                Request a Quote
              </ButtonLink>
              <a
                href="tel:2122615555"
                className="ui-button ui-button-ghost"
              >
                Call dispatch: (212) 261-5555
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-wider text-slate-300">
              <span className="inline-flex items-center gap-2">
                <ShieldCheckIcon size={15} className="text-sky-300" />
                NYS DOT compliant
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3Icon size={15} className="text-sky-300" />
                24/7 dispatch support
              </span>
            </div>
          </motion.div>

          {/* Right Column: Left empty to clearly display the background fleet-cover lineup */}
          <div className="hidden lg:block h-full min-h-[380px]" />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["18+", "years serving NY communities"],
              ["250k+", "rides coordinated"],
              ["4.9/5", "average rider satisfaction"],
              ["24/7", "dispatch and support"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
              >
                <p className="text-2xl font-extrabold tracking-[-0.04em] text-brand-navy">
                  {value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.09em] text-slate-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Service programs"
          title="Transportation designed around people, not just routes."
          description="From clinical visits to community mobility, we coordinate transportation experiences that feel clear, safe, and dependable."
        />

        <AnimeScrollReveal
          selector=".service-card"
          delay={50}
          className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {serviceCards.map((item) => (
            <article key={item.title} className="service-card ui-card ui-card-hover p-6 h-full">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <item.icon size={20} />
              </span>
              <h3 className="mt-5 text-lg font-extrabold tracking-[-0.03em] text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {item.copy}
              </p>
              <Link
                to={item.to}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:underline"
              >
                Learn more
                <ArrowRightIcon size={14} />
              </Link>
            </article>
          ))}
        </AnimeScrollReveal>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Broker coordination"
              title="Request Cathay Express through your Medicaid broker."
              description="In New York State, NEMT rides are coordinated through regional brokers. We help riders and coordinators request the right vehicle and provider assignment."
            />

            <div className="mt-8 space-y-3 text-sm leading-6 text-slate-700">
              <p>
                1. Contact your regional broker and share your appointment
                details.
              </p>
              <p>
                2. Confirm mobility needs: ambulatory, wheelchair, or stretcher.
              </p>
              <p>
                3. Ask specifically for Cathay Express Transportation as your
                preferred provider.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-extrabold tracking-[-0.03em] text-slate-950">
                Find your county broker details
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Use this quick selector to get the right booking phone and
                coordinator details.
              </p>
              <MedicaidBrokerHelper />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="A ride process that feels clear from start to finish."
          align="center"
        />

        <AnimeScrollReveal
          selector=".step-card"
          delay={50}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            [
              "01",
              "Submit request",
              "Share appointment details and transportation needs.",
            ],
            [
              "02",
              "Plan confirmation",
              "A coordinator confirms timing, pickup, and support level.",
            ],
            [
              "03",
              "Professional pickup",
              "Your trained driver arrives prepared and on schedule.",
            ],
            [
              "04",
              "Safe arrival",
              "You reach your destination with live dispatch visibility.",
            ],
          ].map(([step, title, copy]) => (
            <article key={title} className="step-card ui-card p-6 h-full">
              <p className="text-xs font-extrabold tracking-[0.16em] text-brand-blue">
                {step}
              </p>
              <h3 className="mt-5 text-lg font-extrabold tracking-[-0.03em] text-slate-950">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{copy}</p>
            </article>
          ))}
        </AnimeScrollReveal>
      </section>

      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <SectionHeading
            light
            eyebrow="Trusted outcomes"
            title="Families, facilities, and riders count on consistency."
            align="center"
          />

          <AnimeScrollReveal
            selector=".review-card"
            delay={50}
            className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              [
                "My driver was respectful, patient, and exactly on time. The whole trip felt safe and smooth.",
                "Marisol R.",
                "Rider since 2022",
              ],
              [
                "Communication was excellent from booking to drop-off. We always felt informed.",
                "David L.",
                "Family member",
              ],
              [
                "Cathay Express has become a dependable extension of our care coordination process.",
                "Kara M.",
                "Clinic coordinator",
              ],
            ].map(([quote, name, role]) => (
              <figure key={name} className="review-card flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <div>
                  <div className="flex gap-1 text-amber-300">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-base font-semibold leading-7 text-white">
                    “{quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-6 text-sm">
                  <p className="font-bold text-white">{name}</p>
                  <p className="mt-0.5 text-xs text-sky-200">{role}</p>
                </figcaption>
              </figure>
            ))}
          </AnimeScrollReveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Helpful answers"
            title="Questions before your first ride?"
            description="Our team can walk you through scheduling, billing categories, and support requirements."
          />

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
            <p className="font-bold text-slate-900">
              Need immediate scheduling support?
            </p>
            <a
              href="tel:2122615555"
              className="mt-2 inline-flex items-center gap-2 text-brand-blue hover:underline"
            >
              <PhoneBadge />
              Call dispatch: (212) 261-5555
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <FaqList items={faqs} />
        </Reveal>
      </section>

      <section className="overflow-hidden border-y border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <p className="text-center text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
            Trusted by NY Medicaid brokers and healthcare partners
          </p>
          <div className="relative mt-8 overflow-hidden [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,_black_calc(100%_-_128px),_transparent_100%)]">
            <div className="animate-marquee-slow flex items-center gap-20">
              {[
                "/partners/1.png",
                "/partners/2.png",
                "/partners/3.png",
                "/partners/4.png",
                "/partners/5.png",
                "/partners/6.png",
                "/partners/7.png",
                "/partners/8.png",
                "/partners/9.png",
                "/partners/10.png",
                "/partners/11.png",
                "/partners/12.png",
                "/partners/13.png",
                "/partners/image-12.png",
                "/partners/image-15.png",
                "/partners/NYCM_Insurance_Logo.svg_.png",
                "/partners/TNJH-Logo2019-footer-e1562697695240.png",
                "/partners/1.png",
                "/partners/2.png",
                "/partners/3.png",
                "/partners/4.png",
                "/partners/5.png",
                "/partners/6.png",
                "/partners/7.png",
                "/partners/8.png",
                "/partners/9.png",
                "/partners/10.png",
                "/partners/11.png",
                "/partners/12.png",
                "/partners/13.png",
                "/partners/image-12.png",
                "/partners/image-15.png",
                "/partners/NYCM_Insurance_Logo.svg_.png",
                "/partners/TNJH-Logo2019-footer-e1562697695240.png",
              ].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Partner logo"
                  className="h-12 w-auto max-w-[170px] object-contain opacity-90 transition-opacity hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-5 mb-5 overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#022c54_0%,#0b4d83_50%,#117aca_100%)] sm:mx-8 xl:mx-auto xl:mb-8 xl:max-w-7xl">
        <div className="grid items-center gap-8 px-7 py-12 sm:px-12 lg:grid-cols-[1fr_auto] lg:py-14">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-100">
              Ready to book with confidence?
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-[-0.05em] text-white sm:text-4xl">
              Start your transportation assessment and we will guide the rest.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/transportation-assessment" variant="light">
              Start assessment
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              Talk to our team
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneBadge() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue">
      <CheckCircle2Icon size={13} />
    </span>
  );
}
