"use client";

import { ContactNowButton } from "@/components/contact-now-button";
import { LinkButton } from "@/components/link-button";
import { contactConfig, isContactFormHref } from "@/config/contact.config";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  subject?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
  subject = contactConfig.defaultSubject,
  onClick,
}: CtaButtonProps) {
  if (isContactFormHref(href)) {
    return (
      <ContactNowButton
        variant={variant}
        className={className}
        subject={subject}
        onClick={onClick}
      >
        {children}
      </ContactNowButton>
    );
  }

  return (
    <LinkButton href={href} variant={variant} className={className} onClick={onClick}>
      {children}
    </LinkButton>
  );
}
