import { ElementType } from "react";

interface MdxHeadingProps {
  as?: "h1" | "h2" | "h3";
  children?: React.ReactNode;
  id?: string;
}

const sizeMap = {
  h1: "text-3xl font-bold",
  h2: "text-2xl font-semibold",
  h3: "text-xl font-medium",
};

export default function MdxHeading({
  as = "h2",
  children,
  id,
}: MdxHeadingProps) {
  const Component = as as ElementType;

  return (
    <Component
      id={id}
      className={`mt-6 mb-2 leading-snug ${sizeMap[as]} text-eigengrau dark:text-snow`}
    >
      {children}
    </Component>
  );
}
