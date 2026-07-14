import React, { createElement } from "react";
import {
  BusFrontIcon,
  CalendarClockIcon,
  CheckCircle2Icon,
  ClipboardCheckIcon,
  MapIcon,
  RouteIcon,
  ShieldCheckIcon,
  UsersRoundIcon,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ButtonLink, Reveal, SectionHeading } from "../components/Ui";

type Capability = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  {
    title: "Agency-aligned routing",
    copy: "We collaborate with local departments and partner agencies to structure practical and consistent routes.",
    icon: RouteIcon,
  },
  {
    title: "NYS DOT readiness",
    copy: "Vehicles, operators, and operating standards are coordinated to meet NY transportation requirements.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Accessible operations",
    copy: "ADA-conscious fleet configurations support riders with varied mobility requirements.",
    icon: BusFrontIcon,
  },
];

export function PublicTransit() {
  return (
    <>
      <PageHero
        eyebrow="Public Transit Programs"
        title="Community transportation designed for continuity and access."
        description="Cathay Express works with municipalities, school systems, and agencies to deliver dependable public transit and paratransit transportation across New York."
        image="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1400&q=85"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/contact" variant="light">
            Discuss a transit program
          </ButtonLink>
          <ButtonLink to="/services" variant="ghost">
            View all services
          </ButtonLink>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Built for agencies"
          title="A practical model for public transit partnerships."
          description="Our teams help design stable service operations with route consistency, rider support, and dispatch visibility."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {capabilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="ui-card ui-card-hover p-6 h-full">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  {createElement(item.icon, { size: 22 })}
                </span>
                <h2 className="mt-5 text-lg font-extrabold tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {item.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Program setup"
              title="How we onboard transit and paratransit programs."
              description="Whether you coordinate for a county, school network, or care organization, we build a launch plan around demand and rider needs."
            />

            <div className="mt-8 space-y-4 text-sm text-slate-700">
              {[
                [
                  ClipboardCheckIcon,
                  "Share service boundaries, rider profile, and scheduling requirements.",
                ],
                [
                  CalendarClockIcon,
                  "Define run frequency, pickup windows, and dispatch escalation paths.",
                ],
                [
                  UsersRoundIcon,
                  "Launch with coordinator communication and rider support workflows.",
                ],
              ].map(([Icon, text]) => (
                <div key={text as string} className="flex gap-3">
                  {createElement(Icon as LucideIcon, {
                    size: 18,
                    className: "mt-0.5 shrink-0 text-brand-blue",
                  })}
                  <p>{text as string}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="ui-card p-2">
              <div className="relative overflow-hidden rounded-[1.45rem]">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=85"
                  alt="Public transit bus in city"
                  className="h-[390px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="max-w-xs rounded-2xl bg-white p-4">
                    <MapIcon className="text-brand-blue" size={22} />
                    <p className="mt-2 text-sm font-bold text-slate-900">
                      Route planning support
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      Our dispatch team helps build clear route and rider
                      workflows from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-8">
        <SectionHeading
          eyebrow="Why partners choose us"
          title="Consistency, safety, and communication at operational scale."
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["24/7", "dispatch communication windows"],
            ["ADA", "fleet accessibility configurations"],
            ["NYS", "state transportation alignment"],
            ["Regional", "coverage from NYC to Upstate"],
          ].map(([value, label], index) => (
            <Reveal key={label} delay={index * 0.05}>
              <div className="ui-card p-5 text-center transition hover:border-brand-blue/20">
                <p className="text-2xl font-extrabold tracking-[-0.04em] text-brand-navy">
                  {value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate-600">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="ui-surface-strong p-7 sm:p-8 mt-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-blue-100">
                Ready to collaborate?
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.04em]">
                Plan a public transit program with us.
              </h3>
            </div>
            <ButtonLink to="/contact" variant="light">
              Contact transit team
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
