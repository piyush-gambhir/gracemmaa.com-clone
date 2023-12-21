"use client";
import SVGIcons from "./svg-icons";

export default function BackToTop() {
  return (
    <div className="flex flex-row justify-end mt-8 mb-12">
      <button
        onClick={() => window.scrollTo(0, 0)}
        className="pr-8 flex flex-row text-xl items-center gap-1"
      >
        Back to Top
        <SVGIcons iconName="RightArrow" className="w-5 h-7 pb-2 -rotate-90" />
      </button>
    </div>
  );
}
