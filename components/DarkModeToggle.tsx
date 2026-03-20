import React, { useState, useEffect } from "react";
import { MoonStars, Sun } from "@phosphor-icons/react";

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
        } hs-dark-mode font-medium text-eigengrau rounded-full hover:bg-silver focus:outline-none dark:text-snow dark:hover:bg-eigengrau`}
        onClick={() => handleThemeChange("dark")}
        data-hs-theme-click-value="dark"
      >
        <span className="group inline-flex shrink-0 justify-center items-center size-9">
          <MoonStars weight="fill" />
        </span>
      </button>
      <button
        type="button"
        className={`${
          theme === "dark" ? "block" : "hidden"
        } hs-dark-mode font-medium text-eigengrau rounded-full hover:bg-silver focus:outline-none dark:text-snow dark:hover:bg-eigengrau`}
        onClick={() => handleThemeChange("light")}
        data-hs-theme-click-value="light"
      >
        <span className="group inline-flex shrink-0 justify-center items-center size-9">
          <Sun weight="fill" />
        </span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
