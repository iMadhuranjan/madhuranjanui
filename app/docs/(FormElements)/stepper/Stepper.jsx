export function ThreeStepStepper() {
  return (
    <div className="mx-auto max-w-2xl p-6">
      <div className="relative">
        <div className="relative z-10 flex gap-5 justify-center items-center flex-wrap">
          <div className="group flex flex-col items-center gap-4 md:flex-row md:items-start">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-600 text-white transition-all duration-300 group-hover:scale-110 dark:border-blue-500 dark:bg-blue-500">
              <span className="text-sm font-medium">1</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Step 1
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Account Setup
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center gap-4 md:flex-row md:items-start">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 transition-all duration-300 group-hover:scale-110 dark:border-blue-500 dark:bg-gray-900 dark:text-blue-400">
              <span className="text-sm font-medium">2</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Step 2
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Profile Information
              </p>
            </div>
          </div>

          <div className="group flex flex-col items-center gap-4 md:flex-row md:items-start">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-gray-400 transition-all duration-300 group-hover:scale-110 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-500">
              <span className="text-sm font-medium">3</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Step 3
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ThreeStepWithLine(){
    return(
        <div className="flex w-full justify-center px-4 py-6">

  <div className="flex w-full max-w-3xl flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
    <div className="flex items-center gap-2">
      <div className="flex aspect-square w-8 items-center justify-center rounded-full bg-violet-100 font-semibold text-violet-600 ring-2 ring-violet-500 dark:bg-blue-900 dark:text-blue-300 dark:ring-blue-500">1</div>
      <span className="text-sm text-gray-700 dark:text-gray-300">Step One</span>
    </div>

    <div className="hidden h-0.5 flex-1 bg-gray-300 sm:block dark:bg-gray-700"></div>

    <div className="flex items-center gap-2">
      <div className="flex aspect-square w-8 items-center justify-center rounded-full bg-violet-500 font-semibold text-white ring-2 ring-violet-500 dark:bg-blue-500 dark:text-white dark:ring-blue-500">2</div>
      <span className="text-sm font-medium text-gray-900 dark:text-white">Step Two</span>
    </div>

    <div className="hidden h-0.5 flex-1 bg-gray-300 sm:block dark:bg-gray-700"></div>

    <div className="flex items-center gap-2">
      <div className="flex aspect-square w-8 items-center justify-center rounded-full bg-gray-200 font-semibold text-gray-500 ring-2 ring-gray-300 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-600">3</div>
      <span className="text-sm text-gray-500 dark:text-gray-400">Step Three</span>
    </div>

  </div>
</div>

    )
}

export function BreadCumStepper(){
    return(
        <div className="flex flex-wrap items-center justify-center bg-gray-50 dark:bg-gray-900">
  <div className="mx-auto max-w-4xl p-1">
     <nav className="">
      <ol className="flex items-center gap-2 overflow-x-auto py-2 whitespace-nowrap">
         <li className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>Account</span>
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </li>

         <li className="flex items-center gap-2">
          <span className="flex items-center gap-1 rounded-lg bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800 dark:bg-blue-800 dark:text-white">
            <span>2</span>
            <span>Profile</span>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </li>

         <li className="flex items-center gap-2">
          <span className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
            <span>3</span>
            <span>Preferences</span>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </li>

         <li>
          <span className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
            <span>4</span>
            <span>Confirmation</span>
          </span>
        </li>
      </ol>
    </nav>
  </div>
</div>

    )
}

export function VerticalStepper(){
    return(
        <div className="mx-auto w-full max-w-md px-4 py-6">
  <div className="relative space-y-10 border-s-2 pl-5 border-gray-200 dark:border-gray-700">
    <div className="relative pl-8">
      <div className="absolute top-1 left-0 h-4 w-4 rounded-full bg-violet-500 ring-2 ring-white dark:bg-blue-500 dark:ring-gray-900"></div>
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Step One</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">This step has been completed successfully.</p>
    </div>

    <div className="relative pl-8">
      <div className="absolute top-1 left-0 h-4 w-4 rounded-full bg-white ring-2 ring-violet-500 dark:bg-gray-900 dark:ring-blue-500"></div>
      <h3 className="text-sm font-semibold text-violet-600 dark:text-blue-400">Step Two (In Progress)</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">You’re currently working on this step.</p>
    </div>

    <div className="relative pl-8">
      <div className="absolute top-1 left-0 h-4 w-4 rounded-full bg-gray-300 dark:bg-gray-600"></div>
      <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500">Step Three</h3>
      <p className="text-sm text-gray-400 dark:text-gray-600">This step hasn’t been started yet.</p>
    </div>
  </div>
</div>

    )
}

export function AdvancedSteper(){
    return(
        <div className="mx-auto max-w-4xl p-4 sm:p-6">
   <ol className="space-y-8 overflow-hidden">
     <li className="relative flex-1 after:absolute after:-bottom-8 after:left-4 after:h-full after:w-0.5 after:bg-indigo-600 dark:after:bg-indigo-500 sm:after:left-5">
      <div className="flex w-full items-start">
        <span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-medium text-white dark:bg-indigo-500 sm:h-9 sm:w-9">1</span>
        <div className="block pt-0.5">
          <h4 className="mb-2 text-base font-semibold text-indigo-600 dark:text-indigo-400">Product Onboarding Process</h4>
          <p className="mb-4 max-w-md text-sm text-gray-600 dark:text-gray-300">
            Our onboarding process ensures you get the most out of our platform quickly and efficiently.
          </p>
          <ul className="mb-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 md:grid-cols-3">
            <li className="font-medium text-gray-900 dark:text-gray-100">✓ Initial Setup</li>
            <li className="font-medium text-gray-900 dark:text-gray-100">✓ Feature Tour</li>
            <li className="font-medium text-gray-900 dark:text-gray-100">✓ Data Import</li>
            <li className="font-medium text-gray-900 dark:text-gray-100">✓ Team Invitation</li>
            <li className="font-medium text-gray-900 dark:text-gray-100">✓ Customization</li>
            <li className="font-medium text-gray-900 dark:text-gray-100">✓ Training Session</li>
          </ul>
          <p className="max-w-md text-sm text-gray-600 dark:text-gray-300">
            This structured approach ensures a smooth transition to our platform with minimal disruption.
          </p>
          <div className="my-6 flex flex-wrap gap-3">
            <button type="button" className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-600">Continue</button>
            <button type="button" className="rounded-lg bg-indigo-50 px-5 py-2 text-sm font-semibold text-indigo-600 shadow-sm transition-colors hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50">Back</button>
          </div>
        </div>
      </div>
    </li>

     <li className="relative flex-1 after:absolute after:-bottom-8 after:left-4 after:h-full after:w-0.5 after:bg-gray-200 dark:after:bg-gray-700 sm:after:left-5">
      <div className="flex w-full items-start">
        <span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-indigo-600 bg-indigo-50 text-sm font-medium text-indigo-600 dark:border-indigo-500 dark:bg-indigo-900/20 dark:text-indigo-400 sm:h-9 sm:w-9">2</span>
        <div className="block pt-0.5">
          <h4 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">Data Migration Assistance</h4>
          <p className="max-w-md text-sm text-gray-600 dark:text-gray-300">
            We provide comprehensive support for transferring your existing data to our platform.
          </p>
        </div>
      </div>
    </li>

     <li className="relative flex-1">
      <div className="flex w-full items-start">
        <span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 bg-gray-50 text-sm font-medium text-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-500 sm:h-9 sm:w-9">3</span>
        <div className="block pt-0.5">
          <h4 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">Advanced Configuration</h4>
          <p className="max-w-md text-sm text-gray-600 dark:text-gray-300">
            Customize settings, integrations, and workflows to match your business processes perfectly.
          </p>
        </div>
      </div>
    </li>
  </ol>
</div>
    )
}

export function TailwindFormStepper(){
    return(
        <div className="mx-auto max-w-6xl p-4 sm:p-6">
   <div className="relative">
     <div className="absolute left-4 right-4 top-4 h-0.5 bg-gray-200 dark:bg-gray-700"></div>

    <ol className="relative z-10 flex gap-8 justify-center items-center flex-wrap">
       <li className="flex flex-col items-center">
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <span className="mb-1 text-xs font-medium text-green-600 dark:text-green-400">Completed</span>
        <h4 className="text-center text-sm font-semibold text-gray-900 dark:text-white">Account</h4>
      </li>

       <li className="flex flex-col items-center">
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <span className="mb-1 text-xs font-medium text-green-600 dark:text-green-400">Completed</span>
        <h4 className="text-center text-sm font-semibold text-gray-900 dark:text-white">Email</h4>
      </li>

       <li className="flex flex-col items-center">
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 dark:border-blue-500 dark:bg-gray-900 dark:text-blue-400">
          3
        </div>
        <span className="mb-1 text-xs font-medium text-blue-600 dark:text-blue-400">In Progress</span>
        <h4 className="text-center text-sm font-semibold text-gray-900 dark:text-white">Profile</h4>
      </li>

       <li className="flex flex-col items-center">
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-gray-400 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-500">
          4
        </div>
        <span className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">Upcoming</span>
        <h4 className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400">Preferences</h4>
      </li>

       <li className="flex flex-col items-center">
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-gray-400 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-500">
          5
        </div>
        <span className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">Upcoming</span>
        <h4 className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400">Confirm</h4>
      </li>
    </ol>
  </div>
 
<div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-gray-900/50">
   <div className="mb-6 flex items-start justify-between">
    <div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">Profile Setup</h3>
      <div className="mt-2 flex items-center">
        <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">3</span>
        <span className="text-sm text-gray-600 dark:text-gray-300">Step 3 of 5 - Almost there!</span>
      </div>
    </div>
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>

   <div className="space-y-5">
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="group relative">
        <label className="mb-1 block text-sm font-medium text-gray-700 transition-all duration-200 group-focus-within:text-blue-600 dark:text-gray-300 dark:group-focus-within:text-blue-400">First Name</label>
        <div className="relative">
          <input type="text" className="block w-full rounded-lg border-gray-300 py-2.5 pl-4 pr-3 shadow-sm transition-all duration-200 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm" placeholder="John"/>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="group relative">
        <label className="mb-1 block text-sm font-medium text-gray-700 transition-all duration-200 group-focus-within:text-blue-600 dark:text-gray-300 dark:group-focus-within:text-blue-400">Last Name</label>
        <div className="relative">
          <input type="text" className="block w-full rounded-lg border-gray-300 py-2.5 pl-4 pr-3 shadow-sm transition-all duration-200 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm" placeholder="Doe"/>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

     <div className="group relative">
      <label className="mb-1 block text-sm font-medium text-gray-700 transition-all duration-200 group-focus-within:text-blue-600 dark:text-gray-300 dark:group-focus-within:text-blue-400">Bio</label>
      <textarea rows="3" className="block w-full rounded-lg border-gray-300 py-2.5 pl-4 pr-3 shadow-sm transition-all duration-200 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm" placeholder="Tell us about yourself..."></textarea>
    </div>

     <div className="group">
      <label className="mb-1 block text-sm font-medium text-gray-700 transition-all duration-200 group-focus-within:text-blue-600 dark:text-gray-300 dark:group-focus-within:text-blue-400">Profile Photo</label>
      <div className="mt-1 flex items-center">
        <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
          <svg className="h-full w-full text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.67 0 8.85 2.343 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
        <button type="button" className="ml-5 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
          Change
        </button>
      </div>
    </div>
  </div>

   <div className="mt-8 flex flex-col-reverse justify-between gap-3 sm:flex-row sm:items-center">
    <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Previous Step
    </button>
    <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700">
      Continue to Preferences
      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</div>

</div>
    )
}