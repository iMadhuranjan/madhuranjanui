export function SimpleBreadumbs() {
  return (
    <div className="flex items-center justify-center p-4">
      <nav className="w-full max-w-6xl" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center space-x-1 md:space-x-2">
          <li className="flex items-center">
            <a
              href="#"
              className="flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 1.293a1 1 0 00-1.414 0L1 9.586V18a1 1 0 001 1h6a1 1 0 001-1v-4h2v4a1 1 0 001 1h6a1 1 0 001-1V9.586l-8.293-8.293z" />
              </svg>
              Home
            </a>
          </li>
          <li className="flex items-center">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <a
              href="#"
              className="ml-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
            >
              Section
            </a>
          </li>
          <li className="flex items-center" aria-current="page">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="ml-2 text-sm font-medium text-gray-500">Current</span>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export function BreadcumwithBackground() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-blue-900 px-5 py-2 rounded-md m-2 w-fit ">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-white hover:text-gray-300"
              >
                <svg
                  className="mr-1 h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 1.293a1 1 0 00-1.414 0L1 9.586V18a1 1 0 001 1h6a1 1 0 001-1v-4h2v4a1 1 0 001 1h6a1 1 0 001-1V9.586l-8.293-8.293z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7.05 4.05a.5.5 0 0 1 .7 0L12 8.293 7.75 12.543a.5.5 0 0 1-.7-.707L10.293 8.293 7.05 5.05a.5.5 0 0 1 0-.707z" />
                </svg>
                <a
                  href="/section"
                  className="ml-1 text-white hover:text-gray-300 md:ml-2"
                >
                  Section
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7.05 4.05a.5.5 0 0 1 .7 0L12 8.293 7.75 12.543a.5.5 0 0 1-.7-.707L10.293 8.293 7.05 5.05a.5.5 0 0 1 0-.707z" />
                </svg>
                <span className="ml-1 text-white md:ml-2">Current</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export function BreaduCimbsWithSlash() {
  return (
    <div className="bg-gray-50 p-4 dark:bg-gray-900">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-2">
          <li>
            <a
              href="#"
              className="text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100"
            >
              {" "}
              Home{" "}
            </a>
          </li>
          <li>
            <span className="text-gray-500 dark:text-gray-400">/</span>
          </li>
          <li>
            <a
              href="/section"
              className="text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100"
            >
              {" "}
              Section{" "}
            </a>
          </li>
          <li>
            <span className="text-gray-500 dark:text-gray-400">/</span>
          </li>
          <li className="text-gray-900 dark:text-gray-100">
            <span>Current</span>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export function BreadCumsWithIcons() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4">
      <div className="mx-auto max-w-7xl">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-1.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clip-rule="evenodd"
                  />
                </svg>
                Home
              </a>
            </li>

            <li>
              <svg
                className="w-5 h-5 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>

            <li className="inline-flex items-center">
              <a
                href="/section"
                className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors inline-flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-1.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clip-rule="evenodd"
                  />
                </svg>
                Section
              </a>
            </li>

            <li>
              <svg
                className="w-5 h-5 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>

            <li className="inline-flex items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 inline-flex items-center">
                <svg
                  className="w-4 h-4 mr-1.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clip-rule="evenodd"
                  />
                </svg>
                Current
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export function StylishBrwadCumbPillsStyle() {
  return (
    <div className="p-4">
     <div className="mx-auto max-w-7xl">
       <nav className="flex items-center overflow-x-auto bg-gray-100 dark:bg-gray-800 rounded-full p-1 scrollbar-hide">
         <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors whitespace-nowrap">
           <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
          </svg>
          <span className="truncate">Home</span>
        </a>
        
         <svg className="w-4 h-4 mx-1 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        
         <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors whitespace-nowrap">
           <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
          </svg>
          <span className="truncate">Section</span>
        </a>
        
         <svg className="w-4 h-4 mx-1 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        
         <span className="flex items-center px-3 py-2 text-sm font-medium bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-900 rounded-full whitespace-nowrap">
           <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
          </svg>
          <span className="truncate">Current</span>
        </span>
      </nav>
    </div>
  </div>
  );
}
