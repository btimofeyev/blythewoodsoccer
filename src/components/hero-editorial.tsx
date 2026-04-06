"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { LinkButton } from "@/components/link-button";
import type { HeroSlide } from "@/lib/types";

type HeroEditorialProps = {
  slides: HeroSlide[];
  newsItems: { title: string; slug: string; category: string }[];
  openings: { title: string; description: string }[];
};

const TRYOUT_CTA = {
  label: "Register for Tryouts",
  href: "https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS0xNDE1LTE3Nzg5ODI3OTh8TWsvY1o3MVpmdVV6Zko4N1RvZWRuWGlsak5HQk5DVHh3RDAvTld2UTh0Zz0=",
};

export function HeroEditorial({ slides, newsItems, openings }: HeroEditorialProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const current = slides[activeSlide];

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--color-accent-glow),transparent_40%),radial-gradient(ellipse_at_bottom_right,var(--color-accent-soft),transparent_50%)]" />

      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === activeSlide ? 1 : 0 }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              unoptimized
              className="object-cover"
            />
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
              <LinkButton href={current.ctaHref}>
                {current.ctaLabel}
              </LinkButton>
              {current.secondaryCtaHref && current.secondaryCtaLabel && (
                <LinkButton href={current.secondaryCtaHref} variant="secondary">
                  {current.secondaryCtaLabel}
                </LinkButton>
              )}
            </motion.div>

            <div className="mt-10 flex items-center gap-2 sm:mt-12">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className="group flex h-2 items-center"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <span
                    className={`h-0.5 w-8 rounded-full transition-all duration-500 ${
                      i === activeSlide
                        ? "bg-[var(--color-accent)] w-12"
                        : "bg-white/30 group-hover:bg-white/50"
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
                <LinkButton href={TRYOUT_CTA.href} className="w-full justify-center text-xs">
                  {TRYOUT_CTA.label}
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
