import React from "react";
import Link from "next/link";

import Mail from "../svg/Mail";
import Arrow from "../svg/Arrow";

const Subscribe = () => {
  return (
    <div className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-raisin dark:text-snow">
        📬 Subscribe.
      </h2>

      <form>
        <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-silver rounded-lg dark:border-raisin">
          <div className="relative w-full">
            <label className="sr-only">Subscribe</label>
            <div className="absolute text-raisin dark:text-silver inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
              <Mail />
            </div>
            <input
              type="text"
              id="hero-input"
              name="hero-input"
              className="py-2 ps-9 pe-3 block w-full border-silver rounded-lg text-sm focus:border-silver outline-pacific dark:outline-mint focus:ring-silver disabled:opacity-50 disabled:pointer-events-none bg-snow dark:bg-raisin dark:text-snow dark:placeholder-snow"
              placeholder="Enter your email"
            />
          </div>
          <Link
            className="w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border-transparent bg-celtic dark:bg-emerald text-snow hover:bg-pacific dark:text-snow dark:hover:bg-mint hover:text-raisin dark:hover:text-raisin focus:outline-none focus:bg-celtic disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Join
            <Arrow />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
