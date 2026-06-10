"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { LinkButton } from "@/components/link-button";
import { contactConfig } from "@/config/contact.config";
import { linksConfig } from "@/config/links.config";
import type { HeroSlide } from "@/lib/types";

const heroSlides: HeroSlide[] = [
  {
    id: "evaluations",
    eyebrow: "Competitive Pathway",
    title: "Player evaluations and team placement that feel clear from day one.",
    body:
      "Use the current evaluation path to connect with Blythewood coaches, meet the program environment, and find the right developmental fit.",
    image: "/images/evaluations-hero.jpg",
    ctaLabel: "View Evaluations",
    ctaHref: linksConfig.evaluations,
    secondaryCtaLabel: "PlayMetrics Login",
    secondaryCtaHref: linksConfig.login,
  },
  {
    id: "academy",
    eyebrow: "Junior Academy",
    title: "A better bridge from recreation to real competitive development.",
    body:
      "U8 to U12 players train in a year-round environment shaped around coaching quality, balanced competition, and long-term growth.",
    image: "/images/select-action.jpg",
    ctaLabel: "Register For Academy",
    ctaHref: linksConfig.academyRegistration,
    secondaryCtaLabel: "Explore Programs",
    secondaryCtaHref: "/programs/junior-academy/",
  },
  {
    id: "recreation",
    eyebrow: "MLS GO Recreation",
    title: "A welcoming local league with pro-level support and a family-first atmosphere.",
    body:
      "Blythewood recreational soccer keeps the game accessible while giving young players a polished seasonal experience.",
    image: "/images/recreation-family.png",
    ctaLabel: "Register For Recreation",
    ctaHref: linksConfig.recreationalRegistration,
    secondaryCtaLabel: "See Current News",
    secondaryCtaHref: "/news/",
  },
];

const newsItems = [
  { title: "Select Season Structure Explained", slug: "select-season-structure-explained", date: "Mar 15", category: "Programs" },
  { title: "MLS GO Spring 2026 Season", slug: "mls-go-spring-2026-season", date: "Mar 10", category: "Season" },
  { title: "Player Evaluations Open May 2026", slug: "player-evaluations-open-may-2026", date: "Mar 8", category: "Evaluations" },
];

const openings = [
  { title: "U10-U12 Academy Coach", description: "Year-round position", applyHref: `mailto:${contactConfig.email}` },
  { title: "Goalkeeper Trainer", description: "Part-time, weekends", applyHref: `mailto:${contactConfig.email}` },
];

const tryoutInfo = {
  date: "May 2026",
  label: "Register for Tryouts",
  href: linksConfig.evaluations,
  ages: "U8 - U8",
};

type Variant = "editorial" | "minimal" | "live-cards";

export default function HeroDemoPage() {
  const [variant, setVariant] = useState<Variant>("editorial");

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 flex flex-wrap items-center justify-center gap-2 border-b border-white/10 bg-[var(--color-bg)]/80 backdrop-blur-lg px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
          Hero Demo:
        </span>
        <button
          onClick={() => setVariant("editorial")}
          className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wider transition ${
            variant === "editorial"
              ? "bg-[var(--color-accent)] text-white"
              : "text-white/50 hover:text-white"
          }`}
        >
          Editorial
        </button>
        <button
          onClick={() => setVariant("minimal")}
          className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wider transition ${
            variant === "minimal"
              ? "bg-[var(--color-accent)] text-white"
              : "text-white/50 hover:text-white"
          }`}
        >
          Minimal
        </button>
        <button
          onClick={() => setVariant("live-cards")}
          className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wider transition ${
            variant === "live-cards"
              ? "bg-[var(--color-accent)] text-white"
              : "text-white/50 hover:text-white"
          }`}
        >
          Live Cards
        </button>
      </nav>
      <div className="pt-14">
        <AnimatePresence mode="wait">
          {variant === "editorial" && <HeroEditorial key="editorial" />}
          {variant === "minimal" && <HeroMinimal key="minimal" />}
          {variant === "live-cards" && <HeroLiveCards key="live-cards" />}
        </AnimatePresence>
      </div>
      <section className="border-t border-white/10 bg-[var(--color-bg)] py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-sm text-white/50">
            This is a demo showing three hero section variants. Each is optimized for mobile with different approaches to displaying tryouts, club news, and openings.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href={linksConfig.evaluations}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[var(--color-accent)] hover:underline"
            >
              Tryouts Link (PlayMetrics) →
            </Link>
            <Link
              href="/news/"
              className="text-sm font-semibold text-[var(--color-accent)] hover:underline"
            >
              News →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroEditorial() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = heroSlides[activeSlide];

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--color-accent-glow),transparent_40%),radial-gradient(ellipse_at_bottom_right,var(--color-accent-soft),transparent_50%)]" />

      <div className="absolute inset-0">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === activeSlide ? 1 : 0 }}
          >
            <Image src={slide.image} alt="" fill unoptimized className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.92)_0%,rgba(15,23,42,0.48)_50%,rgba(15,23,42,0.88)_100%)]" />
          </div>
        ))}
      </div>

      <div className="relative mx-auto min-h-[100svh] max-w-[480px] px-5 pb-8 pt-24 sm:max-w-2xl sm:px-6 sm:pt-28 lg:max-w-6xl lg:px-8 lg:pt-32">
        <div className="grid gap-y-8 lg:grid lg:grid-cols-[1fr_340px] lg:gap-x-12 lg:gap-y-0">
          <div className="flex flex-col">
            <motion.div
              key={`eyebrow-${current.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-block rounded-full border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 px-3 py-1 text-[10px] font-bold tracking-[0.4em] uppercase text-[var(--color-accent)]">
                {current.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              key={`title-${current.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 font-display text-5xl leading-[0.9] text-white sm:text-6xl lg:text-7xl"
            >
              {current.title}
            </motion.h1>

            <motion.p
              key={`body-${current.id}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-base leading-7 text-[var(--color-text-muted)] sm:text-lg"
            >
              {current.body}
            </motion.p>

            <motion.div
              key={`cta-${current.id}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <LinkButton href={current.ctaHref}>{current.ctaLabel}</LinkButton>
              {current.secondaryCtaHref && current.secondaryCtaLabel && (
                <LinkButton href={current.secondaryCtaHref} variant="secondary">
                  {current.secondaryCtaLabel}
                </LinkButton>
              )}
            </motion.div>

            <div className="mt-10 flex items-center gap-2 sm:mt-12">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className="group flex h-2 items-center"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <span
                    className={`h-0.5 rounded-full transition-all duration-500 ${
                      i === activeSlide
                        ? "bg-[var(--color-accent)] w-12"
                        : "w-8 bg-white/30 group-hover:bg-white/50"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 lg:mt-0">
            <div className="rounded-2xl border border-white/10 bg-[var(--color-surface)] p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[var(--color-accent)]">
                  Tryouts
                </span>
                <span className="flex h-2 w-2 animate-pulse rounded-full bg-[var(--color-accent)]" />
              </div>
              <h3 className="mt-2 text-lg font-semibold leading-tight text-white">
                Spring 2026 Evaluations Now Open
              </h3>
              <p className="mt-2 text-xs leading-5 text-[var(--color-text-muted)]">
                U8-U18 age groups. Register through PlayMetrics to secure your spot.
              </p>
              <div className="mt-4">
                <LinkButton href={tryoutInfo.href} className="w-full justify-center text-xs">
                  {tryoutInfo.label}
                </LinkButton>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[var(--color-surface)] p-4 backdrop-blur-sm">
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[var(--color-accent)]">
                Latest News
              </span>
              <div className="mt-3 space-y-3">
                {newsItems.slice(0, 2).map((news) => (
                  <Link
                    key={news.slug}
                    href={`/news/${news.slug}/`}
                    className="group block rounded-xl bg-[var(--color-surface-strong)] p-3 transition hover:bg-white/10"
                  >
                    <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-white/50">
                      {news.category}
                    </span>
                    <p className="mt-1 text-sm font-medium leading-snug text-white group-hover:text-[var(--color-accent)]">
                      {news.title}
                    </p>
                  </Link>
                ))}
              </div>
              <Link
                href="/news/"
                className="mt-3 flex items-center justify-center gap-2 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-white/60 transition hover:text-[var(--color-accent)]"
              >
                View all news <span>→</span>
              </Link>
            </div>

            {openings.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-[var(--color-surface)] p-4 backdrop-blur-sm">
                <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[var(--color-accent)]">
                  Open Positions
                </span>
                <div className="mt-3 space-y-2">
                  {openings.slice(0, 2).map((opening) => (
                    <div
                      key={opening.title}
                      className="flex items-center justify-between rounded-xl bg-[var(--color-surface-strong)] px-3 py-2"
                    >
                      <span className="text-sm font-medium text-white">{opening.title}</span>
                      <span className="text-xs text-[var(--color-text-muted)]">Apply →</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

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

function HeroMinimal() {
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
            <LinkButton href={tryoutInfo.href} className="min-h-12 px-6 text-sm">
              {tryoutInfo.label}
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
            <CountdownTimer targetDate="2026-05-01" label="Tryouts Begin In" />
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

function HeroLiveCards() {
  const [activeTab, setActiveTab] = useState<"tryouts" | "news" | "openings">("tryouts");

  const tabs = [
    { id: "tryouts" as const, label: "Tryouts", count: 1 },
    { id: "news" as const, label: "News", count: newsItems.length },
    { id: "openings" as const, label: "Openings", count: openings.length },
  ];

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--color-accent-glow),transparent_35%),radial-gradient(ellipse_at_bottom_right,var(--color-accent-soft),transparent_45%)]" />

      <div className="absolute inset-0">
        <Image
          src={heroSlides[0]?.image ?? "/images/evaluations-hero.jpg"}
          alt=""
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(15,23,42,0.9)_0%,rgba(15,23,42,0.5)_60%,rgba(15,23,42,0.92)_100%)]" />
      </div>

      <div className="relative mx-auto min-h-[100svh] max-w-3xl px-4 pb-6 pt-20 sm:max-w-4xl sm:px-5 sm:pt-24 lg:max-w-6xl lg:px-6 lg:pt-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-x-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.4em] uppercase text-[var(--color-accent)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
                Live Updates
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-6 font-display text-5xl leading-[0.88] text-white sm:text-6xl lg:text-7xl"
            >
              Blythewood
              <br />
              <span className="text-[var(--color-accent)]">Soccer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 max-w-lg text-base leading-7 text-[var(--color-text-muted)]"
            >
              Your connection to tryouts, team announcements, and club updates
              — all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <LinkButton href={tryoutInfo.href}>Register for Tryouts</LinkButton>
              <LinkButton href="https://playmetrics.com/login" variant="secondary">
                Coach/Parent Login
              </LinkButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 lg:mt-0"
          >
            <div className="rounded-2xl border border-white/15 bg-[var(--color-surface)] backdrop-blur-xl">
              <div className="flex items-center border-b border-white/10">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-1 items-center justify-center gap-2 px-3 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition ${
                      activeTab === tab.id
                        ? "border-b-2 border-[var(--color-accent)] bg-[var(--color-surface-strong)] text-white"
                        : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    {tab.label}
                    <span
                      className={`flex h-5 min-w-[20px] items-center justify-center rounded-full text-[10px] ${
                        activeTab === tab.id
                          ? "bg-[var(--color-accent)] text-white"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="p-4">
                <AnimatePresence mode="wait">
                  {activeTab === "tryouts" && (
                    <motion.div
                      key="tryouts"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="flex items-start justify-between rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 p-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-accent)]" />
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-accent)]">
                              Accepting Registrations
                            </span>
                          </div>
                          <h3 className="mt-2 text-lg font-semibold text-white">
                            Spring 2026 Evaluations
                          </h3>
                          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                            {tryoutInfo.date} • {tryoutInfo.ages}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-xl bg-[var(--color-surface-strong)] p-4">
                        <h4 className="text-sm font-semibold text-white">What to expect</h4>
                        <ul className="mt-2 space-y-1 text-xs text-[var(--color-text-muted)]">
                          <li className="flex items-center gap-2">
                            <span className="text-[var(--color-accent)]">✓</span>
                            Skill assessment by age group
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-[var(--color-accent)]">✓</span>
                            Small-sided game evaluation
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-[var(--color-accent)]">✓</span>
                            Same-day placement notification
                          </li>
                        </ul>
                      </div>

                      <LinkButton href={tryoutInfo.href} className="w-full justify-center">
                        {tryoutInfo.label}
                      </LinkButton>
                    </motion.div>
                  )}

                  {activeTab === "news" && (
                    <motion.div
                      key="news"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      {newsItems.slice(0, 3).map((news) => (
                        <Link
                          key={news.slug}
                          href={`/news/${news.slug}/`}
                          className="group block rounded-xl border border-white/5 bg-[var(--color-surface-strong)] p-4 transition hover:border-[var(--color-accent)]/30"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-white/40">
                                {news.date}
                              </span>
                              <h4 className="mt-1 text-sm font-semibold leading-snug text-white group-hover:text-[var(--color-accent)]">
                                {news.title}
                              </h4>
                            </div>
                            <span className="ml-3 text-lg text-white/30 group-hover:text-[var(--color-accent)]">
                              →
                            </span>
                          </div>
                        </Link>
                      ))}
                      <Link
                        href="/news/"
                        className="flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-white/50 transition hover:text-white"
                      >
                        View all news
                      </Link>
                    </motion.div>
                  )}

                  {activeTab === "openings" && (
                    <motion.div
                      key="openings"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      {openings.length === 0 ? (
                        <div className="py-8 text-center">
                          <p className="text-sm text-white/50">
                            No current openings. Check back soon!
                          </p>
                        </div>
                      ) : (
                        openings.slice(0, 3).map((opening) => (
                          <a
                            key={opening.title}
                            href={opening.applyHref}
                            className="group flex items-center justify-between rounded-xl border border-white/5 bg-[var(--color-surface-strong)] p-4 transition hover:border-[var(--color-accent)]/30"
                          >
                            <div>
                              <h4 className="text-sm font-semibold text-white">
                                {opening.title}
                              </h4>
                              <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                                {opening.description}
                              </p>
                            </div>
                            <span className="text-sm font-medium text-[var(--color-accent)] opacity-0 transition group-hover:opacity-100">
                              Apply
                            </span>
                          </a>
                        ))
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
