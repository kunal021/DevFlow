import Image from "next/image";
import Link from "next/link";

interface Props {
  imgurl: string;
  href?: string;
  title: string;
}

function ProfileLink({ imgurl, href, title }: Props) {
  return (
    <div className="flex-center gap-1">
      <Image src={imgurl} alt={title} height={20} width={20} />
      {href ? (
        <Link
          href={href}
          target="_blank"
          className="text-blue-500 paragraph-medium"
        >
          {title}
        </Link>
      ) : (
        <p className="text-dark400_light700 paragraph-medium">{title}</p>
      )}
    </div>
  );
}

export default ProfileLink;
