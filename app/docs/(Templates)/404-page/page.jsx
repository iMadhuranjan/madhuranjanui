import TemplateContainer from "@/components/TemplateContainer";
import React from "react";
import {
  AmimatiionBackground404Code,
  beautfiul404WithhCardCode,
  GradientBorder404Code,
  LostInSpace404PageCode,
  PageWithBackggroudAnimationCode,
  SImple404PageCode,
} from "./FourPageCode";
import {
  AnimationBackground,
  Beautful404,
  Beautful404WithCard,
  GradientBackgroudn404,
  LostInSpace404,
  Page404WithBackgroudnAnimation,
  Simple404Page,
} from "./FourPage";
import NextPrevNavigation from "@/components/Nextprev";
import CommonStyle from "@/helper/style";
import BlockkHeading from "@/components/BlockHeading";
import Adsense2 from "@/Adsense/Adsense2";
const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <BlockkHeading
        id="main-404"
        heading="Tailwind CSS 404 Error Pages"
        description="Discover a range of creative 404 error page designs that transform a standard error into an engaging experience. Each template is designed to keep your visitors informed and entertained even when they hit a dead end."
      />

       <h2 className={CommonStyle.docHeading} id="animation-background-404">
        Animation Background 404
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A visually engaging 404 page featuring an animated background.
      </p>
      <TemplateContainer code={AmimatiionBackground404Code}>
        <AnimationBackground />
      </TemplateContainer>

      {/* 2. 404 Page with Background Animation */}
      <h2 className={CommonStyle.docHeading} id="background-animation-404">
        404 Page with Background Animation
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A dynamic layout that uses background animations to create an immersive
        error experience.
      </p>
      <TemplateContainer code={PageWithBackggroudAnimationCode}>
        <Page404WithBackgroudnAnimation />
      </TemplateContainer>
<Adsense2/>
      {/* 3. Gradient Border 404 */}
      <h2 className={CommonStyle.docHeading} id="gradient-border-404">
        Gradient Border 404
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A modern 404 page enhanced with a striking gradient border design.
      </p>
      <TemplateContainer code={GradientBorder404Code}>
        <GradientBackgroudn404 />
      </TemplateContainer>

      {/* 4. Lost in Space 404 */}
      <h2 className={CommonStyle.docHeading} id="lost-in-space-404">
        Lost in Space 404
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A creative 404 error page that plays on the "lost in space" theme.
      </p>
      <TemplateContainer code={LostInSpace404PageCode}>
        <LostInSpace404 />
      </TemplateContainer>
      <Adsense2/>
      {/* 5. Beautiful 404 with Card */}
      <h2 className={CommonStyle.docHeading} id="beautiful-404">
        Beautiful 404 with Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        An aesthetically pleasing 404 page that uses a card layout for a modern
        look.
      </p>
      <TemplateContainer code={beautfiul404WithhCardCode}>
        <Beautful404 />
      </TemplateContainer>

      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/404-page"} />
    </div>
  );
};

export default Page;


export const metadata = {
  title: "Tailwind CSS 404 Error Pages - Madhuranjan UI",
  description:
    "Explore beautifully designed 404 error pages built with Tailwind CSS. From animated backgrounds to creative layouts, these templates help turn dead-ends into delightful user experiences.",
  keywords: [
    "Tailwind CSS 404 Pages",
    "404 Error Page Templates",
    "Creative 404 UI",
    "Animated 404 Designs",
    "Responsive Error Pages",
    "Modern 404 Layouts",
    "Custom 404 Page Tailwind",
    "404 Page Examples",
    "Lost Page UI",
    "Tailwind Error Components",
  ],
  openGraph: {
    title: "Tailwind CSS 404 Error Page Templates - Madhuranjan UI",
    description:
      "Browse modern and creative 404 error page designs built using Tailwind CSS. Perfect for improving user experience when pages can't be found.",
    url: "https://madhuranjanui.com/docs/404-page",
    type: "website",
  },
};
