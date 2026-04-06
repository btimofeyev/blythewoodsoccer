import Image from "next/image";

import { fieldsConfig } from "@/config/fields.config";
import { LinkButton } from "@/components/link-button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Location",
  description:
    "Get directions to the main Blythewood Soccer Club location for practices, player evaluations, and club sessions.",
  pathname: "/fields/",
  image: "/images/night-field.png",
});

export default function FieldsPage() {
  const field = fieldsConfig[0];

  return (
    <>
      <PageHero
        eyebrow="Location"
        title="Practice, evaluation, and club session location."
        body="RCWC is the main Blythewood Soccer Club location. Use this page for the address and directions."
        image="/images/night-field.png"
        primaryCta={{ label: "Get Directions", href: field.mapsHref }}
      />

      <section className="border-t border-white/10 bg-[var(--color-bg)] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <Reveal>
            <div className="relative min-h-[32rem] overflow-hidden rounded-[2.25rem] border border-white/10">
              <Image
                src={field.image ?? "/images/night-field.png"}
                alt={field.name}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--overlay-image)]" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-xs font-semibold tracking-[0.34em] uppercase text-[var(--color-accent)]">
                  Club location
                </p>
                <h2 className="mt-3 font-display text-5xl leading-none text-white">
                  {field.name}
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2.25rem] border border-white/10 bg-[var(--color-surface)] p-8">
              <p className="text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
                Address
              </p>
              <div className="mt-5 space-y-1 text-2xl leading-tight text-white">
                {field.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="mt-6 text-base leading-7 text-[var(--color-text-muted)]">
                {field.details}
              </p>
              <div className="mt-8 grid gap-4">
                {field.matchdayNotes?.map((note) => (
                  <div
                    key={note}
                    className="rounded-[1.5rem] border border-white/10 bg-[rgba(15,23,42,0.72)] px-5 py-5 text-sm leading-7 text-[var(--color-text-muted)]"
                  >
                    {note}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href={field.mapsHref}>Open maps</LinkButton>
                {field.statusHref ? (
                  <LinkButton href={field.statusHref} variant="secondary">
                    Club updates
                  </LinkButton>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
