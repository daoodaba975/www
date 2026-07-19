import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { formatDate } from "@/lib/site";

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
};

interface ArticleCardProps {
  article: Article;
  /** Stagger applied before this card animates in. */
  delay: number;
}

const ArticleCard = ({ article, delay }: ArticleCardProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
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
  );
};

export default ArticleCard;
