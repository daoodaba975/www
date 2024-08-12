import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-3 font-medium text-raisin dark:text-snow">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 border-y border-silver divide-y sm:divide-y-0 sm:divide-x divide-gray-200 dark:border-raisin dark:divide-neutral-700">
        <div className="sm:-ms-4 py-6 sm:px-4">
          <blockquote>
            <span className="text-sm text-raisin dark:text-snow">
              I m absolutely floored by the level of care and attention to
              detail Eliana has put into this project and for one can guarantee
              that we will be a return customer.
            </span>

            <footer className="mt-3">
              <div className="flex items-center gap-x-2">
                <Image
                  className="shrink-0 size-5 rounded-full"
                  src="/testimonial.jpeg"
                  width={100}
                  height={100}
                  alt="Avatar"
                />
                <div className="grow">
                  <div className="text-xs text-raisin dark:text-snow">
                    Josh Grazioso
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>

        <div className="py-6 sm:px-4">
          <blockquote>
            <span className="text-sm text-raisin dark:text-snow">
              To say that hiring Eliana has been life-changing is an
              understatement. My business has tripled and I got my life back.
            </span>

            <footer className="mt-3">
              <div className="flex items-center gap-x-2">
                <Image
                  className="shrink-0 size-5 rounded-full"
                  src="/testimonial.jpeg"
                  width={100}
                  height={100}
                  alt="Avatar"
                />
                <div className="grow">
                  <div className="text-xs text-raisin dark:text-snow">
                    Nicole Grazioso
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
