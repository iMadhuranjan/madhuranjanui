import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  BorderRadioCode,
  ColoredRadtioCode,
  DefaultRadioCode,
  DIsablledRadioCode,
  RadioCardWithTitleAndDescriptionCode,
  RadioDropDownCode,
  RadioWithHelperTextCode,
  RadioWithLinkCode,
  StackCardRadioCode,
  TileWithDescriptionCode,
} from "./radioCode";
import {
  BorderRadio,
  ColoredRadio,
  DefaultRadio,
  DisabledRadio,
  RadioCardWithTitleDexcritpn,
  RadioDropDown,
  RadioWithHelperText,
  RadioWithLink,
  RadioWithTitleDescription,
  StatceedRadio,
} from "./Radio";
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
        heading="Tailwind CSS Radio Components"
        description="Explore a comprehensive collection of radio button components built with Tailwind CSS. These components offer a range of styles from basic defaults to advanced card layouts with titles and descriptions ensuring accessible, responsive, and visually engaging form controls."
      />

      <p className="mb-5 text-gray-900 dark:text-gray-200 pl-2">
        This curated selection of radio components demonstrates various design
        approaches using Tailwind CSS. Whether you need a standard radio button,
        a disabled variant, or an innovative layout with integrated links,
        helper text, or even a dropdown, these examples are tailored to elevate
        your form interactions.
      </p>

      {/* 1. Default Radio */}
      <h2 className={CommonStyle.docHeading} id="default-radio">
        Default Radio
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A classic radio button with standard styling, ideal for simple
        selections.
      </p>
      <MainContainer code={DefaultRadioCode}>
        <DefaultRadio />
      </MainContainer>

      {/* 2. Disabled Radio */}
      <h2 className={CommonStyle.docHeading} id="disabled-radio">
        Disabled Radio
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A radio button rendered in a disabled state to clearly indicate
        non-interactivity.
      </p>
      <MainContainer code={DIsablledRadioCode}>
        <DisabledRadio />
      </MainContainer>
<Adsense2/>
      {/* 3. Radio with Link */}
      <h2 className={CommonStyle.docHeading} id="radio-with-link">
        Radio with Link
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        This radio button integrates an embedded link for additional context,
        useful for accepting terms or providing extra information.
      </p>
      <MainContainer code={RadioWithLinkCode}>
        <RadioWithLink />
      </MainContainer>

      {/* 4. Radio with Helper Text */}
      <h2 className={CommonStyle.docHeading} id="radio-with-helper-text">
        Radio with Helper Text
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A radio button that offers helper text to guide users, ensuring clarity
        and improved usability.
      </p>
      <MainContainer code={RadioWithHelperTextCode}>
        <RadioWithHelperText />
      </MainContainer>
<Adsense2/>
      {/* 5. Border Radio */}
      <h2 className={CommonStyle.docHeading} id="border-radio">
        Border Radio
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A radio button styled with a border for a modern and minimalist design.
      </p>
      <MainContainer code={BorderRadioCode}>
        <BorderRadio />
      </MainContainer>

      {/* 6. Radio Dropdown */}
      <h2 className={CommonStyle.docHeading} id="radio-dropdown">
        Radio Dropdown
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        An innovative radio component integrated within a dropdown, allowing for
        compact and efficient selection.
      </p>
      <MainContainer code={RadioDropDownCode}>
        <RadioDropDown />
      </MainContainer>
<Adsense3/>
      {/* 7. Colored Radio */}
      <h2 className={CommonStyle.docHeading} id="colored-radio">
        Colored Radio
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A vibrant radio button variant featuring accent colors that enhance the
        visual appeal of your forms.
      </p>
      <MainContainer code={ColoredRadtioCode}>
        <ColoredRadio />
      </MainContainer>

      {/* 8. Radio with Title and Description */}
      <h2 className={CommonStyle.docHeading} id="radio-title-description">
        Radio with Title and Description
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        This radio button variant includes a title and a brief description,
        providing users with additional context for their selection.
      </p>
      <MainContainer code={TileWithDescriptionCode}>
        <RadioWithTitleDescription />
      </MainContainer>
<Adsense3/>
      {/* 9. Radio Card with Title and Description */}
      <h2 className={CommonStyle.docHeading} id="radio-card-title-description">
        Radio Card with Title and Description
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        An advanced radio component presented as a card, combining a title,
        description, and engaging visuals for a rich user experience.
      </p>
      <MainContainer code={RadioCardWithTitleAndDescriptionCode}>
        <RadioCardWithTitleDexcritpn />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/radio"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Radio Components - Madhuranjan UI",
  description:
    "Explore a wide range of Tailwind CSS radio button components—from simple and disabled radios to advanced card layouts with titles, descriptions, and dropdowns. All fully responsive and theme-aware.",
  keywords: [
    "Tailwind CSS Radio",
    "Radio Button UI",
    "Tailwind Form Controls",
    "Radio Group",
    "Custom Radio Button",
    "Radio with Helper Text",
    "Radio Button Card",
    "Radio Dropdown",
    "Colored Radio Buttons",
    "Responsive Radio Components",
  ],
  openGraph: {
    title: "Tailwind CSS Radio Components - Madhuranjan UI",
    description:
      "Discover responsive and customizable radio components built with Tailwind CSS. Includes basic, bordered, colored, and card-style radios with full dark mode support.",
    url: "https://madhuranjanui.com/docs/radio",
    type: "website",
  },
};
