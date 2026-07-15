"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { CtaButton } from "@/components/cta-button";
import { ContactFormDialog } from "@/components/contact-form-dialog";
import { contactConfig } from "@/config/contact.config";
import type { HeroSlide } from "@/lib/types";

type HeroCarouselProps = {
  slides: HeroSlide[];
};

const AUTO_ADVANCE_MS = 7000;

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const safeSlides = slides.filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);
  const [desktopCarousel, setDesktopCarousel] = useState(false);
  const [contactSubject, setContactSubject] = useState<string>(contactConfig.defaultSubject);
  const activeSlide = safeSlides[activeIndex] ?? safeSlides[0];

  function handleContactRequest(subject?: string) {
    setContactSubject(subject ?? contactConfig.defaultSubject);
    setContactOpen(true);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const syncDesktopCarousel = () => setDesktopCarousel(mediaQuery.matches);

    syncDesktopCarousel();
    mediaQuery.addEventListener("change", syncDesktopCarousel);

    return () => mediaQuery.removeEventListener("change", syncDesktopCarousel);
  }, []);

  useEffect(() => {
    if (safeSlides.length <= 1 || contactOpen || !desktopCarousel) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeSlides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(interval);
  }, [contactOpen, desktopCarousel, safeSlides.length]);

  if (!activeSlide) {
    return null;
  }

  return (
    <section
      id="club-hero"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[var(--color-bg)] pt-[4.25rem] lg:pt-32"
      aria-label="Club hero"
      aria-roledescription="carousel"
    >
      <ContactFormDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        subject={contactSubject}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-accent-glow),transparent_28%),radial-gradient(circle_at_bottom_right,var(--color-accent-soft),transparent_36%)]" />

      <div className="relative lg:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] min-h-72"
          >
            <Image
              src={activeSlide.image}
              alt=""
              fill
              priority={activeIndex === 0}
              unoptimized
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_16%,rgba(15,23,42,0.94)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-8 sm:pb-8">
              <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[var(--color-accent)]">
                {activeSlide.eyebrow}
              </p>
              <h1 className="mt-2 max-w-xl font-display text-[2.55rem] leading-[0.9] text-white sm:text-5xl">
                {activeSlide.title}
              </h1>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="px-5 pt-5 pb-7 sm:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
            >
              <p className="text-[15px] leading-6 text-[var(--color-text-muted)]">
                {activeSlide.body}
              </p>

              <CtaButton
                href={activeSlide.ctaHref}
                subject={activeSlide.contactSubject}
                onContactRequest={handleContactRequest}
                className="mt-5 w-full active:scale-[0.98]"
              >
                {activeSlide.ctaLabel}
              </CtaButton>

              {activeSlide.details?.length ||
              (activeSlide.secondaryCtaHref && activeSlide.secondaryCtaLabel) ? (
                <details className="group mt-3 border-y border-white/10">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between py-3 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                    <span>{activeSlide.id === "recreation" ? "Season details" : "More details"}</span>
                    <span className="text-lg font-normal text-[var(--color-accent)] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  {activeSlide.details?.length ? (
                    <dl className="divide-y divide-white/10 border-t border-white/10">
                      {activeSlide.details.map((detail) => (
                        <div key={detail.label} className="grid gap-1 py-3">
                          <dt className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--color-accent)]">
                            {detail.label}
                          </dt>
                          <dd className="text-sm leading-6 text-white">{detail.value}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                  {activeSlide.secondaryCtaHref && activeSlide.secondaryCtaLabel ? (
                    <CtaButton
                      href={activeSlide.secondaryCtaHref}
                      variant="ghost"
                      className="mb-4 w-full active:scale-[0.98]"
                    >
                      {activeSlide.secondaryCtaLabel}
                    </CtaButton>
                  ) : null}
                </details>
              ) : null}
            </motion.div>
          </AnimatePresence>

          {safeSlides.length > 1 ? (
            <div className="mt-4 flex items-center gap-1" aria-label="Choose featured update">
              {safeSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Show ${slide.eyebrow}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className="group flex min-h-11 flex-1 items-center justify-center active:scale-[0.98]"
                  onClick={() => setActiveIndex(index)}
                >
                  <span
                    className={`h-1 w-full rounded-full transition duration-300 ${
                      index === activeIndex
                        ? "bg-[var(--color-accent)]"
                        : "bg-white/20 group-hover:bg-white/40"
                    }`}
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="relative mx-auto hidden max-w-7xl px-6 pb-16 sm:px-8 lg:block lg:px-12">
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
                      onContactRequest={handleContactRequest}
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
                      className="group flex min-h-11 items-center"
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
                  sizes="(min-width: 1024px) 55vw, 100vw"
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
