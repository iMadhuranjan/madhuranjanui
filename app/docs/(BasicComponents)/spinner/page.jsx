
import React from "react";
import MainContainer from "@/components/MainContainer";
import SectionHeading from "@/components/SectionHeading";
 
import {
  TypeOfSpinnerCode,
  ColoredSpinnerCode,
  ButtonSpinnerCode,
  More20SpinnerCode,
  SharingunSpinnerCode,
} from "./SpinnerCode";

import {
  DifferentTypesOfSpinner,
  ColoredSpinnerWork,
  ButtonSpinner,
  More20Spinner,
  SharingunSpinner,
} from "./Spinner";
import NextPrevNavigation from "@/components/Nextprev";
import CommonStyle from "@/helper/style";
import Adsense2 from "@/Adsense/Adsense2";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
         heading="Tailwind CSS Spinners"
        description="Discover a diverse collection of spinners built with Tailwind CSS. These loaders are fully responsive, support both light and dark mode, and are optimized for any modern UI application."
      />

      {/* 1. Different Types of Spinner */}
      <h2 className={CommonStyle.docHeading} id="type-of-spinner">
        Basic Spinner Types
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Explore simple and effective spinner animations to indicate loading
        states. Each one is built using Tailwind utility classes.
      </p>
      <MainContainer code={TypeOfSpinnerCode}>
        <DifferentTypesOfSpinner />
      </MainContainer>

      {/* 2. Colored Spinner */}
      <h2 className={CommonStyle.docHeading} id="colored-spinner">
        Colored Spinner Variations
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        These spinners use color utilities to visually match your brand or
        context—like success, danger, and info states.
      </p>
      <MainContainer code={ColoredSpinnerCode}>
        <ColoredSpinnerWork />
      </MainContainer>

<Adsense2/>
      {/* 3. Button Spinner */}
      <h2 className={CommonStyle.docHeading} id="button-spinner">
        Button with Spinner
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Add loaders directly inside buttons to show ongoing actions like
        submitting a form or saving data.
      </p>
      <MainContainer code={ButtonSpinnerCode}>
        <ButtonSpinner />
      </MainContainer>

      {/* 4. Advanced Spinner Gallery */}
      <h2 className={CommonStyle.docHeading} id="more-spinner-advanced">
        20+ Creative Spinners
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A collection of more than 20 unique spinner styles—circles, dots, bars,
        hexagons, and more—all styled with pure Tailwind CSS.
      </p>
      <MainContainer code={More20SpinnerCode}>
        <More20Spinner />
      </MainContainer>

<Adsense2/>
       {/* 4. Advanced Spinner Gallery */}
       <h2 className={CommonStyle.docHeading} id="more-spinner-gallery">
       Sharingan Spinner
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Are you a Naruto Fan? If yes, i have created someting special for you and it is Sharingan Spinner Add this in your Website to Make it look Cooler.
      </p>
      <MainContainer code={SharingunSpinnerCode}>
        <SharingunSpinner />
      </MainContainer>

      <NextPrevNavigation currentPath="/docs/spinner" />
    </div>
  );
};

export default Page;


export const metadata = {
  title: "Tailwind CSS Spinners - Madhuranjan UI",
  description:
    "Explore a rich collection of responsive, customizable, and dark-mode-ready spinners built with pure Tailwind CSS. Ideal for modern web applications.",
  keywords: [
    "Tailwind CSS",
    "Spinners",
    "Loaders",
    "Tailwind Components",
    "CSS Animation",
    "Loading Spinner",
    "Responsive Spinner",
    "Dark Mode Spinner",
    "UI Components",
    "Madhuranjan UI",
  ],
  openGraph: {
    title: "Tailwind CSS Spinners | Madhuranjan UI",
    description:
      "Discover 20+ unique Tailwind CSS spinners, including button loaders, colored variants, and anime-inspired animations like the Sharingan spinner.",
  },
};
