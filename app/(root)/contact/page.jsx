import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-2 md:px-6 pt-9 pb-3 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-violet-600 dark:text-blue-400">
        Contact Us
      </h1>

      <p className="text-lg mb-6">
        Have questions, suggestions, or feedback? I’d love to hear from you!
        Whether it’s a feature request, a business inquiry, or just a friendly
        hello feel free to reach out.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Why Contact Me?</h2>
      <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
        <li>💡 Suggestions & Feature Requests</li>
        <li>🔧 Reporting Issues or Bugs</li>
        <li>📩 Business & Collaboration Inquiries</li>
        <li>📢 General Feedback & Improvements</li>
        <li>👋 Just to Say Hello!</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Email</h2>
      <p className="text-lg mb-6">
        The best way to reach me is via email. Drop a message, and I’ll get back
        to you as soon as possible.
      </p>
      <p className="text-xl font-semibold text-violet-600 dark:text-blue-400 mb-10">
        📧{" "}
        <a href="mailto:HeyMadhuranjan@gmail.com" className="">
          HeyMadhuranjan@gmail.com
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">
        Connect on Social Media
      </h2>
      <p className="text-lg mb-6">
        You can also reach out to me via social media platforms. (Coming soon:
        GitHub, Twitter, LinkedIn)
      </p>

      <p className="mt-12 text-gray-600 dark:text-gray-400 text-base">
        Thank you for using{" "}
        <span className="font-semibold text-violet-600 dark:text-blue-400">
          Madhuranjan UI
        </span>
        ! Your feedback and support help me improve and build even better tools.
        🚀
      </p>

      <hr className="my-10 border-gray-300 dark:border-gray-700" />
    </div>
  );
};

export default ContactPage;

export const metadata = {
  title: "Contact - Madhuranjan UI",
  description:
    "Have feedback, questions, or collaboration ideas? Contact Madhuranjan Kushwaha directly via email. Reach out and help shape the future of Madhuranjan UI.",
  keywords: [
    "Contact Madhuranjan",
    "Madhuranjan UI support",
    "TailwindCSS UI contact",
    "Madhuranjan email",
    "UI components help",
  ],
};
