"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { linksConfig } from "@/config/links.config";
import { isRegistrationWindowOpen } from "@/lib/registration";

export function MobileRegistrationBar() {
  const [active] = useState(() => isRegistrationWindowOpen());
  const [heroVisible, setHeroVisible] = useState(true);
  const [finalCtaVisible, setFinalCtaVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("club-hero");
    const finalCta = document.getElementById("registration-cta");

    const heroObserver = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    const finalCtaObserver = new IntersectionObserver(
      ([entry]) => setFinalCtaVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );

    if (hero) heroObserver.observe(hero);
    if (finalCta) finalCtaObserver.observe(finalCta);

    return () => {
      heroObserver.disconnect();
      finalCtaObserver.disconnect();
    };
  }, []);

  if (!active || heroVisible || finalCtaVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Registration shortcut"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[rgba(15,23,42,0.94)] px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-16px_40px_rgba(15,23,42,0.32)] backdrop-blur-xl lg:hidden"
    >
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--color-accent)]">
            Fall registration open
          </p>
          <p className="mt-0.5 truncate text-sm text-white">June 11–Aug 10 · $110</p>
        </div>
        <Link
          href={linksConfig.recreationalRegistration}
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 text-xs font-semibold tracking-[0.16em] uppercase text-white transition active:scale-[0.98]"
          target="_blank"
          rel="noreferrer"
        >
          Register
        </Link>
      </div>
    </aside>
  );
}
