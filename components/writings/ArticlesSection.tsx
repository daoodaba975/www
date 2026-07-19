import ArticleCard, { Article } from "@/components/ArticleCard";

const ArticlesSection = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-eigengrau dark:text-snow">
        🗞️ Writings.
      </h2>

      <ul className="space-y-10">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.slug}
            article={article}
            delay={index * 0.08}
          />
        ))}
      </ul>
    </div>
  );
};

export default ArticlesSection;
