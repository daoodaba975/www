import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ArticleMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string;
  tags?: string[];
};

const articlesDirectory = path.join(process.cwd(), "articles");
const ARTICLE_EXTENSIONS = [".mdx", ".md"];

function isArticleFile(filename: string) {
  return ARTICLE_EXTENSIONS.includes(path.extname(filename));
}

function resolveArticlePath(slug: string) {
  for (const extension of ARTICLE_EXTENSIONS) {
    const candidate = path.join(articlesDirectory, `${slug}${extension}`);
    if (fs.existsSync(candidate)) return candidate;
  }

  throw new Error(
    `No article found for slug "${slug}" (looked for ${ARTICLE_EXTENSIONS.join(
      ", "
    )} in articles/).`
  );
}

function parseMeta(
  data: Record<string, unknown>,
  slug: string,
  filename: string
): ArticleMeta {
  const missing: string[] = (["title", "description"] as const).filter(
    (key) => typeof data[key] !== "string" || !(data[key] as string).trim()
  );

  // YAML parses an unquoted `date: 2026-03-23` into a Date, so accept both.
  const rawDate = data.date instanceof Date ? data.date : `${data.date ?? ""}`;

  if (!(rawDate instanceof Date) && !rawDate.trim()) {
    missing.push("date");
  }

  if (missing.length) {
    throw new Error(
      `Invalid frontmatter in articles/${filename}: missing or empty ${missing.join(
        ", "
      )}.`
    );
  }

  const parsedDate = new Date(rawDate);

  if (Number.isNaN(parsedDate.getTime())) {
    throw new Error(
      `Invalid frontmatter in articles/${filename}: date "${String(
        rawDate
      )}" is not a valid date.`
    );
  }

  const date =
    rawDate instanceof Date ? rawDate.toISOString() : (rawDate as string);

  return {
    title: data.title as string,
    description: data.description as string,
    date,
    slug,
    image: typeof data.image === "string" ? data.image : undefined,
    // Numeric tags such as `tags: [2026]` parse as numbers; keep them.
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
  };
}

/** Articles sorted from newest to oldest. */
export function getAllArticles(): ArticleMeta[] {
  return fs
    .readdirSync(articlesDirectory)
    .filter(isArticleFile)
    .map((filename) => {
      const fileContents = fs.readFileSync(
        path.join(articlesDirectory, filename),
        "utf8"
      );
      const { data } = matter(fileContents);

      return parseMeta(data, filename.replace(/\.mdx?$/, ""), filename);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): {
  content: string;
  meta: ArticleMeta;
} {
  const fullPath = resolveArticlePath(slug);
  const { content, data } = matter(fs.readFileSync(fullPath, "utf8"));

  return {
    content,
    meta: parseMeta(data, slug, path.basename(fullPath)),
  };
}
