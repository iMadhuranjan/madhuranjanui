import MainContainer from '@/components/MainContainer'
import React from 'react'
import { BreadcrumbWithIConsCode, BreadCumbWithBackgroundCode, BreadCumWithSlashCode, SimpleBreadCumCode, StylishPillStyleBreadcumCode } from './BreadCumbsCode'
import { BreadCumsWithIcons, BreadcumwithBackground, BreaduCimbsWithSlash, SimpleBreadumbs, StylishBrwadCumbPillsStyle } from './BreadCumbs'
import NextPrevNavigation from '@/components/Nextprev';
import CommonStyle from '@/helper/style';
import SectionHeading from '@/components/SectionHeading';
import Adsense2 from '@/Adsense/Adsense2';
import Adsense3 from '@/Adsense/Adsense3';


const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
        id="main-title"
        heading="Tailwind CSS Breadcrumbs"
        description="Explore our collection of responsive, SEO-friendly Tailwind CSS Breadcrumbs. These designs enhance user navigation with modern aesthetics, ensuring your site is both engaging and easy to navigate."
      />

      {/* 1. Simple Breadcrumb */}
      <h2 className={CommonStyle.docHeading} id="simple-breadcrumb">
        Simple Breadcrumb
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Experience clean and straightforward navigation with our simple breadcrumb design—ideal for guiding users effortlessly through your site.
      </p>
      <MainContainer code={SimpleBreadCumCode}>
        <SimpleBreadumbs />
      </MainContainer>

      {/* 2. Breadcrumb with Background */}
      <h2 className={CommonStyle.docHeading} id="breadcrumb-with-background">
        Breadcrumb with Background
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        This design features a subtle background that adds visual depth while keeping your navigation clear and modern.
      </p>
      <MainContainer code={BreadCumbWithBackgroundCode}>
        <BreadcumwithBackground />
      </MainContainer>
<Adsense2/>
      {/* 3. Breadcrumb with Slash Separator */}
      <h2 className={CommonStyle.docHeading} id="breadcrumb-with-slash">
        Breadcrumb with Slash Separator
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Utilize a modern slash separator for a crisp, well-organized breadcrumb that clearly outlines your website hierarchy.
      </p>
      <MainContainer code={BreadCumWithSlashCode}>
        <BreaduCimbsWithSlash />
      </MainContainer>

      {/* 4. Breadcrumb with Icons */}
      <h2 className={CommonStyle.docHeading} id="breadcrumb-with-icons">
        Breadcrumb with Icons
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Enhance usability by integrating icons into your breadcrumb. This design offers a visually engaging experience while maintaining clear navigation.
      </p>
      <MainContainer code={BreadcrumbWithIConsCode}>
        <BreadCumsWithIcons />
      </MainContainer>
<Adsense3/>
      {/* 5. Stylish Pill-Style Breadcrumb */}
      <h2 className={CommonStyle.docHeading} id="stylish-pill-breadcrumb">
        Stylish Pill-Style Breadcrumb
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Add a modern touch with our pill-style breadcrumb that combines sophistication and clarity—perfect for a contemporary website design.
      </p>
      <MainContainer code={StylishPillStyleBreadcumCode}>
        <StylishBrwadCumbPillsStyle />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/breadcrumbs"} />
    </div>
  );
};

export default Page;


export const metadata = {
  title: "Tailwind CSS Breadcrumb Components - Madhuranjan UI",
  description:
    "Explore responsive Tailwind CSS breadcrumb components designed for modern navigation. Includes slash separators, icons, pill-style designs, and background variants. SEO-friendly and theme-aware.",
  keywords: [
    "Tailwind CSS Breadcrumbs",
    "Breadcrumb Components",
    "SEO Breadcrumb UI",
    "Responsive Breadcrumb",
    "Breadcrumb with Icons",
    "Slash Separator Breadcrumb",
    "Pill Breadcrumb Design",
    "Tailwind Navigation UI",
    "Dark Mode Breadcrumb",
    "Breadcrumb Navigation",
  ],
  openGraph: {
    title: "Tailwind CSS Breadcrumb UI Components - Madhuranjan UI",
    description:
      "Discover a variety of Tailwind CSS breadcrumbs that improve user navigation and boost SEO. Includes designs with icons, background, pills, and modern separators.",
    url: "https://madhuranjanui.com/docs/breadcrumbs",
    type: "website",
  },
};
