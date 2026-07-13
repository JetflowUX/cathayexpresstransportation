import React, { useState, type FormEvent, type ReactNode } from 'react';
import {
  CheckCircle2Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  SendIcon } from
'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
type ButtonLinkProps = {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
  className?: string;
};
export function ButtonLink({
  to,
  children,
  variant = 'primary',
  className = ''
}: ButtonLinkProps) {
  const variants = {
    primary:
    'bg-blue-700 text-white hover:bg-blue-800 shadow-lg shadow-blue-950/15',
    secondary:
    'border border-slate-300 bg-white text-slate-900 hover:border-teal-600 hover:text-teal-700',
    light: 'bg-white text-blue-900 hover:bg-teal-50'
  };
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition duration-200 focus:outline-none focus:ring-4 focus:ring-teal-300 ${variants[variant]} ${className}`}>
      
      {children}
      <ChevronRightIcon size={16} aria-hidden="true" />
    </Link>);

}
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left'
}: SectionHeadingProps) {
  return (
    <div
      className={
      align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
      }>
      
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.17em] text-teal-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description &&
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      }
    </div>);

}
type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 18
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.18
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}>
      
      {children}
    </motion.div>);

}
type FaqItem = {
  question: string;
  answer: string;
};
export function FaqList({ items }: {items: FaqItem[];}) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item, index) =>
      <div key={item.question}>
          <button
          type="button"
          onClick={() => setOpen(open === index ? -1 : index)}
          className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-teal-300">
          
            <span className="text-sm font-bold text-slate-900">
              {item.question}
            </span>
            <ChevronDownIcon
            className={`shrink-0 text-teal-700 transition-transform duration-200 ${open === index ? 'rotate-180' : ''}`}
            size={18}
            aria-hidden="true" />
          
          </button>
          <AnimatePresence initial={false}>
            {open === index &&
          <motion.div
            initial={{
              height: 0,
              opacity: 0
            }}
            animate={{
              height: 'auto',
              opacity: 1
            }}
            exit={{
              height: 0,
              opacity: 0
            }}
            transition={{
              duration: 0.2
            }}
            className="overflow-hidden">
            
                <p className="px-5 pb-5 text-sm leading-6 text-slate-600">
                  {item.answer}
                </p>
              </motion.div>
          }
          </AnimatePresence>
        </div>
      )}
    </div>);

}
type DemoFormProps = {
  title?: string;
  compact?: boolean;
  fields?: ('name' | 'email' | 'phone' | 'message')[];
  buttonText?: string;
};
export function DemoForm({
  title,
  compact = false,
  fields = ['name', 'email', 'phone', 'message'],
  buttonText = 'Send request'
}: DemoFormProps) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <form
      onSubmit={submit}
      className={`rounded-2xl border border-slate-200 bg-white ${compact ? 'p-5' : 'p-6 sm:p-8'}`}>
      
      {title &&
      <h3 className="text-xl font-extrabold tracking-[-0.03em] text-slate-950">
          {title}
        </h3>
      }
      <AnimatePresence mode="wait">
        {sent ?
        <motion.div
          key="success"
          initial={{
            opacity: 0,
            y: 8
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="mt-5 rounded-xl bg-emerald-50 p-5 text-center">
          
            <CheckCircle2Icon
            className="mx-auto text-emerald-600"
            size={30}
            aria-hidden="true" />
          
            <p className="mt-2 text-sm font-bold text-emerald-900">
              Thank you — we’ll be in touch shortly.
            </p>
            <button
            type="button"
            className="mt-3 text-xs font-bold text-emerald-700 underline underline-offset-4"
            onClick={() => setSent(false)}>
            
              Send another request
            </button>
          </motion.div> :

        <motion.div
          key="form"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          className="mt-5 space-y-4">
          
            {fields.includes('name') &&
          <label className="block text-sm font-semibold text-slate-700">
                Full name
                <input
              required
              className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              placeholder="Your full name" />
            
              </label>
          }
            {fields.includes('email') &&
          <label className="block text-sm font-semibold text-slate-700">
                Email address
                <input
              required
              type="email"
              className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              placeholder="name@email.com" />
            
              </label>
          }
            {fields.includes('phone') &&
          <label className="block text-sm font-semibold text-slate-700">
                Phone number
                <input
              type="tel"
              className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              placeholder="(000) 000-0000" />
            
              </label>
          }
            {fields.includes('message') &&
          <label className="block text-sm font-semibold text-slate-700">
                How can we help?
                <textarea
              required
              rows={compact ? 3 : 4}
              className="mt-1.5 w-full resize-none rounded-xl border border-slate-300 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              placeholder="Tell us about your transportation needs." />
            
              </label>
          }
            <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
            
              <SendIcon size={16} aria-hidden="true" />
              {buttonText}
            </button>
          </motion.div>
        }
      </AnimatePresence>
    </form>);

}