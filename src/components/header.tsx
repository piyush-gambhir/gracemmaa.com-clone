"use client";
import ThemeToggleButton from "@components/theme-toggle-button";
import Link from "@components/custom-link";
export default function Header() {
  return (
    <header className="pb-2 pt-12 flex flex-row justify-between">
      <div className="flex flex-row">
        <Link href="/" className="pr-2 font-semibold text-2xl">
          Grace.
        </Link>
        <ThemeToggleButton />
      </div>
      <div className="flex flex-row">
        <Link href="/work" className="">
          Work
        </Link>
        <Link href="/work" className="">
          Fun
        </Link>
        <Link href="/work" className="">
          About
        </Link>
      </div>
    </header>
  );
}
