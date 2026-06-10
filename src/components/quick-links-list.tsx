"use client";

import Link from "next/link";

import { CtaButton } from "@/components/cta-button";
import { isContactFormHref } from "@/config/contact.config";
import { isExternalHref } from "@/lib/utils";

type QuickLink = {
  label: string;
  href: string;
};

type QuickLinksListProps = {
  items: QuickLink[];
};

export function QuickLinksList({ items }: QuickLinksListProps) {
  return (
    <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-muted)]">
      {items.map((item) => (
        <li key={item.href}>
          {isContactFormHref(item.href) ? (
            <CtaButton
              href={item.href}
              variant="ghost"
              className="h-auto min-h-0 rounded-none border-0 bg-transparent p-0 text-sm font-normal normal-case tracking-normal text-[var(--color-text-muted)] hover:bg-transparent hover:text-white"
            >
              {item.label}
            </CtaButton>
          ) : (
            <Link
              href={item.href}
              className="hover:text-white"
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
