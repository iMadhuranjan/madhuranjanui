import Adsense1 from "@/Adsense/Adsense1";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense3 from "@/Adsense/Adsense3";
import Link from "next/link";

export default function SectionHeading({ heading, description }) {
  return (
    <>
      <div className="mx-auto pb-3 md:pb-6 md:px-4" id="main-title">
        <p className="mb-2 font-semibold text-blue-900 dark:text-violet-400">
          Components{" "}
        </p>
        <h2 className="text-[1.7rem] md:text-3xl font-extrabold text-gray-900 dark:text-white">
          {heading} -{" "}
          <Link
            href={""}
            className="font-extrabold text-transparent bg-clip-text animated-gradient"
          >
            Madhuranjan UI
          </Link>
        </h2>
        <p className="text-gray-800 text-[1.1rem] dark:text-gray-200 mt-3 mb-4">
          {description}
        </p>
        <div className="border-b border-gray-300 dark:border-gray-700 mt-4"></div>
      </div>
      <Adsense1 />
    </>
  );
}
