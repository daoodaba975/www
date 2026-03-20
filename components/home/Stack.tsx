import Image from "next/image";
import { motion } from "framer-motion";

const mainStack = [
  { src: "/img/stacks/react.webp", label: "React" },
  { src: "/img/stacks/nextjs.webp", label: "Next" },
  { src: "/img/stacks/tailwindcss.webp", label: "Tailwind" },
  { src: "/img/stacks/flutter.webp", label: "Flutter" },
  { src: "/img/stacks/elysiajs.webp", label: "Elysia" },
  { src: "/img/stacks/golang.webp", label: "Go" },
  { src: "/img/stacks/postgresql.webp", label: "PostgreSQL" },
  {
    src: "/img/stacks/drizzle_light.webp",
    srcDark: "/img/stacks/drizzle_dark.webp",
    label: "Drizzle",
  },
  {
    src: "/img/stacks/better_auth_light.webp",
    srcDark: "/img/stacks/better_auth_dark.webp",
    label: "Better Auth",
  },
  { src: "/img/stacks/vscode.webp", label: "VS Code" },
  { src: "/img/stacks/docker.webp", label: "Docker" },
];

const Stack = () => {
  return (
    <div className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-eigengrau dark:text-snow">
        📦 Stacks.
      </h2>

      <div className="flex flex-wrap gap-3 mb-6">
        {mainStack.map(({ src, srcDark, label }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-lico/50 dark:border-eigengrau/40 bg-snow/40 dark:bg-eigengrau/20 hover:border-celtic/20 dark:hover:border-celtic/20 transition-colors cursor-default"
          >
            {srcDark ? (
              <>
                <Image
                  className="w-4 h-4 block dark:hidden"
                  src={src}
                  alt={label}
                  width={16}
                  height={16}
                />
                <Image
                  className="w-4 h-4 hidden dark:block"
                  src={srcDark}
                  alt={label}
                  width={16}
                  height={16}
                />
              </>
            ) : (
              <Image
                className="w-4 h-4"
                src={src}
                alt={label}
                width={16}
                height={16}
              />
            )}
            <span className="text-xs font-medium text-eigengrau dark:text-silver">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
