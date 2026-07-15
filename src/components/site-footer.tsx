import Link from "next/link";

import { QuickLinksList } from "@/components/quick-links-list";
import { linksConfig } from "@/config/links.config";
import { programsConfig } from "@/config/programs.config";
import { siteConfig } from "@/config/site.config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-bg-alt)]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:grid lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:gap-10 lg:px-12 lg:py-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.34em] uppercase text-[var(--color-accent)]">
            Blythewood Soccer Club
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-text-muted)]">
            Youth soccer for Blythewood-area families who want clear pathways,
            stronger coaching, and current information that stays easy to find.
          </p>
        </div>

        <div className="mt-8 divide-y divide-white/10 border-y border-white/10 lg:hidden">
          <details className="group">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between text-sm font-semibold tracking-[0.2em] uppercase text-white [&::-webkit-details-marker]:hidden">
              <span>Contact</span>
              <span className="text-lg font-normal text-[var(--color-accent)] transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <div className="border-t border-white/10 py-3 text-sm text-[var(--color-text-muted)]">
              <a href={`tel:${siteConfig.phone}`} className="flex min-h-11 items-center text-white">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex min-h-11 items-center text-white">
                {siteConfig.email}
              </a>
              <div className="py-3 leading-6">
                {siteConfig.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </details>

          <details className="group">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between text-sm font-semibold tracking-[0.2em] uppercase text-white [&::-webkit-details-marker]:hidden">
              <span>Explore</span>
              <span className="text-lg font-normal text-[var(--color-accent)] transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <div className="grid border-t border-white/10 py-3">
              {programsConfig.map((program) => (
                <Link
                  key={program.slug}
                  href={`/programs/${program.slug}/`}
                  className="flex min-h-11 items-center text-sm text-[var(--color-text-muted)]"
                >
                  {program.title}
                </Link>
              ))}
              <QuickLinksList
                className="mt-0 border-t border-white/10 pt-2"
                items={[
                  { label: "Current Updates", href: "/news/" },
                  { label: "Fields", href: "/fields/" },
                  { label: "About", href: "/about/" },
                  { label: "Register for MLS GO", href: linksConfig.recreationalRegistration },
                  { label: "Contact for Competitive", href: linksConfig.contact },
                  { label: "Log In", href: linksConfig.login },
                ]}
              />
            </div>
          </details>
        </div>

        <div className="hidden lg:block">
          <h2 className="text-sm font-semibold tracking-[0.24em] uppercase text-white">
            Contact
          </h2>
          <div className="mt-4 space-y-2 text-sm text-[var(--color-text-muted)]">
            <p>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-white"
              >
                {siteConfig.email}
              </a>
            </p>
            {siteConfig.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <h2 className="text-sm font-semibold tracking-[0.24em] uppercase text-white">
            Programs
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-muted)]">
            {programsConfig.map((program) => (
              <li key={program.slug}>
                <Link href={`/programs/${program.slug}/`} className="hover:text-white">
                  {program.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block">
          <h2 className="text-sm font-semibold tracking-[0.24em] uppercase text-white">
            Quick Links
          </h2>
          <QuickLinksList
            items={[
              { label: "Current Updates", href: "/news/" },
              { label: "Fields", href: "/fields/" },
              { label: "About", href: "/about/" },
              { label: "Register for MLS GO", href: linksConfig.recreationalRegistration },
              { label: "Contact for Competitive", href: linksConfig.contact },
              { label: "Log In", href: linksConfig.login },
            ]}
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-xs sm:tracking-[0.24em] lg:px-12">
          <p>Serving Blythewood, Fairfield, Kershaw, and Richland County families.</p>
          <div className="flex flex-wrap gap-x-4">
            {siteConfig.socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center hover:text-white"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
