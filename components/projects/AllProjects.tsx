import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaCoffee } from "react-icons/fa";

import { projects } from "@/../data/project";

interface Project {
  name: string;
  repo: string;
  description: string;
  url?: string;
  stars?: number;
}
const AllProjects = () => {
  const [projectData, setProjectData] = useState<Project[]>(projects);
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  useEffect(() => {
    const fetchProjectData = async () => {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          const response = await fetch(
            `https://api.github.com/repos/${project.repo}`,
            {
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
              },
            }
          );
          if (!response.ok) {
            console.error(`Failed to fetch data for repo: ${project.repo}`);
            return project;
          }
          const data = await response.json();
          return {
            ...project,
            url: data.html_url,
            stars: data.stargazers_count,
          };
        })
      );
      setProjectData(updatedProjects);
    };

    fetchProjectData();
  }, [GITHUB_TOKEN]);

  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-raisin dark:text-snow">
        ⚡ Projects.
      </h2>
      <p className="mb-5 text-sm text-raisin dark:text-snow">
        Here is a list of my open-source projects. I love experimenting with new
        technologies, sharing ideas, and collaborating with others. Feel free to
        join me in creating innovative solutions and making a positive impact
        together !
      </p>
      <div>
        {projectData.map((project) => (
          <div key={project.repo} className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-silver dark:after:bg-raisin">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-silver dark:bg-raisin"></div>
              </div>
            </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-raisin dark:text-snow">
                {project.name}
              </h3>
              <span className="rounded-full bg-celtic dark:bg-emerald px-2.5 py-0.5 text-xs text-snow">
                {project.stars} ⭐
              </span>
              <p className="mt-1 text-sm text-raisin dark:text-snow">
                {project.description}
              </p>
              <Link
                className="w-full mt-2 sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border-transparent bg-celtic dark:bg-emerald text-snow hover:bg-pacific dark:text-snow dark:hover:bg-mint hover:text-raisin dark:hover:text-raisin focus:outline-none focus:bg-celtic disabled:opacity-50 disabled:pointer-events-none"
                href={project.url || `https://github.com/${project.repo}`}
                target="_blank"
              >
                View on <FaGithub />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 sm:mt-14">
        <p className="mt-1 text-sm text-raisin dark:text-snow">
          I love contributing to open-source projects and building cutting-edge
          solutions, if you&apos;d like to support my work, you can buy me a
          coffee to help me continue growing and creating amazing things 🤝🏾
        </p>
        <Link
          className="w-full mt-2 sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border-transparent bg-celtic dark:bg-emerald text-snow hover:bg-pacific dark:text-snow dark:hover:bg-mint hover:text-raisin dark:hover:text-raisin focus:outline-none focus:bg-celtic disabled:opacity-50 disabled:pointer-events-none"
          href="https://buymeacoffee.com/daoodaba975"
          target="_blank"
        >
          <FaCoffee /> Buy Me a Coffee
        </Link>
      </div>
    </div>
  );
};

export default AllProjects;
