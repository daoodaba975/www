import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import Emoji from "./Emoji";

const Footer = () => {
  return (
    <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div className="py-6 border-t border-silver dark:border-raisin">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <p className="text-xs text-night dark:text-snow">
              <Emoji /> ‒ {new Date().getFullYear()} Daooda.
            </p>
          </div>

          <ul className="flex flex-wrap items-center">
            <li className="flex items-center gap-x-2.5 text-raisin dark:text-silver pe-4 text-xs">
              <FaGithub />
              <Link
                className="text-xs text-raisin underline hover:text-celtic hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-snow dark:hover:text-emerald"
                href="https://github.com/daoodaba975"
                target="_blank"
              >
                #daoodaba975
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
