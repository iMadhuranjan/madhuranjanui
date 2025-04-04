import TemplateContainer from "@/components/TemplateContainer";
import React from "react";
import {
  AboutPageWithCardAndLabbelCode,
  AboutusWithDetailedCardCode,
  completeAboutUsPafeCode,
  MeetOurTeamAboutSectionCode,
  ourMissionCardSectionCode,
  SimpleAboutSectionCode,
  StylishAboutSectionCode,
  TImelineApprachCode,
} from "./Aboutcode";
import {
  AboutPageWithCardAndLabel,
  AboutUsWithDetaileCard,
  CompleteAboutusPage,
  MeetOurTeamAboutSection,
  OurMissionCardSector,
  SimpleAboutSection,
  StylishAboutSection,
  TimeLineAboutPage,
} from "./AboutPage";
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
        heading="Tailwind CSS About Us Sections"
        description="Explore our various About page components that tell your story from simple introductions to detailed timelines. Fully Comportable With Dark and Light theme and also Fully Responsive."
      />

      {/* 1. Simple About Section */}
      <h2 className={CommonStyle.docHeading} id="simple-about-section">
        Simple About Section
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A minimal introduction to your company or project. Simple About us
        Section with Heading, Description and Image for simple and minimilistic
        Website.
      </p>
      <TemplateContainer code={SimpleAboutSectionCode}>
        <SimpleAboutSection />
      </TemplateContainer>

      {/* 2. About Page with Card and Label */}
      <h2 className={CommonStyle.docHeading} id="about-card-label">
        About Page with Card and Label
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Combine visual cards with clear labels for an engaging presentation.
        About us section With Image hover effect and labels.
      </p>
      <TemplateContainer code={AboutPageWithCardAndLabbelCode}>
        <AboutPageWithCardAndLabel />
      </TemplateContainer>
      <Adsense3 />
      {/* 3. Our Mission Card Section */}
      <h2 className={CommonStyle.docHeading} id="our-mission-section">
        Our Mission Card Section
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Highlight your mission and core values in a dedicated card layout.
      </p>
      <TemplateContainer code={ourMissionCardSectionCode}>
        <OurMissionCardSector />
      </TemplateContainer>

      {/* 4. Stylish About Section */}
      <h2 className={CommonStyle.docHeading} id="stylish-about-section">
        Stylish About Section
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Present your story with a modern and sleek design.
      </p>
      <TemplateContainer code={StylishAboutSectionCode}>
        <StylishAboutSection />
      </TemplateContainer>
      <Adsense3 />
      {/* 5. Meet Our Team About Section */}
      <h2 className={CommonStyle.docHeading} id="meet-our-team-section">
        Meet Our Team About Section
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Introduce your team members with personal profiles and images.
      </p>
      <TemplateContainer code={MeetOurTeamAboutSectionCode}>
        <MeetOurTeamAboutSection />
      </TemplateContainer>

      {/* 6. Detailed About Us Section */}
      <h2 className={CommonStyle.docHeading} id="detailed-about-section">
        Detailed About Us Section
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Get into the finer details of your company’s history and values.
      </p>
      <TemplateContainer code={AboutusWithDetailedCardCode}>
        <AboutUsWithDetaileCard />
      </TemplateContainer>
      <Adsense2 />
      {/* 7. Timeline Approach */}
      <h2 className={CommonStyle.docHeading} id="timeline-approach">
        Timeline Approach
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Display your company’s journey in a clear, chronological order.
      </p>
      <TemplateContainer code={TImelineApprachCode}>
        <TimeLineAboutPage />
      </TemplateContainer>

      {/* 8. Complete About Us Page */}
      <h2 className={CommonStyle.docHeading} id="complete-about-page">
        Complete About Us Page
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        An all-inclusive layout combining every element of your About page.
      </p>
      <TemplateContainer code={completeAboutUsPafeCode}>
        <CompleteAboutusPage />
      </TemplateContainer>
      <Adsense2 />
      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/about-page"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS About Us Page Components - Madhuranjan UI",
  description:
    "Browse a variety of responsive and modern Tailwind CSS About Us components. Includes team sections, timelines, mission cards, and complete About page layouts for telling your brand story.",
  keywords: [
    "Tailwind CSS About Us",
    "About Page Components",
    "Meet the Team Section",
    "Timeline About Page",
    "Company Mission Layout",
    "Responsive About Us Design",
    "Tailwind About Templates",
    "About Cards with Labels",
    "Team Profiles UI",
    "Complete About Page Tailwind",
  ],
  openGraph: {
    title: "Tailwind CSS About Us Page Components - Madhuranjan UI",
    description:
      "Discover beautifully structured About Us page layouts built with Tailwind CSS. From simple intros to complete company timelines, these sections are fully responsive and dark mode ready.",
    url: "https://madhuranjanui.com/docs/about-page",
    type: "website",
  },
};
