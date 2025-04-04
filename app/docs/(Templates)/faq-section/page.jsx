import TemplateContainer from "@/components/TemplateContainer";
import React from "react";
import {
  FaqWithAccordationCode,
  FaqWithLabelCode,
  FaqWithSearchCode,
  SimpleFAQSecionCode,
} from "./FaqSectionCode";
import {
  FaqQithAccordation,
  FaqWithLabelButton,
  FaqWithSearchhbar,
  SimpleFAQSection,
} from "./FaqSection";
import BlockkHeading from "@/components/BlockHeading";
import CommonStyle from "@/helper/style";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense2 from "@/Adsense/Adsense2";
const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <BlockkHeading
        id="main-faq"
        heading="Tailwind CSS FAQ Sections"
        description="Browse our versatile FAQ sections designed to help your users quickly find the answers they need. Each layout offers a unique approach to presenting frequently asked questions in an organized, user-friendly manner."
      />

      {/* 1. Simple FAQ Section */}
      <h2 className={CommonStyle.docHeading} id="simple-faq-section">
        Simple FAQ Section
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A clean and straightforward layout that clearly presents your questions
        and answers.
      </p>
      <TemplateContainer code={SimpleFAQSecionCode}>
        <SimpleFAQSection />
      </TemplateContainer>

      {/* 2. FAQ with Accordion */}
      <h2 className={CommonStyle.docHeading} id="faq-accordion">
        FAQ with Accordion
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        An interactive accordion-style FAQ section that allows users to expand
        and collapse answers as needed.
      </p>
      <TemplateContainer code={FaqWithAccordationCode}>
        <FaqQithAccordation />
      </TemplateContainer>
<Adsense2/>
      {/* 3. FAQ with Search Bar */}
      <h2 className={CommonStyle.docHeading} id="faq-search">
        FAQ with Search Bar
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Enhance user experience with a search-enabled FAQ section that helps
        quickly locate relevant topics.
      </p>
      <TemplateContainer code={FaqWithSearchCode}>
        <FaqWithSearchhbar />
      </TemplateContainer>

      {/* 4. FAQ with Label Button */}
      <h2 className={CommonStyle.docHeading} id="faq-label-button">
        FAQ with Label Button
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A feature-rich FAQ section that includes label buttons for quick topic
        navigation.
      </p>
      <TemplateContainer code={FaqWithLabelCode}>
        <FaqWithLabelButton />
      </TemplateContainer>
      <Adsense2/>
      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/faq-section"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS FAQ Section Components - Madhuranjan UI",
  description:
    "Explore responsive and accessible FAQ section templates built with Tailwind CSS. Includes simple layouts, accordion-style toggles, search functionality, and labeled categories to improve user support experience.",
  keywords: [
    "Tailwind CSS FAQ",
    "FAQ Section Components",
    "Accordion FAQ Layout",
    "Searchable FAQ UI",
    "FAQ with Labels",
    "Tailwind FAQ Templates",
    "Responsive Help Sections",
    "Tailwind Support Components",
    "User-Friendly FAQ Design",
    "FAQ Page with Accordion",
  ],
  openGraph: {
    title: "Tailwind CSS FAQ Section Components - Madhuranjan UI",
    description:
      "Browse modern FAQ layouts crafted with Tailwind CSS, including accordion styles, search-enabled sections, and labeled navigation to enhance your site's support experience.",
    url: "https://madhuranjanui.com/docs/faq-section",
    type: "website",
  },
};
