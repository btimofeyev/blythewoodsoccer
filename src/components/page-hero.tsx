import Image from "next/image";

import { LinkButton } from "@/components/link-button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[var(--color-bg)] pt-28 sm:pt-32">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-28"
          unoptimized
        />
        <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(15,23,42,0.96)_6%,rgba(15,23,42,0.78)_42%,rgba(15,23,42,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-accent-glow),transparent_28%)]" />
      </div>
      <div className="relative mx-auto flex min-h-[28rem] max-w-7xl items-end px-6 pb-12 sm:min-h-[34rem] sm:px-8 sm:pb-14 lg:px-12">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/60">
            Blythewood Soccer Club
          </p>
          <p className="mt-4 text-xs font-semibold tracking-[0.34em] uppercase text-[var(--color-accent)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[0.92] text-white sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
            {body}
          </p>
          {primaryCta || secondaryCta ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {primaryCta ? (
                <LinkButton href={primaryCta.href} className="w-full sm:w-auto">
                  {primaryCta.label}
                </LinkButton>
              ) : null}
              {secondaryCta ? (
                <LinkButton
                  href={secondaryCta.href}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  {secondaryCta.label}
                </LinkButton>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
