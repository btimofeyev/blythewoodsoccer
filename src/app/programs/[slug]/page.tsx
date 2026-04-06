import Image from "next/image";
import { notFound } from "next/navigation";

import { programsConfig, getProgramBySlug } from "@/config/programs.config";
import { LinkButton } from "@/components/link-button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { buildMetadata } from "@/lib/metadata";

type ProgramPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return programsConfig.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return {};
  }

  return buildMetadata({
    title: program.title,
    description: program.summary,
    pathname: `/programs/${program.slug}/`,
    image: program.heroImage,
  });
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Programs"
        title={program.title}
        body={program.summary}
        image={program.heroImage}
        primaryCta={{
          label: program.primaryCtaLabel,
          href: program.primaryCtaHref,
        }}
        secondaryCta={
          program.secondaryCtaHref && program.secondaryCtaLabel
            ? {
                label: program.secondaryCtaLabel,
                href: program.secondaryCtaHref,
              }
            : undefined
        }
      />

      <section className="border-t border-white/10 bg-[var(--color-bg)] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <Reveal>
            <div className="rounded-[2.25rem] border border-white/10 bg-[var(--color-surface)] p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
                Overview
              </p>
              <h2 className="mt-5 font-display text-5xl leading-[0.88] text-white sm:text-6xl">
                {program.ageBand}
              </h2>
              <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)]">
                {program.intro}
              </p>
              <div className="mt-8 grid gap-4">
                {program.forPlayers.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-[rgba(15,23,42,0.72)] px-5 py-5 text-[var(--color-text-muted)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative min-h-[22rem] overflow-hidden rounded-[2.25rem] border border-white/10 sm:min-h-[32rem]">
              <Image
                src={program.heroImage}
                alt={program.title}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--overlay-image)]" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
                  Program focus
                </p>
                <p className="mt-3 max-w-lg text-xl leading-8 text-white">
                  {program.highlights[0]}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[var(--color-bg-alt)] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
          <Reveal>
            <div>
              <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
                Training and competition
              </p>
              <div className="mt-6 space-y-4">
                {program.highlights.map((point) => (
                  <div
                    key={point}
                    className="border-l border-[var(--color-accent)] pl-4 text-lg leading-8 text-[var(--color-text-muted)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-7">
              <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
                What families can expect
              </p>
              <div className="mt-6 space-y-4">
                {program.scheduleDetails.map((detail) => (
                  <div
                    key={detail}
                    className="rounded-[1.5rem] border border-white/10 bg-[rgba(15,23,42,0.72)] px-5 py-5 text-base leading-7 text-[var(--color-text-muted)]"
                  >
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {program.ageBreakdown?.length && program.feeRows?.length ? (
        <section className="border-t border-white/10 bg-[var(--color-bg)] py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-12">
            <Reveal>
              <div className="rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-7">
                <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
                  {program.seasonLabel} age breakdown
                </p>
                <h2 className="mt-4 font-display text-4xl leading-[0.92] text-white sm:text-5xl">
                  {program.title} age groups
                </h2>
                <div className="mt-8 space-y-4">
                  {program.ageBreakdown.map((group) => (
                    <div
                      key={group.label}
                      className="flex flex-col gap-2 border-b border-white/10 pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                    >
                      <p className="text-lg font-semibold text-white">
                        {group.label}
                      </p>
                      <p className="text-sm leading-6 text-[var(--color-text-muted)] sm:text-right">
                        {group.birthYears}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-surface)]">
                <div className="border-b border-white/10 px-7 py-6">
                  <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
                    {program.seasonLabel} fees
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">
                    Program fees
                  </h2>
                </div>
                <div className="hidden overflow-x-auto md:block">
                  <table className="min-w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-white/10 text-xs tracking-[0.22em] uppercase text-[var(--color-text-muted)]">
                        <th className="px-7 py-4 font-medium">Format</th>
                        <th className="px-7 py-4 font-medium">Age groups</th>
                        <th className="px-7 py-4 font-medium">Fees</th>
                        <th className="px-7 py-4 font-medium">Seasons</th>
                      </tr>
                    </thead>
                    <tbody>
                      {program.feeRows.map((row) => (
                        <tr key={`${row.format}-${row.ageGroups}-${row.fee}`} className="border-b border-white/10 last:border-b-0">
                          <td className="px-7 py-5 text-sm font-medium text-white">
                            {row.format}
                          </td>
                          <td className="px-7 py-5 text-sm text-[var(--color-text-muted)]">
                            {row.ageGroups}
                          </td>
                          <td className="px-7 py-5 text-sm font-medium text-white">
                            {row.fee}
                          </td>
                          <td className="px-7 py-5 text-sm text-[var(--color-text-muted)]">
                            {row.seasons}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="grid gap-4 p-5 md:hidden">
                  {program.feeRows.map((row) => (
                    <article
                      key={`${row.format}-${row.ageGroups}-${row.fee}-mobile`}
                      className="rounded-[1.5rem] border border-white/10 bg-[rgba(15,23,42,0.72)] p-5"
                    >
                      <div className="grid gap-3">
                        <div>
                          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--color-accent)]">
                            Format
                          </p>
                          <p className="mt-1 text-sm font-medium text-white">
                            {row.format}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--color-accent)]">
                            Age groups
                          </p>
                          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                            {row.ageGroups}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--color-accent)]">
                              Fee
                            </p>
                            <p className="mt-1 text-sm font-medium text-white">
                              {row.fee}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--color-accent)]">
                              Seasons
                            </p>
                            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                              {row.seasons}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                {program.feeNotes?.length ? (
                  <div className="border-t border-white/10 px-5 py-6 sm:px-7">
                    <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
                      Included
                    </p>
                    <div className="mt-4 space-y-3">
                      {program.feeNotes.map((note) => (
                        <p
                          key={note}
                          className="text-sm leading-6 text-[var(--color-text-muted)]"
                        >
                          {note}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="border-t border-white/10 bg-[var(--color-bg)] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
          <Reveal>
            <div>
              <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
                Development focus
              </p>
              <div className="mt-6 space-y-4">
                {program.developmentPoints.map((point) => (
                  <div
                    key={point}
                    className="border-l border-[var(--color-accent)] pl-4 text-lg leading-8 text-[var(--color-text-muted)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-7">
              <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
                How to start
              </p>
              <div className="mt-6 space-y-4">
                {program.howToStart.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-[1.5rem] border border-white/10 bg-[rgba(15,23,42,0.72)] px-5 py-5"
                  >
                    <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[var(--color-accent)]">
                      Step {index + 1}
                    </p>
                    <p className="mt-3 text-base leading-7 text-[var(--color-text-muted)]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[var(--color-bg-alt)] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
              FAQ
            </p>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {program.faq.map((item, index) => (
                <Reveal key={item.question} delay={index * 0.06}>
                  <article className="rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-7">
                    <h2 className="text-2xl font-semibold leading-tight text-white">
                      {item.question}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
                      {item.answer}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[linear-gradient(135deg,var(--color-accent-strong),var(--color-bg))] py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.34em] uppercase text-[var(--color-accent)]">
                Registration
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.92] text-white sm:text-6xl">
                Use the current registration link and check club updates.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton href={program.primaryCtaHref} className="w-full sm:w-auto">
                {program.primaryCtaLabel}
              </LinkButton>
              <LinkButton href="/news/" variant="secondary" className="w-full sm:w-auto">
                Club updates
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
