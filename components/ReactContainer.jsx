"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  FaDesktop,
  FaTabletAlt,
  FaMobileAlt,
  FaMoon,
  FaSun,
  FaCopy,
} from "react-icons/fa";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism as lightTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { okaidia as darkTheme } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ReactContainer({
  htmlCode = "",
  reactCode = "",
  children,
}) {
  // Device and Theme Logic
  const { theme, setTheme } = useTheme();
  const [device, setDevice] = useState("desktop");

  // Copy State
  const [copied, setCopied] = useState(false);

  // Tab State: "html" or "react"
  const [activeTab, setActiveTab] = useState("html");

  // Expand/Truncate Code State for each snippet
  const [expandedHtml, setExpandedHtml] = useState(false);
  const [expandedReact, setExpandedReact] = useState(false);

  // On mount, decide the device size & handle resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDevice("mobile");
      } else if (width < 1024) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Decide container width by device
  const deviceWidthClass = {
    desktop: "w-[1000px]",
    tablet: "w-[768px]",
    mobile: "w-[375px]",
  };

  // Splitting the code for line truncation
  const linesHtml = htmlCode.split("\n");
  const linesReact = reactCode.split("\n");

  const shouldTruncateHtml = linesHtml.length > 10;
  const shouldTruncateReact = linesReact.length > 10;

  // Generate displayed code for HTML
  let displayedHtmlCode = htmlCode;
  if (!expandedHtml && shouldTruncateHtml) {
    displayedHtmlCode = linesHtml.slice(0, 10).join("\n");
  }

  // Generate displayed code for React
  let displayedReactCode = reactCode;
  if (!expandedReact && shouldTruncateReact) {
    displayedReactCode = linesReact.slice(0, 10).join("\n");
  }

  // Copy logic for active tab
  const handleCopy = () => {
    const codeToCopy = activeTab === "html" ? htmlCode : reactCode;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(codeToCopy).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = codeToCopy;
      textArea.style.position = "absolute";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  // Toggle expand for active tab
  const handleExpand = () => {
    if (activeTab === "html") {
      setExpandedHtml(!expandedHtml);
    } else {
      setExpandedReact(!expandedReact);
    }
  };

  // Used in UI to show code & expand button
  const currentShouldTruncate =
    activeTab === "html" ? shouldTruncateHtml : shouldTruncateReact;
  const currentIsExpanded = activeTab === "html" ? expandedHtml : expandedReact;

  // Decide which snippet to display
  const snippetToDisplay =
    activeTab === "html" ? displayedHtmlCode : displayedReactCode;

  // Buttons logic for device & theme toggles
  const deviceBtnClass = (target) =>
    `p-2 rounded border text-sm ${
      device === target
        ? "bg-blue-500 text-white border-blue-500"
        : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    }`;

  const darkToggleClass = `p-2 rounded border text-sm ${
    theme === "dark"
      ? "bg-gray-900 text-white border-gray-700 hover:bg-gray-800"
      : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
  }`;

  // Button classes for tab toggles
  const tabBtnClass = (tab) =>
    `px-3 py-1 text-sm font-semibold border-b-2 transition-colors ${
      activeTab === tab
        ? "border-blue-500 text-blue-500 dark:text-blue-400"
        : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    }`;

  return (
    <div className="flex flex-col md:my-5 border border-gray-200 dark:border-gray-700 rounded shadow overflow-hidden mx-auto w-full flex-1 transition-colors duration-300 my-5">
      {/* Top Bar: Device toggles & Global dark/light toggle */}
      <div className="flex items-center justify-end px-4 gap-2 py-2 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black w-full">
        <button
          onClick={() => setDevice("desktop")}
          className={deviceBtnClass("desktop")}
        >
          <FaDesktop />
        </button>
        <button
          onClick={() => setDevice("tablet")}
          className={deviceBtnClass("tablet")}
        >
          <FaTabletAlt />
        </button>
        <button
          onClick={() => setDevice("mobile")}
          className={deviceBtnClass("mobile")}
        >
          <FaMobileAlt />
        </button>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={darkToggleClass}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Preview Area */}
      <div className="w-full flex justify-center bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="overflow-x-auto w-full">
          <div
            className={`${deviceWidthClass[device]} h-fit mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow`}
          >
            {children}
          </div>
        </div>
      </div>

      {/* Code Area with Tabs */}
      <div className="relative w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
        {/* Tab Buttons */}
        <div className="flex items-center space-x-4 px-4 pt-4">
          <button
            onClick={() => setActiveTab("html")}
            className={tabBtnClass("html")}
          >
            HTML
          </button>
          <button
            onClick={() => setActiveTab("react")}
            className={tabBtnClass("react")}
          >
            React
          </button>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="absolute right-4 top-4 flex items-center space-x-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {copied ? "Copied!" : <FaCopy />}
        </button>

        {/* Code Snippet */}
        <div className="overflow-x-auto pt-8">
          <SyntaxHighlighter
            language={activeTab === "html" ? "html" : "jsx"}
            className="custom-scrollbar no-copy-line-numbers"
            style={theme === "dark" ? darkTheme : lightTheme}
            customStyle={{
              margin: 0,
              padding: "1rem",
              background: "transparent",
              fontSize: "14px",
              lineHeight: "1.5",
              overflowX: "auto",
              maxWidth: "100%",
              display: "block",
            }}
            showLineNumbers
          >
            {snippetToDisplay}
          </SyntaxHighlighter>
        </div>

        {/* Expand/Collapse Button */}
        {currentShouldTruncate && (
          <div className="px-4 py-2">
            <button
              onClick={handleExpand}
              className="text-blue-500 font-semibold hover:underline text-base dark:text-violet-100"
            >
              {currentIsExpanded ? "Show less" : "Expand code"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
