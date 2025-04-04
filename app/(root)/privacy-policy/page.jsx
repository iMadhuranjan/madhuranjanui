import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4 text-lg">
        At{" "}
        <strong>
          <Link href="/" className="text-violet-600 dark:text-blue-400">
            Madhuranjan UI
          </Link>
        </strong>
        , your privacy and trust matter deeply. This website is designed to
        offer UI components and resources without compromising your personal
        data or tracking your behavior unnecessarily.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Minimal Data Collection
      </h2>
      <p className="mb-4 text-lg">
        Madhuranjan UI does not ask for or collect any personal information from
        you — such as names, emails, or account data — unless you voluntarily
        contact me through the{" "}
        <Link href="/contact" className="text-violet-600 dark:text-blue-400">
          contact form
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Analytics & Monetization
      </h2>
      <p className="mb-4 text-lg">
        This website may use services like <strong>Google Analytics</strong> and{" "}
        <strong>Google AdSense</strong> to better understand how users interact
        with the site and to support its continued development through ad
        monetization.
      </p>
      <p className="mb-4 text-lg">
        These services may use cookies or similar technologies to collect
        anonymous, non-personal usage data (like page views, bounce rate, and
        browser type). No personally identifiable information is stored or
        accessed by me.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Cookies</h2>
      <p className="mb-4 text-lg">
        Google AdSense and Analytics may set cookies in your browser to
        personalize ads or generate usage statistics. You can manage your cookie
        preferences or opt out of personalized ads through your browser settings
        or directly via Google's ad settings.
      </p>

  

    

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
      <p className="mb-4 text-lg">
        If you have any questions or concerns about your privacy while using
        Madhuranjan UI, feel free to{" "}
        <Link href="/contact" className="text-violet-600 dark:text-blue-400">
          reach out
        </Link>
        . I'm here to listen and improve wherever possible.
      </p>
    </div>
  );
};

export default PrivacyPolicy;

export const metadata = {
  title: "Privacy Policy - Madhuranjan UI",
  description:
    "Read how Madhuranjan UI respects your privacy while using Google Analytics and AdSense for site improvement and monetization. No personal data is collected or stored.",
  keywords: [
    "Privacy Policy",
    "Madhuranjan UI",
    "Google Analytics",
    "AdSense usage",
    "No personal data",
    "TailwindCSS components",
  ],
};
