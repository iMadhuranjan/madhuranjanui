import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4">About us</h1>
      <p className="mb-4 text-lg">
        Welcome to{" "}
        <strong>
          <Link href="/" className="text-violet-600 dark:text-blue-400">
            Madhuranjan UI
          </Link>
        </strong>
        , a free and developer-friendly TailwindCSS component library crafted
        with care to help you build modern websites faster. With over{" "}
        <strong>300+ UI components</strong> and dozens of high-quality premium
        blocks, all available for free, this platform is designed to empower
        developers of all skill levels.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
      <p className="mb-4 text-lg">
        Madhuranjan UI exists to make frontend development easier, faster, and
        more accessible. By offering clean, copy-paste-ready components that
        just work, we hope to save developers valuable time and help bring ideas
        to life effortlessly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">What We Offer</h2>
      <ul className="list-disc pl-6 mb-4 text-lg">
        <li>300+ customizable TailwindCSS components, constantly growing.</li>
        <li>Premium page blocks for free – no signup, no paywall.</li>
        <li>Responsive design with built-in light & dark theme support.</li>
        <li>Copy-paste simplicity for rapid development.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Meet the Creator</h2>
      <p className="mb-4 text-lg">
        I'm{" "}
        <strong className="text-violet-600 dark:text-blue-400">
          Madhuranjan Kushwaha
        </strong>
        , a solo full-stack developer  who just loves building websites. I enjoy creating tools that help
        people. This library was built out of my personal need for easy-to-use,
        beautiful components and now it's here to help others too.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Why Madhuranjan UI?</h2>
      <p className="mb-4 text-lg">
        Whether you’re a beginner, solo dev, or an experienced builder,
        Madhuranjan UI gives you clean and tested TailwindCSS components without
        the complexity. No setup needed just copy and go. And yes, even the
        premium blocks will stay free, forever.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Contribute or Connect
      </h2>
      <p className="mb-4 text-lg">
        Got feedback or ideas?{" "}
        <Link href="/contact" className="text-violet-600 dark:text-blue-400">
          Reach out
        </Link>{" "}
         I’m always looking to improve the library and add more useful blocks
        for everyone.
      </p>
    </div>
  );
};

export default page;

export const metadata = {
  title: "About Us - Madhuranjan UI",
  description:
    "Learn about Madhuranjan UI, a free TailwindCSS component and block library with 300+ components and premium blocks created by Madhuranjan Kushwaha.",
  keywords: [
    "About Madhuranjan UI",
    "Free TailwindCSS Components",
    "Tailwind UI library",
    "Frontend UI blocks",
    "Madhuranjan Kushwaha",
    "Tailwind free components",
  ],
};
