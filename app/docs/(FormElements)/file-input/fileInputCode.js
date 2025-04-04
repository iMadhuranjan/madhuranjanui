export const SimpleFileUPloadCode=`<div class="w-full max-w-md">
  <label
    for="file-upload"
    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
  >
    Upload File
  </label>

  <div class="flex items-center justify-between gap-3 border border-dashed border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 px-4 py-3">
    <div class="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1.5A2.5 2.5 0 006.5 20h11a2.5 2.5 0 002.5-2.5V16M4 16l4.5-4.5M4 16l4.5 4.5M20 8V6.5A2.5 2.5 0 0017.5 4h-11A2.5 2.5 0 004 6.5V8m0 0l4.5 4.5M4 8l4.5-4.5" />
      </svg>
      <span>No file selected</span>
    </div>

    <label
      for="file-upload"
      class="cursor-pointer rounded-md bg-violet-500 hover:bg-violet-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-sm px-4 py-1.5 transition"
    >
      Browse
    </label>

    <input
      id="file-upload"
      type="file"
      class="hidden"
    />
  </div>
</div>
`

export const FileUploadCode=`<div class="w-full max-w-4xl">
  <label
    for="file_input"
    class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
  >
    Upload File
  </label>
  <input
    type="file"
    id="file_input"
    class="block w-full text-sm text-gray-900 dark:text-gray-400 
      border border-gray-300 dark:border-gray-600 
      rounded-md file:mr-4 file:py-2 file:px-4 
      file:rounded-md file:border-0 
      file:text-sm file:font-medium 
      file:bg-violet-500 file:text-white 
      hover:file:bg-violet-600 
      dark:file:bg-blue-600 dark:hover:file:bg-blue-700 
      bg-white dark:bg-gray-800 focus:outline-none"
  />
</div>`

export const HelperTextCode=`<div class="w-full max-w-md">
  <label
    for="file_input"
    class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
  >
    Upload File
  </label>
  <input
    type="file"
    id="file_input"
    class="block w-full text-sm text-gray-900 dark:text-gray-400 
      border border-gray-300 dark:border-gray-600 
      rounded-md file:mr-4 file:py-2 file:px-4 
      file:rounded-md file:border-0 
      file:text-sm file:font-medium 
      file:bg-violet-500 file:text-white 
      hover:file:bg-violet-600 
      dark:file:bg-blue-600 dark:hover:file:bg-blue-700 
      bg-white dark:bg-gray-800 focus:outline-none"
  />
  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
    SVG, PNG, JPG or GIF (max. 800x400px).
  </p>
</div>
`

export const UploadMultipleFIleCode=`<div class="w-full max-w-md">
  <label
    for="file_input"
    class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
  >
    Upload Files
  </label>
  <input
    type="file"
    id="file_input"
    multiple
    class="block w-full text-sm text-gray-900 dark:text-gray-400 
      border border-gray-300 dark:border-gray-600 
      rounded-md file:mr-4 file:py-2 file:px-4 
      file:rounded-md file:border-0 
      file:text-sm file:font-medium 
      file:bg-violet-500 file:text-white 
      hover:file:bg-violet-600 
      dark:file:bg-blue-600 dark:hover:file:bg-blue-700 
      bg-white dark:bg-gray-800 focus:outline-none"
  />
  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
    You can upload multiple files (e.g. PNG, JPG, PDF).
  </p>
</div>
`

export const DiffertSizeInputCode=`<div class="flex items-center justify-center p-2 md:p-5">
 <div class="w-full max-w-md space-y-6">
  <!-- Small File Input -->
  <div>
    <label
      for="file_input_sm"
      class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      Small File Upload
    </label>
    <input
      id="file_input_sm"
      type="file"
      class="block w-full text-sm text-gray-900 dark:text-gray-400
        border border-gray-300 dark:border-gray-600
        rounded-md file:py-1.5 file:px-3
        file:text-sm file:rounded-md file:border-0
        file:bg-violet-500 file:text-white hover:file:bg-violet-600
        dark:file:bg-blue-600 dark:hover:file:bg-blue-700
        bg-white dark:bg-gray-800 focus:outline-none"
    />
  </div>

  <!-- Default File Input -->
  <div>
    <label
      for="file_input_md"
      class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      Default File Upload
    </label>
    <input
      id="file_input_md"
      type="file"
      class="block w-full text-sm text-gray-900 dark:text-gray-400
        border border-gray-300 dark:border-gray-600
        rounded-md file:py-2 file:px-4
        file:text-sm file:rounded-md file:border-0
        file:bg-violet-500 file:text-white hover:file:bg-violet-600
        dark:file:bg-blue-600 dark:hover:file:bg-blue-700
        bg-white dark:bg-gray-800 focus:outline-none"
    />
  </div>

  <!-- Large File Input -->
  <div>
    <label
      for="file_input_lg"
      class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      Large File Upload
    </label>
    <input
      id="file_input_lg"
      type="file"
      class="block w-full text-base text-gray-900 dark:text-gray-400
        border border-gray-300 dark:border-gray-600
        rounded-md file:py-2.5 file:px-5
        file:text-base file:rounded-md file:border-0
        file:bg-violet-500 file:text-white hover:file:bg-violet-600
        dark:file:bg-blue-600 dark:hover:file:bg-blue-700
        bg-white dark:bg-gray-800 focus:outline-none"
    />
  </div>
</div>

</div>
`

export const DropFIleCode=`<div class="w-full max-w-xl">
  <label
    for="dropzone-file"
    class="flex flex-col items-center justify-center w-full h-48 px-6 py-6 border-2 border-dashed rounded-lg cursor-pointer 
           border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 
           transition"
  >
    <!-- Icon -->
    <div class="flex flex-col items-center justify-center pt-4 pb-3 text-gray-500 dark:text-gray-400">
      <svg
        class="w-10 h-10 mb-2"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 16v-8m0 0l-3 3m3-3l3 3M4 16v1.5A2.5 2.5 0 006.5 20h11a2.5 2.5 0 002.5-2.5V16M4 16l4.5-4.5M4 16l4.5 4.5"
        />
      </svg>
      <p class="mb-1 text-sm">
        <span class="font-semibold text-gray-700 dark:text-gray-300">Click to upload</span> or drag and drop
      </p>
      <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (Max. 10MB)</p>
    </div>

    <!-- Hidden Input -->
    <input id="dropzone-file" type="file" multiple class="hidden" />
  </label>
</div>
`