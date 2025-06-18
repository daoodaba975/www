import Link from "next/link";
import Image from "next/image";

type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US");
};

const ArticlesSection = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-eigengrau dark:text-snow">
        🗞️ Writings.
      </h2>

      <ul className="space-y-10">
        {articles.map((article) => (
          <li key={article.slug} className="flex flex-col sm:flex-row gap-5">
            {article.image && (
              <div className="w-full sm:w-1/3">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-auto border border-lico dark:border-eigengrau"
                />
              </div>
            )}
            <div className="flex-1">
              <p className="mb-2 text-xs text-eigengrau dark:text-snow">
                {formatDate(article.date)}
              </p>
              <Link
                className="font-medium text-base text-eigengrau dark:text-snow hover:underline"
                href={`/articles/${article.slug}`}
              >
                {article.title}
              </Link>
              <p className="mt-1 text-sm text-gayvin dark:text-silver">
                {article.description}
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm text-celtic dark:text-emerald hover:text-pacific dark:hover:text-mint underline hover:decoration-2 focus:outline-none focus:decoration-2"
                  href={`/articles/${article.slug}`}
                >
                  Continue reading
                </Link>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesSection;
