import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import SVGIcons from "./svg-icons";

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex flex-row items-center">
      <label className="inline-flex relative items-center mr-2 cursor-[url(https://gracemmaa.com/pointer.svg),_pointer]">
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
          className=" w-11 h-6 bg-[#cccccc] rounded-full peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-[2px] after:bg-[#acacac] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#585858]"
        ></div>
      </label>
      <SVGIcons iconName="Moon" className="w-4 h-4 " />
    </div>
  );
}
