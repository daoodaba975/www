import React from "react";
import Link from "next/link";
import Image from "next/image";

const Error500 = () => {
  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-raisin dark:text-snow">
        ❌ Server Error.
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <div className="group block relative overflow-hidden w-[300px] h-auto">
          <Image
            src="/illustrations/server_down.webp"
            width={300}
            height={200}
            alt="500 error"
          />
        </div>
      </div>
      <Link
        className="mt-5 w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border-transparent bg-celtic dark:bg-emerald text-snow hover:bg-pacific dark:text-snow dark:hover:bg-mint hover:text-raisin dark:hover:text-raisin focus:outline-none focus:bg-celtic disabled:opacity-50 disabled:pointer-events-none"
        href="/"
      >
        Go to home page
      </Link>
    </div>
  );
};
export default Error500;
