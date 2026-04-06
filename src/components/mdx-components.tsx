import type { MDXComponents as MDXComponentsType } from "mdx/types";
import Link from "next/link";

export const MDXComponents: MDXComponentsType = {
  h2: (props) => (
    <h2
      {...props}
      className="mt-12 font-display text-4xl leading-none text-white first:mt-0"
    />
  ),
  h3: (props) => (
    <h3 {...props} className="mt-10 text-2xl font-semibold text-white" />
  ),
  p: (props) => (
    <p
      {...props}
      className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]"
    />
  ),
  ul: (props) => (
    <ul
      {...props}
      className="mt-5 list-disc space-y-2 pl-5 text-lg leading-8 text-[var(--color-text-muted)]"
    />
  ),
  li: (props) => <li {...props} />,
  a: ({ href = "#", ...props }) => (
    <Link
      href={href}
      {...props}
      className="text-[var(--color-accent)] underline decoration-white/20 underline-offset-4 hover:text-white"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    />
  ),
  strong: (props) => <strong {...props} className="font-semibold text-white" />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className="mt-8 border-l-2 border-[var(--color-accent)] pl-5 text-xl leading-8 text-white"
    />
  ),
};
