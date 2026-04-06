import Link from "next/link";

import { cn, isExternalHref } from "@/lib/utils";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const variants = {
  primary:
    "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-strong)]",
  secondary:
    "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-strong)] hover:text-white",
  ghost:
    "border border-[var(--color-border)] bg-transparent text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-white",
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className,
  onClick,
}: LinkButtonProps) {
  const external = isExternalHref(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-center text-sm leading-tight font-semibold tracking-[0.18em] uppercase transition duration-200 sm:whitespace-nowrap",
        variants[variant],
        className,
      )}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
