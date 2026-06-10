"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { X } from "lucide-react";

import { contactConfig } from "@/config/contact.config";
import { cn } from "@/lib/utils";

type ContactFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  subject?: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const programOptions = [
  "Junior Academy",
  "Select",
  "Recreational",
  "Not sure yet",
] as const;

const inputClassName =
  "w-full rounded-2xl border border-white/10 bg-[rgba(15,23,42,0.72)] px-4 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[var(--color-accent)]";

export function ContactFormDialog({
  open,
  onOpenChange,
  subject = contactConfig.defaultSubject,
}: ContactFormDialogProps) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: programOptions[3] as (typeof programOptions)[number],
    message: "",
  });

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
    }
  }, [open]);

  if (!open) {
    return null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${contactConfig.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone || "Not provided",
            program: form.program,
            message: form.message,
            _subject: subject,
            _template: "table",
            _captcha: "false",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        program: programOptions[3],
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center sm:p-6"
      onClick={() => onOpenChange(false)}
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
          aria-label="Close contact form"
          className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/20 hover:text-white"
          onClick={() => onOpenChange(false)}
        >
          <X size={18} />
        </button>

        <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
          Contact the club
        </p>
        <h2 id={titleId} className="mt-3 pr-10 font-display text-4xl leading-[0.92] text-white">
          Send a message
        </h2>
        <p id={descriptionId} className="mt-3 text-base leading-7 text-[var(--color-text-muted)]">
          Share your details and we will follow up about program placement and next steps.
        </p>

        {status === "success" ? (
          <div className="mt-8 rounded-[1.5rem] border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] p-5">
            <p className="text-lg font-semibold text-white">Message sent</p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
              Thanks for reaching out. The club will follow up at the email address you provided.
            </p>
            <button
              type="button"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold tracking-[0.18em] uppercase text-white transition hover:bg-[var(--color-accent-strong)]"
              onClick={() => onOpenChange(false)}
            >
              Close
            </button>
          </div>
        ) : (
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block space-y-2 sm:col-span-2">
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
                  Your name
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, name: event.target.value }))
                  }
                  className={inputClassName}
                  placeholder="Parent or guardian name"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, email: event.target.value }))
                  }
                  className={inputClassName}
                  placeholder="you@example.com"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
                  Phone
                </span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, phone: event.target.value }))
                  }
                  className={inputClassName}
                  placeholder="Optional"
                />
              </label>
            </div>

            <label className="block space-y-2">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
                Program interest
              </span>
              <select
                name="program"
                value={form.program}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    program: event.target.value as (typeof programOptions)[number],
                  }))
                }
                className={cn(inputClassName, "appearance-none")}
              >
                {programOptions.map((option) => (
                  <option key={option} value={option} className="bg-[var(--color-bg)]">
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="block space-y-2">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={4}
                value={form.message}
                onChange={(event) =>
                  setForm((current) => ({ ...current, message: event.target.value }))
                }
                className={cn(inputClassName, "resize-y")}
                placeholder="Tell us about your player, age group, and what you are looking for."
              />
            </label>

            {status === "error" ? (
              <p className="text-sm text-red-300">
                Something went wrong. Please try again or email{" "}
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="underline underline-offset-2"
                >
                  {contactConfig.email}
                </a>
                .
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold tracking-[0.18em] uppercase text-white transition hover:bg-[var(--color-accent-strong)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
