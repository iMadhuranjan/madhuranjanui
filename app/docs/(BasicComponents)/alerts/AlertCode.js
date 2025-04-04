export const defaultAlertCode=`<div class="space-y-3 p-2">
  <div class="flex items-start gap-3 rounded-lg border border-violet-300 bg-violet-50 p-4 text-violet-800 dark:border-blue-500/30 dark:bg-blue-950 dark:text-blue-100">
  <span class="text-xl mt-0.5">🔔</span>
  <div>
    <h4 class="font-semibold">Primary Alert</h4>
    <p>This is a primary alert message.</p>
  </div>
</div>


<div class="flex items-start gap-3 rounded-lg border border-green-300 bg-green-50 p-4 text-green-800 dark:border-green-500/30 dark:bg-green-950 dark:text-green-100">
  <span class="text-xl mt-0.5">✅</span>
  <div>
    <h4 class="font-semibold">Success Alert</h4>
    <p>This is a success alert message.</p>
  </div>
</div>



<div class="flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-800 dark:border-amber-400/30 dark:bg-amber-950 dark:text-amber-100">
  <span class="text-xl mt-0.5">⚠️</span>
  <div>
    <h4 class="font-semibold">Warning Alert</h4>
    <p>This is a warning alert message.</p>
  </div>
</div>


<div class="flex items-start gap-3 rounded-lg border border-red-300 bg-red-50 p-4 text-red-800 dark:border-red-500/30 dark:bg-red-950 dark:text-red-100">
  <span class="text-xl mt-0.5">❌</span>
  <div>
    <h4 class="font-semibold">Error Alert</h4>
    <p>This is an error alert message.</p>
  </div>
</div>


<div class="flex items-start gap-3 rounded-lg border border-cyan-300 bg-cyan-50 p-4 text-cyan-800 dark:border-cyan-400/30 dark:bg-cyan-950 dark:text-cyan-100">
  <span class="text-xl mt-0.5">ℹ️</span>
  <div>
    <h4 class="font-semibold">Info Alert</h4>
    <p>This is an informational alert message.</p>
  </div>
</div>

  </div>`

  export const AletsWithListCode=`<div class="space-y-3 p-5">
<div class="flex items-start gap-3 rounded-lg border border-violet-300 bg-violet-50 p-4 text-violet-800 dark:border-blue-500/30 dark:bg-blue-950 dark:text-blue-100">
  <svg class="h-5 w-5 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"/>
  </svg>
  <div>
    <h4 class="font-semibold mb-1">Primary Alert</h4>
    <ul class="list-disc list-inside space-y-1 text-sm">
      <li>Important notice one</li>
      <li>Secondary information</li>
      <li>Final note or guidance</li>
    </ul>
  </div>
</div>



<div class="flex items-start gap-3 rounded-lg border border-green-300 bg-green-50 p-4 text-green-800 dark:border-green-500/30 dark:bg-green-950 dark:text-green-100">
  <svg class="h-5 w-5 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
  </svg>
  <div>
    <h4 class="font-semibold mb-1">Success Alert</h4>
    <ul class="list-disc list-inside space-y-1 text-sm">
      <li>All systems operational</li>
      <li>Backup complete</li>
      <li>No further action required</li>
    </ul>
  </div>
</div>


<div class="flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-800 dark:border-amber-400/30 dark:bg-amber-950 dark:text-amber-100">
  <svg class="h-5 w-5 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.618-1.14 1.05-2L13.05 4c-.525-.868-1.575-.868-2.1 0L4.032 17c-.568.86-.004 2 1.05 2z"/>
  </svg>
  <div>
    <h4 class="font-semibold mb-1">Warning Alert</h4>
    <ul class="list-disc list-inside space-y-1 text-sm">
      <li>Storage almost full</li>
      <li>License expires soon</li>
      <li>Update recommended</li>
    </ul>
  </div>
</div>


<div class="flex items-start gap-3 rounded-lg border border-red-300 bg-red-50 p-4 text-red-800 dark:border-red-500/30 dark:bg-red-950 dark:text-red-100">
  <svg class="h-5 w-5 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
  </svg>
  <div>
    <h4 class="font-semibold mb-1">Error Alert</h4>
    <ul class="list-disc list-inside space-y-1 text-sm">
      <li>Failed to connect to server</li>
      <li>Invalid user input</li>
      <li>Try again later</li>
    </ul>
  </div>
</div>


<div class="flex items-start gap-3 rounded-lg border border-cyan-300 bg-cyan-50 p-4 text-cyan-800 dark:border-cyan-400/30 dark:bg-cyan-950 dark:text-cyan-100">
  <svg class="h-5 w-5 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"/>
  </svg>
  <div>
    <h4 class="font-semibold mb-1">Info Alert</h4>
    <ul class="list-disc list-inside space-y-1 text-sm">
      <li>New feature available</li>
      <li>Scheduled maintenance Sunday</li>
      <li>Read the release notes</li>
    </ul>
  </div>
</div>
</div>
`

export const DissmableALertsCode=`  <div class="p-5 space-y-4">
   <div class="relative">
    <input type="checkbox" id="close-primary" class="peer hidden" />
    <div class="flex items-center gap-3 rounded-xl border border-violet-300 bg-violet-50 p-4 text-violet-900 shadow-sm transition-all duration-200 peer-checked:hidden dark:border-blue-600/30 dark:bg-blue-950 dark:text-blue-100">
      <svg class="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 10A8 8 0 1 1 2 10a8 8 0 0 1 16 0ZM9 9V5h2v4H9Zm0 2h2v2H9v-2Z" />
      </svg>
      <p class="text-sm">Welcome to your dashboard! <a href="#" class="font-semibold underline hover:text-violet-700 hover:no-underline dark:hover:text-blue-300">Explore features</a>.</p>
      <label for="close-primary" class="ms-auto cursor-pointer rounded-md p-1.5 text-violet-600 hover:bg-violet-100 dark:text-blue-300 dark:hover:bg-blue-900">
        <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 14 14">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
        </svg>
      </label>
    </div>
  </div>

   <div class="relative">
    <input type="checkbox" id="close-success" class="peer hidden" />
    <div class="flex items-center gap-3 rounded-xl border border-green-300 bg-green-50 p-4 text-green-900 shadow-sm transition-all duration-200 peer-checked:hidden dark:border-green-600/30 dark:bg-green-950 dark:text-green-100">
      <svg class="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1-4 5-5-1.4-1.4L9 11.2 7.4 9.6 6 11l3 3Z" />
      </svg>
      <p class="text-sm">Your profile was updated successfully! <a href="#" class="font-semibold underline hover:text-green-700 hover:no-underline dark:hover:text-green-300">View changes</a>.</p>
      <label for="close-success" class="ms-auto cursor-pointer rounded-md p-1.5 text-green-600 hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-900">
        <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 14 14">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
        </svg>
      </label>
    </div>
  </div>

   <div class="relative">
    <input type="checkbox" id="close-warning" class="peer hidden" />
    <div class="flex items-center gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-900 shadow-sm transition-all duration-200 peer-checked:hidden dark:border-amber-500/30 dark:bg-amber-950 dark:text-amber-100">
      <svg class="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12h2v2H9v-2Zm0-6h2v4H9V6Zm1-4a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z" />
      </svg>
      <p class="text-sm">You're nearing your storage limit. <a href="#" class="font-semibold underline hover:text-amber-700 hover:no-underline dark:hover:text-amber-300">Upgrade now</a>.</p>
      <label for="close-warning" class="ms-auto cursor-pointer rounded-md p-1.5 text-amber-600 hover:bg-amber-100 dark:text-amber-300 dark:hover:bg-amber-900">
        <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 14 14">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
        </svg>
      </label>
    </div>
  </div>

   <div class="relative">
    <input type="checkbox" id="close-error" class="peer hidden" />
    <div class="flex items-center gap-3 rounded-xl border border-red-300 bg-red-50 p-4 text-red-900 shadow-sm transition-all duration-200 peer-checked:hidden dark:border-red-500/30 dark:bg-red-950 dark:text-red-100">
      <svg class="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 7h2v4H9V7Zm1-7a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-1 14h2v2H9v-2Z" />
      </svg>
      <p class="text-sm">Something went wrong. <a href="#" class="font-semibold underline hover:text-red-700 hover:no-underline dark:hover:text-red-300">Try again</a>.</p>
      <label for="close-error" class="ms-auto cursor-pointer rounded-md p-1.5 text-red-600 hover:bg-red-100 dark:text-red-300 dark:hover:bg-red-900">
        <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 14 14">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
        </svg>
      </label>
    </div>
  </div>

   <div class="relative">
    <input type="checkbox" id="close-info" class="peer hidden" />
    <div class="flex items-center gap-3 rounded-xl border border-cyan-300 bg-cyan-50 p-4 text-cyan-900 shadow-sm transition-all duration-200 peer-checked:hidden dark:border-cyan-500/30 dark:bg-cyan-950 dark:text-cyan-100">
      <svg class="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 7h2v4H9V7Zm1-5a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-1 12h2v2H9v-2Z" />
      </svg>
      <p class="text-sm">Heads up! We’ve just rolled out an update. <a href="#" class="font-semibold underline hover:text-cyan-700 hover:no-underline dark:hover:text-cyan-300">See what’s new</a>.</p>
      <label for="close-info" class="ms-auto cursor-pointer rounded-md p-1.5 text-cyan-600 hover:bg-cyan-100 dark:text-cyan-300 dark:hover:bg-cyan-900">
        <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 14 14">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
        </svg>
      </label>
    </div>
  </div>
</div>`

export const AlertsWithBorderCode=`<div class="p-5 space-y-4">
  <!-- 1. Primary – Border: Top Only -->
  <div class="relative">
    <input type="checkbox" id="close-primary-variant" class="peer hidden" />
    <div class="flex items-start gap-3 border-t-4 border-violet-500 rounded-b-xl bg-violet-50 p-4 shadow-sm transition peer-checked:hidden dark:bg-blue-950 dark:text-blue-100">
      <svg class="h-5 w-5 shrink-0 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 10A8 8 0 1 1 2 10a8 8 0 0 1 16 0ZM9 9V5h2v4H9Zm0 2h2v2H9v-2Z" />
      </svg>
      <p class="text-sm">Welcome to your dashboard! <a href="#" class="font-semibold underline hover:text-violet-700 dark:hover:text-blue-300">Explore features</a>.</p>
      <label for="close-primary-variant" class="ms-auto cursor-pointer p-1.5 text-violet-600 hover:bg-violet-100 dark:text-blue-300 dark:hover:bg-blue-900">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 14 14">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
        </svg>
      </label>
    </div>
  </div>

  <!-- 2. Success – Border: Top + Left -->
  <div class="relative">
    <input type="checkbox" id="close-success-variant" class="peer hidden" />
    <div class="flex items-start gap-3 border-t-4 border-l-4 border-green-500 rounded-br-xl bg-green-50 p-4 shadow-sm peer-checked:hidden dark:bg-green-950 dark:text-green-100">
      <svg class="h-5 w-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1-4 5-5-1.4-1.4L9 11.2 7.4 9.6 6 11l3 3Z" />
      </svg>
      <p class="text-sm">Your profile was updated successfully! <a href="#" class="font-semibold underline hover:text-green-700 dark:hover:text-green-300">View changes</a>.</p>
      <label for="close-success-variant" class="ms-auto cursor-pointer p-1.5 text-green-600 hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-900">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 14 14">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
        </svg>
      </label>
    </div>
  </div>

  <!-- 3. Warning – Border: Top + Right -->
  <div class="relative">
    <input type="checkbox" id="close-warning-variant" class="peer hidden" />
    <div class="flex items-start gap-3 border-t-4 border-r-4 border-amber-500 rounded-bl-xl bg-amber-50 p-4 shadow-sm peer-checked:hidden dark:bg-amber-950 dark:text-amber-100">
      <svg class="h-5 w-5 shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12h2v2H9v-2Zm0-6h2v4H9V6Zm1-4a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z" />
      </svg>
      <p class="text-sm">You're nearing your storage limit. <a href="#" class="font-semibold underline hover:text-amber-700 dark:hover:text-amber-300">Upgrade now</a>.</p>
      <label for="close-warning-variant" class="ms-auto cursor-pointer p-1.5 text-amber-600 hover:bg-amber-100 dark:text-amber-300 dark:hover:bg-amber-900">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 14 14">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
        </svg>
      </label>
    </div>
  </div>

  <!-- 4. Error – Border: Top + Bottom -->
  <div class="relative">
    <input type="checkbox" id="close-error-variant" class="peer hidden" />
    <div class="flex items-start gap-3 border-y-4 border-red-500 rounded-xl bg-red-50 p-4 shadow-sm peer-checked:hidden dark:bg-red-950 dark:text-red-100">
      <svg class="h-5 w-5 shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 7h2v4H9V7Zm1-7a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-1 14h2v2H9v-2Z" />
      </svg>
      <p class="text-sm">Something went wrong. <a href="#" class="font-semibold underline hover:text-red-700 dark:hover:text-red-300">Try again</a>.</p>
      <label for="close-error-variant" class="ms-auto cursor-pointer p-1.5 text-red-600 hover:bg-red-100 dark:text-red-300 dark:hover:bg-red-900">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 14 14">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
        </svg>
      </label>
    </div>
  </div>

  <!-- 5. Info – Border: All Sides, Thicker -->
  <div class="relative">
    <input type="checkbox" id="close-info-variant" class="peer hidden" />
    <div class="flex items-start gap-3 border-4 border-cyan-500 rounded-xl bg-cyan-50 p-4 shadow-sm peer-checked:hidden dark:bg-cyan-950 dark:text-cyan-100">
      <svg class="h-5 w-5 shrink-0 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 7h2v4H9V7Zm1-5a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-1 12h2v2H9v-2Z" />
      </svg>
      <p class="text-sm">Heads up! We’ve just rolled out an update. <a href="#" class="font-semibold underline hover:text-cyan-700 dark:hover:text-cyan-300">See what’s new</a>.</p>
      <label for="close-info-variant" class="ms-auto cursor-pointer p-1.5 text-cyan-600 hover:bg-cyan-100 dark:text-cyan-300 dark:hover:bg-cyan-900">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 14 14">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
        </svg>
      </label>
    </div>
  </div>
</div>
`

export  const AlertWithAdditionalContetnCdode=`  <div class="space-y-4 p-5">
      <div class="relative">
        <input type="checkbox" id="alert-info-modern" class="peer hidden" />
        <div class="rounded-xl border border-blue-300 bg-blue-50 p-5 text-sm shadow-sm transition peer-checked:hidden dark:border-blue-600/40 dark:bg-blue-950">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="flex gap-4">
              <svg
                class="h-5 w-5 text-blue-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 7h2v4H9V7Zm1-5a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-1 12h2v2H9v-2Z" />
              </svg>
              <div>
                <p class="font-semibold text-blue-800 dark:text-blue-200">
                  This is an info alert
                </p>
                <p class="mt-1 text-blue-700 dark:text-blue-300">
                  More info about this alert goes here. This example text runs
                  longer to test spacing.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 sm:mt-0 sm:justify-end">
              <button class="inline-flex items-center gap-1 rounded-md border border-blue-500 bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
                View more
              </button>
              <label
                for="alert-info-modern"
                class="cursor-pointer inline-flex items-center gap-1 rounded-md border border-blue-500 px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-900"
              >
                Dismiss
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <input type="checkbox" id="alert-success-modern" class="peer hidden" />
        <div class="rounded-xl border border-green-300 bg-green-50 p-5 text-sm shadow-sm transition peer-checked:hidden dark:border-green-600/40 dark:bg-green-950">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="flex gap-4">
              <svg
                class="h-5 w-5 text-green-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1-4 5-5-1.4-1.4L9 11.2 7.4 9.6 6 11l3 3Z" />
              </svg>
              <div>
                <p class="font-semibold text-green-800 dark:text-green-200">
                  Success!
                </p>
                <p class="mt-1 text-green-700 dark:text-green-300">
                  Your operation completed successfully. Everything is saved and
                  up to date.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 sm:mt-0 sm:justify-end">
              <button class="inline-flex items-center gap-1 rounded-md border border-green-500 bg-green-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-green-700">
                View
              </button>
              <label
                for="alert-success-modern"
                class="cursor-pointer inline-flex items-center gap-1 rounded-md border border-green-500 px-3 py-1.5 text-xs font-medium text-green-600 hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-900"
              >
                Dismiss
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <input type="checkbox" id="alert-warning-modern" class="peer hidden" />
        <div class="rounded-xl border border-amber-300 bg-amber-50 p-5 text-sm shadow-sm transition peer-checked:hidden dark:border-amber-600/40 dark:bg-amber-950">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="flex gap-4">
              <svg
                class="h-5 w-5 text-amber-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12h2v2H9v-2Zm0-6h2v4H9V6Zm1-4a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z" />
              </svg>
              <div>
                <p class="font-semibold text-amber-800 dark:text-amber-200">
                  Storage almost full
                </p>
                <p class="mt-1 text-amber-700 dark:text-amber-300">
                  You’re nearing your usage limit. Upgrade soon to avoid service
                  interruption.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 sm:mt-0 sm:justify-end">
              <button class="inline-flex items-center gap-1 rounded-md border border-amber-500 bg-amber-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-amber-700">
                Upgrade
              </button>
              <label
                for="alert-warning-modern"
                class="cursor-pointer inline-flex items-center gap-1 rounded-md border border-amber-500 px-3 py-1.5 text-xs font-medium text-amber-700 hover:bg-amber-100 dark:text-amber-300 dark:hover:bg-amber-900"
              >
                Dismiss
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <input type="checkbox" id="alert-error-modern" class="peer hidden" />
        <div class="rounded-xl border border-red-300 bg-red-50 p-5 text-sm shadow-sm transition peer-checked:hidden dark:border-red-600/40 dark:bg-red-950">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="flex gap-4">
              <svg
                class="h-5 w-5 text-red-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 7h2v4H9V7Zm1-7a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-1 14h2v2H9v-2Z" />
              </svg>
              <div>
                <p class="font-semibold text-red-800 dark:text-red-200">
                  Something went wrong
                </p>
                <p class="mt-1 text-red-700 dark:text-red-300">
                  There was a problem processing your request. Please try again
                  or contact support.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 sm:mt-0 sm:justify-end">
              <button class="inline-flex items-center gap-1 rounded-md border border-red-500 bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700">
                Retry
              </button>
              <label
                for="alert-error-modern"
                class="cursor-pointer inline-flex items-center gap-1 rounded-md border border-red-500 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-100 dark:text-red-300 dark:hover:bg-red-900"
              >
                Dismiss
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <input type="checkbox" id="alert-primary-modern" class="peer hidden" />
        <div class="rounded-xl border border-indigo-300 bg-indigo-50 p-5 text-sm shadow-sm transition peer-checked:hidden dark:border-indigo-600/40 dark:bg-indigo-950">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="flex gap-4">
              <svg
                class="h-5 w-5 text-indigo-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 10A8 8 0 1 1 2 10a8 8 0 0 1 16 0ZM9 9V5h2v4H9Zm0 2h2v2H9v-2Z" />
              </svg>
              <div>
                <p class="font-semibold text-indigo-800 dark:text-indigo-200">
                  Welcome back
                </p>
                <p class="mt-1 text-indigo-700 dark:text-indigo-300">
                  You’re all set to explore your dashboard. Let’s get started!
                </p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 sm:mt-0 sm:justify-end">
              <button class="inline-flex items-center gap-1 rounded-md border border-indigo-500 bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-700">
                Explore
              </button>
              <label
                for="alert-primary-modern"
                class="cursor-pointer inline-flex items-center gap-1 rounded-md border border-indigo-500 px-3 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-100 dark:text-indigo-300 dark:hover:bg-indigo-900"
              >
                Dismiss
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>`


    export const GradientBarAlertCode=`<div class="relative">
  <input type="checkbox" id="bar-alert" class="peer hidden" />
  <div class="w-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 px-4 py-3 text-sm text-white peer-checked:hidden dark:from-indigo-900 dark:via-indigo-950 dark:to-indigo-900" role="alert">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <svg class="h-5 w-5 shrink-0 text-indigo-200" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 9V5h2v4H9Zm0 2h2v2H9v-2Z" />
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16Z" clip-rule="evenodd" />
        </svg>
        <p class="font-medium">New updates available. Check out the latest changes.</p>
      </div>
      <div class="flex items-center gap-2">
        <a href="/updates" class="inline-flex items-center rounded-md border border-white/20 px-3 py-1 text-xs font-medium text-white hover:bg-white/10 dark:border-indigo-300/20 dark:hover:bg-indigo-900/30"> Learn more </a>
        <label for="bar-alert" class="cursor-pointer p-1 hover:text-indigo-200">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>
    </div>
  </div>
</div>
`

export const FloatingBannerCode=`<div class="p-4">
  <div class="mx-auto max-w-2xl rounded-full bg-indigo-50 px-4 py-3 shadow-sm ring-1 ring-inset ring-indigo-200 dark:bg-indigo-900 dark:ring-indigo-700">
    <div class="flex items-center gap-4 text-sm text-indigo-800 dark:text-indigo-100">
      <div class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-200 dark:bg-indigo-700">
        <svg class="h-4 w-4 text-indigo-700 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 9V5h2v4H9Zm0 2h2v2H9v-2Z" />
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16Z" clip-rule="evenodd" />
        </svg>
      </div>
      <p>We've made improvements to your dashboard performance.</p>
    </div>
  </div>
</div>
`