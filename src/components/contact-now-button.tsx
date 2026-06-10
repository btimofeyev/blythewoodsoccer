"use client";

import { useState } from "react";

import { ContactFormDialog } from "@/components/contact-form-dialog";
import { cn } from "@/lib/utils";

type ContactNowButtonProps = {
  children: React.ReactNode;
  className?: string;
  subject?: string;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const variants = {
  primary:
    "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-strong)]",
  secondary:
    "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-strong)] hover:text-white",
  ghost:
    "border border-[var(--color-border)] bg-transparent text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-white",
};

export function ContactNowButton({
  children,
  className,
  subject,
  variant = "primary",
  onClick,
}: ContactNowButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={cn(
          "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-center text-sm leading-tight font-semibold tracking-[0.18em] uppercase transition duration-200 sm:whitespace-nowrap",
          variants[variant],
          className,
        )}
        onClick={(event) => {
          onClick?.(event);
          setOpen(true);
        }}
      >
        {children}
      </button>
      <ContactFormDialog open={open} onOpenChange={setOpen} subject={subject} />
    </>
  );
}
