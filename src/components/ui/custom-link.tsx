"use client";
import cn from "clsx";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  target?: string;
  className?: string;
  onClick?: () => void;
};

export default function CustomLink({
  children,
  href,
  target = "",
  className,
  onClick = () => {},
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        className,
        "cursor-[url(https://gracemmaa.com/pointer.svg),_pointer]"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
