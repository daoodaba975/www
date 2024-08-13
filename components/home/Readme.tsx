import React from "react";
import Image from "next/image";
import Link from "next/link";

import GitHub from "../svg/GitHub";
import X from "../svg/X";
import Mail from "../svg/Mail";
import LinkedIn from "../svg/LinkedIn";

const Readme = () => {
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
          <h1 className="text-lg font-medium text-raisin dark:text-snow">
            Daouda BA
          </h1>
          <p className="text-sm text-night dark:text-snow">
            FullStack Developer
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-night dark:text-snow">
          I am a FullStack Developer based at DAKAR, Senegal working in the
          field of web and mobile development. Currently working @ Turing
          Consulting Group in full-time remote 🏡 with more than +5 years of
          experience. I am also the founder of Galsen DEV, the biggest
          developers community in Senegal & passionate about building innovative
          solution 🚀
        </p>

        <p className="mt-3 text-sm text-night dark:text-snow">
          I enjoy simplifying complex problems into beautiful, intuitive designs
          🌟 My job is to craft a solution that is both functional and
          user-friendly while also being visually appealing.
        </p>

        <ul className="mt-5 flex flex-col gap-y-3">
          <li className="flex items-center gap-x-2.5 text-raisin dark:text-silver">
            <Mail />
            <Link
              className="text-[13px] text-raisin underline hover:text-celtic hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-snow dark:hover:text-emerald"
              href="mailto:daoodaba975@gmail.com"
              target="_blank"
            >
              daoodaba975@gmail.com
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
            <GitHub />
            <Link
              className="text-[13px] text-raisin underline hover:text-celtic hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-snow dark:hover:text-emerald"
              href="https://github.com/daoodaba975"
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
