import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-3 font-medium text-eigengrau dark:text-snow">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 border-y border-lico divide-y sm:divide-y-0 sm:divide-x divide-silver dark:divide-eigengrau dark:border-eigengrau">
        <div className="sm:-ms-4 py-6 sm:px-4">
          <blockquote>
            <span className="text-sm text-eigengrau dark:text-snow">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iste
              officia nemo eos atque ullam sequi. Reiciendis sapiente iure
              quibusdam omnis libero excepturi perspiciatis quae provident nulla
              consectetur? Excepturi, iste.
            </span>

            <footer className="mt-3">
              <div className="flex items-center gap-x-2">
                <Image
                  className="shrink-0 size-5 rounded-full"
                  src="/img/daooda.webp"
                  width={100}
                  height={100}
                  alt="Avatar"
                />
                <div className="grow">
                  <div className="text-xs text-eigengrau dark:text-snow">
                    Firstname Lastname
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>

        <div className="py-6 sm:px-4">
          <blockquote>
            <span className="text-sm text-eigengrau dark:text-snow">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iste
              officia nemo eos atque ullam sequi. Reiciendis sapiente iure
              quibusdam omnis libero excepturi perspiciatis quae provident nulla
              consectetur? Excepturi, iste.
            </span>

            <footer className="mt-3">
              <div className="flex items-center gap-x-2">
                <Image
                  className="shrink-0 size-5 rounded-full"
                  src="/img/daooda.webp"
                  width={100}
                  height={100}
                  alt="Avatar"
                />
                <div className="grow">
                  <div className="text-xs text-eigengrau dark:text-snow">
                    Firstname Lastname
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
