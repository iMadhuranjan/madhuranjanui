import MainContainer from '@/components/MainContainer'
import React from 'react'
import { FourtablePricingPlanCode, PircintTbalwWithGradientCardCode, PricingTableWithIconcode, PricingWithMonstylEarlyCode, PricingWithToogleCode, PricintTableWithIconsCode, PriinfWithTableCode, SimplePricingPageCode } from './pricingCode'
import { FoureTablePricingPlan, PriccingWtihtable, PricingTableWithGradientCard, PricingTableWithIcon, PricingTableWithIcons, PricingWithToogle, PrivingWitMonstylYearly, SimplePricingPage } from './Pricing'
import TemplateContainer from '@/components/TemplateContainer'
import BlockkHeading from '@/components/BlockHeading'
import CommonStyle from '@/helper/style'
import NextPrevNavigation from '@/components/Nextprev'
import Adsense2 from '@/Adsense/Adsense2'
import Adsense3 from '@/Adsense/Adsense3'
import Adsense4 from '@/Adsense/Adsense4'
const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <BlockkHeading
        id="main-pricing"
        heading="Tailwind CSS Pricing Plans"
        description="Explore our collection of pricing page designs. Each layout is crafted to clearly present your pricing options and plans, ensuring a smooth and informative experience for your potential customers."
      />

      {/* 1. Simple Pricing Page */}
      <h2 className={CommonStyle.docHeading} id="simple-pricing">
        Simple Pricing Page
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A minimalistic pricing layout for quick comparisons.
      </p>
      <TemplateContainer code={SimplePricingPageCode}>
        <SimplePricingPage />
      </TemplateContainer>

      {/* 2. Pricing with Monstyl Yearly */}
      <h2 className={CommonStyle.docHeading} id="monstyl-yearly-pricing">
        Pricing with Monthly or Yearly
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A yearly pricing layout featuring a unique monstyl design.
      </p>
      <TemplateContainer code={PricingWithMonstylEarlyCode}>
        <PrivingWitMonstylYearly />
      </TemplateContainer>
<Adsense2/>
      {/* 3. Pricing with Table */}
      <h2 className={CommonStyle.docHeading} id="pricing-with-table">
        Pricing with Table
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Display your pricing plans in a structured table format.
      </p>
      <TemplateContainer code={PriinfWithTableCode}>
        <PriccingWtihtable />
      </TemplateContainer>

      {/* 4. Pricing with Toggle */}
      <h2 className={CommonStyle.docHeading} id="pricing-with-toggle">
        Pricing with Toggle
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Easily switch between pricing options with this toggle-enabled layout.
      </p>
      <TemplateContainer code={PricingWithToogleCode}>
        <PricingWithToogle />
      </TemplateContainer>
<Adsense3/>
      {/* 5. Pricing Table with Icon */}
      <h2 className={CommonStyle.docHeading} id="pricing-with-icon">
        Pricing Table with Icon
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Enhance your pricing details with visual icons to guide customer choice.
      </p>
      <TemplateContainer code={PricingTableWithIconcode}>
        <PricingTableWithIcon />
      </TemplateContainer>

      {/* 6. Pricing Table with Gradient Card */}
      <h2 className={CommonStyle.docHeading} id="pricing-gradient-card">
        Pricing Table with Gradient Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A vibrant layout featuring gradient cards for a modern pricing display.
      </p>
      <TemplateContainer code={PircintTbalwWithGradientCardCode}>
        <PricingTableWithGradientCard />
      </TemplateContainer>
<Adsense3/>
      {/* 7. Four Table Pricing Plan */}
      <h2 className={CommonStyle.docHeading} id="four-table-pricing">
        Four Table Pricing Plan
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        An organized four-table layout designed for clear plan differentiation.
      </p>
      <TemplateContainer code={FourtablePricingPlanCode}>
        <FoureTablePricingPlan />
      </TemplateContainer>

      {/* 8. Pricing Table with Icons */}
      <h2 className={CommonStyle.docHeading} id="pricing-table-icons">
        Pricing Table with Icons
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A detailed pricing table enhanced with icons for better visual appeal.
      </p>
      <TemplateContainer code={PricintTableWithIconsCode}>
        <PricingTableWithIcons />
      </TemplateContainer>
<Adsense4/>
      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/pricing"} />
    </div>
  );
};

export default Page;


export const metadata = {
  title: "Tailwind CSS Pricing Page Components - Madhuranjan UI",
  description:
    "Browse a variety of Tailwind CSS pricing page templates including simple plans, toggle switchers, gradient cards, tables with icons, and multi-plan layouts. All components are responsive and conversion-focused.",
  keywords: [
    "Tailwind CSS Pricing",
    "Pricing Page Components",
    "Pricing Table Layout",
    "Responsive Pricing Plans",
    "Monthly Yearly Toggle Pricing",
    "Pricing with Icons",
    "Gradient Card Pricing Table",
    "Four Column Pricing Layout",
    "Tailwind Pricing Templates",
    "SaaS Pricing Page Design",
  ],
  openGraph: {
    title: "Tailwind CSS Pricing Page Components - Madhuranjan UI",
    description:
      "Explore responsive pricing page templates built with Tailwind CSS. Includes simple layouts, icon tables, toggles for monthly/yearly plans, and visually striking gradient cards.",
    url: "https://madhuranjanui.com/docs/pricing",
    type: "website",
  },
};
