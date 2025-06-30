import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-silver dark:bg-eigengrau bg-opacity-70 dark:bg-opacity-70 z-50">
      <Image
        src="/img/logo.webp"
        alt="Loading..."
        width={24}
        height={24}
        className="w-16 h-16 animate-spin"
      />
    </div>
  );
}
