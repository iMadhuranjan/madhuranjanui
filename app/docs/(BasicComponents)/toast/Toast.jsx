"use client";
import React, { useState } from "react";

export function SuccessToast() {
  return (
    <div className="absolute top-5 right-5 z-50">
      <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transform transition ease-in-out duration-300">
        <div className="flex-shrink-0">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            Success!
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Your changes have been saved successfully.
          </p>
        </div>
        <button className="ml-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export const ToastsVarient = () => {
  const [showSuccess, setShowSuccess] = useState(true);
  const [showError, setShowError] = useState(true);
  const [showDeleted, setShowDeleted] = useState(true);

  return (
    <div className="absolute top-5 right-5 z-50">
      <div className="space-y-5">
        {showSuccess && (
          <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transition duration-300">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Success!
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Your changes have been saved successfully.
              </p>
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              className="ml-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}

        {showError && (
          <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transition duration-300">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Error!
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                There was an error processing your request.
              </p>
            </div>
            <button
              onClick={() => setShowError(false)}
              className="ml-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}

        {showDeleted && (
          <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transition duration-300">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-yellow-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4m0 4h.01" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Deleted!
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                The item has been deleted successfully.
              </p>
            </div>
            <button
              onClick={() => setShowDeleted(false)}
              className="ml-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const MessageToast = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
      <div className="relative w-full max-w-sm">
        <input type="checkbox" id="toast-toggle" className="peer hidden" />

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl transition-all duration-300 peer-checked:hidden dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              Toast Message
            </h3>
            <label
              for="toast-toggle"
              className="cursor-pointer text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>

          {/* <!-- Toast Message Content --> */}
          <p className="text-sm text-gray-600 dark:text-gray-300">
            You’ve received a new message. Please check your inbox and reply
            accordingly.
          </p>

          {/* <!--   Buttons --> */}
          <div className="mt-4 flex justify-end">
            <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none">
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export function NotifficationToast() {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white/70 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 dark:border-gray-700 dark:bg-gray-800/70">
        <div className="flex items-start gap-4">
          <div className="mt-1.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40">
              <svg
                className="h-5 w-5 text-blue-600 dark:text-blue-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 6.165 8 7.388 8 9v5.159c0 .538-.214 1.055-.595 1.436L6 17h5m0 0v1a3 3 0 006 0v-1m-6 0h6"
                />
              </svg>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
              App Notifications
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Stay in the loop — we’ll alert you with sounds, badges, and
              banners.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Don’t allow
          </button>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            Allow
          </button>
        </div>
      </div>
    </div>
  );
}

export function ToastWithAvatar() {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
      <div className="relative w-full max-w-sm">
        <input type="checkbox" id="toast-avatar" className="peer hidden" />

        <div className="flex items-center gap-4 rounded-xs border border-gray-200 bg-white p-5 shadow-lg transition-all duration-300 peer-checked:hidden dark:border-gray-700 dark:bg-gray-800">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Avatar"
            className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm dark:border-gray-700"
          />

          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Alex Johnson{" "}
              <span className="font-normal text-gray-500 dark:text-gray-400">
                sent you a message
              </span>
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              “Hey, just checking in — available for a quick call?”
            </p>

            <div className="mt-3">
              <button className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400">
                Reply
              </button>
            </div>
          </div>

          <label
            for="toast-avatar"
            className="cursor-pointer text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
}

export function ToastWithBorders(){
  return(
    <div className="flex flex-col items-center justify-center gap-6 bg-gray-100 p-6 dark:bg-gray-900">
   <div className="relative w-full max-w-md">
    <input type="checkbox" id="toast-success" className="peer hidden" />
    <div className="flex items-start gap-4 rounded-xl border-l-4 border-green-500 bg-white p-5 shadow-lg peer-checked:hidden dark:bg-gray-800">
      <div className="mt-1.5">
        <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">Success!</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Your changes were saved successfully.</p>
      </div>
      <label for="toast-success" className="cursor-pointer text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-300">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>
    </div>
  </div>

   <div className="relative w-full max-w-md">
    <input type="checkbox" id="toast-error" className="peer hidden" />
    <div className="flex items-start gap-4 rounded-xl border-l-4 border-red-500 bg-white p-5 shadow-lg peer-checked:hidden dark:bg-gray-800">
      <div className="mt-1.5">
        <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">Error!</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Something went wrong. Please try again later.</p>
      </div>
      <label for="toast-error" className="cursor-pointer text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-300">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>
    </div>
  </div>

   <div className="relative w-full max-w-md">
    <input type="checkbox" id="toast-info" className="peer hidden" />
    <div className="flex items-start gap-4 rounded-xl border-l-4 border-blue-500 bg-white p-5 shadow-lg peer-checked:hidden dark:bg-gray-800">
      <div className="mt-1.5">
        <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">Info</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">We’ve updated our privacy policy. Please review it.</p>
      </div>
      <label for="toast-info" className="cursor-pointer text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-300">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>
    </div>
  </div>

   <div className="relative w-full max-w-md">
    <input type="checkbox" id="toast-warning" className="peer hidden" />
    <div className="flex items-start gap-4 rounded-xl border-l-4 border-yellow-500 bg-white p-5 shadow-lg peer-checked:hidden dark:bg-gray-800">
      <div className="mt-1.5">
        <svg className="h-5 w-5 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01M12 5.5a1.5 1.5 0 00-1.5 1.5v.5a1.5 1.5 0 003 0V7A1.5 1.5 0 0012 5.5z" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">Warning</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Your subscription is about to expire.</p>
      </div>
      <label for="toast-warning" className="cursor-pointer text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-300">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>
    </div>
  </div>
</div>

  )
}


export function ToastWithSwitch(){
  return(
    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
  <div className="relative w-full max-w-md">

     <input type="checkbox" id="toast-interactive" className="peer hidden" />

     <div className="peer-checked:hidden flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl p-5 transition-all duration-300 backdrop-blur-md">

       <img src="https://i.pravatar.cc/100?img=5" alt="Avatar"
           className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md" />

       <div className="flex-1 w-full space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">New Feature Access</h3>
           <label for="toast-interactive" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition ml-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </label>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Emma invited you to try real-time collaboration tools in Beta.
        </p>

         <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-700 dark:text-gray-400">Enable real-time sync</span>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer"/>
            <div className="w-10 h-5 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition peer-focus:ring-2 ring-blue-300 dark:peer-focus:ring-blue-800"></div>
            <div className="absolute w-4 h-4 bg-white rounded-full shadow transform translate-x-1 peer-checked:translate-x-5 transition"></div>
          </label>
        </div>

         <div className="flex justify-end gap-3 pt-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
            Later
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Accept
          </button>
        </div>
      </div>
    </div>

  </div>
</div>

  )
}

export function ToastWithLabelAndButton(){
  return(
    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
  <div className="relative w-full max-w-sm">

     <input type="checkbox" id="toast-variant2" className="peer hidden" />

     <div className="peer-checked:hidden flex flex-col gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-5 transition-all duration-300">

       <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/100?img=9" alt="User avatar"
               className="w-10 h-10 rounded-full object-cover border border-white dark:border-gray-700 shadow-sm" />
          <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full uppercase tracking-wide font-semibold">
            New Invite
          </span>
        </div>
        <label for="toast-variant2" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </label>
      </div>

       <div>
        <p className="text-sm text-gray-800 dark:text-white font-medium">
          Louis invited you to join the <span className="font-bold text-violet-500 dark:text-blue-500">Design Board</span> workspace.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          You can preview the workspace or accept to join immediately.
        </p>
      </div>

      {/* <!-- Buttons --> */}
      <div className="flex justify-end gap-3 pt-1">
        <button className="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
          Preview
        </button>
        <button className="px-4 py-1.5 text-xs font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Join Now
        </button>
      </div>
    </div>

  </div>
</div>

  )
}