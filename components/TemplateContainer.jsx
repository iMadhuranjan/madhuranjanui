"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun, FaCopy, FaExpand } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism as lightTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { okaidia as darkTheme } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function TemplateContainer({ code, children }) {
  const { theme, setTheme } = useTheme();
  const device = "full";
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const deviceWidths = {
    full: "100%",
    desktop: "1000px",
    tablet: "768px",
    mobile: "375px",
  };

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    } else {
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
    `p-2 rounded border text-sm transition-all duration-200 ${
      device === target
        ? "bg-blue-500 text-white border-blue-500"
        : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    }`;

  const darkToggleClass = `p-2 rounded border text-sm transition-colors duration-200 ${
    theme === "dark"
      ? "bg-gray-900 text-white border-gray-700 hover:bg-gray-800"
      : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
  }`;

  return (
    <div className="flex justify-center items-center flex-col border border-gray-200 dark:border-gray-700 rounded shadow overflow-hidden mx-auto w-full flex-1 transition-colors duration-300 my-5">
      <div className="flex items-center justify-end px-4 gap-2 py-2 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black w-full">
        <button
          onClick={() => {}}
          className={deviceBtnClass("full")}
          aria-label="Full width view"
        >
          <FaExpand />
        </button>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={darkToggleClass}
          aria-label={`Toggle ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <div className="w-full flex justify-center bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="overflow-x-auto w-full">
          <div
            className="mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{
              width: deviceWidths[device],
              height: "fit-content",
              willChange: "width",
            }}
          >
            {children}
          </div>
        </div>
      </div>

      <div className="relative w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <button
          onClick={handleCopy}
          className="absolute right-4 top-4 flex items-center space-x-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          aria-label="Copy code"
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
              overflowX: "auto",
              maxWidth: "100%",
              display: "block",
            }}
            showLineNumbers
          >
            {displayedCode}
          </SyntaxHighlighter>
        </div>
        {shouldTruncate && (
          <div className="px-4 py-2">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-500 font-semibold hover:underline text-base dark:text-violet-100 transition-colors duration-200"
            >
              {expanded ? "Show less" : "Expand code"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
