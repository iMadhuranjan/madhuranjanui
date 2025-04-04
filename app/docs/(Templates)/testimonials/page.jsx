import TemplateContainer from "@/components/TemplateContainer";
import React from "react";
import {
  CardTrstinminalWithtSsrtcode,
  cloudTestiminolCardCode,
  DifferentareitTastinmalCode,
  SimpleTestinalCode,
  TestiminalCardCode,
  TestiminalTImelineCode,
  ThreeDifferentTestinalCardCode,
} from "./testimonialsCode";
import {
  CardTestiminialWithStar,
  CloudTestiminolCard,
  DifferentVarientTrstiminalSection,
  SimpleTestiminaol,
  TestiminalCardTImeline,
  TestinimaolCard,
  ThreeDifferentTestiminal,
} from "./Testimonial";
import NextPrevNavigation from "@/components/Nextprev";
import CommonStyle from "@/helper/style";
import BlockkHeading from "@/components/BlockHeading";
import Adsense3 from "@/Adsense/Adsense3";
import Adsense2 from "@/Adsense/Adsense2";
const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <BlockkHeading
        id="main-testimonials"
        heading="Tailwind CSS Testimonials"
        description="Discover a variety of testimonial designs to showcase customer feedback. Each layout is crafted to build trust and highlight the positive experiences of your clients."
      />

      {/* 1. Simple Testimonial */}
      <h2 className={CommonStyle.docHeading} id="simple-testimonial">
        Simple Testimonial
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A straightforward testimonial design for clear and concise customer
        feedback.
      </p>
      <TemplateContainer code={SimpleTestinalCode}>
        <SimpleTestiminaol />
      </TemplateContainer>

      {/* 2. Testimonial Card with Star */}
      <h2 className={CommonStyle.docHeading} id="testimonial-card-star">
        Testimonial Card with Star
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A testimonial card featuring star ratings to emphasize customer
        satisfaction.
      </p>
      <TemplateContainer code={CardTrstinminalWithtSsrtcode}>
        <CardTestiminialWithStar />
      </TemplateContainer>
      <Adsense3 />
      {/* 3. Testimonial Card */}
      <h2 className={CommonStyle.docHeading} id="testimonial-card">
        Testimonial Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A dynamic card layout to showcase customer testimonials in a stylish
        way.
      </p>
      <TemplateContainer code={TestiminalCardCode}>
        <TestinimaolCard />
      </TemplateContainer>

      {/* 4. Cloud Testimonial Card */}
      <h2 className={CommonStyle.docHeading} id="cloud-testimonial-card">
        Cloud Testimonial Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A modern, cloud-themed testimonial card design for a fresh look.
      </p>
      <TemplateContainer code={cloudTestiminolCardCode}>
        <CloudTestiminolCard />
      </TemplateContainer>
      <Adsense2 />
      {/* 5. Testimonial Timeline */}
      <h2 className={CommonStyle.docHeading} id="testimonial-timeline">
        Testimonial Timeline
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Showcase testimonials over time with a chronological timeline layout.
      </p>
      <TemplateContainer code={TestiminalTImelineCode}>
        <TestiminalCardTImeline />
      </TemplateContainer>

      {/* 6. Three Different Testimonials */}
      <h2 className={CommonStyle.docHeading} id="three-different-testimonials">
        Three Different Testimonials
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A layout featuring three distinct testimonial designs for varied
        presentation.
      </p>
      <TemplateContainer code={ThreeDifferentTestinalCardCode}>
        <ThreeDifferentTestiminal />
      </TemplateContainer>
      <Adsense3 />
      {/* 7. Different Variant Testimonial Section */}
      <h2 className={CommonStyle.docHeading} id="different-variant-testimonial">
        Different Variant Testimonial Section
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A creative testimonial section that offers a unique design variant.
      </p>
      <TemplateContainer code={DifferentareitTastinmalCode}>
        <DifferentVarientTrstiminalSection />
      </TemplateContainer>

      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/testimonials"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Testimonial Components - Madhuranjan UI",
  description:
    "Explore modern Tailwind CSS testimonial components to showcase client feedback. Includes star ratings, timelines, cloud-themed cards, and multiple design variants to build trust and credibility.",
  keywords: [
    "Tailwind CSS Testimonials",
    "Customer Feedback UI",
    "Testimonial Cards",
    "Testimonial with Stars",
    "Responsive Testimonial Layout",
    "Tailwind Testimonial Timeline",
    "Client Feedback Section",
    "Testimonial Grid Design",
    "Tailwind Review Components",
    "Testimonial Variants UI",
  ],
  openGraph: {
    title: "Tailwind CSS Testimonial Components - Madhuranjan UI",
    description:
      "Showcase client feedback with stylish and responsive testimonial components built using Tailwind CSS. Features star cards, timelines, cloud styles, and multi-layout testimonials.",
    url: "https://madhuranjanui.com/docs/testimonials",
    type: "website",
  },
};
