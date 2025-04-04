import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  DisabledInputFieldCode,
  FloatingLabelInputCode,
  HelperInputCode,
  InputFieldValidationcode,
  InputHeightCode,
  NumberInputFieldCode,
  PilledINputFieldCode,
  searchInputCode,
  SimpleInputFieldCode,
  TelInputFieldCode,
  UrlINputFieldCode,
  UserNamePasswordCode,
} from "./InputFieldCode";
import {
  DisabledInputField,
  FloatingLabelInputField,
  HelperInput,
  InputFielValidation,
  InputHeigt,
  InputWithUserNameAndPasswordIcon,
  NumberInputField,
  PilledInput,
  SearchINput,
  SimpleInputField,
  TelInputField,
  UrlInputField,
} from "./InputField";
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
        heading="Tailwind CSS Input Fields"
        description="Explore a complete collection of input field components built with Tailwind CSS. From basic fields to advanced inputs with floating labels, icons, and validation these inputs are fully responsive and theme-aware."
      />

      {/* 1. Simple Input Field */}
      <h2 className={CommonStyle.docHeading} id="simple-input-field">
        Simple Input Field
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        This is the most basic input field for general text entry. It's styled
        with clean borders and works out of the box in both light and dark
        themes.
      </p>
      <MainContainer code={SimpleInputFieldCode}>
        <SimpleInputField />
      </MainContainer>

      {/* 2. Input Height Variants */}
      <h2 className={CommonStyle.docHeading} id="input-height-variants">
        Input Height Variants
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Tailwind allows you to easily scale input heights using padding. Choose
        from small to extra large based on your design needs.
      </p>
      <MainContainer code={InputHeightCode}>
        <InputHeigt />
      </MainContainer>

<Adsense2/>
      {/* 3. Inputs with Icons (Username & Password) */}
      <h2 className={CommonStyle.docHeading} id="input-with-icons">
        Inputs with Username and Password Icons
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        These input fields include icons for visual clarity and improved
        usability perfect for login forms and authentication UIs.
      </p>
      <MainContainer code={UserNamePasswordCode}>
        <InputWithUserNameAndPasswordIcon />
      </MainContainer>

      {/* 4. Disabled Input */}
      <h2 className={CommonStyle.docHeading} id="disabled-input">
        Disabled Input Fields
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Inputs that are disabled are styled with muted colors and prevent any
        user interaction.
      </p>
      <MainContainer code={DisabledInputFieldCode}>
        <DisabledInputField />
      </MainContainer>

<Adsense2/>
      {/* 5. Input Validation */}
      <h2 className={CommonStyle.docHeading} id="input-validation">
        Validation Input Fields
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        These inputs support success and error states using Tailwind’s ring and
        text utilities.
      </p>
      <MainContainer code={InputFieldValidationcode}>
        <InputFielValidation />
      </MainContainer>

      {/* 6. Floating Label Inputs */}
      <h2 className={CommonStyle.docHeading} id="floating-label-inputs">
        Floating Label Input Fields
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Floating labels create a modern, material-style experience that shifts
        the label above the field on focus.
      </p>
      <MainContainer code={FloatingLabelInputCode}>
        <FloatingLabelInputField />
      </MainContainer>

<Adsense3/>
      {/* 7. Helper Text Inputs */}
      <h2 className={CommonStyle.docHeading} id="helper-text-input">
        Input Fields with Helper Text
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        These fields include contextual help beneath the input to guide users on
        what to enter.
      </p>
      <MainContainer code={HelperInputCode}>
        <HelperInput />
      </MainContainer>

      {/* 8. Pill-Shaped Input */}
      <h2 className={CommonStyle.docHeading} id="pill-input">
        Pilled Input Fields
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        These pill-shaped inputs use full border-radius styling for a softer,
        more modern look.
      </p>
      <MainContainer code={PilledINputFieldCode}>
        <PilledInput />
      </MainContainer>
<Adsense2/>
      {/* 9. Search Input with Icon & Button */}
      <h2 className={CommonStyle.docHeading} id="search-input">
        Search Inputs with Icon and Button
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Search inputs with embedded icons and right-aligned action buttons.
        Perfect for forms and dashboards.
      </p>
      <MainContainer code={searchInputCode}>
        <SearchINput />
      </MainContainer>

      {/* 10. Number Input */}
      <h2 className={CommonStyle.docHeading} id="number-input">
        Number Input Field
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Accept numeric input with built-in browser support for incrementing
        values.
      </p>
      <MainContainer code={NumberInputFieldCode}>
        <NumberInputField />
      </MainContainer>
<Adsense3/>
      {/* 11. Telephone Input */}
      <h2 className={CommonStyle.docHeading} id="tel-input">
        Telephone Input Field
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Use the <code>type="tel"</code> input for capturing user phone numbers.
      </p>
      <MainContainer code={TelInputFieldCode}>
        <TelInputField />
      </MainContainer>

      {/* 12. URL Input */}
      <h2 className={CommonStyle.docHeading} id="url-input">
        URL Input Field
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        The URL input is ideal for collecting links and validates domain formats
        by default.
      </p>
      <MainContainer code={UrlINputFieldCode}>
        <UrlInputField />
      </MainContainer>

      {/* Add more variants here... */}
      <NextPrevNavigation currentPath={"/docs/input-field"} />
    </div>
  );
};

export default Page;


export const metadata = {
  title: "Tailwind CSS Input Field Components - Madhuranjan UI",
  description:
    "Browse a wide range of responsive input field components built with Tailwind CSS. Includes floating labels, icons, validation, helper text, and modern UI variants with full dark mode support.",
  keywords: [
    "Tailwind CSS Input Field",
    "Floating Label Input",
    "Input Validation",
    "Pill Input",
    "Input with Icons",
    "Tailwind Form Inputs",
    "Search Input",
    "Responsive Input Field",
    "Dark Mode Input Field",
    "Input Component UI",
  ],
  openGraph: {
    title: "Tailwind CSS Input Fields - Madhuranjan UI",
    description:
      "Explore responsive and theme-aware input field components made with Tailwind CSS. Features include validation, icons, floating labels, pill styles, and more.",
    url: "https://madhuranjanui.com/docs/input-field",
    type: "website",
  },
};
