"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

import { registrationConfig } from "@/config/registration.config";
import { isRegistrationWindowOpen } from "@/lib/registration";
import { isExternalHref } from "@/lib/utils";

const OPEN_DELAY_MS = 800;

export function RegistrationPopup() {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const { popup, sessionStorageKey } = registrationConfig;

  function dismiss() {
    sessionStorage.setItem(sessionStorageKey, "1");
    setOpen(false);
  }

  useEffect(() => {
    if (!isRegistrationWindowOpen()) {
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
  }, [open]);

  if (!open) {
    return null;
  }

  const primaryExternal = isExternalHref(popup.primaryCtaHref);

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
          aria-label="Close registration popup"
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

        <dl className="mt-6 space-y-3 rounded-[1.5rem] border border-white/10 bg-[rgba(15,23,42,0.45)] p-5">
          {popup.details.map((detail) => (
            <div key={detail.label} className="grid gap-1 sm:grid-cols-[10rem_1fr]">
              <dt className="text-xs font-semibold tracking-[0.22em] uppercase text-white/60">
                {detail.label}
              </dt>
              <dd className="text-sm leading-6 text-white">{detail.value}</dd>
            </div>
          ))}
        </dl>

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
