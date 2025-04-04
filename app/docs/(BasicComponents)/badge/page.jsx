import MainContainer from "@/components/MainContainer";
import SectionHeading from "@/components/SectionHeading";
import React from "react";
import {
  BadgeCollection,
  BorderBadges,
  ButtonWithBade,
  ClosableBadge,
  IconBadges,
  IconOnlyBadges,
  LinkBadges,
  NotificationBadges,
  OnlyIconBasges,
  PillBadges,
} from "./MyBadge";
 import NextPrevNavigation from "@/components/Nextprev";
import Adsense3 from "@/Adsense/Adsense3";
import Adsense4 from "@/Adsense/Adsense4";

const page = () => {
  const SimpleButtonCode =
    ` <div class="flex flex-wrap gap-4 justify-center items-center bg-gray-50 p-6 dark:bg-gray-900">
        
        <!-- {/* 1️⃣ Solid Badges */} -->
        <span class="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-lg">Primary</span>
        <span class="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-lg">Danger</span>
        <span class="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-lg">Success</span>
        <span class="px-3 py-1 text-sm font-semibold text-white bg-yellow-500 rounded-lg">Warning</span>
  
        <!-- {/* 2️⃣ Outline Badges */} -->
        <span class="px-3 py-1 text-sm font-semibold border border-blue-500 text-blue-500 rounded-lg">Info</span>
        <span class="px-3 py-1 text-sm font-semibold border border-gray-500 text-gray-500 rounded-lg">Neutral</span>
  
        <!-- {/* 3️⃣ Gradient Badges */} -->
        <span class="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">Gradient</span>
        <span class="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg">Ocean</span>
  
        <!-- {/* 4️⃣ Rounded & Soft Badges */} -->
        <span class="px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-800 rounded-full dark:bg-gray-800 dark:text-gray-200">Soft Gray</span>
        <span class="px-3 py-1 text-sm font-semibold bg-green-100 text-green-700 rounded-full dark:bg-green-800 dark:text-green-200">Soft Success</span>
  
      </div>`.trim();

  const BorderBadgeCode =
    `   <div class="flex flex-wrap gap-4 justify-center items-center bg-gray-50 p-6 dark:bg-gray-900">
        
        <!-- {/* 1️⃣ Simple Border Badges with Light Background */} -->
        <span class="px-3 py-1 text-sm font-semibold border border-blue-500 text-blue-500 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-lg">Info</span>
        <span class="px-3 py-1 text-sm font-semibold border border-red-500 text-red-500 dark:text-red-200 bg-red-100 dark:bg-red-900 rounded-lg">Danger</span>
        <span class="px-3 py-1 text-sm font-semibold border border-green-500 text-green-500  dark:text-green-200 bg-green-100 dark:bg-green-900 rounded-lg">Success</span>
        <span class="px-3 py-1 text-sm font-semibold border border-yellow-500 text-yellow-500 dark:text-yellow-200 bg-yellow-100 dark:bg-yellow-900 rounded-lg">Warning</span>
  
        <!-- {/* 2️⃣ Dashed Border Badges */} -->
        <span class="px-3 py-1 text-sm font-semibold border-2 border-blue-500 text-blue-500 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-lg border-dashed">Dashed Info</span>
        <span class="px-3 py-1 text-sm font-semibold border-2 border-gray-500 text-gray-500 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-lg border-dashed">Dashed Neutral</span>
  
        <!-- {/* 3️⃣ Double Border Badges */} -->
        <span class="px-3 py-1 text-sm font-semibold border-4 border-purple-500 text-purple-500 bg-purple-100 dark:bg-purple-900 rounded-lg dark:text-purple-200">Double Border</span>
        <span class="px-3 py-1 text-sm font-semibold border-4 border-teal-500 text-teal-500 dark:text-teal-200 bg-teal-100 dark:bg-teal-900 rounded-lg">Double Success</span>
  
        <!-- {/* 4️⃣ Rounded & Thick Border Badges */} -->
        <span class="px-3 py-1 text-sm font-semibold border-2 border-gray-700 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full">Rounded</span>
        <span class="px-3 py-1 text-sm font-semibold border-2 border-green-700 text-green-700 dark:text-gray-200 bg-green-100 dark:bg-green-900 rounded-full">Thick Success</span>
  
      </div>`.trim();

  const LinkBadge =
    `   <div class="flex flex-wrap items-center justify-center gap-4 bg-gray-50 p-6 dark:bg-gray-900">
  <!-- {/* 🔹 1️⃣ Primary Link Badges */} -->
  <a href="#" class="rounded-lg border border-blue-500 bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-200 hover:text-blue-700 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-200"> Info </a>
  <a href="#" class="rounded-lg border border-red-500 bg-red-100 px-4 py-1 text-sm font-semibold text-red-600 transition-all hover:bg-red-200 hover:text-red-700 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-800 dark:hover:text-red-200"> Danger </a>
  <a href="#" class="rounded-lg border border-green-500 bg-green-100 px-4 py-1 text-sm font-semibold text-green-600 transition-all hover:bg-green-200 hover:text-green-700 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800 dark:hover:text-green-200"> Success </a>
  <a href="#" class="rounded-lg border border-yellow-500 bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-600 transition-all hover:bg-yellow-200 hover:text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-200"> Warning </a>

  <!-- {/* 🔹 2️⃣ Secondary Link Badges */} -->
  <a href="#" class="rounded-lg border border-indigo-500 bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-600 transition-all hover:bg-indigo-200 hover:text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-200"> Indigo </a>
  <a href="#" class="rounded-lg border border-purple-500 bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-600 transition-all hover:bg-purple-200 hover:text-purple-700 dark:bg-purple-900 dark:text-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-200"> Purple </a>
  <a href="#" class="rounded-lg border dark:hover:text-pink-200 border-pink-500 bg-pink-100 px-4 py-1 text-sm font-semibold text-pink-600 transition-all hover:bg-pink-200 hover:text-pink-700 dark:bg-pink-900 dark:text-pink-200 dark:hover:bg-pink-800"> Pink </a>

  <!-- {/* 🔹 3️⃣ Special Styled Link Badges */} -->
  <a href="#" class="rounded-lg border border-gray-500 bg-gray-100 px-4 py-1 text-sm font-semibold text-gray-600 transition-all hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200"> Neutral </a>
  <a href="#" class="rounded-lg border border-teal-500 bg-teal-100 px-4 py-1 text-sm font-semibold text-teal-600 transition-all hover:bg-teal-200 hover:text-teal-700 dark:bg-teal-900 dark:text-teal-200 dark:hover:bg-teal-800 dark:hover:text-teal-200"> Teal </a>
  <a href="#" class="rounded-lg border border-orange-500 bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600 transition-all hover:bg-orange-200 hover:text-orange-700 dark:bg-orange-900 dark:text-orange-200 dark:hover:bg-orange-800 dark:hover:text-orange-200"> Orange </a>
</div>
`.trim();

  const PillBadgeCode =
    `  <div class="flex flex-wrap gap-4  p-10 justify-center items-center bg-gray-50 dark:bg-gray-900">
      <!-- {/* 🔹 1️⃣ Solid Pill Badges */} -->
      <span class="px-4 py-1 text-sm font-semibold text-blue-700 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-full">
        Info
      </span>
      <span class="px-4 py-1 text-sm font-semibold text-red-700 dark:text-red-200 bg-red-100 dark:bg-red-900 rounded-full">
        Danger
      </span>
      <span class="px-4 py-1 text-sm font-semibold text-green-700 dark:text-green-200 bg-green-100 dark:bg-green-900 rounded-full">
        Success
      </span>
      <span class="px-4 py-1 text-sm font-semibold text-yellow-700 dark:text-yellow-200 bg-yellow-100 dark:bg-yellow-900 rounded-full">
        Warning
      </span>

      <!-- {/* 🔹 2️⃣ Additional Colors */} -->
      <span class="px-4 py-1 text-sm font-semibold text-indigo-700 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900 rounded-full">
        Indigo
      </span>
      <span class="px-4 py-1 text-sm font-semibold text-purple-700 dark:text-purple-200 bg-purple-100 dark:bg-purple-900 rounded-full">
        Purple
      </span>
      <span class="px-4 py-1 text-sm font-semibold text-pink-700 dark:text-pink-200 bg-pink-100 dark:bg-pink-900 rounded-full">
        Pink
      </span>
      <span class="px-4 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full">
        Neutral
      </span>

      <!-- {/* 🔹 3️⃣ Unique Soft Colors */} -->
      <span class="px-4 py-1 text-sm font-semibold text-teal-700 dark:text-teal-200 bg-teal-100 dark:bg-teal-900 rounded-full">
        Teal
      </span>
      <span class="px-4 py-1 text-sm font-semibold text-orange-700 dark:text-orange-200 bg-orange-100 dark:bg-orange-900 rounded-full">
        Orange
      </span>
    </div>`.trim();

  const NNotificationBadges =
    ` <div class="flex flex-wrap items-center justify-center gap-6 bg-gray-50 p-6 dark:bg-gray-900">
  <!-- {/* 1️⃣ WhatsApp Message Badge */} -->
  <div class="relative">
    <div class="flex h-14 w-14 items-center justify-center rounded-lg bg-green-500">
      <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9 9m0 0l9-9m-9 9V3"></path>
      </svg>
    </div>
    <span class="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white dark:border-gray-900"> 4 </span>
  </div>

  <!-- {/* 2️⃣ Facebook Friend Request Badge */} -->
  <div class="relative">
    <div class="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-600">
      <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V5a4 4 0 00-8 0v6M20 21v-6a4 4 0 00-8 0v6"></path>
      </svg>
    </div>
    <span class="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white dark:border-gray-900"> 12 </span>
  </div>

  <!-- {/* 3️⃣ Instagram Likes Badge */} -->
  <div class="relative">
    <div class="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-purple-500">
      <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C7.5 16.5 4 13.5 4 10a4 4 0 118 0 4 4 0 118 0c0 3.5-3.5 6.5-8 11z"></path>
      </svg>
    </div>
    <span class="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white dark:border-gray-900"> 99+ </span>
  </div>

  <!-- {/* 4️⃣ Twitter Notifications Badge */} -->
  <div class="relative">
    <div class="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-500">
      <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4m0 0a7 7 0 00-7 7m14 0a7 7 0 00-7-7m0 0v4m-4 4h8"></path>
      </svg>
    </div>
    <span class="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white dark:border-gray-900"> 24 </span>
  </div>

  <!-- {/* 5️⃣ Email Inbox Badge */} -->
  <div class="relative">
    <div class="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-700 dark:bg-gray-800">
      <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6m-18 6v6h18v-6"></path>
      </svg>
    </div>
    <span class="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white dark:border-gray-900"> 20 </span>
  </div>
</div>
`.trim();

  const OnlyIconBade =
    `  <div class="flex flex-wrap gap-6 justify-center items-center bg-gray-50 p-6 dark:bg-gray-900">
      <!-- {/* 1️⃣ Email Notification Badge */} -->
      <span class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
        <svg
          class="w-6 h-6 text-blue-600 dark:text-blue-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 16"
        >
          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
        </svg>
      </span>

      <!-- {/* 2️⃣ star Check Badge */} -->
      <span class="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900">
        <svg
          class="w-10 flex justify-center items-center h-10 text-green-600 dark:text-green-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 1.5L12.5 5l4.5.5-3 3 1 4.5-4-2-4 2 1-4.5-3-3 4.5-.5L10 1.5Z" />
        </svg>
      </span>

      <!-- {/* 3️⃣ Info Badge */} -->
      <span class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800">
        <svg
          class="w-6 h-6 text-gray-600 dark:text-gray-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16Zm1 12h-2V9h2v5Zm0-6h-2V5h2v3Z" />
        </svg>
      </span>

      <!-- {/* 4️⃣ Warning Alert Badge */} -->
      <span class="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900">
        <svg
          class="w-6 h-6 text-yellow-600 dark:text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 1l9 18H1L10 1Zm0 14a1.5 1.5 0 110 3 1.5 1.5 0 010-3Zm1-3h-2V8h2v4Z" />
        </svg>
      </span>
    </div>`.trim();

  const ButtonWithBadge =
    ` <div class="flex flex-wrap items-center justify-center gap-4 bg-gray-50 p-6 dark:bg-gray-900">
  <!-- Button 1: Messages -->
  <button class="relative flex items-center gap-2 rounded-lg border border-blue-500 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-200 hover:text-blue-700 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-200">
    Messages
    <span class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">6</span>
  </button>

  <!-- Button 2: Notifications -->
  <button class="relative flex items-center gap-2 rounded-lg border border-red-500 bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 transition-all hover:bg-red-200 hover:text-red-700 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-800 dark:hover:text-red-200">
    Notifications
    <span class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">3</span>
  </button>

  <!-- Button 3: Alerts -->
  <button class="relative flex items-center gap-2 rounded-lg border border-green-500 bg-green-100 px-4 py-2 text-sm font-semibold text-green-600 transition-all hover:bg-green-200 hover:text-green-700 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800 dark:hover:text-green-200">
    Alerts
    <span class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">2</span>
  </button>

  <!-- Button 4: Updates -->
  <button class="relative flex items-center gap-2 rounded-lg border border-yellow-500 bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-600 transition-all hover:bg-yellow-200 hover:text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-200">
    Updates
    <span class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs text-white">5</span>
  </button>

  <!-- Button 5: Requests -->
  <button class="relative flex items-center gap-2 rounded-lg border border-indigo-500 bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 transition-all hover:bg-indigo-200 hover:text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-200">
    Requests
    <span class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-xs text-white">8</span>
  </button>

  <!-- Button 6: Likes -->
  <button class="relative flex items-center gap-2 rounded-lg border border-pink-500 bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600 transition-all hover:bg-pink-200 hover:text-pink-700 dark:bg-pink-900 dark:text-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-200">
    Likes
    <span class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs text-white">10</span>
  </button>
</div>
`.trim();

  const ClosableBadgecode =
    `<div class="flex flex-wrap gap-4 p-10 justify-center items-center bg-gray-50 dark:bg-gray-900">
  <!-- Chip 1 -->
  <div class="flex items-center gap-2 px-4 py-1 text-sm font-semibold text-blue-700 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-full">
    Info
    <button class="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 focus:outline-none" onclick="this.parentElement.remove()">×</button>
  </div>

  <!-- Chip 2 -->
  <div class="flex items-center gap-2 px-4 py-1 text-sm font-semibold text-red-700 dark:text-red-200 bg-red-100 dark:bg-red-900 rounded-lg">
    Danger
    <button class="text-red-700 dark:text-red-300 hover:text-red-900 dark:hover:text-red-100 focus:outline-none" onclick="this.parentElement.remove()">×</button>
  </div>

  <!-- Chip 3 -->
  <div class="flex items-center gap-2 px-4 py-1 text-sm font-semibold text-green-700 dark:text-green-200 bg-green-100 dark:bg-green-900 rounded">
    Success
    <button class="text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-100 focus:outline-none" onclick="this.parentElement.remove()">×</button>
  </div>

  <!-- Chip 4 -->
  <div class="flex items-center gap-2 px-4 py-1 text-sm font-semibold text-yellow-700 dark:text-yellow-200 bg-yellow-100 dark:bg-yellow-900 rounded-full">
    Warning
    <button class="text-yellow-700 dark:text-yellow-300 hover:text-yellow-900 dark:hover:text-yellow-100 focus:outline-none" onclick="this.parentElement.remove()">×</button>
  </div>

  <!-- Chip 5 -->
  <div class="flex items-center gap-2 px-4 py-1 text-sm font-semibold text-indigo-700 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
    Indigo
    <button class="text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100 focus:outline-none" onclick="this.parentElement.remove()">×</button>
  </div>

  <!-- Chip 6 -->
  <div class="flex items-center gap-2 px-4 py-1 text-sm font-semibold text-purple-700 dark:text-purple-200 bg-purple-100 dark:bg-purple-900 rounded">
    Purple
    <button class="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 focus:outline-none" onclick="this.parentElement.remove()">×</button>
  </div>

  <!-- Chip 7 -->
  <div class="flex items-center gap-2 px-4 py-1 text-sm font-semibold text-pink-700 dark:text-pink-200 bg-pink-100 dark:bg-pink-900 rounded-full">
    Pink
    <button class="text-pink-700 dark:text-pink-300 hover:text-pink-900 dark:hover:text-pink-100 focus:outline-none" onclick="this.parentElement.remove()">×</button>
  </div>

  <!-- Chip 8 -->
  <div class="flex items-center gap-2 px-4 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-lg">
    Neutral
    <button class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none" onclick="this.parentElement.remove()">×</button>
  </div>

  <!-- Chip 9 -->
  <div class="flex items-center gap-2 px-4 py-1 text-sm font-semibold text-teal-700 dark:text-teal-200 bg-teal-100 dark:bg-teal-900 rounded">
    Teal
    <button class="text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-teal-100 focus:outline-none" onclick="this.parentElement.remove()">×</button>
  </div>

  <!-- Chip 10 -->
  <div class="flex items-center gap-2 px-4 py-1 text-sm font-semibold text-orange-700 dark:text-orange-200 bg-orange-100 dark:bg-orange-900 rounded-full">
    Orange
    <button class="text-orange-700 dark:text-orange-300 hover:text-orange-900 dark:hover:text-orange-100 focus:outline-none" onclick="this.parentElement.remove()">×</button>
  </div>
</div>
`.trim();

  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      <SectionHeading
        id="main-title"
        heading={"Tailwind CSS Badges"}
        description={
          "Enhance your UI with our beautifully designed Tailwind CSS badges. From simple labels to interactive notification indicators, our badges are lightweight, fully responsive, and easy to integrate into your project."
        }
      />

      {/* 🔹 Basic Badges */}
      <h2 className="text-xl md:text-2xl font-bold py-2 pl-2" id="basic-badges">
        Basic Badges
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        Basic badges are small visual indicators used for labeling and
        categorization. These are great for tagging elements, highlighting
        statuses, or adding extra information to UI components.
      </p>
      <MainContainer code={SimpleButtonCode}>
        <BadgeCollection />
      </MainContainer>

      {/* 🔹 Border Badges */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="border-badges"
      >
        Border Badges
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        Border badges add a clean, outlined style to labels while maintaining a
        subtle background. These are perfect for professional dashboards and
        highlighting elements in a non-intrusive way.
      </p>
      <MainContainer code={BorderBadgeCode}>
        <BorderBadges />
      </MainContainer>

<Adsense3/>
      {/* 🔹 Pill Badges */}
      <h2 className="text-xl md:text-2xl font-bold py-2 pl-2" id="pill-badges">
        Pill Badges
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        Pill-shaped badges feature smooth, rounded edges, giving a modern and
        soft look. These are ideal for user status indicators, category labels,
        or subtle highlights in UI components.
      </p>
      <MainContainer code={PillBadgeCode}>
        <PillBadges />
      </MainContainer>

      {/* 🔹 Link Badges */}
      <h2 className="text-xl md:text-2xl font-bold py-2 pl-2" id="link-badges">
        Link Badges
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        Link badges act as interactive elements, allowing users to navigate or
        take actions. These badges are perfect for showing counts, links to user
        profiles, or interactive navigation.
      </p>
      <MainContainer code={LinkBadge}>
        <LinkBadges />
      </MainContainer>

<Adsense3/>
      {/* 🔹 Icon Badges */}
      <h2 className="text-xl md:text-2xl font-bold py-2 pl-2" id="icon-badges">
        Icon Badges
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        Icon badges replace text with meaningful icons, providing a compact yet
        effective visual representation. These are great for UI elements like
        profile verifications, status icons, or feature indicators.
      </p>
      <MainContainer code={LinkBadge}>
        <IconBadges />
      </MainContainer>

      {/* 🔹 Notification Badges */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="notification-badges"
      >
        Notification Badges
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        Notification badges are dynamic indicators that alert users about new
        messages, notifications, or updates. These work great for social media
        apps, messaging platforms, and dashboards.
      </p>
      <MainContainer code={NNotificationBadges}>
        <NotificationBadges />
      </MainContainer>

<Adsense4/>
      {/* 🔹 Badges with Icons Only */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="badges-with-icons-only"
      >
        Badges with Icons Only
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        These badges consist only of icons, making them lightweight and easy to
        use in compact spaces. Ideal for system statuses, alerts, or simple UI
        enhancements without additional text.
      </p>
      <MainContainer code={OnlyIconBade}>
        <IconOnlyBadges />
      </MainContainer>

      {/* 🔹 Button with Badge */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="button-with-badge"
      >
        Button with Badge
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        Button badges add interactive elements to buttons by displaying
        real-time notifications, action counts, or event alerts. Commonly used
        in chat, cart, or social media features.
      </p>
      <MainContainer code={ButtonWithBadge}>
        <ButtonWithBade />
      </MainContainer>

<Adsense4/>
      {/* 🔹 Closable Badges */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="closable-badges"
      >
        Closable Badges
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        Closable badges allow users to remove or dismiss labels dynamically.
        Useful for filtering systems, tag removals, or custom user interactions
        in a UI.
      </p>
      <MainContainer code={ClosableBadgecode}>
        <ClosableBadge />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/badge"} />
    </div>
  );
};

export default page;

export const metadata = {
  title:
    "Tailwind CSS Badges (Stylish & Responsive Components) - Madhuranjan UI",
  description:
    "Explore a variety of Tailwind CSS badges, including border badges, notification badges, pill badges, icon-only badges, and more. Fully responsive, lightweight, and perfect for UI enhancements.",
  keywords: [
    "Tailwind CSS Badges",
    "Notification Badges",
    "Icon Badges",
    "Pill Badges",
    "Border Badges",
    "Button with Badge",
    "Closable Badges",
    "Interactive Badges",
    "Tailwind UI Components",
    "Custom Badges",
  ],
  openGraph: {
    title: "Tailwind CSS Badges – Stylish & Responsive Components",
    description:
      "Discover the best Tailwind CSS badge components, including notification badges, border badges, pill badges, and more. Enhance your UI with stylish, responsive badge elements.",
    url: "https://madhuranjanui.com/docs/badge",
    siteName: "Madhuranjan UI",
    type: "website",
  },
};
