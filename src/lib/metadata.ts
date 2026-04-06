import type { Metadata } from "next";

import { siteConfig } from "@/config/site.config";

type MetadataInput = {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function buildMetadata({
  title,
  description,
  pathname,
  image,
  type = "website",
  publishedTime,
}: MetadataInput): Metadata {
  const url = `${siteConfig.url}${pathname}`;
  const ogImage = image ?? siteConfig.defaultOgImage;

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
