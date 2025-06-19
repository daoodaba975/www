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
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
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

  // guarantee deterministic "latest"
  const [latest] = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-eigengrau dark:text-snow">
        🗞️ Latest Writing.
      </h2>

      <ul className="space-y-10">
        <li className="flex flex-col sm:flex-row gap-5">
          {latest.image && (
            <div className="w-full sm:w-1/3">
              <Image
                src={latest.image}
                alt={latest.title}
                width={400}
                height={250}
                className="rounded-lg object-cover w-full h-auto border border-gray-200 dark:border-gray-700"
              />
            </div>
          )}
          <div className="flex-1">
            <p className="mb-2 text-xs text-eigengrau dark:text-snow">
              {formatDate(latest.date)}
            </p>
            <Link
              className="font-medium text-base text-eigengrau dark:text-snow hover:underline"
              href={`/articles/${latest.slug}`}
            >
              {latest.title}
            </Link>
            <p className="mt-1 text-sm text-gayvin dark:text-silver">
              {latest.description}
            </p>
            <p className="mt-1">
              <Link
                className="text-sm text-celtic hover:text-pacific underline hover:decoration-2 focus:outline-none focus:decoration-2"
                href={`/articles/${latest.slug}`}
              >
                Continue reading
              </Link>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LatestWritings;
