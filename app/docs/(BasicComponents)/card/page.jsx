import MainContainer from "@/components/MainContainer";
import SectionHeading from "@/components/SectionHeading";
import React from "react";
import {
  AuthorCard,
  BlogPost,
  BorderCard,
  CardWithHoverAndIcon,
  CardWithImageTitleDescritpion,
  CardWithWarning,
  DotoCard,
  HorizontalCard,
  ImacCard,
  IphoneCard,
  ListWithImageCard,
  PricingTableCard,
  SimpleCard,
  SimpleCardProduct,
  StatsCard,
  TestomincalCard,
  VerticalEcommerceCard,
} from "./MyCard";
import {
  AuthoreCardCode,
  BlogPostCode,
  BorderCardCode,
  CardWithIconAndHoverEffectCode,
  CardWithImageTitleDescritpionAndIMageCode,
  CardWithListAndImageCode,
  CardWithWarningCode,
  DotoCardCode,
  HorizontalCardCode,
  iMacCardCode,
  iPhoneCode,
  PricingTableCode,
  SimpleCardCode,
  simpleEcommercecardCode,
  StatsCardCode,
  TestomincalCode,
  VerticalCode,
} from "./CardCss";
import CommonStyle from "@/helper/style";
import FlowbiteTailwindAlwaysCode from "../accordion/Accordation1";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense3 from "@/Adsense/Adsense3";
import Adsense4 from "@/Adsense/Adsense4";
import Adsense2 from "@/Adsense/Adsense2";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
        id="main-title"
        heading="Tailwind CSS Cards"
        description="Discover a variety of card designs built with Tailwind CSS. Whether it's a simple layout, an image-focused design, or an e-commerce product showcase, each card is fully responsive, supports dark/light modes, and is optimized for modern web applications."
      />

      {/* 1. Simple Tailwind Card */}
      <h2 className={CommonStyle.docHeading} id="simple-tailwind-card">
        Simple Tailwind Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2 pl-2">
        Use this lightweight, minimal card as a starting point for displaying
        quick highlights or essential content. Its clean design ensures seamless
        integration in any project.
      </p>
      <MainContainer code={SimpleCardCode}>
        <SimpleCard />
      </MainContainer>

      {/* 2. Card with Icons & Button */}
      <h2 className={CommonStyle.docHeading} id="card-icons-button">
        Card with Icons and Button
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Elevate your user experience with a card that includes interactive icons
        and a clear call-to-action button. Perfect for highlighting features,
        offers, or important alerts.
      </p>
      <MainContainer code={CardWithIconAndHoverEffectCode}>
        <CardWithHoverAndIcon />
      </MainContainer>

      <Adsense3 />
      {/* 3. Card with Image */}
      <h2 className={CommonStyle.docHeading} id="card-with-image">
        Card with Image
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Show off your images in a sleek layout. This design is ideal for product
        listings, portfolio items, or blog posts where visuals need to stand
        out.
      </p>
      <MainContainer code={CardWithImageTitleDescritpionAndIMageCode}>
        <CardWithImageTitleDescritpion />
      </MainContainer>

      {/* 4. Horizontal Card with Image */}
      <h2 className={CommonStyle.docHeading} id="horizontal-card-with-image">
        Horizontal Card with Image
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Need a wider format? This horizontal design is great for articles or
        product spotlights, offering more space for text alongside a prominent
        image.
      </p>
      <MainContainer code={HorizontalCardCode}>
        <HorizontalCard />
      </MainContainer>

      <Adsense3 />
      {/* 5. All Side Border Card */}
      <h2 className={CommonStyle.docHeading} id="all-side-border-card">
        All Side Border Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Create visual impact with a bordered card design. This layout is perfect
        for showcasing content blocks with a neat, outlined structure.
      </p>
      <MainContainer code={BorderCardCode}>
        <BorderCard />
      </MainContainer>

      {/* 6. Author Card */}
      <h2 className={CommonStyle.docHeading} id="author-card">
        Author Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Highlight an author or creator with a personal touch. This card includes
        space for a photo, brief bio, and social links—ideal for blog posts or
        team profiles.
      </p>
      <FlowbiteTailwindAlwaysCode code={AuthoreCardCode}>
        <AuthorCard />
      </FlowbiteTailwindAlwaysCode>

      <Adsense4 />
      {/* 7. To-Do List Card */}
      <h2 className={CommonStyle.docHeading} id="todo-list-card">
        To-Do List Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Organize tasks in a concise layout. This card keeps your checklist clear
        and approachable, making it effortless to manage personal or team tasks.
      </p>
      <FlowbiteTailwindAlwaysCode code={DotoCardCode}>
        <DotoCard />
      </FlowbiteTailwindAlwaysCode>

      {/* 8. Card List with Image */}
      <h2 className={CommonStyle.docHeading} id="card-list-with-image">
        Card List with Image
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Showcase multiple items or features in a list-style layout with
        accompanying images. A great solution for product categories, features,
        or portfolio highlights.
      </p>
      <FlowbiteTailwindAlwaysCode code={CardWithListAndImageCode}>
        <ListWithImageCard />
      </FlowbiteTailwindAlwaysCode>

      <Adsense3 />
      {/* 9. Pricing Table Card */}
      <h2 className={CommonStyle.docHeading} id="pricing-table-card">
        Pricing Table Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Present different pricing tiers or subscription plans using a clear,
        concise card format. Help users quickly compare features and choose
        their plan.
      </p>
      <FlowbiteTailwindAlwaysCode code={PricingTableCode}>
        <PricingTableCard />
      </FlowbiteTailwindAlwaysCode>

      {/* 10. Stats Card */}
      <h2 className={CommonStyle.docHeading} id="stats-card">
        Stats Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Display important numbers or metrics in an engaging design. Perfect for
        analytics dashboards, performance overviews, or quick data insights.
      </p>
      <FlowbiteTailwindAlwaysCode code={StatsCardCode}>
        <StatsCard />
      </FlowbiteTailwindAlwaysCode>

      <Adsense3 />
      {/* 11. Blog Post Card */}
      <h2 className={CommonStyle.docHeading} id="blog-post-card">
        Blog Post Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Feature articles or blog entries with a strong visual. A neat excerpt
        format makes it easy for readers to get a quick overview before diving
        in.
      </p>
      <FlowbiteTailwindAlwaysCode code={BlogPostCode}>
        <BlogPost />
      </FlowbiteTailwindAlwaysCode>

      {/* 12. Card with Warning */}
      <h2 className={CommonStyle.docHeading} id="warning-card">
        Card with Warning
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Draw attention to critical notifications or alerts. This card style uses
        distinctive color schemes to ensure warnings stand out.
      </p>
      <FlowbiteTailwindAlwaysCode code={CardWithWarningCode}>
        <CardWithWarning />
      </FlowbiteTailwindAlwaysCode>

      <Adsense4 />
      {/* 13. Ecommerce Cart */}
      <h2 className={CommonStyle.docHeading} id="ecommerce-cart">
        E-commerce Cart
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A must-have for online stores. Display product details, images, and
        prices in a user-friendly layout that encourages quick purchases.
      </p>
      <FlowbiteTailwindAlwaysCode code={iMacCardCode}>
        <ImacCard />
      </FlowbiteTailwindAlwaysCode>

      {/* 14. iPhone Cart */}
      <h2 className={CommonStyle.docHeading} id="iphone-cart">
        iPhone Cart
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Specifically designed for a sleek product display, this layout
        emphasizes brand styling, multiple color options, and an intuitive
        quantity picker.
      </p>
      <FlowbiteTailwindAlwaysCode code={iPhoneCode}>
        <IphoneCard />
      </FlowbiteTailwindAlwaysCode>

      {/* 15. Vertical E-commerce Card */}
      <h2 className={CommonStyle.docHeading} id="vertical-ecommerce-card">
        Vertical E-commerce Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Highlight products in a vertical arrangement, allowing more space for
        product images, specifications, and calls to action.
      </p>
      <FlowbiteTailwindAlwaysCode code={VerticalCode}>
        <VerticalEcommerceCard />
      </FlowbiteTailwindAlwaysCode>

      <Adsense2 />
      {/* 16. Simple Product Card */}
      <h2 className={CommonStyle.docHeading} id="simple-product-card">
        Simple Product Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A concise product layout that keeps key details front and center. Ideal
        for minimalistic shops or quick product teasers.
      </p>
      <FlowbiteTailwindAlwaysCode code={simpleEcommercecardCode}>
        <SimpleCardProduct />
      </FlowbiteTailwindAlwaysCode>

      {/* 17. User Review Card */}
      <h2 className={CommonStyle.docHeading} id="user-review-card">
        User Review Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Showcase customer testimonials in an elegant, trust-building design.
        Features a user photo, rating, and feedback text to enhance credibility.
      </p>
      <FlowbiteTailwindAlwaysCode code={TestomincalCode}>
        <TestomincalCard />
      </FlowbiteTailwindAlwaysCode>

      <NextPrevNavigation currentPath={"/docs/card"} />
    </div>
  );
};

export default Page;

// app/cards/page.js (or any file path under the 'app' directory)
export const metadata = {
  title: "25+ Pure Tailwind CSS Cards (Dark & Light) - Madhuranjan UI",
  description:
    "Explore our curated collection of Tailwind CSS Cards. Discover various designs e-commerce, blog, author profiles, and more. Built to be fully responsive and compatible with light and dark modes. Stylish Tailwind CSS Cards",
  keywords: [
    "Tailwind CSS",
    "Cards",
    "Responsive",
    "E-commerce",
    "UI Components",
    "Dark Mode",
  ],
  openGraph: {
    title: "Tailwind CSS Cards Collection - Madhuranjan UI",
    description:
      "Most Beautiful 25+ Pure Tailwind CSS Cards. Dark and Light Mode Comfortable and Completely Responsive Cards.",
  },
};
