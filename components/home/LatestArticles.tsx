const LatestArticles = () => {
  return (
    <div className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-raisin dark:text-snow">
        🗞️ Writings.
      </h2>

      <ul className="space-y-10">
        <li>
          <p className="mb-2 text-sm text-raisin dark:text-snow">... 💭</p>
          <h5 className="font-medium text-sm text-raisin dark:text-snow">
            There is no content available yet, but it&apos;s coming soon.
          </h5>
          <p className="mt-1 text-sm text-raisin dark:text-snow">
            You can subscribe to receive the upcoming articles.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default LatestArticles;
