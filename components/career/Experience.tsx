import Image from "next/image";
import { MdOutlineWorkOutline } from "react-icons/md";

const Experience = () => {
  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-eigengrau dark:text-snow">
        🧷 Work experience.
      </h2>

      <div>
        <div className="group relative flex gap-x-5">
          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-silver dark:after:bg-gayvin">
            <div className="relative z-10 size-6 flex justify-center items-center">
              <Image
                src="/img/career/experience/turing.webp"
                className="shrink-0 size-6 rounded"
                width={32}
                height={32}
                alt="Turing Consulting Group logo"
              />
            </div>
          </div>
          <div className="grow pb-8 group-last:pb-0">
            <p className="font-semibold text-sm text-eigengrau dark:text-snow">
              FullStack Developer
            </p>
            <p className="mb-1 text-xs text-night dark:text-snow">
              @ Turing Consulting Group (Remote, full time) - since November
              2022
            </p>
          </div>
        </div>

        <div className="group relative flex gap-x-5">
          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-silver dark:after:bg-gayvin">
            <div className="relative z-10 size-6 flex justify-center items-center">
              <Image
                src="/img/career/experience/xarala.webp"
                className="shrink-0 size-6 rounded"
                width={32}
                height={32}
                alt="Xarala logo"
              />
            </div>
          </div>
          <div className="grow pb-8 group-last:pb-0">
            <p className="font-semibold text-sm text-eigengrau dark:text-snow">
              Mentor
            </p>
            <p className="mb-1 text-xs text-night dark:text-snow">
              @ Xarala (Online, part-time) - since February 2022
            </p>
          </div>
        </div>

        <div className="group relative flex gap-x-5">
          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-silver dark:after:bg-gayvin">
            <div className="relative z-10 size-6 flex justify-center items-center">
              <Image
                src="/img/career/experience/ciga.webp"
                className="shrink-0 size-6 rounded"
                width={32}
                height={32}
                alt="Ciga logo"
              />
            </div>
          </div>
          <div className="grow pb-8 group-last:pb-0">
            <p className="font-semibold text-sm text-eigengrau dark:text-snow">
              Teacher JavaScript / Mobile Development
            </p>
            <p className="mb-1 text-xs text-night dark:text-snow">
              @ CIGA (On-site, part-time) - December 2023 / March 2025
            </p>
          </div>
        </div>

        <div className="group relative flex gap-x-5">
          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-silver dark:after:bg-gayvin">
            <div className="relative z-10 size-6 flex justify-center items-center">
              <Image
                src="/img/career/experience/norma.webp"
                className="shrink-0 size-6 rounded"
                width={32}
                height={32}
                alt="Norma logo"
              />
            </div>
          </div>
          <div className="grow pb-8 group-last:pb-0">
            <p className="font-semibold text-sm text-eigengrau dark:text-snow">
              FullStack Software Engineer
            </p>
            <p className="mb-1 text-xs text-night dark:text-snow">
              @ Norma (Remote, full time) - September 2021 / January 2022
            </p>
          </div>
        </div>

        <div className="group relative flex gap-x-5">
          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-silver dark:after:bg-gayvin">
            <div className="relative z-10 size-6 flex justify-center items-center">
              <Image
                src="/img/career/experience/turing.webp"
                className="shrink-0 size-6 rounded"
                width={32}
                height={32}
                alt="Turing Consulting Group logo"
              />
            </div>
          </div>
          <div className="grow pb-8 group-last:pb-0">
            <p className="font-semibold text-sm text-eigengrau dark:text-snow">
              Web Developer
            </p>
            <p className="mb-1 text-xs text-night dark:text-snow">
              @ Turing Consulting Group (Remote, full time) - August 2020 /
              September 2021
            </p>
          </div>
        </div>

        <div className="group relative flex gap-x-5">
          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-silver dark:after:bg-gayvin">
            <div className="relative z-10 size-6 flex justify-center items-center text-eigengrau dark:text-snow">
              <MdOutlineWorkOutline />
            </div>
          </div>
          <div className="grow pb-8 group-last:pb-0">
            <p className="font-semibold text-sm text-eigengrau dark:text-snow">
              FullStack Developer
            </p>
            <p className="mb-1 text-xs text-night dark:text-snow">
              Freelance - May 2018 / September 2021
            </p>
          </div>
        </div>

        <div className="group relative flex gap-x-5">
          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px]">
            <div className="relative z-10 size-6 flex justify-center items-center text-eigengrau dark:text-snow">
              <MdOutlineWorkOutline />
            </div>
          </div>
          <div className="grow pb-8 group-last:pb-0">
            <p className="font-semibold text-sm text-eigengrau dark:text-snow">
              Developer Frontend
            </p>
            <p className="mb-1 text-xs text-night dark:text-snow">
              @ Baobab TS (Traineeship) - October 2018 / February 2019
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
