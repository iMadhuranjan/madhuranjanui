import Link from "next/link";
import React from "react";

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>

      <p className="mb-4 text-lg">
        Welcome to{" "}
        <strong>
          <Link href="/" className="text-violet-600 dark:text-blue-400">
            Madhuranjan UI
          </Link>
        </strong>{" "}
        a platform offering free, easy-to-use, and responsive TailwindCSS UI
        components and blocks. Please read the following disclaimers carefully
        before using any part of this website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Pure TailwindCSS Only
      </h2>
      <p className="mb-4 text-lg">
        All components and UI blocks available on this site are built using only{" "}
        <strong>pure TailwindCSS</strong>. No third-party libraries, frameworks,
        or UI kits are used  ensuring complete flexibility, full control, and
        zero dependency bloat. You can copy-paste them into any Tailwind project
        with full confidence.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Use at Your Own Risk</h2>
      <p className="mb-4 text-lg">
        While I put great effort into testing and polishing each component, all
        content provided here is for informational and educational purposes
        only. Please test all code in your environment before using it in
        production. I am not responsible for any issues caused by using this
        code directly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        AI-Assisted, Human-Refined
      </h2>
      <p className="mb-4 text-lg">
        Some parts of the component structure or content may have been initially
        generated using AI tools, but I want to be completely honest:{" "}
        <strong>
          every single component is personally reviewed, rewritten, cleaned, and
          optimized by me
        </strong>{" "}
          to ensure it’s accurate, efficient, and best
        for real-world use.
      </p>
      <p className="mb-4 text-lg">
        I don’t blindly copy AI output. Instead, I use it to speed up ideas, and
        then shape the result by hand for quality and reliability. This is my
        promise to you: <strong>real work, honest results.</strong>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Ongoing Improvement</h2>
      <p className="mb-4 text-lg">
        This project is a work in progress. I will continue to improve
        components, fix bugs, and add more blocks as often as possible. Your
        feedback is always welcome, and I am committed to making this site
        better every day.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
      <p className="mb-4 text-lg">
        If you have any questions, suggestions, or concerns about the content of
        this site, please reach out via the{" "}
        <Link href="/contact" className="text-violet-600 dark:text-blue-400">
          contact page
        </Link>
        . I'm open to collaboration, feedback, and ideas to make this platform
        more useful to everyone.
      </p>
    </div>
  );
};

export default Disclaimer;

export const metadata = {
  title: "Disclaimer - Madhuranjan UI",
  description:
    "Read the official disclaimer of Madhuranjan UI. All components are hand-built using pure TailwindCSS with no third-party libraries. Learn about our honest AI usage and commitment to quality.",
  keywords: [
    "Madhuranjan UI disclaimer",
    "TailwindCSS only components",
    "No third-party libraries",
    "AI-generated and refined code",
    "Pure Tailwind UI",
    "Madhuranjan Kushwaha",
  ],
};
