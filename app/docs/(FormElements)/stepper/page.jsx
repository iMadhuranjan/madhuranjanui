import MainContainer from '@/components/MainContainer'
import React from 'react'
import { AdvanedStepperCode, BreadCumStepperCode, TailwindFormStipperCode, threeStepperCode, ThreeStepWithLineCode, VerticalStepperCode } from './stepperCode'
import { AdvancedSteper, BreadCumStepper, TailwindFormStepper, ThreeStepStepper, ThreeStepWithLine, VerticalStepper } from './Stepper'
import NextPrevNavigation from '@/components/Nextprev';
import CommonStyle from '@/helper/style';
import SectionHeading from '@/components/SectionHeading';
import Adsense3 from '@/Adsense/Adsense3';
import Adsense2 from '@/Adsense/Adsense2';


const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
        heading="Tailwind CSS Stepper Components"
        description="Explore a curated collection of stepper components built with Tailwind CSS. These interactive components guide users through multi-step processes with clear visual progress indicators, making them perfect for onboarding, checkout flows, and multi-step forms."
      />

      <p className="mb-5 text-gray-900 dark:text-gray-200 pl-2">
        Our stepper components are designed to simplify complex workflows by breaking them into manageable steps. Each variant offers unique design elements and layouts—from simple three-step designs to advanced form-integrated steppers—ensuring a seamless and intuitive user experience across all devices.
      </p>

      {/* 1. Three Step Stepper */}
      <h2 className={CommonStyle.docHeading} id="three-step-stepper">
        Three Step Stepper
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A simple three-step stepper to visually guide users through a sequential process.
      </p>
      <MainContainer code={threeStepperCode}>
        <ThreeStepStepper />
      </MainContainer>

      {/* 2. Three Step Stepper with Line */}
      <h2 className={CommonStyle.docHeading} id="three-step-with-line">
        Three Step Stepper with Line
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        An enhanced three-step stepper that uses connecting lines to clearly illustrate progress between steps.
      </p>
      <MainContainer code={ThreeStepWithLineCode}>
        <ThreeStepWithLine />
      </MainContainer>
<Adsense3/>
      {/* 3. Breadcrumb Stepper */}
      <h2 className={CommonStyle.docHeading} id="breadcrumb-stepper">
        Breadcrumb Stepper
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A breadcrumb-style stepper that provides a clear, linear navigation path through multi-step processes.
      </p>
      <MainContainer code={BreadCumStepperCode}>
        <BreadCumStepper />
      </MainContainer>

      {/* 4. Vertical Stepper */}
      <h2 className={CommonStyle.docHeading} id="vertical-stepper">
        Vertical Stepper
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A vertically aligned stepper ideal for longer forms or processes where vertical space is better utilized.
      </p>
      <MainContainer code={VerticalStepperCode}>
        <VerticalStepper />
      </MainContainer>
<Adsense3/>
      {/* 5. Advanced Stepper */}
      <h2 className={CommonStyle.docHeading} id="advanced-stepper">
        Advanced Stepper
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        An advanced stepper component featuring additional interactive elements and sophisticated styling for an enriched user experience.
      </p>
      <MainContainer code={AdvanedStepperCode}>
        <AdvancedSteper />
      </MainContainer>

      {/* 6. Form Stepper */}
      <h2 className={CommonStyle.docHeading} id="form-stepper">
        Form Stepper
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A form-integrated stepper designed to simplify multi-step form submissions while providing visual feedback on user progress.
      </p>
      <MainContainer code={TailwindFormStipperCode}>
        <TailwindFormStepper />
      </MainContainer>
<Adsense2/>
      <NextPrevNavigation currentPath={"/docs/stepper"} />
    </div>
  );
};

export default Page;


export const metadata = {
  title: "Tailwind CSS Stepper Components - Madhuranjan UI",
  description:
    "Explore beautifully crafted Tailwind CSS stepper components for onboarding, checkout, and multi-step forms. Includes horizontal, vertical, breadcrumb, and form-integrated steppers—fully responsive and theme-ready.",
  keywords: [
    "Tailwind CSS Stepper",
    "Multi-step Form UI",
    "Stepper Component",
    "Tailwind Form Steps",
    "Vertical Stepper",
    "Horizontal Stepper",
    "Breadcrumb Stepper",
    "Tailwind UI Stepper",
    "Responsive Stepper",
    "Step Progress Indicator",
  ],
  openGraph: {
    title: "Tailwind CSS Stepper Components - Madhuranjan UI",
    description:
      "Discover interactive Tailwind CSS stepper components for guiding users through multi-step processes. Includes vertical, breadcrumb, and form-based designs with full responsiveness.",
    url: "https://madhuranjanui.com/docs/stepper",
    type: "website",
  },
};
