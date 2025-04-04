export const SimpleInputFieldCode = `<div class="flex items-center justify-center p-5">
  <div class="w-full max-w-md">
    <label for="simple-input" class="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"> Your Name </label>
    <input type="text" id="simple-input" placeholder="Enter your name" class="block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 transition focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500" />
  </div>
</div>
`

export const InputHeightCode = `<div class="p-2 md:p-5 flex justify-center items-center">
  <div class="w-full max-w-md space-y-4">
    <!-- Small Input -->
    <div>
      <label for="input-sm" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"> Small Input </label>
      <input type="text" id="input-sm" placeholder="Small" class="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-900 placeholder-gray-400 transition focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500" />
    </div>

    <!-- Medium Input -->
    <div>
      <label for="input-md" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"> Medium Input </label>
      <input type="text" id="input-md" placeholder="Medium" class="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 transition focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500" />
    </div>

    <!-- Large Input -->
    <div>
      <label for="input-lg" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"> Large Input </label>
      <input type="text" id="input-lg" placeholder="Large" class="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400 transition focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500" />
    </div>

    <!-- Extra Large Input -->
    <div>
      <label for="input-xl" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"> Extra Large Input </label>
      <input type="text" id="input-xl" placeholder="Extra Large" class="block w-full rounded-md border border-gray-300 bg-white px-5 py-4 text-base text-gray-900 placeholder-gray-400 transition focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500" />
    </div>
  </div>
</div>
`

export const UserNamePasswordCode = `<div class="p-2 flex justify-center items-center md:p-5">
  <div class="w-full max-w-md space-y-4">
  <!-- Username Input with Icon -->
  <div>
    <label for="username" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"> Username </label>
    <div class="relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
        <!-- Heroicons: User -->
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0H4.5z" />
        </svg>
      </span>
      <input type="text" id="username" placeholder="Enter your username" class="block w-full rounded-md border border-gray-300 bg-white py-2 pr-4 pl-10 text-sm text-gray-900 placeholder-gray-400 transition focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500" />
    </div>
  </div>

  <!-- Password Input with Icon -->
  <div>
    <label for="password" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"> Password </label>
    <div class="relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
        <!-- Heroicons: Lock Closed -->
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V7.875a4.5 4.5 0 10-9 0V10.5M5.25 10.5h13.5v9.375a1.125 1.125 0 01-1.125 1.125H6.375a1.125 1.125 0 01-1.125-1.125V10.5z" />
        </svg>
      </span>
      <input type="password" id="password" placeholder="Enter your password" class="block w-full rounded-md border border-gray-300 bg-white py-2 pr-4 pl-10 text-sm text-gray-900 placeholder-gray-400 transition focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500" />
    </div>
  </div>
</div>

  </div>
`

export const DisabledInputFieldCode = `<div class="flex justify-center items-center p-2 md:p-5">
  <div class="w-full max-w-md space-y-4">
    <!-- Disabled Text Input -->
    <div>
      <label for="disabled-text" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"> Disabled Text Input </label>
      <input type="text" id="disabled-text" placeholder="Can't edit this" disabled class="block w-full cursor-not-allowed rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-gray-500 placeholder-gray-400 transition dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-500" />
    </div>

    <!-- Disabled Password Input -->
    <div>
      <label for="disabled-password" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"> Disabled Password Input </label>
      <input type="password" id="disabled-password" placeholder="********" disabled class="block w-full cursor-not-allowed rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-gray-500 placeholder-gray-400 transition dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-500" />
    </div>
  </div>
</div>
`

export const InputFieldValidationcode = `<div class="flex justify-center items-center p-2 md:p-5">
  <div class="w-full max-w-md space-y-6">
  <!-- Success Input -->
  <div>
    <label for="username-valid" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Username  
    </label>
    <div class="relative">
      <input
        type="text"
        id="username-valid"
        placeholder="johndoe"
        class="block w-full rounded-md border border-green-500 dark:border-green-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 px-4 py-2 text-sm pr-10 transition"
      />
      <span class="absolute inset-y-0 right-0 flex items-center pr-3 text-green-600 dark:text-green-400">
        <!-- Heroicons: Check -->
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    </div>
    <p class="mt-1 text-sm text-green-600 dark:text-green-400">Username is available.</p>
  </div>

  <!-- Error Input -->
  <div>
    <label for="email-error" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Email  
    </label>
    <div class="relative">
      <input
        type="email"
        id="email-error"
        placeholder="you@example.com"
        class="block w-full rounded-md border border-red-500 dark:border-red-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 px-4 py-2 text-sm pr-10 transition"
      />
      <span class="absolute inset-y-0 right-0 flex items-center pr-3 text-red-600 dark:text-red-400">
        <!-- Heroicons: Exclamation Circle -->
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
      </span>
    </div>
    <p class="mt-1 text-sm text-red-600 dark:text-red-400">Please enter a valid email address.</p>
  </div>
</div>

</div>
`

export const FloatingLabelInputCode=`<div class="flex items-center justify-center p-2 md:p-5">
  <div class="w-full max-w-md space-y-6">
    <!-- Username -->
    <div class="relative">
      <input type="text" id="floating-username" placeholder=" " class="peer block w-full appearance-none rounded-md border border-gray-300 bg-white px-4 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-violet-500 focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500" />
      <label for="floating-username" class="absolute top-2.5 left-3 z-10 origin-[0] scale-75 transform text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:left-3 peer-focus:scale-75 peer-focus:text-violet-500 dark:text-gray-400 dark:peer-placeholder-shown:text-gray-500 dark:peer-focus:text-blue-400"> Username </label>
    </div>

    <!-- Email -->
    <div class="relative">
      <input type="email" id="floating-email" placeholder=" " class="peer block w-full appearance-none rounded-md border border-gray-300 bg-white px-4 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-violet-500 focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500" />
      <label for="floating-email" class="absolute top-2.5 left-3 z-10 origin-[0] scale-75 transform text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:left-3 peer-focus:scale-75 peer-focus:text-violet-500 dark:text-gray-400 dark:peer-placeholder-shown:text-gray-500 dark:peer-focus:text-blue-400"> Email address </label>
    </div>

    <!-- Password -->
    <div class="relative">
      <input type="password" id="floating-password" placeholder=" " class="peer block w-full appearance-none rounded-md border border-gray-300 bg-white px-4 pt-5 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-violet-500 focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500" />
      <label for="floating-password" class="absolute top-2.5 left-3 z-10 origin-[0] scale-75 transform text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:left-3 peer-focus:scale-75 peer-focus:text-violet-500 dark:text-gray-400 dark:peer-placeholder-shown:text-gray-500 dark:peer-focus:text-blue-400"> Password </label>
    </div>
  </div>
</div>
`

export const HelperInputCode=`<div class="flex items-center justify-center p-2 md:p-5">
<div class="w-full max-w-md space-y-6">
  <!-- Email Input with Helper Text -->
  <div>
    <label for="helper-email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Email address
    </label>
    <input
      type="email"
      id="helper-email"
      placeholder="you@example.com"
      class="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:border-transparent"
    />
    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
      We'll never share your email with anyone else.
    </p>
  </div>

  <!-- Password Input with Helper Text -->
  <div>
    <label for="helper-password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Password
    </label>
    <input
      type="password"
      id="helper-password"
      placeholder="********"
      class="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:border-transparent"
    />
    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
      Must be at least 8 characters.
    </p>
  </div>
</div>

</div>
`

export const PilledINputFieldCode=`<div class="flex items-center justify-center p-2 md:p-5">
<div class="w-full max-w-md space-y-6">
  <!-- Pill Input -->
  <div>
    <label for="pill-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Search
    </label>
    <input
      type="text"
      id="pill-input"
      placeholder="Search anything..."
      class="block w-full rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-5 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:border-transparent transition"
    />
  </div>
</div>


</div>
`

export const searchInputCode=`<div class="flex flex-col items-center justify-center space-y-3 p-2 md:p-5">
  <div class="w-full max-w-md">
    <div class="relative">
      <!-- Search Icon -->
      <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 dark:text-gray-400">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.75-4.4a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>

      <!-- Input -->
      <input type="text" placeholder="Search" class="w-full rounded-full border border-gray-300 bg-white py-3 pr-20 pl-10 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500" />

      <!-- Button -->
      <button type="submit" class="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-violet-500 px-4  py-1.5 flex justify-center items-center mr-1 text-sm text-white transition hover:bg-violet-600 dark:bg-blue-600 dark:hover:bg-blue-700">Search</button>
    </div>
  </div>

  <div class="w-full max-w-md">
    <div class="relative rounded-md shadow-sm">
      <!-- Icon -->
      <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.75-4.4a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>

      <!-- Input -->
      <input type="text" placeholder="Search articles..." class="w-full rounded-md border border-gray-300 bg-white py-2 pr-24 pl-10 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500" />

      <!-- Full-Height Button -->
      <button class="absolute inset-y-0 right-0 rounded-r-md bg-violet-500 px-4 text-sm text-white transition hover:bg-violet-600 dark:bg-blue-600 dark:hover:bg-blue-700">Search</button>
    </div>
  </div>
</div>
`

export const NumberInputFieldCode=`<div class="flex justify-center items-center p-2 md:p-5">
  <div class="mb-6 w-full max-w-md">
    <label for="number-input" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"> Quantity </label>
    <input type="number" id="number-input" placeholder="Enter a number" class="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500" />
  </div>
</div>
`

export const TelInputFieldCode=`<div class="flex justify-center items-center p-2 md:p-5">
 <div class="w-full max-w-md mb-6">
  <label for="tel-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
    Phone Number
  </label>
  <input
    type="tel"
    id="tel-input"
    placeholder="+1 234 567 8900"
    class="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:border-transparent"
  />
</div>

</div>
`

export const UrlINputFieldCode= `<div class="flex justify-center items-center p-2 md:p-5">
 <div class="w-full max-w-md mb-6">
  <label for="url-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
    Website
  </label>
  <input
    type="url"
    id="url-input"
    placeholder="https://example.com"
    class="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:border-transparent"
  />
</div>


</div>
`