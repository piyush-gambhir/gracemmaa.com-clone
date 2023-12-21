import Image from "next/image";
import cn from "clsx";

import SmallDivider from "@components/ui/small-divider";
import BackToTop from "@/components/ui/back-to-top";

export default function Facebook() {
  return (
    <main className="flex flex-col">
      <div className="overflow-clip h-[30rem] flex my-8 bg-black bg-opacity-[0.06] dark:bg-white dark:bg-opacity-[0.06] rounded-lg items-center justify-center transition-all duration-300 ease-out group-hover:bg-opacity-[0.02] group-hover:dark:bg-opacity-[0.02]">
        <Image
          src="/images/facebook.png"
          alt="Facebook Logo"
          width={640}
          height={360}
          className={cn("overflow-clip transition-all duration-300")}
        />
      </div>
      <div className="my-12">
        <h2 className="font-bold text-[2rem] sm:text-[2.5rem] leading-[1.25em] sm:leading-[48px] my-2">
          Facebook Internship (NDA)
        </h2>
        <SmallDivider />
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col lg:w-[20%] pb-8 sm:pb-0">
            <h2 className="text-xl my-2 font-semibold leading-[165%] text-black text-opacity-50 dark:text-white dark:text-opacity-50">
              ROLE
            </h2>
            <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              Product Design Intern
            </p>
          </div>
          <div className="flex flex-col lg:w-[20%] pb-8 sm:pb-0">
            <h2 className="text-xl my-2 font-semibold leading-[165%] text-black text-opacity-50 dark:text-white dark:text-opacity-50">
              TEAM
            </h2>
            <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              Ads and Business Platform
            </p>
          </div>
          <div className="flex flex-col lg:w-[20%] pb-8 sm:pb-0">
            <h2 className="text-xl my-2 font-semibold leading-[165%] text-black text-opacity-50 dark:text-white dark:text-opacity-50">
              DURATION
            </h2>
            <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              June to August 2020 (12 weeks)
            </p>
          </div>
        </div>
      </div>
      <div className="mb-32 flex flex-col">
        <div className="mt-32 flex flex-col sm:flex-row">
          <div className="sm:w-[35%] pb-8 sm:pb-0 pr-12">
            <h5 className="text-[2.5rem] leading-[3rem] mb-2">Brief</h5>
          </div>
          <div className="sm:w-[65%]">
            <p className="mb-4 text-2xl leading-9 font-semibold text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              I worked on a feature for an internal design tool that supports
              design systems and improves communication between engineers and
              designers.
            </p>
            <br />
            <p className="mb-4 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              Over the summer, I joined Facebook&apos;s Ads and Business pillar
              as a product design intern. I was placed on a team centred around
              building an internal design tool and improving its experience f or
              the many users within the organization. The feature I worked on
              enabled engineers to better understand the work that designers
              shipped in the context of code, emphasizing consistency and ease
              of use. While this project is under NDA and I cannot elaborate on
              the product itself, I can share a few of the responsibilities that
              I had and what I did to reach my goal.
            </p>
          </div>
        </div>
        <div className="mt-32 flex flex-col sm:flex-row">
          <div className="sm:w-[35%] pb-8 sm:pb-0 pr-12">
            <h5 className="text-[2.5rem] leading-[3rem] mb-2">
              Learning and Growth
            </h5>
          </div>
          <div className="sm:w-[65%]">
            <p className="text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              Finding the best solution for my project involved learning a lot
              of new concepts and skills, getting guidance where needed, taking
              on tasks and going out of my comfort zone. The first phase of my
              project focused on understanding the main problem I was tackling.
              This meant speaking to numerous cross-functional collaborators to
              learn more about the product itself and have a sense of their pain
              points and goals. Though these meetings were initially conducted
              with the help of my intern manager, this was an area for growth
              for me as I became more familiar with the work and led these
              meetings myself later on.
            </p>
            <br />
            <br />
            <p className="text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              A large portion of my time was spent wireframing and iterating on
              the product feature. I had a lot of ideas which I committed to
              pixels on the screen, and created as much as time allowed. I
              learned how to be a better storyteller when presenting my work in
              team design critique sessions, which I participated in frequently
              in order to get as much valuable feedback as I could. After
              creating numerous iterations and an interactive prototype for the
              feature, I validated and tested my assumptions. I wrote a script
              and conducted several user testing sessions which provided me
              valuable insight that I then applied to the next versions of my
              work.
            </p>
          </div>
        </div>
        <div className="mt-32 flex flex-col sm:flex-row">
          <div className="sm:w-[35%] pb-8 sm:pb-0 pr-12">
            <h5 className="text-[2.5rem] leading-[3rem] mb-2">Takeaway</h5>
          </div>
          <div className="sm:w-[65%]">
            <p className="mb-4 text-2xl leading-9 font-semibold text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              The work was very challenging, but that pushed me to learn more
              than at any other internship.
            </p>
            <br />
            <p className="mb-4 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              My internship with Facebook was certainly challenging. I was
              solving a problem in a completely new space, and there was a lot
              to learn about the organization itself before I could even dive
              deep on my specific project. Nevertheless, these challenges proved
              to be a huge catalyst for my growth and drove me to perform new
              tasks and pushed me outside of my comfort zone with new
              experiences. Overall, I learned how to tackle problems from a high
              level before getting into the details, and I&apos;ve certainly
              become more familiar with collaborating cross-functionally.
            </p>
          </div>
        </div>
      </div>
      <BackToTop />
    </main>
  );
}
