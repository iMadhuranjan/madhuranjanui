import React from "react";

export function ClickMeButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200">
      <button
        className="inline-flex h-12 items-center justify-center rounded-md
           bg-neutral-800 px-6 font-medium text-neutral-100 transition
           active:scale-110
           dark:bg-neutral-200 dark:text-neutral-900"
      >
        Click me
      </button>

      <button
        className="inline-flex h-12 items-center justify-center rounded-md
           bg-neutral-800 px-6 font-medium text-neutral-100
           shadow-lg shadow-neutral-500/20 transition active:scale-95
           dark:bg-neutral-200 dark:text-neutral-900 dark:shadow-neutral-700/40"
      >
        Click me
      </button>

      <button
        className="relative overflow-hidden rounded-md bg-neutral-800
           px-5 py-2.5 text-neutral-100 transition-all duration-300
           [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)]
           active:-translate-y-1 active:scale-x-90 active:scale-y-110
           dark:bg-neutral-200 dark:text-neutral-900"
      >
        Click me
      </button>

      <button
        className="relative overflow-hidden rounded-md bg-neutral-800
           px-5 py-2.5 text-neutral-100 duration-300
           [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)]
           active:translate-y-1 active:scale-x-110 active:scale-y-90
           dark:bg-neutral-200 dark:text-neutral-900"
      >
        Click me
      </button>

      <button
        className="relative h-12 overflow-hidden rounded bg-neutral-800
           px-5 py-2.5 text-neutral-100 transition-all duration-200
           hover:bg-neutral-700 hover:ring-offset-2 active:ring-2 active:ring-neutral-700
           dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-neutral-300"
      >
        Click me
      </button>

      <button
        className="cursor-pointer rounded-md bg-neutral-800 px-3 py-1
           text-sm text-neutral-100 shadow-lg shadow-neutral-500/20
           transition active:scale-[.95]
           dark:bg-neutral-200 dark:text-neutral-900 dark:shadow-neutral-700/30"
      >
        Click me
      </button>

      <button
        className="relative z-0 h-12 rounded-full bg-blue-600 px-6 text-neutral-50
           after:absolute after:left-0 after:top-0 after:-z-10 after:h-full
           after:w-full after:rounded-full after:bg-blue-600
           active:scale-95 active:transition active:after:scale-x-125
           active:after:scale-y-150 active:after:opacity-0 active:after:transition
           active:after:duration-500
           dark:bg-blue-500"
      >
        Click me
      </button>

      <button
        className="group relative inline-flex h-12 items-center justify-center overflow-hidden
           rounded-md border border-neutral-300 bg-transparent px-6 font-medium
           text-neutral-600 transition-all [box-shadow:0px_4px_1px_#a3a3a3]
           active:translate-y-[2px] active:shadow-none
           dark:border-neutral-600 dark:text-neutral-300"
      >
        Click me
      </button>

      <button
        className="group h-8 select-none rounded-lg bg-gradient-to-b
           from-zinc-800 via-zinc-700 to-zinc-600 px-3 text-sm leading-8
           text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset]
           hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700
           active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]
           dark:from-zinc-600 dark:via-zinc-500 dark:to-zinc-500"
      >
        <span className="block group-active:[transform:translate3d(0,1px,0)]">
          Click me
        </span>
      </button>

      <button
        className="group h-8 select-none rounded-lg bg-neutral-100 px-3 text-sm leading-8
           text-neutral-900 shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset]
           hover:bg-neutral-200 active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]
           dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-600"
      >
        <span className="block group-active:[transform:translate3d(0,1px,0)]">
          Click me
        </span>
      </button>

      <button
        className="group h-8 select-none rounded-lg bg-neutral-100 px-3 text-sm leading-8
           text-neutral-900 shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset]
           hover:bg-neutral-200 active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]
           dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-600"
      >
        <span className="block group-active:[transform:translate3d(0,1px,0)]">
          Click me
        </span>
      </button>

      <button
        className="group h-8 select-none rounded-lg bg-blue-600 px-3 text-sm leading-8
           text-neutral-50 shadow-[0_-1px_0_1px_#1e3a8a_inset,0_0_0_1px_#1d4ed8_inset,0_0.5px_0_1.5px_#60a5fa_inset]
           hover:bg-blue-700 active:bg-blue-800
           active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset
           dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700"
      >
        <span className="block group-active:[transform:translate3d(0,1px,0)]">
          Click me
        </span>
      </button>

      <button
        className="group flex h-10 items-center justify-center rounded-md border border-orange-600
           bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4
           text-neutral-50 shadow-[inset_0_1px_0px_0px_#fdba74] active:[box-shadow:none]
           dark:from-orange-500 dark:via-orange-600 dark:to-orange-700"
      >
        <span className="block group-active:[transform:translate3d(0,1px,0)]">
          Click me
        </span>
      </button>

      <button
        className="group h-10 select-none rounded-[4px] bg-orange-600 px-4 leading-10
           text-neutral-50 shadow-[0_-1px_0_1px_#7c2d12_inset,0_0_0_1px_#c2410c_inset,0_0.5px_0_1.5px_#fb923c_inset]
           hover:bg-orange-700 active:bg-orange-800
           active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.2)_inset
           dark:bg-orange-500 dark:hover:bg-orange-600 dark:active:bg-orange-700"
      >
        <span className="block group-active:[transform:translate3d(0,1px,0)]">
          Click me
        </span>
      </button>

      <button
        className="relative inline-flex h-10 items-center justify-center overflow-hidden
           rounded-md bg-purple-600 px-6 font-semibold text-white
           transition-transform duration-300 group active:scale-95
           dark:bg-purple-400"
      >
        <span
          className="absolute inset-0 h-full w-full translate-x-0 translate-y-0 bg-purple-800
             opacity-0 transition-opacity duration-300 group-hover:opacity-20"
        ></span>
        <span className="relative z-10">Click me</span>
      </button>

      <button
        className="group relative inline-flex items-center justify-center rounded-lg
           bg-pink-500 px-6 py-3 font-medium text-white shadow-lg ring-pink-400
           transition duration-300 hover:bg-pink-600 focus:className-none focus:ring-4
           dark:bg-pink-400 dark:hover:bg-pink-500"
      >
        <span
          className="absolute bottom-0 left-0 h-0 w-full bg-pink-800 opacity-40
             transition-all duration-300 group-hover:h-full"
        ></span>
        <span className="relative">Click me</span>
      </button>

      <button
        className="relative inline-block rounded-md bg-green-600 px-5 py-2.5 font-medium
           text-white transition-all duration-300 hover:scale-105 hover:shadow-lg
           dark:bg-green-500"
      >
        <span
          className="absolute left-0 top-0 h-full w-full scale-0 bg-green-900 opacity-30
             transition-transform duration-300 group-hover:scale-100"
        ></span>
        <span className="relative">Click me</span>
      </button>

      <button
        className="relative h-10 overflow-hidden rounded-md bg-teal-600 px-6 text-neutral-50
           font-medium transition-all duration-300 hover:bg-teal-500 active:scale-95
           dark:bg-teal-500 dark:hover:bg-teal-400"
      >
        <span
          className="absolute -bottom-full left-0 h-full w-full bg-teal-900 opacity-30
             transition-all duration-300 hover:translate-y-full"
        ></span>
        <span className="relative">Click me</span>
      </button>

      <button
        className="group relative inline-flex items-center justify-center rounded-lg
           border-2 border-emerald-600 bg-emerald-500 px-5 py-2.5 font-medium
           text-neutral-50 transition duration-300 hover:bg-emerald-600 active:scale-95
           dark:border-emerald-400 dark:bg-emerald-400 dark:hover:bg-emerald-500"
      >
        <span
          className="absolute inset-0 z-0 rounded-lg border border-dashed border-emerald-700
             opacity-0 transition-all duration-300 group-hover:rotate-45
             group-hover:opacity-100 dark:border-emerald-800"
        ></span>
        <span className="relative z-10">Click me</span>
      </button>

      <button
        className="group relative inline-block rounded bg-red-500 px-5 py-2.5 text-neutral-50
           font-medium transition hover:shadow-lg active:scale-95
           dark:bg-red-400"
      >
        <span
          className="absolute inset-0 z-0 bg-gradient-to-r from-transparent to-red-900
             opacity-0 transition-opacity duration-300 group-hover:opacity-20
             dark:to-red-700"
        ></span>
        <span className="relative z-10">Click me</span>
      </button>

      <button
        className="group relative inline-flex items-center justify-center overflow-hidden
           rounded-md bg-[radial-gradient(circle_at_top,_#fefefe,_#d1d5db)]
           px-6 py-2 text-sm font-semibold text-neutral-800 shadow-md
           active:translate-y-[1px]
           dark:bg-[radial-gradient(circle_at_top,_#4b5563,_#1f2937)]
           dark:text-neutral-200"
      >
        <span className="absolute inset-0 bg-neutral-200 opacity-0 transition-opacity duration-300 group-hover:opacity-10 dark:bg-neutral-700"></span>
        Click me
      </button>

      <button
        className="group relative inline-flex items-center justify-center rounded-md
           bg-amber-400 px-6 py-2 font-bold text-amber-900 transition
           hover:bg-amber-500 hover:text-amber-50 active:scale-95
           dark:bg-amber-500 dark:text-amber-900 dark:hover:bg-amber-600 dark:hover:text-amber-100"
      >
        <span
          className="absolute inset-0 -rotate-0 border-2 border-amber-700 opacity-0
             transition-all duration-300 group-hover:rotate-6 group-hover:opacity-100
             dark:border-amber-800"
        ></span>
        <span className="relative">Click me</span>
      </button>
    </div>
  );
}

export function DefaultButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-4 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <button
        type="button"
        className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
      >
        Amber
      </button>

      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Blue
      </button>

      <button
        type="button"
        className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
      >
        Cyan
      </button>

      <button
        type="button"
        className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
      >
        Emerald
      </button>

      <button
        type="button"
        className="text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:ring-fuchsia-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
      >
        Fuchsia
      </button>

      <button
        type="button"
        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Gray
      </button>

      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Green
      </button>

      <button
        type="button"
        className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
      >
        Indigo
      </button>

      <button
        type="button"
        className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
      >
        Lime
      </button>

      <button
        type="button"
        className="text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800"
      >
        Neutral
      </button>

      <button
        type="button"
        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
      >
        Orange
      </button>

      <button
        type="button"
        className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
      >
        Pink
      </button>

      <button
        type="button"
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
      >
        Purple
      </button>

      <button
        type="button"
        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Red
      </button>

      <button
        type="button"
        className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
      >
        Rose
      </button>

      <button
        type="button"
        className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
      >
        Sky
      </button>

      <button
        type="button"
        className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
      >
        Slate
      </button>

      <button
        type="button"
        className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
      >
        Teal
      </button>

      <button
        type="button"
        className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
      >
        Violet
      </button>

      <button
        type="button"
        className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
      >
        Yellow
      </button>
    </div>
  );
}

export function PillsButtons() {
  return (
    <div className="p-4 flex justify-center items-center flex-wrap gap-5 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium rounded-full border border-gray-300
             bg-white text-gray-900 hover:bg-gray-100 focus:ring-2 focus:className-none
             focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
             dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        Default
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:className-none
             focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        Blue
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-red-600 hover:bg-red-700 focus:ring-2 focus:className-none
             focus:ring-red-300 dark:focus:ring-red-900"
      >
        Red
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-green-600 hover:bg-green-700 focus:ring-2 focus:className-none
             focus:ring-green-300 dark:focus:ring-green-800"
      >
        Green
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-gray-900 rounded-full
             bg-yellow-400 hover:bg-yellow-500 focus:ring-2 focus:className-none
             focus:ring-yellow-300 dark:focus:ring-yellow-900"
      >
        Yellow
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:className-none
             focus:ring-purple-300 dark:focus:ring-purple-900"
      >
        Purple
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-pink-500 hover:bg-pink-600 focus:ring-2 focus:className-none
             focus:ring-pink-300 dark:focus:ring-pink-800"
      >
        Pink
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:className-none
             focus:ring-orange-300 dark:focus:ring-orange-800"
      >
        Orange
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:className-none
             focus:ring-indigo-300 dark:focus:ring-indigo-900"
      >
        Indigo
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:className-none
             focus:ring-teal-300 dark:focus:ring-teal-800"
      >
        Teal
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-cyan-600 hover:bg-cyan-700 focus:ring-2 focus:className-none
             focus:ring-cyan-300 dark:focus:ring-cyan-800"
      >
        Cyan
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-gray-900 rounded-full
             bg-lime-400 hover:bg-lime-500 focus:ring-2 focus:className-none
             focus:ring-lime-300 dark:focus:ring-lime-800"
      >
        Lime
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-gray-900 rounded-full
             bg-amber-400 hover:bg-amber-500 focus:ring-2 focus:className-none
             focus:ring-amber-300 dark:focus:ring-amber-800"
      >
        Amber
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-emerald-600 hover:bg-emerald-700 focus:ring-2 focus:className-none
             focus:ring-emerald-300 dark:focus:ring-emerald-800"
      >
        Emerald
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-2 focus:className-none
             focus:ring-fuchsia-300 dark:focus:ring-fuchsia-800"
      >
        Fuchsia
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-rose-600 hover:bg-rose-700 focus:ring-2 focus:className-none
             focus:ring-rose-300 dark:focus:ring-rose-800"
      >
        Rose
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-slate-700 hover:bg-slate-800 focus:ring-2 focus:className-none
             focus:ring-slate-300 dark:focus:ring-slate-900"
      >
        Slate
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-stone-700 hover:bg-stone-800 focus:ring-2 focus:className-none
             focus:ring-stone-300 dark:focus:ring-stone-900"
      >
        Stone
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-neutral-700 hover:bg-neutral-800 focus:ring-2 focus:className-none
             focus:ring-neutral-300 dark:focus:ring-neutral-900"
      >
        Neutral
      </button>

      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-gray-600 hover:bg-gray-700 focus:ring-2 focus:className-none
             focus:ring-gray-300 dark:focus:ring-gray-800"
      >
        Gray
      </button>
    </div>
  );
}

export function GradientMonoChrome() {
  return (
    <div className="flex items-center justify-center  flex-wrap gap-3 p-4">
      <button className="rounded-md border-1 border-transparent bg-gradient-to-br from-blue-500 to-red-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#3b82f6,_#ef4444)] hover:from-red-500 hover:to-blue-500 focus:ring-2 focus:ring-blue-100 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-blue-800">
        Button 1
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-green-500 to-lime-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#10b981,_#84cc16)] hover:from-lime-500 hover:to-green-500 focus:ring-2 focus:ring-green-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-green-800">
        Button 2
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-purple-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#a855f7,_#ec4899)] hover:from-pink-500 hover:to-purple-500 focus:ring-2 focus:ring-purple-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-pink-800">
        Button 3
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-orange-500 to-yellow-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#f97316,_#f59e0b)] hover:from-yellow-500 hover:to-orange-500 focus:ring-2 focus:ring-orange-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-yellow-800">
        Button 4
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-teal-500 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#14b8a6,_#06b6d4)] hover:from-cyan-500 hover:to-teal-500 focus:ring-2 focus:ring-cyan-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-teal-800">
        Button 5
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-rose-500 to-fuchsia-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#f43f5e,_#d946ef)] hover:from-fuchsia-500 hover:to-rose-500 focus:ring-2 focus:ring-rose-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-fuchsia-800">
        Button 6
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-gray-500 to-slate-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#737373,_#64748b)] hover:from-slate-500 hover:to-gray-500 focus:ring-2 focus:ring-gray-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-slate-800">
        Button 7
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-sky-500 to-blue-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#0ea5e9,_#1d4ed8)] hover:from-blue-700 hover:to-sky-500 focus:ring-2 focus:ring-sky-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-blue-900">
        Button 8
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-zinc-500 to-neutral-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#71717a,_#737373)] hover:from-neutral-500 hover:to-zinc-500 focus:ring-2 focus:ring-zinc-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-neutral-800">
        Button 9
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-blue-700 to-indigo-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#1d4ed8,_#4c1d95)] hover:from-indigo-700 hover:to-blue-700 focus:ring-2 focus:ring-blue-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-indigo-900">
        Button 10
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-pink-500 to-red-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#ec4899,_#ef4444)] hover:from-red-500 hover:to-pink-500 focus:ring-2 focus:ring-pink-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-red-800">
        Button 11
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-emerald-500 to-lime-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#10b981,_#84cc16)] hover:from-lime-500 hover:to-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-lime-800">
        Button 12
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-orange-600 to-yellow-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#ea580c,_#f59e0b)] hover:from-yellow-500 hover:to-orange-600 focus:ring-2 focus:ring-orange-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-yellow-800">
        Button 13
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-cyan-600 to-teal-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#0891b2,_#14b8a6)] hover:from-teal-500 hover:to-cyan-600 focus:ring-2 focus:ring-cyan-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-teal-800">
        Button 14
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-rose-600 to-pink-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#e11d48,_#ec4899)] hover:from-pink-500 hover:to-rose-600 focus:ring-2 focus:ring-rose-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-pink-800">
        Button 15
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-gray-600 to-slate-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#52525b,_#374151)] hover:from-slate-700 hover:to-gray-600 focus:ring-2 focus:ring-gray-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-slate-800">
        Button 16
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-fuchsia-600 to-rose-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#c026d3,_#f43f5e)] hover:from-rose-500 hover:to-fuchsia-600 focus:ring-2 focus:ring-fuchsia-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-rose-800">
        Button 17
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-indigo-600 to-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#4f46e5,_#3b82f6)] hover:from-blue-500 hover:to-indigo-600 focus:ring-2 focus:ring-indigo-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-blue-900">
        Button 18
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-lime-600 to-green-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#65a30d,_#10b981)] hover:from-green-500 hover:to-lime-600 focus:ring-2 focus:ring-lime-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-green-800">
        Button 19
      </button>
      <button className="rounded-md border-2 border-transparent bg-gradient-to-br from-red-600 to-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#dc2626,_#2563eb)] hover:from-blue-600 hover:to-red-600 focus:ring-2 focus:ring-red-300 focus:className-none active:scale-95 active:border-[1px] dark:focus:ring-blue-900">
        Button 20
      </button>
    </div>
  );
}

export function GradientDuoTOne() {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center items-center bg-white dark:bg-gray-900">
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all active:scale-95"
      >
        Button 1
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 transition-all active:scale-95"
      >
        Button 2
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-all active:scale-95"
      >
        Button 3
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 transition-all active:scale-95"
      >
        Button 4
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-orange-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-800 transition-all active:scale-95"
      >
        Button 5
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-lime-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800 transition-all active:scale-95"
      >
        Button 6
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-yellow-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 transition-all active:scale-95"
      >
        Button 7
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-violet-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-violet-300 dark:focus:ring-violet-800 transition-all active:scale-95"
      >
        Button 8
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 transition-all active:scale-95"
      >
        Button 9
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 transition-all active:scale-95"
      >
        Button 10
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-800 transition-all active:scale-95"
      >
        Button 11
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-lime-500 to-teal-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800 transition-all active:scale-95"
      >
        Button 12
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-green-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 transition-all active:scale-95"
      >
        Button 13
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-rose-500 to-pink-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-rose-300 dark:focus:ring-rose-800 transition-all active:scale-95"
      >
        Button 14
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-500 to-slate-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800 transition-all active:scale-95"
      >
        Button 15
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 transition-all active:scale-95"
      >
        Button 16
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-yellow-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-800 transition-all active:scale-95"
      >
        Button 17
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-blue-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 transition-all active:scale-95"
      >
        Button 18
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-indigo-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-all active:scale-95"
      >
        Button 19
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-orange-500 rounded-md hover:opacity-90 focus:className-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 transition-all active:scale-95"
      >
        Button 20
      </button>
    </div>
  );
}

export function GradientOutlineButtons() {
  return (
    <div className="flex  justify-center items-center flex-wrap gap-3 p-4">
      <button className="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-500 to-blue-500 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-blue-500 group-hover:to-red-500 hover:shadow-lg hover:shadow-blue-500/50 focus:ring-4 focus:ring-blue-300 focus:className-none dark:focus:ring-red-800">
        <span className="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
          Red to Blue
        </span>
      </button>
      <button className="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-500 to-lime-500 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-lime-500 group-hover:to-green-500 hover:shadow-lg hover:shadow-lime-500/50 focus:ring-4 focus:ring-green-300 focus:className-none dark:focus:ring-lime-800">
        <span className="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
          Green to Lime
        </span>
      </button>
      <button className="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-pink-500 group-hover:to-purple-600 hover:shadow-lg hover:shadow-pink-500/50 focus:ring-4 focus:ring-purple-300 focus:className-none dark:focus:ring-pink-800">
        <span className="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
          Purple to Pink
        </span>
      </button>
      <button className="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-yellow-500 group-hover:to-orange-500 hover:shadow-lg hover:shadow-yellow-500/50 focus:ring-4 focus:ring-orange-300 focus:className-none dark:focus:ring-yellow-800">
        <span className="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
          Orange to Yellow
        </span>
      </button>
      <button className="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-cyan-500 group-hover:to-teal-500 hover:shadow-lg hover:shadow-cyan-500/50 focus:ring-4 focus:ring-cyan-300 focus:className-none dark:focus:ring-teal-800">
        <span className="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
          Teal to Cyan
        </span>
      </button>
      <button className="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-rose-500 to-fuchsia-600 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-fuchsia-600 group-hover:to-rose-500 hover:shadow-lg hover:shadow-fuchsia-500/50 focus:ring-4 focus:ring-rose-300 focus:className-none dark:focus:ring-fuchsia-800">
        <span className="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
          Rose to Fuchsia
        </span>
      </button>
      <button className="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-blue-600 group-hover:to-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 focus:ring-4 focus:ring-indigo-300 focus:className-none dark:focus:ring-blue-800">
        <span className="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
          Indigo to Blue
        </span>
      </button>
      <button className="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-gray-600 to-slate-800 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-slate-800 group-hover:to-gray-600 hover:shadow-lg hover:shadow-gray-500/50 focus:ring-4 focus:ring-gray-300 focus:className-none dark:focus:ring-slate-800">
        <span className="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
          Gray to Slate
        </span>
      </button>
      <button className="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-sky-500 to-blue-800 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-blue-800 group-hover:to-sky-500 hover:shadow-lg hover:shadow-blue-500/50 focus:ring-4 focus:ring-sky-300 focus:className-none dark:focus:ring-blue-900">
        <span className="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
          Sky to Blue
        </span>
      </button>
      <button className="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-600 to-violet-600 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-violet-600 group-hover:to-red-600 hover:shadow-lg hover:shadow-violet-500/50 focus:ring-4 focus:ring-red-300 focus:className-none dark:focus:ring-violet-900">
        <span className="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
          Red to Violet
        </span>
      </button>
      <button className="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-600 to-yellow-400 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-yellow-400 group-hover:to-pink-600 hover:shadow-lg hover:shadow-yellow-400/50 focus:ring-4 focus:ring-pink-300 focus:className-none dark:focus:ring-yellow-800">
        <span className="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
          Pink to Yellow
        </span>
      </button>
    </div>
  );
}

export function ColorShadow() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 bg-white dark:bg-gray-900">
      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Blue
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Green
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Red
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Purple
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Pink
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Yellow
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Teal
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Cyan
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-amber-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Amber
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Lime
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-fuchsia-500 via-fuchsia-600 to-fuchsia-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-fuchsia-300 dark:focus:ring-fuchsia-800 shadow-lg shadow-fuchsia-500/50 dark:shadow-fuchsia-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Fuchsia
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-rose-300 dark:focus:ring-rose-800 shadow-lg shadow-rose-500/50 dark:shadow-rose-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Rose
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-sky-300 dark:focus:ring-sky-800 shadow-lg shadow-sky-500/50 dark:shadow-sky-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Sky
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Indigo
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-violet-300 dark:focus:ring-violet-800 shadow-lg shadow-violet-500/50 dark:shadow-violet-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Violet
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Orange
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-emerald-300 dark:focus:ring-emerald-800 shadow-lg shadow-emerald-500/50 dark:shadow-emerald-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Emerald
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-stone-500 via-stone-600 to-stone-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-stone-300 dark:focus:ring-stone-800 shadow-lg shadow-stone-500/50 dark:shadow-stone-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Stone
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-lg shadow-slate-500/50 dark:shadow-slate-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Slate
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-700 hover:bg-gradient-to-br focus:ring-4 focus:className-none focus:ring-zinc-300 dark:focus:ring-zinc-800 shadow-lg shadow-zinc-500/50 dark:shadow-zinc-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Zinc
      </button>
    </div>
  );
}

export function HoverButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 px-6 bg-white dark:bg-gray-900">
      <button className="group relative h-12 overflow-hidden rounded-md bg-gray-800 dark:bg-gray-200 px-8 py-2 text-white dark:text-gray-800">
        <span className="relative z-10">Hover Me</span>
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-red-500 transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span>
        </span>
      </button>

      <button className="group relative h-12 overflow-hidden rounded-md bg-gray-800 dark:bg-gray-200 px-8 py-2 text-white dark:text-gray-800">
        <span className="relative z-10">Hover Me</span>
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute right-0 aspect-square w-full origin-center translate-x-full rounded-full bg-green-500 transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span>
        </span>
      </button>

      <button className="group relative h-12 overflow-hidden rounded-md bg-gray-800 dark:bg-gray-200 px-8 py-2 text-white dark:text-gray-800">
        <span className="relative z-10">Hover Me</span>
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute top-0 aspect-square w-full origin-center -translate-y-full rounded-full bg-purple-500 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
        </span>
      </button>

      <button className="group relative h-12 overflow-hidden rounded-md bg-gray-800 dark:bg-gray-200 px-8 py-2 text-white dark:text-gray-800">
        <span className="relative z-10">Hover Me</span>
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute bottom-0 aspect-square w-full origin-center translate-y-full rounded-full bg-orange-500 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
        </span>
      </button>

      <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-900 px-6 font-medium text-neutral-200 transition-all duration-300 hover:scale-105 dark:bg-neutral-100 dark:text-neutral-900">
        <span className="relative z-10">Hover me</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] transition-all duration-700 ease-in-out group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-10 bg-white/20 dark:bg-black/20"></div>
        </div>
      </button>

      <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-900 px-6 font-medium text-neutral-200 transition-all duration-500 hover:scale-105 dark:bg-neutral-100 dark:text-neutral-900">
        <div className="translate-x-0 opacity-100 transition-all duration-500 group-hover:-translate-x-[150%] group-hover:opacity-0">
          Hover me
        </div>

        <div className="absolute translate-x-[150%] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 flex items-center gap-2">
          <span className="text-sm font-medium">Go</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </button>

      <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-300 bg-transparent px-6 font-medium text-neutral-700 transition-all duration-300 shadow-[5px_5px_0px_#525252] hover:shadow-[0px_0px_0px_#525252] hover:translate-x-[3px] hover:translate-y-[3px] dark:border-neutral-600 dark:text-neutral-300 dark:shadow-[5px_5px_0px_#333] dark:hover:shadow-[0px_0px_0px_#333]">
        {" "}
        Hover me{" "}
      </button>

      <button className="group relative cursor-pointer focus:className-none">
        <div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border bg-transparent px-6 font-medium text-neutral-600 transition-all duration-300 transform group-hover:-translate-x-3 group-hover:-translate-y-3 dark:border-neutral-700 dark:text-neutral-300">
          Hover me
        </div>
        <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 transform group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] dark:group-hover:[box-shadow:5px_5px_#3a3a3a,10px_10px_#2e2e2e,15px_15px_#1f1f1f]"></div>
      </button>

      <a href="#_" className="relative inline-block text-lg group">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-all duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white dark:text-gray-200 dark:border-gray-200">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 transition-all duration-300"></span>

          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 dark:bg-gray-100 group-hover:-rotate-180 ease"></span>

          <span className="relative z-10 dark:hover:text-gray-800">
            Button Text
          </span>
        </span>

        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-300 ease-linear bg-gray-900 dark:bg-gray-100 dark:hover:text-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
      </a>

      <a
        href="#_"
        className="relative inline-flex items-center justify-center px-6 py-2.5 font-medium rounded overflow-hidden group transition-all ease-out duration-300 bg-green-500 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 hover:ring-2 hover:ring-offset-2 hover:ring-green-400 dark:bg-green-600 dark:hover:from-green-600 dark:hover:to-green-500 dark:hover:ring-green-500"
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white/20 rotate-12 group-hover:-translate-x-40 ease-out"></span>

        <span className="relative z-10">Button Text</span>
      </a>

      <a
        href="#_"
        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-semibold text-green-700 transition duration-300 ease-out rounded-full shadow-lg group hover:ring-2 hover:ring-green-400 dark:text-green-200 dark:hover:ring-green-300"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-600 via-green-500 to-yellow-400"></span>

        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-yellow-500 rounded-full opacity-40 group-hover:rotate-90 ease-out"></span>

        <span className="relative text-white">Click Me</span>
      </a>

      <a
        href="#_"
        className="relative px-6 py-3 overflow-hidden font-medium text-green-700 bg-green-100 border border-green-300 rounded-lg shadow-inner group dark:text-green-300 dark:bg-green-900 dark:border-green-700"
      >
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-green-700 group-hover:w-full ease-out dark:border-green-400"></span>

        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-green-700 group-hover:w-full ease-out dark:border-green-400"></span>

        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-700 group-hover:h-full ease-in-out dark:bg-green-400"></span>

        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-700 group-hover:h-full ease-in-out dark:bg-green-400"></span>

        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-800 opacity-0 group-hover:opacity-100 dark:bg-green-500"></span>

        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease-out">
          Click Me
        </span>
      </a>

      <a
        href="#_"
        className="relative inline-block px-5 py-3 font-medium group transition-all duration-300 ease-out"
      >
        <span className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out transform translate-x-1 translate-y-1 bg-green-700 group-hover:-translate-x-0 group-hover:-translate-y-0 dark:bg-green-500"></span>

        <span className="absolute inset-0 w-full h-full bg-white border-2 border-green-700 group-hover:bg-green-700 dark:bg-gray-900 dark:border-green-400 dark:group-hover:bg-green-400"></span>

        <span className="relative text-green-700 group-hover:text-white dark:text-green-300 dark:group-hover:text-gray-900">
          Click Me
        </span>
      </a>
    </div>
  );
}

export function SocialButtons() {
  return (
    <div className="flex justify-center flex-wrap items-center gap-3 p-3">
      <button
        type="button"
        className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 8 19"
        >
          <path
            fillRule="evenodd"
            d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
            clipRule="evenodd"
          />
        </svg>
        Sign in with Facebook
      </button>

      <button
        type="button"
        className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 17"
        >
          <path
            fillRule="evenodd"
            d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
            clipRule="evenodd"
          />
        </svg>
        Sign in with Twitter
      </button>

      <button
        type="button"
        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clipRule="evenodd"
          />
        </svg>
        Sign in with Github
      </button>

      <button
        type="button"
        className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 19"
        >
          <path
            fillRule="evenodd"
            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
            clipRule="evenodd"
          />
        </svg>
        Sign in with Google
      </button>

      <button
        type="button"
        className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
      >
        <svg
          className="w-5 h-5 me-2 -ms-1"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="apple"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
          />
        </svg>
        Sign in with Apple
      </button>

      <button
        type="button"
        className="text-white bg-[#0077B5] hover:bg-[#0077B5]/90 focus:ring-4 focus:outline-none focus:ring-[#0077B5]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-[#0077B5]/55 me-2 mb-2"
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512"
        >
          <path d="M100.28 448H7.4V148h92.88zM53.79 108.1c-29.59 0-53.79-24.14-53.79-53.79C0 24.6 24.2.45 53.79.45a53.88 53.88 0 1 1 0 107.75zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.32-79.3-48.42 0-55.9 37.8-55.9 76.7V448h-92.8V148h89.08v40.9h1.28c12.4-23.4 42.64-48.3 87.74-48.3 93.9 0 111.2 61.9 111.2 142.3V448z" />
        </svg>
        Sign in with LinkedIn
      </button>

      <button
        type="button"
        className="text-white bg-[#E4405F] hover:bg-[#E4405F]/90 focus:ring-4 focus:outline-none focus:ring-[#E4405F]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-[#E4405F]/55 me-2 mb-2"
      >
        <svg
          className="w-4 h-4 me-2"
          fill="currentColor"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 190.7c-41.9 0-75.9-34-75.9-75.9s34-75.9 75.9-75.9 75.9 34 75.9 75.9-34 75.9-75.9 75.9zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9 0-14.9 12-26.9 26.9-26.9 15 0 26.9 12 26.9 26.9zM398.8 80.3c-7.8-20.7-22.8-35.7-43.5-43.5C327.8 32 256 32 256 32s-71.8 0-99.3 4.8c-20.7 7.8-35.7 22.8-43.5 43.5C108.4 107.8 108.4 179.6 108.4 179.6s0 71.8 4.8 99.3c7.8 20.7 22.8 35.7 43.5 43.5 27.5 4.8 99.3 4.8 99.3 4.8s71.8 0 99.3-4.8c20.7-7.8 35.7-22.8 43.5-43.5 4.8-27.5 4.8-99.3 4.8-99.3s.1-71.8-4.7-99.3zM224.1 338c-62.9 0-113.9-51-113.9-113.9s51-113.9 113.9-113.9S338 161.2 338 224.1 287 338 224.1 338z" />
        </svg>
        Sign in with Instagram
      </button>

      <button
        type="button"
        className="text-white bg-[#5865F2] hover:bg-[#5865F2]/90 focus:ring-4 focus:outline-none focus:ring-[#5865F2]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-[#5865F2]/55 me-2 mb-2"
      >
        <svg
          className="w-4 h-4 me-2"
          fill="currentColor"
          viewBox="0 0 640 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M524.21 62.07A447.2 447.2 0 0 0 407.7 32c-2.37 4.21-5.08 9.65-7 14.06-20.13-3.01-40.28-3.01-60.42 0-1.92-4.41-4.64-9.85-7-14.06a447.152 447.152 0 0 0-116.51 30.07C104.61 203.36 88.65 344.84 98.72 484.75c48.41 42.45 95.11 41.69 95.11 41.69l11.13-15.76c-20.37-5.92-39.56-13.9-57.61-23.81 4.89-3.51 9.71-7.18 14.4-11.08 108.22 51.41 225.5 51.41 333.72 0 4.77 4 9.59 7.79 14.46 11.31-18.22 10.06-37.59 18.06-58 24.14l10.64 15c.11 0 46.7.78 95.11-41.69 9.02-120.09-10.8-261.73-121.47-422.68zM240.22 332.69c-22.82 0-41.53-20.6-41.53-45.96 0-25.35 18.47-46 41.53-46s41.73 20.65 41.53 46c.02 25.36-18.71 45.96-41.53 45.96zm159.55 0c-22.82 0-41.53-20.6-41.53-45.96 0-25.35 18.47-46 41.53-46 23.06 0 41.55 20.65 41.55 46-.02 25.36-18.7 45.96-41.55 45.96z" />
        </svg>
        Sign in with Discord
      </button>

      <button
        type="button"
        className="text-white bg-[#ea4c89] hover:bg-[#ea4c89]/90 focus:ring-4 focus:outline-none focus:ring-[#ea4c89]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-[#ea4c89]/55 me-2 mb-2"
      >
        <svg
          className="w-4 h-4 me-2"
          fill="currentColor"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 8C119 8 8 119.03 8 256c0 136.97 111 248 248 248s248-111.03 248-248C504 119.03 393 8 256 8zm163.61 114.84c29.21 36.01 47.2 81.9 47.2 131.16 0 13.73-1.33 27.15-3.85 40.14-9.16-3.02-54.46-16.92-108.83-15.41-2.22-5.28-4.48-10.44-6.78-15.37-1.67-3.46-3.36-6.9-5.08-10.32 65.32-28.95 94.22-69.55 94.22-69.55-2.83-1.97-27.77-18.77-61.68-31.61 11.16-19.72 21.15-40.44 30.3-61.04zM353.3 221.7c-24.29-7.85-49.02-14.59-75.19-20.07-14.58-26.82-28.55-52.12-40.02-75.36 5.66-1.11 11.42-1.7 17.31-1.7 49.55 0 93.61 22.77 123.19 59.28-.06.14-.1.27-.14.41-.66 1.78-9.66 24.31-25.15 37.44zM256 48c25.74 0 49.95 5.1 72.26 14.29-8.14 17.73-18.93 40.87-31.78 64.75-38.89-9.28-78.42-14.12-118.75-14.12-10.43 0-20.7.36-30.83 1.1 41.39-39.29 96.78-66.02 159.1-66.02zm-97.01 78.21c38.02 0 75.49 4.54 112.27 13.52 11.31 21.99 24.23 47.03 38.09 73.61-56.48 15.31-113.47 24.94-170.69 28.45-2.91-15.31-4.5-31.17-4.5-47.66 0-24.61 4.51-48.05 12.83-69.13 4.69-.51 9.53-.79 14.01-.79zm-48.85 12.05c-7.6 21.01-11.91 43.59-11.91 67.06 0 14.83 1.43 29.3 4.12 43.26-28.21 7.79-51.02 18.18-51.02 18.18s-18.55-26.26-18.55-62.15c0-49.51 19.49-94.36 50.73-127.02 12.38 2.73 39.8 10.21 68.63 20.67-.99.68-1.96 1.34-2.89 2.0zm-44.14 244.83c-21.94-26.94-35.07-61.4-35.07-99.09 0-2.66.06-5.29.17-7.9 24.47-10.17 56.92-20.2 90.62-26.98 1.75 7.23 3.77 14.43 6.05 21.52l.19.59c-32.33 9.63-67.1 24.52-67.1 24.52s13.77 27.89 49.21 49.95c-12.38 19.66-25.61 39.23-39.77 58.39-1.57-.88-3.1-1.79-4.53-2.92zm156.41 71.91c-33.18 0-64.03-9.46-90.28-25.82 13.98-19.31 28.94-39.86 44.27-61.27 21.42 4.22 43.93 6.46 67.41 6.46 12.44 0 24.71-.45 36.81-1.31-20.5 32.19-36.01 56.19-58.21 80.41zm93.64-87.88c-14.93 1.08-30.02 1.66-45.25 1.66-18.1 0-35.95-1.14-53.5-3.12 13.97-19.75 28.19-39.87 42.48-60.29 15.18-2.01 29.6-4.51 43.19-7.53 6.12 16.15 11.38 32.41 15.31 48.78-.56.17-1.12.34-1.67.5zm20.05-32.41c-3.63-12.84-7.94-25.44-12.83-37.75 25.52-7.84 39.85-14.74 39.85-14.74s10.78 21.51 10.78 43.22c-.01 20.27-9.8 38.27-37.8 9.27z" />
        </svg>
        Sign in with Dribbble
      </button>

      <button
        type="button"
        className="text-white bg-[#E60023] hover:bg-[#E60023]/90 focus:ring-4 focus:outline-none focus:ring-[#E60023]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-[#E60023]/55 me-2 mb-2"
      >
        <svg
          className="w-4 h-4 me-2"
          fill="currentColor"
          viewBox="0 0 496 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M496 256c0 136.967-111.033 248-248 248C111.03 504 0 392.967 0 256 0 119.034 111.03 8 248 8c136.967 0 248 111.034 248 248zm-167.95 36.154c-14.599 0-28.348-7.66-33-16.346 0 0-7.838 30.863-9.504 36.778-5.777 20.95-22.766 41.91-23.998 43.076-2.348 2.327-7.666 1.599-8.167-2.295-.967-6.98-6.295-43.171-6.295-43.171s-3.279 6.547-3.279 6.31c-13.859 26.096-31.792 18.203-31.792 18.203-25.744-9.306-19.059-61.944-0.28-78.196 16.581-14.537 48.197-9.648 54.158-7.066 2.428-16.6 7.406-32.255 13.269-42.49-44.285-4.031-71.993-31.11-71.993-69.302 0-38.684 29.175-68.078 84.067-68.078 75.29 0 90.043 55.98 90.043 78.514 0 10.65-1.415 19.047-3.689 26.857-6.423 22.108-20.11 29.85-28.926 29.85-11.705 0-10.427-13.651-10.427-13.651s2.223-9.635 3.445-15.056c2.769-11.797 14.747-34.87 5.892-34.87-8.347 0-24.34 12.21-24.34 40.59 0 11.067 1.104 16.97 1.104 16.97s-10.311 43.915-12.194 52.278c-3.637 15.22-.547 42.389-.285 45.084.152 1.44 2.006 1.913 2.837.728 1.18-1.621 16.23-20.331 21.353-38.992 1.432-4.81 8.196-31.53 8.196-31.53s4.022 7.92 4.022 16.34c0 15.271-2.355 30.221-2.355 30.221-.142 1.028.696 1.872 1.73 1.872 2.055.066 4.573-.328 7.02-.984 21.636-5.474 36.397-24.943 36.397-50.482 0-38.829-29.146-64.953-70.76-64.953-49.495 0-78.999 30.64-78.999 72.22 0 13.059 3.855 23.41 8.261 31.084 8.074 13.367 8.68 17.981 5.815 29.041-1.93 7.795-6.225 26.54-7.56 31.627-1.202 4.45-5.158 6.039-9.236 4.404-25.892-10.563-38.273-43.567-38.273-79.463C99.77 158.23 156.452 96 247.967 96c93.148 0 149.042 66.702 149.042 138.073 0 60.722-34.032 101.748-68.959 101.748z" />
        </svg>
        Sign in with Pinterest
      </button>
    </div>
  );
}

export function SizeButton() {
  return (
    <div className="flex flex-wrap gap-2 p-3 mx-auto justify-center items-center bg-white dark:bg-gray-900">
      <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center dark:focus:ring-blue-800">
        Extra Small
      </button>

      <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:focus:ring-blue-800">
        Small
      </button>

      <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2 text-center dark:focus:ring-blue-800">
        Medium
      </button>

      <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3 text-center dark:focus:ring-blue-800">
        Large
      </button>

      <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-7 py-4 text-center dark:focus:ring-blue-800">
        Extra Large
      </button>
    </div>
  );
}

export function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 bg-white dark:bg-gray-900">
      <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:focus:ring-blue-800">
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z" />
        </svg>
        Info
      </button>

      <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:focus:ring-blue-800">
        Download
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9 3h2v7h5l-6 6-6-6h5V3z" />
        </svg>
      </button>

      <button className="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:focus:ring-blue-800">
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z" />
        </svg>
      </button>

      <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3 text-center dark:focus:ring-blue-800">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z" />
        </svg>
        Large Button
      </button>
    </div>
  );
}

export function LoadingButton() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 bg-white dark:bg-gray-900">
      <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">
        <svg
          className="w-5 h-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        Loading...
      </button>

      <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">
        Processing...
        <svg
          className="w-5 h-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      </button>

      <button className="flex w-full justify-center items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">
        <svg
          className="w-5 h-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        Please Wait...
      </button>
    </div>
  );
}

export function DisabledButton() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 bg-white dark:bg-gray-900">
      {/* Solid Disabled Button */}
      <button
        disabled
        className="text-white bg-blue-500 dark:bg-blue-600 cursor-not-allowed opacity-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Disabled
      </button>

      {/* Outline Disabled Button */}
      <button
        disabled
        className="text-blue-500 border border-blue-500 dark:border-blue-400 dark:text-blue-400 cursor-not-allowed opacity-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Disabled Outline
      </button>

      {/* Ghost Disabled Button */}
      <button
        disabled
        className="text-blue-600 dark:text-blue-400 cursor-not-allowed opacity-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Disabled Ghost
      </button>

      {/* Disabled Button with Icon */}
      <button
        disabled
        className="flex items-center gap-2 text-white bg-blue-500 dark:bg-blue-600 cursor-not-allowed opacity-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z" />
        </svg>
        Disabled Icon
      </button>

      {/* Full Width Disabled Button */}
      <button
        disabled
        className="w-full text-white bg-blue-500 dark:bg-blue-600 cursor-not-allowed opacity-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Full Width Disabled
      </button>
    </div>
  );
}

export function StylishSqaureButton() {
  return (
    <div className="m-2 flex flex-wrap gap-6 justify-center items-center p-5">
      <button
        href="#"
        className="cyber-button-blue group hover:shadow-neon relative overflow-hidden px-8 py-4 font-bold text-white transition-all duration-300"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-80"></span>
        <span className="relative z-10 flex items-center gap-3">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
          LAUNCH CONSOLE
        </span>
        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-cyan-300 transition-all duration-500 group-hover:h-1"></span>
      </button>

      <button
        href="#"
        className="cyber-button-pink hover:shadow-neon-pink relative overflow-hidden border-2 border-pink-500 px-8 py-4 font-bold text-white transition-all duration-300"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-20"></span>
        <span className="relative z-10 flex items-center gap-3 text-black dark:text-white">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          WATCH DEMO
        </span>
        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-pink-300 transition-all duration-500 group-hover:h-1"></span>
      </button>
    </div>
  );
}
