import type { MetadataRoute } from "next";

import { programsConfig } from "@/config/programs.config";
import { siteConfig } from "@/config/site.config";
import { getAllNewsPosts } from "@/lib/content";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllNewsPosts();

  const staticRoutes = [
    "",
    "/about/",
    "/fields/",
    "/news/",
    ...programsConfig.map((program) => `/programs/${program.slug}/`),
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.url}/news/${post.slug}/`,
      lastModified: new Date(post.date),
    })),
  ];
}
