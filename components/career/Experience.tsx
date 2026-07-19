import Image from "next/image";
import { Briefcase } from "@phosphor-icons/react";

import { experiences, formatMonth } from "@/data/career";

const Experience = () => {
  return (
    <section className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-eigengrau dark:text-snow">
        🧷 Work experience.
      </h2>

      <ol className="list-none">
        {experiences.map((experience) => (
          <li
            key={`${experience.company ?? experience.context}-${experience.start}`}
            className="group relative flex gap-x-5"
          >
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-silver dark:after:bg-gayvin">
              <div className="relative z-10 size-6 flex justify-center items-center text-eigengrau dark:text-snow">
                {experience.logo ? (
                  <Image
                    src={experience.logo}
                    className="shrink-0 size-6 rounded"
                    width={48}
                    height={48}
                    alt={`${experience.company ?? experience.context} logo`}
                  />
                ) : (
                  <Briefcase />
                )}
              </div>
            </div>
            <div className="grow pb-8 group-last:pb-0">
              <p className="font-semibold text-sm text-eigengrau dark:text-snow">
                {experience.role}
              </p>
              <p className="mb-1 text-xs text-night dark:text-snow">
                {experience.company
                  ? `@ ${experience.company} (${experience.context})`
                  : experience.context}{" "}
                -{" "}
                {experience.end ? (
                  <>
                    <time dateTime={experience.start}>
                      {formatMonth(experience.start)}
                    </time>{" "}
                    /{" "}
                    <time dateTime={experience.end}>
                      {formatMonth(experience.end)}
                    </time>
                  </>
                ) : (
                  <>
                    since{" "}
                    <time dateTime={experience.start}>
                      {formatMonth(experience.start)}
                    </time>
                  </>
                )}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
