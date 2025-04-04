export function SimpleFileUpload() {
  return (
    <div className="flex justify-center items-center p-2 md:p-5">
      <div className="w-full max-w-4xl">
        <label
          for="file-upload"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Upload File
        </label>

        <div className="flex items-center justify-between gap-3 border border-dashed border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 px-4 py-3">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 16v1.5A2.5 2.5 0 006.5 20h11a2.5 2.5 0 002.5-2.5V16M4 16l4.5-4.5M4 16l4.5 4.5M20 8V6.5A2.5 2.5 0 0017.5 4h-11A2.5 2.5 0 004 6.5V8m0 0l4.5 4.5M4 8l4.5-4.5"
              />
            </svg>
            <span>No file selected</span>
          </div>

          <label
            for="file-upload"
            className="cursor-pointer rounded-md bg-violet-500 hover:bg-violet-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-sm px-4 py-1.5 transition"
          >
            Browse
          </label>

          <input id="file-upload" type="file" className="hidden" />
        </div>
      </div>
    </div>
  );
}

export function FileUpload() {
  return (
    <div className="flex justify-center items-center p-2 md:p-5">
      <div className="w-full max-w-4xl">
        <label
          for="file_input"
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Upload File
        </label>
        <input
          type="file"
          id="file_input"
          className="block w-full text-sm text-gray-900 dark:text-gray-400 
      border border-gray-300 dark:border-gray-600 
      rounded-md file:mr-4 file:py-2 file:px-4 
      file:rounded-md file:border-0 
      file:text-sm file:font-medium 
      file:bg-violet-500 file:text-white 
      hover:file:bg-violet-600 
      dark:file:bg-blue-600 dark:hover:file:bg-blue-700 
      bg-white dark:bg-gray-800 focus:outline-none"
        />
      </div>
    </div>
  );
}

export function FileUploadWithHelperText() {
  return (
    <div className="flex justify-center items-center p-2 md:p-5">
      <div className="w-full max-w-4xl">
        <label
          for="file_input"
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Upload File
        </label>
        <input
          type="file"
          id="file_input"
          className="block w-full text-sm text-gray-900 dark:text-gray-400 
      border border-gray-300 dark:border-gray-600 
      rounded-md file:mr-4 file:py-2 file:px-4 
      file:rounded-md file:border-0 
      file:text-sm file:font-medium 
      file:bg-violet-500 file:text-white 
      hover:file:bg-violet-600 
      dark:file:bg-blue-600 dark:hover:file:bg-blue-700 
      bg-white dark:bg-gray-800 focus:outline-none"
        />
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          SVG, PNG, JPG or GIF (max. 800x400px).
        </p>
      </div>
    </div>
  );
}

export function UploadMultipleFile() {
  return (
    <div className="flex items-center justify-center p-2 md:p-5">
      <div className="w-full max-w-4xl">
        <label
          for="file_input"
          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {" "}
          Upload Files{" "}
        </label>
        <input
          type="file"
          id="file_input"
          multiple
          className="block w-full rounded-md border border-gray-300 bg-white text-sm text-gray-900 file:mr-4 file:rounded-md file:border-0 file:bg-violet-500 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-violet-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:file:bg-blue-600 dark:hover:file:bg-blue-700"
        />
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          You can upload multiple files (e.g. PNG, JPG, PDF).
        </p>
      </div>
    </div>
  );
}

export function DifferetnSizeInputFile() {
  return (
    <div className="flex items-center justify-center p-2 md:p-5">
      <div className="w-full max-w-4xl space-y-6">
        <div>
          <label
            for="file_input_sm"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Small File Upload
          </label>
          <input
            id="file_input_sm"
            type="file"
            className="block w-full text-sm text-gray-900 dark:text-gray-400
        border border-gray-300 dark:border-gray-600
        rounded-md file:py-1.5 file:px-3
        file:text-sm file:rounded-md file:border-0
        file:bg-violet-500 file:text-white hover:file:bg-violet-600
        dark:file:bg-blue-600 dark:hover:file:bg-blue-700
        bg-white dark:bg-gray-800 focus:outline-none"
          />
        </div>

        <div>
          <label
            for="file_input_md"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Default File Upload
          </label>
          <input
            id="file_input_md"
            type="file"
            className="block w-full text-sm text-gray-900 dark:text-gray-400
        border border-gray-300 dark:border-gray-600
        rounded-md file:py-2 file:px-4
        file:text-sm file:rounded-md file:border-0
        file:bg-violet-500 file:text-white hover:file:bg-violet-600
        dark:file:bg-blue-600 dark:hover:file:bg-blue-700
        bg-white dark:bg-gray-800 focus:outline-none"
          />
        </div>

        <div>
          <label
            for="file_input_lg"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Large File Upload
          </label>
          <input
            id="file_input_lg"
            type="file"
            className="block w-full text-base text-gray-900 dark:text-gray-400
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
  );
}


export function DropFileInput(){
    return(
        <div className="flex items-center justify-center p-2 md:p-5">
<div className="w-full max-w-xl">
  <label
    for="dropzone-file"
    className="flex flex-col items-center justify-center w-full h-48 px-6 py-6 border-2 border-dashed rounded-lg cursor-pointer 
           border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 
           transition"
  >
     <div className="flex flex-col items-center justify-center pt-4 pb-3 text-gray-500 dark:text-gray-400">
      <svg
        className="w-10 h-10 mb-2"
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
      <p className="mb-1 text-sm">
        <span className="font-semibold text-gray-700 dark:text-gray-300">Click to upload</span> or drag and drop
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (Max. 10MB)</p>
    </div>

    {/* <!--   Input --> */}
    <input id="dropzone-file" type="file" multiple className="hidden" />
  </label>
</div>


</div>

    )
}