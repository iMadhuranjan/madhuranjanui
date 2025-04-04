export function DefaultToolTops() {
  return (
    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="relative group">
        <svg
          className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-max px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition">
          More info about this icon
        </div>
      </div>
    </div>
  );
}

export function DarkLightToolTip(){
    return(
        <div className="flex justify-center items-end h-40">
  <div className="flex items-center justify-center p-6">
    <div className="group relative">
      <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">Light</button>
      {/* <!-- Light Tooltip --> */}
      <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-max max-w-xs -translate-x-1/2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-800 opacity-0 shadow-md transition group-hover:opacity-100">This tooltip is styled for light theme, with soft shadows and light background.</div>
    </div>
  </div>

  <div className="flex items-center justify-center p-6">
    <div className="group relative">
      <button className="rounded-lg bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-600">Dark</button>
      {/* <!-- Dark Tooltip --> */}
      <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-max max-w-xs -translate-x-1/2 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-100 opacity-0 shadow-lg transition group-hover:opacity-100">This tooltip is built for dark mode, with subtle highlights and soft contrast.</div>
    </div>
  </div>
</div>

    )
}


export function AllSideToolTipsInOneButton(){
    return(
        <div className="flex h-40 items-center justify-center bg-gray-100 p-6 dark:bg-gray-900">
  <div className="group relative">
     <div className="flex h-10 w-24 cursor-pointer items-center justify-center rounded-xl bg-blue-600 text-sm font-medium text-white transition hover:bg-blue-700">Hover me</div>

     <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-full -translate-x-1/2 opacity-0 transition group-hover:opacity-100">
      <div className="rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white shadow-md">Tooltip Top</div>
    </div>

     <div className="pointer-events-none absolute top-full left-1/2 mt-2 w-full -translate-x-1/2 opacity-0 transition group-hover:opacity-100">
      <div className="rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white shadow-md">Tooltip Bottom</div>
    </div>

     <div className="pointer-events-none absolute top-1/2 right-full mr-2 w-full -translate-y-1/2 opacity-0 transition group-hover:opacity-100">
      <div className="rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white shadow-md">Tooltip Left</div>
    </div>

    {/* <!-- Right Tooltip --> */}
    <div className="pointer-events-none absolute top-1/2 left-full ml-2 w-full -translate-y-1/2 opacity-0 transition group-hover:opacity-100">
      <div className="rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white shadow-md">Tooltip Right</div>
    </div>
  </div>
</div>

    )
}

export function AllSideTooltipWith4Button(){
    return(
        <div className="flex min-h-64 w-full items-center justify-center bg-gray-100 p-6 dark:bg-gray-900">
  <div className="flex w-full flex-wrap items-center justify-center gap-4">
     <div className="group relative flex flex-col items-start">
      <div className="relative w-full">
        <div className="pointer-events-none absolute bottom-full left-0 mb-2 w-full opacity-0 transition group-hover:opacity-100">
          <div className="w-full rounded-md bg-gray-900 px-4 py-2 text-xs text-white shadow-lg">I'm above the button — full width text goes here.</div>
        </div>
        <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-left text-white transition hover:bg-blue-700">Tooltip Top</button>
      </div>
    </div>

     <div className="group relative flex flex-col items-start">
      <div className="relative w-full">
        <div className="pointer-events-none absolute top-full left-0 mt-2 w-full opacity-0 transition group-hover:opacity-100">
          <div className="w-full rounded-md bg-gray-900 px-4 py-2 text-xs text-white shadow-lg">Tooltip below with full width text aligned to button.</div>
        </div>
        <button className="w-full rounded-lg bg-green-600 px-4 py-2 text-left text-white transition hover:bg-green-700">Tooltip Bottom</button>
      </div>
    </div>

     <div className="group relative flex items-center">
      <div className="relative flex w-full">
        <div className="pointer-events-none absolute left-full z-20 ml-3 w-full opacity-0 transition group-hover:opacity-100">
          <div className="w-full rounded-md bg-gray-900 px-4 py-2 text-xs text-white shadow-lg">I'm on the right side with full width.</div>
        </div>
        <button className="w-full rounded-lg bg-purple-600 px-4 py-2 text-left text-white transition hover:bg-purple-700">Tooltip Left</button>
      </div>
    </div>

     <div className="group relative flex items-center">
      <div className="relative flex w-full">
        <div className="pointer-events-none absolute right-full mr-3 w-full opacity-0 transition group-hover:opacity-100">
          <div className="w-full rounded-md bg-gray-900 px-4 py-2 text-xs text-white shadow-lg">I'm on the left side with full width.</div>
        </div>
        <button className="w-full rounded-lg bg-pink-600 px-4 py-2 text-left text-white transition hover:bg-pink-700">Tooltip Right</button>
      </div>
    </div>
  </div>
</div>

    )
}