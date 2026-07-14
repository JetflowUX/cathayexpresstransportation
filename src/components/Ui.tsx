import React, { useState, useEffect, useRef, type FormEvent, type ReactNode } from "react";
import { animate, stagger } from "animejs";
import {
  CheckCircle2Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  SendIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
type ButtonLinkProps = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
};
export function ButtonLink({
  to,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const variants = {
    primary: "ui-button ui-button-primary",
    secondary: "ui-button ui-button-secondary",
    light: "ui-button ui-button-light",
    ghost: "ui-button ui-button-ghost",
  };
  return (
    <Link to={to} className={`${variants[variant]} ${className}`}>
      {children}
      <ChevronRightIcon size={16} aria-hidden="true" />
    </Link>
  );
}
type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};
export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const variants = {
    primary: "ui-button ui-button-primary",
    secondary: "ui-button ui-button-secondary",
    light: "ui-button ui-button-light",
    ghost: "ui-button ui-button-ghost",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
type SectionHeadingProps = {
  title: string;
  eyebrow: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};
export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <p
        className={`mb-3 text-xs font-black uppercase tracking-[0.17em] ${light ? "text-sky-200" : "text-brand-blue"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl ${light ? "text-white" : "text-slate-950"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-7 ${light ? "text-slate-200" : "text-slate-700"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
type FaqItem = {
  question: string;
  answer: string;
};
export function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="ui-card divide-y divide-slate-200 overflow-hidden">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-brand-blue/20"
          >
            <span className="text-sm font-extrabold text-slate-950">
              {item.question}
            </span>
            <ChevronDownIcon
              className={`shrink-0 text-brand-blue transition-transform duration-200 ${open === index ? "rotate-180" : ""}`}
              size={18}
              aria-hidden="true"
            />
          </button>
          <AnimatePresence initial={false}>
            {open === index && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm leading-6 text-slate-700">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
type DemoFormProps = {
  title?: string;
  compact?: boolean;
  fields?: ("name" | "email" | "phone" | "message")[];
  buttonText?: string;
};
export function DemoForm({
  title,
  compact = false,
  fields = ["name", "email", "phone", "message"],
  buttonText = "Send request",
}: DemoFormProps) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <form
      onSubmit={submit}
      className={`ui-card ${compact ? "p-5" : "p-6 sm:p-8"}`}
    >
      {title && (
        <h3 className="text-xl font-extrabold tracking-[-0.03em] text-slate-950">
          {title}
        </h3>
      )}
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center"
          >
            <CheckCircle2Icon
              className="mx-auto text-emerald-600"
              size={30}
              aria-hidden="true"
            />

            <p className="mt-2 text-sm font-bold text-emerald-900">
              Thank you — we’ll be in touch shortly.
            </p>
            <button
              type="button"
              className="mt-3 text-xs font-bold text-emerald-700 underline underline-offset-4"
              onClick={() => setSent(false)}
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="mt-5 space-y-4"
          >
            {fields.includes("name") && (
              <label className="block text-sm font-semibold text-slate-700">
                Full name
                <input
                  required
                  className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                  placeholder="Your full name"
                />
              </label>
            )}
            {fields.includes("email") && (
              <label className="block text-sm font-semibold text-slate-700">
                Email address
                <input
                  required
                  type="email"
                  className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                  placeholder="name@email.com"
                />
              </label>
            )}
            {fields.includes("phone") && (
              <label className="block text-sm font-semibold text-slate-700">
                Phone number
                <input
                  type="tel"
                  className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                  placeholder="(000) 000-0000"
                />
              </label>
            )}
            {fields.includes("message") && (
              <label className="block text-sm font-semibold text-slate-700">
                How can we help?
                <textarea
                  required
                  rows={compact ? 3 : 4}
                  className="mt-1.5 w-full resize-none rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
                  placeholder="Tell us about your transportation needs."
                />
              </label>
            )}
            <button
              type="submit"
              className="ui-button ui-button-primary w-full"
            >
              <SendIcon size={16} aria-hidden="true" />
              {buttonText}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

type AnimeScrollRevealProps = {
  children: ReactNode;
  selector: string;
  delay?: number;
  translateY?: [number, number];
  translateX?: [number, number];
  scale?: [number, number];
  duration?: number;
  easing?: string;
  className?: string;
};

export function AnimeScrollReveal({
  children,
  selector,
  delay = 60,
  translateY = [30, 0],
  translateX = [0, 0],
  scale = [0.98, 1],
  duration = 800,
  easing = "easeOutQuad",
  className = "",
}: AnimeScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = containerRef.current?.querySelectorAll(selector);
    if (targets && targets.length > 0) {
      animate(targets, {
        opacity: [0, 1],
        translateY,
        translateX,
        scale,
        delay: stagger(delay),
        duration,
        easing,
      });
    }
  }, [selector, delay, translateY, translateX, scale, duration, easing]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

export function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animation: anime.AnimeInstance | null = null;
    const particles: { x: number; y: number; size: number; alpha: number; speedY: number; speedX: number }[] = [];
    const particleCount = 25;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 600;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.3 + 0.1,
        speedY: -(Math.random() * 0.3 + 0.08),
        speedX: (Math.random() * 0.2 - 0.1),
      });
    }

    // Render loop using anime.js
    const particleObj = { progress: 0 };
    animation = animate(particleObj, {
      progress: [0, 100],
      duration: 1000,
      loop: true,
      easing: "linear",
      onRender: () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
          p.y += p.speedY;
          p.x += p.speedX;

          // Reset particle if it leaves screen
          if (p.y < 0) {
            p.y = canvas.height;
            p.x = Math.random() * canvas.width;
          }
          if (p.x < 0 || p.x > canvas.width) {
            p.x = Math.random() * canvas.width;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(23, 180, 157, ${p.alpha})`; // #17B49D teal-green
          ctx.fill();
        });
      }
    });

    return () => {
      window.removeEventListener("resize", resize);
      if (animation) animation.pause();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}
