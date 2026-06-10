"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

import { fantasyLeagueConfig } from "@/config/fantasy-league.config";
import { isFantasyLeagueWindowOpen } from "@/lib/fantasy-league";
import { isExternalHref } from "@/lib/utils";

const OPEN_DELAY_MS = 0;

export function FantasyLeaguePopup() {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const { popup, sessionStorageKey, leagueCode } = fantasyLeagueConfig;

  const dismiss = useCallback(() => {
    sessionStorage.setItem(sessionStorageKey, "1");
    setOpen(false);
  }, [sessionStorageKey]);

  useEffect(() => {
    if (!isFantasyLeagueWindowOpen()) {
      return;
    }

    if (sessionStorage.getItem(sessionStorageKey)) {
      return;
    }

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, OPEN_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [sessionStorageKey]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [dismiss, open]);

  if (!open) {
    return null;
  }

  const primaryExternal = isExternalHref(popup.primaryCtaHref);
  const secondaryExternal = isExternalHref(popup.secondaryCtaHref);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center sm:p-6"
      onClick={dismiss}
    >
      <div className="absolute inset-0 bg-[rgba(15,23,42,0.82)] backdrop-blur-sm" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative max-h-[calc(100svh-2rem)] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,var(--color-bg-elevated),var(--color-bg))] p-6 shadow-2xl shadow-black/40 sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close fantasy league popup"
          className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/20 hover:text-white"
          onClick={dismiss}
        >
          <X size={18} />
        </button>

        <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
          {popup.eyebrow}
        </p>
        <h2 id={titleId} className="mt-3 pr-10 font-display text-4xl leading-[0.92] text-white">
          {popup.title}
        </h2>
        <p id={descriptionId} className="mt-3 text-base leading-7 text-[var(--color-text-muted)]">
          {popup.body}
        </p>

        <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[var(--color-surface)]">
          <Image
            src={popup.image}
            alt=""
            fill
            unoptimized
            className="object-cover"
            sizes="(min-width: 640px) 512px, calc(100vw - 5rem)"
          />
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[var(--color-accent)]/35 bg-[var(--color-accent-soft)] px-5 py-4 text-center">
          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-white/70">
            League code
          </p>
          <p className="mt-2 font-display text-4xl tracking-[0.12em] text-white">{leagueCode}</p>
        </div>

        <dl className="mt-5 space-y-3 rounded-[1.5rem] border border-white/10 bg-[rgba(15,23,42,0.45)] p-5">
          {popup.details.map((detail) => (
            <div key={detail.label} className="grid gap-1 sm:grid-cols-[10rem_1fr]">
              <dt className="text-xs font-semibold tracking-[0.22em] uppercase text-white/60">
                {detail.label}
              </dt>
              <dd className="text-sm leading-6 text-white">{detail.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-5 space-y-2 rounded-[1.5rem] border border-white/10 bg-[rgba(15,23,42,0.32)] p-5">
          {popup.tips.map((tip) => (
            <li
              key={tip}
              className="flex gap-3 text-sm leading-6 text-[var(--color-text-muted)]"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
              />
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href={popup.primaryCtaHref}
            target={primaryExternal ? "_blank" : undefined}
            rel={primaryExternal ? "noreferrer" : undefined}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-center text-sm font-semibold tracking-[0.18em] uppercase text-white transition hover:bg-[var(--color-accent-strong)]"
          >
            {popup.primaryCtaLabel}
          </Link>
          <Link
            href={popup.secondaryCtaHref}
            target={secondaryExternal ? "_blank" : undefined}
            rel={secondaryExternal ? "noreferrer" : undefined}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-center text-sm font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-strong)] hover:text-white"
            onClick={dismiss}
          >
            {popup.secondaryCtaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
