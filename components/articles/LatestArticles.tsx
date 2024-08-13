import React from "react";
import Link from "next/link";

const LatestArticles = () => {
  return (
    <div className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-raisin dark:text-snow">
        🗞️ Articles.
      </h2>

      <ul className="space-y-10">
        <li>
          <p className="mb-2 text-sm text-raisin dark:text-snow">2024</p>
          <h5 className="font-medium text-sm text-raisin dark:text-snow">
            The complete guide to OKRs
          </h5>
          <p className="mt-1 text-sm text-raisin dark:text-snow">
            How to make objectives and key results work for your company.
          </p>
          <p className="mt-1">
            <Link
              className="text-sm text-raisin underline hover:text-raisin hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-snow dark:hover:text-silver"
              href="#"
            >
              Continue reading
            </Link>
          </p>
        </li>

        <li>
          <p className="mb-2 text-sm text-raisin dark:text-snow">2024</p>
          <h5 className="font-medium text-sm text-raisin dark:text-snow">
            Enhancement in Customer Engagement
          </h5>
          <p className="mt-1 text-sm text-raisin dark:text-snow">
            With the aim of optimizing customer interactions and boosting brand
            loyalty, the team at Preline leveraged Mailchimp powerful tools and
            expertise to deliver exceptional results.
          </p>
          <p className="mt-1">
            <Link
              className="text-sm text-raisin underline hover:text-raisin hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-snow dark:hover:text-silver"
              href="#"
            >
              Continue reading
            </Link>
          </p>
        </li>

        <li>
          <p className="mb-2 text-sm text-raisin dark:text-snow">2023</p>
          <h5 className="font-medium text-sm text-raisin dark:text-snow">
            How Google Assistant now helps you record stories for kids
          </h5>
          <p className="mt-1 text-sm text-raisin dark:text-snow">
            Google is constantly updating its consumer AI, Google Assistant,
            with new features.
          </p>
          <p className="mt-1">
            <Link
              className="text-sm text-raisin underline hover:text-raisin hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-snow dark:hover:text-silver"
              href="#"
            >
              Continue reading
            </Link>
          </p>
        </li>
      </ul>
    </div>
  );
};
export default LatestArticles;
