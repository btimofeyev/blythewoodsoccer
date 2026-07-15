"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import { CtaButton } from "@/components/cta-button";
import { LinkButton } from "@/components/link-button";
import { linksConfig } from "@/config/links.config";
import { mainNav } from "@/config/site.config";
import { cn, isExternalHref } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-300",
        isHome && !scrolled
          ? "border-white/10 bg-[rgba(15,23,42,0.32)] backdrop-blur-md"
          : "border-white/10 bg-[rgba(15,23,42,0.92)] backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="relative h-10 w-16 sm:h-12 sm:w-20">
            <Image
              src="/images/logo.png"
              alt=""
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <div className="block">
            <p className="font-display text-xl leading-none text-white sm:text-2xl">
              Blythewood
            </p>
            <p className="text-[9px] font-semibold tracking-[0.24em] uppercase text-[var(--color-accent)] sm:text-[10px] sm:tracking-[0.32em]">
              Soccer Club
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  className={cn(
                    "inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium text-[var(--color-text-muted)] transition hover:bg-[var(--color-surface)] hover:text-white",
                    pathname.startsWith("/programs")
                      ? "bg-[var(--color-surface-strong)] text-white"
                      : null,
                  )}
                  type="button"
                >
                  {item.label}
                  <ChevronDown size={16} />
                </button>
                <div className="pointer-events-none absolute right-0 top-full mt-3 min-w-56 translate-y-2 rounded-3xl border border-[var(--color-border)] bg-[rgba(15,23,42,0.95)] p-2 opacity-0 shadow-2xl shadow-black/30 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={closeMenu}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-sm text-[var(--color-text-muted)] transition hover:bg-[var(--color-surface)] hover:text-white",
                        pathname === child.href.slice(0, -1)
                          ? "bg-[var(--color-surface)] text-white"
                          : null,
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : item.href ? (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex h-11 items-center rounded-full px-4 text-sm font-medium text-[var(--color-text-muted)] transition hover:bg-[var(--color-surface)] hover:text-white",
                  pathname === item.href.slice(0, -1) ||
                    (item.href === linksConfig.login && false)
                    ? "bg-[var(--color-surface-strong)] text-white"
                    : null,
                )}
                target={isExternalHref(item.href) ? "_blank" : undefined}
                rel={isExternalHref(item.href) ? "noreferrer" : undefined}
              >
                {item.label}
              </Link>
            ) : null,
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={linksConfig.login}
            className="inline-flex h-11 items-center rounded-full px-4 text-sm font-medium text-[var(--color-text-muted)] transition hover:bg-[var(--color-surface)] hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Log In
          </Link>
          <LinkButton href={linksConfig.recreationalRegistration} className="min-h-10 px-4 py-2">
            Register for MLS GO
          </LinkButton>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition active:scale-[0.96] lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="min-h-[calc(100dvh-4.25rem)] border-t border-white/10 bg-[rgba(15,23,42,0.98)] sm:min-h-[calc(100dvh-5rem)] lg:hidden">
          <div className="mx-auto max-h-[calc(100dvh-4.25rem)] max-w-7xl overflow-y-auto overscroll-contain px-5 py-5 sm:max-h-[calc(100dvh-5rem)] sm:px-8">
            <div className="mb-5 grid gap-3">
              <LinkButton
                href={linksConfig.recreationalRegistration}
                className="w-full"
                onClick={closeMenu}
              >
                Register for MLS GO
              </LinkButton>
              <CtaButton
                href={linksConfig.contact}
                variant="secondary"
                className="w-full"
                onClick={closeMenu}
              >
                Contact for Competitive
              </CtaButton>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {mainNav.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.label} className="py-2">
                      <p className="px-1 py-2 text-[10px] font-semibold tracking-[0.24em] uppercase text-[var(--color-accent)]">
                        {item.label}
                      </p>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenu}
                          className="flex min-h-11 items-center rounded-xl px-1 text-base text-white transition active:bg-white/5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  );
                }

                if (!item.href) {
                  return null;
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex min-h-12 items-center py-3 text-base text-white transition active:translate-x-0.5"
                    target={isExternalHref(item.href) ? "_blank" : undefined}
                    rel={isExternalHref(item.href) ? "noreferrer" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-2 border-b border-white/10">
              <Link
                href={linksConfig.login}
                onClick={closeMenu}
                className="flex min-h-12 items-center py-3 text-base text-white"
                target="_blank"
                rel="noreferrer"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
