import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  CirculareProgressBarCode,
  ColoredProgressBarCode,
  GaugeProgressBarCode,
  ProgressbarHeightCode,
  ProgressBarVarient,
  ProgressBarVarientCode,
  ProgressbarWithHeeightContenntInside,
  ProgressbarWithHeightContenntInsideCode,
  SimpleProgressBarCode,
  StepProgressBarCode,
  VerticalScrollBarCode,
} from "./Progressbarcode";
import {
  CircularProgressBar,
  ColoredProgressBar,
  GaugeProgressBar,
  ProgresBarWithPercentageInside,
  ProgressBarHeight,
  ProgressDifferentVarient,
  SimpleProgressBar,
  StepProgressBar,
  VerticalProgressBar,
} from "./ProgressBar";
import NextPrevNavigation from "@/components/Nextprev";
import SectionHeading from "@/components/SectionHeading";
import CommonStyle from "@/helper/style";
import Adsense3 from "@/Adsense/Adsense3";
import Adsense2 from "@/Adsense/Adsense2";

const page = () => {
  return (
    <div className={CommonStyle.containerEntry}>
      <SectionHeading
        id="tailwind-progress-bar"
        heading="Tailwind CSS Progress Bar Components"
        description="Explore a collection of stylish and functional progress bar components built with Tailwind CSS. These progress bars offer various visual representations of progress, are fully responsive, and support both light and dark themes."
      />

      <h2 className={CommonStyle.docHeading} id="simple-progress-bar">
        Simple Progress Bar
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A straightforward progress bar for displaying progress with a clean and
        simple design.
      </p>
      <MainContainer code={SimpleProgressBarCode}>
        <SimpleProgressBar />
      </MainContainer>

      <h2 className={CommonStyle.docHeading} id="progress-bar-height">
        Progress Bar with Custom Height
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        Customize the height of the progress bar to better fit your UI
        requirements.
      </p>
      <MainContainer code={ProgressbarHeightCode}>
        <ProgressBarHeight />
      </MainContainer>

<Adsense3/>
      <h2
        className={CommonStyle.docHeading}
        id="progress-bar-percentage-inside"
      >
        Progress Bar with Percentage Inside
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        This variant displays the progress percentage within the bar itself.
      </p>
      <MainContainer code={ProgressbarWithHeightContenntInsideCode}>
        <ProgresBarWithPercentageInside />
      </MainContainer>

      <h2 className={CommonStyle.docHeading} id="colored-progress-bar">
        Colored Progress Bar
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A vibrant progress bar that lets you choose from a range of colors to
        match your theme.
      </p>
      <MainContainer code={ColoredProgressBarCode}>
        <ColoredProgressBar />
      </MainContainer>

<Adsense3/>
      <h2 className={CommonStyle.docHeading} id="vertical-progress-bar">
        Vertical Progress Bar
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A vertically oriented progress bar ideal for side panels or
        non-horizontal layouts.
      </p>
      <MainContainer code={VerticalScrollBarCode}>
        <VerticalProgressBar />
      </MainContainer>

      <h2 className={CommonStyle.docHeading} id="progress-bar-variants">
        Progress Bar Variants
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        Discover different variants of progress bars, each with a unique visual
        style.
      </p>
      <MainContainer code={ProgressBarVarientCode}>
        <ProgressDifferentVarient />
      </MainContainer>
<Adsense3/>
      <h2 className={CommonStyle.docHeading} id="step-progress-bar">
        Step Progress Bar
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A step-based progress bar designed to guide users through sequential
        tasks.
      </p>
      <MainContainer code={StepProgressBarCode}>
        <StepProgressBar />
      </MainContainer>

      <h2 className={CommonStyle.docHeading} id="circular-progress-bar">
        Circular Progress Bar
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A modern circular progress bar that provides a compact representation of
        progress.
      </p>
      <MainContainer code={CirculareProgressBarCode}>
        <CircularProgressBar />
      </MainContainer>
<Adsense2/>
      <h2 className={CommonStyle.docHeading} id="gauge-progress-bar">
        Gauge Progress Bar
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A gauge-style progress bar that offers a dynamic, dial-like
        visualization of progress.
      </p>
      <MainContainer code={GaugeProgressBarCode}>
        <GaugeProgressBar />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/progress-bar"} />
    </div>
  );
};

export default page;

export const metadata = {
  title: "Tailwind CSS Progress Bar Components - Madhuranjan UI",
  description:
    "Explore a collection of stylish and functional progress bar components built with Tailwind CSS. These progress bars offer various visual representations of progress, are fully responsive, and support both light and dark themes.",
  keywords: [
    "Tailwind CSS Progress Bar",
    "Progress Bar Components",
    "Circular Progress Bar",
    "Gauge Progress Bar",
    "Vertical Progress Bar",
    "Step Progress Bar",
    "Responsive Progress Bar",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "Tailwind CSS Progress Bar Components - Madhuranjan UI",
    description:
      "Discover a range of progress bar components built with Tailwind CSS, including circular, gauge, vertical, and step progress bars. Perfect for modern, responsive UI designs.",
    url: "https://madhuranjanui.com/docs/progress-bar",
    type: "website",
  },
};
