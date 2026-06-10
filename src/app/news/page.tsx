import Image from "next/image";

import { linksConfig } from "@/config/links.config";
import { CtaButton } from "@/components/cta-button";
import { LinkButton } from "@/components/link-button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { getAllNewsPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "News & Events",
  description:
    "Registration windows, evaluations, and important club updates for Blythewood Soccer Club families.",
  pathname: "/news/",
});

export default async function NewsPage() {
  const posts = await getAllNewsPosts();
  const [leadPost, ...otherPosts] = posts;

  return (
    <>
      <PageHero
        eyebrow="News & Events"
        title="Club news, registration dates, and season updates."
        body="Find evaluation dates, registration windows, and announcements for Blythewood Soccer Club families."
        image="/images/evaluations-hero.jpg"
        primaryCta={{ label: "Register for MLS GO", href: linksConfig.recreationalRegistration }}
        secondaryCta={{ label: "Contact for Competitive", href: linksConfig.contact }}
      />

      <section className="border-t border-white/10 bg-[var(--color-bg)] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {leadPost ? (
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal>
                <article className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-surface)]">
                  <div className="relative min-h-80">
                    <Image
                      src={leadPost.coverImage}
                      alt={leadPost.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div className="p-7 sm:p-8">
                    <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-accent)]">
                      Latest update • {leadPost.category ?? "Club News"} • {formatDate(leadPost.date)}
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                      {leadPost.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
                      {leadPost.excerpt}
                    </p>
                    <div className="mt-7">
                      <LinkButton href={`/news/${leadPost.slug}/`}>
                        Read the update
                      </LinkButton>
                    </div>
                  </div>
                </article>
              </Reveal>

              <div className="grid gap-4">
                {otherPosts.map((post, index) => (
                  <Reveal key={post.slug} delay={index * 0.04}>
                    <article className="rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-6">
                      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-accent)]">
                        {post.category ?? "Club News"} • {formatDate(post.date)}
                      </p>
                      <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">
                        {post.title}
                      </h2>
                      <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
                        {post.excerpt}
                      </p>
                      <div className="mt-6">
                        <LinkButton href={`/news/${post.slug}/`} variant="secondary">
                          Read update
                        </LinkButton>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
