import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import DarkModeToggle from "./DarkModeToggle";
import { HomePath, CareerPath, ProjectsPath, ArticlesPath } from "@/../routes";

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm backdrop-filter backdrop-blur-lg bg-opacity-30">
      <nav className="mt-4 relative max-w-2xl w-full border border-silver dark:border-raisin rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto">
        <div className="px-4 md:px-0 flex justify-between items-center">
          <div>
            <Link
              className="flex-none rounded-md text-xl inline-block focus:outline-none focus:opacity-80"
              href="/"
            >
              <Image
                src="/logo/logo-touch.png"
                alt="Daooda Logo"
                width={35}
                height={35}
              />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle flex justify-center items-center size-6 border border-silver text-raisin rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-raisin dark:text-snow dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              id="hs-navbar-header-floating-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-header-floating"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-header-floating"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="hs-navbar-header-floating"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
          aria-labelledby="hs-navbar-header-floating-collapse"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
            <Link
              className={
                currentPath === HomePath
                  ? "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-4 border-raisin font-extrabold text-night hover:text-raisin focus:outline-none dark:border-snow dark:text-snow"
                  : "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 border-transparent text-raisin hover:text-celtic focus:outline-none dark:text-silver dark:hover:text-emerald"
              }
              href={HomePath}
              aria-current="page"
            >
              home
            </Link>
            <Link
              className={
                currentPath === CareerPath
                  ? "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-4 border-raisin font-extrabold text-night hover:text-raisin focus:outline-none dark:border-snow dark:text-snow"
                  : "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 border-transparent text-raisin hover:text-celtic focus:outline-none dark:text-silver dark:hover:text-emerald"
              }
              href={CareerPath}
            >
              /career
            </Link>
            <Link
              className={
                currentPath === ProjectsPath
                  ? "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-4 border-raisin font-extrabold text-night hover:text-raisin focus:outline-none dark:border-snow dark:text-snow"
                  : "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 border-transparent text-raisin hover:text-celtic focus:outline-none dark:text-silver dark:hover:text-emerald"
              }
              href={ProjectsPath}
            >
              /projects
            </Link>
            <Link
              className={
                currentPath === ArticlesPath
                  ? "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-4 border-raisin font-extrabold text-night hover:text-raisin focus:outline-none dark:border-snow dark:text-snow"
                  : "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 border-transparent text-raisin hover:text-celtic focus:outline-none dark:text-silver dark:hover:text-emerald"
              }
              href={ArticlesPath}
            >
              /articles
            </Link>
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
