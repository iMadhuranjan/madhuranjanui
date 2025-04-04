import TemplateContainer from "@/components/TemplateContainer";
import React from "react";
import {
  GreenStyleHeroSectionCode,
  HeroSectionWithBlankImageCode,
  HeroSectionWithCardCode,
  HeroSectionWithImageCode,
  heroSectionWithMinimalDesignCode,
  HeroWithIsslustatoCode,
  ModernHeroSectionCode,
  StylishModernLookignHeroSectionCode,
} from "./HeroSectionCode";
import {
  GreenStyleHeroSection,
  HeroSectionWithBlankImage,
  HeroSectionWithCard,
  HeroSectionWithMinimalDesign,
  HeroSectionWithUmagge,
  HeroWithIssustartor,
  ModernHeroSection,
  StylishModernLookingHeroSection,
} from "./HeroSection";
import NextPrevNavigation from "@/components/Nextprev";
import CommonStyle from "@/helper/style";
import BlockkHeading from "@/components/BlockHeading";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense3 from "@/Adsense/Adsense3";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <BlockkHeading
        id="main-hero"
        heading="Tailwind CSS Hero Sections"
        description="Discover a variety of hero section designs that set the tone for your website. From minimalistic layouts to modern designs, each template is crafted to captivate your audience right from the start."
      />

      {/* 1. Hero Section with Minimal Design */}
      <h2 className={CommonStyle.docHeading} id="hero-minimal-design">
        Hero Section with Minimal Design
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A clean and minimal hero section focusing on essential messaging and
        imagery.
      </p>
      <TemplateContainer code={heroSectionWithMinimalDesignCode}>
        <HeroSectionWithMinimalDesign />
      </TemplateContainer>

      {/* 2. Hero Section with Card */}
      <h2 className={CommonStyle.docHeading} id="hero-with-card">
        Hero Section with Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A hero design that integrates a card element for enhanced content
        presentation.
      </p>
      <TemplateContainer code={HeroSectionWithCardCode}>
        <HeroSectionWithCard />
      </TemplateContainer>
<Adsense2/>
      {/* 3. Modern Hero Section */}
      <h2 className={CommonStyle.docHeading} id="modern-hero-section">
        Modern Hero Section
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A sleek and contemporary hero section with a modern aesthetic.
      </p>
      <TemplateContainer code={ModernHeroSectionCode}>
        <ModernHeroSection />
      </TemplateContainer>

      {/* 4. Hero Section with Image */}
      <h2 className={CommonStyle.docHeading} id="hero-with-image">
        Hero Section with Image
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A visually engaging hero section featuring an impactful image.
      </p>
      <TemplateContainer code={HeroSectionWithImageCode}>
        <HeroSectionWithUmagge />
      </TemplateContainer>
<Adsense3/>
      {/* 5. Hero with Illustration */}
      <h2 className={CommonStyle.docHeading} id="hero-with-illustration">
        Hero with Illustration
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A creative hero section that uses illustrations to capture attention.
      </p>
      <TemplateContainer code={HeroWithIsslustatoCode}>
        <HeroWithIssustartor />
      </TemplateContainer>

      {/* 6. Hero Section with Blank Image */}
      <h2 className={CommonStyle.docHeading} id="hero-blank-image">
        Hero Section with Blank Image
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A unique design featuring a blank image placeholder, perfect for custom
        visuals.
      </p>
      <TemplateContainer code={HeroSectionWithBlankImageCode}>
        <HeroSectionWithBlankImage />
      </TemplateContainer>
<Adsense3/>
      {/* 7. Green Style Hero Section */}
      <h2 className={CommonStyle.docHeading} id="green-hero-section">
        Green Style Hero Section
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A hero section with a fresh green style, ideal for eco-friendly or
        sustainable brands.
      </p>
      <TemplateContainer code={GreenStyleHeroSectionCode}>
        <GreenStyleHeroSection />
      </TemplateContainer>

      {/* 8. Stylish Modern Looking Hero Section */}
      <h2 className={CommonStyle.docHeading} id="stylish-modern-hero">
        Stylish Modern Looking Hero Section
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A modern and stylish hero design that balances aesthetics with
        functionality.
      </p>
      <TemplateContainer code={StylishModernLookignHeroSectionCode}>
        <StylishModernLookingHeroSection />
      </TemplateContainer>
<Adsense2/>
      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/hero-section"} />
    </div>
  );
};

export default Page;



export const metadata = {
  title: "Tailwind CSS Hero Section Components - Madhuranjan UI",
  description:
    "Explore a variety of stunning hero sections built with Tailwind CSS. From minimal layouts to modern and stylish designs with cards, illustrations, and images — these components grab attention from the very first fold.",
  keywords: [
    "Tailwind CSS Hero",
    "Hero Section Components",
    "Minimal Hero Layout",
    "Hero with Image",
    "Modern Hero Design",
    "Illustrated Hero Section",
    "Hero with Card UI",
    "Stylish Hero Section",
    "Responsive Hero Layout",
    "Tailwind Landing Header",
  ],
  openGraph: {
    title: "Tailwind CSS Hero Section Components - Madhuranjan UI",
    description:
      "Discover engaging hero sections for your website made with Tailwind CSS. Includes clean minimal styles, modern illustrations, card-based layouts, and responsive headers.",
    url: "https://madhuranjanui.com/docs/hero-section",
    type: "website",
  },
};
