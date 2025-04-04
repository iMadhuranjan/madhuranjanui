export const SImpleCheckBoxCode=`  <div class="flex flex-col gap-3 justify-center items-center p-2 md:p-5">
      <label class="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          class="relative h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-gray-300 transition-all duration-200 checked:border-blue-600 checked:bg-blue-600 checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white checked:after:content-['✓'] focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <span class="ml-2 font-medium text-gray-800 dark:text-gray-50">
          Default Checkbox
        </span>
      </label>
    </div>`

    export const DisabledCheckBoxCode=`<div class="flex flex-col items-center justify-center gap-3 p-2 md:p-5">
  <!-- Disabled Unchecked Checkbox -->
  <label class="inline-flex cursor-not-allowed items-center opacity-60">
    <input type="checkbox" disabled class="relative h-6 w-6 cursor-not-allowed appearance-none rounded-md border-2 border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
    <span class="ml-2 font-medium text-gray-800 dark:text-gray-50"> Disabled Unchecked Checkbox </span>
  </label>

  <!-- Disabled Checked Checkbox -->
  <label class="inline-flex cursor-not-allowed items-center opacity-60">
    <input type="checkbox" disabled checked class="relative h-6 w-6 cursor-not-allowed appearance-none rounded-md border-2 border-gray-300 transition-all duration-200 checked:border-blue-600 checked:bg-blue-600 checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white checked:after:content-['✓'] focus:ring-2 focus:ring-blue-500 focus:outline-none" />
    <span class="ml-2 font-medium text-gray-900 dark:text-gray-50"> Disabled Checked Checkbox </span>
  </label>
</div>
`

export const CheckBoxWithLinkCode=`<div class="flex flex-col gap-3 justify-center items-center p-2 md:p-5">
  <label class="inline-flex cursor-pointer items-center">
    <input
      type="checkbox"
      class="relative h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-gray-300 transition-all duration-200
             checked:border-blue-600 checked:bg-blue-600
             checked:after:absolute checked:after:inset-0 checked:after:flex
             checked:after:items-center checked:after:justify-center
             checked:after:text-white checked:after:content-['✓']
             focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
    <span class="ml-2 font-medium text-gray-800 dark:text-gray-50">
      I agree to the 
      <a href="#" class="underline text-blue-600 hover:text-blue-800">
        Terms &amp; Conditions
      </a>
    </span>
  </label>
</div>
`

export const CheckBoxWithHelperTextCode=`<div class="flex flex-col gap-2 justify-center items-start p-4">
  <label class="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      class="relative h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-gray-300 transition-all duration-200
             focus:ring-2 focus:ring-blue-500 focus:outline-none
             checked:border-blue-600 checked:bg-blue-600
             checked:after:absolute checked:after:inset-0 checked:after:flex
             checked:after:items-center checked:after:justify-center
             checked:after:text-white checked:after:content-['✓']"
    />
    <span class="ml-2 font-medium text-gray-800 dark:text-gray-50">
      I agree to the Terms &amp; Conditions
    </span>
  </label>
  <p class="text-sm text-gray-500 dark:text-gray-400">
    By checking this box, you confirm that you have read and agree to our Terms &amp; Conditions.
  </p>
</div>
`

export const BorderCheckBoxCode=` <div class="flex items-center justify-center bg-gray-900 p-4">
      <div class="flex gap-4 md:flex-row">
        <label
          class="flex cursor-pointer items-center rounded-md border border-gray-600 
             px-4 py-2 text-gray-200 transition-colors hover:border-gray-400"
        >
          <input
            type="radio"
            name="example"
            checked
            class="form-radio h-5 w-5 text-blue-600 
               focus:ring-0 focus:outline-none"
          />
          <span class="ml-2">Default radio</span>
        </label>

        <label
          class="flex cursor-pointer items-center rounded-md border border-gray-600 
             px-4 py-2 text-gray-200 transition-colors hover:border-gray-400"
        >
          <input
            type="radio"
            name="example"
            class="form-radio h-5 w-5 text-blue-600 
               focus:ring-0 focus:outline-none"
          />
          <span class="ml-2">Checked state</span>
        </label>
      </div>
    </div>`

    export const CheckBoxDropDownCode=`  <div class="flex justify-center items-center p-5 ">
      <div class="group relative inline-block text-left">
        <button
          type="button"
          class="inline-flex w-56 items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors duration-150 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800"
          aria-haspopup="true"
          aria-expanded="false"
          id="options-menu"
          onclick="this.nextElementSibling.classList.toggle('hidden')"
        >
          Select Options
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <div
          class="absolute right-0 z-10 mt-2 hidden w-56 origin-top-right rounded-md border border-gray-200 bg-white shadow-lg focus:outline-none dark:border-gray-700 dark:bg-gray-800"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div class="py-1" role="none">
            <label class="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 transition-colors duration-150 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
              <input
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-blue-500 dark:focus:ring-blue-600"
              />
              <span class="ml-3">Option 1</span>
            </label>
            <label class="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 transition-colors duration-150 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
              <input
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-blue-500 dark:focus:ring-blue-600"
              />
              <span class="ml-3">Option 2</span>
            </label>
            <label class="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 transition-colors duration-150 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
              <input
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-blue-500 dark:focus:ring-blue-600"
              />
              <span class="ml-3">Option 3</span>
            </label>
          </div>
        </div>
      </div>
    </div>`

    export const ColoredChekBoxCode=`<div class="flex items-center justify-center gap-3 flex-wrap p-5">
  <!-- Red -->
  <div class="flex items-center">
    <input checked id="red-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-red-600 focus:ring-2 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-red-600" />
    <label for="red-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Red</label>
  </div>

  <!-- Orange -->
  <div class="flex items-center">
    <input checked id="orange-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-orange-500 focus:ring-2 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-orange-600" />
    <label for="orange-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Orange</label>
  </div>

  <!-- Amber -->
  <div class="flex items-center">
    <input checked id="amber-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-amber-500 focus:ring-2 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-amber-600" />
    <label for="amber-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Amber</label>
  </div>

  <!-- Yellow -->
  <div class="flex items-center">
    <input checked id="yellow-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-yellow-400 focus:ring-2 focus:ring-yellow-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-yellow-600" />
    <label for="yellow-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow</label>
  </div>

  <!-- Lime -->
  <div class="flex items-center">
    <input checked id="lime-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-lime-500 focus:ring-2 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-lime-600" />
    <label for="lime-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lime</label>
  </div>

  <!-- Green -->
  <div class="flex items-center">
    <input checked id="green-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-green-600 focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-green-600" />
    <label for="green-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Green</label>
  </div>

  <!-- Emerald -->
  <div class="flex items-center">
    <input checked id="emerald-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-emerald-600 focus:ring-2 focus:ring-emerald-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-emerald-600" />
    <label for="emerald-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Emerald</label>
  </div>

  <!-- Teal -->
  <div class="flex items-center">
    <input checked id="teal-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-teal-600 focus:ring-2 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-teal-600" />
    <label for="teal-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teal</label>
  </div>

  <!-- Cyan -->
  <div class="flex items-center">
    <input checked id="cyan-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-cyan-500 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-cyan-600" />
    <label for="cyan-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cyan</label>
  </div>

  <!-- Sky -->
  <div class="flex items-center">
    <input checked id="sky-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-sky-500 focus:ring-2 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-sky-600" />
    <label for="sky-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sky</label>
  </div>

  <!-- Blue -->
  <div class="flex items-center">
    <input checked id="blue-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600" />
    <label for="blue-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blue</label>
  </div>

  <!-- Indigo -->
  <div class="flex items-center">
    <input checked id="indigo-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-indigo-600" />
    <label for="indigo-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Indigo</label>
  </div>

  <!-- Violet -->
  <div class="flex items-center">
    <input checked id="violet-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-violet-600 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-violet-600" />
    <label for="violet-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Violet</label>
  </div>

  <!-- Purple -->
  <div class="flex items-center">
    <input checked id="purple-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600" />
    <label for="purple-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Purple</label>
  </div>

  <!-- Fuchsia -->
  <div class="flex items-center">
    <input checked id="fuchsia-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-fuchsia-600 focus:ring-2 focus:ring-fuchsia-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-fuchsia-600" />
    <label for="fuchsia-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fuchsia</label>
  </div>

  <!-- Pink -->
  <div class="flex items-center">
    <input checked id="pink-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-pink-600 focus:ring-2 focus:ring-pink-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-pink-600" />
    <label for="pink-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pink</label>
  </div>

  <!-- Rose -->
  <div class="flex items-center">
    <input checked id="rose-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-rose-600 focus:ring-2 focus:ring-rose-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-rose-600" />
    <label for="rose-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rose</label>
  </div>

  <!-- Gray -->
  <div class="flex items-center">
    <input checked id="gray-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-gray-500 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600" />
    <label for="gray-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gray</label>
  </div>

  <!-- Stone -->
  <div class="flex items-center">
    <input checked id="stone-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-stone-500 focus:ring-2 focus:ring-stone-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-stone-600" />
    <label for="stone-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stone</label>
  </div>

  <!-- Zinc -->
  <div class="flex items-center">
    <input checked id="zinc-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-zinc-500 focus:ring-2 focus:ring-zinc-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-zinc-600" />
    <label for="zinc-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Zinc</label>
  </div>

  <!-- Neutral -->
  <div class="flex items-center">
    <input checked id="neutral-checkbox" type="checkbox" value="" class="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-neutral-500 focus:ring-2 focus:ring-neutral-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-neutral-600" />
    <label for="neutral-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Neutral</label>
  </div>
</div>
`


export const AdvancedCheckBoxCardCode=`<div class="flex justify-center items-center p-5 flex-wrap">
  <ul class="flex flex-wrap gap-6 justify-center">
    <!-- Node.js Card -->
    <li class="w-full sm:w-1/2 md:w-1/3">
      <input
        type="checkbox"
        id="node-option"
        value="node"
        class="peer sr-only"
      />
      <label
        for="node-option"
        class="relative flex flex-col p-5 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700
               peer-checked:border-[#339933]"
      >
        <div class="flex items-center mb-3">
          <img
            src="https://example.com/node-circle.png"
            alt="Node.js"
            class="w-8 h-8 mr-3"
          />
          <div class="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Node.js
          </div>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-300">
          JavaScript runtime built on Chrome's V8 engine.
        </p>
      </label>
    </li>

    <!-- Next.js Card -->
    <li class="w-full sm:w-1/2 md:w-1/3">
      <input
        type="checkbox"
        id="next-option"
        value="next"
        class="peer sr-only"
      />
      <label
        for="next-option"
        class="relative flex flex-col p-5 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700
               peer-checked:border-[#0070F3]"
      >
        <div class="flex items-center mb-3">
          <img
            src="https://example.com/next-circle.png"
            alt="Next.js"
            class="w-8 h-8 mr-3"
          />
          <div class="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Next.js
          </div>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-300">
          A React framework for production with hybrid static and server rendering.
        </p>
      </label>
    </li>

    <!-- Ruby on Rails Card -->
    <li class="w-full sm:w-1/2 md:w-1/3">
      <input
        type="checkbox"
        id="rails-option"
        value="rails"
        class="peer sr-only"
      />
      <label
        for="rails-option"
        class="relative flex flex-col p-5 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700
               peer-checked:border-[#CC0000]"
      >
        <div class="flex items-center mb-3">
          <img
            src="https://example.com/rails-circle.png"
            alt="Ruby on Rails"
            class="w-8 h-8 mr-3"
          />
          <div class="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Ruby on Rails
          </div>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-300">
          A web framework optimized for developer happiness.
        </p>
      </label>
    </li>
  </ul>
</div>
`

export const CheckBoxWithTitleDesccrtitopnCode=`<div class="flex justify-center items-center p-4">
  <div class="p-6 max-w-xl bg-white dark:bg-gray-900 shadow-lg">
  <div class="space-y-4">
    <div class="flex items-start gap-3">
      <input
        id="option1"
        type="checkbox"
        class="mt-1 h-5 w-5 rounded border-gray-300 dark:border-gray-700 text-violet-600 dark:text-blue-600 bg-gray-100 dark:bg-gray-800 focus:ring-violet-500 dark:focus:ring-blue-500"
      />
      <div class="flex flex-col">
        <label htmlFor="option1" class="text-base font-medium text-gray-900 dark:text-gray-100">
          List Item One
        </label>
        <span class="text-sm text-gray-600 dark:text-gray-400">
          This is a description for the first list item, providing additional detail.
        </span>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <input
        id="option2"
        type="checkbox"
        class="mt-1 h-5 w-5 rounded border-gray-300 dark:border-gray-700 text-violet-600 dark:text-blue-600 bg-gray-100 dark:bg-gray-800 focus:ring-violet-500 dark:focus:ring-blue-500"
      />
      <div class="flex flex-col">
        <label htmlFor="option2" class="text-base font-medium text-gray-900 dark:text-gray-100">
          List Item Two
        </label>
        <span class="text-sm text-gray-600 dark:text-gray-400">
          Second item's description text goes here to explain the selection.
        </span>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <input
        id="option3"
        type="checkbox"
        class="mt-1 h-5 w-5 rounded border-gray-300 dark:border-gray-700 text-violet-600 dark:text-blue-600 bg-gray-100 dark:bg-gray-800 focus:ring-violet-500 dark:focus:ring-blue-500"
      />
      <div class="flex flex-col">
        <label htmlFor="option3" class="text-base font-medium text-gray-900 dark:text-gray-100">
          List Item Three
        </label>
        <span class="text-sm text-gray-600 dark:text-gray-400">
          Description for the third list item to clarify what it represents.
        </span>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <input
        id="option4"
        type="checkbox"
        class="mt-1 h-5 w-5 rounded border-gray-300 dark:border-gray-700 text-violet-600 dark:text-blue-600 bg-gray-100 dark:bg-gray-800 focus:ring-violet-500 dark:focus:ring-blue-500"
      />
      <div class="flex flex-col">
        <label htmlFor="option4" class="text-base font-medium text-gray-900 dark:text-gray-100">
          List Item Four
        </label>
        <span class="text-sm text-gray-600 dark:text-gray-400">
          Fourth item's descriptive text elaborates details to the user.
        </span>
      </div>
    </div>
  </div>
</div>

  </div>`