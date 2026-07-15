"use client";

import Link from "next/link";

import { CtaButton } from "@/components/cta-button";
import { isContactFormHref } from "@/config/contact.config";
import { cn, isExternalHref } from "@/lib/utils";

type QuickLink = {
  label: string;
  href: string;
};

type QuickLinksListProps = {
  items: QuickLink[];
  className?: string;
};

export function QuickLinksList({ items, className }: QuickLinksListProps) {
  return (
    <ul className={cn("mt-4 text-sm text-[var(--color-text-muted)]", className)}>
      {items.map((item) => (
        <li key={item.href}>
          {isContactFormHref(item.href) ? (
            <CtaButton
              href={item.href}
              variant="ghost"
              className="h-auto min-h-11 rounded-none border-0 bg-transparent p-0 text-sm font-normal normal-case tracking-normal text-[var(--color-text-muted)] hover:bg-transparent hover:text-white"
            >
              {item.label}
            </CtaButton>
          ) : (
            <Link
              href={item.href}
              className="flex min-h-11 items-center hover:text-white"
              target={isExternalHref(item.href) ? "_blank" : undefined}
              rel={isExternalHref(item.href) ? "noreferrer" : undefined}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
