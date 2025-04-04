import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  BorderWithToastCode,
  MessageToastCode,
  NotificationToastCode,
  SuccessToastCode,
  ToastWithAvatarCode,
  ToastWithLabelAndButtonCode,
  ToastWithSwitchCode,
  VarientWithCloseTOast,
} from "./ToastCode";
import {
  MessageToast,
  NotifficationToast,
  SuccessToast,
  ToastsVarient,
  ToastWithAvatar,
  ToastWithBorders,
  ToastWithLabelAndButton,
  ToastWithSwitch,
} from "./Toast";
import SectionHeading from "@/components/SectionHeading";
import CommonStyle from "@/helper/style";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense3 from "@/Adsense/Adsense3";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
        id="tailwind-css-toasts"
        heading="Tailwind CSS Toasts"
        description="A collection of modern, responsive toast notifications built with Tailwind CSS. Easily adaptable to light/dark themes, perfect for alerts, feedback, and user messaging."
      />

      {/* 1. Success Toast */}
      <h2 className={CommonStyle.docHeading} id="success-toast">
        Success Toast
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Display success messages with green accent icons and background. Best
        used for confirmations.
      </p>
      <MainContainer code={SuccessToastCode}>
        <div className="relative h-40">
          <SuccessToast />
        </div>
      </MainContainer>

      {/* 2. Variant Toasts with Close Buttons */}
      <h2 className={CommonStyle.docHeading} id="variant-toast">
        Variant Toasts
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Showcase success, error, and warning toasts, each with dismiss
        functionality.
      </p>
      <MainContainer code={VarientWithCloseTOast}>
        <div className="relative h-80">
          <ToastsVarient />
        </div>
      </MainContainer>

<Adsense2/>
      {/* 3. Message Toast */}
      <h2 className={CommonStyle.docHeading} id="message-toast">
        Message Toast
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A card-style toast layout that includes actions like reply and dismiss.
      </p>
      <MainContainer code={MessageToastCode}>
        <MessageToast />
      </MainContainer>

      {/* 4. Notification Toast */}
      <h2 className={CommonStyle.docHeading} id="notification-toast">
        Notification Toast
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Designed for app notifications, alerts users with badges, icons, and
        action buttons.
      </p>
      <MainContainer code={NotificationToastCode}>
        <NotifficationToast />
      </MainContainer>

<Adsense2/>
      {/* 5. Toast with Avatar */}
      <h2 className={CommonStyle.docHeading} id="avatar-toast">
        Toast with Avatar
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Show user avatars along with messages for personalized notifications.
      </p>
      <MainContainer code={ToastWithAvatarCode}>
        <ToastWithAvatar />
      </MainContainer>

      {/* 6. Toast with Borders */}
      <h2 className={CommonStyle.docHeading} id="border-toast">
        Toast with Borders
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Use colored left borders to quickly indicate toast type (success, error,
        info, warning).
      </p>
      <MainContainer code={BorderWithToastCode}>
        <ToastWithBorders />
      </MainContainer>

<Adsense3/>
      {/* 7. Toast with Toggle/Switch */}
      <h2 className={CommonStyle.docHeading} id="switch-toast">
        Toast with Toggle Switch
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Includes interactive elements like switches to activate or deactivate
        features.
      </p>
      <MainContainer code={ToastWithSwitchCode}>
        <ToastWithSwitch />
      </MainContainer>

      {/* 8. Toast with Label & Buttons */}
      <h2 className={CommonStyle.docHeading} id="label-button-toast">
        Toast with Label & Buttons
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Combine tags, user avatars, and CTA buttons in a flexible layout.
      </p>
      <MainContainer code={ToastWithLabelAndButtonCode}>
        <ToastWithLabelAndButton />
      </MainContainer>

      <NextPrevNavigation currentPath="/docs/toast" />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Toasts (Dark & Light) – Madhuranjan UI",
  description:
    "Explore 8+ Tailwind CSS Toast components with full dark and light mode support. From success messages to interactive notifications with avatars, labels, and actions all responsive and ready for modern UIs.",
  keywords: [
    "Tailwind CSS Toasts",
    "Toast Notifications",
    "Dark Mode Toast",
    "Alert Components",
    "Success Error Warning Toast",
    "Tailwind Notification UI",
    "Toast Message Components",
    "Responsive Toasts",
  ],
  openGraph: {
    title: "Tailwind CSS Toast Components – Alerts & Notifications",
    description:
      "Browse a collection of elegant Tailwind CSS Toasts perfect for displaying success, error, info, and interactive alerts. Fully responsive and built with dark mode support for modern dashboards and web apps.",
  },
};
