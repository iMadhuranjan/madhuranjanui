import MainContainer from "@/components/MainContainer";
import SectionHeading from "@/components/SectionHeading";
import React from "react";
import {
  AvatarDropDown,
  AvatarWithText,
  DiffertnShapAndSize,
  FirstAvatar,
  OverlappingAvata,
} from "./MyAvatar";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense1 from "@/Adsense/Adsense1";
import Adsense3 from "@/Adsense/Adsense3";

export default function page() {
  const SimpleFaqCode =
    `   <div class="flex flex-wrap gap-6 p-6 bg-gray-50 dark:bg-gray-900 justify-center">
       <img
        class="w-16 h-16 rounded-full border-2 border-gray-300"
        src="https://i.pravatar.cc/150?img=1"
        alt="User Avatar"
      >

      <!-- {/* 2. Hover Scaling Effect */} -->
      <img
        class="w-16 h-16 rounded-full border-2 border-green-500 transition-transform duration-300 hover:scale-110"
        src="https://i.pravatar.cc/150?img=1"
        alt="User Avatar"
      >

      <!-- {/* 3. Avatar with Shadow */} -->
      <img
        class="w-16 h-16 rounded-full border-2 border-gray-400 shadow-lg"
        src="https://i.pravatar.cc/150?img=1"
        alt="User Avatar"
      >

      <!-- {/* 4. Glow Effect */} -->
      <img
        class="w-16 h-16 rounded-full border-2 border-purple-500 shadow-lg shadow-purple-300"
        src="https://i.pravatar.cc/150?img=1"
        alt="User Avatar"
      >

      <!-- {/* 5. Avatar with Online Status Indicator */} -->
      <div class="relative w-16 h-16">
        <img
          class="w-full h-full rounded-full border-2 border-gray-300"
          src="https://i.pravatar.cc/150?img=1"
          alt="User Avatar"
        />
        <span class="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
      </div>

      <!-- {/* 6. Avatar with Notification Badge */} -->
      <div class="relative inline-block">
        <img
          class="w-16 h-16 rounded-full border-2 border-gray-300"
          src="https://i.pravatar.cc/150?img=1"
          alt="User Avatar"
        />
        <span class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
          3
        </span>
      </div>

      <!-- {/* 7. Hover Rotation Effect */} -->
      <img
        class="w-16 h-16 rounded-full border-2 border-indigo-500 transition-transform duration-300 hover:rotate-12"
        src="https://i.pravatar.cc/150?img=1"
        alt="User Avatar"
      />

      <!-- {/* 8. Grayscale Hover Effect */} -->
      <img
        class="w-16 h-16 rounded-full border-2 border-gray-300 grayscale hover:grayscale-0 transition-all duration-300"
        src="https://i.pravatar.cc/150?img=1"
        alt="User Avatar"
      />

      <!-- {/* 9. Blur on Hover */} -->
      <img
        class="w-16 h-16 rounded-full border-2 border-pink-500 transition-all duration-300 hover:blur-sm"
        src="https://i.pravatar.cc/150?img=1"
        alt="User Avatar"
      />

      <div class="p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
        <img
          class="w-16 h-16 rounded-full border-4 border-white"
          src="https://i.pravatar.cc/150?img=1"
          alt="User Avatar"
        />
      </div>

      <img
        class="w-16 h-16 border-4 border-blue-500"
        src="https://i.pravatar.cc/150?img=1"
        alt="User Avatar"
      />

      <!-- {/* 12. Soft-Rounded Avatar */} -->
      <img
        class="w-16 h-16 rounded-lg border-2 border-red-500"
        src="https://i.pravatar.cc/150?img=1"
        alt="User Avatar"
      />
    </div>`.trim();

  const SecondAvatar =
    `  <div class="flex flex-wrap gap-3 md:gap-6 md:p-6 py-5 justify-center items-center bg-gray-50 dark:bg-gray-900">
      <!-- {/* 1. Simple Avatar with Name & Role */} -->
      <div class="flex items-center space-x-3">
        <img
          class="w-12 h-12 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
          alt="User Avatar"
        />
        <div>
          <p class="text-lg font-semibold text-gray-800 dark:text-white">
            Michael Carter
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-300">
            Software Engineer
          </p>
        </div>
      </div>

      <!-- {/* 2. Avatar with Online Status Indicator */} -->
      <div class="flex items-center space-x-3">
        <div class="relative">
          <img
            class="w-12 h-12 rounded-full border-2 border-gray-300"
            src="https://i.pravatar.cc/150?img=5"
            alt="User Avatar"
          />
          <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <div>
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            Daniel Lee
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-300">
            UI/UX Designer
          </p>
        </div>
      </div>

      <!-- {/* 3. Avatar with Notification Badge */} -->
      <div class="flex items-center space-x-3">
        <div class="relative">
          <img
            class="w-12 h-12 rounded-full border-2 border-gray-300"
            src="https://i.pravatar.cc/150?img=6"
            alt="User Avatar"
          />
          <span class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            5
          </span>
        </div>
        <div>
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            Emily Watson
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-300">HR Manager</p>
        </div>
      </div>

      <!-- {/* 4. Avatar with Gradient Hover Effect */} -->
      <div class="flex items-center space-x-3 group">
        <img
          class="w-12 h-12 rounded-full border-2 border-gray-300 transition duration-300 group-hover:border-indigo-500 group-hover:shadow-md"
          src="https://i.pravatar.cc/150?img=7"
          alt="User Avatar"
        />
        <div>
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            Lucas Brown
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-300">
            Product Manager
          </p>
        </div>
      </div>

      <!-- {/* Avatart With Box and Shadow  */} -->
      <div class="flex flex-wrap gap-6 p-6 justify-center items-center bg-gray-50 dark:bg-gray-900">
        <div class="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <img
            class="w-14 h-14 rounded-full border-2 border-gray-300"
            src="https://i.pravatar.cc/150?img=11"
            alt="User Avatar"
          />
          <div>
            <p class="text-lg font-semibold text-gray-900 dark:text-white">
              Alex Johnson
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-300">
              Full-Stack Developer
            </p>
            <div class="flex space-x-2 mt-2">
              <a href="#" class="text-blue-500 hover:text-blue-700">
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                class="text-gray-600 dark:text-gray-300 hover:text-gray-900"
              >
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="text-blue-400 hover:text-blue-600">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- {/* Hover Animation Avatar  */} -->
      <div class="flex items-center space-x-3 group">
        <div class="relative">
          <img
            class="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 transition duration-300 group-hover:border-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/50"
            src="https://i.pravatar.cc/150?img=8"
            alt="User Avatar"
          />
        </div>
        <div>
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            Sophia Martinez
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-300">
            Marketing Specialist
          </p>
        </div>
      </div>

      <!-- {/* Green TIck Blinking Avatar  */} -->
      <div class="flex items-center space-x-3">
        <div class="relative p-0.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
          <img
            class="w-12 h-12 rounded-full border-2 border-white dark:border-gray-900"
            src="https://i.pravatar.cc/150?img=9"
            alt="User Avatar"
          />
          <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full animate-pulse"></span>
        </div>
        <div>
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            Olivia Brown
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-300">
            Data Scientist
          </p>
        </div>
      </div>

      <!-- {/* Hover to Scale Avatar  */} -->
      <div class="flex items-center space-x-3 group">
        <div class="relative">
          <img
            class="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 shadow-lg transition duration-300 group-hover:scale-110 group-hover:shadow-xl"
            src="https://i.pravatar.cc/150?img=10"
            alt="User Avatar"
          />
        </div>
        <div>
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            James Wilson
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-300">
            Frontend Developer
          </p>
        </div>
      </div>

      <!-- {/* Hover to Tilt Avatar  */} -->
      <div class="flex items-center space-x-3 group">
        <div class="relative p-1 rounded-full bg-gradient-to-r from-blue-500 to-teal-500">
          <img
            class="w-12 h-12 rounded-full border-2 border-white dark:border-gray-900 transition duration-300 group-hover:rotate-6"
            src="https://i.pravatar.cc/150?img=11"
            alt="User Avatar"
          />
        </div>
        <div>
          <p class="text-lg font-semibold text-gray-900 dark:text-white">
            Emma Johnson
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-300">
            Graphic Designer
          </p>
        </div>
      </div>
    </div>`.trim();

  const OverLappingAvatar =
    `<div class="flex flex-wrap items-center justify-center gap-10 bg-gray-50 p-5 dark:bg-gray-900">
  <!-- 1️⃣ Stacked Avatars with Overlapping Effect -->
  <div class="flex items-center space-x-[-10px]">
    <img class="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg dark:border-white" src="https://i.pravatar.cc/150?img=1" alt="User 1" />
    <img class="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg dark:border-white" src="https://i.pravatar.cc/150?img=2" alt="User 2" />
    <img class="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg dark:border-white" src="https://i.pravatar.cc/150?img=3" alt="User 3" />
    <img class="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg dark:border-white" src="https://i.pravatar.cc/150?img=4" alt="User 4" />
    <div class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-700 text-sm font-bold text-white dark:border-white">+99</div>
  </div>

  <!-- 3️⃣ Rotating Avatars on Hover -->
  <div class="flex items-center space-x-3">
    <img class="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-transform duration-300 hover:rotate-12 dark:border-white" src="https://i.pravatar.cc/150?img=9" alt="User 9" />
    <img class="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-transform duration-300 hover:rotate-12 dark:border-white" src="https://i.pravatar.cc/150?img=10" alt="User 10" />
    <img class="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-transform duration-300 hover:rotate-12 dark:border-white" src="https://i.pravatar.cc/150?img=11" alt="User 11" />
    <img class="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-transform duration-300 hover:rotate-12 dark:border-white" src="https://i.pravatar.cc/150?img=12" alt="User 12" />
    <div class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-700 text-sm font-bold text-white transition-transform duration-300 hover:rotate-12 dark:border-white">+20</div>
  </div>

  <!-- 4️⃣ Glowing Avatars on Hover -->
  <div class="flex items-center space-x-3">
    <img class="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-all duration-300 hover:ring-4 hover:ring-indigo-500 dark:border-white" src="https://i.pravatar.cc/150?img=13" alt="User 13" />
    <img class="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-all duration-300 hover:ring-4 hover:ring-indigo-500 dark:border-white" src="https://i.pravatar.cc/150?img=14" alt="User 14" />
    <img class="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-all duration-300 hover:ring-4 hover:ring-indigo-500 dark:border-white" src="https://i.pravatar.cc/150?img=15" alt="User 15" />
    <img class="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-all duration-300 hover:ring-4 hover:ring-indigo-500 dark:border-white" src="https://i.pravatar.cc/150?img=16" alt="User 16" />
    <div class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-700 text-sm font-bold text-white transition-all duration-300 hover:ring-4 hover:ring-indigo-500 dark:border-white">+10</div>
  </div>

  <div class="flex items-center space-x-3 justify-center">
  
  <!-- Avatar 1 -->
  <img class="w-16 h-16 rounded-full border-2 border-white object-cover aspect-square hover:scale-110 transition-transform"
    src="https://i.pravatar.cc/150?img=51" alt="User 1">
  
  <!-- Avatar 2 -->
  <img class="w-16 h-16 rounded-full border-2 border-white object-cover aspect-square hover:scale-110 transition-transform"
    src="https://i.pravatar.cc/150?img=52" alt="User 2">
  
  <!-- Avatar 3 -->
  <img class="w-16 h-16 rounded-full border-2 border-white object-cover aspect-square hover:scale-110 transition-transform"
    src="https://i.pravatar.cc/150?img=53" alt="User 3">
  
  <!-- Avatar 4 -->
  <img class="w-16 h-16 rounded-full border-2 border-white object-cover aspect-square hover:scale-110 transition-transform"
    src="https://i.pravatar.cc/150?img=54" alt="User 4">
  
</div>


</div>


`.trim();

  const ShapAndSizeCode =
    ` <div class="flex flex-wrap items-center justify-center gap-14 bg-gray-100 dark:bg-gray-900 p-8">
      {/* <!-- 1️⃣ Square Avatars (Different Sizes) --> */}
      <div class="flex gap-3">
        <img
          class="h-10 w-10 border-2 border-white"
          src="https://i.pravatar.cc/150?img=1"
          alt="Avatar"
        />
        <img
          class="h-16 w-16 border-2 border-white"
          src="https://i.pravatar.cc/150?img=1"
          alt="Avatar"
        />
        <img
          class="h-24 w-24 border-2 border-white"
          src="https://i.pravatar.cc/150?img=1"
          alt="Avatar"
        />
        <img
          class="h-32 w-32 border-2 border-white"
          src="https://i.pravatar.cc/150?img=1"
          alt="Avatar"
        />
      </div>


            {/* <!-- 1️⃣ Circle Avatars (Different Sizes) --> */}

      <div class="flex gap-3">
        <img
          class="h-10 w-10 rounded-full border-2 border-white"
          src="https://i.pravatar.cc/150?img=2"
          alt="Avatar"
        />
        <img
          class="h-16 w-16 rounded-full border-2 border-white"
          src="https://i.pravatar.cc/150?img=2"
          alt="Avatar"
        />
        <img
          class="h-24 w-24 rounded-full border-2 border-white"
          src="https://i.pravatar.cc/150?img=2"
          alt="Avatar"
        />
        <img
          class="h-32 w-32 rounded-full border-2 border-white"
          src="https://i.pravatar.cc/150?img=2"
          alt="Avatar"
        />
      </div>

       
            {/* <!-- 1️⃣ Square Rotate Avatars (Different Sizes) --> */}


      <div class="flex gap-3">
        <img
          class="h-10 w-10 rotate-45 transform border-2 border-white"
          src="https://i.pravatar.cc/150?img=4"
          alt="Avatar"
        />
        <img
          class="h-16 w-16 rotate-45 transform border-2 border-white"
          src="https://i.pravatar.cc/150?img=4"
          alt="Avatar"
        />
        <img
          class="h-24 w-24 rotate-45 transform border-2 border-white"
          src="https://i.pravatar.cc/150?img=4"
          alt="Avatar"
        />
        <img
          class="h-32 w-32 rotate-45 transform border-2 border-white"
          src="https://i.pravatar.cc/150?img=4"
          alt="Avatar"
        />
      </div>

            {/* <!-- 1️⃣  Square Rounded Medium Avatars (Different Sizes) --> */}


      <div class="flex gap-3">
        <img
          class="h-10 w-10 rounded-md border-2 border-white"
          src="https://i.pravatar.cc/150?img=5"
          alt="Avatar"
        />
        <img
          class="h-16 w-16 rounded-md border-2 border-white"
          src="https://i.pravatar.cc/150?img=5"
          alt="Avatar"
        />
        <img
          class="h-24 w-24 rounded-md border-2 border-white"
          src="https://i.pravatar.cc/150?img=5"
          alt="Avatar"
        />
        <img
          class="h-32 w-32 rounded-md border-2 border-white"
          src="https://i.pravatar.cc/150?img=5"
          alt="Avatar"
        />
      </div>

      
    </div>`.trim();

  const DropDownCode = `<div class="relative">
  <!-- Avatar Button -->
  <button class="peer h-12 w-12 cursor-pointer rounded-full border-2 border-white transition-all duration-300 hover:scale-110 focus:ring-4 focus:ring-blue-500/50 dark:border-gray-700 dark:focus:ring-blue-700/50">
    <img src="https://i.pravatar.cc/150?img=1" alt="User Avatar" class="h-full w-full rounded-full" />
  </button>

  <!-- Dropdown Menu -->
  <div class="invisible absolute left-0 mt-2 w-56 -translate-y-2 transform rounded-lg bg-white opacity-0 shadow-xl transition-all duration-300 peer-focus-within:visible peer-focus-within:opacity-100 peer-hover:visible peer-hover:translate-y-0 peer-hover:opacity-100 dark:bg-gray-800">
    <!-- Header -->
    <div class="rounded-t-lg bg-gradient-to-r from-blue-500 to-purple-500 p-2 dark:from-blue-600 dark:to-purple-600">
      <p class="text-sm font-semibold text-white">Madhuranjan</p>
      <p class="text-xs text-white/80">HeyMadhuranjan@gmail.com</p>
    </div>

    <!-- Menu Items -->
    <div class="p-2">
      <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
        <span class="flex items-center gap-2">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          Profile
        </span>
      </a>
      <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
        <span class="flex items-center gap-2">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          Settings
        </span>
      </a>
      <a href="#" class="block rounded-md px-4 py-2 text-sm text-red-500 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900 dark:hover:text-white">
        <span class="flex items-center gap-2">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          Sign Out
        </span>
      </a>
    </div>
  </div>
</div>
`.trim();

  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      <SectionHeading
        id="main-title"
        heading={"Tailwind CSS Avatar"}
        description={
          "Easily integrate our Tailwind CSS avatar component to display user profile images beautifully. Built entirely with Tailwind CSS, no additional dependencies required. Just copy and paste into your project and start using it instantly."
        }
      />

      {/* 🔹 Types of Avatars */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="types-of-avatar"
      >
        Type of Avatars
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        Our Avatar Collection includes 10+ variations, such as simple avatars,
        bordered avatars, glowing avatars, gradient avatars, avatars with
        badges, and much more. These styles ensure flexibility for different
        UI/UX requirements.
      </p>
      <MainContainer code={SimpleFaqCode}>
        <FirstAvatar />
      </MainContainer>

      {/* 🔹 Avatar With Text */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="avatar-with-text"
      >
        Avatar With Text
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        Our Avatar with Text component allows you to display user names, roles,
        and statuses alongside profile images. It includes status indicators,
        notification badges, and hover effects to make user interactions more
        dynamic.
      </p>
      <MainContainer code={SecondAvatar}>
        <AvatarWithText />
      </MainContainer>

<Adsense3/>
      {/* 🔹 Overlapping Avatar */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="overlapping-avatar"
      >
        Overlapping Avatar
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        Overlapping Avatars are perfect for group user displays or team
        sections. These avatars create a stacked effect with smart spacing,
        hover effects, and elegant alignment, making them ideal for social or
        collaborative interfaces.
      </p>
      <MainContainer code={OverLappingAvatar}>
        <OverlappingAvata />
      </MainContainer>

      {/* 🔹 Different Shape & Size */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="shape-and-size"
      >
        Different Shape & Size
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        Avatars are available in multiple sizes (Small to Large) and unique
        shapes like Circle, Square, Hexagonal, Diamond, and Rounded Rectangle.
        These variations enhance UI design, offering a flexible approach for
        different design needs.
      </p>
      <MainContainer code={ShapAndSizeCode}>
        <DiffertnShapAndSize />
      </MainContainer>

<Adsense3/>
      {/* 🔹 DropDown Avatar */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="dropdown-avatar"
      >
        DropDown Avatar
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        Our Dropdown Avatar component provides an elegant user profile dropdown
        menu. It includes Profile, settings, and logout buttons, with smooth
        animations and dark mode compatibility.
      </p>
      <MainContainer code={DropDownCode}>
        <AvatarDropDown />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/avatar"} />
    </div>
  );
}

export const metadata = {
  title: "Tailwind CSS Avatar Components - Madhuranjan UI",
  description:
    "Discover a wide range of Tailwind CSS Avatar components, including circular, square, hexagonal, overlapping avatars, and profile dropdown menus. Fully responsive, customizable, and designed for dark mode. (𝓬𝓸𝓹𝔂 𝖆𝖓𝖉 𝓹𝓪𝓼𝓽𝓮)",
  keywords: [
    "Tailwind CSS Avatar",
    "Avatar Components",
    "Tailwind UI Avatars",
    "Profile Picture UI",
    "Overlapping Avatar",
    "Avatar with Text",
    "Hexagonal Avatar",
    "Avatar Dropdown",
    "Madhuranjan UI",
  ],
  openGraph: {
    title:
      "Tailwind CSS Avatar Components - Wide Range of Styles, Shapes & Dropdowns (𝓬𝓸𝓹𝔂 𝖆𝖓𝖉 𝓹𝓪𝓼𝓽𝓮)",
    description:
      "Effortlessly integrate Tailwind CSS Avatars into your projects. Choose from a wide range of styles, including profile images, text-based avatars, overlapping avatars, dropdown menus, and more.",
    url: "https://madhuranjanui.com/docs/avatar",
    siteName: "Madhuranjan UI",
    type: "website",
  },
};
