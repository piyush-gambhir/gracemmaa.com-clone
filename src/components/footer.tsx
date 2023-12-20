import Link from "@components/ui/custom-link";
import SVGIcons from "@components/ui/svg-icons";
export default function Footer() {
  return (
    <footer className="mt-32 mb-16">
      <h2 className="my-2 font-bold text-4xl leading-[48px] ">
        Let&apos;s Get in Touch
      </h2>
      <p className="leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
        HMU for work, coffee chats, advice, or LMK about your favourite animes
        :)
      </p>
      <div className="flex flex-row mt-12 mb-20 text-lg">
        <Link
          href="https://www.linkedin.com/in/gracemmaa/"
          target="_blank"
          className="text-xl pr-8 flex flex-row items-center text-black hover:text-opacity-50 dark:text-white hover:dark:text-opacity-50"
        >
          <SVGIcons iconName="RightArrow" className="pr-2 w-7 h-5" />
          LinkedIn
        </Link>
        <Link
          href="https://twitter.com/gracemmaa_"
          target="_blank"
          className="text-xl pr-8 flex flex-row items-center text-black hover:text-opacity-50 dark:text-white hover:dark:text-opacity-50"
        >
          <SVGIcons iconName="RightArrow" className="pr-2 w-7 h-5" />
          Twitter
        </Link>
        <Link
          href="mailto:g8ma@uwaterloo.ca"
          className="text-xl pr-8 flex flex-row items-center text-black hover:text-opacity-50 dark:text-white hover:dark:text-opacity-50"
        >
          <SVGIcons iconName="RightArrow" className="pr-2 w-7 h-5" />
          Email
        </Link>
      </div>
      <div className="">
        <p className="leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
          Designed and coded by Grace Ma ❤️ —much love to Ahrar and Omar for JS
          help!
        </p>
        <p className="mt-4 font-normal text-sm leading-6 dark:text-white dark:text-opacity-50">
          © Grace Ma 2021
        </p>
      </div>
    </footer>
  );
}
