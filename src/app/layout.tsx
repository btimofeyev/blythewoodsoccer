import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import { siteConfig } from "@/config/site.config";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const fontSans = localFont({
  variable: "--font-manrope",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/manrope-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/manrope-600.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/manrope-700.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const fontDisplay = localFont({
  variable: "--font-bebas",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/bebas-neue-400.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressLines[0],
    addressLocality: "Blythewood",
    addressRegion: "SC",
    postalCode: "29016",
    addressCountry: "US",
  },
  sameAs: siteConfig.socials.map((social) => social.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
