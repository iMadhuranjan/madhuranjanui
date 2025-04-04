export const SuccessToastCode=`<!-- Toast Notification Container (Place it near the end of your body) -->
<div class="fixed top-5 right-5 z-50 space-y-4">
  <!-- Toast Notification -->
  <div class="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transform transition ease-in-out duration-300">
    <!-- Icon Section -->
    <div class="flex-shrink-0">
      <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" stroke-width="2"
           viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <!-- Text Section -->
    <div class="ml-3 flex-1">
      <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Success!</p>
      <p class="text-sm text-gray-600 dark:text-gray-300">Your changes have been saved successfully.</p>
    </div>
    <!-- Close Button -->
    <button class="ml-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
      </svg>
    </button>
  </div>
</div>
`

export const VarientWithCloseTOast=`<div class="fixed top-5 right-5 z-50 space-y-4">
  <!-- Success Toast -->
  <div class="relative">
    <!-- Hidden checkbox to control visibility -->
    <input type="checkbox" id="toast-success" class="peer hidden" />
    <!-- Toast container; hides when the checkbox is checked -->
    <div class="ring-opacity-5 flex items-start rounded-lg bg-white p-4 shadow-lg ring-1 ring-black transition duration-300 peer-checked:hidden dark:bg-gray-800">
      <div class="flex-shrink-0">
        <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div class="ml-3 flex-1">
        <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Success!</p>
        <p class="text-sm text-gray-600 dark:text-gray-300">Your changes have been saved successfully.</p>
      </div>
      <!-- Label acting as close button -->
      <label for="toast-success" class="ml-4 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </label>
    </div>
  </div>

  <!-- Error Toast -->
  <div class="relative">
    <input type="checkbox" id="toast-error" class="peer hidden" />
    <div class="ring-opacity-5 flex items-start rounded-lg bg-white p-4 shadow-lg ring-1 ring-black transition duration-300 peer-checked:hidden dark:bg-gray-800">
      <div class="flex-shrink-0">
        <svg class="h-6 w-6 text-red-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <div class="ml-3 flex-1">
        <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Error!</p>
        <p class="text-sm text-gray-600 dark:text-gray-300">There was an error processing your request.</p>
      </div>
      <label for="toast-error" class="ml-4 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </label>
    </div>
  </div>

  <!-- Deletion Toast -->
  <div class="relative">
    <input type="checkbox" id="toast-deleted" class="peer hidden" />
    <div class="ring-opacity-5 flex items-start rounded-lg bg-white p-4 shadow-lg ring-1 ring-black transition duration-300 peer-checked:hidden dark:bg-gray-800">
      <div class="flex-shrink-0">
        <svg class="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4m0 4h.01" />
        </svg>
      </div>
      <div class="ml-3 flex-1">
        <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Deleted!</p>
        <p class="text-sm text-gray-600 dark:text-gray-300">The item has been deleted successfully.</p>
      </div>
      <label for="toast-deleted" class="ml-4 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </label>
    </div>
  </div>
</div>
`

export const MessageToastCode=` <div class="flex items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
  <div class="relative w-full max-w-sm">
     <input type="checkbox" id="toast-toggle" class="peer hidden" />

     <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl transition-all duration-300 peer-checked:hidden dark:border-gray-700 dark:bg-gray-800">
       <div class="mb-2 flex items-center justify-between">
        <h2 class="text-base font-semibold text-gray-900 dark:text-white">Toast Message</h2>
        <label for="toast-toggle" class="cursor-pointer text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-300">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      {/* <!-- Toast Message Content --> */}
      <p class="text-sm text-gray-600 dark:text-gray-300">You’ve received a new message. Please check your inbox and reply accordingly.</p>

      {/* <!--   Buttons --> */}
      <div class="mt-4 flex justify-end">
        <button class="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none">Reply</button>
      </div>
    </div>
  </div>
</div>`


export const NotificationToastCode=`<div class="flex items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
  <div class="w-full max-w-sm rounded-lg border border-gray-200 bg-white/70 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 dark:border-gray-700 dark:bg-gray-800/70">
    <!-- Header Section -->
    <div class="flex items-start gap-4">
      <!-- Icon -->
      <div class="mt-1.5">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40">
          <svg class="h-5 w-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 6.165 8 7.388 8 9v5.159c0 .538-.214 1.055-.595 1.436L6 17h5m0 0v1a3 3 0 006 0v-1m-6 0h6" />
          </svg>
        </div>
      </div>

      <!-- Text Content -->
      <div class="flex-1">
        <h3 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">App Notifications</h3>
        <p class="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">Stay in the loop — we’ll alert you with sounds, badges, and banners.</p>
      </div>
    </div>

    <!-- Footer Actions -->
    <div class="mt-6 flex justify-end gap-3">
      <button class="px-4 py-2 text-sm font-medium text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Don’t allow</button>
      <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">Allow</button>
    </div>
  </div>
</div>
`

export const ToastWithAvatarCode=`<div class="flex items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
  <div class="relative w-full max-w-sm">
     <input type="checkbox" id="toast-avatar" class="peer hidden" />

    <div class="flex items-center gap-4 rounded-xs border border-gray-200 bg-white p-5 shadow-lg transition-all duration-300 peer-checked:hidden dark:border-gray-700 dark:bg-gray-800">
       <img src="https://i.pravatar.cc/100?img=12" alt="Avatar" class="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm dark:border-gray-700" />

       <div class="flex-1">
        <p class="text-sm font-medium text-gray-900 dark:text-white">Alex Johnson <span class="font-normal text-gray-500 dark:text-gray-400">sent you a message</span></p>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">“Hey, just checking in — available for a quick call?”</p>

         <div class="mt-3">
          <button class="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400">Reply</button>
        </div>
      </div>

       <label for="toast-avatar" class="cursor-pointer text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-300">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>
    </div>
  </div>
</div>`

export const BorderWithToastCode=`<div class="flex flex-col items-center justify-center gap-6 bg-gray-100 p-6 dark:bg-gray-900">
  <!-- Success Toast -->
  <div class="relative w-full max-w-md">
    <input type="checkbox" id="toast-success" class="peer hidden" />
    <div class="flex items-start gap-4 rounded-xl border-l-4 border-green-500 bg-white p-5 shadow-lg peer-checked:hidden dark:bg-gray-800">
      <div class="mt-1.5">
        <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div class="flex-1">
        <p class="text-sm font-semibold text-gray-900 dark:text-white">Success!</p>
        <p class="text-sm text-gray-600 dark:text-gray-300">Your changes were saved successfully.</p>
      </div>
      <label for="toast-success" class="cursor-pointer text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-300">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>
    </div>
  </div>

  <!-- Error Toast -->
  <div class="relative w-full max-w-md">
    <input type="checkbox" id="toast-error" class="peer hidden" />
    <div class="flex items-start gap-4 rounded-xl border-l-4 border-red-500 bg-white p-5 shadow-lg peer-checked:hidden dark:bg-gray-800">
      <div class="mt-1.5">
        <svg class="h-5 w-5 text-red-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div class="flex-1">
        <p class="text-sm font-semibold text-gray-900 dark:text-white">Error!</p>
        <p class="text-sm text-gray-600 dark:text-gray-300">Something went wrong. Please try again later.</p>
      </div>
      <label for="toast-error" class="cursor-pointer text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-300">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>
    </div>
  </div>

  <!-- Info Toast -->
  <div class="relative w-full max-w-md">
    <input type="checkbox" id="toast-info" class="peer hidden" />
    <div class="flex items-start gap-4 rounded-xl border-l-4 border-blue-500 bg-white p-5 shadow-lg peer-checked:hidden dark:bg-gray-800">
      <div class="mt-1.5">
        <svg class="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      </div>
      <div class="flex-1">
        <p class="text-sm font-semibold text-gray-900 dark:text-white">Info</p>
        <p class="text-sm text-gray-600 dark:text-gray-300">We’ve updated our privacy policy. Please review it.</p>
      </div>
      <label for="toast-info" class="cursor-pointer text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-300">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>
    </div>
  </div>

  <!-- Warning Toast -->
  <div class="relative w-full max-w-md">
    <input type="checkbox" id="toast-warning" class="peer hidden" />
    <div class="flex items-start gap-4 rounded-xl border-l-4 border-yellow-500 bg-white p-5 shadow-lg peer-checked:hidden dark:bg-gray-800">
      <div class="mt-1.5">
        <svg class="h-5 w-5 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01M12 5.5a1.5 1.5 0 00-1.5 1.5v.5a1.5 1.5 0 003 0V7A1.5 1.5 0 0012 5.5z" />
        </svg>
      </div>
      <div class="flex-1">
        <p class="text-sm font-semibold text-gray-900 dark:text-white">Warning</p>
        <p class="text-sm text-gray-600 dark:text-gray-300">Your subscription is about to expire.</p>
      </div>
      <label for="toast-warning" class="cursor-pointer text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-300">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>
    </div>
  </div>
</div>
`

export const ToastWithSwitchCode=` <div class=" flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
  <div class="relative w-full max-w-md">

     <input type="checkbox" id="toast-interactive" class="peer hidden" />

     <div class="peer-checked:hidden flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl p-5 transition-all duration-300 backdrop-blur-md">

       <img src="https://i.pravatar.cc/100?img=5" alt="Avatar"
           class="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md" />

       <div class="flex-1 w-full space-y-2">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-semibold text-gray-900 dark:text-white">New Feature Access</h3>
           <label for="toast-interactive" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition ml-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </label>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-300">
          Emma invited you to try real-time collaboration tools in Beta.
        </p>

         <div class="flex items-center justify-between mt-2">
          <span class="text-sm text-gray-700 dark:text-gray-400">Enable real-time sync</span>
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer"/>
            <div class="w-10 h-5 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition peer-focus:ring-2 ring-blue-300 dark:peer-focus:ring-blue-800"></div>
            <div class="absolute w-4 h-4 bg-white rounded-full shadow transform translate-x-1 peer-checked:translate-x-5 transition"></div>
          </label>
        </div>

         <div class="flex justify-end gap-3 pt-3">
          <button class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
            Later
          </button>
          <button class="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Accept
          </button>
        </div>
      </div>
    </div>

  </div>
</div>`

export const ToastWithLabelAndButtonCode=`<div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
  <div class="relative w-full max-w-sm">

    <!-- Hidden checkbox for close -->
    <input type="checkbox" id="toast-variant2" class="peer hidden" />

    <!-- Toast Card -->
    <div class="peer-checked:hidden flex flex-col gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-5 transition-all duration-300">

      <!-- Header: Avatar + Tag + Close -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="https://i.pravatar.cc/100?img=9" alt="User avatar"
               class="w-10 h-10 rounded-full object-cover border border-white dark:border-gray-700 shadow-sm" />
          <span class="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full uppercase tracking-wide font-semibold">
            New Invite
          </span>
        </div>
        <label for="toast-variant2" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </label>
      </div>

      <!-- Message -->
      <div>
        <p class="text-sm text-gray-800 dark:text-white font-medium">
          Louis invited you to join the **Design Board** workspace.
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
          You can preview the workspace or accept to join immediately.
        </p>
      </div>

      <!-- Buttons -->
      <div class="flex justify-end gap-3 pt-1">
        <button class="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
          Preview
        </button>
        <button class="px-4 py-1.5 text-xs font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Join Now
        </button>
      </div>
    </div>

  </div>
</div>
`