"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { LinkButton } from "@/components/link-button";
import type { HeroSlide } from "@/lib/types";

type HeroCarouselProps = {
  slides: HeroSlide[];
};

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const safeSlides = slides.filter(Boolean);
  const activeSlide =
    safeSlides.find((slide) => slide.id === "evaluations") ?? safeSlides[0];

  if (safeSlides.length === 0) {
    return null;
  }

  return (
    <section
      className="relative isolate overflow-hidden border-b border-white/10 bg-[var(--color-bg)] pt-28 sm:pt-32"
      aria-label="Player evaluations"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-accent-glow),transparent_28%),radial-gradient(circle_at_bottom_right,var(--color-accent-soft),transparent_36%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,var(--color-surface-strong),rgba(255,255,255,0.02))] p-5 sm:p-8 lg:p-10">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-sm font-semibold uppercase tracking-[0.26em] text-white/60"
              >
                Blythewood Soccer Club
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-4 text-xs font-semibold tracking-[0.34em] uppercase text-[var(--color-accent)]"
              >
                {activeSlide.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="mt-4 max-w-4xl font-display text-4xl leading-[0.92] text-white sm:text-6xl lg:text-7xl"
              >
                {activeSlide.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg"
              >
                {activeSlide.body}
              </motion.p>

              {activeSlide.details?.length ? (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18 }}
                  className="mt-8 space-y-3"
                >
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
                </motion.div>
              ) : null}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="mt-8"
              >
                <LinkButton href={activeSlide.ctaHref} className="w-full sm:w-auto">
                  {activeSlide.ctaLabel}
                </LinkButton>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-surface)]"
          >
            <div className="relative aspect-[5/4] sm:aspect-[16/10] lg:aspect-[5/4]">
              <Image
                src={activeSlide.image}
                alt="Blythewood Soccer Club player evaluations graphic"
                fill
                priority
                unoptimized
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
