import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  AdvancedCheckBoxCardCode,
  BorderCheckBoxCode,
  CheckBoxDropDownCode,
  CheckBoxWithHelperTextCode,
  CheckBoxWithLinkCode,
  CheckBoxWithTitleDesccrtitopnCode,
  ColoredChekBoxCode,
  DisabledCheckBoxCode,
  SImpleCheckBoxCode,
} from "./checkBoxCode";
import {
  AdvancedCheckBoxCard,
  BorderedCheckBox,
  CheckBoxDropDown,
  CheckBoxWithHelperText,
  CheckBoxWithLink,
  CheckBoxWithTilteAndDescription,
  ColoredCheckBox,
  DisabledCheckBox,
  SimpleCheckBox,
} from "./CheckBox";
import NextPrevNavigation from "@/components/Nextprev";
import CommonStyle from "@/helper/style";
import SectionHeading from "@/components/SectionHeading";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense3 from "@/Adsense/Adsense3";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
        heading="Tailwind CSS Checkbox Components"
        description="Explore a comprehensive collection of checkbox components built with Tailwind CSS. From simple and disabled checkboxes to advanced card layouts and colorful variations, these examples are designed to enhance your forms with responsive, theme-aware interactivity."
      />

      <p className="mb-5 text-gray-900 dark:text-gray-200 pl-2">
        This curated selection of checkbox components offers versatile options
        for all your form needs. Whether you're looking for a clean, simple
        checkbox, one that includes helper text or links, or even an innovative
        checkbox integrated into a dropdown, our examples are crafted to provide
        both functionality and aesthetic appeal.
      </p>

      {/* 1. Simple Checkbox */}
      <h2 className={CommonStyle.docHeading} id="simple-checkbox">
        Simple Checkbox
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A basic checkbox component with a clean design, perfect for standard
        form selections.
      </p>
      <MainContainer code={SImpleCheckBoxCode}>
        <SimpleCheckBox />
      </MainContainer>

      {/* 2. Disabled Checkbox */}
      <h2 className={CommonStyle.docHeading} id="disabled-checkbox">
        Disabled Checkbox
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A checkbox component rendered in a disabled state to indicate
        non-interactivity.
      </p>
      <MainContainer code={DisabledCheckBoxCode}>
        <DisabledCheckBox />
      </MainContainer>

<Adsense2/>
      {/* 3. Checkbox with Link */}
      <h2 className={CommonStyle.docHeading} id="checkbox-with-link">
        Checkbox with Link
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        This checkbox integrates an embedded link, making it ideal for accepting
        terms and conditions.
      </p>
      <MainContainer code={CheckBoxWithLinkCode}>
        <CheckBoxWithLink />
      </MainContainer>

      {/* 4. Checkbox with Helper Text */}
      <h2 className={CommonStyle.docHeading} id="checkbox-with-helper-text">
        Checkbox with Helper Text
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A checkbox that provides additional helper text to guide users on its
        purpose.
      </p>
      <MainContainer code={CheckBoxWithHelperTextCode}>
        <CheckBoxWithHelperText />
      </MainContainer>

<Adsense2/>
      {/* 5. Bordered Checkbox */}
      <h2 className={CommonStyle.docHeading} id="bordered-checkbox">
        Bordered Checkbox
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A stylish checkbox variant featuring a bordered design for a modern,
        minimalistic look.
      </p>
      <MainContainer code={BorderCheckBoxCode}>
        <BorderedCheckBox />
      </MainContainer>

      {/* 6. Checkbox Dropdown */}
      <h2 className={CommonStyle.docHeading} id="checkbox-dropdown">
        Checkbox Dropdown
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        An innovative checkbox integrated within a dropdown, allowing users to
        select multiple options from a compact interface.
      </p>
      <MainContainer code={CheckBoxDropDownCode}>
        <CheckBoxDropDown />
      </MainContainer>

<Adsense3/>
      {/* 7. Colored Checkbox */}
      <h2 className={CommonStyle.docHeading} id="colored-checkbox">
        Colored Checkbox
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A vibrant set of colored checkboxes that use accent colors to provide a
        dynamic visual experience.
      </p>
      <MainContainer code={ColoredChekBoxCode}>
        <ColoredCheckBox />
      </MainContainer>

      {/* 8. Advanced Checkbox Card */}
      <h2 className={CommonStyle.docHeading} id="advanced-checkbox-card">
        Advanced Checkbox Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A sophisticated checkbox designed as a card layout, combining visuals
        with functionality for an engaging user interface.
      </p>
      <MainContainer code={AdvancedCheckBoxCardCode}>
        <AdvancedCheckBoxCard />
      </MainContainer>

<Adsense2/>
      {/* 9. Checkbox with Title and Description */}
      <h2
        className={CommonStyle.docHeading}
        id="checkbox-with-title-description"
      >
        Checkbox with Title and Description
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        This checkbox variant includes a title and a detailed description,
        providing clear context for user selections.
      </p>
      <MainContainer code={CheckBoxWithTitleDesccrtitopnCode}>
        <CheckBoxWithTilteAndDescription />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/checkbox"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Checkbox Components - Madhuranjan UI",
  description:
    "Explore beautifully designed Tailwind CSS checkbox components including simple, bordered, colored, and advanced checkbox cards. Fully responsive, accessible, and supports dark mode.",
  keywords: [
    "Tailwind CSS Checkbox",
    "Checkbox UI Components",
    "Checkbox with Link",
    "Checkbox Dropdown",
    "Colored Checkbox",
    "Checkbox Card",
    "Responsive Checkbox",
    "Dark Mode Checkbox",
    "Tailwind Form Elements",
  ],
  openGraph: {
    title: "Tailwind CSS Checkbox Components - Madhuranjan UI",
    description:
      "Discover modern checkbox components made with Tailwind CSS. Includes bordered, colored, dropdown, and card-style checkboxes. Fully responsive and dark mode ready.",
    url: "https://madhuranjanui.com/docs/checkbox",
    type: "website",
  },
};
