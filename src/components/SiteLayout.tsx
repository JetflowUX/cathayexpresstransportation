import React, { useEffect, useState, type ReactNode } from 'react';
import {
  FacebookIcon,
  MenuIcon,
  PhoneIcon,
  XIcon,
  ChevronDownIcon
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Brand } from './Brand';
import { ButtonLink } from './Ui';

type NavItem = {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
};

const navigation: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Fleet', path: '/fleet' },
  {
    label: 'Our Services',
    path: '/services',
    children: [
      { label: 'Special Needs School Transportation', path: '/services#school-bus' },
      { label: 'Paratransit Transportation', path: '/services#paratransit' },
      { label: 'Stretchers Transportation', path: '/services#stretcher' },
      { label: 'Wheelchair Transportation', path: '/services#wheelchair' },
      { label: 'Ambulatory & Livery Transportation', path: '/services#ambulatory' },
      { label: 'Facilities & Partnerships', path: '/brokers-partnerships' }
    ]
  },
  { label: 'Quote & Reserve', path: '/assessment' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact Us', path: '/contact' }
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>
      
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white shadow-sm transition duration-300">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link
            to="/"
            className="focus:outline-none focus:ring-4 focus:ring-teal-200 rounded-lg"
          >
            <Brand />
          </Link>
          
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group py-2">
                  <button className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-750 hover:text-brand-blue transition">
                    <span>{item.label}</span>
                    <ChevronDownIcon size={12} className="transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 z-50 mt-1.5 hidden w-72 rounded-xl border border-slate-200 bg-white p-2.5 shadow-xl group-hover:block animate-in fade-in slide-in-from-top-1 duration-200">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block rounded-lg px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-blue transition text-left"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-[11px] font-extrabold uppercase tracking-wider transition hover:text-brand-blue ${
                      isActive ? 'text-brand-blue' : 'text-slate-750'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:2122615555"
              className="text-sm font-bold text-slate-800 hover:text-brand-blue"
            >
              <PhoneIcon className="mr-1 inline" size={14} />
              (212) 261-5555
            </a>
            <ButtonLink to="/assessment" className="px-4 py-2.5">
              Book transportation
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-800 xl:hidden focus:outline-none focus:ring-4 focus:ring-teal-200"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-t border-slate-200 bg-white px-5 py-5 shadow-lg xl:hidden max-h-[calc(100vh-76px)] overflow-y-auto"
              aria-label="Mobile navigation"
            >
              <div className="mx-auto grid max-w-7xl gap-1">
                {navigation.map((item) =>
                  item.children ? (
                    <div key={item.label} className="py-2 space-y-1.5">
                      <span className="px-3 text-[10px] font-black uppercase tracking-wider text-slate-400">
                        {item.label}
                      </span>
                      <div className="pl-3 border-l border-slate-200 space-y-1 ml-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="rounded-lg px-3 py-3 text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                    >
                      {item.label}
                    </NavLink>
                  )
                )}
                <ButtonLink to="/assessment" className="mt-3">
                  Book transportation
                </ButtonLink>
                <a
                  href="tel:2122615555"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:border-brand-blue hover:text-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/30"
                >
                  <PhoneIcon size={15} />
                  Call (212) 261-5555
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main id="main">{children}</main>

      <footer className="bg-brand-navy border-t border-slate-800 text-slate-300">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.7fr_0.8fr_1fr]">
            <div>
              <Brand light />
              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
                Safe, reliable, and professional non-emergency medical and paratransit
                transportation across NYC, Long Island, Westchester, and Upstate New York.
              </p>
              <div className="mt-5 space-y-1">
                <a href="tel:2122615555" className="text-sm font-bold text-brand-blue hover:underline block">
                  Central Dispatch: (212) 261-5555
                </a>
                <a href="tel:2123373333" className="text-xs text-slate-400 hover:underline block">
                  NYC Headquarters: (212) 337-3333
                </a>
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.facebook.com/Cathay-Express-Transportation-1495145790799070/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-brand-blue hover:text-brand-blue"
                >
                  <FacebookIcon size={16} />
                </a>
                <a
                  href="https://twitter.com/cathay_express"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-brand-blue hover:text-brand-blue flex items-center justify-center"
                >
                  <span className="text-xs font-black">X</span>
                </a>
              </div>
            </div>

            <FooterColumn
              title="Explore"
              links={[
                ['Our story', '/about'],
                ['NEMT services', '/services'],
                ['Our vehicle fleet', '/fleet'],
                ['Brokers & Partnerships', '/brokers-partnerships'],
                ['Frequently Asked FAQs', '/faq']
              ]}
            />
            
            <div>
              <h2 className="text-sm font-bold text-white">Trust & Compliance</h2>
              <ul className="mt-4 space-y-3 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand-blue shrink-0" />
                  HIPAA Compliant paratransit
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand-blue shrink-0" />
                  NYS DOT safety certified
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand-blue shrink-0" />
                  BBB Accredited business
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand-blue shrink-0" />
                  NYC certified minority vendor
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-sm font-bold text-white">Our NY Bases</h2>
              <ul className="mt-4 space-y-3.5 text-xs text-slate-400">
                <li>
                  <strong className="text-slate-300 block">NYC Headquarters (Flushing)</strong>
                  30-50 Whitestone Expy, Suite 402, NY 11354
                </li>
                <li>
                  <strong className="text-slate-300 block">Norwich Base</strong>
                  126 Leilani’s Lane, Norwich, NY 13815
                </li>
                <li>
                  <strong className="text-slate-300 block">Rochester Base</strong>
                  90 Airpark Drive, Suite 306A3, NY 14624
                </li>
                <li>
                  <strong className="text-slate-300 block">Poughkeepsie Base</strong>
                  488 Freedom Plains Road, NY 12603
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row">
            <span>© 2026 Cathay Express Transportation. All rights reserved. Do not copy.</span>
            <span>Privacy Policy · Terms of Service · Accessibility</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h2 className="text-sm font-bold text-white">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map(([label, path]) => (
          <li key={path}>
            <Link
              className="text-sm text-slate-400 transition hover:text-brand-blue"
              to={path}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}