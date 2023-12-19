import Link from "@components/custom-link";
import SVGIcons from "./svg-icons";
export default function Footer() {
  return (
    <footer className="mt-32 mb-16">
      <h2 className="my-2 font-bold text-4xl  leading-12 ">
        Let&apos;s Get in Touch
      </h2>
      <p>
        HMU for work, coffee chats, advice, or LMK about your favourite animes
        :)
      </p>
      <div className="flex flex-row mt-12 mb-20 text-lg">
        <Link
          href="https://www.linkedin.com/in/gracemmaa/"
          target="_blank"
          className="pr-8 flex flex-row items-center dark:text-white hover:text-opacity-50"
        >
          <SVGIcons iconName="RightArrow" className="pr-2 w-7 h-5" />
          LinkedIn
        </Link>
        <Link
          href="https://twitter.com/gracemmaa_"
          target="_blank"
          className="pr-8 flex flex-row items-center dark:text-white hover:text-opacity-50"
        >
          <SVGIcons iconName="RightArrow" className="pr-2 w-7 h-5" />
          Twitter
        </Link>
        <Link
          href="mailto:g8ma@uwaterloo.ca"
          className="pr-8 flex flex-row items-center dark:text-white hover:text-opacity-50"
        >
          <SVGIcons iconName="RightArrow" className="pr-2 w-7 h-5" />
          Email
        </Link>
      </div>
      <div className="">
        <p className="font-normal text-sm leading-6">
          Designed and coded by Grace Ma &apso;—much love to Ahrar and Omar for
          JS help!
        </p>
        <p className="mt-4 font-normal text-sm leading-6 dark:text-white dark:text-opacity-50">
          © Piyush Gambhir 2023
        </p>
      </div>
    </footer>
  );
}
