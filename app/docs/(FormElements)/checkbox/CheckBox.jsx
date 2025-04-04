export function SimpleCheckBox() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center p-2 md:p-5">
      <label className="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="relative h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-gray-300 transition-all duration-200 checked:border-blue-600 checked:bg-blue-600 checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white checked:after:content-['✓'] focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <span className="ml-2 font-medium text-gray-800 dark:text-gray-50">
          Default Checkbox
        </span>
      </label>
    </div>
  );
}

export function DisabledCheckBox() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-2 md:p-5">
      <label className="inline-flex cursor-not-allowed items-center opacity-60">
        <input
          type="checkbox"
          disabled
          className="relative h-6 w-6 cursor-not-allowed appearance-none rounded-md border-2 border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <span className="ml-2 font-medium text-gray-800 dark:text-gray-50">
          {" "}
          Disabled Unchecked Checkbox{" "}
        </span>
      </label>

      <label className="inline-flex cursor-not-allowed items-center opacity-60">
        <input
          type="checkbox"
          disabled
          checked
          className="relative h-6 w-6 cursor-not-allowed appearance-none rounded-md border-2 border-gray-300 transition-all duration-200 checked:border-blue-600 checked:bg-blue-600 checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white checked:after:content-['✓'] focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <span className="ml-2 font-medium text-gray-900 dark:text-gray-50">
          {" "}
          Disabled Checked Checkbox{" "}
        </span>
      </label>
    </div>
  );
}

export function CheckBoxWithLink() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center p-2 md:p-5">
      <label className="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="relative h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-gray-300 transition-all duration-200
             checked:border-blue-600 checked:bg-blue-600
             checked:after:absolute checked:after:inset-0 checked:after:flex
             checked:after:items-center checked:after:justify-center
             checked:after:text-white checked:after:content-['✓']
             focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <span className="ml-2 font-medium text-gray-800 dark:text-gray-50">
          I agree to the
          <a
            href="#"
            className="hover:underline text-blue-600 hover:text-blue-800 px-1.5"
          >
            Terms &amp; Conditions
          </a>
        </span>
      </label>
    </div>
  );
}

export function CheckBoxWithHelperText() {
  return (
    <div className="flex flex-col gap-2 justify-center items-start p-4">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="relative h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-gray-300 transition-all duration-200
             focus:ring-2 focus:ring-blue-500 focus:outline-none
             checked:border-blue-600 checked:bg-blue-600
             checked:after:absolute checked:after:inset-0 checked:after:flex
             checked:after:items-center checked:after:justify-center
             checked:after:text-white checked:after:content-['✓']"
        />
        <span className="ml-2 font-medium text-gray-800 dark:text-gray-50">
          I agree to the Terms &amp; Conditions
        </span>
      </label>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        By checking this box, you confirm that you have read and agree to our
        Terms &amp; Conditions.
      </p>
    </div>
  );
}

export function BorderedCheckBox() {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
      <div className="flex gap-4 md:flex-row">
        <label
          className="flex cursor-pointer items-center 
                       rounded-md border border-gray-300 dark:border-gray-600 
                       px-4 py-2 transition-colors 
                       hover:border-gray-400 dark:hover:border-gray-500"
        >
          <input
            type="radio"
            name="example"
            defaultChecked
            className="form-radio h-5 w-5 text-blue-600 
                         focus:ring-0 focus:outline-none"
          />
          <span className="ml-2 text-gray-900 dark:text-gray-100">
            Default radio
          </span>
        </label>

        <label
          className="flex cursor-pointer items-center 
                       rounded-md border border-gray-300 dark:border-gray-600 
                       px-4 py-2 transition-colors 
                       hover:border-gray-400 dark:hover:border-gray-500"
        >
          <input
            type="radio"
            name="example"
            className="form-radio h-5 w-5 text-blue-600 
                         focus:ring-0 focus:outline-none"
          />
          <span className="ml-2 text-gray-900 dark:text-gray-100">
            Checked state
          </span>
        </label>
      </div>
    </div>
  );
}

export function CheckBoxDropDown() {
  return (
    <div className="flex justify-center items-start p-5 h-60">
      <div className="relative inline-block text-left">
        <input type="checkbox" id="dropdown-toggle" className="peer hidden" />

        <label
          for="dropdown-toggle"
          className="inline-flex w-56 items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors  hover:bg-gray-50 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Select Options
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </label>

        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 hidden peer-checked:block">
          <div className="py-1">
            <label className="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 transition-colors  hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-blue-500 dark:focus:ring-blue-600"
              />
              <span className="ml-3">Option 1</span>
            </label>
            <label className="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 transition-colors  hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-blue-500 dark:focus:ring-blue-600"
              />
              <span className="ml-3">Option 2</span>
            </label>
            <label className="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 transition-colors  hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-blue-500 dark:focus:ring-blue-600"
              />
              <span className="ml-3">Option 3</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ColoredCheckBox() {
  return (
    <div className="flex items-center justify-center gap-3 flex-wrap p-5">
      <div className="flex items-center">
        <input
          id="red-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-red-600 focus:ring-2 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-red-600"
        />
        <label
          htmlFor="red-checkbox"
          className="ml-2 text-sm font-medium text-red-600 dark:text-red-500"
        >
          Red
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="orange-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-orange-500 focus:ring-2 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-orange-600"
        />
        <label
          htmlFor="orange-checkbox"
          className="ml-2 text-sm font-medium text-orange-500 dark:text-orange-400"
        >
          Orange
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="amber-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-amber-500 focus:ring-2 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-amber-600"
        />
        <label
          htmlFor="amber-checkbox"
          className="ml-2 text-sm font-medium text-amber-500 dark:text-amber-400"
        >
          Amber
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="yellow-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-yellow-400 focus:ring-2 focus:ring-yellow-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-yellow-600"
        />
        <label
          htmlFor="yellow-checkbox"
          className="ml-2 text-sm font-medium text-yellow-500 dark:text-yellow-400"
        >
          Yellow
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="lime-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-lime-500 focus:ring-2 focus:ring-lime-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-lime-600"
        />
        <label
          htmlFor="lime-checkbox"
          className="ml-2 text-sm font-medium text-lime-500 dark:text-lime-400"
        >
          Lime
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="green-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-green-600 focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-green-600"
        />
        <label
          htmlFor="green-checkbox"
          className="ml-2 text-sm font-medium text-green-600 dark:text-green-500"
        >
          Green
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="emerald-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-emerald-600 focus:ring-2 focus:ring-emerald-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-emerald-600"
        />
        <label
          htmlFor="emerald-checkbox"
          className="ml-2 text-sm font-medium text-emerald-600 dark:text-emerald-500"
        >
          Emerald
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="teal-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-teal-600 focus:ring-2 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-teal-600"
        />
        <label
          htmlFor="teal-checkbox"
          className="ml-2 text-sm font-medium text-teal-600 dark:text-teal-500"
        >
          Teal
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="cyan-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-cyan-500 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-cyan-600"
        />
        <label
          htmlFor="cyan-checkbox"
          className="ml-2 text-sm font-medium text-cyan-500 dark:text-cyan-400"
        >
          Cyan
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="sky-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-sky-500 focus:ring-2 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-sky-600"
        />
        <label
          htmlFor="sky-checkbox"
          className="ml-2 text-sm font-medium text-sky-500 dark:text-sky-400"
        >
          Sky
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="blue-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
        <label
          htmlFor="blue-checkbox"
          className="ml-2 text-sm font-medium text-blue-600 dark:text-blue-500"
        >
          Blue
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="indigo-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-indigo-600"
        />
        <label
          htmlFor="indigo-checkbox"
          className="ml-2 text-sm font-medium text-indigo-600 dark:text-indigo-500"
        >
          Indigo
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="violet-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-violet-600 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-violet-600"
        />
        <label
          htmlFor="violet-checkbox"
          className="ml-2 text-sm font-medium text-violet-600 dark:text-violet-500"
        >
          Violet
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="purple-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600"
        />
        <label
          htmlFor="purple-checkbox"
          className="ml-2 text-sm font-medium text-purple-600 dark:text-purple-500"
        >
          Purple
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="fuchsia-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-fuchsia-600 focus:ring-2 focus:ring-fuchsia-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-fuchsia-600"
        />
        <label
          htmlFor="fuchsia-checkbox"
          className="ml-2 text-sm font-medium text-fuchsia-600 dark:text-fuchsia-500"
        >
          Fuchsia
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="pink-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-pink-600 focus:ring-2 focus:ring-pink-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-pink-600"
        />
        <label
          htmlFor="pink-checkbox"
          className="ml-2 text-sm font-medium text-pink-600 dark:text-pink-500"
        >
          Pink
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="rose-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-rose-600 focus:ring-2 focus:ring-rose-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-rose-600"
        />
        <label
          htmlFor="rose-checkbox"
          className="ml-2 text-sm font-medium text-rose-600 dark:text-rose-500"
        >
          Rose
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="gray-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-gray-500 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
        />
        <label
          htmlFor="gray-checkbox"
          className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"
        >
          Gray
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="stone-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-stone-500 focus:ring-2 focus:ring-stone-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-stone-600"
        />
        <label
          htmlFor="stone-checkbox"
          className="ml-2 text-sm font-medium text-stone-500 dark:text-stone-400"
        >
          Stone
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="zinc-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-zinc-500 focus:ring-2 focus:ring-zinc-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-zinc-600"
        />
        <label
          htmlFor="zinc-checkbox"
          className="ml-2 text-sm font-medium text-zinc-500 dark:text-zinc-400"
        >
          Zinc
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="neutral-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 accent-neutral-500 focus:ring-2 focus:ring-neutral-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-neutral-600"
        />
        <label
          htmlFor="neutral-checkbox"
          className="ml-2 text-sm font-medium text-neutral-500 dark:text-neutral-400"
        >
          Neutral
        </label>
      </div>
    </div>
  );
}

export function AdvancedCheckBoxCard() {
  return (
    <div className="p-5 max-w-7xl mx-auto">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      
       <div>
        <input
          type="checkbox"
          id="node-option"
          value="node"
          className="peer sr-only"
        />
        <label
          for="node-option"
          className="relative flex flex-col p-5 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700 peer-checked:border-[#339933]"
        >
          <div className="flex items-center mb-3">
            <img
              src="/Image/Nodejs.png"
              alt="Node.js"
              className="w-10 h-10 rounded-full object-contain mr-3"
            />
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Node.js
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            JavaScript runtime built on Chrome's V8 engine.
          </p>
        </label>
      </div>
  
       <div>
        <input
          type="checkbox"
          id="next-option"
          value="next"
          className="peer sr-only"
        />
        <label
          for="next-option"
          className="relative flex flex-col p-5 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700 peer-checked:border-[#0070F3]"
        >
          <div className="flex items-center mb-3">
            <img
              src="/Image/Nextjs.jpeg"
              alt="Next.js"
              className="w-10 h-10 rounded-full object-contain mr-3"
            />
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Next.js
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            A React framework for production with hybrid static and server
            rendering.
          </p>
        </label>
      </div>
  
       <div>
        <input
          type="checkbox"
          id="rails-option"
          value="rails"
          className="peer sr-only"
        />
        <label
          for="rails-option"
          className="relative flex flex-col p-5 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700 peer-checked:border-[#CC0000]"
        >
          <div className="flex items-center mb-3">
            <img
              src="/Image/ruby.png"
              alt="Ruby on Rails"
              className="w-10 h-10 rounded-full object-contain mr-3"
            />
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Ruby on Rails
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            A web framework optimized for developer happiness.
          </p>
        </label>
      </div>
    </div>
  </div>
  
  );
}


export function CheckBoxWithTilteAndDescription(){
  return(
    <div className="flex justify-center items-center p-4">
  <div className="p-6 max-w-xl bg-white dark:bg-gray-900 shadow-lg">
  <div className="space-y-4">
    <div className="flex items-start gap-3">
      <input
        id="option1"
        type="checkbox"
        className="mt-1 h-5 w-5 rounded border-gray-300 dark:border-gray-700 text-violet-600 dark:text-blue-600 bg-gray-100 dark:bg-gray-800 focus:ring-violet-500 dark:focus:ring-blue-500"
      />
      <div className="flex flex-col">
        <label htmlFor="option1" className="text-base font-medium text-gray-900 dark:text-gray-100">
          List Item One
        </label>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          This is a description for the first list item, providing additional detail.
        </span>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <input
        id="option2"
        type="checkbox"
        className="mt-1 h-5 w-5 rounded border-gray-300 dark:border-gray-700 text-violet-600 dark:text-blue-600 bg-gray-100 dark:bg-gray-800 focus:ring-violet-500 dark:focus:ring-blue-500"
      />
      <div className="flex flex-col">
        <label htmlFor="option2" className="text-base font-medium text-gray-900 dark:text-gray-100">
          List Item Two
        </label>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Second item's description text goes here to explain the selection.
        </span>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <input
        id="option3"
        type="checkbox"
        className="mt-1 h-5 w-5 rounded border-gray-300 dark:border-gray-700 text-violet-600 dark:text-blue-600 bg-gray-100 dark:bg-gray-800 focus:ring-violet-500 dark:focus:ring-blue-500"
      />
      <div className="flex flex-col">
        <label htmlFor="option3" className="text-base font-medium text-gray-900 dark:text-gray-100">
          List Item Three
        </label>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Description for the third list item to clarify what it represents.
        </span>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <input
        id="option4"
        type="checkbox"
        className="mt-1 h-5 w-5 rounded border-gray-300 dark:border-gray-700 text-violet-600 dark:text-blue-600 bg-gray-100 dark:bg-gray-800 focus:ring-violet-500 dark:focus:ring-blue-500"
      />
      <div className="flex flex-col">
        <label htmlFor="option4" className="text-base font-medium text-gray-900 dark:text-gray-100">
          List Item Four
        </label>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Fourth item's descriptive text elaborates details to the user.
        </span>
      </div>
    </div>
  </div>
</div>

  </div>
  )
}