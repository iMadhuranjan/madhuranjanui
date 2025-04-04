import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  CirclularePagination,
  DiffretnSziePaginaion,
  PaginationWithBorder,
  PaginationWithPageNumber,
  SimplePagination,
} from "./Pagination";
import {
  CirclularePaginationCode,
  DiffetnSIzePaginaitonCode,
  PaginationWithBorderCode,
  PaginationWithPageNumberCode,
  simplePaginationCode,
} from "./PaginationCode";
import NextPrevNavigation from "@/components/Nextprev";
import CommonStyle from "@/helper/style";
import SectionHeading from "@/components/SectionHeading";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense3 from "@/Adsense/Adsense3";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
        id="main-title"
        heading="Tailwind CSS Pagination Components"
        description="Discover a variety of pagination designs built with Tailwind CSS. Enhance your site's navigation with our responsive, user-friendly, and SEO-optimized pagination components."
      />

      {/* 1. Simple Pagination */}
      <h2 className={CommonStyle.docHeading} id="simple-pagination">
        Simple Pagination
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Navigate your content effortlessly with a clean, minimal pagination
        design that offers a straightforward user experience.
      </p>
      <MainContainer code={simplePaginationCode}>
        <SimplePagination />
      </MainContainer>

      {/* 2. Pagination with Border */}
      <h2 className={CommonStyle.docHeading} id="pagination-with-border">
        Pagination with Border
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        This design adds a defined border around each element for a crisp and
        organized navigation layout.
      </p>
      <MainContainer code={PaginationWithBorderCode}>
        <PaginationWithBorder />
      </MainContainer>
      <Adsense2 />
      {/* 3. Circular Pagination */}
      <h2 className={CommonStyle.docHeading} id="circular-pagination">
        Circular Pagination
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Enjoy a modern look with rounded pagination elements that create a
        friendly and approachable navigation experience.
      </p>
      <MainContainer code={CirclularePaginationCode}>
        <CirclularePagination />
      </MainContainer>

      {/* 4. Pagination with Page Number */}
      <h2 className={CommonStyle.docHeading} id="pagination-with-page-number">
        Pagination with Page Number
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Clearly indicate the current page by displaying page numbers, making it
        easier for users to understand their position in your content.
      </p>
      <MainContainer code={PaginationWithPageNumberCode}>
        <PaginationWithPageNumber />
      </MainContainer>
      <Adsense3 />
      {/* 5. Different Size Pagination */}
      <h2 className={CommonStyle.docHeading} id="different-size-pagination">
        Different Size Pagination
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Adapt your pagination to your layout with options in varying sizes,
        offering flexibility and enhanced visual appeal.
      </p>
      <MainContainer code={DiffetnSIzePaginaitonCode}>
        <DiffretnSziePaginaion />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/pagination"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Pagination Components - Madhuranjan UI",
  description:
    "Browse a curated collection of Tailwind CSS pagination components. Includes simple, bordered, circular, and numbered pagination styles—all responsive and theme-aware for modern navigation.",
  keywords: [
    "Tailwind CSS Pagination",
    "Pagination UI",
    "Page Navigation Component",
    "Circular Pagination",
    "Pagination with Numbers",
    "Responsive Pagination",
    "Tailwind Page Navigator",
    "Dark Mode Pagination",
    "Bordered Pagination",
    "Custom Pagination Design",
  ],
  openGraph: {
    title: "Tailwind CSS Pagination Components - Madhuranjan UI",
    description:
      "Explore responsive Tailwind CSS pagination components including numbered, bordered, circular, and size-based styles. Perfect for modern websites and web apps.",
    url: "https://madhuranjanui.com/docs/pagination",
    type: "website",
  },
};
