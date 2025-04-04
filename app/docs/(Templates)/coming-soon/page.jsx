import TemplateContainer from "@/components/TemplateContainer";
import React from "react";
import {
  ComingSoonWithSvgIconcode,
  LaunchingSoonCode,
  SImpleComingSoonPageCode,
  SometingAmazingisComingCode,
} from "./ComingSoonCode";
import {
  ComingSoonWithSvgIcon,
  LaunchingSoon,
  SimpleComingSoonPage,
  SometingAmazingisCOming,
} from "./ComingSoon";
import BlockkHeading from "@/components/BlockHeading";
import CommonStyle from "@/helper/style";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense3 from "@/Adsense/Adsense3";
const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <BlockkHeading
        id="main-coming-soon"
        heading="Tailwind CSS Coming Soon Pages"
        description="Discover a range of Coming Soon page designs that build anticipation for your next big launch. Each template is designed to capture attention and keep your audience engaged while you prepare for the big reveal."
      />

      {/* 1. Simple Coming Soon Page */}
      <h2 className={CommonStyle.docHeading} id="simple-coming-soon-page">
        Simple Coming Soon Page
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A clean and minimal design that announces your upcoming launch with
        clarity.
      </p>
      <TemplateContainer code={SImpleComingSoonPageCode}>
        <SimpleComingSoonPage />
      </TemplateContainer>

      {/* 2. Something Amazing is Coming */}
      <h2 className={CommonStyle.docHeading} id="something-amazing-coming">
        Something Amazing is Coming
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        An engaging layout to create buzz and excitement about your upcoming
        product or event.
      </p>
      <TemplateContainer code={SometingAmazingisComingCode}>
        <SometingAmazingisCOming />
      </TemplateContainer>
      <Adsense2 />
      {/* 3. Coming Soon With SVG Icon */}
      <h2 className={CommonStyle.docHeading} id="coming-soon-svg-icon">
        Coming Soon With SVG Icon
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Enhance your announcement with a vibrant SVG icon that adds a dynamic
        visual element.
      </p>
      <TemplateContainer code={ComingSoonWithSvgIconcode}>
        <ComingSoonWithSvgIcon />
      </TemplateContainer>

      {/* 4. Launching Soon */}
      <h2 className={CommonStyle.docHeading} id="launching-soon">
        Launching Soon
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Build anticipation with a dynamic page design that highlights your
        upcoming launch.
      </p>
      <TemplateContainer code={LaunchingSoonCode}>
        <LaunchingSoon />
      </TemplateContainer>
      <Adsense3 />
      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/coming-soon"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Coming Soon Page Templates - Madhuranjan UI",
  description:
    "Explore stunning and responsive Coming Soon page components built with Tailwind CSS. Perfect for creating anticipation before your next big launch with clean, modern, and engaging designs.",
  keywords: [
    "Tailwind CSS Coming Soon",
    "Coming Soon Page Templates",
    "Launch Announcement UI",
    "Tailwind Prelaunch Pages",
    "Product Launch Countdown",
    "Responsive Coming Soon Page",
    "Tailwind Maintenance Page",
    "Something Amazing is Coming",
    "Launching Soon UI",
    "Tailwind Coming Soon Design",
  ],
  openGraph: {
    title: "Tailwind CSS Coming Soon Page Templates - Madhuranjan UI",
    description:
      "Create buzz before your launch with beautiful Tailwind CSS Coming Soon page designs. Includes SVG icons, clean layouts, countdowns, and more.",
    url: "https://madhuranjanui.com/docs/coming-soon",
    type: "website",
  },
};
