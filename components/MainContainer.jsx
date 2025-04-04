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

export default function MainContainer({ code, children }) {
  const { theme, setTheme } = useTheme();

  const [device, setDevice] = useState("desktop");
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // 1) Add a mounted state to avoid theme flicker on initial load
  const [mounted, setMounted] = useState(true);

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

  const deviceWidthClass = {
    desktop: "w-[1000px]",
    tablet: "w-[768px]",
    mobile: "w-[375px]",
  };

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      // ✅ Modern method
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    } else {
      // ⚠️ Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = code;
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

  const lines = code.split("\n");
  const shouldTruncate = lines.length > 10;
  let displayedCode = code;
  if (!expanded && shouldTruncate) {
    displayedCode = lines.slice(0, 10).join("\n");
  }

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

  return (
    // 2) Add transition-colors & duration-300 to smooth out theme changes
    <div className="flex justify-center items-center flex-col md:my-5 border border-gray-200 dark:border-gray-700 rounded shadow overflow-hidden mx-auto w-full flex-1 transition-colors duration-300  my-5">
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

      {/* Preview Area: "Web form" container */}
      <div className="w-full flex justify-center bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="overflow-x-auto w-full">
          <div
            className={`${deviceWidthClass[device]} h-fit  mx-auto 
                        bg-white dark:bg-gray-900 
                        border border-gray-200 dark:border-gray-700 
                        rounded shadow`}
          >
            {children}
          </div>
        </div>
      </div>

      {/* Code Area */}
      <div className="relative w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300 ">
        <button
          onClick={handleCopy}
          className="absolute right-4 top-4 flex items-center space-x-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {copied ? "Copied!" : <FaCopy />}
        </button>
        <div className="overflow-x-auto pt-8">
          <SyntaxHighlighter
            language="html"
            className="custom-scrollbar no-copy-line-numbers"
            style={theme === "dark" ? darkTheme : lightTheme}
            customStyle={{
              margin: 0,
              padding: "1rem",
              background: "transparent",
              fontSize: "14px",
              lineHeight: "1.5",
              overflowX: "auto", // Ensures scrolling works
              maxWidth: "100%", // Prevents overflow issues
              display: "block", // Forces proper block rendering
            }}
            showLineNumbers
          >
            {displayedCode}
          </SyntaxHighlighter>
        </div>
        {shouldTruncate && (
          <div className="px-4 py-2 ">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-500  font-semibold hover:underline text-base dark:text-violet-100"
            >
              {expanded ? "Show less" : "Expand code"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
