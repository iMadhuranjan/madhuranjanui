export const TypeOfSpinnerCode=`<div class="flex flex-wrap justify-center items-center gap-6 p-6 bg-white dark:bg-gray-900 shadow-md">
  <!-- Default Spinner -->
  <div class="animate-spin size-6 border-3 border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
  </div>

  <!-- Small Spinner -->
  <div class="animate-spin size-4 border-2 border-current border-t-transparent text-violet-600 rounded-full dark:text-violet-400" role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
  </div>

  <!-- Large Spinner -->
  <div class="animate-spin size-10 border-4 border-current border-t-transparent text-green-600 rounded-full dark:text-green-400" role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
  </div>

  <!-- Slow Spinner -->
  <div class="animate-[spin_2s_linear_infinite] size-8 border-4 border-current border-t-transparent text-red-600 rounded-full dark:text-red-400" role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
  </div>

  <!-- Fast Spinner -->
  <div class="animate-[spin_0.5s_linear_infinite] size-6 border-4 border-current border-t-transparent text-yellow-600 rounded-full dark:text-yellow-400" role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
  </div>

  <!-- Dashed Spinner -->
  <div class="animate-spin size-6 border-4 border-dashed border-current border-t-transparent text-indigo-600 rounded-full dark:text-indigo-400" role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
  </div>

  <!-- Thick Border Spinner -->
  <div class="animate-spin size-8 border-[6px] border-current border-t-transparent text-cyan-600 rounded-full dark:text-cyan-400" role="status" aria-label="loading">
    <span class="sr-only">Loading...</span>
  </div>
</div>
`

export const ColoredSpinnerCode=`<div class="flex flex-wrap justify-center items-center gap-6 p-6 bg-white dark:bg-black shadow-md rounded-xl">
  <div class="animate-spin size-7 border-3 border-current border-t-transparent text-blue-800 rounded-full dark:text-blue-400"></div>
  <div class="animate-spin size-7 border-3 border-current border-t-transparent text-red-600 rounded-full dark:text-red-400"></div>
  <div class="animate-spin size-7 border-3 border-current border-t-transparent text-green-600 rounded-full dark:text-green-400"></div>
  <div class="animate-spin size-7 border-3 border-current border-t-transparent text-yellow-500 rounded-full dark:text-yellow-300"></div>
  <div class="animate-spin size-7 border-3 border-current border-t-transparent text-indigo-600 rounded-full dark:text-indigo-400"></div>
  <div class="animate-spin size-7 border-3 border-current border-t-transparent text-purple-600 rounded-full dark:text-purple-400"></div>
  <div class="animate-spin size-7 border-3 border-current border-t-transparent text-pink-600 rounded-full dark:text-pink-400"></div>
  <div class="animate-spin size-7 border-3 border-current border-t-transparent text-cyan-600 rounded-full dark:text-cyan-400"></div>
  <div class="animate-spin size-7 border-3 border-current border-t-transparent text-teal-600 rounded-full dark:text-teal-400"></div>
  <div class="animate-spin size-7 border-3 border-current border-t-transparent text-orange-500 rounded-full dark:text-orange-400"></div>
</div>
`

export const ButtonSpinnerCode=`<div class="flex flex-col sm:flex-row gap-4 p-6 items-center">
  <!-- Primary Button (Blue) -->
  <button class="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow-md transition-all hover:bg-blue-700 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600">
    <div class="animate-spin size-5 border-2 border-current border-t-transparent rounded-full"></div>
    Loading...
  </button>

  <!-- Outline Button (Gray) -->
  <button class="flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg shadow-sm transition-all hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
    <div class="animate-spin size-5 border-2 border-current border-t-transparent rounded-full"></div>
    Processing...
  </button>

  <!-- Ghost Button (Red) -->
  <button class="flex items-center gap-2 px-5 py-2.5 text-red-600 font-medium rounded-lg transition-all hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900">
    <div class="animate-spin size-5 border-2 border-current border-t-transparent rounded-full"></div>
    Submitting...
  </button>
</div>
`

export const More20SpinnerCode=`<div class="flex flex-wrap items-center justify-center gap-6 rounded-xl bg-white p-6 shadow-md dark:bg-black">
  <!-- Dotted Spinner -->
  <div class="relative size-10">
    <div class="absolute size-10 animate-ping rounded-full border-4 border-current border-t-transparent text-red-600 dark:text-red-400"></div>
    <div class="absolute size-10 animate-spin rounded-full border-4 border-dotted border-current border-t-transparent text-red-600 dark:text-red-400"></div>
  </div>

  <!--. Dashed Spinner -->
  <div class="size-10 animate-spin rounded-full border-4 border-dashed border-current border-t-transparent text-green-600 dark:text-green-400"></div>

  <!-- . Pulse Spinner -->
  <div class="relative flex size-10 items-center justify-center">
    <div class="absolute size-10 animate-ping rounded-full border-4 border-current text-indigo-600 dark:text-indigo-400"></div>
    <div class="size-6 animate-spin rounded-full border-4 border-current border-t-transparent text-indigo-600 dark:text-indigo-400"></div>
  </div>

  <!-- . Half Circle Spinner -->
  <div class="relative flex size-10 items-center justify-center">
    <div class="size-10 animate-spin rounded-full border-4 border-current border-t-transparent border-r-transparent text-purple-600 dark:text-purple-400"></div>
  </div>

  <!-- . Growing Circle Spinner -->
  <div class="relative size-10">
    <div class="absolute size-10 animate-ping rounded-full border-4 border-current text-pink-600 dark:text-pink-400"></div>
    <div class="absolute size-10 animate-spin rounded-full border-4 border-current border-t-transparent text-pink-600 dark:text-pink-400"></div>
  </div>

  <!-- Ripple Spinner -->
  <div class="relative flex size-10 items-center justify-center">
    <div class="absolute size-10 animate-ping rounded-full border-4 border-current text-cyan-600 dark:text-cyan-400"></div>
    <div class="absolute size-6 animate-ping rounded-full border-4 border-current text-cyan-600 dark:text-cyan-400"></div>
  </div>

  <!-- Square Spinner -->
  <div class="size-10 animate-[spin_1.2s_linear_infinite] rounded-lg border-4 border-current border-t-transparent border-r-transparent text-teal-600 dark:text-teal-400"></div>

  <!-- Loading Dots -->
  <div class="flex space-x-1">
    <div class="size-3 animate-bounce rounded-full bg-orange-500 [animation-delay:-0.3s] dark:bg-orange-400"></div>
    <div class="size-3 animate-bounce rounded-full bg-orange-500 [animation-delay:-0.15s] dark:bg-orange-400"></div>
    <div class="size-3 animate-bounce rounded-full bg-orange-500 dark:bg-orange-400"></div>
  </div>

  <div class="size-10 animate-spin rounded-lg border-4 border-current border-t-transparent text-blue-600 dark:text-blue-400"></div>

  <!-- Bouncing Bars -->
  <div class="flex space-x-1">
    <div class="h-6 w-2 animate-bounce bg-red-500 dark:bg-red-400"></div>
    <div class="h-6 w-2 animate-bounce bg-red-500 [animation-delay:-0.2s] dark:bg-red-400"></div>
    <div class="h-6 w-2 animate-bounce bg-red-500 [animation-delay:-0.4s] dark:bg-red-400"></div>
  </div>

  <!--. Sliding Block -->
  <div class="relative h-3 w-20 overflow-hidden bg-gray-200 dark:bg-gray-700">
    <div class="absolute h-full w-10 animate-[bounce_1.5s_infinite] bg-green-500 dark:bg-green-400"></div>
  </div>

  <!--. Expanding Boxes -->
  <div class="relative flex size-10 items-center justify-center">
    <div class="absolute size-10 animate-ping rounded-md border-4 border-current text-yellow-500 dark:text-yellow-300"></div>
    <div class="absolute size-6 animate-pulse rounded-md border-4 border-current text-yellow-500 dark:text-yellow-300"></div>
  </div>

  <!-- Zigzag Loader -->
  <div class="flex space-x-1">
    <div class="h-3 w-3 animate-bounce bg-cyan-600 dark:bg-cyan-400"></div>
    <div class="h-3 w-3 animate-bounce bg-cyan-600 [animation-delay:-0.3s] dark:bg-cyan-400"></div>
    <div class="h-3 w-3 animate-bounce bg-cyan-600 [animation-delay:-0.6s] dark:bg-cyan-400"></div>
  </div>

  <!--. Growing Square -->
  <div class="size-10 animate-pulse rounded-md bg-orange-500 shadow-lg dark:bg-orange-400"></div>

  <!--. Expanding Bars -->
  <div class="flex space-x-2">
    <div class="h-6 w-1 animate-[bounce_1.5s_infinite] bg-teal-600 dark:bg-teal-400"></div>
    <div class="h-6 w-1 animate-[bounce_1.5s_infinite] bg-teal-600 [animation-delay:-0.2s] dark:bg-teal-400"></div>
    <div class="h-6 w-1 animate-[bounce_1.5s_infinite] bg-teal-600 [animation-delay:-0.4s] dark:bg-teal-400"></div>
  </div>

  <!--. Rotating Hexagon -->
  <div class="relative flex size-10 items-center justify-center">
    <div class="size-10 animate-spin rounded-lg border-4 border-current border-t-transparent border-b-transparent text-indigo-600 dark:text-indigo-400"></div>
  </div>

  <!--. Rotating X -->
  <div class="relative flex size-10 items-center justify-center">
    <div class="h-6 w-6 rotate-45 animate-spin border-4 border-current text-green-600 dark:text-green-400"></div>
  </div>

  <!--. Vertical Sliding Bar -->
  <div class="relative h-10 w-3 overflow-hidden bg-red-500 dark:bg-red-400">
    <div class="absolute h-full w-full animate-[bounce_1.5s_infinite] bg-red-700 dark:bg-red-500"></div>
  </div>

  <!--. Loading Arrows -->
  <div class="flex space-x-1">
    <div class="h-3 w-3 rotate-45 animate-bounce bg-yellow-500 dark:bg-yellow-300"></div>
    <div class="h-3 w-3 rotate-45 animate-bounce bg-yellow-500 [animation-delay:-0.2s] dark:bg-yellow-300"></div>
    <div class="h-3 w-3 rotate-45 animate-bounce bg-yellow-500 [animation-delay:-0.4s] dark:bg-yellow-300"></div>
  </div>

  <!--. Rotating Bars -->
  <div class="relative flex size-10 items-center justify-center">
    <div class="absolute h-6 w-1 animate-[spin_1.5s_linear_infinite] bg-teal-600 dark:bg-teal-400"></div>
    <div class="absolute h-6 w-1 rotate-45 animate-[spin_1.5s_linear_infinite] bg-teal-600 [animation-delay:-0.2s] dark:bg-teal-400"></div>
    <div class="absolute h-6 w-1 rotate-90 animate-[spin_1.5s_linear_infinite] bg-teal-600 [animation-delay:-0.4s] dark:bg-teal-400"></div>
  </div>

  <!--. Expanding Square Grid -->
  <div class="grid grid-cols-3 gap-1">
    <div class="size-3 animate-ping bg-orange-500 dark:bg-orange-400"></div>
    <div class="size-3 animate-ping bg-orange-500 [animation-delay:-0.1s] dark:bg-orange-400"></div>
    <div class="size-3 animate-ping bg-orange-500 [animation-delay:-0.2s] dark:bg-orange-400"></div>
    <div class="size-3 animate-ping bg-orange-500 [animation-delay:-0.3s] dark:bg-orange-400"></div>
    <div class="size-3 animate-ping bg-orange-500 [animation-delay:-0.4s] dark:bg-orange-400"></div>
    <div class="size-3 animate-ping bg-orange-500 [animation-delay:-0.5s] dark:bg-orange-400"></div>
    <div class="size-3 animate-ping bg-orange-500 [animation-delay:-0.6s] dark:bg-orange-400"></div>
    <div class="size-3 animate-ping bg-orange-500 [animation-delay:-0.7s] dark:bg-orange-400"></div>
    <div class="size-3 animate-ping bg-orange-500 [animation-delay:-0.8s] dark:bg-orange-400"></div>
  </div>
</div>
`

export const SharingunSpinnerCode=`<div class="flex items-center justify-evenly  p-5 ">
  <!-- Sharingan Spinner -->
  <div class="relative h-32 w-32 animate-[spin_2s_ease-in-out_infinite] rounded-full border-[5px] border-black bg-[#e41414]">
    <div class="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-[4px] border-[rgba(110,13,13,0.5)]">
      <!-- Tomoe 1 -->
      <div class="absolute top-[-0.5rem] left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-black"></div>
      <!-- Tomoe 2 -->
      <div class="absolute bottom-[0.5rem] left-[-0.3rem] z-10 h-4 w-4 rotate-[-120deg] rounded-full bg-black"></div>
      <!-- Tomoe 3 -->
      <div class="absolute right-[-0.3rem] bottom-[0.5rem] z-10 h-4 w-4 rotate-[120deg] rounded-full bg-black"></div>
      <!-- Center Circle -->
      <div class="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_15px_5px_rgba(0,0,0,0.6)]"></div>
    </div>
  </div>

  <!-- Mangekyou Spinner -->
  <div class="relative h-32 w-32 animate-[spin_3s_ease-in-out_infinite] rounded-full border-[5px] border-black bg-[#050505]">
    <!-- 6 Red Petals (rotated in 60° increments) -->
    <div class="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[0deg] rounded-[100%_0_100%_0%/100%_0%_100%_0%] bg-[#e41414]"></div>
    <div class="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[60deg] rounded-[100%_0_100%_0%/100%_0%_100%_0%] bg-[#e41414]"></div>
    <div class="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[120deg] rounded-[100%_0_100%_0%/100%_0%_100%_0%] bg-[#e41414]"></div>
    <div class="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[180deg] rounded-[100%_0_100%_0%/100%_0%_100%_0%] bg-[#e41414]"></div>
    <div class="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[240deg] rounded-[100%_0_100%_0%/100%_0%_100%_0%] bg-[#e41414]"></div>
    <div class="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[300deg] rounded-[100%_0_100%_0%/100%_0%_100%_0%] bg-[#e41414]"></div>

    <!-- 3 Black Arcs (using clip-path to show half the circle) -->
    <div class="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-[0deg] rounded-full border-2 border-black bg-transparent [clip-path:polygon(50%_0%,100%_0%,100%_100%,50%_100%)]"></div>
    <div class="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-[120deg] rounded-full border-2 border-black bg-transparent [clip-path:polygon(50%_0%,100%_0%,100%_100%,50%_100%)]"></div>
    <div class="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-[240deg] rounded-full border-2 border-black bg-transparent [clip-path:polygon(50%_0%,100%_0%,100%_100%,50%_100%)]"></div>

    <!-- Center Black Circle -->
    <div class="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_15px_5px_rgba(0,0,0,0.6)]"></div>
  </div>
</div>
`