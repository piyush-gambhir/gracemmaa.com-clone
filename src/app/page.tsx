import Link from "@components/ui/custom-link";
import FeaturedProjectContainer from "@components/ui/featured-project-container";
import Divider from "@components/ui/divider";
import SmallDivider from "@components/ui/small-divider";

export default function Home() {
  return (
    <main className="flex flex-col pb-4">
      <div className="flex flex-col pt-[144px]">
        <div data-aos="fade-up" data-aos-duration="1000" className="pb-[120px]">
          <h1 className="font-extrabold text-[3.5rem] sm:text-[5.5rem] leading-[1.25em] sm:leading-[107px] text-black text-opacity-20 dark:text-white dark:text-opacity-20">
            Grace Ma.
          </h1>
          <h1 className="flex-wrap font-extrabold text-[3.5rem] sm:text-[5.5rem] leading-[1.25em] sm:leading-[107px]">
            Product Designer.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between pb-[112px]">
          <div className="flex flex-col lg:w-[20%] pb-8 sm:pb-0">
            <h2 className="text-xl my-2 font-semibold leading-[165%] text-black text-opacity-50 dark:text-white dark:text-opacity-50">
              CURRENT
            </h2>
            <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              Freelance Product Designer at{" "}
              <Link
                href=""
                className="underline cursor-[url(https://gracemmaa.com/pointer.svg),_pointer]"
              >
                Friendly Studio
              </Link>
            </p>
          </div>
          <div className="flex flex-col lg:w-[20%] pb-8 sm:pb-0">
            <h2 className="text-xl my-2 font-semibold leading-[165%] text-black text-opacity-50 dark:text-white dark:text-opacity-50">
              SOON
            </h2>
            <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
              Incoming Product Designer at{" "}
              <Link href="" className="underline">
                Facebook
              </Link>
            </p>
          </div>
          <div className="flex flex-col lg:w-[20%] pb-8 sm:pb-0">
            <h2 className="text-xl my-2 font-semibold leading-[165%] text-black text-opacity-50 dark:text-white dark:text-opacity-50">
              PAST
            </h2>
            <p className="text-base leading-7 text-black text-opacity-80 dark:text-white dark:text-opacity-80">
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
      <Divider />
      <div>
        <h1 className="font-extrabold text-[3.5rem] sm:text-[5.5rem] leading-[1.25em] sm:leading-[107px] text-black text-opacity-20 dark:text-white dark:text-opacity-20">
          Featured Projects.
        </h1>
        <Divider />
        <FeaturedProjectContainer
          link="/facebook"
          tags={["Product Design", "Internship"]}
          title="Facebook Internship"
          description="A summary of my growth and experiences working at Facebook."
          image="/images/facebook.png"
          imageAlt="Facebook Logo"
          imageClassName="w-auto max-h-[75%]"
        />
        <Divider />
        <FeaturedProjectContainer
          link="/helios"
          tags={["Product Design", "Case Study"]}
          title="Helios"
          description="Building a community of entrepreneurship and talent."
          image="/images/helios.png"
          imageAlt="Helios Project Image"
          imageClassName="w-auto max-h-[75%]"
        />
        <Divider />
        <FeaturedProjectContainer
          link="/misc"
          tags={["Gallery", "UI Design"]}
          title="Misc Projects"
          description="Collection of IJI explorations and miscellaneous projects."
          image="/images/misc.png"
          imageAlt="Misc Project Image"
          imageClassName="h-auto max-w-[90%]"
        />
        <SmallDivider />
      </div>
    </main>
  );
}
