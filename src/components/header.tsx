"use client";

import { useState } from "react";
import cn from "clsx";
import { usePathname } from "next/navigation";

import ThemeToggleButton from "@components/ui/theme-toggle-button";
import Link from "@components/ui/custom-link";

export default function Header() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(
    pathname === "/about" ? "about" : "work"
  );

  return (
    <header className="pb-2 pt-12 flex flex-row justify-between">
      <div className="flex flex-row">
        <Link href="/" className="hidden sm:block pr-3 font-semibold text-2xl">
          Grace.
        </Link>
        <ThemeToggleButton />
      </div>
      <div className="flex flex-row">
        <div className="pl-12 sm:pl-20">
          <Link
            href="/"
            className={cn(
              "text-base font-semibold leading-[19px] pt-6",
              activeTab === "work"
                ? "border-t-4 border-black dark:border-white text-black dark:text-white"
                : "border-t-4 border-transparent text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-black hover:dark:text-white"
            )}
            onClick={() => setActiveTab("work")}
          >
            Work
          </Link>
        </div>
        <div className="pl-12 sm:pl-20">
          <Link
            href="/https://www.instagram.com/graace.png/"
            className={cn(
              "text-base font-semibold leading-[19px] pt-6 border-t-4 border-transparent text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-black hover:dark:text-white"
            )}
          >
            Fun
          </Link>
        </div>
        <div className="pl-12 sm:pl-20">
          <Link
            href="/about"
            className={cn(
              "text-base font-semibold leading-[19px] pt-6",
              activeTab === "about"
                ? "border-t-4 border-black dark:border-white text-black dark:text-white"
                : "border-t-4 border-transparent text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-black hover:dark:text-white"
            )}
            onClick={() => setActiveTab("about")}
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
}
