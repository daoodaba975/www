import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { formatDate } from "@/lib/site";

type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
};

const LatestWritings = ({ articles }: { articles: Article[] }) => {
  if (!articles.length) {
    return (
      <div className="my-10 sm:my-14">
        <h2 className="mb-5 font-medium text-eigengrau dark:text-snow">
          🗞️ Writings.
        </h2>

        <ul className="space-y-10">
          <li>
            <p className="mb-2 text-sm text-eigengrau dark:text-snow">... 💭</p>
            <h5 className="font-medium text-sm text-eigengrau dark:text-snow">
              There is no content available yet, but it&apos;s coming soon.
            </h5>
            <p className="mt-1 text-sm text-eigengrau dark:text-snow">
              You can subscribe to receive the upcoming articles.
            </p>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-eigengrau dark:text-snow">
        🗞️ Latest Writings.
      </h2>

      <ul className="space-y-8">
        {articles.map((article, index) => (
          <motion.li
            key={article.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5"
          >
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
                className="font-medium text-base text-night hover:text-gayvin dark:text-snow dark:hover:text-silver underline decoration-2 underline-offset-2 decoration-celtic hover:decoration-pacific"
                href={`/articles/${article.slug}`}
              >
                {article.title}
              </Link>
              <p className="mt-1 text-sm text-gayvin dark:text-silver">
                {article.description}
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm text-celtic hover:text-pacific underline hover:decoration-2 focus:outline-none focus:decoration-2"
                  href={`/articles/${article.slug}`}
                >
                  Continue reading
                </Link>
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default LatestWritings;
