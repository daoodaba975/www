import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";

import DarkModeToggle from "./DarkModeToggle";
import { HomePath, CareerPath, ProjectsPath, ArticlesPath } from "@/../routes";

const Navbar = () => {
  const currentPath = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

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
                src="/img/logo.webp"
                alt="Daooda Logo"
                width={35}
                height={35}
              />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="flex justify-center items-center size-6 border border-silver text-raisin rounded-full focus:outline-none focus:bg-silver dark:border-raisin dark:text-snow dark:hover:bg-silver dark:focus:bg-raisin"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="navbar-menu"
              aria-label="Toggle navigation"
            >
              {menuOpen ? (
                <span className="shrink-0 size-4">
                  <IoClose />
                </span>
              ) : (
                <span className="shrink-0 size-3.5">
                  <IoMenu />
                </span>
              )}
            </button>
          </div>
        </div>

        <div
          id="navbar-menu"
          className={`overflow-hidden transition-all duration-300 md:block ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
            <Link
              className={
                currentPath === HomePath
                  ? "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-4 border-raisin font-extrabold text-night hover:text-raisin focus:outline-none dark:border-snow dark:text-snow"
                  : "py-0.5 md:py-3 px-4 md:px-1 md:border-s-0 border-transparent text-raisin hover:text-celtic focus:outline-none dark:text-silver dark:hover:text-emerald"
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
                  : "py-0.5 md:py-3 px-4 md:px-1 md:border-s-0 border-transparent text-raisin hover:text-celtic focus:outline-none dark:text-silver dark:hover:text-emerald"
              }
              href={CareerPath}
            >
              /career
            </Link>
            <Link
              className={
                currentPath === ProjectsPath
                  ? "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-4 border-raisin font-extrabold text-night hover:text-raisin focus:outline-none dark:border-snow dark:text-snow"
                  : "py-0.5 md:py-3 px-4 md:px-1 md:border-s-0 border-transparent text-raisin hover:text-celtic focus:outline-none dark:text-silver dark:hover:text-emerald"
              }
              href={ProjectsPath}
            >
              /projects
            </Link>
            <Link
              className={
                currentPath === ArticlesPath
                  ? "py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-4 border-raisin font-extrabold text-night hover:text-raisin focus:outline-none dark:border-snow dark:text-snow"
                  : "py-0.5 md:py-3 px-4 md:px-1 md:border-s-0 border-transparent text-raisin hover:text-celtic focus:outline-none dark:text-silver dark:hover:text-emerald"
              }
              href={ArticlesPath}
            >
              /articles
            </Link>
            <span className="flex items-center">
              <DarkModeToggle />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
