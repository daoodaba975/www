import Link from "next/link";

interface MdxLinkProps {
  href: string;
  name: string;
}

export default function MdxLink({ href, name }: MdxLinkProps) {
  return (
    <Link
      className="font-semibold text-celtic underline"
      href={href}
      target="_blank"
    >
      {name}
    </Link>
  );
}
