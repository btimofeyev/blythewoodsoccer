"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { LinkButton } from "@/components/link-button";
import type { HeroSlide } from "@/lib/types";

type HeroLiveCardsProps = {
  slides: HeroSlide[];
  newsItems: { title: string; slug: string; date: string; excerpt: string }[];
  openings: { title: string; description: string; applyHref: string }[];
  tryoutInfo: { date: string; label: string; href: string; ages: string };
};

type TabType = "tryouts" | "news" | "openings";

export function HeroLiveCards({
  slides,
  newsItems,
  openings,
  tryoutInfo,
}: HeroLiveCardsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("tryouts");

  const tabs: { id: TabType; label: string; count: number }[] = [
    { id: "tryouts", label: "Tryouts", count: 1 },
    { id: "news", label: "News", count: newsItems.length },
    { id: "openings", label: "Openings", count: openings.length },
  ];

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--color-accent-glow),transparent_35%),radial-gradient(ellipse_at_bottom_right,var(--color-accent-soft),transparent_45%)]" />

      <div className="absolute inset-0">
        <Image
          src={slides[0]?.image ?? "/images/evaluations-hero.jpg"}
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
              <LinkButton href={tryoutInfo.href}>
                Register for Tryouts
              </LinkButton>
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
                        <h4 className="text-sm font-semibold text-white">
                          What to expect
                        </h4>
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
                              <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)] line-clamp-2">
                                {news.excerpt}
                              </p>
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
