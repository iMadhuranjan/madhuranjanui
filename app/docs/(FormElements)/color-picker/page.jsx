import MainContainer from "@/components/MainContainer";
import React from "react";
import { CircleColorPicker } from "./Color";
import { ColorPickerCode, ReactColorPickerCode } from "./ColorCode";
import ReactContainer from "@/components/ReactContainer";
import SectionHeading from "@/components/SectionHeading";
import NextPrevNavigation from "@/components/Nextprev";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
        heading="Tailwind CSS Circle Color Picker"
        description="Discover an interactive, visually appealing color picker component built with Tailwind CSS and React. This component offers an intuitive circular interface for seamless color selection."
      />

      <p className="mb-5 text-gray-900 dark:text-gray-200 pl-2">
        The Circle Color Picker component allows users to easily select their
        favorite color through a dynamic circular layout. It is designed to be
        fully responsive and theme-aware, making it a perfect addition to modern
        web applications. Whether you're building a design tool or a
        customizable interface, this component delivers an engaging user
        experience with smooth interactions and clear visual feedback.
      </p>

      <ReactContainer
        htmlCode={ColorPickerCode}
        reactCode={ReactColorPickerCode}
      >
        <CircleColorPicker />
      </ReactContainer>

      <NextPrevNavigation currentPath={"/docs/color-picker"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Circle Color Picker Component - Madhuranjan UI",
  description:
    "Explore a modern and interactive circle color picker component built with Tailwind CSS and React. Fully responsive, theme-aware, and perfect for customizable UI interfaces.",
  keywords: [
    "Tailwind CSS Color Picker",
    "Circle Color Picker",
    "React Color Picker",
    "Color Selector UI",
    "Tailwind Components",
    "Interactive Color Picker",
    "Responsive Color Picker",
    "Dark Mode Color Picker",
    "Tailwind UI Tools",
  ],
  openGraph: {
    title: "Tailwind CSS Circle Color Picker - Madhuranjan UI",
    description:
      "An intuitive circle-based color picker built with Tailwind CSS and React. Fully responsive, dark mode supported, and ideal for modern interfaces.",
    url: "https://madhuranjanui.com/docs/color-picker",
    type: "website",
  },
};
