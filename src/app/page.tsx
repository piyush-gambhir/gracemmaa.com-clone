import Link from "@components/custom-link";
import FeaturedProjectContainer from "@/components/featured-project-container";

export default function Home() {
  return (
    <main className="flex flex-col pb-4">
      <div className="flex flex-col pt-[144px]">
        <div className="flex flex-col pb-[120px]">
          <h1 className="font-extrabold text-[88px] leading-[107px] text-black text-opacity-20 dark:text-white dark:text-opacity-20">
            Grace Ma.
          </h1>
          <h1 className="font-extrabold text-[88px] leading-[107px]">
            Product Designer
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between pb-[112px]">
          <div className="flex flex-col lg:w-[20%]">
            <h2 className="my-2 font-semibold leading-[165%] text-black text-opacity-50 dark:text-white dark:text-opacity-50">
              CURRENT
            </h2>
            <p className="text-lg leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              Freelance Product Designer at{" "}
              <Link
                href=""
                className=" underline cursor-[url(https://gracemmaa.com/pointer.svg),_pointer]"
              >
                Friendly Studio
              </Link>
            </p>
          </div>
          <div className="flex flex-col lg:w-[20%]">
            <h2 className="my-2 font-semibold leading-[165%] text-black text-opacity-50 dark:text-white dark:text-opacity-50">
              SOON
            </h2>
            <p className="text-lg leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              Incoming Product Designer at{" "}
              <Link href="" className=" underline">
                Facebook
              </Link>
            </p>
          </div>
          <div className="flex flex-col lg:w-[20%]">
            <h2 className="my-2 font-semibold leading-[165%] text-black text-opacity-50 dark:text-white dark:text-opacity-50">
              PAST
            </h2>
            <p className="text-lg leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              Former intern at{" "}
              <Link href="" className=" underline">
                Facebook
              </Link>
              ,{" "}
              <Link href="" className=" underline">
                Deloitte Digital
              </Link>
              , and{" "}
              <Link href="" className=" underline">
                Cover
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div id="divider" className="h-16 my-12" />
      <div>
        <h1 className="font-extrabold text-[88px] leading-[107px] text-black text-opacity-20 dark:text-white dark:text-opacity-20">
          Featured Projects.
        </h1>
        <div id="divider" className="h-16 my-12" />
        <FeaturedProjectContainer
          link="/facebook"
          tags={["Product Design", "Internship"]}
          title="Facebook Internship"
          description="A summary of my growth and experiences working at Facebook."
          image="/images/facebook.png"
          imageAlt="Facebook Logo"
          imageClassName="w-auto max-h-[75%]"
        />
        <div id="divider" className="h-16 my-12" />
        <FeaturedProjectContainer
          link="/helios"
          tags={["Product Design", "Case Study"]}
          title="Helios"
          description="Building a community of entrepreneurship and talent."
          image="/images/helios.png"
          imageAlt="Helios Project Image"
          imageClassName="w-auto max-h-[75%]"
        />
        <div id="divider" className="h-16 my-12" />
        <FeaturedProjectContainer
          link="/misc"
          tags={["Gallery", "UI Design"]}
          title="Misc Projects"
          description="Collection of IJI explorations and miscellaneous projects."
          image="/images/misc.png"
          imageAlt="Misc Project Image"
          imageClassName="h-auto max-w-[90%]"
        />
        <div id="small-divider" className="h-4 my-2" />
      </div>
    </main>
  );
}
