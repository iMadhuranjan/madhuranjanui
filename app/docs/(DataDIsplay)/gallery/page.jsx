import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  GalleryImageCode,
  HorizontalScrollCode,
  MixedImageGalleryCode,
  PaloridGalleryImageCode,
  SimpleImageGalleryCode,
} from "./galleryCode";
import {
  HorizontalSccroll,
  HoverCOmeTextGallery,
  MixedImageGallery,
  PaloridGallery,
  SImpleImageGallery,
} from "./Gallery";
import ResponsiveNote from "@/components/ResponsiveNote";
import NextPrevNavigation from "@/components/Nextprev";
import CommonStyle from "@/helper/style";
import SectionHeading from "@/components/SectionHeading";
import Adsense1 from "@/Adsense/Adsense1";
import Adsense2 from "@/Adsense/Adsense2";


const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
        id="main-title"
        heading="Tailwind CSS Image Gallery Components"
        description="Explore a range of responsive and modern image gallery components built with Tailwind CSS. Each design offers a unique visual experience to showcase your images effectively."
      />

      {/* Responsive Note */}
      <ResponsiveNote />

      {/* 1. Simple Image Gallery */}
      <h2 className={CommonStyle.docHeading} id="simple-image-gallery">
        Simple Image Gallery
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A clean and straightforward layout to showcase your images with a minimalist design.
      </p>
      <MainContainer code={SimpleImageGalleryCode}>
        <SImpleImageGallery />
      </MainContainer>

      {/* 2. Image Gallery with Hover Text */}
      <h2 className={CommonStyle.docHeading} id="hover-text-gallery">
        Image Gallery with Hover Text
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Enhance user interaction with a hover effect that reveals additional text information over images.
      </p>
      <MainContainer code={GalleryImageCode}>
        <HoverCOmeTextGallery />
      </MainContainer>

<Adsense2/>
      {/* 3. Mixed Image Gallery */}
      <h2 className={CommonStyle.docHeading} id="mixed-image-gallery">
        Mixed Image Gallery
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Combine different layouts in one gallery to create a dynamic presentation that suits various content types.
      </p>
      <MainContainer code={MixedImageGalleryCode}>
        <MixedImageGallery />
      </MainContainer>

      {/* 4. Polaroid Gallery */}
      <h2 className={CommonStyle.docHeading} id="polaroid-gallery">
        Polaroid Gallery
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Give your images a nostalgic twist with a Polaroid-inspired layout that adds charm and character.
      </p>
      <MainContainer code={PaloridGalleryImageCode}>
        <PaloridGallery />
      </MainContainer>

<Adsense2/>
      {/* 5. Horizontal Scroll Gallery */}
      <h2 className={CommonStyle.docHeading} id="horizontal-scroll-gallery">
        Horizontal Scroll Gallery
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Experience smooth horizontal scrolling to display a series of images in an interactive and modern style.
      </p>
      <MainContainer code={HorizontalScrollCode}>
        <HorizontalSccroll />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/gallery"} />
    </div>
  );
};

export default Page;


export const metadata = {
  title: "Tailwind CSS Image Gallery Components - Madhuranjan UI",
  description:
    "Explore a variety of image gallery components built with Tailwind CSS. Includes hover text effects, polaroid layouts, horizontal scroll, and mixed responsive galleries—all modern and theme-aware.",
  keywords: [
    "Tailwind CSS Gallery",
    "Image Gallery Component",
    "Responsive Image Grid",
    "Horizontal Scroll Gallery",
    "Polaroid Image Layout",
    "Hover Text Gallery",
    "Tailwind CSS UI",
    "Gallery Layout Tailwind",
    "Dark Mode Image Gallery",
    "Modern Image Showcase",
  ],
  openGraph: {
    title: "Tailwind CSS Image Gallery Components - Madhuranjan UI",
    description:
      "Showcase your images with Tailwind CSS galleries featuring hover text, polaroid styles, responsive layouts, and smooth horizontal scroll. Perfect for portfolios and image-heavy pages.",
    url: "https://madhuranjanui.com/docs/gallery",
    type: "website",
  },
};
