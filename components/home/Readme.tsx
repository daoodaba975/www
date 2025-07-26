import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import SparkleText from "./SparkleText";
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
          I am a FullStack Developer and Open Source Enthusiast, working in the
          field of web and mobile development. Always down for building cool
          stuff !
        </p>
        <p className="text-sm text-night dark:text-snow">
          I&apos;m also the founder & Lead of{" "}
          <Link
            className="text-celtic hover:text-pacific"
            href="https://galsen.dev"
            target="_blank"
          >
            <span className="text-sm font-bold relative inline-block stroke-current">
              Galsen DEV
              <svg
                className="text-celtic absolute -bottom-0.5 w-full max-h-1.5"
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

        <ul className="mt-5 flex flex-col gap-y-3">
          <li className="flex items-center gap-x-2.5 text-eigengrau dark:text-silver">
            <FaGithub />
            <Link
              className="text-[13px] text-eigengrau underline-none hover:text-celtic hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-snow dark:hover:text-pacific"
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
          <li className="flex items-center gap-x-2.5 text-eigengrau dark:text-silver">
            <FaXTwitter />
            <Link
              className="text-[13px] text-eigengrau underline hover:text-celtic hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-snow dark:hover:text-pacific"
              href="https://x.com/daoodaba975"
              target="_blank"
            >
              @daoodaba975
            </Link>
          </li>
          <li className="flex items-center gap-x-2.5 text-eigengrau dark:text-silver">
            <FaLinkedin />
            <Link
              className="text-[13px] text-eigengrau underline hover:text-celtic hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-snow dark:hover:text-pacific"
              href="https://www.linkedin.com/in/daoodaba975"
              target="_blank"
            >
              @in/daoodaba975
            </Link>
          </li>
          <li className="flex items-center gap-x-2.5 text-eigengrau dark:text-silver">
            <FaMedium />
            <Link
              className="text-[13px] text-eigengrau underline hover:text-celtic hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-snow dark:hover:text-pacific"
              href="https://medium.com/@daoodaba975"
              target="_blank"
            >
              @daoodaba975
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Readme;
