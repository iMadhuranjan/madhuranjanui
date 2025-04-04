import NextPrevNavigation from "@/components/Nextprev";
import QuickStartHeading from "@/components/QuickStartHeading";
import CommonStyle from "@/helper/style";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const page = () => {
  return (
    <div className={CommonStyle.containerEntry}>
      <QuickStartHeading
        heading={"Quick Start"}
        description={
          "Welcome to Madhuranjan UI - Pure Tailwind CSS Compoent Library. Build fast, Modern and beautiful websites in no time. Just plug in and go with our ready to use Tailwind CSS components and Blocks :)"
        }
      />

      <h2 className={CommonStyle.docHeading} id="introduction">
        {" "}
        Introduction
      </h2>
      <p className={CommonStyle.docpara}>
        {" "}
        Madhuranjan UI is a modern TailwindCSS component library built for
        speed, flexibility, and theme adaptability. Whether you're working with
        HTML, React, or any frontend framework, our fully responsive and
        accessible components help you launch beautiful websites effortlessly.
      </p>
      <p className={CommonStyle.docpara}>
        Designed for light and dark themes with custom color support (violet &
        blue), every component is production ready. Every Component or Section
        is built with pure TailwindCSS no JavaScript frameworks, no
        dependencies, just clean, copy-paste-ready code that works everywhere.
      </p>
      <p className={CommonStyle.docpara}>
        Every single component, UI block, and section in Madhuranjan UI is and
        always will be 100% free. No subscriptions, no paywalls, no nonsense.
        We’re committed to helping developers build faster with beautifully
        modern and professional UI and we’re just getting started. New
        components and sections will continue to be added regularly, all at no
        cost, forever :).
      </p>

      <h2 className={CommonStyle.docHeading} id="getting-started">
        Getting started{" "}
      </h2>

      <p className={CommonStyle.docpara}>
        Built with pure Tailwind CSS. Just install Tailwind, copy any component,
        and start building Follow the Offical{" "}
        <a
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold  via-violet-500 dark:text-blue-600 hover:underline"
        >
          Tailwind CSS installation guide
        </a>
        .
      </p>

      <h2 className={CommonStyle.docHeading} id="installation">
        Installation
      </h2>

      <SyntaxHighlighter
        language="bash"
        style={oneDark}
        customStyle={{
          borderRadius: "0.5rem",
          padding: "1rem",
          fontSize: "0.875rem",
        }}
        className="bg-muted"
      >
        {`npm install -D tailwindcss
npx tailwindcss init -p`}
      </SyntaxHighlighter>

      <p className={CommonStyle.docpara}>
        This installs Tailwind and sets up the basic configuration files. You
        can customize them to match your project.
      </p>

      <h2 className={CommonStyle.docHeading} id="font">
        Font
      </h2>

      <p className={CommonStyle.docpara}>
        We use <span className="font-semibold">Inter</span> as the default font
        throughout the component library for its clean, modern appearance. You
        can easily include it in your project using the Google Fonts CDN.
      </p>

      <SyntaxHighlighter
        language="html"
        style={oneDark}
        customStyle={{
          borderRadius: "0.5rem",
          padding: "1rem",
          fontSize: "0.875rem",
        }}
        className="bg-muted"
      >
        {`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">`}
      </SyntaxHighlighter>

      <p className={CommonStyle.docpara}>
        Once included, update your Tailwind config to use Inter as your default
        font:
      </p>

      <SyntaxHighlighter
        language="javascript"
        style={oneDark}
        customStyle={{
          borderRadius: "0.5rem",
          padding: "1rem",
          fontSize: "0.875rem",
        }}
        className="bg-muted"
      >
        {`extend: {
  fontFamily: {
    inter: ["Inter", "sans-serif"],
  },
},`}
      </SyntaxHighlighter>

      <NextPrevNavigation currentPath={"/docs/quick-start"} />
    </div>
  );
};

export default page;

export const metadata = {
  title: "Quick Start | Madhuranjan UI ",
  description:
    "Get started with Madhuranjan UI – a free and modern Tailwind CSS component library. Learn how to install, customize, and use components with ease.",
  keywords: [
    "Tailwind CSS",
    "Component Library",
    "UI Components",
    "Madhuranjan UI",
    "Quick Start",
    "Free Tailwind Components",
    "React Tailwind UI",
    "Tailwind Dark Mode Components",
  ],
  openGraph: {
    title: "Quick Start | Madhuranjan UI",
    description:
      "Start building beautiful websites with Madhuranjan UI – a clean, responsive, and modern Tailwind CSS component library.",
  },
};
