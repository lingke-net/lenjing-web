import fs from "node:fs";
import path from "node:path";

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

const docsDir = path.join(process.cwd(), "docs/news");

function parseFrontmatter(raw: string): {
  meta: Record<string, string>;
  content: string;
} {
  const meta: Record<string, string> = {};
  let content = raw;

  if (raw.startsWith("---")) {
    const end = raw.indexOf("---", 3);
    if (end !== -1) {
      const front = raw.slice(3, end).trim();
      for (const line of front.split("\n")) {
        const colon = line.indexOf(":");
        if (colon !== -1) {
          const key = line.slice(0, colon).trim();
          const value = line.slice(colon + 1).trim().replace(/^["']|["']$/g, "");
          meta[key] = value;
        }
      }
      content = raw.slice(end + 3).trim();
    }
  }

  return { meta, content };
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(docsDir).filter((f) => f.endsWith(".md"));

  const articles: ArticleMeta[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(docsDir, file), "utf-8");
    const { meta } = parseFrontmatter(raw);

    articles.push({
      slug: file.replace(/\.md$/, ""),
      title: meta.title ?? "",
      date: meta.date ?? "",
      category: meta.category ?? "",
      summary: meta.summary ?? "",
      image: meta.image ?? "",
      imageAlt: meta.imageAlt ?? "",
    });
  }

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticle(slug: string): Article | null {
  const filePath = path.join(docsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { meta, content } = parseFrontmatter(raw);

  return {
    slug,
    title: meta.title ?? "",
    date: meta.date ?? "",
    category: meta.category ?? "",
    summary: meta.summary ?? "",
    image: meta.image ?? "",
    imageAlt: meta.imageAlt ?? "",
    content,
  };
}
