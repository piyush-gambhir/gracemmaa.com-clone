import cn from "clsx";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  target?: string;
  className?: string;
};

export default function CustomLink({
  children,
  href,
  target,
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        className,
        "cursor-[url(https://gracemmaa.com/pointer.svg),_pointer]"
      )}
    >
      {children}
    </Link>
  );
}
