import TemplateContainer from "@/components/TemplateContainer";
import React from "react";
import {
  FooterWithAppDownloadCode,
  FooterWithCompanyImageCode,
  FooterWithLinkCode,
  SimpleFooterCode,
} from "./footerCode";
import {
  FooterWithAppDownload,
  FooterWithCOmpanyIcon,
  FooterWitLinks,
  SimpleFooter,
} from "./Footer";
import BlockkHeading from "@/components/BlockHeading";
import CommonStyle from "@/helper/style";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense3 from "@/Adsense/Adsense3";
import Adsense2 from "@/Adsense/Adsense2";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <BlockkHeading
        id="main-footer"
        heading="Tailwind CSS Footer Sections"
        description="Explore our collection of footer designs that provide a polished finish to your website. Each layout is responsive and customizable to fit your brand’s needs."
      />

      {/* 1. Simple Footer */}
      <h2 className={CommonStyle.docHeading} id="simple-footer">
        Simple Footer
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A minimalistic footer that keeps your website clean and focused.
      </p>
      <TemplateContainer code={SimpleFooterCode}>
        <SimpleFooter />
      </TemplateContainer>

      {/* 2. Footer with Links */}
      <h2 className={CommonStyle.docHeading} id="footer-links">
        Footer with Links
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A footer layout that includes navigation links for quick access.
      </p>
      <TemplateContainer code={FooterWithLinkCode}>
        <FooterWitLinks />
      </TemplateContainer>
      <Adsense3 />
      {/* 3. Footer with Company Image */}
      <h2 className={CommonStyle.docHeading} id="footer-company-image">
        Footer with Company Image
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Enhance your branding with a footer that features your company logo or
        image.
      </p>
      <TemplateContainer code={FooterWithCompanyImageCode}>
        <FooterWithCOmpanyIcon />
      </TemplateContainer>

      {/* 4. Footer with App Download */}
      <h2 className={CommonStyle.docHeading} id="footer-app-download">
        Footer with App Download
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Encourage app downloads with a dedicated section that highlights your
        mobile app.
      </p>
      <TemplateContainer code={FooterWithAppDownloadCode}>
        <FooterWithAppDownload />
      </TemplateContainer>
      <Adsense2 />
      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/footer"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Footer Section Components - Madhuranjan UI",
  description:
    "Browse beautifully crafted Tailwind CSS footer components for your website. Includes layouts with links, company branding, app download sections, and simple minimalist designs — all fully responsive.",
  keywords: [
    "Tailwind CSS Footer",
    "Footer Components",
    "Responsive Footer Design",
    "Footer with Links",
    "Simple Tailwind Footer",
    "Tailwind App Footer",
    "Company Branding Footer",
    "Website Footer Templates",
    "Tailwind Footer Layouts",
    "Modern Footer Design",
  ],
  openGraph: {
    title: "Tailwind CSS Footer Section Components - Madhuranjan UI",
    description:
      "Explore responsive footer layouts created with Tailwind CSS. From simple footers to branded designs with links and app promotions, these templates polish your site's finish.",
    url: "https://madhuranjanui.com/docs/footer",
    type: "website",
  },
};
