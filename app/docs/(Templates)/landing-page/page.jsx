import TemplateContainer from "@/components/TemplateContainer";
import React from "react";
import {
  BackgroundLinePageCode,
  BeautifulLandingPgecode,
  CharityLandingPageCode,
  DigitalAgencyLanfingPageCode,
  DigitalMarketingLandingPageCode,
  DonationLandingPageCode,
  LightThemeLeadGenerationCode,
} from "./landingCode";
import {
  BackgroudLinePage,
  BeautifulLandingPPge,
  CharityLandingPage,
  DigitalAgencyLandingPage,
  DigitalMarketinLandingPage,
  DOnationLandingPage,
  LightThemeLeadGeneration,
} from "./Landing";
import BlockkHeading from "@/components/BlockHeading";
import CommonStyle from "@/helper/style";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense3 from "@/Adsense/Adsense3";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <BlockkHeading
        id="main-landing"
        heading="Tailwind CSS Landing Pages"
        description="Explore our diverse collection of landing page designs, each crafted to convert visitors and generate leads. Whether you're in digital marketing, running a charity, or managing a digital agency, you'll find the perfect layout to elevate your brand."
      />

      {/* 1. Digital Marketing Landing Page */}
      <h2 className={CommonStyle.docHeading} id="digital-marketing-landing">
        Digital Marketing Landing Page
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A high-conversion layout designed for digital marketing campaigns with
        compelling visuals and CTAs.
      </p>
      <TemplateContainer code={DigitalMarketingLandingPageCode}>
        <DigitalMarketinLandingPage />
      </TemplateContainer>

      {/* 2. Digital Agency Landing Page */}
      <h2 className={CommonStyle.docHeading} id="digital-agency-landing">
        Digital Agency Landing Page
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A modern and professional design perfect for digital agencies to
        showcase their services and portfolio.
      </p>
      <TemplateContainer code={DigitalAgencyLanfingPageCode}>
        <DigitalAgencyLandingPage />
      </TemplateContainer>
      <Adsense2 />
      {/* 3. Charity Landing Page */}
      <h2 className={CommonStyle.docHeading} id="charity-landing">
        Charity Landing Page
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A heartwarming design that effectively communicates your cause and
        encourages donations.
      </p>
      <TemplateContainer code={CharityLandingPageCode}>
        <CharityLandingPage />
      </TemplateContainer>

      {/* 4. Beautiful Landing Page */}
      <h2 className={CommonStyle.docHeading} id="beautiful-landing">
        Beautiful Landing Page
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A visually stunning layout that combines elegance with functionality,
        ideal for creative projects.
      </p>
      <TemplateContainer code={BeautifulLandingPgecode}>
        <BeautifulLandingPPge />
      </TemplateContainer>
      <Adsense2 />
      {/* 5. Donation Landing Page */}
      <h2 className={CommonStyle.docHeading} id="donation-landing">
        Donation Landing Page
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Designed to maximize donor engagement with clear calls-to-action and a
        streamlined donation process.
      </p>
      <TemplateContainer code={DonationLandingPageCode}>
        <DOnationLandingPage />
      </TemplateContainer>

      {/* 6. Background Line Landing Page */}
      <h2 className={CommonStyle.docHeading} id="background-line-landing">
        Background Line Landing Page
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A creative design featuring a dynamic background line that adds a unique
        visual appeal.
      </p>
      <TemplateContainer code={BackgroundLinePageCode}>
        <BackgroudLinePage />
      </TemplateContainer>
      <Adsense3 />
      {/* 7. Light Theme Lead Generation */}
      <h2 className={CommonStyle.docHeading} id="light-theme-lead-generation">
        Light Theme Lead Generation
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A clean, light-themed layout optimized for capturing leads and driving
        conversions.
      </p>
      <TemplateContainer code={LightThemeLeadGenerationCode}>
        <LightThemeLeadGeneration />
      </TemplateContainer>

      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/landing-page"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Landing Page Templates - Madhuranjan UI",
  description:
    "Browse a collection of high-converting Tailwind CSS landing page templates designed for digital agencies, charities, lead generation, and marketing campaigns. Each layout is responsive and built to elevate your brand presence.",
  keywords: [
    "Tailwind CSS Landing Page",
    "Landing Page Templates",
    "Digital Marketing Page",
    "Lead Generation Design",
    "Charity Landing Page",
    "Tailwind Homepage UI",
    "Responsive Landing Layout",
    "Modern Landing Page",
    "Creative Landing Templates",
    "Tailwind Conversion Pages",
  ],
  openGraph: {
    title: "Tailwind CSS Landing Page Templates - Madhuranjan UI",
    description:
      "Discover versatile and beautifully designed landing page components built with Tailwind CSS. Ideal for agencies, fundraising, marketing campaigns, and lead generation.",
    url: "https://madhuranjanui.com/docs/landing-page",
    type: "website",
  },
};
