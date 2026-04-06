"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { LinkButton } from "@/components/link-button";

type HeroMinimalProps = {
  tryoutDate: string;
  tryoutLabel: string;
  tryoutHref: string;
  newsItems: { title: string; slug: string; date: string }[];
};

function CountdownTimer({ targetDate, label }: { targetDate: string; label: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const update = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hrs" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className="space-y-3">
      <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[var(--color-accent)]">
        {label}
      </span>
      <div className="flex gap-3">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex min-w-[52px] flex-col items-center rounded-xl border border-white/10 bg-[var(--color-surface)] p-2"
          >
            <span className="font-display text-2xl leading-none text-white sm:text-3xl">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="mt-1 text-[9px] font-medium tracking-[0.15em] uppercase text-white/50">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroMinimal({
  tryoutDate,
  tryoutLabel,
  tryoutHref,
  newsItems,
}: HeroMinimalProps) {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-accent-glow),transparent_50%),radial-gradient(ellipse_at_bottom_right,var(--color-accent-soft),transparent_50%)]" />

      <div className="absolute inset-0">
        <Image
          src="/images/evaluations-hero.jpg"
          alt=""
          fill
          unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.7)_0%,rgba(15,23,42,0.92)_100%)]" />
      </div>

      <div className="relative mx-auto min-h-[100svh] max-w-3xl px-5 pb-8 pt-24 sm:px-6 sm:pt-28 lg:pt-32">
        <div className="grid gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/15 px-4 py-1.5 text-[11px] font-bold tracking-[0.38em] uppercase text-[var(--color-accent)]">
              Player Evaluations Open
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-6xl leading-[0.88] text-white sm:text-7xl lg:text-8xl"
          >
            Find Your
            <br />
            <span className="text-[var(--color-accent)]">Team</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-xl text-lg leading-7 text-[var(--color-text-muted)]"
          >
            Spring 2026 tryouts are open for all age groups. Secure your spot and
            join a program built around development, competition, and community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="flex flex-wrap gap-4"
          >
            <LinkButton href={tryoutHref} className="min-h-12 px-6 text-sm">
              {tryoutLabel}
            </LinkButton>
            <LinkButton href="https://playmetrics.com/login" variant="secondary" className="min-h-12 px-6 text-sm">
              Player Login
            </LinkButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4"
          >
            <CountdownTimer targetDate={tryoutDate} label="Tryouts Begin In" />
          </motion.div>

          {newsItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="space-y-3 pt-4"
            >
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-white/50">
                Recent Updates
              </span>
              <div className="flex flex-wrap gap-3">
                {newsItems.slice(0, 3).map((news) => (
                  <a
                    key={news.slug}
                    href={`/news/${news.slug}/`}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-[var(--color-accent)] hover:text-white"
                  >
                    <span className="line-clamp-1 max-w-[180px]">{news.title}</span>
                    <span className="text-[var(--color-accent)]">→</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
