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
  const missing = (["title", "description", "date"] as const).filter(
    (key) => typeof data[key] !== "string" || !(data[key] as string).trim()
  );

  if (missing.length) {
    throw new Error(
      `Invalid frontmatter in articles/${filename}: missing or empty ${missing.join(
        ", "
      )}.`
    );
  }

  const date = data.date as string;

  if (Number.isNaN(new Date(date).getTime())) {
    throw new Error(
      `Invalid frontmatter in articles/${filename}: date "${date}" is not a valid date.`
    );
  }

  return {
    title: data.title as string,
    description: data.description as string,
    date,
    slug,
    image: typeof data.image === "string" ? data.image : undefined,
    tags: Array.isArray(data.tags)
      ? data.tags.filter((tag): tag is string => typeof tag === "string")
      : undefined,
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
