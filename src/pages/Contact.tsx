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
            eyebrow="Contact Northstar"
            title="A real person is ready to help." />
          
          <div className="mt-8 space-y-6">
            {[
            [
            PhoneIcon,
            'Call us',
            '1-800-555-0148',
            'For ride planning and general support'],

            [
            MailIcon,
            'Email us',
            'hello@northstarmobility.example',
            'We typically respond within one business day'],

            [
            Clock3Icon,
            'Business hours',
            'Mon–Fri, 7am–7pm',
            '24/7 support is available for scheduled riders']].

            map(([Icon, title, value, copy]) =>
            <div key={title as string} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700">
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
                  <p className="mt-1 text-xs text-slate-500">
                    {copy as string}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-900">
            <strong>Medical emergency?</strong> Call 911. Northstar Mobility
            does not provide emergency medical response.
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <DemoForm title="Send us a message" buttonText="Send message" />
        </Reveal>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <div className="relative grid min-h-[340px] place-items-center overflow-hidden rounded-[2rem] bg-slate-200">
            <div
              className="absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)',
                backgroundSize: '44px 44px'
              }} />
            
            <div className="relative rounded-2xl bg-white px-6 py-5 text-center shadow-lg">
              <MapPinIcon className="mx-auto text-teal-700" size={26} />
              <p className="mt-3 text-sm font-bold text-slate-950">
                Service area information
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Contact us to discuss availability in your area.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>);

}