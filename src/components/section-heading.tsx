type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${textAlign}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold tracking-[0.32em] uppercase text-[var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-[0.95] text-white sm:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}
