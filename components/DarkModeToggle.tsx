import React, { useState, useEffect } from "react";

import Moon from "./svg/Moon";
import Sun from "./svg/Sun";

const DarkModeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("hs_theme");
    const html = document.documentElement;

    if (savedTheme === "dark") {
      setTheme("dark");
      html.classList.add("dark");
    } else {
      setTheme("light");
      html.classList.remove("dark");
    }
  }, []);

  const handleThemeChange = (value: string) => {
    localStorage.setItem("hs_theme", value);
    setTheme(value);

    const html = document.documentElement;
    if (value === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  return (
    <div className="ml-1">
      <button
        type="button"
        className={`${
          theme === "light" ? "block" : "hidden"
        } hs-dark-mode font-medium text-raisin rounded-full hover:bg-silver focus:outline-none dark:text-snow dark:hover:bg-raisin`}
        onClick={() => handleThemeChange("dark")}
        data-hs-theme-click-value="dark"
      >
        <span className="group inline-flex shrink-0 justify-center items-center size-9">
          <Moon />
        </span>
      </button>
      <button
        type="button"
        className={`${
          theme === "dark" ? "block" : "hidden"
        } hs-dark-mode font-medium text-raisin rounded-full hover:bg-silver focus:outline-none dark:text-snow dark:hover:bg-raisin`}
        onClick={() => handleThemeChange("light")}
        data-hs-theme-click-value="light"
      >
        <span className="group inline-flex shrink-0 justify-center items-center size-9">
          <Sun />
        </span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
