import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  AllSideFourButtoncode,
  AllSideToolTipsOnebuttonCode,
  DarkAndLightTolltip,
  defaultToolTipCode,
} from "./ToolTipCode";
import {
  AllSideToolTipsInOneButton,
  AllSideTooltipWith4Button,
  DarkLightToolTip,
  DefaultToolTops,
} from "./ToolTip";
import SectionHeading from "@/components/SectionHeading";
import CommonStyle from "@/helper/style";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense2 from "@/Adsense/Adsense2";
const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      <SectionHeading
        id="tailwind-css-tooltips"
        heading="Tailwind CSS Tooltips"
        description="Discover a collection of modern and flexible Tailwind CSS tooltip components. Each one is responsive, theme-aware, and perfect for dashboards, forms, or UI enhancements across your application."
      />

      {/* 1. Default Tooltip */}
      <h2 className={CommonStyle.docHeading} id="default-tooltip">
        Default Tooltip
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A classic tooltip for guiding users with helpful inline messages.
      </p>
      <MainContainer code={defaultToolTipCode}>
        <DefaultToolTops />
      </MainContainer>

      {/* 2. Dark & Light Tooltip */}
      <h2 className={CommonStyle.docHeading} id="dark-light-tooltip">
        Dark & Light Mode Tooltip
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Easily adaptable to both themes, these tooltips remain visible and
        accessible in any environment.
      </p>
      <MainContainer code={DarkAndLightTolltip}>
        <DarkLightToolTip />
      </MainContainer>

<Adsense2/>
      {/* 3. Tooltip on All Sides – Single Button */}
      <h2 className={CommonStyle.docHeading} id="tooltip-all-sides">
        Tooltip on All Sides (Single Button)
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Showcase a tooltip appearing on top, right, bottom, and left with a
        single trigger element.
      </p>
      <MainContainer code={AllSideToolTipsOnebuttonCode}>
        <AllSideToolTipsInOneButton />
      </MainContainer>

      {/* 4. Tooltip on All Sides – Four Buttons */}
      <h2 className={CommonStyle.docHeading} id="tooltip-multiple-buttons">
        Tooltip on All Sides (Four Buttons)
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Demonstrate directional tooltips using four distinct button placements.
        Ideal for showing position control in UI previews.
      </p>
      <MainContainer code={AllSideFourButtoncode}>
        <AllSideTooltipWith4Button />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/tooltip"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Tooltips (Dark & Light) – Madhuranjan UI",
  description:
    "Explore 4+ Tailwind CSS tooltip components with full dark and light mode support. Includes classic tooltips, directional positioning, and responsive behavior for modern UI needs.",
  keywords: [
    "Tailwind CSS Tooltips",
    "Tooltip UI Component",
    "Dark Mode Tooltip",
    "Light Tooltip Tailwind",
    "Tooltip Directions",
    "Responsive Tooltip",
    "Tailwind Tooltip Examples",
    "Tooltip Positioning",
  ],
  openGraph: {
    title: "Tailwind CSS Tooltip Components – Responsive & Directional",
    description:
      "Browse Tailwind CSS tooltip components with support for dark/light modes, tooltips on all sides, and modern accessibility. Ideal for forms, buttons, and app guidance.",
  },
};
