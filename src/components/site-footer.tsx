import Link from "next/link";

import { QuickLinksList } from "@/components/quick-links-list";
import { linksConfig } from "@/config/links.config";
import { programsConfig } from "@/config/programs.config";
import { siteConfig } from "@/config/site.config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-bg-alt)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.34em] uppercase text-[var(--color-accent)]">
            Blythewood Soccer Club
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-text-muted)]">
            Youth soccer for Blythewood-area families who want clear pathways,
            stronger coaching, and current information that stays easy to find.
          </p>
        </div>

        <div>
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

        <div>
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

        <div>
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
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs uppercase tracking-[0.24em] text-[var(--color-text-subtle)] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>Serving Blythewood, Fairfield, Kershaw, and Richland County families.</p>
          <div className="flex gap-4">
            {siteConfig.socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
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
