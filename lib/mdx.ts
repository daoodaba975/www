import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ArticleMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string;
};

const articlesDirectory = path.join(process.cwd(), "articles");

export function getAllArticles(): ArticleMeta[] {
  const files = fs
    .readdirSync(articlesDirectory)
    .filter((f) => /\.mdx?$/.test(f));

  return files.map((filename) => {
    const filePath = path.join(articlesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      slug: filename.replace(/\.mdx?$/, ""),
      image: data.image,
    };
  });
}

export function getArticleBySlug(slug: string): {
  content: string;
  meta: ArticleMeta;
} {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);

  return {
    content,
    meta: {
      title: data.title,
      description: data.description,
      date: data.date,
      slug,
      image: data.image,
    },
  };
}
