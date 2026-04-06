import Image from "next/image";

import { linksConfig } from "@/config/links.config";
import { siteConfig } from "@/config/site.config";
import { LinkButton } from "@/components/link-button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn how Blythewood Soccer Club approaches development, family support, and local soccer pathways.",
  pathname: "/about/",
  image: "/images/logo.png",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Blythewood"
        title="A local club focused on player development, strong coaching, and community."
        body="Blythewood Soccer Club gives families a welcoming place to play, train, and grow in the game."
        image="/images/night-field.png"
        primaryCta={{ label: "Start Registration", href: linksConfig.clubRegistration }}
        secondaryCta={{ label: "Log In", href: linksConfig.login }}
      />

      <section className="border-t border-white/10 bg-[var(--color-bg)] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <Reveal>
            <div className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,var(--color-surface-strong),rgba(255,255,255,0.02))] p-8">
              <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
                Club identity
              </p>
              <h2 className="mt-5 font-display text-6xl leading-[0.88] text-white">
                Built for Blythewood. Organized for growth.
              </h2>
              <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)]">
                The goal is simple: give families a club that feels serious
                about development, clear about expectations, and still grounded
                in the local community.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  "Community-rooted",
                  "Year-round development",
                  "Family-friendly culture",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-[var(--color-surface)] px-4 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative min-h-[28rem] overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.3),rgba(15,23,42,0.82))]">
              <Image
                src="/images/logo.png"
                alt="Blythewood Soccer Club crest"
                fill
                className="object-contain p-10"
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[var(--color-bg-alt)] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
                What families can expect
              </p>
              <h2 className="mt-4 font-display text-5xl leading-[0.9] text-white sm:text-6xl">
                Families can expect a positive, organized club experience.
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {siteConfig.aboutExpectations.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-7">
                  <p className="text-xs font-semibold tracking-[0.28em] uppercase text-[var(--color-accent)]">
                    {item.title}
                  </p>
                  <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[var(--color-bg)] py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 lg:grid-cols-3 lg:px-12">
          {siteConfig.aboutSections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.08}>
              <article className="rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-7">
                <p className="text-xs font-semibold tracking-[0.28em] uppercase text-[var(--color-accent)]">
                  {section.title}
                </p>
                <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
                  {section.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[linear-gradient(135deg,var(--color-accent-strong),var(--color-bg))] py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.34em] uppercase text-[var(--color-accent)]">
                Registration
              </p>
              <h2 className="mt-4 font-display text-5xl leading-[0.9] text-white sm:text-6xl">
                Ready to register or learn more?
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-wrap gap-3">
              <LinkButton href={linksConfig.clubRegistration}>
                Start registration
              </LinkButton>
              <LinkButton href="/news/" variant="secondary">
                Latest updates
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
