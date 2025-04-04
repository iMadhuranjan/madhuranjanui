export const DefaultRadioCode=`<div class="flex flex-col gap-3 justify-center items-center p-2 md:p-5">
  <label class="inline-flex cursor-pointer items-center">
    <input
      type="radio"
      name="radioGroup"
      class="appearance-none h-6 w-6 border-2 border-gray-300 dark:border-gray-600 rounded-full transition-all duration-200
        checked:bg-violet-600 dark:checked:bg-blue-600 checked:border-violet-600 dark:checked:border-blue-600
        focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500"
    />
    <span class="ml-2 font-medium text-gray-800 dark:text-gray-50">
      First Radio Option
    </span>
  </label>

  <label class="inline-flex cursor-pointer items-center">
    <input
      type="radio"
      name="radioGroup"
      class="appearance-none h-6 w-6 border-2 border-gray-300 dark:border-gray-600 rounded-full transition-all duration-200
        checked:bg-violet-600 dark:checked:bg-blue-600 checked:border-violet-600 dark:checked:border-blue-600
        focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500"
    />
    <span class="ml-2 font-medium text-gray-800 dark:text-gray-50">
      Second Radio Option
    </span>
  </label>
</div>
`
export const DIsablledRadioCode=`<div class="flex flex-col items-center justify-center gap-3 p-2 md:p-5">
   <label class="inline-flex cursor-not-allowed items-center opacity-60">
    <input
      type="radio"
      disabled
      class="appearance-none h-6 w-6 rounded-full border-2 border-gray-300 dark:border-gray-600 transition-all duration-200 focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:outline-none"
    />
    <span class="ml-2 font-medium text-gray-800 dark:text-gray-50">
      Disabled Unchecked Radio
    </span>
  </label>

   <label class="inline-flex cursor-not-allowed items-center opacity-60">
    <input
      type="radio"
      disabled
      checked
      class="appearance-none h-6 w-6 rounded-full border-2 border-gray-300 dark:border-gray-600 transition-all duration-200 checked:border-violet-600 dark:checked:border-blue-600 checked:bg-violet-600 dark:checked:bg-blue-600 focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:outline-none"
    />
    <span class="ml-2 font-medium text-gray-900 dark:text-gray-50">
      Disabled Checked Radio
    </span>
  </label>
</div>
`
export const RadioWithLinkCode=`<div class="flex flex-col items-center justify-center gap-3 p-2 md:p-5">
  <label class="inline-flex cursor-pointer items-center">
    <input type="radio" name="agreement" class="relative h-6 w-6 appearance-none rounded-full border-2 border-gray-300 transition-all duration-200 checked:border-violet-600 checked:bg-violet-600 checked:after:absolute checked:after:inset-1 checked:after:rounded-full checked:after:bg-white focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:checked:border-blue-600 dark:checked:bg-blue-600 dark:checked:after:bg-gray-900 dark:focus:ring-blue-500" />
    <span class="ml-2 font-medium text-gray-800 dark:text-gray-50">
      I agree to the
      <a href="#" class="text-violet-600 hover:text-violet-800 hover:underline dark:text-blue-500 dark:hover:text-blue-400"> Terms &amp; Conditions </a>
    </span>
  </label>
</div>
`
export const RadioWithHelperTextCode=`<div class="flex flex-col gap-2 justify-center items-start p-4">
  <label class="inline-flex items-center cursor-pointer">
    <input
      type="radio"
      name="termsAgreement"
      class="relative appearance-none h-6 w-6 cursor-pointer rounded-full border-2 border-gray-300 dark:border-gray-600 transition-all duration-200
                 checked:border-violet-600 dark:checked:border-blue-600 checked:bg-violet-600 dark:checked:bg-blue-600
                 checked:after:absolute checked:after:inset-1 checked:after:rounded-full checked:after:bg-white dark:checked:after:bg-gray-900
                 focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:outline-none"
    />
    <span class="ml-2 font-medium text-gray-800 dark:text-gray-50">
      Yes, I accept the Terms &amp; Conditions
    </span>
  </label>
  <p class="text-sm text-gray-500 dark:text-gray-400">
    By selecting this option, you confirm that you have carefully read, understood, and agreed to abide by our Terms &amp; Conditions.
  </p>
</div>
`
export const BorderRadioCode=`<div class="flex items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
  <div class="flex gap-4 md:flex-row">
    <label class="flex cursor-pointer items-center rounded-md border border-gray-300 px-4 py-2 text-gray-800 transition-colors hover:border-violet-500 dark:border-gray-600 dark:text-gray-200 dark:hover:border-blue-500">
      <input type="radio" name="example" defaultChecked class="form-radio h-5 w-5 text-violet-600 focus:ring-2 focus:ring-violet-500 focus:outline-none dark:text-blue-600 dark:focus:ring-blue-500" />
      <span class="ml-2">Default Radio</span>
    </label>

    <label class="flex cursor-pointer items-center rounded-md border border-gray-300 px-4 py-2 text-gray-800 transition-colors hover:border-violet-500 dark:border-gray-600 dark:text-gray-200 dark:hover:border-blue-500">
      <input type="radio" name="example" class="form-radio h-5 w-5 text-violet-600 focus:ring-2 focus:ring-violet-500 focus:outline-none dark:text-blue-600 dark:focus:ring-blue-500" />
      <span class="ml-2">Alternate Option</span>
    </label>
  </div>
</div>
`
export const RadioDropDownCode=`<div class="flex justify-center items-center p-5">
  <div class="group relative inline-block text-left">
    <button
      type="button"
      class="inline-flex w-56 items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:ring-offset-gray-800"
    >
      Select Option
      <svg
        class="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </button>

     <div class="absolute right-0 z-10 hidden group-hover:block hover:block w-56 origin-top-right rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div class="py-1">
        <label class="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
          <input
            type="radio"
            name="dropdown"
            class="h-4 w-4 border-gray-300 text-violet-600 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-800 dark:text-blue-500 dark:focus:ring-blue-500"
          />
          <span class="ml-3">Option 1</span>
        </label>
        <label class="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
          <input
            type="radio"
            name="dropdown"
            class="h-4 w-4 border-gray-300 text-violet-600 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-800 dark:text-blue-500 dark:focus:ring-blue-500"
          />
          <span class="ml-3">Option 2</span>
        </label>
        <label class="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
          <input
            type="radio"
            name="dropdown"
            class="h-4 w-4 border-gray-300 text-violet-600 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-800 dark:text-blue-500 dark:focus:ring-blue-500"
          />
          <span class="ml-3">Option 3</span>
        </label>
      </div>
    </div>
  </div>
</div>
`
export const ColoredRadtioCode=`<div class="flex flex-wrap items-center justify-center gap-4 p-5">
  <!-- {/* Red */} -->
  <div class="flex items-center">
    <input id="red-radio" type="radio" name="color-radio" class="h-4 w-4 appearance-none rounded-full border-2 border-gray-300 checked:bg-red-600 focus:ring-2 focus:ring-red-500 dark:border-gray-600 dark:checked:bg-red-600 dark:focus:ring-red-600" />
    <label htmlFor="red-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Red</label>
  </div>

  <!-- {/* Orange */} -->
  <div class="flex items-center">
    <input id="orange-radio" type="radio" name="color-radio" class="h-4 w-4 appearance-none rounded-full border-2 border-gray-300 checked:bg-orange-500 focus:ring-2 focus:ring-orange-500 dark:border-gray-600 dark:checked:bg-orange-500 dark:focus:ring-orange-600" />
    <label htmlFor="orange-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Orange</label>
  </div>

  <!-- {/* Amber */} -->
  <div class="flex items-center">
    <input id="amber-radio" type="radio" name="color-radio" class="h-4 w-4 appearance-none rounded-full border-2 border-gray-300 checked:bg-amber-500 focus:ring-2 focus:ring-amber-500 dark:border-gray-600 dark:checked:bg-amber-500 dark:focus:ring-amber-600" />
    <label htmlFor="amber-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Amber</label>
  </div>

  <!-- {/* Lime */} -->
  <div class="flex items-center">
    <input id="lime-radio" type="radio" name="color-radio" class="h-4 w-4 appearance-none rounded-full border-2 border-gray-300 checked:bg-lime-500 focus:ring-2 focus:ring-lime-500 dark:border-gray-600 dark:checked:bg-lime-500 dark:focus:ring-lime-600" />
    <label htmlFor="lime-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lime</label>
  </div>

  <!-- {/* Green */} -->
  <div class="flex items-center">
    <input id="green-radio" type="radio" name="color-radio" class="h-4 w-4 appearance-none rounded-full border-2 border-gray-300 checked:bg-green-600 focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:checked:bg-green-600 dark:focus:ring-green-600" />
    <label htmlFor="green-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Green</label>
  </div>

  <!-- {/* Cyan */} -->
  <div class="flex items-center">
    <input id="cyan-radio" type="radio" name="color-radio" class="h-4 w-4 appearance-none rounded-full border-2 border-gray-300 checked:bg-cyan-500 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:checked:bg-cyan-500 dark:focus:ring-cyan-600" />
    <label htmlFor="cyan-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cyan</label>
  </div>

  <!-- {/* Blue */} -->
  <div class="flex items-center">
    <input id="blue-radio" type="radio" name="color-radio" class="h-4 w-4 appearance-none rounded-full border-2 border-gray-300 checked:bg-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:checked:bg-blue-600 dark:focus:ring-blue-600" />
    <label htmlFor="blue-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blue</label>
  </div>

  <!-- {/* Violet */} -->
  <div class="flex items-center">
    <input id="violet-radio" type="radio" name="color-radio" class="h-4 w-4 appearance-none rounded-full border-2 border-gray-300 checked:bg-violet-600 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:checked:bg-violet-600 dark:focus:ring-violet-600" />
    <label htmlFor="violet-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Violet</label>
  </div>

  <!-- {/* Purple */} -->
  <div class="flex items-center">
    <input id="purple-radio" type="radio" name="color-radio" class="h-4 w-4 appearance-none rounded-full border-2 border-gray-300 checked:bg-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:checked:bg-purple-600 dark:focus:ring-purple-600" />
    <label htmlFor="purple-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Purple</label>
  </div>

  <!-- {/* Pink */} -->
  <div class="flex items-center">
    <input id="pink-radio" type="radio" name="color-radio" class="h-4 w-4 appearance-none rounded-full border-2 border-gray-300 checked:bg-pink-600 focus:ring-2 focus:ring-pink-500 dark:border-gray-600 dark:checked:bg-pink-600 dark:focus:ring-pink-600" />
    <label htmlFor="pink-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pink</label>
  </div>
</div>
`
export const TileWithDescriptionCode=  `<div class="p-5 max-w-md mx-auto">
  <ul class="space-y-4">
    <li>
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="radio" name="plan" class="mt-1 h-5 w-5 text-violet-600 dark:text-blue-500 border-gray-300 dark:border-gray-600 focus:ring-violet-500 dark:focus:ring-blue-500" />
        <div>
          <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Basic Plan</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">5 Projects / 10 GB Storage / Email Support</p>
        </div>
      </label>
    </li>

    <li>
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="radio" name="plan" defaultChecked class="mt-1 h-5 w-5 text-violet-600 dark:text-blue-500 border-gray-300 dark:border-gray-600 focus:ring-violet-500 dark:focus:ring-blue-500" />
        <div>
          <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Pro Plan</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Unlimited Projects / 100 GB Storage / Priority Support</p>
        </div>
      </label>
    </li>

    <li>
      <label class="flex items-start gap-3 cursor-pointer">
        <input type="radio" name="plan" class="mt-1 h-5 w-5 text-violet-600 dark:text-blue-500 border-gray-300 dark:border-gray-600 focus:ring-violet-500 dark:focus:ring-blue-500" />
        <div>
          <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Enterprise Plan</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Custom Projects / 1 TB+ Storage / 24/7 Dedicated Support</p>
        </div>
      </label>
    </li>
  </ul>
</div>
`

export const RadioCardWithTitleAndDescriptionCode=`<div class="mx-auto max-w-2xl bg-white p-6 shadow-md dark:bg-gray-800">
  <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Storage Options</h3>

  <div class="space-y-3">
    <!-- Option 1 -->
    <label class="flex cursor-pointer items-center rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700">
      <input type="radio" name="storage" value="256" class="h-5 w-5 text-blue-600 dark:text-blue-500" checked />
      <span class="ml-3 min-w-[60px] font-medium text-gray-900 dark:text-white">256 GB</span>
      <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">Basic storage for essential apps</span>
    </label>

    <!-- Option 2 -->
    <label class="flex cursor-pointer items-center rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700">
      <input type="radio" name="storage" value="512" class="h-5 w-5 text-blue-600 dark:text-blue-500" />
      <span class="ml-3 min-w-[60px] font-medium text-gray-900 dark:text-white">512 GB</span>
      <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">Great for most users</span>
    </label>

    <!-- Option 3 -->
    <label class="flex cursor-pointer items-center rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700">
      <input type="radio" name="storage" value="1" class="h-5 w-5 text-blue-600 dark:text-blue-500" />
      <span class="ml-3 min-w-[60px] font-medium text-gray-900 dark:text-white">1 TB</span>
      <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">For power users and gamers</span>
    </label>

    <!-- Option 4 -->
    <label class="flex cursor-pointer items-center rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700">
      <input type="radio" name="storage" value="2" class="h-5 w-5 text-blue-600 dark:text-blue-500" />
      <span class="ml-3 min-w-[60px] font-medium text-gray-900 dark:text-white">2 TB</span>
      <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">Professional content creators</span>
    </label>

    <!-- Option 5 -->
    <label class="flex cursor-pointer items-center rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700">
      <input type="radio" name="storage" value="4" class="h-5 w-5 text-blue-600 dark:text-blue-500" />
      <span class="ml-3 min-w-[60px] font-medium text-gray-900 dark:text-white">4 TB</span>
      <span class="ml-2 text-sm text-gray-500 dark:text-gray-400">High-end workstations</span>
    </label>
  </div>

  <p class="mt-4 cursor-pointer text-sm text-blue-600 hover:underline dark:text-blue-400">View performance details</p>
</div>
`

 