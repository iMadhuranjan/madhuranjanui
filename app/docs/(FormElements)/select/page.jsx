import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  BottomBorderSelectCode,
  ColorSelectCode,
  defaultSelectCode,
  DisabledSelectCode,
  gradientBorderCode,
  SizeSelectCode,
} from "./selectCode";
import {
  BorderBottomSelect,
  ColorSelect,
  DefaultSelect,
  DisabledSelect,
  GradientBorder,
  SizeSelect,
} from "./Select";
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
        heading="Tailwind CSS Select Components"
        description="Discover a diverse collection of select input components designed with Tailwind CSS. From classic dropdowns to advanced designs featuring unique visual elements, these components are responsive, theme-aware, and perfect for modern web applications."
      />

      <p className="mb-5 text-gray-900 dark:text-gray-200 pl-2">
        This selection of Tailwind CSS select components offers a wide range of
        options to suit various design needs. Whether you need a simple default
        select, a minimalist bottom border variant, or a more sophisticated
        option with gradient borders and different sizes, our examples provide
        intuitive, visually engaging solutions that enhance user experience and
        improve form functionality.
      </p>

      {/* 1. Default Select */}
      <h2 className={CommonStyle.docHeading} id="default-select">
        Default Select
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A classic select dropdown component with standard styling, perfect for
        most forms and applications.
      </p>
      <MainContainer code={defaultSelectCode}>
        <DefaultSelect />
      </MainContainer>

      {/* 2. Bottom Border Select */}
      <h2 className={CommonStyle.docHeading} id="bottom-border-select">
        Bottom Border Select
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A sleek select component featuring only a bottom border for a minimalist
        aesthetic.
      </p>
      <MainContainer code={BottomBorderSelectCode}>
        <BorderBottomSelect />
      </MainContainer>
<Adsense2/>
      {/* 3. Size Select */}
      <h2 className={CommonStyle.docHeading} id="size-select">
        Size Select
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A versatile select component available in multiple sizes to fit various
        design requirements.
      </p>
      <MainContainer code={SizeSelectCode}>
        <SizeSelect />
      </MainContainer>

      {/* 4. Color Select */}
      <h2 className={CommonStyle.docHeading} id="color-select">
        Color Select
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A colorful select dropdown that adjusts text colors based on the
        selected option, enhancing visual appeal.
      </p>
      <MainContainer code={ColorSelectCode}>
        <ColorSelect />
      </MainContainer>
<Adsense3/>
      {/* 5. Gradient Border Select */}
      <h2 className={CommonStyle.docHeading} id="gradient-border-select">
        Gradient Border Select
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        An advanced select component with a modern gradient border, offering a
        contemporary and engaging user interface.
      </p>
      <MainContainer code={gradientBorderCode}>
        <GradientBorder />
      </MainContainer>

      {/* 6. Disabled Select */}
      <h2 className={CommonStyle.docHeading} id="disabled-select">
        Disabled Select
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A select component rendered in a disabled state, clearly indicating that
        user interaction is not permitted.
      </p>
      <MainContainer code={DisabledSelectCode}>
        <DisabledSelect />
      </MainContainer>
<Adsense3/>
      <NextPrevNavigation currentPath={"/docs/select"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Select Components - Madhuranjan UI",
  description:
    "Explore responsive and modern Tailwind CSS select input components. Includes bottom border, gradient border, size variations, colored options, and disabled states—all theme-aware and ready to use.",
  keywords: [
    "Tailwind CSS Select",
    "Select Dropdown Component",
    "Tailwind Form Components",
    "Select Input Variants",
    "Responsive Select Menu",
    "Gradient Border Select",
    "Disabled Select Input",
    "Bottom Border Select",
    "Tailwind UI Forms",
    "Dark Mode Select Dropdown",
  ],
  openGraph: {
    title: "Tailwind CSS Select Dropdown Components - Madhuranjan UI",
    description:
      "A curated collection of Tailwind CSS select input components. From minimalist dropdowns to vibrant gradient borders, these selects are fully responsive and support dark mode.",
    url: "https://madhuranjanui.com/docs/select",
    type: "website",
  },
};
