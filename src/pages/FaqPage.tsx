import React from 'react';
import { PageHero } from '../components/PageHero';
import { FaqList, SectionHeading } from '../components/Ui';

const bookingFaqs = [
  {
    question: 'How do I request a ride with Cathay Express Transportation?',
    answer: 'You can request transportation by calling our Central Dispatch at (212) 261-5555 or by filling out our online Ride Assessment request. For Medicaid-covered rides, you must request Cathay Express Transportation directly through your broker (MAS or ModivCare).'
  },
  {
    question: 'What is a standing order, and can you accommodate them?',
    answer: 'Yes. A standing order is a pre-scheduled, recurring medical ride (e.g., dialysis treatments three times a week, or oncology sessions). We manage long-standing recurring contracts and coordinate routes to ensure on-time pick-ups.'
  },
  {
    question: 'How far in advance should I schedule my ride?',
    answer: 'We recommend scheduling your ride at least 48 to 72 hours in advance. However, our dispatch center is operational 24/7, and we do our best to accommodate urgent hospital discharges or short-notice appointments based on vehicle availability.'
  }
];

const coverageFaqs = [
  {
    question: 'Does NY Medicaid cover paratransit and stretcher transport?',
    answer: 'Yes. NY Medicaid covers non-emergency medical transportation (NEMT) for eligible recipients. You must contact your county Medicaid transportation manager or broker (MAS in NYC/Long Island/upstate) to obtain authorization and select Cathay Express as your provider.'
  },
  {
    question: 'Do you accept private insurance or private pay options?',
    answer: 'Yes, we accept private pay, facility-covered invoices, and private insurance. Contact our Flushing headquarters office at (212) 337-3333 to discuss custom billing plans and rates.'
  },
  {
    question: 'Which areas do your regional bases cover?',
    answer: 'We operate four bases in New York: Flushing (NYC/Queens), Norwich (Chenango County), Rochester (Monroe County), and Poughkeepsie (Dutchess County). We cover surrounding counties and provide long-distance medical transfers as authorized.'
  }
];

const passengerFaqs = [
  {
    question: 'Can a family member or medical assistant ride with me?',
    answer: 'Yes. An approved escort (family member, health aid, or guardian) can accompany you on your medical transfer. Please notify our dispatchers or include this detail in your assessment request so we can allocate proper vehicle space.'
  },
  {
    question: 'What safety systems do your wheelchair vehicles use?',
    answer: 'Our wheelchair vans are ADA-compliant and utilize professional Q\'Straint 4-point tie-down securement systems along with safety lap and shoulder belts, ensuring manual or powered chairs remain locked in place during transport.'
  },
  {
    question: 'Do you provide emergency ambulance responses?',
    answer: 'No. Cathay Express Transportation is a Non-Emergency Medical Transportation (NEMT) provider. If you are experiencing a life-threatening medical emergency, please call 911 immediately.'
  }
];

export function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help Center"
        title="Frequently Asked Questions"
        description="Find answers to common questions about NEMT scheduling, Medicaid broker authorization, base service areas, and paratransit support."
        image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <SectionHeading
              eyebrow="Booking & Scheduling"
              title="Arranging your rides."
              description="Details on booking single transfers, hospital discharges, and setting up recurring schedules."
            />
          </div>
          <div>
            <FaqList items={bookingFaqs} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-8 border-t border-slate-200">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <SectionHeading
              eyebrow="Coverage & Insurance"
              title="Medicaid & billing."
              description="Learn how Medicaid brokers (MAS/ModivCare) assign trips and what private pay options are available."
            />
          </div>
          <div>
            <FaqList items={coverageFaqs} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-8 border-t border-slate-200">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <SectionHeading
              eyebrow="Safety & Vehicles"
              title="Passenger guidelines."
              description="Details regarding mobility equipment support, family escorts, and driver safety certifications."
            />
          </div>
          <div>
            <FaqList items={passengerFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
