"use client";
import { useState } from "react";

export function CheckSwitchToogle() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex items-center justify-center p-5">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          className="peer sr-only"
        />
        <div className="h-6 w-11 rounded-full bg-gray-200 transition-colors duration-300 peer-checked:bg-violet-500 dark:bg-gray-700 dark:peer-checked:bg-blue-500"></div>
        <div className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 peer-checked:translate-x-full"></div>
        <span className="ml-3 text-sm font-medium text-gray-700 select-none dark:text-gray-300">
          Checked Toggle Switch
        </span>
      </label>
    </div>
  );
}

export function DeaaultToogle() {
  return (
    <div className="flex items-center justify-center p-5">
      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="h-6 w-11 rounded-full bg-gray-200 transition-colors duration-300 peer-checked:bg-violet-500 dark:bg-gray-700 dark:peer-checked:bg-blue-500"></div>
        <div className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 peer-checked:translate-x-full"></div>
      </label>
    </div>
  );
}

export function SizeToogle() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 p-5">
      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="h-3 w-6 rounded-full bg-gray-200 transition-colors duration-300 peer-checked:bg-violet-500 dark:bg-gray-700 dark:peer-checked:bg-blue-500"></div>
        <div className="absolute top-1/2 left-[2px] h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow transition-transform duration-300 peer-checked:translate-x-3"></div>
        <span className="ml-2 text-xs font-medium text-gray-700 select-none dark:text-gray-300">
          {" "}
          XS Toggle{" "}
        </span>
      </label>

      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="h-4 w-8 rounded-full bg-gray-200 transition-colors duration-300 peer-checked:bg-violet-500 dark:bg-gray-700 dark:peer-checked:bg-blue-500"></div>
        <div className="absolute top-1/2 left-[2px] h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow transition-transform duration-300 peer-checked:translate-x-4"></div>
        <span className="ml-3 text-sm font-medium text-gray-700 select-none dark:text-gray-300">
          {" "}
          SM Toggle{" "}
        </span>
      </label>

      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="h-6 w-11 rounded-full bg-gray-200 transition-colors duration-300 peer-checked:bg-violet-500 dark:bg-gray-700 dark:peer-checked:bg-blue-500"></div>
        <div className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 peer-checked:translate-x-full"></div>
        <span className="ml-3 text-base text-gray-700 dark:text-gray-300">
          MD Toggle
        </span>
      </label>

      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="h-8 w-14 rounded-full bg-gray-200 transition-colors duration-300 peer-checked:bg-violet-500 dark:bg-gray-700 dark:peer-checked:bg-blue-500"></div>
        <div className="absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow transition-transform duration-300 peer-checked:translate-x-6"></div>
        <span className="ml-3 text-lg text-gray-700 dark:text-gray-300">
          LG Toggle
        </span>
      </label>

      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="h-10 w-20 rounded-full bg-gray-200 transition-colors duration-300 peer-checked:bg-violet-500 dark:bg-gray-700 dark:peer-checked:bg-blue-500"></div>
        <div className="absolute top-1 left-1 h-8 w-8 rounded-full bg-white shadow transition-transform duration-300 peer-checked:translate-x-10"></div>
        <span className="ml-3 text-xl text-gray-700 dark:text-gray-300">
          XL Toggle
        </span>
      </label>
    </div>
  );
}

export function ToogleWithIcon() {
  return (
    <div className="flex items-center justify-center p-5">
      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" className="sr-only peer" />

        <div className="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-violet-500 dark:bg-gray-700 dark:peer-checked:bg-blue-500 transition-colors duration-300"></div>

        <div className="absolute left-[2px] top-1/2 -translate-y-1/2 flex items-center justify-center h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 peer-checked:translate-x-full">
          <svg
            className="block peer-checked:hidden w-3 h-3 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM8.707 7.293a1 1 0 0 0-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 0 0 1.414 1.414L10 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414L11.414 10l1.293-1.293a1 1 0 0 0-1.414-1.414L10 8.586 8.707 7.293Z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            className="hidden peer-checked:block w-3 h-3 text-violet-500 dark:text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.704 5.291a1 1 0 0 1 .083 1.32l-6 7.5a1 1 0 0 1-1.497.083l-3-3a1 1 0 1 1 1.414-1.414l2.207 2.207 5.294-6.618a1 1 0 0 1 1.414-.078Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 select-none">
          Toggle with Icon
        </span>
      </label>
    </div>
  );
}

export function ColoredToole() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 p-5">
      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="relative h-6 w-11 rounded-full bg-gray-200 transition-colors peer-checked:bg-red-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-full dark:bg-gray-700 dark:peer-checked:bg-red-500"></div>
        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">Red</span>
      </label>

      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="relative h-6 w-11 rounded-full bg-gray-200 transition-colors peer-checked:bg-green-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-full dark:bg-gray-700 dark:peer-checked:bg-green-500"></div>
        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">Green</span>
      </label>

      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="relative h-6 w-11 rounded-full bg-gray-200 transition-colors peer-checked:bg-purple-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-full dark:bg-gray-700 dark:peer-checked:bg-purple-500"></div>
        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
          Purple
        </span>
      </label>

      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="relative h-6 w-11 rounded-full bg-gray-200 transition-colors peer-checked:bg-yellow-400 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-full dark:bg-gray-700 dark:peer-checked:bg-yellow-400"></div>
        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
          Yellow
        </span>
      </label>

      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="relative h-6 w-11 rounded-full bg-gray-200 transition-colors peer-checked:bg-teal-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-full dark:bg-gray-700 dark:peer-checked:bg-teal-500"></div>
        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">Teal</span>
      </label>

      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="relative h-6 w-11 rounded-full bg-gray-200 transition-colors peer-checked:bg-orange-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-full dark:bg-gray-700 dark:peer-checked:bg-orange-500"></div>
        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
          Orange
        </span>
      </label>

      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="relative h-6 w-11 rounded-full bg-gray-200 transition-colors peer-checked:bg-blue-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-full dark:bg-gray-700 dark:peer-checked:bg-blue-500"></div>
        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">Blue</span>
      </label>

      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="relative h-6 w-11 rounded-full bg-gray-200 transition-colors peer-checked:bg-indigo-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-full dark:bg-gray-700 dark:peer-checked:bg-indigo-500"></div>
        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
          Indigo
        </span>
      </label>

      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="relative h-6 w-11 rounded-full bg-gray-200 transition-colors peer-checked:bg-pink-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-full dark:bg-gray-700 dark:peer-checked:bg-pink-500"></div>
        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">Pink</span>
      </label>

      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="relative h-6 w-11 rounded-full bg-gray-200 transition-colors peer-checked:bg-lime-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-full dark:bg-gray-700 dark:peer-checked:bg-lime-500"></div>
        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">Lime</span>
      </label>
    </div>
  );
}

export function ToogleWithToolTip() {
  return (
    <div className="flex items-center justify-center p-5 h-32">
      <label className="relative inline-flex items-center cursor-pointer group">
        <input type="checkbox" className="sr-only peer" />
        <div className="relative h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-violet-500 dark:bg-gray-700 dark:peer-checked:bg-blue-500 transition-colors after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-full"></div>
        <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
          Allow push notification
        </span>

        <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Toggle notifications
        </div>
      </label>
    </div>
  );
}

export function TooglSwtchWithTIleAndDexcription() {
  return (
    <div className="flex items-center justify-center p-5">
      <label className="inline-flex cursor-pointer items-start">
        <input type="checkbox" className="sr-only peer" />
        <div className="relative h-6 w-11 rounded-full bg-gray-200 dark:bg-gray-700 peer-checked:bg-violet-500 dark:peer-checked:bg-blue-500 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform after:duration-300 peer-checked:after:translate-x-full"></div>

        <div className="ml-3 select-none">
          <span className="block text-sm font-medium text-gray-900 dark:text-gray-200">
            Remember Me
          </span>
          <span className="block text-xs text-gray-500 dark:text-gray-400">
            Save my login details for next time.
          </span>
        </div>
      </label>
    </div>
  );
}

export function DisabledToogle(){
    return(
        <div className="flex justify-center items-center gap-8 p-8">
  
         <div>
          <label className="inline-flex cursor-not-allowed items-center opacity-50">
            <input type="checkbox" className="peer sr-only" disabled />
            <div className="relative h-7 w-14 rounded-full bg-gray-200 transition-colors duration-200 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6 after:rounded-full after:bg-white after:shadow dark:bg-gray-700"></div>
            <span className="ml-3 text-sm font-medium text-gray-400">Disabled (Off)</span>
          </label>
        </div>
      
         <div>
          <label className="inline-flex cursor-not-allowed items-center opacity-50">
            <input type="checkbox" className="peer sr-only" checked disabled />
            <div className="relative h-7 w-14 rounded-full bg-violet-500 transition-colors duration-200 after:absolute after:top-0.5 after:left-[calc(100%_-_28px)] after:h-6 after:w-6 after:rounded-full after:bg-white after:shadow dark:bg-blue-500"
            ></div>
            <span className="ml-3 text-sm font-medium text-gray-400">Disabled (On)</span>
          </label>
        </div>
      </div>
      
    )
}
