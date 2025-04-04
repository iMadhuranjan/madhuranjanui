export const defaultSelectCode = `  <div class="max-w-xs mx-auto p-4">
            <label for="basic-select" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Select an option
            </label>
            <select
                id="basic-select"
                name="basic-select"
                class="block w-full rounded-md border border-gray-300 dark:border-gray-600
           bg-white dark:bg-gray-800
           py-2 px-3 text-gray-700 dark:text-gray-200
           focus:border-blue-500 dark:focus:border-blue-500
           focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-500
           transition-colors duration-200"
            >
                <option selected disabled> Choose an option </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
 </div>`

export const BottomBorderSelectCode = `<div class="mx-auto max-w-xs p-4 bg-white dark:bg-gray-900">
  <div class="relative z-0">
    <select
      id="underline-select"
      name="underline-select"
      class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 dark:border-gray-600 bg-transparent px-0 pt-5 pb-1 text-gray-900 dark:text-gray-100 transition-colors duration-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0 focus:outline-none"
      required
    >
      <option value="" selected disabled>Select Options</option>
      <option value="option1" class="dark:bg-gray-800">Option 1</option>
      <option value="option2" class="dark:bg-gray-800">Option 2</option>
      <option value="option3" class="dark:bg-gray-800">Option 3</option>
      <option value="option4" class="dark:bg-gray-800">Option 4</option>
    </select>

    <label
      for="underline-select"
      class="absolute top-4 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
    >
      Choose an option
    </label>

    <div class="pointer-events-none absolute top-4 right-0 text-gray-400 dark:text-gray-500 transition-colors duration-200 peer-focus:text-blue-500 dark:peer-focus:text-blue-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
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

  <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
    Select one option from the dropdown
  </p>
</div>
`

export const SizeSelectCode=`<div class="space-y-6 max-w-md mx-auto p-4">
  <!-- Small Size -->
  <div>
    <label for="small-select" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
      Small Select
    </label>
    <select
      id="small-select"
      name="small-select"
      class="block w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-1 px-2 text-sm text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
    >
      <option value="" selected disabled>Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </div>

  <!-- Default Size -->
  <div>
    <label for="default-select" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
      Default Select
    </label>
    <select
      id="default-select"
      name="default-select"
      class="block w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-base text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
    >
      <option value="" selected disabled>Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </div>

  <!-- Large Size -->
  <div>
    <label for="large-select" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
      Large Select
    </label>
    <select
      id="large-select"
      name="large-select"
      class="block w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-3 px-4 text-lg text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
    >
      <option value="" selected disabled>Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </div>
</div>
`

export const ColorSelectCode=`<div class="max-w-xs mx-auto p-4">
  <label for="colorSelect" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    Select a Color
  </label>
  <div class="relative">
    <select
      id="colorSelect"
      name="color"
      class="block appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 text-gray-700 dark:text-gray-100 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-indigo-500"
    >
      <option value="red" class="text-red-500">Red</option>
      <option value="orange" class="text-orange-500">Orange</option>
      <option value="yellow" class="text-yellow-500">Yellow</option>
      <option value="green" class="text-green-500">Green</option>
      <option value="teal" class="text-teal-500">Teal</option>
      <option value="blue" class="text-blue-500">Blue</option>
      <option value="indigo" class="text-indigo-500">Indigo</option>
      <option value="purple" class="text-purple-500">Purple</option>
      <option value="pink" class="text-pink-500">Pink</option>
      <option value="gray" class="text-gray-500">Gray</option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-100">
      <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
        <path d="M5.516 7.548l4.484 4.484 4.484-4.484L16 8.532l-6 6-6-6z"/>
      </svg>
    </div>
  </div>
</div>
`

export const gradientBorderCode=`<div class="max-w-xs mx-auto p-4">
  <label for="frameworkSelect" class="block text-sm font-medium text-gray-300 mb-2">
    Pick a Framework
  </label>
  <div class="relative">
    <!-- The thick border is set with border-2 (you could use border-4 for an even thicker border) -->
    <select
      id="frameworkSelect"
      name="framework"
      class="block w-full bg-gray-800 text-gray-100 border-2 border-blue-400 rounded px-3 py-2 focus:outline-none focus:border-blue-500 appearance-none"
    >
      <option disabled selected>Pick a Framework</option>
      <option value="react">React</option>
      <option value="vue">Vue</option>
      <option value="angular">Angular</option>
      <option value="svelte">Svelte</option>
    </select>

    <!-- Custom dropdown arrow -->
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
      <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
        <path d="M5.516 7.548l4.484 4.484 4.484-4.484L16 8.532l-6 6-6-6z" />
      </svg>
    </div>
  </div>
</div>


`

export const DisabledSelectCode=`<div class="mx-auto max-w-xs p-4">
  <label for="disabledSelect" class="mb-2 block text-sm font-medium text-gray-300"> Disabled Select </label>
  <div class="relative">
    <select id="disabledSelect" name="framework" disabled class="block w-full appearance-none rounded border-2 bg-gray-800 px-3 py-2 text-gray-100 focus:border-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400">
      <option disabled selected>Disabled Select</option>
      <option value="react">React</option>
      <option value="vue">Vue</option>
      <option value="angular">Angular</option>
      <option value="svelte">Svelte</option>
    </select>
    <!-- Custom dropdown arrow -->
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
      <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
        <path d="M5.516 7.548l4.484 4.484 4.484-4.484L16 8.532l-6 6-6-6z" />
      </svg>
    </div>
  </div>
</div>
`