import fs from "node:fs";
import path from "node:path";

import { compileMDX } from "next-mdx-remote/rsc";

import { MDXComponents } from "@/components/mdx-components";
import type { NewsPost, NewsPostWithBody } from "@/lib/types";

const newsDirectory = path.join(process.cwd(), "content", "news");

type NewsFrontmatter = Omit<NewsPost, "slug">;

function getNewsFilepaths() {
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(newsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.join(newsDirectory, file));
}

function sortByDateDescending<T extends { date: string }>(items: T[]) {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getAllNewsPosts(): Promise<NewsPost[]> {
  const posts = await Promise.all(
    getNewsFilepaths().map(async (filepath) => {
      const source = fs.readFileSync(filepath, "utf8");
      const { frontmatter } = await compileMDX<NewsFrontmatter>({
        source,
        options: {
          parseFrontmatter: true,
        },
      });

      return {
        slug: path.basename(filepath, ".mdx"),
        ...frontmatter,
      };
    }),
  );

  return sortByDateDescending(posts);
}

export async function getFeaturedNewsPosts(limit = 3) {
  const posts = await getAllNewsPosts();
  const featured = posts.filter((post) => post.featured);

  return (featured.length > 0 ? featured : posts).slice(0, limit);
}

export async function getNewsPostBySlug(
  slug: string,
): Promise<NewsPostWithBody | null> {
  const filepath = path.join(newsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filepath)) {
    return null;
  }

  const source = fs.readFileSync(filepath, "utf8");
  const { content, frontmatter } = await compileMDX<NewsFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
    },
    components: MDXComponents,
  });

  return {
    slug,
    content,
    ...frontmatter,
  };
}
