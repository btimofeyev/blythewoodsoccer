import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-[var(--color-bg)] pt-28">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
        <p className="text-xs font-semibold tracking-[0.34em] uppercase text-[var(--color-accent)]">
          Page not found
        </p>
        <h1 className="mt-4 font-display text-6xl leading-none text-white sm:text-7xl">
          This route is off the field.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
          Head back to the homepage or jump into the program and news pages.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
