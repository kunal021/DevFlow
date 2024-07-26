import Image from "next/image";
import Link from "next/link";

interface MetricProps {
  imgUrl: string;
  alt: string;
  title: string;
  value: string | number;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

function Metric({
  imgUrl,
  alt,
  title,
  value,
  href,
  textStyles,
  isAuthor,
}: MetricProps) {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        height={16}
        width={16}
        className={`object-contain ${isAuthor ? "rounded-full" : ""}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {metricContent}
      </Link>
    );
  }
  return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
}

export default Metric;
