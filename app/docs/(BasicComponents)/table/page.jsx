import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  ComparisonTable,
  SimpleTable,
  StripeTable,
  StripeTableHover,
  TableProduct,
  TableWithAction,
  TableWithAvatar,
  TableWithFooter,
  TableWithSearchFilterAndPagination,
} from "./Table";
import {
  ComparisonTableCode,
  SimpleTableCode,
  StripeTableCode,
  StripeTableHoverCode,
  TableProductCode,
  TableWithActionButtonCode,
  TableWithAvatarCode,
  TableWithFooterCode,
  TableWithSearchPaginationFilterCode,
} from "./TableCode";
import SectionHeading from "@/components/SectionHeading";
import CommonStyle from "@/helper/style";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense3 from "@/Adsense/Adsense3";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense4 from "@/Adsense/Adsense4";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
         heading="Tailwind CSS Tables"
        description="Explore a variety of responsive, accessible, and fully styled table layouts using pure Tailwind CSS. Designed to fit seamlessly into dashboards, admin panels, e-commerce platforms, and content-heavy applications with full dark/light mode support."
      />

      {/* 1. Simple Table */}
      <h2 className={CommonStyle.docHeading} id="simple-table">
        Simple Table
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A clean and minimal table for displaying structured data. Ideal for use
        cases where clarity and readability are key.
      </p>
      <MainContainer code={SimpleTableCode}>
        <SimpleTable />
      </MainContainer>

      {/* 2. Striped Table */}
      <h2 className={CommonStyle.docHeading} id="striped-table">
        Striped Table
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Alternate row colors improve scanability, making it easier for users to
        track data across columns.
      </p>
      <MainContainer code={StripeTableCode}>
        <StripeTable />
      </MainContainer>

      <Adsense3 />
      {/* 3. Striped Table with Hover */}
      <h2 className={CommonStyle.docHeading} id="striped-hover-table">
        Striped Table with Hover
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        This table style combines alternating row colors with hover
        interactions, giving it a modern and interactive feel.
      </p>
      <MainContainer code={StripeTableHoverCode}>
        <StripeTableHover />
      </MainContainer>

      {/* 4. Table with Action Buttons */}
      <h2 className={CommonStyle.docHeading} id="table-with-actions">
        Table with Action Buttons
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Enhance user interaction by adding edit and delete buttons. Perfect for
        admin panels and data management interfaces.
      </p>
      <MainContainer code={TableWithActionButtonCode}>
        <TableWithAction />
      </MainContainer>

      <Adsense3 />
      {/* 5. Table with Avatar & Status */}
      <h2 className={CommonStyle.docHeading} id="table-with-avatar">
        Table with Avatars & Status
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Display user avatars, statuses, and detailed info in a user-friendly
        format. Great for teams, employee lists, and profiles.
      </p>
      <MainContainer code={TableWithAvatarCode}>
        <TableWithAvatar />
      </MainContainer>

      {/* 6. Table with Footer Summary */}
      <h2 className={CommonStyle.docHeading} id="table-with-footer">
        Table with Footer Summary
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Add a subtotal or summary footer for financial or product listings,
        commonly used in invoices or reports.
      </p>
      <MainContainer code={TableWithFooterCode}>
        <TableWithFooter />
      </MainContainer>

      <Adsense2 />
      {/* 7. Table with Search, Filters, and Pagination */}
      <h2 className={CommonStyle.docHeading} id="advanced-table">
        Table with Search, Filter, and Pagination
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Built for scale, this interactive table allows users to search, filter,
        and navigate paginated content.
      </p>
      <MainContainer code={TableWithSearchPaginationFilterCode}>
        <TableWithSearchFilterAndPagination />
      </MainContainer>

      {/* 8. Product Table */}
      <h2 className={CommonStyle.docHeading} id="product-table">
        Product Table
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A tailored layout for product listings with images, quantity controls,
        and pricing—ideal for e-commerce carts.
      </p>
      <MainContainer code={TableProductCode}>
        <TableProduct />
      </MainContainer>
      <Adsense4 />
      {/* 9. Comparison Table */}
      <h2 className={CommonStyle.docHeading} id="comparison-table">
        Comparison Table
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Easily compare features across multiple plans or products. Great for
        pricing pages or SaaS tier comparisons.
      </p>
      <MainContainer code={ComparisonTableCode}>
        <ComparisonTable />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/table"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Tables (Dark & Light) – Madhuranjan UI",
  description:
    "Explore 10+ beautiful Tailwind CSS Table components with dark and light mode support. From simple layouts to advanced tables with search, pagination, actions, and avatars. Fully responsive and production-ready for dashboards and apps.",
  keywords: [
    "Tailwind CSS Tables",
    "Responsive Tables",
    "Dark Mode Table",
    "Data Tables",
    "Admin Tables",
    "Table UI Components",
    "Interactive Tables",
    "Tailwind Dashboard Tables",
  ],
  openGraph: {
    title: "Tailwind CSS Table Components – Responsive & Beautiful",
    description:
      "Discover our curated collection of Tailwind CSS tables. From simple to advanced, each table is dark mode compatible, fully responsive, and designed for real-world use cases like admin dashboards, product lists, and data management.",
  },
};
