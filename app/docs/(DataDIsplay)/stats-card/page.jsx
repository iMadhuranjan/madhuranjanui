import MainContainer from '@/components/MainContainer'
import React from 'react'
import { SimpleChartCode, SimpleStatesCode, StatsWithCustomColorCode, StatsWithHorizintalCode, StatsWithIconCode, StatsWithIndicatorCode, StatsWithTrendingNumberCode } from './chatCardCode'
import { SimpleStartsCard, SimppleStats, StatesWithIndicator, StatsWithCustomColor, StatsWithHorizontalDescritpion, StatsWithIcons, StatsWithTreingNumber } from './ChatCard'
import ResponsiveNote from '@/components/ResponsiveNote'
import NextPrevNavigation from '@/components/Nextprev'
import CommonStyle from '@/helper/style'
import SectionHeading from '@/components/SectionHeading'
import Adsense2 from '@/Adsense/Adsense2'
import Adsense3 from '@/Adsense/Adsense3'

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
        id="main-title"
        heading="Tailwind CSS Statistics & Analytics Components"
        description="Explore our collection of responsive and modern statistics components built with Tailwind CSS. Each design is crafted to display key metrics clearly and engagingly, perfect for dashboards and data insights."
      />

      {/* Responsive Note */}
      <ResponsiveNote />

      {/* 1. Simple Stats Card */}
      <h2 className={CommonStyle.docHeading} id="simple-stats-card">
        Simple Stats Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A clean and minimal card for displaying essential statistics. Perfect for quick insights and dashboard summaries.
      </p>
      <MainContainer code={SimpleChartCode}>
        <SimpleStartsCard />
      </MainContainer>

      {/* 2. Basic Statistics Display */}
      <h2 className={CommonStyle.docHeading} id="basic-stats-display">
        Basic Statistics Display
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Present your key data points in a straightforward layout that emphasizes clarity and simplicity.
      </p>
      <MainContainer code={SimpleStatesCode}>
        <SimppleStats />
      </MainContainer>

<Adsense2/>
      {/* 3. Stats with Custom Colors */}
      <h2 className={CommonStyle.docHeading} id="custom-color-stats">
        Stats with Custom Colors
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Showcase your metrics with a vibrant color palette that matches your brand identity and enhances visual appeal.
      </p>
      <MainContainer code={StatsWithCustomColorCode}>
        <StatsWithCustomColor />
      </MainContainer>

      {/* 4. Stats with Indicator */}
      <h2 className={CommonStyle.docHeading} id="indicator-stats">
        Stats with Indicator
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Highlight key performance changes with indicators that quickly communicate trends and status updates.
      </p>
      <MainContainer code={StatsWithIndicatorCode}>
        <StatesWithIndicator />
      </MainContainer>

<Adsense2/>
      {/* 5. Stats with Icons */}
      <h2 className={CommonStyle.docHeading} id="icon-stats">
        Stats with Icons
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Integrate icons with your data to create an engaging and intuitive visualization of your statistics.
      </p>
      <MainContainer code={StatsWithIconCode}>
        <StatsWithIcons />
      </MainContainer>

      {/* 6. Horizontal Stats Layout */}
      <h2 className={CommonStyle.docHeading} id="horizontal-stats-layout">
        Horizontal Stats Layout
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Display your statistics in a horizontal format that allows for side-by-side comparisons and enhanced readability.
      </p>
      <MainContainer code={StatsWithHorizintalCode}>
        <StatsWithHorizontalDescritpion />
      </MainContainer>

<Adsense3/>
      {/* 7. Stats with Trending Numbers */}
      <h2 className={CommonStyle.docHeading} id="trending-stats">
        Stats with Trending Numbers
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Emphasize key trends and performance shifts with dynamic, attention-grabbing number displays.
      </p>
      <MainContainer code={StatsWithTrendingNumberCode}>
        <StatsWithTreingNumber />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/stats-card"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Stats & Analytics Components - Madhuranjan UI",
  description:
    "Discover a complete set of Tailwind CSS statistics components to display key metrics with clarity. Includes cards with indicators, icons, custom colors, trending data, and horizontal layouts for modern dashboards.",
  keywords: [
    "Tailwind CSS Stats",
    "Statistics Cards",
    "Analytics Dashboard",
    "Metric Cards Tailwind",
    "Data Display UI",
    "Stats with Icons",
    "Trending Numbers UI",
    "Performance Indicators",
    "Responsive Stats Layout",
    "Tailwind CSS Dashboard UI",
  ],
  openGraph: {
    title: "Tailwind CSS Statistics & Dashboard Components - Madhuranjan UI",
    description:
      "Explore beautiful and responsive Tailwind CSS components for dashboards and analytics. Includes stats cards with indicators, icons, horizontal views, and trending numbers.",
    url: "https://madhuranjanui.com/docs/stats-card",
    type: "website",
  },
};
