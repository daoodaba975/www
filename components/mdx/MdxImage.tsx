import Image from "next/image";

interface MdxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function MdxImage({
  src,
  alt,
  width = 800,
  height = 500,
  className = "",
  priority = false,
}: MdxImageProps) {
  return (
    <figure className="my-6">
      <div className="relative w-full" style={{ maxWidth: width }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`rounded-xl border border-lico dark:border-eigengrau shadow-md ${className}`}
          sizes="(max-width: 768px) 100vw, 768px"
          style={{ width: "100%", height: "auto" }}
          priority={priority}
        />
      </div>
    </figure>
  );
}
