import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About-Grace",
};

import Link from "@components/ui/custom-link";
import Divider from "@components/ui/divider";
import SmallDivider from "@components/ui/small-divider";
import SVGIcons from "@components/ui/svg-icons";

export default function About() {
  const WatchingImagePaths = [
    "/images/about/watching/show1.png",
    "/images/about/watching/show2.png",
    "/images/about/watching/show3.png",
    "/images/about/watching/show4.png",
    "/images/about/watching/show5.png",
    "/images/about/watching/show6.png",
  ];
  const ListeningImagePaths = [
    "/images/about/listening/song1.png",
    "/images/about/listening/song2.png",
    "/images/about/listening/song3.png",
  ];
  return (
    <main className="flex flex-col w-full">
      <div className="flex flex-col sm:flex-row justify-between mt-[128px]">
        <div className="order-2 flex flex-col sm:w-2/5">
          <div className="flex flex-col">
            <h1 className="font-extrabold text-[3.5rem] sm:text-[5.5rem] leading-[1.25em] sm:leading-[107px] text-black text-opacity-20 dark:text-white dark:text-opacity-20">
              Hey there,
            </h1>
            <h1 className="flex-wrap font-extrabold text-[3.5rem] sm:text-[5.5rem] leading-[1.25em] sm:leading-[107px]">
              I&apos;m Grace.
            </h1>
          </div>
          <SmallDivider />
          <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
            I&apos;m a product designer who began their career as the quiet,
            artsy kid at the back of the classroom, constantly doodling in their
            workbooks. My combined passions for art, storytelling, and
            psychology brought me here, in a position where I can demystify the
            everyday problems of users and empower them with delightful
            experiences and solutions. I studied Global Business and Digital
            Arts at the University of Waterloo, and as a recent grad, I&apos;m
            looking forward to my next chapter!
          </p>
          <SmallDivider />
          <Link
            href="https://gracemmaa.com/files/Grace_Resume2021.pdf"
            className="text-xl pr-8 flex flex-row items-center dark:text-white hover:text-opacity-50"
          >
            <SVGIcons iconName="RightArrow" className="pr-2 w-7 h-5" />
            Resume
          </Link>
        </div>
        <div className="order-1 pb-16 sm:pb-0 sm:w-2/5">
          <Image
            src="/images/about/grace.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="rounded-lg max-h-full max-y-full "
          />
        </div>
      </div>
      <Divider />
      <SmallDivider />
      <div className="">
        <h1 className="font-extrabold text-[3.5rem] sm:text-[5.5rem] leading-[1.25em] sm:leading-[107px] text-black text-opacity-20 dark:text-white dark:text-opacity-20">
          Community.
        </h1>
        <Divider />
        <div className="mb-40 flex flex-col sm:flex-row">
          <div className="sm:w-1/2 pr-8 pb-8 sm:pb-0">
            <h2 className="text-[2.5rem] font-bold leading-[48px] my-2">
              VP Design &amp; Product Designer
            </h2>
            <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              <Link
                href="https://uwblueprint.org/"
                className=" underline"
                target="_blank"
              >
                UW Blueprint
              </Link>
              —January 2019 to April 2021
            </p>
          </div>
          <div className="sm:w-1/2">
            <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              I spent a few terms building tech for social good at UW Blueprint
              as a product designer. I was on several projects partnered with
              NPO organizations to build products like web applications,
              dashboards, and e-commerce platforms. On my most recent and last
              term of Blueprint, I helped to facilitate strong culture and
              mentorship within the design team.
            </p>
          </div>
        </div>
        <div className="mb-40 flex flex-col sm:flex-row">
          <div className="sm:w-1/2 pr-8 pb-8 sm:pb-0">
            <h2 className="text-[2.5rem] font-bold leading-[48px] my-2">
              Organizer & Logistics
            </h2>
            <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              <Link
                href="https://www.notion.so/Welcome-to-UW-UX-2e1fca25392f460593599c50220434d3"
                className=" underline"
                target="_blank"
              >
                UW/UX
              </Link>
              —September 2020 to March 2021
            </p>
          </div>
          <div className="sm:w-1/2">
            <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              I helped to organize the TILE designathon with UW/UX, an
              organization dedicated to growing the design community at the
              University of Waterloo. As an organizer, I helped to determine the
              goals of our event, reach out to sponsors, create judging plans
              and more.
            </p>
          </div>
        </div>
        <div className="mb-40 flex flex-col sm:flex-row">
          <div className="sm:w-1/2 pr-8 pb-8 sm:pb-0">
            <h2 className="text-[2.5rem] font-bold leading-[48px] my-2">
              Design Lead & Product Designer
            </h2>
            <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              <Link
                href="https://www.starterhacks.ca/"
                className=" underline"
                target="_blank"
              >
                StarterHacks
              </Link>
              —May 2018 to July 2020
            </p>
          </div>
          <div className="sm:w-1/2">
            <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              StarterHacks is a beginner-focused hackathon that I helped
              organize. I was the Design Director from May 2018 to April 2019
              and stayed on the team to work further on our internal tools. Some
              of the projects I worked on include designing the website, mentor
              connect app, and marketing materials.
            </p>
          </div>
        </div>
      </div>
      <Divider />
      <div className="mb-40">
        <h1 className="font-extrabold text-[3.5rem] sm:text-[5.5rem] leading-[1.25em] sm:leading-[107px] text-black text-opacity-20 dark:text-white dark:text-opacity-20">
          Other.
        </h1>
        <Divider />
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="sm:w-1/2 pb-8 sm:pb-0 pr-8">
            <h2 className="text-[2.5rem] font-bold leading-[48px] my-2">
              What I&apos;m listening to
            </h2>
            <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              Don&apos;t by Hwasa and Loco, Comme des Garçons by Jiwoo, Know Me
              by GEMINI
            </p>
          </div>
          <div className="sm:w-1/2 flex flex-wrap sm:pt-8">
            {ListeningImagePaths.map((imagePath) => (
              <Image
                key={imagePath.split("/").pop()}
                src={imagePath}
                alt="Picture of a song."
                width={172}
                height={172}
                className="rounded-lg pr-4 pb-4"
              />
            ))}
          </div>
        </div>
        <Divider />
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2 pb-8 sm:pb-0 pr-8">
            <h2 className="text-[2.5rem] font-bold leading-[48px] my-2">
              What I&apos;m watching
            </h2>
            <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              Attack on Titan, Jujutsu Kaisen, Queen&apos;s Gambit, Heaven
              Official&apos;s Blessing, Criminal Minds, Wonder Egg Priority
            </p>
          </div>
          <div className="sm:w-1/2 flex flex-wrap sm:pt-8">
            {WatchingImagePaths.map((imagePath) => (
              <Image
                key={imagePath.split("/").pop()}
                src={imagePath}
                alt="Picture of a show."
                width={200}
                height={200}
                className="rounded-lg w-[156px] pr-4 pb-4"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
