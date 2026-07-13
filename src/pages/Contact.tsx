import React, { createElement } from 'react';
import { Clock3Icon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { DemoForm, Reveal, SectionHeading } from '../components/Ui';
export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="We’re here to help make the next step clear."
        description="Whether you’re planning transportation, exploring a partnership, or have a question, our team is ready to listen."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85" />
      
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact Cathay Express"
            title="Our central dispatch is ready 24/7." />
          
          <div className="mt-8 space-y-6">
            {[
            [
            PhoneIcon,
            'Call Central Dispatch',
            '(212) 261-5555',
            'Central scheduling and operations across all regions'],

            [
            MailIcon,
            'Email us',
            'dispatch@cathayexpress.com',
            'We typically respond to inquiries within one business day'],

            [
            Clock3Icon,
            'Business hours',
            '24 Hours / 7 Days a Week',
            'Active dispatch coordinators available for immediate support']].

            map(([Icon, title, value, copy]) =>
            <div key={title as string} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  {createElement(Icon as React.ElementType, {
                  size: 19
                })}
                </span>
                <div>
                  <h2 className="text-sm font-bold text-slate-950">
                    {title as string}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-blue-700">
                    {value as string}
                  </p>
                  <p className="mt-1 text-xs text-slate-700">
                    {copy as string}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-900">
            <strong>Medical emergency?</strong> Call 911. Cathay Express Transportation
            does not provide emergency medical response.
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <DemoForm title="Send us a message" buttonText="Send message" />
        </Reveal>
      </section>
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <SectionHeading
            eyebrow="Our bases"
            title="Serving Queens, NYC, and New York State."
            description="Our physical offices coordinate regional operations and maintain active vehicle fleets."
            align="center" />
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['NYC Headquarters', '30-50 Whitestone Expy, Suite 402', 'Flushing, NY 11354', 'Ph: 212-337-3333', 'https://maps.google.com/?q=30-50+Whitestone+Expy+Flushing+NY'],
              ['Norwich Base', '126 Leilani’s Lane', 'Norwich, NY 13815', 'Ph: 607-367-1999', 'https://maps.google.com/?q=126+Leilani+Lane+Norwich+NY'],
              ['Rochester Base', '90 Airpark Drive, Suite 306A3', 'Rochester, NY 14624', 'Ph: 585-551-2020', 'https://maps.google.com/?q=90+Airpark+Drive+Rochester+NY'],
              ['Poughkeepsie Base', '488 Freedom Plains Road', 'Poughkeepsie, NY 12603', 'Ph: 845-241-7228', 'https://maps.google.com/?q=488+Freedom+Plains+Rd+Poughkeepsie+NY']
            ].map(([name, address1, address2, phone, mapLink]) => (
              <Reveal key={name} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <MapPinIcon size={19} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-950">{name}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-700">
                    {address1}<br />
                    {address2}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-brand-blue">{phone}</p>
                </div>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 text-xs font-bold text-blue-700 hover:text-brand-blue inline-flex items-center gap-1">
                  View on Google Maps →
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>);

}