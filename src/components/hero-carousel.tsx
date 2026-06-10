"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { CtaButton } from "@/components/cta-button";
import type { HeroSlide } from "@/lib/types";

type HeroCarouselProps = {
  slides: HeroSlide[];
};

const AUTO_ADVANCE_MS = 7000;

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const safeSlides = slides.filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = safeSlides[activeIndex] ?? safeSlides[0];

  useEffect(() => {
    if (safeSlides.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeSlides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(interval);
  }, [safeSlides.length]);

  if (!activeSlide) {
    return null;
  }

  return (
    <section
      className="relative isolate overflow-hidden border-b border-white/10 bg-[var(--color-bg)] pt-28 sm:pt-32"
      aria-label="Club hero"
      aria-roledescription="carousel"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-accent-glow),transparent_28%),radial-gradient(circle_at_bottom_right,var(--color-accent-soft),transparent_36%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,var(--color-surface-strong),rgba(255,255,255,0.02))] p-5 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/60">
                Blythewood Soccer Club
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="mt-4 text-xs font-semibold tracking-[0.34em] uppercase text-[var(--color-accent)]">
                    {activeSlide.eyebrow}
                  </p>
                  <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                    {activeSlide.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
                    {activeSlide.body}
                  </p>

                  {activeSlide.details?.length ? (
                    <div className="mt-8 space-y-3">
                      {activeSlide.details.map((detail) => (
                        <div
                          key={detail.label}
                          className="flex flex-col gap-1 rounded-[1.5rem] border border-white/10 bg-[var(--color-surface)] px-4 py-4 sm:flex-row sm:items-center sm:gap-3 sm:px-5"
                        >
                          <p className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[var(--color-accent)] sm:min-w-16">
                            {detail.label}
                          </p>
                          <p className="text-base leading-6 text-white">{detail.value}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-8 flex flex-wrap gap-3">
                    <CtaButton
                      href={activeSlide.ctaHref}
                      subject={activeSlide.contactSubject}
                      className="w-full sm:w-auto"
                    >
                      {activeSlide.ctaLabel}
                    </CtaButton>
                    {activeSlide.secondaryCtaHref && activeSlide.secondaryCtaLabel ? (
                      <CtaButton
                        href={activeSlide.secondaryCtaHref}
                        variant="secondary"
                        className="w-full sm:w-auto"
                      >
                        {activeSlide.secondaryCtaLabel}
                      </CtaButton>
                    ) : null}
                  </div>
                </motion.div>
              </AnimatePresence>

              {safeSlides.length > 1 ? (
                <div className="mt-10 flex items-center gap-2">
                  {safeSlides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      aria-label={`Show ${slide.eyebrow}`}
                      aria-current={index === activeIndex ? "true" : undefined}
                      className="group flex h-2 items-center"
                      onClick={() => setActiveIndex(index)}
                    >
                      <span
                        className={`h-0.5 rounded-full transition-all duration-500 ${
                          index === activeIndex
                            ? "w-12 bg-[var(--color-accent)]"
                            : "w-8 bg-white/30 group-hover:bg-white/50"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-surface)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="relative aspect-[5/4] sm:aspect-[16/10] lg:aspect-[5/4]"
              >
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  fill
                  priority={activeIndex === 0}
                  unoptimized
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
