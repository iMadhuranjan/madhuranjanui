"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu as MenuIcon,
  X,
  ChevronDown,
  Moon,
  Sun,
  Image,
} from "lucide-react";
import { FiMenu, FiX, FiChevronDown, FiSun, FiMoon } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) icon
export const menuSections = [
  {
    title: "Basic Components",
    items: [
      { name: "Accordion", href: "/docs/accordion" },
      { name: "Avatar", href: "/docs/avatar" },
      { name: "Alerts", href: "/docs/alerts" },
      { name: "Badge", href: "/docs/badge" },
      { name: "Button", href: "/docs/button" },
      { name: "Card", href: "/docs/card" },
      { name: "Divider", href: "/docs/divider" },
      { name: "KBD (Keyboard Shortcut)", href: "/docs/kbd" },
      { name: "List Group", href: "/docs/list-group" },
      { name: "Popover", href: "/docs/popover" },
      { name: "Progress Bar", href: "/docs/progress-bar" },
      { name: "Spinner", href: "/docs/spinner" },
      { name: "Skeleton Loader", href: "/docs/skeleton-loader" },
      { name: "Table", href: "/docs/table" },
      { name: "Toast", href: "/docs/toast" },
      { name: "Tooltip", href: "/docs/tooltip" },
    ],
  },
  {
    title: "Form Elements",
    items: [
      { name: "Input Field", href: "/docs/input-field" },
      { name: "File Input", href: "/docs/file-input" },
      { name: "Textarea", href: "/docs/textarea" },
      { name: "Select Dropdown", href: "/docs/select" },
      { name: "Checkbox", href: "/docs/checkbox" },
      { name: "Radio", href: "/docs/radio" },
      { name: "Range Slider", href: "/docs/slider" },
      { name: "Toggle Switch", href: "/docs/toggle-switch" },
      { name: "Color Picker", href: "/docs/color-picker" },
      { name: "Stepper", href: "/docs/stepper" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { name: "Breadcrumbs", href: "/docs/breadcrumbs" },
      { name: "Pagination", href: "/docs/pagination" },
    ],
  },
  {
    title: "Data Display",
    items: [
      { name: "Stats Card", href: "/docs/stats-card" },
      { name: "Rating", href: "/docs/rating" },
      { name: "Gallery", href: "/docs/gallery " },
    ],
  },
  {
    title: "Templates",
    items: [
      { name: "About Page", href: "/docs/about-page" },
      { name: "Coming Soon Page", href: "/docs/coming-soon" },
      { name: "Contact Form", href: "/docs/contact-form" },
      { name: "CTA Section", href: "/docs/cta-section" },
      { name: "FAQ Section", href: "/docs/faq-section" },
      { name: "Footer", href: "/docs/footer" },
      { name: "Hero Section", href: "/docs/hero-section" },
      { name: "Landing Page", href: "/docs/landing-page" },
      { name: "Login Page", href: "/docs/login" },
      { name: "Maintenance Page", href: "/docs/maintenance" },
      { name: "Newsletter Signup", href: "/docs/newsletter-signup" },
      { name: "Pricing Page", href: "/docs/pricing" },
      { name: "Register Page", href: "/docs/register" },
      { name: "Team Section", href: "/docs/team-section" },
      { name: "Testimonial Section", href: "/docs/testimonials" },
      { name: "404 Page", href: "/docs/404-page" },
    ],
  },
];

/** Utility hook for outside click detection */
const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, handler]);
};

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const pagesDropdown = [
    { name: "About us", href: "/about" },
    { name: "Contact us", href: "/contact" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];
  const [openPage, setOpenPage] = useState(false);
  const pageRef = useRef(null);
  useOutsideClick(pageRef, () => setOpenPage(false));
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Open all sections by default in mobile sidebar if desired
    setOpenSections({
      "Basic Components": true,
      "Form Elements": true,
      Templates: true,
      Feedback: true,
      "Data Display": true,
      Navigation: true,
    });
  }, []);

  function toggleSection(title) {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  }

  if (!mounted) return null;

  return (
    <header
      className="
        fixed w-full z-50 top-0 left-0
        border-b bg-gray-50 dark:bg-gray-900
        transition-colors duration-100
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}

        <Link href="/" className="flex items-center space-x-2">
          <img src="/madhuranjanLogo.gif" className="h-7 w-7" />
          <span className="text-2xl font-bold">
            Madhuranjan{" "}
            <span className="text-violet-700 font-extrabold dark:text-blue-600">
              UI
            </span>
          </span>
        </Link>

        {/* Desktop Nav (hidden on mobile) */}
        <nav className="hidden lg:flex items-center space-x-4">
          <Link
            href="/docs/quick-start"
            className="text-xl font-semibold px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/docs/accordion"
            className="text-xl font-semibold px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
          >
            Components
          </Link>
          <Link
            href="/docs/about-page"
            className="text-xl font-semibold px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
          >
            Sections
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>

          {/* Twitter/X Link */}
          <a
            href="https://x.com/madhuranjanui"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-xl text-gray-700 dark:text-gray-200"
            aria-label="Madhuranjan UI on Twitter"
          >
            <FaXTwitter className="h-5 w-5" />
          </a>
        </nav>

        {/* Mobile Right-Side Icons */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Theme Toggle (mobile) */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="h-6 w-6" />
            ) : (
              <Sun className="h-7 w-7" />
            )}
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Open Menu"
          >
            <MenuIcon className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Dark overlay behind sidebar */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-black bg-opacity-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sliding Sidebar */}
            <motion.aside
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="
                fixed top-0 left-0 bottom-0 z-50
                w-64 sm:w-80
                bg-white dark:bg-gray-900
                text-gray-800 dark:text-gray-100
                shadow-lg
                flex flex-col
              "
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200 dark:border-gray-700">
                <span className="font-semibold text-lg">Menu</span>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="h-5 w-5 font-bold" />
                </button>
              </div>

              {/* Collapsible Sections */}
              <div className="flex-1 overflow-y-auto">
                {/* Non-collapsible Documentation Section */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-lg">Documentation</h3>
                  <Link
                    href="/docs/quick-start"
                    onClick={() => setSidebarOpen(false)}
                    className={`block mt-2 text-base ${
                      pathname === "/docs/quick-start"
                        ? "bg-blue-100 dark:bg-blue-900 rounded px-2 py-1 font-semibold text-violet-600 dark:text-violet-100"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    Quick Start
                  </Link>
                </div>

                {menuSections.map((section) => {
                  const isOpen = openSections[section.title];
                  return (
                    <div key={section.title} className="my-3">
                      {/* Section Header */}
                      <button
                        onClick={() => toggleSection(section.title)}
                        className="
                          flex items-center justify-between w-full
                          px-4 py-1
                          hover:bg-gray-100 dark:hover:bg-gray-800
                          transition-colors mb-2
                        "
                      >
                        <span className="font-semibold text-xl my3">
                          {section.title}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            {section.items.map((item) => {
                              const isActive = pathname === item.href;
                              return (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setSidebarOpen(false)}
                                  className={`block pl-8 pr-4 py-1 text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hover:text-[1.1rem] ${
                                    isActive
                                      ? "bg-blue-100 dark:bg-blue-900 rounded px-2 py-1 font-semibold text-violet-600 dark:text-violet-100"
                                      : ""
                                  }`}
                                >
                                  {item.name}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
