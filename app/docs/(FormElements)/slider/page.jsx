import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  BasicRangeSliderCode,
  DisabledRangeCode,
  htmlStepCode,
  ReactBasiRangeCode,
  reactStepCode,
  SimpleSliderCode,
  sizeRangeCode,
} from "./RangeCode";
import {
  BasicRangeSlider,
  DisabledRange,
  SimpleSlider,
  SizeRange,
  StepRangeSlider,
} from "./RangeSlider";
import ReactContainer from "@/components/ReactContainer";
import SectionHeading from "@/components/SectionHeading";
import CommonStyle from "@/helper/style";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense3 from "@/Adsense/Adsense3";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
        heading="Tailwind CSS Slider Components"
        description="Explore a curated collection of slider components built with Tailwind CSS. These interactive sliders offer intuitive range selection, step increments, and versatile sizing options, perfect for modern, responsive user interfaces."
      />

      <p className="mb-5 text-gray-900 dark:text-gray-200 pl-2">
        Our slider components are designed to provide seamless user interactions
        for various needs. Whether you require a simple slider for single value
        selection, a range slider integrated with React, a step-based slider for
        precise adjustments, or variants that offer different sizes and disabled
        states, these examples showcase how to enhance your forms with dynamic
        and responsive sliders.
      </p>

      {/* 1. Simple Slider */}
      <h2 className={CommonStyle.docHeading} id="simple-slider">
        Simple Slider
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A straightforward slider component for selecting a value within a given
        range.
      </p>
      <MainContainer code={SimpleSliderCode}>
        <SimpleSlider />
      </MainContainer>

      {/* 2. Basic Range Slider */}
      <h2 className={CommonStyle.docHeading} id="basic-range-slider">
        Basic Range Slider
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A basic range slider integrated with React, allowing users to select a
        range of values.
      </p>
      <ReactContainer
        htmlCode={BasicRangeSliderCode}
        reactCode={ReactBasiRangeCode}
      >
        <BasicRangeSlider />
      </ReactContainer>
<Adsense2/>
      {/* 3. Step Range Slider */}
      <h2 className={CommonStyle.docHeading} id="step-range-slider">
        Step Range Slider
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A slider component featuring step increments, ideal for precise value
        selection.
      </p>
      <ReactContainer htmlCode={htmlStepCode} reactCode={reactStepCode}>
        <StepRangeSlider />
      </ReactContainer>

      {/* 4. Size Range Slider */}
      <h2 className={CommonStyle.docHeading} id="size-range-slider">
        Size Range Slider
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A slider component available in multiple sizes to suit diverse design
        requirements.
      </p>
      <MainContainer code={sizeRangeCode}>
        <SizeRange />
      </MainContainer>
<Adsense3/>
      {/* 5. Disabled Range Slider */}
      <h2 className={CommonStyle.docHeading} id="disabled-range-slider">
        Disabled Range Slider
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A slider component rendered in a disabled state to indicate
        non-interactivity.
      </p>
      <MainContainer code={DisabledRangeCode}>
        <DisabledRange />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/slider"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Slider (Range Input) Components - Madhuranjan UI",
  description:
    "Explore modern and responsive slider components built with Tailwind CSS. Includes single value sliders, step sliders, range sliders, size variants, and disabled states—all fully customizable and theme-aware.",
  keywords: [
    "Tailwind CSS Slider",
    "Tailwind Range Input",
    "Step Range Slider",
    "Responsive Slider",
    "React Range Slider",
    "Tailwind Slider Component",
    "Disabled Slider",
    "Range Input Tailwind",
    "Tailwind Form Slider",
    "Dark Mode Slider",
  ],
  openGraph: {
    title: "Tailwind CSS Range & Slider Components - Madhuranjan UI",
    description:
      "Discover interactive and customizable range sliders made with Tailwind CSS and React. Perfect for value selection, steps, and responsive UIs with light and dark theme support.",
    url: "https://madhuranjanui.com/docs/slider",
    type: "website",
  },
};
