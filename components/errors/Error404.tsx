import Link from "next/link";
import Image from "next/image";

const Error404 = () => {
  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-eigengrau dark:text-snow">
        ❌ Not Found.
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <div className="group block relative overflow-hidden w-[300px] h-auto">
          <Image
            src="/illustrations/404_error.webp"
            width={300}
            height={200}
            alt="404 error"
          />
        </div>
      </div>
      <Link
        className="mt-5 w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border-transparent bg-celtic text-snow hover:bg-pacific dark:text-snow hover:text-eigengrau dark:hover:text-eigengrau focus:outline-none focus:bg-celtic disabled:opacity-50 disabled:pointer-events-none"
        href="/"
      >
        Go to home page
      </Link>
    </div>
  );
};
export default Error404;
