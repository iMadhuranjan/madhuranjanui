export const BasicRangeSliderCode=`<div class="w-full bg-white p-3 shadow-md dark:bg-gray-800">
  <label for="range" class="mb-4 block text-sm font-medium text-violet-700 dark:text-blue-300">Select Value: <span id="rangeValue" class="font-bold">50</span></label>
  <input id="range" type="range" min="0" max="100" value="50" class="h-3 w-full cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-gray-700 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-violet-600 [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:hover:shadow-violet-300/50 [&::-webkit-slider-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:dark:hover:shadow-blue-300/50" oninput="document.getElementById('rangeValue').textContent = this.value" />
  <div class="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
    <span>0</span>
    <span>100</span>
  </div>
</div>
`

export const ReactBasiRangeCode=`'use client'

import { useState } from "react";

export function BasicRangeSlider() {
  const [value, setValue] = useState(50);

  return (
    <div class="w-full bg-white p-3 shadow-md dark:bg-gray-800">
      <label
        htmlFor="range"
        class="mb-4 block text-sm font-medium text-violet-700 dark:text-blue-300"
      >
        Select Value:{" "}
        <span id="rangeValue" class="font-bold">
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
        class="h-3 w-full cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-gray-700 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-violet-600 [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:hover:shadow-violet-300/50 [&::-webkit-slider-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:dark:hover:shadow-blue-300/50"
      />
      <div class="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
}
`

export const htmlStepCode=`<div class="w-full bg-white p-6 shadow-md dark:bg-gray-800">
  <label for="stepRange" class="mb-4 block text-sm font-medium text-violet-700 dark:text-blue-300">
    Select Value: <span class="font-bold">50</span>
  </label>
  
  <input
    id="stepRange"
    type="range"
    min="0"
    max="100"
    step="10"
    value="50"
    class="h-3 w-full cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-gray-700
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
           [&::-moz-range-thumb]:dark:bg-blue-500"
  />
  
  <div class="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
    <span>0</span>
    <span>10</span>
    <span>20</span>
    <span>30</span>
    <span>40</span>
    <span>50</span>
    <span>60</span>
    <span>70</span>
    <span>80</span>
    <span>90</span>
    <span>100</span>
  </div>
</div>`

export const reactStepCode=`'use client'

import { useState } from "react";
 
export function StepRangeSlider() {
  const [value, setValue] = useState(50);

  return (
    <div class="w-full bg-white p-6 rounded-xl shadow-md dark:bg-gray-800/80">
      <label 
        htmlFor="stepRange" 
        class="mb-4 block text-sm font-medium text-violet-700 dark:text-blue-300"
      >
        Select Value: <span class="font-bold">{value}</span>
      </label>
      
      <input
        id="stepRange"
        type="range"
        min="0"
        max="100"
        step="10"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        class="
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
      
      <div class="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
    </div>
  );
}`

export const sizeRangeCode=` <div class="flex items-center justify-center w-full p-5">
  <div class="space-y-8 w-full">
     <div>
      <label class="mb-2 block text-sm font-medium text-violet-700 dark:text-blue-300">Small range</label>
      <input type="range" class="range-sm h-1 w-full cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-gray-700 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-violet-600 [&::-moz-range-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:dark:bg-blue-500" />
    </div>

     <div>
      <label class="mb-2 block text-sm font-medium text-violet-700 dark:text-blue-300">Default range</label>
      <input type="range" class="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-gray-700 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-violet-600 [&::-moz-range-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:dark:bg-blue-500" />
    </div>

     <div>
      <label class="mb-2 block text-sm font-medium text-violet-700 dark:text-blue-300">Large range</label>
      <input type="range" class="range-lg h-3 w-full cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-gray-700 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-violet-600 [&::-moz-range-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:shadow-xl [&::-webkit-slider-thumb]:dark:bg-blue-500" />
    </div>
  </div>
</div>`

export const DisabledRangeCode=`<div class="w-full bg-white p-6 shadow-md dark:bg-gray-800">
  <label for="disabledRange" class="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
    Disabled Range Slider
  </label>
  <input
    id="disabledRange"
    type="range"
    min="0"
    max="100"
    value="50"
    disabled
    class="w-full h-3 cursor-not-allowed opacity-50 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none"
  >
</div>
`

export const SimpleSliderCode=` <div class="w-full bg-white p-6 shadow-sm dark:bg-gray-900">
      <label
        htmlFor="colorSlider"
        class="mb-3 block text-sm font-medium text-violet-700 dark:text-blue-300"
      >
        Simple Range Slider
      </label>
      <div class="relative">
        <input
          type="range"
          class="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-gray-700 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-violet-600 [&::-moz-range-thumb]:dark:bg-blue-500 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-600 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:dark:bg-blue-500"
        />
      </div>
    </div>`