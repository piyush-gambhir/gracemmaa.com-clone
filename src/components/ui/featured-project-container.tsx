import Link from "next/link";
import Image from "next/image";
import cn from "clsx";

import SVGIcons from "@/components/ui/svg-icons";

type Props = {
  link: string;
  tags: string[];
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
};

export default function FeaturedProjectContainer({
  link,
  tags,
  title,
  description,
  image,
  imageAlt,
  imageClassName,
}: Props) {
  return (
    <Link
      href={link}
      className="group cursor-[url(https://gracemmaa.com/pointer.svg),_pointer]"
    >
      <div className="flex flex-row pb-8">
        {tags.map((tag) => (
          <div
            key={tag.toLowerCase()}
            className="py-2 px-4 mr-2 bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10 rounded-lg"
          >
            <p className="text-sm leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              {tag.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center">
        <h2 className="font-extrabold text-4xl leading-[48px] my-2 mr-4">
          {title}
        </h2>
        <SVGIcons
          iconName="LongRightArrow"
          className="text-black group-hover:text-opacity-50 dark:text-white group-hover:dark:text-opacity-50 group-hover:translate-x-4 transition-transform ease-in-out duration-300 w-10 h-10"
        />
      </div>
      <div className="my-4 text-xl">{description}</div>
      <div className="overflow-clip h-[30rem] flex my-8 bg-black bg-opacity-[0.06] dark:bg-white dark:bg-opacity-[0.06] rounded-lg items-center justify-center transition-all duration-300 ease-out group-hover:bg-opacity-[0.02] group-hover:dark:bg-opacity-[0.02]">
        <Image
          src={image}
          alt={imageAlt}
          width={1103}
          height={360}
          className={cn(
            "overflow-clip transition-all duration-300 ease-in-out group-hover:scale-105",
            imageClassName
          )}
        />
      </div>
    </Link>
  );
}
