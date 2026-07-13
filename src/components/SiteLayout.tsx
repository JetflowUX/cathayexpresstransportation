import React, { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowUpRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MenuIcon,
  PhoneIcon,
  XIcon } from
'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Brand } from './Brand';
import { ButtonLink } from './Ui';
const navigation = [
['About', '/about'],
['Services', '/services'],
['Public Transit', '/public-transit'],
['Careers', '/careers'],
['Assessment', '/assessment'],
['Contact', '/contact']];

export function SiteLayout({ children }: {children: ReactNode;}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener('scroll', update, {
      passive: true
    });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    setOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold">
        
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || location.pathname !== '/' ? 'border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur' : 'bg-white/92 backdrop-blur-sm'}`}>
        
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link
            to="/"
            className="focus:outline-none focus:ring-4 focus:ring-teal-200 rounded-lg">
            
            <Brand />
          </Link>
          <nav
            className="hidden items-center gap-5 xl:flex"
            aria-label="Primary navigation">
            
            {navigation.map(([label, path]) =>
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
              `text-sm font-semibold transition hover:text-teal-700 ${isActive ? 'text-teal-700' : 'text-slate-600'}`
              }>
              
                {label}
              </NavLink>
            )}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:18005550148"
              className="text-sm font-bold text-slate-700 hover:text-teal-700">
              
              <PhoneIcon className="mr-1 inline" size={14} />
              1-800-555-0148
            </a>
            <ButtonLink to="/assessment" className="px-4 py-2.5">
              Book a ride
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-800 xl:hidden focus:outline-none focus:ring-4 focus:ring-teal-200"
            aria-expanded={open}
            aria-label="Toggle navigation">
            
            {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {open &&
          <motion.nav
            initial={{
              opacity: 0,
              y: -10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -10
            }}
            className="border-t border-slate-200 bg-white px-5 py-5 shadow-lg xl:hidden max-h-[calc(100vh-76px)] overflow-y-auto"
            aria-label="Mobile navigation">
            
              <div className="mx-auto grid max-w-7xl gap-1">
                {navigation.map(([label, path]) =>
              <NavLink
                key={path}
                to={path}
                className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-teal-700">
                
                    {label}
                  </NavLink>
              )}
                <ButtonLink to="/assessment" className="mt-3">
                  Book transportation
                </ButtonLink>
                <a
                  href="tel:18005550148"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:border-teal-600 hover:text-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-200">
                  <PhoneIcon size={15} />
                  Call 1-800-555-0148
                </a>
              </div>
            </motion.nav>
          }
        </AnimatePresence>
      </header>
      <main id="main">{children}</main>
      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.7fr_0.8fr_1fr]">
            <div>
              <Brand light />
              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
                Thoughtful transportation that helps people move through life,
                appointments, and every important moment with confidence.
              </p>
              <div className="mt-6 flex gap-3">
                {[FacebookIcon, InstagramIcon, LinkedinIcon].map(
                  (Icon, index) =>
                  <a
                    key={index}
                    href="#"
                    aria-label="Social media"
                    className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-teal-500 hover:text-teal-300">
                    
                      <Icon size={16} />
                    </a>

                )}
              </div>
            </div>
            <FooterColumn
              title="Explore"
              links={[
              ['Our story', '/about'],
              ['Transportation services', '/services'],
              ['Public transit', '/public-transit'],
              ['Careers', '/careers']]
              } />
            
            <FooterColumn
              title="Support"
              links={[
              ['Request assessment', '/assessment'],
              ['Contact us', '/contact'],
              ['Accessibility', '/assessment'],
              ['Service updates', '/contact']]
              } />
            
            <div>
              <h2 className="text-sm font-bold text-white">Stay informed</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Practical transportation updates, delivered occasionally.
              </p>
              <div className="mt-4 flex rounded-xl bg-white p-1">
                <input
                  aria-label="Email for newsletter"
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-950 outline-none"
                  placeholder="Email address" />
                
                <button
                  className="grid h-9 w-9 place-items-center rounded-lg bg-teal-500 text-slate-950 hover:bg-teal-400"
                  aria-label="Subscribe">
                  
                  <ArrowUpRightIcon size={17} />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row">
            <span>© 2026 Northstar Mobility. Demonstration website.</span>
            <span>Privacy · Terms · Accessibility</span>
          </div>
        </div>
      </footer>
    </div>);

}
function FooterColumn({ title, links }: {title: string;links: string[][];}) {
  return (
    <div>
      <h2 className="text-sm font-bold text-white">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map(([label, path]) =>
        <li key={path}>
            <Link
            className="text-sm text-slate-400 transition hover:text-teal-300"
            to={path}>
            
              {label}
            </Link>
          </li>
        )}
      </ul>
    </div>);

}