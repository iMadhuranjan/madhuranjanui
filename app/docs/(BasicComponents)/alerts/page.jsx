import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  AlertsWithBorderCode,
  AlertWithAdditionalContetnCdode,
  AletsWithListCode,
  defaultAlertCode,
  DissmableALertsCode,
  FloatingBannerCode,
  GradientBarAlertCode,
} from "./AlertCode";
import {
  AlertsWithAdditionalCOntent,
  AlertsWithBorder,
  AletsWithList,
  DefaultAlerts,
  DissmassibleAlerts,
  GradientBarAlert,
  FloatingBannerAlert,
} from "./Alerts";
import NextPrevNavigation from "@/components/Nextprev";
import CommonStyle from "@/helper/style";
import SectionHeading from "@/components/SectionHeading";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense3 from "@/Adsense/Adsense3";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Alerts Section Intro */}
      <SectionHeading
        id="tailwind-alerts"
        heading="Tailwind CSS Alerts"
        description="Browse a wide variety of alert components crafted with pure Tailwind CSS. These alerts are fully responsive, support both light and dark modes, and are perfect for displaying important messages, warnings, confirmations, and system notices in any UI."
      />

      {/* 1. Default Alerts */}
      <h2 className={CommonStyle.docHeading} id="default-alerts">
        Default Alerts
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Basic alert components for success, info, warning, and error messages.
        Clean and minimal with color-coded backgrounds.
      </p>
      <MainContainer code={defaultAlertCode}>
        <DefaultAlerts />
      </MainContainer>

      {/* 2. Alerts With List */}
      <h2 className={CommonStyle.docHeading} id="alerts-with-list">
        Alerts With Bullet Points
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Use these alerts to display lists inside a notification—for example,
        form validation errors or multi-step warnings.
      </p>
      <MainContainer code={AletsWithListCode}>
        <AletsWithList />
      </MainContainer>
<Adsense2/>
      {/* 3. Dismissible Alerts */}
      <h2 className={CommonStyle.docHeading} id="dismissible-alerts">
        Dismissible Alerts
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Allow users to dismiss notifications without JavaScript using Tailwind’s{" "}
        <code>peer</code> utility. These alerts are fully accessible and pure
        CSS.
      </p>
      <MainContainer code={DissmableALertsCode}>
        <DissmassibleAlerts />
      </MainContainer>

      {/* 4. Alerts With Borders */}
      <h2 className={CommonStyle.docHeading} id="alerts-with-border">
        Alerts with Decorative Borders
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Add visual emphasis using accent borders on the top, side, or all
        around. Great for drawing user attention while keeping things elegant.
      </p>
      <MainContainer code={AlertsWithBorderCode}>
        <AlertsWithBorder />
      </MainContainer>
<Adsense2/>
      {/* 5. Alerts with Additional Content */}
      <h2
        className={CommonStyle.docHeading}
        id="alerts-with-additional-content"
      >
        Alerts with Titles, Text & Actions
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        These alerts contain a title, description, and buttons for interacting
        with the alert. Great for actionable feedback or confirmations.
      </p>
      <MainContainer code={AlertWithAdditionalContetnCdode}>
        <AlertsWithAdditionalCOntent />
      </MainContainer>

      {/* 6. Gradient Bar Alerts */}
      <h2 className={CommonStyle.docHeading} id="gradient-bar-alerts">
        Full-Width Gradient Bar Alerts
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        These horizontal bar alerts sit at the top or bottom of your screen. Use
        them for site-wide announcements or global system messages.
      </p>
      <MainContainer code={GradientBarAlertCode}>
        <GradientBarAlert />
      </MainContainer>
<Adsense3/>
      {/* 7. Floating Banner Alert */}
      <h2 className={CommonStyle.docHeading} id="floating-banner-alert">
        Floating Banner Alerts
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Show a stylish banner with an inline message and optional action link.
        This pattern is perfect for announcing new features or updates.
      </p>
      <MainContainer code={FloatingBannerCode}>
        <FloatingBannerAlert />
      </MainContainer>

      <NextPrevNavigation currentPath="/docs/alerts" />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "25+ Tailwind CSS Alerts (Dark & Light) – Madhuranjan UI",
  description:
    "Discover a diverse range of responsive Tailwind CSS alert components, from dismissible messages to floating banners, all optimized for light and dark modes.",
  keywords: [
    "Tailwind CSS",
    "Alerts",
    "Notification Components",
    "Dismissible",
    "Dark Mode",
    "Responsive Alerts",
    "UI Components",
  ],
  openGraph: {
    title: "Tailwind CSS Alerts Collection – Madhuranjan UI",
    description:
      "Beautiful and reusable alert components built with Tailwind CSS. Includes toast, dismissible, and global banner styles. Supports dark mode and responsive layouts.",
  },
};
