import MainContainer from "@/components/MainContainer";
import SectionHeading from "@/components/SectionHeading";
import CommonStyle from "@/helper/style";
import React from "react";
import {
  DefaultListGroup,
  HorizontalListGroup,
  ListGroupWithBadge,
  ListGroupWithCheckBox,
  ListGroupWithIcons,
  ListGroupWithoggleAndBadge,
  ListGroupWithToggleAndBadge,
  StripeListGroup,
} from "./ListGroup";
import {
  DefaultListGroupCode,
  HorizontalListGroupCode,
  ListGroupWithBadgeCode,
  ListGroupWithCheckBoxCode,
  ListGroupWithIconCode,
  ListGroupWithToggleAndBadgeCode,
  StripeListGroupCode,
} from "./ListGroupCode";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense3 from "@/Adsense/Adsense3";

const page = () => {
  return (
    <div className={CommonStyle.containerEntry}>
      <SectionHeading
        id="tailwind-list-group"
        heading="Tailwind CSS List Group Components"
        description="Explore a collection of stylish and functional list group components built with Tailwind CSS. These list groups enhance UI structure, improve readability, and offer a visually appealing organization of content. Fully responsive and supports both light and dark themes."
      />

      <h2 className={CommonStyle.docHeading} id="default-list-group">
        Default List Group
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A simple and clean list group with default styling. It provides an
        intuitive layout for organizing content into structured lists. Fully
        responsive and supports both light and dark themes.
      </p>
      <MainContainer code={DefaultListGroupCode}>
        <DefaultListGroup />
      </MainContainer>

      <h2 className={CommonStyle.docHeading} id="striped-list-group">
        Striped List Group
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A striped list group that alternates background colors for better
        readability. Ideal for highlighting rows in a structured manner while
        keeping a clean design.
      </p>
      <MainContainer code={StripeListGroupCode}>
        <StripeListGroup />
      </MainContainer>

<Adsense3/>
      <h2 className={CommonStyle.docHeading} id="list-group-with-icons">
        List Group with Icons
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        This list group includes icons for better visual representation. Each
        item in the list is paired with an icon, making navigation and
        recognition easier for users.
      </p>
      <MainContainer code={ListGroupWithIconCode}>
        <ListGroupWithIcons />
      </MainContainer>

      <h2 className={CommonStyle.docHeading} id="list-group-with-badges">
        List Group with Badges
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A list group that features badges to indicate status, notifications, or
        additional context. This component is useful for applications requiring
        dynamic data display.
      </p>
      <MainContainer code={ListGroupWithBadgeCode}>
        <ListGroupWithBadge />
      </MainContainer>

<Adsense3/>
      <h2 className={CommonStyle.docHeading} id="horizontal-list-group">
        Horizontal List Group
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A horizontal list group that arranges list items in a single row. Ideal
        for navigation bars, tabbed layouts, or action menus while maintaining a
        clean and structured design.
      </p>
      <MainContainer code={HorizontalListGroupCode}>
        <HorizontalListGroup />
      </MainContainer>

      <h2
        className={CommonStyle.docHeading}
        id="list-group-with-toggle-and-badge"
      >
        List Group with Toggle and Badges
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A list group that combines toggle switches and badges to display
        settings or statuses dynamically. This component is ideal for preference
        panels, security settings, and feature management.
      </p>
      <MainContainer code={ListGroupWithToggleAndBadgeCode}>
        <ListGroupWithToggleAndBadge />
      </MainContainer>

<Adsense3/>
      <h2 className={CommonStyle.docHeading} id="list-group-with-checkboxes">
        List Group with Checkboxes
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        This list group includes checkbox selections, allowing users to
        select multiple items efficiently. Suitable for task management,
        multi-selection menus, and settings customization.
      </p>
      <MainContainer code={ListGroupWithCheckBoxCode}>
        <ListGroupWithCheckBox />
      </MainContainer>
      <NextPrevNavigation currentPath={"/docs/list-group"} />
    </div>
  );
};

export default page;


export const metadata = {
  title: "Tailwind CSS List Group Components - Madhuranjan UI",
  description:
    "Browse modern list group components built with Tailwind CSS. Includes default, striped, icon-based, horizontal, badge-enhanced, and interactive list groups—all responsive and dark mode compatible.",
  keywords: [
    "Tailwind CSS List Group",
    "List Group Component",
    "List with Badges",
    "List with Icons",
    "Striped List Group",
    "Horizontal List Group",
    "Toggle List UI",
    "Checklist Component",
    "Responsive List Group",
    "Tailwind Dark Mode List",
  ],
  openGraph: {
    title: "Tailwind CSS List Group Components - Madhuranjan UI",
    description:
      "Explore stylish and functional Tailwind CSS list group components with badges, icons, toggles, and checkboxes. Enhance UI structure and readability with responsive design.",
    url: "https://madhuranjanui.com/docs/list-group",
    type: "website",
  },
};
