export function SimpleProgressBar() {
  return (
    <div className="p-5">
      <div className="w-full mx-auto bg-violet-200 dark:bg-blue-200 rounded-full h-4">
        <div className="h-4 rounded-full bg-violet-600 dark:bg-blue-600 w-1/2"></div>
      </div>
    </div>
  );
}

export function ProgressBarHeight() {
  return (
    <div className="p-5 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md mx-auto space-y-4">
        {/* Progress 1 - 20% */}
        <div className="w-full bg-violet-200 dark:bg-blue-200 rounded-full h-2">
          <div className="h-2 w-[20%] bg-violet-600 dark:bg-blue-600 rounded-full"></div>
        </div>

        {/* Progress 2 - 40% */}
        <div className="w-full bg-violet-200 dark:bg-blue-200 rounded-full h-3">
          <div className="h-3 w-[40%] bg-violet-600 dark:bg-blue-600 rounded-full"></div>
        </div>

        {/* Progress 3 - 75% */}
        <div className="w-full bg-violet-200 dark:bg-blue-200 rounded-full h-4">
          <div className="h-4 w-[60%] bg-violet-600 dark:bg-blue-600 rounded-full"></div>
        </div>

        {/* Progress 4 - 100% */}
        <div className="w-full bg-violet-200 dark:bg-blue-200 rounded-full h-5">
          <div className="h-5 w-[80%] bg-violet-600 dark:bg-blue-600 rounded-full"></div>
        </div>

        {/* Progress 5 - 100% */}
        <div className="w-full bg-violet-200 dark:bg-blue-200 rounded-full h-6">
          <div className="h-6 w-full bg-violet-600 dark:bg-blue-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export function ProgresBarWithPercentageInside() {
  return (
    <div className="bg-gray-100 p-5 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-md space-y-4 text-sm font-medium text-white">
        {/* Progress 1 - 20% */}
        <div className="relative h-5 w-full overflow-hidden rounded-full bg-violet-200 dark:bg-blue-200">
          <div className="flex h-5 w-1/5 items-center justify-center rounded-full bg-violet-600 dark:bg-blue-600">
            <span>20%</span>
          </div>
        </div>

        {/* Progress 2 - 40% */}
        <div className="relative h-5 w-full overflow-hidden rounded-full bg-violet-200 dark:bg-blue-200">
          <div className="flex h-5 w-2/5 items-center justify-center rounded-full bg-violet-600 dark:bg-blue-600">
            <span>40%</span>
          </div>
        </div>

        {/* Progress 3 - 75% */}
        <div className="relative h-5 w-full overflow-hidden rounded-full bg-violet-200 dark:bg-blue-200">
          <div className="flex h-5 w-3/4 items-center justify-center rounded-full bg-violet-600 dark:bg-blue-600">
            <span>75%</span>
          </div>
        </div>

        {/* Progress 4 - 100% */}
        <div className="relative h-5 w-full overflow-hidden rounded-full bg-violet-200 dark:bg-blue-200">
          <div className="flex h-5 w-[95%] items-center justify-center rounded-full bg-violet-600 dark:bg-blue-600">
            <span>Almost Completed</span>
          </div>
        </div>

        {/* Progress 5 - 100% */}
        <div className="relative h-5 w-full overflow-hidden rounded-full bg-violet-200 dark:bg-blue-200">
          <div className="flex h-5 w-full items-center justify-center rounded-full bg-violet-600 dark:bg-blue-600">
            <span>Done</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ColoredProgressBar() {
  return (
    <div className="p-5 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-xl mx-auto space-y-4 text-sm font-medium">
        {/* Progress 1 - 25% - Red */}
        <div className="w-full bg-red-100 dark:bg-red-900 rounded-full h-5 overflow-hidden relative">
          <div className="h-5 w-1/4 bg-red-600 rounded-full flex items-center justify-center text-white">
            <span className="w-full text-center">25%</span>
          </div>
        </div>

        {/* Progress 2 - 40% - Orange */}
        <div className="w-full bg-orange-100 dark:bg-orange-900 rounded-full h-5 overflow-hidden relative">
          <div className="h-5 w-2/5 bg-orange-500 rounded-full flex items-center justify-center text-white">
            <span className="w-full text-center">40%</span>
          </div>
        </div>

        {/* Progress 3 - 50% - Amber */}
        <div className="w-full bg-amber-100 dark:bg-amber-900 rounded-full h-5 overflow-hidden relative">
          <div className="h-5 w-1/2 bg-amber-500 text-black dark:text-black rounded-full flex items-center justify-center">
            <span className="w-full text-center">50%</span>
          </div>
        </div>

        {/* Progress 4 - 60% - Yellow */}
        <div className="w-full bg-yellow-100 dark:bg-yellow-900 rounded-full h-5 overflow-hidden relative">
          <div className="h-5 w-3/5 bg-yellow-400 text-black dark:text-black rounded-full flex items-center justify-center">
            <span className="w-full text-center">60%</span>
          </div>
        </div>

        {/* Progress 5 - 66% - Lime */}
        <div className="w-full bg-lime-100 dark:bg-lime-900 rounded-full h-5 overflow-hidden relative">
          <div className="h-5 w-2/3 bg-lime-500 text-black dark:text-black rounded-full flex items-center justify-center">
            <span className="w-full text-center">66%</span>
          </div>
        </div>

        {/* Progress 6 - 75% - Green */}
        <div className="w-full bg-green-100 dark:bg-green-900 rounded-full h-5 overflow-hidden relative">
          <div className="h-5 w-3/4 bg-green-600 rounded-full flex items-center justify-center text-white">
            <span className="w-full text-center">75%</span>
          </div>
        </div>

        {/* Progress 7 - 80% - Teal */}
        <div className="w-full bg-teal-100 dark:bg-teal-900 rounded-full h-5 overflow-hidden relative">
          <div className="h-5 w-4/5 bg-teal-500 rounded-full flex items-center justify-center text-white">
            <span className="w-full text-center">80%</span>
          </div>
        </div>

        {/* Progress 8 - 85% - Cyan */}
        <div className="w-full bg-cyan-100 dark:bg-cyan-900 rounded-full h-5 overflow-hidden relative">
          <div className="h-5 w-5/6 bg-cyan-500 rounded-full flex items-center justify-center text-white">
            <span className="w-full text-center">85%</span>
          </div>
        </div>

        {/* Progress 9 - 90% - Indigo */}
        <div className="w-full bg-indigo-100 dark:bg-indigo-900 rounded-full h-5 overflow-hidden relative">
          <div className="h-5 w-11/12 bg-indigo-600 rounded-full flex items-center justify-center text-white">
            <span className="w-full text-center">90%</span>
          </div>
        </div>

        {/* Progress 10 - 100% - Violet */}
        <div className="w-full bg-violet-100 dark:bg-violet-900 rounded-full h-5 overflow-hidden relative">
          <div className="h-5 w-full bg-violet-600 rounded-full flex items-center justify-center text-white">
            <span className="w-full text-center">Complete</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VerticalProgressBar() {
  return (
    <div className="flex justify-center bg-regrayd-100 p-5 dark:bg-gray-900">
      <div className="flex items-end space-x-3">
        <div className="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-red-400 dark:bg-red-800">
          <div className="absolute inset-x-0 bottom-0 flex h-1/4 items-center justify-center bg-red-600 text-xs text-white"></div>
        </div>

        <div className="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-orange-400 dark:bg-orange-800">
          <div className="absolute inset-x-0 bottom-0 flex h-2/5 items-center justify-center bg-orange-500 text-xs text-white"></div>
        </div>

        <div className="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-amber-400 dark:bg-amber-800">
          <div className="absolute inset-x-0 bottom-0 flex h-1/2 items-center justify-center bg-amber-500 text-xs text-black"></div>
        </div>

        <div className="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-yellow-400 dark:bg-yellow-800">
          <div className="absolute inset-x-0 bottom-0 flex h-3/5 items-center justify-center bg-yellow-500 text-xs text-black"></div>
        </div>

        <div className="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-green-400 dark:bg-green-800">
          <div className="absolute inset-x-0 bottom-0 flex h-3/4 items-center justify-center bg-green-600 text-xs text-white"></div>
        </div>

        <div className="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-teal-400 dark:bg-teal-800">
          <div className="absolute inset-x-0 bottom-0 flex h-4/5 items-center justify-center bg-teal-500 text-xs text-white"></div>
        </div>

        <div className="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-cyan-400 dark:bg-cyan-800">
          <div className="absolute inset-x-0 bottom-0 flex h-5/6 items-center justify-center bg-cyan-500 text-xs text-white"></div>
        </div>

        <div className="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-indigo-400 dark:bg-indigo-800">
          <div className="absolute inset-x-0 bottom-0 flex h-[90%] items-center justify-center bg-indigo-600 text-xs text-white"></div>
        </div>

        <div className="relative flex h-72 w-5 flex-col-reverse overflow-hidden rounded-lg bg-violet-400 dark:bg-violet-800">
          <div className="absolute inset-x-0 bottom-0 flex h-full items-center justify-center bg-violet-600 text-xs text-white"></div>
        </div>
      </div>
    </div>
  );
}

export function ProgressDifferentVarient() {
  return (
    <div className="p-6 space-y-6 w-full max-w-4xl mx-auto">
      <div>
        <div className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-100">
          Basic Progress (50%)
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full w-1/2"></div>
        </div>
      </div>

      <div>
        <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded h-4 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-700 dark:text-gray-200">
            25%
          </div>
          <div className="bg-red-500 dark:bg-red-400 h-4 w-1/4"></div>
        </div>
      </div>

      <div>
        <div className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Gradient Progress (75%)
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div className="bg-gradient-to-r from-yellow-500 dark:from-yellow-400 to-yellow-300 dark:to-yellow-200 h-3 rounded-full w-3/4"></div>
        </div>
      </div>

      <div>
        <div className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Fully Completed (100%)
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div className="bg-green-500 dark:bg-green-400 h-2 rounded-full w-full"></div>
        </div>
        <div className="mt-1 text-sm text-green-600 dark:text-green-400 font-medium">
          Complete
        </div>
      </div>

      <div>
        <div className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Segmented Progress
        </div>
        <div className="flex h-4 w-full overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
          <div className="w-2/6 bg-purple-500 dark:bg-purple-400"></div>
          <div className="w-2/6 bg-pink-500 dark:bg-pink-400"></div>
          <div className="w-2/6 bg-indigo-500 dark:bg-indigo-400"></div>
        </div>
      </div>

      <div>
        <div className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Thicker Progress (60%)
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-6">
          <div className="bg-orange-500 dark:bg-orange-400 h-6 rounded w-3/5"></div>
        </div>
      </div>

      <div>
        <div className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Pill Shaped Progress (80%)
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 h-4 rounded-full overflow-hidden">
          <div className="bg-teal-500 dark:bg-teal-400 h-4 rounded-full flex items-center justify-end w-4/5 px-2 text-white text-xs font-medium">
            Done
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
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
    </div>
  );
}

export function StepProgressBar() {
  return (
    <div className="p-6 space-y-8 md:max-w-xl lg:max-w-2xl mx-auto text-gray-800 dark:text-gray-200">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Blue Step Progress (50%)</span>
          <span className="text-sm font-medium">50%</span>
        </div>
        <div className="flex items-center gap-x-1">
          {/* <!-- 2 Filled, 2 Unfilled --> */}
          <div className="w-full h-2.5 bg-blue-600 dark:bg-blue-500 rounded transition duration-500"></div>
          <div className="w-full h-2.5 bg-blue-600 dark:bg-blue-500 rounded transition duration-500"></div>
          <div className="w-full h-2.5 bg-gray-300 dark:bg-neutral-600 rounded transition duration-500"></div>
          <div className="w-full h-2.5 bg-gray-300 dark:bg-neutral-600 rounded transition duration-500"></div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Red Step Progress (25%)</span>
          <span className="text-sm font-medium text-red-600 dark:text-red-400">
            25%
          </span>
        </div>
        <div className="flex items-center gap-x-1">
          {/* <!-- 1 Filled, 3 Unfilled (lighter red) --> */}
          <div className="w-full h-2.5 bg-red-600 dark:bg-red-500 rounded transition duration-500"></div>
          <div className="w-full h-2.5 bg-red-100 dark:bg-red-500/30 rounded transition duration-500"></div>
          <div className="w-full h-2.5 bg-red-100 dark:bg-red-500/30 rounded transition duration-500"></div>
          <div className="w-full h-2.5 bg-red-100 dark:bg-red-500/30 rounded transition duration-500"></div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Teal Step Progress (100%)</span>
          <span className="text-sm font-medium">100%</span>
        </div>
        <div className="flex items-center gap-x-1">
          {/* <!-- All Filled + Check Icon at the end --> */}
          <div className="w-full h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div className="w-full h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div className="w-full h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div className="w-full h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div className="ms-1 flex items-center justify-center w-7 h-7 rounded-full bg-teal-500 dark:bg-teal-400 text-white">
            {/* <!-- Check icon (Heroicons) --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
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
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">
            Longer Step Progress (50%)
          </span>
          <span className="text-sm font-medium">50%</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-1">
          {/* <!-- 2 Filled, 2 Unfilled --> */}
          <div className="w-14 h-2.5 bg-blue-600 dark:bg-blue-500 rounded transition duration-500"></div>
          <div className="w-14 h-2.5 bg-blue-600 dark:bg-blue-500 rounded transition duration-500"></div>
          <div className="w-14 h-2.5 bg-gray-300 dark:bg-neutral-600 rounded transition duration-500"></div>
          <div className="w-14 h-2.5 bg-gray-300 dark:bg-neutral-600 rounded transition duration-500"></div>
        </div>
      </div>

      {/* <!-- Variant 5: Compact Red Steps (25%) --> */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Compact Red Steps (25%)</span>
          <span className="text-sm font-medium text-red-600 dark:text-red-400">
            25%
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {/* <!-- 1 Filled, 3 Lighter --> */}
          <div className="w-7 h-2.5 bg-red-600 dark:bg-red-500 rounded transition duration-500"></div>
          <div className="w-7 h-2.5 bg-red-200 dark:bg-red-500/30 rounded transition duration-500"></div>
          <div className="w-7 h-2.5 bg-red-200 dark:bg-red-500/30 rounded transition duration-500"></div>
          <div className="w-7 h-2.5 bg-red-200 dark:bg-red-500/30 rounded transition duration-500"></div>
        </div>
      </div>

      {/* <!-- Variant 6: Full Teal Row with Check Icon (100%) --> */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Wide Teal Steps (100%)</span>
          <span className="text-sm font-medium">100%</span>
        </div>
        <div className="flex items-center gap-x-1 flex-wrap">
          {/* <!-- 6 Teal segments + Check Icon --> */}
          <div className="w-10 h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div className="w-10 h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div className="w-10 h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div className="w-10 h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div className="w-10 h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div className="w-10 h-2.5 bg-teal-500 dark:bg-teal-400 rounded transition duration-500"></div>
          <div className="ms-1 flex items-center justify-center w-7 h-7 rounded-full bg-teal-500 dark:bg-teal-400 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
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
    </div>
  );
}

export function CircularProgressBar() {
  return (
    <div className="flex items-center flex-wrap justify-center gap-4 p-5">
      {/* <!-- Variant 1: Blue Circular Progress (70%) --> */}
      <div className="relative inline-block">
        <svg className="w-24 h-24" viewBox="0 0 42 42">
          {/* <!-- Background circle --> */}
          <circle
            className="text-gray-300 dark:text-gray-700"
            stroke-width="3"
            stroke="currentColor"
            fill="none"
            cx="21"
            cy="21"
            r="15.9155"
          />
          <circle
            className="text-blue-500 dark:text-blue-400"
            stroke-width="3"
            stroke-linecap="round"
            stroke="currentColor"
            fill="none"
            cx="21"
            cy="21"
            r="15.9155"
            stroke-dasharray="100"
            stroke-dashoffset="30"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-gray-800 dark:text-gray-200">
          70%
        </div>
      </div>

      {/* <!-- Variant 2: Red Circular Progress (40%) --> */}
      <div className="relative inline-block">
        <svg className="w-24 h-24" viewBox="0 0 42 42">
          {/* <!-- Background circle --> */}
          <circle
            className="text-gray-300 dark:text-gray-700"
            stroke-width="3"
            stroke="currentColor"
            fill="none"
            cx="21"
            cy="21"
            r="15.9155"
          />
          {/* <!-- Progress circle: 40% complete (dashoffset = 100 * (1 - 0.40) = 60) --> */}
          <circle
            className="text-red-500 dark:text-red-400"
            stroke-width="3"
            stroke-linecap="round"
            stroke="currentColor"
            fill="none"
            cx="21"
            cy="21"
            r="15.9155"
            stroke-dasharray="100"
            stroke-dashoffset="60"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-red-500 dark:text-red-400">
          40%
        </div>
      </div>

      {/* <!-- Variant 3: Gradient Circular Progress (90%) --> */}
      <div className="relative inline-block">
        <svg className="w-24 h-24" viewBox="0 0 42 42">
          <defs>
            {/* <!-- Define a linear gradient --> */}
            <linearGradient id="grad" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#10B981" />
              <stop offset="100%" stop-color="#3B82F6" />
            </linearGradient>
          </defs>
          {/* <!-- Background circle --> */}
          <circle
            className="text-gray-300 dark:text-gray-700"
            stroke-width="3"
            stroke="currentColor"
            fill="none"
            cx="21"
            cy="21"
            r="15.9155"
          />

          <circle
            stroke-width="3"
            stroke-linecap="round"
            stroke="url(#grad)"
            fill="none"
            cx="21"
            cy="21"
            r="15.9155"
            stroke-dasharray="100"
            stroke-dashoffset="10"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-gray-800 dark:text-gray-200">
          90%
        </div>
      </div>
    </div>
  );
}

export function GaugeProgressBar() {
  return (
    <div className="flex items-center justify-center gap-10 p-5 dark:bg-black flex-wrap">
      <div className="relative inline-block h-16 w-32">
        <svg
          className="absolute top-0 left-0 h-full w-full"
          viewBox="0 0 100 50"
        >
          <path
            d="M10,50 A40,40 0 0 1 90,50"
            className="text-gray-300 dark:text-gray-700"
            stroke-width="8"
            stroke="currentColor"
            fill="none"
          />
          <path
            d="M10,50 A40,40 0 0 1 90,50"
            className="text-blue-500 dark:text-blue-400"
            stroke-width="8"
            stroke="currentColor"
            fill="none"
            stroke-dasharray="125.66"
            stroke-dashoffset="37.7"
          />
        </svg>
        <div className="mt-4 flex h-full w-full items-center justify-center text-xl font-semibold text-gray-800 dark:text-gray-200">
          70%
        </div>
      </div>

      <div className="relative inline-block h-16 w-32">
        <svg
          className="absolute top-0 left-0 h-full w-full"
          viewBox="0 0 100 50"
        >
          <defs>
            <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#10B981" />
              <stop offset="100%" stop-color="#3B82F6" />
            </linearGradient>
          </defs>
          <path
            d="M10,50 A40,40 0 0 1 90,50"
            className="text-gray-300 dark:text-gray-700"
            stroke-width="8"
            stroke="currentColor"
            fill="none"
          />
          <path
            d="M10,50 A40,40 0 0 1 90,50"
            stroke="url(#gaugeGrad)"
            stroke-width="8"
            stroke-linecap="round"
            fill="none"
            stroke-dasharray="125.66"
            stroke-dashoffset="12.57"
          />
        </svg>
        <div className="mt-4 flex h-full w-full items-center justify-center text-xl font-semibold text-gray-800 dark:text-gray-200">
          90%
        </div>
      </div>

      <div className="relative inline-block h-16 w-32">
        <svg
          className="absolute top-0 left-0 h-full w-full"
          viewBox="0 0 100 50"
        >
          <path
            d="M10,50 A40,40 0 0 1 90,50"
            className="text-gray-300 dark:text-gray-700"
            stroke-width="10"
            stroke="currentColor"
            fill="none"
          />
          <path
            d="M10,50 A40,40 0 0 1 90,50"
            className="text-red-500 dark:text-red-400"
            stroke-width="10"
            stroke="currentColor"
            fill="none"
            stroke-dasharray="125.66"
            stroke-dashoffset="75.4"
          />
        </svg>
        <div className="mt-4 flex h-full w-full items-center justify-center text-xl font-semibold text-red-500 dark:text-red-400">
          40%
        </div>
      </div>
    </div>
  );
}
