'use client'
import React, { useState } from 'react';

export function CircleColorPicker() {
  const [color, setColor] = useState('#3b82f6');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleHexInputChange = (event) => {
    const input = event.target.value;
    // Optionally, you could validate the hex code here.
    setColor(input);
  };

  const presetColors = [
    '#ef4444',
    '#f97316',
    '#facc15',
    '#22c55e',
    '#3b82f6',
    '#6366f1',
    '#a855f7',
  ];

  const recentColors = [
    '#8b5cf6',
    '#60a5fa',
    '#34d399',
    '#fb7185',
    '#fbbf24',
    '#9ca3af',
  ];

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-5 m-4 border border-gray-200/70 bg-gradient-to-br from-white/90 to-gray-50 p-6 shadow-xl shadow-violet-100/50 backdrop-blur-sm dark:border-blue-900/50 dark:from-blue-950/90 dark:to-blue-900 dark:shadow-blue-950/50">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-violet-500 dark:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
          Color Picker
        </label>
        <span className="rounded-full bg-violet-100/70 px-2 py-1 text-xs font-medium text-violet-700 dark:bg-blue-900/50 dark:text-blue-300">
          PRO
        </span>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="group relative">
          <input
            type="color"
            id="colorPicker"
            value={color}
            className="h-14 w-14 cursor-pointer rounded-xl border-2 border-gray-300/70 bg-transparent p-1 transition-all duration-300 hover:scale-105 hover:border-violet-400 hover:shadow-md hover:ring-4 hover:ring-violet-100/50 dark:border-blue-800/50 dark:hover:border-blue-400 dark:hover:ring-blue-900/50"
            onChange={handleColorChange}
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl border border-white/50 group-hover:border-white/80 dark:border-blue-950/30"></div>
        </div>

        <div className="relative flex-1">
          <input
            type="text"
            id="hexInput"
            value={color}
            placeholder="#RRGGBB"
            className="w-full rounded-xl border border-gray-300/70 bg-white/80 px-4 py-3 text-gray-800 placeholder-gray-400/70 shadow-sm transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-violet-500/50 focus:outline-none dark:border-blue-800/50 dark:bg-blue-900/50 dark:text-white dark:placeholder-blue-400/50 dark:focus:ring-blue-400/50"
            pattern="^#[0-9A-Fa-f]{6}$"
            title="Enter a valid hex color code (e.g. #RRGGBB)"
            onChange={handleHexInputChange}
          />
          <div className="absolute top-1/2 right-3 -translate-y-1/2 font-mono text-xs font-medium text-gray-400/80 dark:text-blue-400/60">
            HEX
          </div>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-7 gap-2">
        {presetColors.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => setColor(preset)}
            className="aspect-square cursor-pointer rounded-lg border-2 border-white/50 transition-transform duration-200 hover:scale-110 dark:border-blue-950/30"
            style={{ backgroundColor: preset }}
          />
        ))}
      </div>

      <div className="mt-2">
        <p className="mb-2 text-xs font-medium text-gray-500/80 dark:text-blue-400/60">
          RECENT COLORS
        </p>
        <div className="flex gap-2">
          {recentColors.map((recent) => (
            <button
              key={recent}
              type="button"
              onClick={() => setColor(recent)}
              className="h-6 w-6 rounded-full border-2 border-white/80 dark:border-blue-950/30"
              style={{ backgroundColor: recent }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CircleColorPicker;
