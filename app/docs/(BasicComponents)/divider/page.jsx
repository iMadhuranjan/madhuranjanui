import MainContainer from "@/components/MainContainer";
import CommonStyle from "@/helper/style";
import React from "react";
import {
  BasicDividerCode,
  MoreDividersCode,
  SvgDividerCode,
} from "./DividerCode";
import { BasicDivider, MoreDividers, SvgDivider } from "./MyDivider";
import SectionHeading from "@/components/SectionHeading";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense2 from "@/Adsense/Adsense2";

const page = () => {
  return (
    <div className={CommonStyle.containerEntry}>
      <SectionHeading
        id="tailwind-dividers"
        heading="Tailwind CSS Dividers"
        description="Explore a collection of stylish and functional dividers or HR built with Tailwind CSS. These dividers enhance content separation, improve readability, and add visual appeal. From basic lines to stylish gradient effects, each divider is fully responsive and supports both light and dark themes."
      />

      <h2 className={CommonStyle.docHeading} id="Basic-Dividers">
        Basic Divider
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        Basic dividers are simple yet effective horizontal rules that create
        clear separations between sections. They include solid, dashed, and
        dotted lines, ensuring a clean and minimalistic look. Some variations
        also integrate subtle gradient effects and labeled dividers, enhancing
        readability while maintaining a professional design.
      </p>

      <MainContainer code={BasicDividerCode}>
        <BasicDivider />
      </MainContainer>

      <h2 className={CommonStyle.docHeading} id="Svg-Dividers">
        SVG Dividers
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        SVG dividers add a stylish and modern touch to your website's design.
        These dividers use fluid, wave-like, and zigzag patterns that blend
        seamlessly with different sections. They are excellent for dynamic UI
        elements and provide a visually appealing transition between content
        blocks.
      </p>
      <MainContainer code={SvgDividerCode}>
        <SvgDivider />
      </MainContainer>

<Adsense2/>
      <h2 className={CommonStyle.docHeading} id="Stylish-Dividers">
        Stylish Dividers
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        Stylish dividers go beyond basic lines, incorporating creative elements
        like small shapes, gradient effects, and embedded text. They offer a
        unique way to break content while keeping users engaged. These dividers
        are ideal for modern web designs that require a sleek and aesthetically
        pleasing structure.
      </p>
      <MainContainer code={MoreDividersCode}>
        <MoreDividers className="lg:px-2" />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/divider"} />
    </div>
  );
};

export default page;

export const metadata = {
  title: "Tailwind CSS Dividers (HR) Horizontal Lines - Madhuranjan UI",
  description:
    "Explore a collection of stylish and functional dividers built with Tailwind CSS. From simple lines to creative gradient effects, these dividers enhance content separation and readability. Fully responsive and supports dark/light modes.",
  openGraph: {
    title: "Tailwind CSS Dividers (𝓬𝓸𝓹𝔂 𝖆𝖓𝖉 𝓹𝓪𝓼𝓽𝓮)",
    description:
      "Discover a variety of stylish and functional dividers designed with Tailwind CSS. Enhance your UI with seamless content separators that are fully responsive and optimized for modern web applications.",
    url: "https://http://madhuranjanui.com/docs/divider",
    siteName: "Madhuranjan UI",
    type: "website",
  },
};
