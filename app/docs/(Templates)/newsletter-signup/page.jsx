import TemplateContainer from "@/components/TemplateContainer";
import React from "react";
import {
  BorderNewslattercode,
  FururesticNewsLatteFormCode,
  GlassStyleNewsLatterCode,
  HorizonalNewsLatterCode,
  newsLatterCardCode,
  SimpleNewsLattrCardCode,
} from "./newslatterCode";
import {
  BorderNewsLatter,
  FurureticNewsLapperForm,
  GlassStyleNewsLatter,
  HorizonatlNewLatter,
  NewsLatterCard,
  SimpleNewsLatterCard,
} from "./NewsLatter";
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
        id="main-newsletter"
        heading="Tailwind CSS Newsletter Templates"
        description="Discover our diverse range of newsletter designs. From clean and minimal cards to futuristic forms and sleek glass styles, each template is crafted to engage your audience effectively."
      />

      {/* 1. Simple Newsletter Card */}
      <h2 className={CommonStyle.docHeading} id="simple-newsletter-card">
        Simple Newsletter Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A clean and minimal design for a straightforward newsletter
        subscription.
      </p>
      <TemplateContainer code={SimpleNewsLattrCardCode}>
        <SimpleNewsLatterCard />
      </TemplateContainer>

      {/* 2. Newsletter Card */}
      <h2 className={CommonStyle.docHeading} id="newsletter-card">
        Newsletter Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A robust layout that provides a user-friendly subscription experience.
      </p>
      <TemplateContainer code={newsLatterCardCode}>
        <NewsLatterCard />
      </TemplateContainer>
      <Adsense2 />
      {/* 3. Futuristic Newsletter Form */}
      <h2 className={CommonStyle.docHeading} id="futuristic-newsletter-form">
        Futuristic Newsletter Form
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A futuristic design that captures modern aesthetics and engages users.
      </p>
      <TemplateContainer code={FururesticNewsLatteFormCode}>
        <FurureticNewsLapperForm />
      </TemplateContainer>

      {/* 4. Horizontal Newsletter */}
      <h2 className={CommonStyle.docHeading} id="horizontal-newsletter">
        Horizontal Newsletter
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A modern horizontal layout designed for efficient space utilization.
      </p>
      <TemplateContainer code={HorizonalNewsLatterCode}>
        <HorizonatlNewLatter />
      </TemplateContainer>
      <Adsense2 />
      {/* 5. Glass Style Newsletter */}
      <h2 className={CommonStyle.docHeading} id="glass-style-newsletter">
        Glass Style Newsletter
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A sleek, glass-themed design that enhances visual appeal and
        readability.
      </p>
      <TemplateContainer code={GlassStyleNewsLatterCode}>
        <GlassStyleNewsLatter />
      </TemplateContainer>

      {/* 6. Border Newsletter */}
      <h2 className={CommonStyle.docHeading} id="border-newsletter">
        Border Newsletter
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A distinctive bordered layout that makes your newsletter subscription
        stand out.
      </p>
      <TemplateContainer code={BorderNewslattercode}>
        <BorderNewsLatter />
      </TemplateContainer>
      <Adsense3 />
      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/newsletter-signup"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Newsletter Signup Components - Madhuranjan UI",
  description:
    "Explore a modern collection of Tailwind CSS newsletter signup templates including simple cards, glass styles, futuristic forms, and horizontal layouts all fully responsive and designed for user engagement.",
  keywords: [
    "Tailwind CSS Newsletter",
    "Newsletter Signup Forms",
    "Email Subscription Components",
    "Glass Style Newsletter",
    "Futuristic Newsletter Form",
    "Horizontal Subscription Form",
    "Tailwind Newsletter Card",
    "Bordered Newsletter Design",
    "Responsive Email Signup UI",
    "Newsletter Templates Tailwind",
  ],
  openGraph: {
    title: "Tailwind CSS Newsletter Signup Components - Madhuranjan UI",
    description:
      "Discover stylish and functional newsletter signup templates built with Tailwind CSS. Includes modern cards, glass effects, horizontal layouts, and more — optimized for conversions.",
    url: "https://madhuranjanui.com/docs/newsletter-signup",
    type: "website",
  },
};
