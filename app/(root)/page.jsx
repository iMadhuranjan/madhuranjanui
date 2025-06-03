import FrameworkCompatibility from "@/components/FrameworkSupport";
import MadhurajanUIHero from "@/components/HeroSection";
import TemplateShowcase from "@/components/LandingPges";
import PopularComponents from "@/components/PopularComponent";
import SupportSection from "@/components/SupportSection";

import React from "react";

const page = () => {
  return (
    <>
      <MadhurajanUIHero />
      <FrameworkCompatibility />
      <PopularComponents />
      <SupportSection />
      <TemplateShowcase />
    </>
  );
};

export default page;

export const metadata = {
  title: "Madhuranjan UI - Pure Tailwind CSS Component Library",
  description:
    "Build fast, modern, and beautiful websites with Madhuranjan UI – a free and Most Advanced Pure Tailwind CSS component library. Dark mode ready, responsive, and production-ready components for any project.",
  keywords: [
    "Tailwind CSS",
    "Component Library",
    "UI Components",
    "Madhuranjan UI",
    "Dark Mode",
    "Free Tailwind Components",
    "Responsive UI",
    "HTML UI Kit",
    "React Tailwind UI",
    "CSS Framework",
  ],
  metadataBase: new URL("https://madhuranjanui.com"),
  openGraph: {
    title: "Madhuranjan UI - Tailwind CSS Component Library",
    description:
      "A beautiful, developer friendly Tailwind  CSS component library with dark mode support. Build stunning UIs faster with production-ready HTML and React components.",
    url: "https://madhuranjanui.com",
    siteName: "Madhuranjan UI",
    images: [
      {
        url: "https://madhuranjanui.com/madhuranjanui.png", // Replace with actual OG image path
        width: 1200,
        height: 630,
        alt: "Madhuranjan UI Hero Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhuranjan UI - Tailwind CSS Component Library",
    description:
      "Explore free, open-source Tailwind CSS components for modern, responsive web development. Clean, accessible, and dark-mode ready.",
    images: ["https://madhuranjanui.com/madhuranjanui.png"], // Replace if needed
  },
  authors: [{ name: "Madhuranjan", url: "https://madhuranjanui.com" }],
  creator: "Madhuranjan",
};
