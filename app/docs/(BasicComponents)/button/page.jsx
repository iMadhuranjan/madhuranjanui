import SectionHeading from "@/components/SectionHeading";
import React from "react";
import FlowbiteTailwindAlwaysCode from "../accordion/Accordation1";
import {
  ButtonWithIcons,
  ClickMeButtons,
  ColorShadow,
  DefaultButtons,
  DisabledButton,
  GradientDuoTOne,
  GradientMonoChrome,
  GradientOutlineButtons,
  HoverButtons,
  LoadingButton,
  PillsButtons,
  SizeButton,
  SocialButtons,
  StylishSqaureButton,
} from "./MyButtons";
import CommonStyle from "@/helper/style";
import { SocialButtonCode } from "@/helper/CustomCode";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense3 from "@/Adsense/Adsense3";

const page = () => {
  const ClickMeButtonCode =
    `<div class="flex flex-wrap items-center justify-start gap-4 p-6 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200">

  <!-- 1) Simple button with scale on active -->
  <button
    class="inline-flex h-12 items-center justify-center rounded-md
           bg-neutral-800 px-6 font-medium text-neutral-100 transition
           active:scale-110
           dark:bg-neutral-200 dark:text-neutral-900">
    Click me
  </button>

  <!-- 2) Shadowed button with a small scale-down on active -->
  <button
    class="inline-flex h-12 items-center justify-center rounded-md
           bg-neutral-800 px-6 font-medium text-neutral-100
           shadow-lg shadow-neutral-500/20 transition active:scale-95
           dark:bg-neutral-200 dark:text-neutral-900 dark:shadow-neutral-700/40">
    Click me
  </button>

  <!-- 3) Button that slides upward slightly on active -->
  <button
    class="relative overflow-hidden rounded-md bg-neutral-800
           px-5 py-2.5 text-neutral-100 transition-all duration-300
           [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)]
           active:-translate-y-1 active:scale-x-90 active:scale-y-110
           dark:bg-neutral-200 dark:text-neutral-900">
    Click me
  </button>

  <!-- 4) Button that slides downward on active -->
  <button
    class="relative overflow-hidden rounded-md bg-neutral-800
           px-5 py-2.5 text-neutral-100 duration-300
           [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)]
           active:translate-y-1 active:scale-x-110 active:scale-y-90
           dark:bg-neutral-200 dark:text-neutral-900">
    Click me
  </button>

  <!-- 5) Button with ring on active -->
  <button
    class="relative h-12 overflow-hidden rounded bg-neutral-800
           px-5 py-2.5 text-neutral-100 transition-all duration-200
           hover:bg-neutral-700 hover:ring-offset-2 active:ring-2 active:ring-neutral-700
           dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-neutral-300">
    Click me
  </button>

  <!-- 6) Small button with slight scale on active -->
  <button
    class="cursor-pointer rounded-md bg-neutral-800 px-3 py-1
           text-sm text-neutral-100 shadow-lg shadow-neutral-500/20
           transition active:scale-[.95]
           dark:bg-neutral-200 dark:text-neutral-900 dark:shadow-neutral-700/30">
    Click me
  </button>

  <!-- 7) Rounded-full button with ripple-like expansion on active -->
  <button
    class="relative z-0 h-12 rounded-full bg-blue-600 px-6 text-neutral-50
           after:absolute after:left-0 after:top-0 after:-z-10 after:h-full
           after:w-full after:rounded-full after:bg-blue-600
           active:scale-95 active:transition active:after:scale-x-125
           active:after:scale-y-150 active:after:opacity-0 active:after:transition
           active:after:duration-500
           dark:bg-blue-500">
    Click me
  </button>

  <!-- 8) Border and box-shadow with slight downward movement on active -->
  <button
    class="group relative inline-flex h-12 items-center justify-center overflow-hidden
           rounded-md border border-neutral-300 bg-transparent px-6 font-medium
           text-neutral-600 transition-all [box-shadow:0px_4px_1px_#a3a3a3]
           active:translate-y-[2px] active:shadow-none
           dark:border-neutral-600 dark:text-neutral-300">
    Click me
  </button>

  <!-- 9) Gradient background with shadow inset on edges -->
  <button
    class="group h-8 select-none rounded-lg bg-gradient-to-b
           from-zinc-800 via-zinc-700 to-zinc-600 px-3 text-sm leading-8
           text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset]
           hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700
           active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]
           dark:from-zinc-600 dark:via-zinc-500 dark:to-zinc-500">
    <span class="block group-active:[transform:translate3d(0,1px,0)]">
      Click me
    </span>
  </button>

  <!-- 10) White button with subtle shadows -->
  <button
    class="group h-8 select-none rounded-lg bg-neutral-100 px-3 text-sm leading-8
           text-neutral-900 shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset]
           hover:bg-neutral-200 active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]
           dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-600">
    <span class="block group-active:[transform:translate3d(0,1px,0)]">
      Click me
    </span>
  </button>

  <!-- 11) Similar white button with same effect -->
  <button
    class="group h-8 select-none rounded-lg bg-neutral-100 px-3 text-sm leading-8
           text-neutral-900 shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset]
           hover:bg-neutral-200 active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]
           dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-600">
    <span class="block group-active:[transform:translate3d(0,1px,0)]">
      Click me
    </span>
  </button>

  <!-- 12) Blue button with inset shadows and color changes on hover/active -->
  <button
    class="group h-8 select-none rounded-lg bg-blue-600 px-3 text-sm leading-8
           text-neutral-50 shadow-[0_-1px_0_1px_#1e3a8a_inset,0_0_0_1px_#1d4ed8_inset,0_0.5px_0_1.5px_#60a5fa_inset]
           hover:bg-blue-700 active:bg-blue-800
           active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset
           dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700">
    <span class="block group-active:[transform:translate3d(0,1px,0)]">
      Click me
    </span>
  </button>

  <!-- 13) Gradient orange button with border and box-shadow -->
  <button
    class="group flex h-10 items-center justify-center rounded-md border border-orange-600
           bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4
           text-neutral-50 shadow-[inset_0_1px_0px_0px_#fdba74] active:[box-shadow:none]
           dark:from-orange-500 dark:via-orange-600 dark:to-orange-700">
    <span class="block group-active:[transform:translate3d(0,1px,0)]">
      Click me
    </span>
  </button>

  <!-- 14) Another orange button with detailed inset shadows -->
  <button
    class="group h-10 select-none rounded-[4px] bg-orange-600 px-4 leading-10
           text-neutral-50 shadow-[0_-1px_0_1px_#7c2d12_inset,0_0_0_1px_#c2410c_inset,0_0.5px_0_1.5px_#fb923c_inset]
           hover:bg-orange-700 active:bg-orange-800
           active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.2)_inset
           dark:bg-orange-500 dark:hover:bg-orange-600 dark:active:bg-orange-700">
    <span class="block group-active:[transform:translate3d(0,1px,0)]">
      Click me
    </span>
  </button>

  <!-- 15) Purple button with a subtle hover overlay -->
  <button
    class="relative inline-flex h-10 items-center justify-center overflow-hidden
           rounded-md bg-purple-600 px-6 font-semibold text-white
           transition-transform duration-300 group active:scale-95
           dark:bg-purple-400">
    <!-- Overlay that fades in on hover -->
    <span
      class="absolute inset-0 h-full w-full translate-x-0 translate-y-0 bg-purple-800
             opacity-0 transition-opacity duration-300 group-hover:opacity-20">
    </span>
    <span class="relative z-10">Click me</span>
  </button>

  <!-- 16) Pink button that shows expanding bottom overlay on hover -->
  <button
    class="group relative inline-flex items-center justify-center rounded-lg
           bg-pink-500 px-6 py-3 font-medium text-white shadow-lg ring-pink-400
           transition duration-300 hover:bg-pink-600 focus:outline-none focus:ring-4
           dark:bg-pink-400 dark:hover:bg-pink-500">
    <!-- Expanding overlay from bottom -->
    <span
      class="absolute bottom-0 left-0 h-0 w-full bg-pink-800 opacity-40
             transition-all duration-300 group-hover:h-full">
    </span>
    <span class="relative">Click me</span>
  </button>

  <!-- 17) Green button that zooms slightly on hover -->
  <button
    class="relative inline-block rounded-md bg-green-600 px-5 py-2.5 font-medium
           text-white transition-all duration-300 hover:scale-105 hover:shadow-lg
           dark:bg-green-500">
    <!-- Expanding highlight in background on hover -->
    <span
      class="absolute left-0 top-0 h-full w-full scale-0 bg-green-900 opacity-30
             transition-transform duration-300 group-hover:scale-100">
    </span>
    <span class="relative">Click me</span>
  </button>

  <!-- 18) Teal button with diagonal color shift on hover -->
  <button
    class="relative h-10 overflow-hidden rounded-md bg-teal-600 px-6 text-neutral-50
           font-medium transition-all duration-300 hover:bg-teal-500 active:scale-95
           dark:bg-teal-500 dark:hover:bg-teal-400">
    <!-- Diagonal overlay that slides in on hover -->
    <span
      class="absolute -bottom-full left-0 h-full w-full bg-teal-900 opacity-30
             transition-all duration-300 hover:translate-y-full">
    </span>
    <span class="relative">Click me</span>
  </button>

  <!-- 19) Button with rotating border on hover -->
  <button
    class="group relative inline-flex items-center justify-center rounded-lg
           border-2 border-emerald-600 bg-emerald-500 px-5 py-2.5 font-medium
           text-neutral-50 transition duration-300 hover:bg-emerald-600 active:scale-95
           dark:border-emerald-400 dark:bg-emerald-400 dark:hover:bg-emerald-500">
    <!-- Rotating dashed border effect using pseudo-element -->
    <span
      class="absolute inset-0 z-0 rounded-lg border border-dashed border-emerald-700
             opacity-0 transition-all duration-300 group-hover:rotate-45
             group-hover:opacity-100 dark:border-emerald-800">
    </span>
    <span class="relative z-10">Click me</span>
  </button>

  <!-- 20) Button with radial highlight on hover -->
  <button
    class="group relative inline-block rounded bg-red-500 px-5 py-2.5 text-neutral-50
           font-medium transition hover:shadow-lg active:scale-95
           dark:bg-red-400">
    <span
      class="absolute inset-0 z-0 bg-gradient-to-r from-transparent to-red-900
             opacity-0 transition-opacity duration-300 group-hover:opacity-20
             dark:to-red-700">
    </span>
    <span class="relative z-10">Click me</span>
  </button>

  <!-- 21) Metallic-like button with top glow -->
  <button
    class="group relative inline-flex items-center justify-center overflow-hidden
           rounded-md bg-[radial-gradient(circle_at_top,_#fefefe,_#d1d5db)]
           px-6 py-2 text-sm font-semibold text-neutral-800 shadow-md
           active:translate-y-[1px]
           dark:bg-[radial-gradient(circle_at_top,_#4b5563,_#1f2937)]
           dark:text-neutral-200">
    <span class="absolute inset-0 bg-neutral-200 opacity-0 transition-opacity duration-300 group-hover:opacity-10 dark:bg-neutral-700"></span>
    Click me
  </button>

  <!-- 22) Button with rotating text stroke on hover -->
  <button
    class="group relative inline-flex items-center justify-center rounded-md
           bg-amber-400 px-6 py-2 font-bold text-amber-900 transition
           hover:bg-amber-500 hover:text-amber-50 active:scale-95
           dark:bg-amber-500 dark:text-amber-900 dark:hover:bg-amber-600 dark:hover:text-amber-100">
    <span
      class="absolute inset-0 -rotate-0 border-2 border-amber-700 opacity-0
             transition-all duration-300 group-hover:rotate-6 group-hover:opacity-100
             dark:border-amber-800">
    </span>
    <span class="relative">Click me</span>
  </button>

</div>
`.trim();

  const DefaultButtonsCode =
    `<!-- Make sure Tailwind is properly set up (including dark mode). 
     Example: <html class="dark"> or <body class="dark"> to test dark theme. -->

<div class="flex flex-wrap items-center gap-2 p-4 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">

  <!-- Amber -->
  <button type="button"
    class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
    Amber
  </button>

  <!-- Blue -->
  <button type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Blue
  </button>

  <!-- Cyan -->
  <button type="button"
    class="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
    Cyan
  </button>

  <!-- Emerald -->
  <button type="button"
    class="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
    Emerald
  </button>

  <!-- Fuchsia -->
  <button type="button"
    class="text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:ring-fuchsia-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800">
    Fuchsia
  </button>

  <!-- Gray -->
  <button type="button"
    class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
    Gray
  </button>

  <!-- Green -->
  <button type="button"
    class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    Green
  </button>

  <!-- Indigo -->
  <button type="button"
    class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
    Indigo
  </button>

  <!-- Lime -->
  <button type="button"
    class="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">
    Lime
  </button>

  <!-- Neutral -->
  <button type="button"
    class="text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">
    Neutral
  </button>

  <!-- Orange -->
  <button type="button"
    class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
    Orange
  </button>

  <!-- Pink -->
  <button type="button"
    class="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
    Pink
  </button>

  <!-- Purple -->
  <button type="button"
    class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
    Purple
  </button>

  <!-- Red -->
  <button type="button"
    class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
    Red
  </button>

  <!-- Rose -->
  <button type="button"
    class="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">
    Rose
  </button>

  <!-- Sky -->
  <button type="button"
    class="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
    Sky
  </button>

  <!-- Slate -->
  <button type="button"
    class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
    Slate
  </button>

  <!-- Teal -->
  <button type="button"
    class="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
    Teal
  </button>

  <!-- Violet -->
  <button type="button"
    class="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
    Violet
  </button>

  <!-- Yellow -->
  <button type="button"
    class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 
           font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
    Yellow
  </button>

</div>
`.trim();

  const PillsButtonCode = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
  <div class="p-4 flex flex-wrap gap-2">
    <!-- 1. Default (Light background) -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium rounded-full border border-gray-300
             bg-white text-gray-900 hover:bg-gray-100 focus:ring-2 focus:outline-none
             focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
             dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    >
      Default
    </button>

    <!-- 2. Primary / Blue -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none
             focus:ring-blue-300 dark:focus:ring-blue-800"
    >
      Blue
    </button>

    <!-- 3. Red -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-red-600 hover:bg-red-700 focus:ring-2 focus:outline-none
             focus:ring-red-300 dark:focus:ring-red-900"
    >
      Red
    </button>

    <!-- 4. Green -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-green-600 hover:bg-green-700 focus:ring-2 focus:outline-none
             focus:ring-green-300 dark:focus:ring-green-800"
    >
      Green
    </button>

    <!-- 5. Yellow -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-gray-900 rounded-full
             bg-yellow-400 hover:bg-yellow-500 focus:ring-2 focus:outline-none
             focus:ring-yellow-300 dark:focus:ring-yellow-900"
    >
      Yellow
    </button>

    <!-- 6. Purple -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:outline-none
             focus:ring-purple-300 dark:focus:ring-purple-900"
    >
      Purple
    </button>

    <!-- 7. Pink -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-pink-500 hover:bg-pink-600 focus:ring-2 focus:outline-none
             focus:ring-pink-300 dark:focus:ring-pink-800"
    >
      Pink
    </button>

    <!-- 8. Orange -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:outline-none
             focus:ring-orange-300 dark:focus:ring-orange-800"
    >
      Orange
    </button>

    <!-- 9. Indigo -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:outline-none
             focus:ring-indigo-300 dark:focus:ring-indigo-900"
    >
      Indigo
    </button>

    <!-- 10. Teal -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:outline-none
             focus:ring-teal-300 dark:focus:ring-teal-800"
    >
      Teal
    </button>

    <!-- 11. Cyan -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-cyan-600 hover:bg-cyan-700 focus:ring-2 focus:outline-none
             focus:ring-cyan-300 dark:focus:ring-cyan-800"
    >
      Cyan
    </button>

    <!-- 12. Lime -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-gray-900 rounded-full
             bg-lime-400 hover:bg-lime-500 focus:ring-2 focus:outline-none
             focus:ring-lime-300 dark:focus:ring-lime-800"
    >
      Lime
    </button>

    <!-- 13. Amber -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-gray-900 rounded-full
             bg-amber-400 hover:bg-amber-500 focus:ring-2 focus:outline-none
             focus:ring-amber-300 dark:focus:ring-amber-800"
    >
      Amber
    </button>

    <!-- 14. Emerald -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-emerald-600 hover:bg-emerald-700 focus:ring-2 focus:outline-none
             focus:ring-emerald-300 dark:focus:ring-emerald-800"
    >
      Emerald
    </button>

    <!-- 15. Fuchsia -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-2 focus:outline-none
             focus:ring-fuchsia-300 dark:focus:ring-fuchsia-800"
    >
      Fuchsia
    </button>

    <!-- 16. Rose -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-rose-600 hover:bg-rose-700 focus:ring-2 focus:outline-none
             focus:ring-rose-300 dark:focus:ring-rose-800"
    >
      Rose
    </button>

    <!-- 17. Slate -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-slate-700 hover:bg-slate-800 focus:ring-2 focus:outline-none
             focus:ring-slate-300 dark:focus:ring-slate-900"
    >
      Slate
    </button>

    <!-- 18. Stone -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-stone-700 hover:bg-stone-800 focus:ring-2 focus:outline-none
             focus:ring-stone-300 dark:focus:ring-stone-900"
    >
      Stone
    </button>

    <!-- 19. Neutral -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-neutral-700 hover:bg-neutral-800 focus:ring-2 focus:outline-none
             focus:ring-neutral-300 dark:focus:ring-neutral-900"
    >
      Neutral
    </button>

    <!-- 20. Gray -->
    <button
      type="button"
      class="px-5 py-2.5 text-sm font-medium text-white rounded-full
             bg-gray-600 hover:bg-gray-700 focus:ring-2 focus:outline-none
             focus:ring-gray-300 dark:focus:ring-gray-800"
    >
      Gray
    </button>
  </div>
</body>
</html>
`.trim();

  const gradientMonoChromeCode = `<div class="flex flex-wrap gap-2 p-4">
  <button class="rounded-md border-1 border-transparent bg-gradient-to-br from-blue-500 to-red-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#3b82f6,_#ef4444)] hover:from-red-500 hover:to-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-blue-800">Button 1</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-green-500 to-lime-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#10b981,_#84cc16)] hover:from-lime-500 hover:to-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-green-800">Button 2</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-purple-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#a855f7,_#ec4899)] hover:from-pink-500 hover:to-purple-500 focus:ring-2 focus:ring-purple-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-pink-800">Button 3</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-orange-500 to-yellow-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#f97316,_#f59e0b)] hover:from-yellow-500 hover:to-orange-500 focus:ring-2 focus:ring-orange-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-yellow-800">Button 4</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-teal-500 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#14b8a6,_#06b6d4)] hover:from-cyan-500 hover:to-teal-500 focus:ring-2 focus:ring-cyan-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-teal-800">Button 5</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-rose-500 to-fuchsia-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#f43f5e,_#d946ef)] hover:from-fuchsia-500 hover:to-rose-500 focus:ring-2 focus:ring-rose-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-fuchsia-800">Button 6</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-gray-500 to-slate-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#737373,_#64748b)] hover:from-slate-500 hover:to-gray-500 focus:ring-2 focus:ring-gray-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-slate-800">Button 7</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-sky-500 to-blue-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#0ea5e9,_#1d4ed8)] hover:from-blue-700 hover:to-sky-500 focus:ring-2 focus:ring-sky-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-blue-900">Button 8</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-zinc-500 to-neutral-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#71717a,_#737373)] hover:from-neutral-500 hover:to-zinc-500 focus:ring-2 focus:ring-zinc-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-neutral-800">Button 9</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-blue-700 to-indigo-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#1d4ed8,_#4c1d95)] hover:from-indigo-700 hover:to-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-indigo-900">Button 10</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-pink-500 to-red-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#ec4899,_#ef4444)] hover:from-red-500 hover:to-pink-500 focus:ring-2 focus:ring-pink-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-red-800">Button 11</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-emerald-500 to-lime-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#10b981,_#84cc16)] hover:from-lime-500 hover:to-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-lime-800">Button 12</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-orange-600 to-yellow-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#ea580c,_#f59e0b)] hover:from-yellow-500 hover:to-orange-600 focus:ring-2 focus:ring-orange-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-yellow-800">Button 13</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-cyan-600 to-teal-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#0891b2,_#14b8a6)] hover:from-teal-500 hover:to-cyan-600 focus:ring-2 focus:ring-cyan-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-teal-800">Button 14</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-rose-600 to-pink-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#e11d48,_#ec4899)] hover:from-pink-500 hover:to-rose-600 focus:ring-2 focus:ring-rose-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-pink-800">Button 15</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-gray-600 to-slate-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#52525b,_#374151)] hover:from-slate-700 hover:to-gray-600 focus:ring-2 focus:ring-gray-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-slate-800">Button 16</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-fuchsia-600 to-rose-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#c026d3,_#f43f5e)] hover:from-rose-500 hover:to-fuchsia-600 focus:ring-2 focus:ring-fuchsia-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-rose-800">Button 17</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-indigo-600 to-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#4f46e5,_#3b82f6)] hover:from-blue-500 hover:to-indigo-600 focus:ring-2 focus:ring-indigo-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-blue-900">Button 18</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-lime-600 to-green-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#65a30d,_#10b981)] hover:from-green-500 hover:to-lime-600 focus:ring-2 focus:ring-lime-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-green-800">Button 19</button>
  <button class="rounded-md border-2 border-transparent bg-gradient-to-br from-red-600 to-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 [border-image-slice:1] [border-image-source:_linear-gradient(to_bottom_right,_#dc2626,_#2563eb)] hover:from-blue-600 hover:to-red-600 focus:ring-2 focus:ring-red-300 focus:outline-none active:scale-95 active:border-[1px] dark:focus:ring-blue-900">Button 20</button>
</div>
`.trim();

  const gradientDuotoneCode =
    `<div class="flex flex-wrap gap-2 p-4 bg-white dark:bg-gray-900">
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all active:scale-95">Button 1</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 transition-all active:scale-95">Button 2</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-all active:scale-95">Button 3</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 transition-all active:scale-95">Button 4</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-orange-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-800 transition-all active:scale-95">Button 5</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-lime-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800 transition-all active:scale-95">Button 6</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-yellow-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 transition-all active:scale-95">Button 7</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-violet-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-violet-300 dark:focus:ring-violet-800 transition-all active:scale-95">Button 8</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 transition-all active:scale-95">Button 9</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 transition-all active:scale-95">Button 10</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-800 transition-all active:scale-95">Button 11</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-lime-500 to-teal-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800 transition-all active:scale-95">Button 12</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-green-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 transition-all active:scale-95">Button 13</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-rose-500 to-pink-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-rose-300 dark:focus:ring-rose-800 transition-all active:scale-95">Button 14</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-500 to-slate-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800 transition-all active:scale-95">Button 15</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 transition-all active:scale-95">Button 16</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-yellow-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-800 transition-all active:scale-95">Button 17</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-blue-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 transition-all active:scale-95">Button 18</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-indigo-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition-all active:scale-95">Button 19</button>
<button type="button" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-orange-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 transition-all active:scale-95">Button 20</button>
</div>
`.trim();

  const gradientOutlineCode = `<div class="flex flex-wrap gap-3 p-4">
  <button class="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-500 to-blue-500 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-blue-500 group-hover:to-red-500 hover:shadow-lg hover:shadow-blue-500/50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-red-800"><span class="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">Red to Blue</span></button>
  <button class="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-500 to-lime-500 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-lime-500 group-hover:to-green-500 hover:shadow-lg hover:shadow-lime-500/50 focus:ring-4 focus:ring-green-300 focus:outline-none dark:focus:ring-lime-800"><span class="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">Green to Lime</span></button>
  <button class="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-pink-500 group-hover:to-purple-600 hover:shadow-lg hover:shadow-pink-500/50 focus:ring-4 focus:ring-purple-300 focus:outline-none dark:focus:ring-pink-800"><span class="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">Purple to Pink</span></button>
  <button class="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-yellow-500 group-hover:to-orange-500 hover:shadow-lg hover:shadow-yellow-500/50 focus:ring-4 focus:ring-orange-300 focus:outline-none dark:focus:ring-yellow-800"><span class="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">Orange to Yellow</span></button>
  <button class="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-cyan-500 group-hover:to-teal-500 hover:shadow-lg hover:shadow-cyan-500/50 focus:ring-4 focus:ring-cyan-300 focus:outline-none dark:focus:ring-teal-800"><span class="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">Teal to Cyan</span></button>
  <button class="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-rose-500 to-fuchsia-600 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-fuchsia-600 group-hover:to-rose-500 hover:shadow-lg hover:shadow-fuchsia-500/50 focus:ring-4 focus:ring-rose-300 focus:outline-none dark:focus:ring-fuchsia-800"><span class="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">Rose to Fuchsia</span></button>
  <button class="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-blue-600 group-hover:to-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 focus:ring-4 focus:ring-indigo-300 focus:outline-none dark:focus:ring-blue-800"><span class="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">Indigo to Blue</span></button>
  <button class="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-gray-600 to-slate-800 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-slate-800 group-hover:to-gray-600 hover:shadow-lg hover:shadow-gray-500/50 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-slate-800"><span class="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">Gray to Slate</span></button>
  <button class="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-sky-500 to-blue-800 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-blue-800 group-hover:to-sky-500 hover:shadow-lg hover:shadow-blue-500/50 focus:ring-4 focus:ring-sky-300 focus:outline-none dark:focus:ring-blue-900"><span class="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">Sky to Blue</span></button>
  <button class="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-600 to-violet-600 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-violet-600 group-hover:to-red-600 hover:shadow-lg hover:shadow-violet-500/50 focus:ring-4 focus:ring-red-300 focus:outline-none dark:focus:ring-violet-900"><span class="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">Red to Violet</span></button>
  <button class="group relative me-2 mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-600 to-yellow-400 p-0.5 text-sm font-semibold tracking-wide dark:text-white text-black hover:text-white uppercase group-hover:from-yellow-400 group-hover:to-pink-600 hover:shadow-lg hover:shadow-yellow-400/50 focus:ring-4 focus:ring-pink-300 focus:outline-none dark:focus:ring-yellow-800"><span class="relative rounded-md bg-white px-6 py-3 transition-all duration-100 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">Pink to Yellow</span></button>
</div>
`;

  const coloredShadowCode = `<div class="flex flex-wrap gap-2 p-4 bg-white dark:bg-gray-900">
  <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Blue</button>
  <button type="button" class="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Green</button>
  <button type="button" class="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Red</button>
  <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple</button>
  <button type="button" class="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pink</button>
  <button type="button" class="text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Yellow</button>
  <button type="button" class="text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Teal</button>
  <button type="button" class="text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cyan</button>
  <button type="button" class="text-white bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-amber-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Amber</button>
  <button type="button" class="text-white bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Lime</button>
  <button type="button" class="text-white bg-gradient-to-r from-fuchsia-500 via-fuchsia-600 to-fuchsia-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-fuchsia-300 dark:focus:ring-fuchsia-800 shadow-lg shadow-fuchsia-500/50 dark:shadow-fuchsia-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Fuchsia</button>
  <button type="button" class="text-white bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 shadow-lg shadow-rose-500/50 dark:shadow-rose-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Rose</button>
  <button type="button" class="text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 shadow-lg shadow-sky-500/50 dark:shadow-sky-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sky</button>
  <button type="button" class="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Indigo</button>
  <button type="button" class="text-white bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-violet-300 dark:focus:ring-violet-800 shadow-lg shadow-violet-500/50 dark:shadow-violet-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Violet</button>
  <button type="button" class="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Orange</button>
  <button type="button" class="text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-emerald-800 shadow-lg shadow-emerald-500/50 dark:shadow-emerald-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Emerald</button>
  <button type="button" class="text-white bg-gradient-to-r from-stone-500 via-stone-600 to-stone-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-stone-300 dark:focus:ring-stone-800 shadow-lg shadow-stone-500/50 dark:shadow-stone-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Stone</button>
  <button type="button" class="text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-lg shadow-slate-500/50 dark:shadow-slate-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Slate</button>
  <button type="button" class="text-white bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:focus:ring-zinc-800 shadow-lg shadow-zinc-500/50 dark:shadow-zinc-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Zinc</button>
</div>
`;

  const HoverButtonCode = `<div class="flex flex-wrap gap-4 justify-center items-center p-4 bg-white dark:bg-gray-900">

  <button class="group relative h-12 overflow-hidden rounded-md bg-gray-800 dark:bg-gray-200 px-8 py-2 text-white dark:text-gray-800"><span class="relative z-10">Hover Me</span><span class="absolute inset-0 overflow-hidden rounded-md"><span class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-red-500 transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span></span></button>
  <button class="group relative h-12 overflow-hidden rounded-md bg-gray-800 dark:bg-gray-200 px-8 py-2 text-white dark:text-gray-800"><span class="relative z-10">Hover Me</span><span class="absolute inset-0 overflow-hidden rounded-md"><span class="absolute right-0 aspect-square w-full origin-center translate-x-full rounded-full bg-green-500 transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span></span></button>
  <button class="group relative h-12 overflow-hidden rounded-md bg-gray-800 dark:bg-gray-200 px-8 py-2 text-white dark:text-gray-800"><span class="relative z-10">Hover Me</span><span class="absolute inset-0 overflow-hidden rounded-md"><span class="absolute top-0 aspect-square w-full origin-center -translate-y-full rounded-full bg-purple-500 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-150"></span></span></button>
  <button class="group relative h-12 overflow-hidden rounded-md bg-gray-800 dark:bg-gray-200 px-8 py-2 text-white dark:text-gray-800"><span class="relative z-10">Hover Me</span><span class="absolute inset-0 overflow-hidden rounded-md"><span class="absolute bottom-0 aspect-square w-full origin-center translate-y-full rounded-full bg-orange-500 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-150"></span></span></button>
  <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-900 px-6 font-medium text-neutral-200 transition-all duration-300 hover:scale-105 dark:bg-neutral-100 dark:text-neutral-900"><span class="relative z-10">Hover me</span><div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] transition-all duration-700 ease-in-out group-hover:[transform:skew(-12deg)_translateX(100%)]"><div class="relative h-full w-10 bg-white/20 dark:bg-black/20"></div></div></button>
  <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-900 px-6 font-medium text-neutral-200 transition-all duration-500 hover:scale-105 dark:bg-neutral-100 dark:text-neutral-900"><div class="translate-x-0 opacity-100 transition-all duration-500 group-hover:-translate-x-[150%] group-hover:opacity-0">Hover me</div><div class="absolute translate-x-[150%] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 flex items-center gap-2"><span class="text-sm font-medium">Go</span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
  <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-300 bg-transparent px-6 font-medium text-neutral-700 transition-all duration-300 shadow-[5px_5px_0px_#525252] hover:shadow-[0px_0px_0px_#525252] hover:translate-x-[3px] hover:translate-y-[3px] dark:border-neutral-600 dark:text-neutral-300 dark:shadow-[5px_5px_0px_#333] dark:hover:shadow-[0px_0px_0px_#333]">Hover me</button>
  <a href="#_" class="relative inline-block text-lg group"><span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-all duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white dark:text-gray-200 dark:border-gray-200"><span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 transition-all duration-300"></span><span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 dark:bg-gray-100 group-hover:-rotate-180 ease"></span><span class="relative z-10 dark:hover:text-gray-800">Button Text</span></span><span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-300 ease-linear bg-gray-900 dark:bg-gray-100 dark:hover:text-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span></a>
  <a href="#_" class="relative inline-flex items-center justify-center px-6 py-2.5 font-medium rounded overflow-hidden group transition-all ease-out duration-300 bg-green-500 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 hover:ring-2 hover:ring-offset-2 hover:ring-green-400 dark:bg-green-600 dark:hover:from-green-600 dark:hover:to-green-500 dark:hover:ring-green-500"><span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white/20 rotate-12 group-hover:-translate-x-40 ease-out"></span><span class="relative z-10">Button Text</span></a>
  <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-semibold text-green-700 transition duration-300 ease-out rounded-full shadow-lg group hover:ring-2 hover:ring-green-400 dark:text-green-200 dark:hover:ring-green-300"><span class="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-600 via-green-500 to-yellow-400"></span><span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-yellow-500 rounded-full opacity-40 group-hover:rotate-90 ease-out"></span><span class="relative text-white">Click Me</span></a>
  <a href="#_" class="relative px-6 py-3 overflow-hidden font-medium text-green-700 bg-green-100 border border-green-300 rounded-lg shadow-inner group dark:text-green-300 dark:bg-green-900 dark:border-green-700">
    
    <!-- Top Border Animation -->
    <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-green-700 group-hover:w-full ease-out dark:border-green-400"></span>
    
    <!-- Bottom Border Animation -->
    <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-green-700 group-hover:w-full ease-out dark:border-green-400"></span>
    
    <!-- Top Fill Animation -->
    <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-700 group-hover:h-full ease-in-out dark:bg-green-400"></span>
    
    <!-- Bottom Fill Animation -->
    <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-green-700 group-hover:h-full ease-in-out dark:bg-green-400"></span>
    
    <!-- Full Background Fill -->
    <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-800 opacity-0 group-hover:opacity-100 dark:bg-green-500"></span>
    
    <!-- Button Text -->
    <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease-out">Click Me</span>

</a>


<a href="#_" class="relative inline-block px-5 py-3 font-medium group transition-all duration-300 ease-out">
    <!-- Background Offset Layer -->
    <span class="absolute inset-0 w-full h-full transition-transform duration-200 ease-out transform translate-x-1 translate-y-1 bg-green-700 group-hover:-translate-x-0 group-hover:-translate-y-0 dark:bg-green-500"></span>

    <!-- Main Background & Border -->
    <span class="absolute inset-0 w-full h-full bg-white border-2 border-green-700 group-hover:bg-green-700 dark:bg-gray-900 dark:border-green-400 dark:group-hover:bg-green-400"></span>

    <!-- Button Text -->
    <span class="relative text-green-700 group-hover:text-white dark:text-green-300 dark:group-hover:text-gray-900">Click Me</span>
</a>
</div>
`;

  const SizeButtonCode = `<div class="flex flex-wrap gap-4 justify-center items-center p-4 bg-white dark:bg-gray-900">
  <!-- Extra Small (xs) -->
  <button class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 text-center dark:focus:ring-blue-800">
    Extra Small
  </button>

  <!-- Small (sm) -->
  <button class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:focus:ring-blue-800">
    Small
  </button>

  <!-- Medium (md) -->
  <button class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2 text-center dark:focus:ring-blue-800">
    Medium
  </button>

  <!-- Large (lg) -->
  <button class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3 text-center dark:focus:ring-blue-800">
    Large
  </button>

  <!-- Extra Large (xl) -->
  <button class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-7 py-4 text-center dark:focus:ring-blue-800">
    Extra Large
  </button>

</div>
`;

  const ButtonWithIconsCode = ` <div class="flex flex-wrap gap-4 justify-center items-center p-4 bg-white dark:bg-gray-900">

   <button class="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:focus:ring-blue-800">
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z"/>
    </svg>
    Info
  </button>

   <button class="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:focus:ring-blue-800">
    Download
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 3h2v7h5l-6 6-6-6h5V3z"/>
    </svg>
  </button>

   <button class="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center dark:focus:ring-blue-800">
    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z"/>
    </svg>
  </button>

   <button class="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3 text-center dark:focus:ring-blue-800">
    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z"/>
    </svg>
    Large Button
  </button>

</div>`;

  const loadinButtonCode = `<div class="flex flex-wrap gap-4 justify-center items-center p-4 bg-white dark:bg-gray-900">

  <!-- Button with Left Loading Spinner -->
  <button class="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">
    <svg class="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
    Loading...
  </button>

  <!-- Button with Right Loading Spinner -->
  <button class="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">
    Processing...
    <svg class="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
  </button>

  <!-- Full-Width Button with Centered Loading -->
  <button class="flex w-full justify-center items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">
    <svg class="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
    Please Wait...
  </button>

</div>
`;

  const DisabledButtonCode = `<div class="flex flex-wrap gap-4 justify-center items-center p-4 bg-white dark:bg-gray-900">

  <!-- Solid Disabled Button -->
  <button disabled class="text-white bg-blue-500 cursor-not-allowed opacity-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    Disabled
  </button>

  <!-- Outline Disabled Button -->
  <button disabled class="text-blue-500 border border-blue-500 cursor-not-allowed opacity-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-400 dark:text-blue-400">
    Disabled Outline
  </button>

  <!-- Ghost Disabled Button -->
  <button disabled class="text-blue-500 cursor-not-allowed opacity-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-blue-400">
    Disabled Ghost
  </button>

  <!-- Disabled Icon Button -->
  <button disabled class="flex items-center gap-2 text-white bg-blue-500 cursor-not-allowed opacity-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z"/>
    </svg>
    Disabled Icon
  </button>

  <!-- Disabled Full-Width Button -->
  <button disabled class="w-full text-white bg-blue-500 cursor-not-allowed opacity-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    Full Width Disabled
  </button>

</div>
`;

  const StyleishSquareButtonCode = `<div class="m-2 flex flex-wrap gap-6 justify-center items-center p-5">
      <button
        href="#"
        class="cyber-button-blue group hover:shadow-neon relative overflow-hidden px-8 py-4 font-bold text-white transition-all duration-300"
      >
        <span class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-80"></span>
        <span class="relative z-10 flex items-center gap-3">
          <svg
            class="h-5 w-5"
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
        <span class="absolute bottom-0 left-0 h-0.5 w-full bg-cyan-300 transition-all duration-500 group-hover:h-1"></span>
      </button>

      <button
        href="#"
        class="cyber-button-pink hover:shadow-neon-pink relative overflow-hidden border-2 border-pink-500 px-8 py-4 font-bold text-white transition-all duration-300"
      >
        <span class="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-20"></span>
        <span class="relative z-10 flex items-center gap-3">
          <svg
            class="h-5 w-5"
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
        <span class="absolute bottom-0 left-0 h-0.5 w-full bg-pink-300 transition-all duration-500 group-hover:h-1"></span>
      </button>
    </div>`;

  return (
    <>
      <div className="w-full px-2 md:px-4 py-3 md:py-5">
        <SectionHeading
          id="main-title"
          heading={"Tailwind CSS Buttons"}
          description={
            "Enhance your UI with our beautifully crafted Tailwind CSS buttons. Whether you need solid, outline, gradient, or interactive buttons, our collection is fully responsive and optimized for modern web applications optimized for Dark and Light."
          }
        />

        <p className="text-base text-gray-900 dark:text-gray-100 pb-3">
          Discover our extensive library featuring over 150 unique button styles
          and nearly 200 variants designed to elevate your web interface. Our
          diverse collection covers default, pill, gradient, outline, hover, and
          interactive buttons all optimized for both dark and light themes to
          enhance user experience and SEO performance.
        </p>

        <h2 className={CommonStyle.docHeading} id="default-buttons">
          Default Buttons
        </h2>
        <p className="mb-4 pl-2 text-gray-900 dark:text-gray-100">
          Our default buttons provide a clean and versatile design that fits any
          modern web interface. They are built for responsiveness and work
          seamlessly on both dark and light themes.
        </p>
        <FlowbiteTailwindAlwaysCode code={DefaultButtonsCode}>
          <DefaultButtons />
        </FlowbiteTailwindAlwaysCode>

        <h2 className={CommonStyle.docHeading} id="pills-buttons">
          Pills Buttons
        </h2>
        <p className="mb-4 pl-2 text-gray-900 dark:text-gray-100">
          Pills buttons feature a smooth, rounded design that adds a modern
          touch to your UI. Their compact shape and responsive styling make them
          perfect for any layout.
        </p>
        <FlowbiteTailwindAlwaysCode code={PillsButtonCode}>
          <PillsButtons />
        </FlowbiteTailwindAlwaysCode>

        <Adsense2 />
        <h2 className={CommonStyle.docHeading} id="gradient-monochrome">
          Gradient MonoChrome
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100 pl-2">
          Experience sleek monochrome gradients that deliver a subtle yet
          striking visual impact. These buttons blend smooth transitions with
          minimalist design for a professional look.
        </p>
        <FlowbiteTailwindAlwaysCode code={gradientMonoChromeCode}>
          <GradientMonoChrome />
        </FlowbiteTailwindAlwaysCode>

        <h2 className={CommonStyle.docHeading} id="gradient-duotone">
          Gradient DuoTone
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100 pl-2">
          DuoTone gradient buttons deliver a dynamic blend of two colors that
          shift beautifully on hover, offering an engaging and interactive user
          experience.
        </p>
        <FlowbiteTailwindAlwaysCode code={gradientDuotoneCode}>
          <GradientDuoTOne />
        </FlowbiteTailwindAlwaysCode>

        <Adsense2 />
        <h2 className={CommonStyle.docHeading} id="gradient-outline">
          Gradient Outline
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100 pl-2">
          These gradient outline buttons feature a striking border effect that
          transforms on hover, highlighting the button’s interactive nature
          while maintaining a modern aesthetic.
        </p>
        <FlowbiteTailwindAlwaysCode code={gradientOutlineCode}>
          <GradientOutlineButtons />
        </FlowbiteTailwindAlwaysCode>

        <h2 className={CommonStyle.docHeading} id="colored-shadow">
          Colored-Shadow
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100 pl-2">
          Add depth to your design with colored-shadow buttons that cast vibrant
          shadows. They create a visually striking effect and bring an extra
          dimension to your interface.
        </p>
        <FlowbiteTailwindAlwaysCode code={coloredShadowCode}>
          <ColorShadow />
        </FlowbiteTailwindAlwaysCode>

        <Adsense2 />
        <h2 className={CommonStyle.docHeading} id="click-me-effects">
          Click Me Effects
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100 pl-2">
          Engage your users with interactive click effects that provide instant
          visual feedback. These buttons deliver smooth animations to enhance
          the overall user experience.
        </p>
        <FlowbiteTailwindAlwaysCode code={ClickMeButtonCode}>
          <ClickMeButtons />
        </FlowbiteTailwindAlwaysCode>

        <h2 className={CommonStyle.docHeading} id="hover-effects">
          Hover Effects
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100 pl-2">
          Our hover effect buttons come to life on mouseover, offering smooth
          transitions and captivating animations that draw attention and boost
          interactivity.
        </p>
        <FlowbiteTailwindAlwaysCode code={HoverButtonCode}>
          <HoverButtons />
        </FlowbiteTailwindAlwaysCode>

        <Adsense3 />
        <h2 className={CommonStyle.docHeading} id="social-buttons">
          Social Buttons
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100 pl-2">
          Designed for seamless integration with social platforms, these buttons
          combine stylish icons and responsive layouts to encourage sharing and
          connectivity.
        </p>
        <FlowbiteTailwindAlwaysCode code={SocialButtonCode}>
          <SocialButtons />
        </FlowbiteTailwindAlwaysCode>

        <h2 className={CommonStyle.docHeading} id="size-buttons">
          Size Buttons
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100 pl-2">
          Choose from various button sizes to perfectly match your design
          requirements. These buttons maintain clarity and accessibility across
          all devices.
        </p>
        <FlowbiteTailwindAlwaysCode code={SizeButtonCode}>
          <SizeButton />
        </FlowbiteTailwindAlwaysCode>
        <Adsense3 />
        <h2 className={CommonStyle.docHeading} id="button-with-icons">
          Button With Icons
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100 pl-2">
          Enhance functionality with buttons that integrate icons alongside
          text. This design improves navigation and provides clear visual cues.
        </p>
        <FlowbiteTailwindAlwaysCode code={ButtonWithIconsCode}>
          <ButtonWithIcons />
        </FlowbiteTailwindAlwaysCode>

        <h2 className={CommonStyle.docHeading} id="loading-button">
          Loading Button
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100 pl-2">
          Loading buttons offer animated feedback during asynchronous
          operations, keeping users informed and engaged while content is being
          processed.
        </p>
        <FlowbiteTailwindAlwaysCode code={loadinButtonCode}>
          <LoadingButton />
        </FlowbiteTailwindAlwaysCode>
        <Adsense3 />
        <h2 className={CommonStyle.docHeading} id="disabled-button">
          Disabled Button
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100 pl-2">
          Disabled buttons are styled to clearly indicate inactivity, using
          reduced opacity and visual cues that maintain overall design
          consistency.
        </p>
        <FlowbiteTailwindAlwaysCode code={DisabledButtonCode}>
          <DisabledButton />
        </FlowbiteTailwindAlwaysCode>

        <h2 className={CommonStyle.docHeading} id="stylish-square-button">
          Stylish Square Button
        </h2>
        <p className="mb-4 text-gray-900 dark:text-gray-100 pl-2">
          This is Stylish Square Button with SVG Icon in it.
        </p>

        <FlowbiteTailwindAlwaysCode code={StyleishSquareButtonCode}>
          <StylishSqaureButton />
        </FlowbiteTailwindAlwaysCode>

        <NextPrevNavigation currentPath={"/docs/button"} />
      </div>
    </>
  );
};

export default page;

export const metadata = {
  title: "150+ Pure Tailwind CSS Button - Madhuranjan UI",
  description:
    "Explore 150+ beautifully crafted Tailwind CSS button variants. Find solid, outline, gradient, hover effects, and social buttons optimized for both Dark and Light themes. Fully responsive and ready to use.",
  keywords: [
    "Tailwind CSS Buttons",
    "CSS Buttons",
    "Button Variants",
    "Tailwind Buttons",
    "Gradient Buttons",
    "Hover Effect Buttons",
    "Social Buttons",
    "Animated Buttons",
    "Dark Mode Buttons",
    "Light Mode Buttons",
  ],
  openGraph: {
    title: "150+ Pure Tailwind CSS Button (Copy & Paste) - Madhuranjan UI",
    description:
      "Explore 150+ Tailwind CSS button designs, including solid, outline, gradient, and hover effects. Perfect for Light and Dark themes. Pure Free Tailwind CSS Button Component Library",
    url: "https://madhuranjanui.com/docs/button",
    type: "website",
  },
};
