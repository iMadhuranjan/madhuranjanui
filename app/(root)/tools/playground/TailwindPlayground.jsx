'use client'

import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

const DEFAULT_HTML = `<div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
  <h1 class="text-4xl font-bold text-gray-800 dark:text-white">Hello Tailwind!</h1>
</div>`;

const TailwindPlayground = () => {
  const [code, setCode] = useState(DEFAULT_HTML);
  const [darkMode, setDarkMode] = useState(false);
  // Remove the TypeScript type annotation here
  const iframeRef = useRef(null);

  useEffect(() => {
    updateIframe();
  }, [code, darkMode]);

  const updateIframe = () => {
    const doc = iframeRef.current?.contentDocument;
    if (doc) {
      const fullHtml = `
<!DOCTYPE html>
<html class="${darkMode ? "dark" : ""}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="m-0 p-0">
  ${code}
</body>
</html>`;
      doc.open();
      doc.write(fullHtml);
      doc.close();
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="w-full min-h-screen px-4 py-6 md:py-8 bg-white dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor Section */}
        <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
          <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Tailwind Code Editor
            </span>
            <div className="flex gap-2">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
              <button 
                onClick={copyCode}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded"
              >
                Copy Code
              </button>
            </div>
          </div>
          <Editor
            height="400px"
            language="html"
            theme={darkMode ? "vs-dark" : "light"}
            value={code}
            onChange={(value) => setCode(value || "")}
            className="text-sm"
          />
        </div>

        {/* Live Preview Section */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
          <div className="p-3 bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200">
            Live Preview
          </div>
          <iframe
            title="Live Preview"
            ref={iframeRef}
            className="w-full h-[400px] bg-white dark:bg-gray-900"
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
};

export default TailwindPlayground;
