"use client";

import { useState } from "react";

export function SimpleSlider() {
  return (
    <div className="w-full bg-white p-6 shadow-sm dark:bg-gray-900">
      <label
        htmlFor="colorSlider"
        className="mb-3 block text-sm font-medium text-violet-700 dark:text-blue-300"
      >
        Simple Range Slider
      </label>
      <div className="relative">
        <input
          type="range"
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-gray-700 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-violet-600 [&::-moz-range-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:dark:bg-blue-500"
        />
      </div>
    </div>
  );
}
export function StepRangeSlider() {
  const [value, setValue] = useState(50);

  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md dark:bg-gray-800/80">
      <label
        htmlFor="stepRange"
        className="mb-4 block text-sm font-medium text-violet-700 dark:text-blue-300"
      >
        Select Value: <span className="font-bold">{value}</span>
      </label>

      <input
        id="stepRange"
        type="range"
        min="0"
        max="100"
        step="10"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="
          h-3 w-full cursor-pointer appearance-none rounded-full
          bg-gray-200 dark:bg-gray-700
          [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:shadow-lg
          [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200
          [&::-webkit-slider-thumb]:dark:bg-blue-500
          [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:hover:shadow-violet-300/50
          [&::-webkit-slider-thumb]:dark:hover:shadow-blue-300/50
          [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5
          [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-violet-600 [&::-moz-range-thumb]:shadow-lg
          [&::-moz-range-thumb]:dark:bg-blue-500
        "
      />

      <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
    </div>
  );
}
export function BasicRangeSlider() {
  const [value, setValue] = useState(50);

  return (
    <div className="w-full bg-white p-3 shadow-md dark:bg-gray-800">
      <label
        htmlFor="range"
        className="mb-4 block text-sm font-medium text-violet-700 dark:text-blue-300"
      >
        Select Value:{" "}
        <span id="rangeValue" className="font-bold">
          {value}
        </span>
      </label>
      <input
        id="range"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="h-3 w-full cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-gray-700 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-violet-600 [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:hover:shadow-violet-300/50 [&::-webkit-slider-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:dark:hover:shadow-blue-300/50"
      />
      <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
}

export function SizeRange() {
  return (
    <div className="flex items-center justify-center w-full p-5">
      <div className="space-y-8 w-full">
        <div>
          <label className="mb-2 block text-sm font-medium text-violet-700 dark:text-blue-300">
            Small range
          </label>
          <input
            type="range"
            className="range-sm h-1 w-full cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-gray-700 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-violet-600 [&::-moz-range-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:dark:bg-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-violet-700 dark:text-blue-300">
            Default range
          </label>
          <input
            type="range"
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-gray-700 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-violet-600 [&::-moz-range-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:dark:bg-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-violet-700 dark:text-blue-300">
            Large range
          </label>
          <input
            type="range"
            className="range-lg h-3 w-full cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-gray-700 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-violet-600 [&::-moz-range-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:shadow-xl [&::-webkit-slider-thumb]:dark:bg-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export function DisabledRange() {
  return (
    <div className="w-full bg-white p-6 shadow-md dark:bg-gray-800">
      <label
        for="disabledRange"
        className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2"
      >
        Disabled Range Slider
      </label>
      <input
        id="disabledRange"
        type="range"
        min="0"
        max="100"
        value="50"
        disabled
        className="w-full h-3 cursor-not-allowed opacity-50 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none"
      />
    </div>
  );
}
