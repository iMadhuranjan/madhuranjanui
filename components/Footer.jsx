import Link from "next/link";
import React from "react";

const bottomLinks = [
  { label: "About Us", href: "/about" },
  { label: "Donate", href: "https://buymeacoffee.com/imadhuranjan" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/disclaimer" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {bottomLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-px bg-violet-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Madhuranjan
              <span className="text-violet-600 dark:text-blue-400">UI</span>
            </span>{" "}
            • All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
