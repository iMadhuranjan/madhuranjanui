"use client";

import ToolSectionHeading from "@/components/ToolHeading";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

/**
 * --------------------------------------------------
 * Configuration & Helpers
 * --------------------------------------------------
 */
const SKELETON_TEXT_WIDTH = {
  minWidth: 30, // If text is very short, at least 30% width
  maxWidth: 90, // If text is very long, never exceed 90% width
};

// Utility: clamp a number between two values.
function clamp(num, min, max) {
  return Math.max(min, Math.min(num, max));
}

/**
 * Calculate a rough shimmer width based on text length.
 */
function getTextWidthPercent(textLength) {
  if (!textLength || textLength < 1) {
    return 30;
  }
  const scaled = 30 + (textLength / 50) * (90 - 30);
  return clamp(
    scaled,
    SKELETON_TEXT_WIDTH.minWidth,
    SKELETON_TEXT_WIDTH.maxWidth
  );
}

/**
 * Merge existing classes with new classes.
 */
function mergeClassNames(originalClasses, ...additional) {
  const orig = originalClasses?.split(/\s+/) ?? [];
  const merged = [...orig, ...additional];
  return [...new Set(merged.filter(Boolean))].join(" ");
}

/**
 * --------------------------------------------------
 * The Main Transform Logic
 * --------------------------------------------------
 */
function parseAndTransformHTML(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  function transformNode(node) {
    // 1) TEXT NODES -> Possibly multi-line shimmer blocks
    if (node.nodeType === Node.TEXT_NODE) {
      const rawText = node.nodeValue;
      if (!rawText || !rawText.trim()) return null;

      const lines = rawText
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);

      const fragment = document.createDocumentFragment();
      lines.forEach((line, idx) => {
        const widthPercent = getTextWidthPercent(line.length);
        const shimmerDiv = document.createElement("div");
        shimmerDiv.className = `h-5 w-[${widthPercent}%] bg-gray-300 dark:bg-gray-700 rounded shimmer mb-1`;
        fragment.appendChild(shimmerDiv);

        if (idx < lines.length - 1) {
          const spacer = document.createElement("div");
          spacer.style.height = "4px";
          fragment.appendChild(spacer);
        }
      });

      return fragment.childNodes.length ? fragment : null;
    }

    // 2) ELEMENT NODES
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName.toLowerCase();
      const originalClass = node.getAttribute("class") || "";

      // A) IMAGES -> convert <img> to a shimmer block
      if (tag === "img") {
        const imgClasses = mergeClassNames(
          originalClass,
          "bg-gray-300",
          "dark:bg-gray-700",
          "shimmer"
        );
        const divPlaceholder = document.createElement("div");
        divPlaceholder.setAttribute("class", imgClasses);

        // If no size classes, default to h-48 w-full
        if (!imgClasses.match(/\bh-\d+\b/)) {
          divPlaceholder.classList.add("h-48");
        }
        if (!imgClasses.match(/\bw-\d+\b/)) {
          divPlaceholder.classList.add("w-full");
        }
        return divPlaceholder;
      }

      // B) SVG -> keep <svg> but add shimmer
      if (tag === "svg") {
        const clone = node.cloneNode(true);
        clone.setAttribute(
          "class",
          mergeClassNames(
            originalClass,
            "shimmer",
            "bg-gray-300",
            "dark:bg-gray-700"
          )
        );
        clone.removeAttribute("fill");
        clone.removeAttribute("stroke");
        clone.removeAttribute("stroke-width");

        Array.from(clone.querySelectorAll("path")).forEach((p) => {
          p.removeAttribute("fill");
          p.removeAttribute("stroke");
        });

        return clone;
      }

      // C) TABLE -> preserve structure, transform children
      if (["table", "thead", "tbody", "tr", "th", "td"].includes(tag)) {
        const clone = node.cloneNode(false);
        clone.setAttribute(
          "class",
          mergeClassNames(originalClass, "skeleton-container")
        );
        node.childNodes.forEach((child) => {
          const transformed = transformNode(child);
          if (transformed) clone.appendChild(transformed);
        });
        return clone;
      }

      // D) SPAN -> single shimmer if only text inside
      if (tag === "span") {
        const textContent = node.textContent.trim();
        const hasNestedElements = Array.from(node.childNodes).some(
          (child) => child.nodeType === Node.ELEMENT_NODE
        );

        if (textContent && !hasNestedElements) {
          const widthPercent = getTextWidthPercent(textContent.length);
          const shimmerSpan = document.createElement("span");
          shimmerSpan.className = `inline-block h-5 w-[${widthPercent}%] bg-gray-300 dark:bg-gray-700 rounded shimmer mb-1`;
          return shimmerSpan;
        }
      }

      // E) Other elements -> keep tag, transform children
      const clone = node.cloneNode(false);
      clone.setAttribute(
        "class",
        mergeClassNames(originalClass, "skeleton-container")
      );
      node.childNodes.forEach((child) => {
        const transformed = transformNode(child);
        if (transformed) clone.appendChild(transformed);
      });
      return clone;
    }

    // 3) COMMENT or OTHER -> skip
    return null;
  }

  const transformedChildren = Array.from(doc.body.childNodes)
    .map(transformNode)
    .filter(Boolean);

  const container = document.createElement("div");
  transformedChildren.forEach((child) => container.appendChild(child));

  return container.innerHTML;
}

/**
 * --------------------------------------------------
 * Page Component
 * --------------------------------------------------
 */
export default function SkeletonToolPage() {
  const [input, setInput] = useState("");
  const [skeleton, setSkeleton] = useState("");
  const [copy, setCopy] = useState("Copy");
  const handleGenerate = () => {
    const transformedHTML = parseAndTransformHTML(input);
    setSkeleton(transformedHTML);
  };

  const handleCopy = () => {
    if (!skeleton) return;
    navigator.clipboard.writeText(skeleton).then(() => {
      setCopy("Copied");

      setTimeout(() => {
        setCopy("Copy");
      }, 1000);
    });
  };

  return (
    <div className="p-2 max-w-7xl m-auto">
      <ToolSectionHeading
        heading={"Tailwind Skeleton Generator Online "}
        description={
          "Accelerate your development process with our Tailwind Skeleton Generator. Instantly transform any HTML component into polished skeleton screens for a seamless loading experience. Whether you're a designer or developer, this tool helps you create consistent, responsive placeholders using Tailwind CSS saving time and enhancing user satisfaction "
        }
      />
      {/* Global shimmer animation styles */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .shimmer {
          position: relative;
          overflow: hidden;
        }
        .shimmer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shimmer 1.4s ease-in-out infinite;
        }
      `}</style>

      {/* Two-column layout for input (left) and generated code (right) */}
      <div className="grid md:grid-cols-2 gap-3">
        {/* Left column: Code input */}
        <div className="border border-gray-700 rounded p-4 shadow-xl bg-gray-100 dark:bg-gray-900 flex flex-col h-[70vh] overflow-auto">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold mb-2">Paste Your Html Code Below</h2>
            {/* Generate button at the top */}
            <div className="flex justify-center mb-6">
              <button
                onClick={handleGenerate}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition"
              >
                Generate
              </button>
            </div>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your code here"
            className="flex-1 border border-gray-600 rounded p-2 focus:outline-none text-sm font-mono placeholder-gray-400 "
          />
        </div>

        {/* Right column: Generated skeleton code */}
        <div className="border border-gray-700 rounded p-4 bg-gray-100 dark:bg-gray-900 flex flex-col h-[70vh] shadow-xl">
          {/* Heading + Copy button */}
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold">Result</h2>
            <button
              onClick={handleCopy}
              disabled={!skeleton}
              className="text-sm border border-gray-600 px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded dark:hover:bg-gray-600 disabled:opacity-50"
            >
              {copy}
            </button>
          </div>

          {/* If no skeleton yet, show placeholder. Otherwise, show code. */}
          {!skeleton ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="mx-auto mb-2 w-10 h-10 opacity-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <p className="mb-1">Your skeleton will appear here</p>
              <p className="text-sm text-gray-500">
                Get started by converting your component!
              </p>
            </div>
          ) : (
            <div className="overflow-auto h-full">
              <SyntaxHighlighter
                language="html"
                style={oneDark}
                className="h-[59vh]"
              >
                {skeleton}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </div>

      {/* Preview below both columns */}
      <div className="mt-6 border border-gray-700 rounded p-4">
        <h2 className="font-semibold mb-2">Preview</h2>
        {!skeleton ? (
          <p className="text-gray-400">Nothing to preview yet.</p>
        ) : (
          <div
            className="bg-white dark:bg-gray-800 p-4 rounded"
            dangerouslySetInnerHTML={{ __html: skeleton }}
          />
        )}
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 py-8">
        {/* Left Content: Heading, description, and how-to-use instructions */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">
            About our Tailwind Skeleton Generator
          </h2>
          <p className="mb-4">
            Our Tailwind Skeleton Generator is a powerful online tool designed
            to help developers and designers create seamless loading states for
            their websites or applications. By quickly transforming your
            existing HTML components into clean, minimal skeleton screens, you
            can enhance user experience and reduce bounce rates during
            data-fetching or content-loading phases.
          </p>

          <h3 className="text-xl font-semibold mb-2">How to Use This Tool</h3>
          <ol className="list-decimal list-inside mb-4 space-y-2">
            <li>
              Paste your HTML code into the provided input area on the left
              side.
            </li>
            <li>
              Click the <strong>Generate</strong> button to instantly convert
              your code into a Tailwind-based skeleton screen.
            </li>
            <li>
              Preview the generated skeleton on the right side and click
              <strong> Copy</strong> to copy the code.
            </li>
            <li>
              Integrate the skeleton into your project for a smooth,
              user-friendly loading experience.
            </li>
          </ol>

          <p className="mb-4">
            Note: Span Tag Elements Shimmer Effect or Skeletong are now working.
            I am working on this to Fix that :)
          </p>
        </div>

        {/* Right Image: Replace src with your own image URL */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/Image/TailwindSkeletonGenerator.png"
            alt="Tailwind Skeleton Generator Preview"
            className="rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
}
