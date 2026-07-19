import Image from "next/image";

import { educations } from "@/data/career";

const Education = () => {
  return (
    <section className="mt-10 sm:mt-14">
      <h2 className="mb-3 font-medium text-eigengrau dark:text-snow">
        📌 Education.
      </h2>

      <ul className="list-none grid grid-cols-1 sm:grid-cols-2 gap-3">
        {educations.map((education) => (
          <li
            key={`${education.school}-${education.start}`}
            className="p-4 border border-lico rounded-lg dark:border-eigengrau"
          >
            <Image
              src={education.logo}
              className="shrink-0 size-10 mb-3 rounded"
              width={80}
              height={80}
              alt={education.logoAlt}
            />

            <h3 className="mb-1 text-xs text-night dark:text-snow">
              <time dateTime={education.start}>{education.start}</time> /{" "}
              <time dateTime={education.end}>{education.end}</time>
            </h3>

            <p className="font-semibold text-sm text-eigengrau dark:text-snow">
              {education.degree}
            </p>

            <p className="mt-1 text-sm text-night dark:text-snow">
              {education.school}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
