import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  InfoPopOverCode,
  PopoverWithImageCode,
  SimplePopoverCode,
  SocialPopOverCode,
  StarPopoverCode,
} from "./PopOverCode";
import {
  InfoPopover,
  PopOverWithImage,
  SimplePopover,
  SocialPopover,
  StarPopOver,
} from "./PopOver";
import CommonStyle from "@/helper/style";
import SectionHeading from "@/components/SectionHeading";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense3 from "@/Adsense/Adsense3";

const page = () => {
  return (
    <div className={CommonStyle.containerEntry}>
      <SectionHeading
        id="tailwind-popover"
        heading="Tailwind CSS Popover Components"
        description="Explore a collection of stylish and functional popover components built with Tailwind CSS. These popovers enhance UI interactivity, provide contextual information, and improve user experience with smooth hover and click interactions. Fully responsive and supports both light and dark themes."
      />

      <h2 className={CommonStyle.docHeading} id="default-popover">
        Default Popover
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A simple and clean popover with default styling. It appears on hover or
        click and provides additional context or information. Fully responsive
        and supports both light and dark themes.
      </p>
      <MainContainer code={SimplePopoverCode}>
        <SimplePopover />
      </MainContainer>

      <h2 className={CommonStyle.docHeading} id="social-popover">
        Social Profile Popover
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A popover that displays social media profile previews, including profile
        pictures, usernames, and links. Ideal for interactive user profiles in
        social apps and networking platforms.
      </p>
      <MainContainer code={SocialPopOverCode}>
        <SocialPopover />
      </MainContainer>
<Adsense3/>
      <h2 className={CommonStyle.docHeading} id="rating-popover">
        Star Rating Popover
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        This popover showcases star ratings and user reviews in a compact and
        interactive format. Great for product ratings, feedback sections, and
        e-commerce platforms.
      </p>
      <MainContainer code={StarPopoverCode}>
        <StarPopOver />
      </MainContainer>

      <h2 className={CommonStyle.docHeading} id="info-popover">
        Informational Popover
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        An informational popover that provides additional details when hovering
        over specific text. Perfect for glossary terms, tooltips, and quick
        explanations.
      </p>
      <MainContainer code={InfoPopOverCode}>
        <InfoPopover />
      </MainContainer>

<Adsense3/>
      <h2 className={CommonStyle.docHeading} id="image-popover">
        Popover with Image
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A visually engaging popover that contains images along with content.
        Great for product previews, location highlights, or visual tooltips.
      </p>
      <MainContainer code={PopoverWithImageCode}>
        <PopOverWithImage />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/popover"} />
    </div>
  );
};

export default page;

export const metadata = {
  title: "Tailwind CSS Popover Components - Madhuranjan UI",
  description:
    "Explore beautifully designed popover components built with Tailwind CSS. Fully interactive, responsive, and supports both light and dark themes.",
  keywords: [
    "Tailwind CSS Popover",
    "Interactive Popover",
    "Popover with Image",
    "Responsive Popover",
    "Tooltip with Tailwind CSS",
    "Hover Popover",
    "UI Overlay Components",
  ],
  openGraph: {
    title: "Tailwind CSS Popover Components - Interactive & Responsive",
    description:
      "Discover a collection of stylish and functional popover components built with Tailwind CSS. Perfect for tooltips, interactive overlays, and more.",
  },
};
