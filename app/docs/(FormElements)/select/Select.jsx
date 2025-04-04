export function DefaultSelect() {
  return (
    <div className="max-w-xs mx-auto p-4 h-60">
      <label
        for="basic-select"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100"
      >
        Select an option
      </label>
      <select
        id="basic-select"
        name="basic-select"
        className="block w-full rounded-md border border-gray-300 dark:border-gray-600
           bg-white dark:bg-gray-800
           py-2 px-3 text-gray-700 dark:text-gray-200
           focus:border-blue-500 dark:focus:border-blue-500
           focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-500
           transition-colors"
      >
        <option selected disabled>
          {" "}
          Choose an option{" "}
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

export function BorderBottomSelect() {
  return (
    <div className="mx-auto max-w-xs p-4 h-60 bg-white dark:bg-gray-900">
      <div className="relative z-0">
        <select
          id="underline-select"
          name="underline-select"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 dark:border-gray-600 bg-transparent px-0 pt-5 pb-1 text-gray-900 dark:text-gray-100 transition-colors duration-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0 focus:outline-none"
          required
        >
          <option value="" selected disabled>
            Select Options
          </option>
          <option value="option1" className="dark:bg-gray-800">
            Option 1
          </option>
          <option value="option2" className="dark:bg-gray-800">
            Option 2
          </option>
          <option value="option3" className="dark:bg-gray-800">
            Option 3
          </option>
          <option value="option4" className="dark:bg-gray-800">
            Option 4
          </option>
        </select>

        <label
          for="underline-select"
          className="absolute top-4 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
        >
          Choose an option
        </label>

        <div className="pointer-events-none absolute top-4 right-0 text-gray-400 dark:text-gray-500 transition-colors duration-200 peer-focus:text-blue-500 dark:peer-focus:text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        Select one option from the dropdown
      </p>
    </div>
  );
}

export function SizeSelect() {
  return (
    <div className="space-y-6 max-w-md mx-auto p-4">
      <div>
        <label
          for="small-select"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Small Select
        </label>
        <select
          id="small-select"
          name="small-select"
          className="block w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-1 px-2 text-sm text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
        >
          <option value="" selected disabled>
            Select an option
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div>
        <label
          for="default-select"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Default Select
        </label>
        <select
          id="default-select"
          name="default-select"
          className="block w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-base text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
        >
          <option value="" selected disabled>
            Select an option
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div>
        <label
          for="large-select"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Large Select
        </label>
        <select
          id="large-select"
          name="large-select"
          className="block w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-3 px-4 text-lg text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
        >
          <option value="" selected disabled>
            Select an option
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
}

export function ColorSelect() {
  return (
    <div className="max-w-xs mx-auto p-4">
      <label
        for="colorSelect"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        Select a Color
      </label>
      <div className="relative">
        <select
          id="colorSelect"
          name="color"
          className="block appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 text-gray-700 dark:text-gray-100 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-indigo-500"
        >
          <option value="red" className="text-red-500">
            Red
          </option>
          <option value="orange" className="text-orange-500">
            Orange
          </option>
          <option value="yellow" className="text-yellow-500">
            Yellow
          </option>
          <option value="green" className="text-green-500">
            Green
          </option>
          <option value="teal" className="text-teal-500">
            Teal
          </option>
          <option value="blue" className="text-blue-500">
            Blue
          </option>
          <option value="indigo" className="text-indigo-500">
            Indigo
          </option>
          <option value="purple" className="text-purple-500">
            Purple
          </option>
          <option value="pink" className="text-pink-500">
            Pink
          </option>
          <option value="gray" className="text-gray-500">
            Gray
          </option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-100">
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M5.516 7.548l4.484 4.484 4.484-4.484L16 8.532l-6 6-6-6z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function GradientBorder() {
  return (
    <div className="max-w-xs mx-auto p-4">
      <label
        for="frameworkSelect"
        className="block text-sm font-medium text-gray-300 mb-2"
      >
        Pick a Framework
      </label>
      <div className="relative">
        <select
          id="frameworkSelect"
          name="framework"
          className="block w-full dark:bg-gray-900 bg-gray-50  border-2 border-blue-400 rounded px-3 py-2 focus:outline-none focus:border-blue-500 appearance-none"
        >
          <option disabled selected>
            Pick a Framework
          </option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
          <option value="svelte">Svelte</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M5.516 7.548l4.484 4.484 4.484-4.484L16 8.532l-6 6-6-6z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function DisabledSelect() {
  return (
    <div className="mx-auto max-w-xs p-4">
      <label
        for="disabledSelect"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
      >
        {" "}
        Disabled Select{" "}
      </label>
      <div className="relative">
        <select
          id="disabledSelect"
          name="framework"
          disabled
          className="block w-full appearance-none rounded border-2 bg-gray-800 px-3 py-2 text-gray-100 focus:border-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400"
        >
          <option disabled selected>
            Disabled Select
          </option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
          <option value="svelte">Svelte</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.516 7.548l4.484 4.484 4.484-4.484L16 8.532l-6 6-6-6z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

