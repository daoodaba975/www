import { useEffect, useState } from "react";
import Link from "next/link";
import { GithubLogo } from "@phosphor-icons/react";

import { projects } from "@/../data/project";

interface Project {
  name: string;
  repo: string;
  description: string;
  url?: string;
  stars?: number;
}

const AllProjects = () => {
  const projectData = projects;

  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-eigengrau dark:text-snow">
        ⚡ Projects.
      </h2>
      <p className="mb-5 text-sm text-eigengrau dark:text-snow">
        Here is a list of my open-source projects. I love experimenting with new
        technologies, sharing ideas, and collaborating with others. Feel free to
        join me and contribute !
      </p>
      <div>
        {projectData.map((project) => (
          <div key={project.repo} className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-silver dark:after:bg-gayvin">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-silver dark:bg-gayvin"></div>
              </div>
            </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-eigengrau dark:text-snow">
                {project.name}
              </h3>

              <p className="mt-1 text-sm text-eigengrau dark:text-snow">
                {project.description}
              </p>
              <Link
                className="w-full mt-2 sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border-transparent bg-celtic text-snow hover:bg-pacific dark:text-snow hover:text-lico dark:hover:text-lico focus:outline-none focus:bg-celtic disabled:opacity-50 disabled:pointer-events-none"
                href={project.url || `https://github.com/${project.repo}`}
                target="_blank"
              >
                View on <GithubLogo />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
