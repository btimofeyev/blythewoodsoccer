import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { linksConfig } from "@/config/links.config";
import { CtaButton } from "@/components/cta-button";
import { LinkButton } from "@/components/link-button";
import { getAllNewsPosts, getNewsPostBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllNewsPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    pathname: `/news/${post.slug}/`,
    image: post.coverImage,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);
  const relatedPosts = (await getAllNewsPosts())
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[var(--color-bg)] pt-28 sm:pt-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <Link
          href="/news/"
          className="inline-flex text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)] hover:text-white"
        >
          ← Back to news
        </Link>
        <p className="mt-8 text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
          {post.category ?? "Club News"} • {formatDate(post.date)}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[0.92] text-white sm:text-7xl">
          {post.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg sm:leading-8">
          {post.excerpt}
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2.25rem] border border-white/10 sm:aspect-[16/8]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="news-prose">{post.content}</div>
      </div>

      {relatedPosts.length > 0 ? (
        <section className="border-t border-white/10 bg-[var(--color-bg)] py-16">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
              More updates
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {relatedPosts.map((item) => (
                <article
                  key={item.slug}
                  className="rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-6"
                >
                  <p className="text-xs font-semibold tracking-[0.26em] uppercase text-[var(--color-accent)]">
                    {item.category ?? "Club News"} • {formatDate(item.date)}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
                    {item.excerpt}
                  </p>
                  <Link
                    href={`/news/${item.slug}/`}
                    className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.24em] text-white hover:text-[var(--color-accent)]"
                  >
                    Read update
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-white/10 bg-[var(--color-bg-alt)] py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
              Club links
            </p>
            <p className="mt-3 text-lg leading-8 text-white">
              Register for MLS GO or contact the club about competitive programs.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <LinkButton href={linksConfig.recreationalRegistration} className="w-full sm:w-auto">
              Register for MLS GO
            </LinkButton>
            <CtaButton href={linksConfig.contact} variant="secondary" className="w-full sm:w-auto">
              Contact for Competitive
            </CtaButton>
          </div>
        </div>
      </section>
    </article>
  );
}
