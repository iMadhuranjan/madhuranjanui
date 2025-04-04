export const SimpleBreadCumCode=`<div class="flex items-center justify-center p-4">
  <!-- Breadcrumbs -->
  <nav class="w-full max-w-6xl" aria-label="Breadcrumb">
    <ol class="flex flex-wrap items-center space-x-1 md:space-x-2">
      <!-- Home link with Home icon -->
      <li class="flex items-center">
        <a href="/" class="flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-800">
          <svg class="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.707 1.293a1 1 0 00-1.414 0L1 9.586V18a1 1 0 001 1h6a1 1 0 001-1v-4h2v4a1 1 0 001 1h6a1 1 0 001-1V9.586l-8.293-8.293z" />
          </svg>
          Home
        </a>
      </li>
      <!-- Intermediate link -->
      <li class="flex items-center">
        <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        <a href="/section" class="ml-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800">Section</a>
      </li>
      <!-- Current page (no link) -->
      <li class="flex items-center" aria-current="page">
        <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="ml-2 text-sm font-medium text-gray-500">Current</span>
      </li>
    </ol>
  </nav>
</div>
`
export const BreadCumbWithBackgroundCode=`<div class="bg-blue-900 px-5 py-2 rounded-md m-2 w-fit ">
  <!-- Breadcrumbs -->
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <!-- Home link with Home icon -->
      <li class="inline-flex items-center">
        <a href="/" class="inline-flex items-center text-white hover:text-gray-300">
          <svg class="mr-1 h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.707 1.293a1 1 0 00-1.414 0L1 9.586V18a1 1 0 001 1h6a1 1 0 001-1v-4h2v4a1 1 0 001 1h6a1 1 0 001-1V9.586l-8.293-8.293z" />
          </svg>
          Home
        </a>
      </li>
      <!-- Intermediate link -->
      <li>
        <div class="flex items-center">
          <svg class="h-4 w-4 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M7.05 4.05a.5.5 0 0 1 .7 0L12 8.293 7.75 12.543a.5.5 0 0 1-.7-.707L10.293 8.293 7.05 5.05a.5.5 0 0 1 0-.707z" />
          </svg>
          <a href="/section" class="ml-1 text-white hover:text-gray-300 md:ml-2">Section</a>
        </div>
      </li>
      <!-- Current page (no link) -->
      <li aria-current="page">
        <div class="flex items-center">
          <svg class="h-4 w-4 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M7.05 4.05a.5.5 0 0 1 .7 0L12 8.293 7.75 12.543a.5.5 0 0 1-.7-.707L10.293 8.293 7.05 5.05a.5.5 0 0 1 0-.707z" />
          </svg>
          <span class="ml-1 text-white md:ml-2">Current</span>
        </div>
      </li>
    </ol>
  </nav>
</div>
`
export const BreadCumWithSlashCode=`<div class="bg-gray-50 p-4 dark:bg-gray-900">
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-2">
      <!-- Home -->
      <li>
        <a href="/" class="text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100"> Home </a>
      </li>
      <li>
        <span class="text-gray-500 dark:text-gray-400">/</span>
      </li>
      <!-- Section -->
      <li>
        <a href="/section" class="text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100"> Section </a>
      </li>
      <li>
        <span class="text-gray-500 dark:text-gray-400">/</span>
      </li>
      <!-- Current page -->
      <li class="text-gray-900 dark:text-gray-100">
        <span>Current</span>
      </li>
    </ol>
  </nav>
</div>
`

export const BreadcrumbWithIConsCode=`<div class="bg-gray-50 dark:bg-gray-900 p-4">
  <div class="mx-auto max-w-7xl">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-2 md:space-x-3">
        <!-- Home -->
        <li class="inline-flex items-center">
          <a href="/" class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
            <svg class="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
            </svg>
            Home
          </a>
        </li>
        
        <!-- Separator -->
        <li>
          <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </li>
        
        <!-- Section -->
        <li class="inline-flex items-center">
          <a href="/section" class="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors inline-flex items-center">
            <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
            </svg>
            Section
          </a>
        </li>
        
        <!-- Separator -->
        <li>
          <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </li>
        
        <!-- Current Page -->
        <li class="inline-flex items-center">
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400 inline-flex items-center">
            <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
            </svg>
            Current
          </span>
        </li>
      </ol>
    </nav>
  </div>
</div>`

export const StylishPillStyleBreadcumCode= `<div class="p-4">
  <!-- Container with max-width and centered alignment -->
  <div class="mx-auto max-w-7xl">
    <!-- Breadcrumb navigation with pill-style items -->
    <nav class="flex items-center overflow-x-auto bg-gray-100 dark:bg-gray-800 rounded-full p-1 scrollbar-hide">
      <!-- Home -->
      <a href="/" class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors whitespace-nowrap">
        <!-- Home icon -->
        <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
        </svg>
        <span class="truncate">Home</span>
      </a>
      
      <!-- Separator (chevron) -->
      <svg class="w-4 h-4 mx-1 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
      
      <!-- Section -->
      <a href="/section" class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors whitespace-nowrap">
        <!-- Section icon -->
        <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
        </svg>
        <span class="truncate">Section</span>
      </a>
      
      <!-- Separator (chevron) -->
      <svg class="w-4 h-4 mx-1 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
      
      <!-- Current (final item styled as active pill) -->
      <span class="flex items-center px-3 py-2 text-sm font-medium bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-900 rounded-full whitespace-nowrap">
        <!-- Current icon -->
        <svg class="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
        </svg>
        <span class="truncate">Current</span>
      </span>
    </nav>
  </div>
</div>`