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
  onContactRequest?: (subject?: string) => void;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
  subject = contactConfig.defaultSubject,
  onClick,
  onContactRequest,
}: CtaButtonProps) {
  if (isContactFormHref(href)) {
    return (
      <ContactNowButton
        variant={variant}
        className={className}
        subject={subject}
        onClick={onClick}
        onContactRequest={onContactRequest}
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
