import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GithubLogo,
  XLogo,
  LinkedinLogo,
  MediumLogo,
  CalendarDots,
} from "@phosphor-icons/react";

import SparkleText from "./SparkleText";

const Readme = () => {

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
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

        <div className="mt-5 flex items-center gap-x-5 px-4 py-3 rounded-full bg-silver/30 dark:bg-eigengrau/50 border border-lico/40 dark:border-eigengrau/40 w-fit">
          <Link
            className="text-eigengrau/70 dark:text-silver/70 hover:text-eigengrau dark:hover:text-snow transition-colors"
            href="https://x.com/daoodaba"
            target="_blank"
            aria-label="X"
          >
            <XLogo className="w-5 h-5" />
          </Link>
          <Link
            className="text-eigengrau/70 dark:text-silver/70 hover:text-eigengrau dark:hover:text-snow transition-colors"
            href="https://github.com/daoodaba975"
            target="_blank"
            aria-label="GitHub"
          >
            <GithubLogo className="w-5 h-5" />
          </Link>
          <Link
            className="text-eigengrau/70 dark:text-silver/70 hover:text-[#0A66C2] dark:hover:text-snow transition-colors"
            href="https://www.linkedin.com/in/daoodaba"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedinLogo className="w-5 h-5" />
          </Link>
          <Link
            className="text-eigengrau/70 dark:text-silver/70 hover:text-eigengrau dark:hover:text-snow transition-colors"
            href="https://daoodaba.medium.com"
            target="_blank"
            aria-label="Medium"
          >
            <MediumLogo className="w-5 h-5" />
          </Link>
          <Link
            className="text-eigengrau/70 dark:text-silver/70 hover:text-eigengrau dark:hover:text-snow transition-colors"
            href="https://cal.com/daoodaba"
            target="_blank"
            aria-label="Cal"
          >
            <CalendarDots className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.main>
  );
};

export default Readme;
