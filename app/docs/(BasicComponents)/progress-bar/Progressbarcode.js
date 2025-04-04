export const SimpleProgressBarCode = `<div class="w-full mx-auto bg-violet-200 dark:bg-blue-200 rounded-full h-4">
  <div class="h-4 rounded-full bg-violet-600 dark:bg-blue-600 w-1/2"></div>
</div>
`


export const ProgressbarHeightCode = ` <div class="w-full max-w-md mx-auto space-y-4">
        <!-- {/* Progress 1 - 20% */} -->
        <div class="w-full bg-violet-200 dark:bg-blue-200 rounded-full h-2">
          <div class="h-2 w-[20%] bg-violet-600 dark:bg-blue-600 rounded-full"></div>
        </div>

        <!-- {/* Progress 2 - 40% */} -->
        <div class="w-full bg-violet-200 dark:bg-blue-200 rounded-full h-3">
          <div class="h-3 w-[40%] bg-violet-600 dark:bg-blue-600 rounded-full"></div>
        </div>

        <!-- {/* Progress 3 - 75% */} -->
        <div class="w-full bg-violet-200 dark:bg-blue-200 rounded-full h-4">
          <div class="h-4 w-[60%] bg-violet-600 dark:bg-blue-600 rounded-full"></div>
        </div>

        <!-- {/* Progress 4 - 100% */} -->
        <div class="w-full bg-violet-200 dark:bg-blue-200 rounded-full h-5">
          <div class="h-5 w-[80%] bg-violet-600 dark:bg-blue-600 rounded-full"></div>
        </div>

        <!-- {/* Progress 5 - 100% */} -->
        <div class="w-full bg-violet-200 dark:bg-blue-200 rounded-full h-6">
          <div class="h-6 w-full bg-violet-600 dark:bg-blue-600 rounded-full"></div>
        </div>
      </div>`

export const ProgressbarWithHeightContenntInsideCode = `<div class="bg-red-50 p-5 dark:bg-gray-900">
  <div class="mx-auto w-full max-w-md space-y-4 text-sm font-medium text-white">
    <!-- {/* Progress 1 - 20% */}.  -->
    <div class="relative h-4 w-full overflow-hidden rounded-full bg-violet-200 dark:bg-blue-200">
      <div class="flex h-4 w-1/5 items-center justify-center rounded-full bg-violet-600 dark:bg-blue-600">
        <span>20%</span>
      </div>
    </div>

    <!-- {/* Progress 2 - 40% */} -->
    <div class="relative h-5 w-full overflow-hidden rounded-full bg-violet-200 dark:bg-blue-200">
      <div class="flex h-5 w-2/5 items-center justify-center rounded-full bg-violet-600 dark:bg-blue-600">
        <span>40%</span>
      </div>
    </div>

    <!-- {/* Progress 3 - 75% */} -->
    <div class="relative h-6 w-full overflow-hidden rounded-full bg-violet-200 dark:bg-blue-200">
      <div class="flex h-6 w-3/4 items-center justify-center rounded-full bg-violet-600 dark:bg-blue-600">
        <span>75%</span>
      </div>
    </div>

    <!-- {/* Progress 4 - 100% */} -->
    <div class="relative h-7 w-full overflow-hidden rounded-full bg-violet-200 dark:bg-blue-200">
      <div class="flex h-7 w-[90%] items-center justify-center rounded-full bg-violet-600 dark:bg-blue-600">
        <span>Almost Completed</span>
      </div>
    </div>

    <!-- {/* Progress 5 - 100% */} -->
    <div class="relative h-8 w-full overflow-hidden rounded-full bg-violet-200 dark:bg-blue-200">
      <div class="flex h-8 w-full items-center justify-center rounded-full bg-violet-600 dark:bg-blue-600">
        <span>Completed</span>
      </div>
    </div>
  </div>
</div>
`

export const ColoredProgressBarCode = `<div class="p-5 bg-red-50 dark:bg-gray-900">
  <div class="w-full max-w-md mx-auto space-y-4 text-white font-medium text-sm">

    <!-- {/* Red */} -->
    <div class="w-full bg-red-200 dark:bg-red-800 rounded-full h-5 overflow-hidden">
      <div class="h-5 w-1/4 bg-red-600 rounded-full flex items-center justify-center">
        <span>25%</span>
      </div>
    </div>

    <!-- {/* Orange */} -->
    <div class="w-full bg-orange-200 dark:bg-orange-800 rounded-full h-5 overflow-hidden">
      <div class="h-5 w-2/5 bg-orange-500 rounded-full flex items-center justify-center">
        <span>40%</span>
      </div>
    </div>

    <!-- {/* Amber */} -->
    <div class="w-full bg-amber-200 dark:bg-amber-800 rounded-full h-5 overflow-hidden">
      <div class="h-5 w-1/2 bg-amber-500 text-black rounded-full flex items-center justify-center">
        <span>50%</span>
      </div>
    </div>

    <!-- {/* Yellow */} -->
    <div class="w-full bg-yellow-200 dark:bg-yellow-800 rounded-full h-5 overflow-hidden">
      <div class="h-5 w-3/5 bg-yellow-400 text-black rounded-full flex items-center justify-center">
        <span>60%</span>
      </div>
    </div>

    <!-- {/* Lime */} -->
    <div class="w-full bg-lime-200 dark:bg-lime-800 rounded-full h-5 overflow-hidden">
      <div class="h-5 w-2/3 bg-lime-500 text-black rounded-full flex items-center justify-center">
        <span>66%</span>
      </div>
    </div>

    <!-- {/* Green */} -->
    <div class="w-full bg-green-200 dark:bg-green-800 rounded-full h-5 overflow-hidden">
      <div class="h-5 w-3/4 bg-green-600 rounded-full flex items-center justify-center">
        <span>75%</span>
      </div>
    </div>

    <!-- {/* Teal */} -->
    <div class="w-full bg-teal-200 dark:bg-teal-800 rounded-full h-5 overflow-hidden">
      <div class="h-5 w-4/5 bg-teal-500 rounded-full flex items-center justify-center">
        <span>80%</span>
      </div>
    </div>

    <!-- {/* Cyan */} -->
    <div class="w-full bg-cyan-200 dark:bg-cyan-800 rounded-full h-5 overflow-hidden">
      <div class="h-5 w-5/6 bg-cyan-500 rounded-full flex items-center justify-center">
        <span>85%</span>
      </div>
    </div>

    <!-- {/* Indigo */} -->
    <div class="w-full bg-indigo-200 dark:bg-indigo-800 rounded-full h-5 overflow-hidden">
      <div class="h-5 w-11/12 bg-indigo-600 rounded-full flex items-center justify-center">
        <span>90%</span>
      </div>
    </div>

    <!-- {/* Violet */} -->
    <div class="w-full bg-violet-200 dark:bg-violet-800 rounded-full h-5 overflow-hidden">
      <div class="h-5 w-full bg-violet-600 rounded-full flex items-center justify-center">
        <span>Complete</span>
      </div>
    </div>

  </div>
</div>
`

export const VerticalScrollBarCode = ` <div class="flex items-end space-x-3">
    <div class="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-red-400 dark:bg-red-800">
      <div class="absolute inset-x-0 bottom-0 flex h-1/4 items-center justify-center bg-red-600 text-xs text-white"></div>
    </div>

    <div class="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-orange-400 dark:bg-orange-800">
      <div class="absolute inset-x-0 bottom-0 flex h-2/5 items-center justify-center bg-orange-500 text-xs text-white"></div>
    </div>

    <div class="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-amber-400 dark:bg-amber-800">
      <div class="absolute inset-x-0 bottom-0 flex h-1/2 items-center justify-center bg-amber-500 text-xs text-black"></div>
    </div>

    <div class="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-yellow-400 dark:bg-yellow-800">
      <div class="absolute inset-x-0 bottom-0 flex h-3/5 items-center justify-center bg-yellow-500 text-xs text-black"></div>
    </div>

    <div class="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-green-400 dark:bg-green-800">
      <div class="absolute inset-x-0 bottom-0 flex h-3/4 items-center justify-center bg-green-600 text-xs text-white"></div>
    </div>

    <div class="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-teal-400 dark:bg-teal-800">
      <div class="absolute inset-x-0 bottom-0 flex h-4/5 items-center justify-center bg-teal-500 text-xs text-white"></div>
    </div>

    <div class="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-cyan-400 dark:bg-cyan-800">
      <div class="absolute inset-x-0 bottom-0 flex h-5/6 items-center justify-center bg-cyan-500 text-xs text-white"></div>
    </div>

    <div class="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-indigo-400 dark:bg-indigo-800">
      <div class="absolute inset-x-0 bottom-0 flex h-[90%] items-center justify-center bg-indigo-600 text-xs text-white"></div>
    </div>

    <div class="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-violet-400 dark:bg-violet-800">
      <div class="absolute inset-x-0 bottom-0 flex h-full items-center justify-center bg-violet-600 text-xs text-white"></div>
    </div>
  </div>`

export const ProgressBarVarientCode = `  <div class="p-6 space-y-6 w-full max-w-4xl mx-auto">
      <div>
        <div class="mb-1 text-sm font-medium text-gray-700 dark:text-gray-100">
          Basic Progress (50%)
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div class="bg-blue-500 dark:bg-blue-400 h-2 rounded-full w-1/2"></div>
        </div>
      </div>

      <div>
        <div class="relative w-full bg-gray-200 dark:bg-gray-700 rounded h-4 overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700 dark:text-gray-200">
            25%
          </div>
          <div class="bg-red-500 dark:bg-red-400 h-4 w-1/4"></div>
        </div>
      </div>

      <div>
        <div class="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Gradient Progress (75%)
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div class="bg-gradient-to-r from-yellow-500 dark:from-yellow-400 to-yellow-300 dark:to-yellow-200 h-3 rounded-full w-3/4"></div>
        </div>
      </div>

      <div>
        <div class="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Fully Completed (100%)
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div class="bg-green-500 dark:bg-green-400 h-2 rounded-full w-full"></div>
        </div>
        <div class="mt-1 text-sm text-green-600 dark:text-green-400 font-medium">
          Complete
        </div>
      </div>

      <div>
        <div class="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Segmented Progress
        </div>
        <div class="flex h-4 w-full overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
          <div class="w-2/6 bg-purple-500 dark:bg-purple-400"></div>
          <div class="w-2/6 bg-pink-500 dark:bg-pink-400"></div>
          <div class="w-2/6 bg-indigo-500 dark:bg-indigo-400"></div>
        </div>
      </div>

      <div>
        <div class="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Thicker Progress (60%)
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded h-6">
          <div class="bg-orange-500 dark:bg-orange-400 h-6 rounded w-3/5"></div>
        </div>
      </div>

      <div>
        <div class="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Pill Shaped Progress (80%)
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 h-4 rounded-full overflow-hidden">
          <div class="bg-teal-500 dark:bg-teal-400 h-4 rounded-full flex items-center justify-end w-4/5 px-2 text-white text-xs font-medium">
            Done
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>`

export const GaugeProgressBarCode = `<div class="flex items-center justify-center gap-10 p-5 dark:bg-black flex-wrap">
  <!-- Variant 1: Basic Gauge at 70% -->
  <div class="relative inline-block h-16 w-32">
    <!-- SVG is positioned absolutely to fill the container -->
    <svg class="absolute top-0 left-0 h-full w-full" viewBox="0 0 100 50">
      <!-- Background arc -->
      <path d="M10,50 A40,40 0 0 1 90,50" class="text-gray-300 dark:text-gray-700" stroke-width="8" stroke="currentColor" fill="none" />
      <!-- Progress arc: 70% → offset = 125.66 × (1 - 0.70) ≈ 37.7 -->
      <path d="M10,50 A40,40 0 0 1 90,50" class="text-blue-500 dark:text-blue-400" stroke-width="8" stroke="currentColor" fill="none" stroke-dasharray="125.66" stroke-dashoffset="37.7" />
    </svg>
    <!-- Flex container fills the same space as SVG, centering the text -->
    <div class="mt-4 flex h-full w-full items-center justify-center text-xl font-semibold text-gray-800 dark:text-gray-200">70%</div>
  </div>

  <!-- Variant 2: Gradient Gauge at 90% -->
  <div class="relative inline-block h-16 w-32">
    <svg class="absolute top-0 left-0 h-full w-full" viewBox="0 0 100 50">
      <defs>
        <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#10B981" />
          <stop offset="100%" stop-color="#3B82F6" />
        </linearGradient>
      </defs>
      <!-- Background arc -->
      <path d="M10,50 A40,40 0 0 1 90,50" class="text-gray-300 dark:text-gray-700" stroke-width="8" stroke="currentColor" fill="none" />
      <!-- Progress arc: 90% → offset = 125.66 × (1 - 0.90) = 12.57 -->
      <path d="M10,50 A40,40 0 0 1 90,50" stroke="url(#gaugeGrad)" stroke-width="8" stroke-linecap="round" fill="none" stroke-dasharray="125.66" stroke-dashoffset="12.57" />
    </svg>
    <div class="mt-4 flex h-full w-full items-center justify-center text-xl font-semibold text-gray-800 dark:text-gray-200">90%</div>
  </div>

  <!-- Variant 3: Thick Red Gauge at 40% -->
  <div class="relative inline-block h-16 w-32">
    <svg class="absolute top-0 left-0 h-full w-full" viewBox="0 0 100 50">
      <!-- Background arc -->
      <path d="M10,50 A40,40 0 0 1 90,50" class="text-gray-300 dark:text-gray-700" stroke-width="10" stroke="currentColor" fill="none" />
      <!-- Progress arc: 40% → offset = 125.66 × (1 - 0.40) = 75.4 -->
      <path d="M10,50 A40,40 0 0 1 90,50" class="text-red-500 dark:text-red-400" stroke-width="10" stroke="currentColor" fill="none" stroke-dasharray="125.66" stroke-dashoffset="75.4" />
    </svg>
    <div class="mt-4 flex h-full w-full items-center justify-center text-xl font-semibold text-red-500 dark:text-red-400">40%</div>
  </div>
</div>
`

export const StepProgressBarCode = ` <div class="p-6 space-y-8 md:max-w-xl lg:max-w-2xl mx-auto text-gray-800 dark:text-gray-200">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium">Blue Step Progress (50%)</span>
          <span class="text-sm font-medium">50%</span>
        </div>
        <div class="flex items-center gap-x-1">
          {/* <!-- 2 Filled, 2 Unfilled --> */}
          <div class="w-full h-2.5 bg-blue-600 dark:bg-blue-500 rounded transition duration-500"></div>
          <div class="w-full h-2.5 bg-blue-600 dark:bg-blue-500 rounded transition duration-500"></div>
          <div class="w-full h-2.5 bg-gray-300 dark:bg-neutral-600 rounded transition duration-500"></div>
          <div class="w-full h-2.5 bg-gray-300 dark:bg-neutral-600 rounded transition duration-500"></div>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium">Red Step Progress (25%)</span>
          <span class="text-sm font-medium text-red-600 dark:text-red-400">
            25%
          </span>
        </div>
        <div class="flex items-center gap-x-1">
          {/* <!-- 1 Filled, 3 Unfilled (lighter red) --> */}
          <div class="w-full h-2.5 bg-red-600 dark:bg-red-500 rounded transition duration-500"></div>
          <div class="w-full h-2.5 bg-red-100 dark:bg-red-500/30 rounded transition duration-500"></div>
          <div class="w-full h-2.5 bg-red-100 dark:bg-red-500/30 rounded transition duration-500"></div>
          <div class="w-full h-2.5 bg-red-100 dark:bg-red-500/30 rounded transition duration-500"></div>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium">Teal Step Progress (100%)</span>
          <span class="text-sm font-medium">100%</span>
        </div>
        <div class="flex items-center gap-x-1">
          {/* <!-- All Filled + Check Icon at the end --> */}
          <div class="w-full h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div class="w-full h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div class="w-full h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div class="w-full h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div class="ms-1 flex items-center justify-center w-7 h-7 rounded-full bg-teal-500 dark:bg-teal-400 text-white">
            {/* <!-- Check icon (Heroicons) --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- Variant 4: Longer Blue Steps (50%) --> */}
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium">Longer Step Progress (50%)</span>
          <span class="text-sm font-medium">50%</span>
        </div>
        <div class="flex flex-wrap items-center gap-x-1">
          {/* <!-- 2 Filled, 2 Unfilled --> */}
          <div class="w-14 h-2.5 bg-blue-600 dark:bg-blue-500 rounded transition duration-500"></div>
          <div class="w-14 h-2.5 bg-blue-600 dark:bg-blue-500 rounded transition duration-500"></div>
          <div class="w-14 h-2.5 bg-gray-300 dark:bg-neutral-600 rounded transition duration-500"></div>
          <div class="w-14 h-2.5 bg-gray-300 dark:bg-neutral-600 rounded transition duration-500"></div>
        </div>
      </div>

      {/* <!-- Variant 5: Compact Red Steps (25%) --> */}
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium">Compact Red Steps (25%)</span>
          <span class="text-sm font-medium text-red-600 dark:text-red-400">
            25%
          </span>
        </div>
        <div class="flex flex-wrap gap-1">
          {/* <!-- 1 Filled, 3 Lighter --> */}
          <div class="w-7 h-2.5 bg-red-600 dark:bg-red-500 rounded transition duration-500"></div>
          <div class="w-7 h-2.5 bg-red-200 dark:bg-red-500/30 rounded transition duration-500"></div>
          <div class="w-7 h-2.5 bg-red-200 dark:bg-red-500/30 rounded transition duration-500"></div>
          <div class="w-7 h-2.5 bg-red-200 dark:bg-red-500/30 rounded transition duration-500"></div>
        </div>
      </div>

      {/* <!-- Variant 6: Full Teal Row with Check Icon (100%) --> */}
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium">Wide Teal Steps (100%)</span>
          <span class="text-sm font-medium">100%</span>
        </div>
        <div class="flex items-center gap-x-1 flex-wrap">
          {/* <!-- 6 Teal segments + Check Icon --> */}
          <div class="w-10 h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div class="w-10 h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div class="w-10 h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div class="w-10 h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div class="w-10 h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div class="w-10 h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div class="ms-1 flex items-center justify-center w-7 h-7 rounded-full bg-teal-500 dark:bg-teal-400 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>`


    export const CirculareProgressBarCode=` <div class="flex items-center justify-center gap-4 p-5">
  <div class="relative inline-block">
    <svg class="h-24 w-24" viewBox="0 0 42 42">
      {/*
      <!-- Background circle -->
      */}
      <circle class="text-gray-300 dark:text-gray-700" stroke-width="3" stroke="currentColor" fill="none" cx="21" cy="21" r="15.9155" />
      <circle class="text-blue-500 dark:text-blue-400" stroke-width="3" stroke-linecap="round" stroke="currentColor" fill="none" cx="21" cy="21" r="15.9155" stroke-dasharray="100" stroke-dashoffset="30" />
    </svg>
    <div class="absolute inset-0 flex items-center justify-center text-xl font-semibold text-gray-800 dark:text-gray-200">70%</div>
  </div>

  <!-- Variant 2: Red Circular Progress (40%) -->

  <div class="relative inline-block">
    <svg class="h-24 w-24" viewBox="0 0 42 42">
     
      <!-- Background circle -->
    
      <circle class="text-gray-300 dark:text-gray-700" stroke-width="3" stroke="currentColor" fill="none" cx="21" cy="21" r="15.9155" />
     
      <!-- Progress circle: 40% complete (dashoffset = 100 * (1 - 0.40) = 60) -->
       
      <circle class="text-red-500 dark:text-red-400" stroke-width="3" stroke-linecap="round" stroke="currentColor" fill="none" cx="21" cy="21" r="15.9155" stroke-dasharray="100" stroke-dashoffset="60" />
    </svg>
    <div class="absolute inset-0 flex items-center justify-center text-xl font-semibold text-red-500 dark:text-red-400">40%</div>
  </div>

 
  <!-- Variant 3: Gradient Circular Progress (90%) -->
 
  <div class="relative inline-block">
    <svg class="h-24 w-24" viewBox="0 0 42 42">
      <defs>
       
        <linearGradient id="grad" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#10B981" />
          <stop offset="100%" stop-color="#3B82F6" />
        </linearGradient>
      </defs>
    
      <circle class="text-gray-300 dark:text-gray-700" stroke-width="3" stroke="currentColor" fill="none" cx="21" cy="21" r="15.9155" />

      <circle stroke-width="3" stroke-linecap="round" stroke="url(#grad)" fill="none" cx="21" cy="21" r="15.9155" stroke-dasharray="100" stroke-dashoffset="10" />
    </svg>
    <div class="absolute inset-0 flex items-center justify-center text-xl font-semibold text-gray-800 dark:text-gray-200">90%</div>
  </div>
</div>
`