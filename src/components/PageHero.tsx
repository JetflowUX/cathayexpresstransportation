import React from 'react';
import { motion } from 'framer-motion';
import { ButtonLink } from './Ui';
type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  children?: React.ReactNode;
};
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children
}: PageHeroProps) {
  return (
    <section className="overflow-hidden bg-brand-navy pt-[76px]">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
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
          className="px-5 py-16 sm:px-8 lg:px-8 lg:py-24">
          
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky-300">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-xl text-3xl font-extrabold tracking-[-0.055em] text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
            {description}
          </p>
          {children ||
          <ButtonLink to="/assessment" variant="light" className="mt-8">
              Start a request
            </ButtonLink>
          }
        </motion.div>
        <div className="relative min-h-[300px] lg:min-h-full">
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-80" />
          
          <div className="absolute inset-0 bg-blue-950/20" />
        </div>
      </div>
    </section>);

}