import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import SVGIcons from "@components/ui/svg-icons";

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
    setMounted(true);
  }, [setTheme, setMounted]);

  if (!mounted) return null;

  return (
    <div className="flex flex-row items-center">
      <label className="mr-2 relative inline-flex items-center cursor-[url(https://gracemmaa.com/pointer.svg),_pointer]">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={theme === "dark"}
          readOnly
        />
        <div
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          className="w-11 h-6 bg-[#cccccc] rounded-full peer-checked:after:translate-x-full after:absolute after:top-[3px] after:left-[6px] after:bg-black after:bg-opacity-50 after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:bg-[#585858]"
        />
      </label>
      <SVGIcons iconName="Moon" className="w-4 h-4 " />
    </div>
  );
}
