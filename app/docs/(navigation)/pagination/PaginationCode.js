export const simplePaginationCode=`  <div class="flex justify-center">
  <nav aria-label="Pagination">
    <ul class="inline-flex items-center -space-x-px rounded-md text-sm shadow-sm">
       <li>
        <a href="#"
           class="inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-150 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
          <span class="sr-only">Previous</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
          </svg>
        </a>
      </li>
       <li>
        <a href="#" aria-current="page"
           class="z-10 inline-flex items-center border border-gray-300 bg-gray-100 px-4 py-2 font-medium text-gray-700 transition-colors duration-150 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100">
          1
        </a>
      </li>
       <li>
        <a href="#"
           class="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:bg-gray-50 transition-colors duration-150 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
          2
        </a>
      </li>
       <li>
        <span class="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors duration-150 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
          ...
        </span>
      </li>
       <li>
        <a href="#"
           class="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:bg-gray-50 transition-colors duration-150 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
          9
        </a>
      </li>
       <li>
        <a href="#"
           class="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:bg-gray-50 transition-colors duration-150 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
          10
        </a>
      </li>
       <li>
        <a href="#"
           class="inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-150 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
          <span class="sr-only">Next</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</div>`

export const PaginationWithBorderCode=`<div class="flex justify-center items-center p-4">
  <nav aria-label="Pagination">
  <ul class="inline-flex items-center space-x-2">
    <!-- Prev Button -->
    <li>
      <button type="button" class="rounded-md border border-slate-300 bg-white py-2 px-3 text-sm text-slate-600 transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:border-slate-700 dark:focus:ring-slate-400">
        Prev
      </button>
    </li>
    <!-- Page 1 (Current) -->
    <li>
      <button type="button" aria-current="page" class="min-w-[36px] rounded-md bg-slate-800 py-2 px-3 border border-transparent text-sm font-medium text-white transition-all shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 active:bg-slate-700 dark:bg-slate-700 dark:focus:ring-slate-400">
        1
      </button>
    </li>
    <!-- Page 2 -->
    <li>
      <button type="button" class="min-w-[36px] rounded-md border border-slate-300 bg-white py-2 px-3 text-sm text-slate-600 transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:border-slate-700 dark:focus:ring-slate-400">
        2
      </button>
    </li>
    <!-- Page 3 -->
    <li>
      <button type="button" class="min-w-[36px] rounded-md border border-slate-300 bg-white py-2 px-3 text-sm text-slate-600 transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:border-slate-700 dark:focus:ring-slate-400">
        3
      </button>
    </li>
    <!-- Next Button -->
    <li>
      <button type="button" class="min-w-[36px] rounded-md border border-slate-300 bg-white py-2 px-3 text-sm text-slate-600 transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:border-slate-700 dark:focus:ring-slate-400">
        Next
      </button>
    </li>
  </ul>
</nav>

  </div>`

  export const CirclularePaginationCode=`<div class="flex justify-center items-center p-5">
  <nav aria-label="Pagination">
    <ul class="inline-flex items-center space-x-2">
      <li>
        <button type="button" class="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm transition-all hover:border-slate-800 hover:bg-slate-800 hover:text-white focus:ring-2 focus:ring-slate-500 focus:outline-none active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-400">Prev</button>
      </li>
      <li>
        <button type="button" aria-current="page" class="min-w-[36px] rounded-full border border-transparent bg-slate-800 px-3.5 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-slate-700 focus:ring-2 focus:ring-slate-500 focus:outline-none active:bg-slate-700 dark:bg-slate-700 dark:focus:ring-slate-400">1</button>
      </li>
      <li>
        <button type="button" class="min-w-[36px] rounded-full border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-600 shadow-sm transition-all hover:border-slate-800 hover:bg-slate-800 hover:text-white focus:ring-2 focus:ring-slate-500 focus:outline-none active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-400">2</button>
      </li>
      <li>
        <button type="button" class="min-w-[36px] rounded-full border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-600 shadow-sm transition-all hover:border-slate-800 hover:bg-slate-800 hover:text-white focus:ring-2 focus:ring-slate-500 focus:outline-none active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-400">3</button>
      </li>
      <li>
        <button type="button" class="min-w-[36px] rounded-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm transition-all hover:border-slate-800 hover:bg-slate-800 hover:text-white focus:ring-2 focus:ring-slate-500 focus:outline-none active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-400">Next</button>
      </li>
    </ul>
  </nav>
</div>
`

export const PaginationWithPageNumberCode=`<div class="flex justify-center items-center p-5">
  <div class="flex justify-center">
    <nav aria-label="Pagination">
      <ul class="inline-flex items-center space-x-1 rounded-md text-sm transition-colors duration-150">
        <li>
          <a href="#" class="inline-flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
            <span>Previous</span>
          </a>
        </li>
        <li>
          <span class="inline-flex items-center rounded-md px-4 py-2 text-gray-500 dark:text-gray-300"> Page <b class="mx-1">1</b> of <b class="ml-1">10</b> </span>
        </li>
        <li>
          <a href="#" class="inline-flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
            <span>Next</span>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
`

export const DiffetnSIzePaginaitonCode=`<div class="flex justify-center items-center p-5 flex-col space-y-4">
<nav aria-label="Pagination XS">
  <ul class="inline-flex -space-x-px text-xs">
    <li>
      <a href="#" class="flex items-center justify-center px-2 h-7 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Previous
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-2 h-7 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        1
      </a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center px-2 h-7 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
        2
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-2 h-7 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        3
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-2 h-7 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
      </a>
    </li>
  </ul>
</nav>

<nav aria-label="Pagination Small">
  <ul class="inline-flex -space-x-px text-sm">
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Previous
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        1
      </a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
        2
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        3
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
      </a>
    </li>
  </ul>
</nav>

<nav aria-label="Pagination Medium">
  <ul class="inline-flex -space-x-px text-base h-10">
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Previous
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        1
      </a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
        2
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        3
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
      </a>
    </li>
  </ul>
</nav>

<nav aria-label="Pagination Large">
  <ul class="inline-flex -space-x-px text-lg h-12">
    <li>
      <a href="#" class="flex items-center justify-center px-5 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Previous
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-5 h-12 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        1
      </a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center px-5 h-12 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
        2
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-5 h-12 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        3
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-5 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
      </a>
    </li>
  </ul>
</nav>

  </div>`