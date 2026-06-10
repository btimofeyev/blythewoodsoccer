import Image from "next/image";
import Link from "next/link";

import { programsConfig } from "@/config/programs.config";
import { heroCarouselSlides, siteConfig } from "@/config/site.config";
import { linksConfig } from "@/config/links.config";
import { HeroCarousel } from "@/components/hero-carousel";
import { RegistrationPopup } from "@/components/registration-popup";
import { CtaButton } from "@/components/cta-button";
import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getFeaturedNewsPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export default async function Home() {
  const featuredPosts = await getFeaturedNewsPosts(3);
  const leadUpdate = featuredPosts[0];
  const supportingUpdates = featuredPosts.slice(1);

  return (
    <>
      <RegistrationPopup />
      <HeroCarousel slides={heroCarouselSlides} />

      <section className="relative border-t border-white/10 bg-[var(--color-bg)] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-accent-glow),transparent_30%),radial-gradient(circle_at_bottom_right,var(--color-accent-soft),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Programs"
              title="Choose the right program for your player."
              body="Blythewood offers recreational soccer, Junior Academy, and Select teams for different ages and levels."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {programsConfig.map((program, index) => (
              <Reveal key={program.slug} delay={index * 0.08}>
                <Link
                  href={`/programs/${program.slug}/`}
                  className="group flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,var(--color-surface-strong),rgba(255,255,255,0.02))] p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-strong)]"
                >
                  <div>
                    <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
                      {program.ageBand}
                    </p>
                    <h2 className="mt-5 font-display text-5xl leading-[0.88] text-white">
                      {program.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
                      {program.summary}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center justify-between text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                    <span>Explore program</span>
                    <span className="transition group-hover:text-[var(--color-accent)]">
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[var(--color-bg-alt)] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Why Blythewood"
              title="Strong coaching, clear communication, and a welcoming club culture."
              body="Blythewood Soccer Club gives local families a place to train, compete, and grow in the game."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-6 sm:grid-cols-[0.75fr_1.25fr]">
              <div className="relative min-h-64 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(59,130,246,0.28),rgba(15,23,42,0.82))]">
                <Image
                  src="/images/logo.png"
                  alt="Blythewood Soccer Club crest"
                  fill
                  unoptimized
                  className="object-contain p-8 opacity-90"
                />
              </div>
              <div className="space-y-5">
                {siteConfig.homeProofPoints.map((item) => (
                  <div
                    key={item.title}
                    className="border-l border-[var(--color-accent)] pl-5"
                  >
                    <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--color-accent)]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-lg leading-8 text-white/88">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[var(--color-bg)] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="News & Events"
              title="Latest club updates."
              body="Find registration dates, evaluation updates, and club announcements."
            />
          </Reveal>

          {leadUpdate ? (
            <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-surface)]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={leadUpdate.coverImage}
                      alt={leadUpdate.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[var(--color-accent)]">
                      {leadUpdate.category ?? "Club News"} • {formatDate(leadUpdate.date)}
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                      {leadUpdate.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
                      {leadUpdate.excerpt}
                    </p>
                    <Link
                      href={`/news/${leadUpdate.slug}/`}
                      className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.24em] text-white hover:text-[var(--color-accent)]"
                    >
                      Read update
                    </Link>
                  </div>
                </article>
              </Reveal>

              <div className="grid gap-5">
                {supportingUpdates.map((post, index) => (
                  <Reveal key={post.slug} delay={index * 0.08}>
                    <article className="rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-6">
                      <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[var(--color-accent)]">
                        {post.category ?? "Club News"} • {formatDate(post.date)}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
                        {post.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/news/${post.slug}/`}
                        className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.24em] text-white hover:text-[var(--color-accent)]"
                      >
                        Read update
                      </Link>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}
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
                Ready to get started?
              </h2>
              <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
                Register for MLS GO recreation or contact the club about Junior Academy and Select
                programs.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-wrap gap-3">
              <LinkButton href={linksConfig.recreationalRegistration}>
                Register for MLS GO
              </LinkButton>
              <CtaButton href={linksConfig.contact} variant="secondary">
                Contact for Competitive
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
