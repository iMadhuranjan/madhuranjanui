import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  DiffertSizeInputCode,
  DropFIleCode,
  FileUploadCode,
  HelperTextCode,
  SimpleFileUPloadCode,
  UploadMultipleFIleCode,
} from "./fileInputCode";
import {
  DifferetnSizeInputFile,
  DropFileInput,
  FileUpload,
  FileUploadWithHelperText,
  SimpleFileUpload,
  UploadMultipleFile,
} from "./FileInput";
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
        heading="Tailwind CSS File Inputs"
        description="Discover a variety of file upload components built with Tailwind CSS. These file inputs are modern, fully responsive, support dark mode, and include features like helper text, dropzone functionality, and multiple file support."
      />

      {/* 1. Simple File Input */}
      <h2 className={CommonStyle.docHeading} id="simple-file-input">
        Simple File Input
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A clean and minimal file input field. Ideal for basic file uploads with
        full theme support and responsive design.
      </p>
      <MainContainer code={SimpleFileUPloadCode}>
        <SimpleFileUpload />
      </MainContainer>

      {/* 2. Styled File Upload Button */}
      <h2 className={CommonStyle.docHeading} id="styled-file-upload">
        Custom Styled File Upload
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A more advanced file input with a styled button using Tailwind’s file
        pseudo-classes. Matches your theme and UX.
      </p>
      <MainContainer code={FileUploadCode}>
        <FileUpload />
      </MainContainer>

<Adsense2/>
      {/* 3. File Upload with Helper Text */}
      <h2 className={CommonStyle.docHeading} id="file-upload-helper-text">
        File Upload with Helper Text
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Add extra guidance below the input field to inform users about file
        types, size, or rules.
      </p>
      <MainContainer code={HelperTextCode}>
        <FileUploadWithHelperText />
      </MainContainer>

      {/* 4. Upload Multiple Files */}
      <h2 className={CommonStyle.docHeading} id="upload-multiple-files">
        Upload Multiple Files
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Easily allow users to select and upload more than one file at a time by
        using the <code>multiple</code> attribute.
      </p>
      <MainContainer code={UploadMultipleFIleCode}>
        <UploadMultipleFile />
      </MainContainer>

<Adsense3/>
      {/* 5. File Input Size Variants */}
      <h2 className={CommonStyle.docHeading} id="file-input-sizes">
        File Input Size Variants
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Choose from small, default, and large sizing for file input buttons to
        match your form layout.
      </p>
      <MainContainer code={DiffertSizeInputCode}>
        <DifferetnSizeInputFile />
      </MainContainer>

      {/* 6. Dropzone File Upload */}
      <h2 className={CommonStyle.docHeading} id="dropzone-upload">
        Dropzone File Upload
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Let users drag and drop files into a large dropzone area with
        iconography and styling. Fully click-to-upload capable.
      </p>
      <MainContainer code={DropFIleCode}>
        <DropFileInput />
      </MainContainer>

      {/* Navigation */}
      <NextPrevNavigation currentPath={"/docs/file-input"} />
    </div>
  );
};

export default Page;


export const metadata = {
  title: "Tailwind CSS File Input Components - Madhuranjan UI",
  description:
    "Explore modern and responsive Tailwind CSS file upload components. Includes styled inputs, helper text, dropzone functionality, and support for multiple files with full theme compatibility.",
  keywords: [
    "Tailwind CSS File Input",
    "File Upload Components",
    "Multiple File Upload",
    "Dropzone Upload",
    "Styled File Input",
    "Responsive File Upload",
    "Tailwind Form Components",
    "Dark Mode File Input",
    "Upload Button Tailwind",
  ],
  openGraph: {
    title: "Tailwind CSS File Input Components - Madhuranjan UI",
    description:
      "Discover a curated collection of file input components built with Tailwind CSS. Features dropzones, helper text, size variants, and responsive design.",
    url: "https://madhuranjanui.com/docs/file-input",
    type: "website",
  },
};
