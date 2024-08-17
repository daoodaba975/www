import React from "react";
import Image from "next/image";
import Link from "next/link";

import GitHub from "../svg/GitHub";
import X from "../svg/X";
import LinkedIn from "../svg/LinkedIn";

import SparkleText from "../SparkleText";
import useGitHubFollowers from "@/../hooks/useGitHubFollowers";

const Readme = () => {
  const username = "daoodaba975";
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const token = GITHUB_TOKEN || "";
  const followers = useGitHubFollowers(username, token);

  return (
    <main>
      <div className="flex items-center gap-x-3">
        <div className="shrink-0">
          <Image
            className="shrink-0 size-16 rounded-full"
            src="/img/daooda.webp"
            width={100}
            height={100}
            alt="Daouda BA"
          />
        </div>

        <div className="grow">
          <SparkleText />
          <p className="text-sm text-night dark:text-snow">
            FullStack Developer
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-night dark:text-snow">
          I am a FullStack Developer based at DAKAR, Senegal working in the
          field of web and mobile development. Currently working @{" "}
          <Link
            className="text-celtic dark:text-emerald hover:text-pacific dark:hover:text-mint"
            href="https://turingconsulting.fr"
            target="_blank"
          >
            <span className="text-sm font-bold mx-1 relative inline-block stroke-current">
              Turing Consulting Group
              <svg
                className="text-celtic dark:text-emerald absolute -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                fill="currentColor"
              >
                <path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  strokeWidth="2"
                ></path>
              </svg>
            </span>
          </Link>{" "}
          in full-time remote 🏡 with more than +5 years of experience. I am
          also the founder of{" "}
          <Link
            className="text-celtic dark:text-emerald hover:text-pacific dark:hover:text-mint"
            href="https://galsen.dev"
            target="_blank"
          >
            <span className="text-sm font-bold mx-1 relative inline-block stroke-current">
              Galsen DEV
              <svg
                className="text-celtic dark:text-emerald absolute -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                fill="currentColor"
              >
                <path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  strokeWidth="2"
                ></path>
              </svg>
            </span>
          </Link>
          , the biggest developers community in Senegal & passionate about
          building innovative solution 🚀
        </p>

        <p className="mt-3 text-sm text-night dark:text-snow">
          I enjoy simplifying complex problems into beautiful, intuitive designs
          🌟 My job is to craft a solution that is both functional and
          user-friendly while also being visually appealing.
        </p>

        <ul className="mt-5 flex flex-col gap-y-3">
          <li className="flex items-center gap-x-2.5 text-raisin dark:text-silver">
            <GitHub />
            <Link
              className="text-[13px] text-raisin underline-none hover:text-celtic hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-snow dark:hover:text-emerald"
              href="https://github.com/daoodaba975"
              target="_blank"
            >
              {followers !== null ? (
                <p>{followers} followers</p>
              ) : (
                <p>Loading...</p>
              )}
            </Link>
          </li>
          <li className="flex items-center gap-x-2.5 text-raisin dark:text-silver">
            <X />
            <Link
              className="text-[13px] text-raisin underline hover:text-celtic hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-snow dark:hover:text-emerald"
              href="https://x.com/daoodaba975"
              target="_blank"
            >
              @daoodaba975
            </Link>
          </li>
          <li className="flex items-center gap-x-2.5 text-raisin dark:text-silver">
            <LinkedIn />
            <Link
              className="text-[13px] text-raisin underline hover:text-celtic hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-snow dark:hover:text-emerald"
              href="https://www.linkedin.com/in/daoodaba975"
              target="_blank"
            >
              @in/daoodaba975
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Readme;
