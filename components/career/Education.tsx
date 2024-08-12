import React from "react";
import Image from "next/image";

const Education = () => {
  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-3 font-medium text-raisin dark:text-snow">
        📌 Education.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-4 border border-silver rounded-lg dark:border-raisin">
          <Image
            src="/xp/odc.png"
            className="shrink-0 size-10 mb-3 rounded"
            width={32}
            height={32}
            alt="ODC logo"
          />

          <h3 className="mb-1 text-xs text-night dark:text-snow">
            2019 / 2020
          </h3>

          <p className="font-semibold text-sm text-raisin dark:text-snow">
            Professional Certificate of Specialization in Web & Mobile
            Development.
          </p>

          <p className="mt-1 text-sm text-night dark:text-snow">
            Sonatel Academy (ODC)
          </p>
        </div>

        <div className="p-4 border border-silver rounded-lg dark:border-raisin">
          <Image
            src="/xp/isi.png"
            className="shrink-0 size-10 mb-3 rounded"
            width={32}
            height={32}
            alt="ISI logo"
          />

          <h3 className="mb-1 text-xs text-night dark:text-snow">
            2016 / 2019
          </h3>

          <p className="font-semibold text-sm text-raisin dark:text-snow">
            Licence in Software Engineering.
          </p>

          <p className="mt-1 text-sm text-night dark:text-snow">
            Institut Supérieur de l&apos;Informatique (ISI)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
