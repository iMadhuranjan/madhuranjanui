"use client";

export const BadgeCollection = () => {
  return (
    <div className="flex flex-wrap gap-3 md:gap-7 justify-center items-center bg-gray-50 p-6 dark:bg-gray-900">
      {/* 1️⃣ Solid Badges */}
      <span className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-lg">
        Primary
      </span>
      <span className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-lg">
        Danger
      </span>
      <span className="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-lg">
        Success
      </span>
      <span className="px-3 py-1 text-sm font-semibold text-white bg-yellow-500 rounded-lg">
        Warning
      </span>

      {/* 2️⃣ Outline Badges */}
      <span className="px-3 py-1 text-sm font-semibold border border-blue-500 text-blue-500 rounded-lg">
        Info
      </span>
      <span className="px-3 py-1 text-sm font-semibold border border-gray-500 dark:border-gray-200 text-gray-500 dark:text-gray-200 rounded-lg">
        Neutral
      </span>

      {/* 3️⃣ Gradient Badges */}
      <span className="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
        Gradient
      </span>
      <span className="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg">
        Ocean
      </span>

      {/* 4️⃣ Rounded & Soft Badges */}
      <span className="px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-800 rounded-full dark:bg-gray-800 dark:text-gray-200">
        Soft Gray
      </span>
      <span className="px-3 py-1 text-sm font-semibold bg-green-100 text-green-700 rounded-full dark:bg-green-800 dark:text-green-200">
        Soft Success
      </span>
    </div>
  );
};

export const BorderBadges = () => {
  return (
    <div className="flex flex-wrap gap-4  p-10 justify-center items-center bg-gray-50 dark:bg-gray-900">
      <span className="px-3 py-1 text-sm font-semibold border border-blue-500 text-blue-500 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-lg">
        Info
      </span>
      <span className="px-3 py-1 text-sm font-semibold border border-red-500 text-red-500 dark:text-red-200 bg-red-100 dark:bg-red-900 rounded-lg">
        Danger
      </span>
      <span className="px-3 py-1 text-sm font-semibold border border-green-500 text-green-500  dark:text-green-200 bg-green-100 dark:bg-green-900 rounded-lg">
        Success
      </span>
      <span className="px-3 py-1 text-sm font-semibold border border-yellow-500 text-yellow-500 dark:text-yellow-200 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
        Warning
      </span>

      <span className="px-3 py-1 text-sm font-semibold border-2 border-blue-500 text-blue-500 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-lg border-dashed">
        Dashed Info
      </span>
      <span className="px-3 py-1 text-sm font-semibold border-2 border-gray-500 text-gray-500 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-lg border-dashed">
        Dashed Neutral
      </span>

      <span className="px-3 py-1 text-sm font-semibold border-4 border-purple-500 text-purple-500 bg-purple-100 dark:bg-purple-900 rounded-lg dark:text-purple-200">
        Double Border
      </span>
      <span className="px-3 py-1 text-sm font-semibold border-4 border-teal-500 text-teal-500 dark:text-teal-200 bg-teal-100 dark:bg-teal-900 rounded-lg">
        Double Success
      </span>

      <span className="px-3 py-1 text-sm font-semibold border-2 border-gray-700 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full">
        Rounded
      </span>
      <span className="px-3 py-1 text-sm font-semibold border-2 border-green-700 text-green-700 dark:text-gray-200 bg-green-100 dark:bg-green-900 rounded-full">
        Thick Success
      </span>
    </div>
  );
};

export const PillBadges = () => {
  return (
    <div className="flex flex-wrap gap-4  p-10 justify-center items-center bg-gray-50 dark:bg-gray-900">
      {/* 🔹 1️⃣ Solid Pill Badges */}
      <span className="px-4 py-1 text-sm font-semibold text-blue-700 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-full">
        Info
      </span>
      <span className="px-4 py-1 text-sm font-semibold text-red-700 dark:text-red-200 bg-red-100 dark:bg-red-900 rounded-full">
        Danger
      </span>
      <span className="px-4 py-1 text-sm font-semibold text-green-700 dark:text-green-200 bg-green-100 dark:bg-green-900 rounded-full">
        Success
      </span>
      <span className="px-4 py-1 text-sm font-semibold text-yellow-700 dark:text-yellow-200 bg-yellow-100 dark:bg-yellow-900 rounded-full">
        Warning
      </span>

      {/* 🔹 2️⃣ Additional Colors */}
      <span className="px-4 py-1 text-sm font-semibold text-indigo-700 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900 rounded-full">
        Indigo
      </span>
      <span className="px-4 py-1 text-sm font-semibold text-purple-700 dark:text-purple-200 bg-purple-100 dark:bg-purple-900 rounded-full">
        Purple
      </span>
      <span className="px-4 py-1 text-sm font-semibold text-pink-700 dark:text-pink-200 bg-pink-100 dark:bg-pink-900 rounded-full">
        Pink
      </span>
      <span className="px-4 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full">
        Neutral
      </span>

      {/* 🔹 3️⃣ Unique Soft Colors */}
      <span className="px-4 py-1 text-sm font-semibold text-teal-700 dark:text-teal-200 bg-teal-100 dark:bg-teal-900 rounded-full">
        Teal
      </span>
      <span className="px-4 py-1 text-sm font-semibold text-orange-700 dark:text-orange-200 bg-orange-100 dark:bg-orange-900 rounded-full">
        Orange
      </span>
    </div>
  );
};

export const LinkBadges = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center bg-gray-50 p-6 dark:bg-gray-900">
      {/* 🔹 1️⃣ Primary Link Badges */}
      <a
        href="#"
        className="px-4 py-1 text-sm font-semibold border border-blue-500 text-blue-600 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-lg transition-all hover:bg-blue-200 dark:hover:bg-blue-800 hover:text-blue-700"
      >
        Info
      </a>
      <a
        href="#"
        className="px-4 py-1 text-sm font-semibold border border-red-500 text-red-600 dark:text-red-200 bg-red-100 dark:bg-red-900 rounded-lg transition-all hover:bg-red-200 dark:hover:bg-red-800 hover:text-red-700"
      >
        Danger
      </a>
      <a
        href="#"
        className="px-4 py-1 text-sm font-semibold border border-green-500 text-green-600 dark:text-green-200 bg-green-100 dark:bg-green-900 rounded-lg transition-all hover:bg-green-200 dark:hover:bg-green-800 hover:text-green-700"
      >
        Success
      </a>
      <a
        href="#"
        className="px-4 py-1 text-sm font-semibold border border-yellow-500 text-yellow-600 dark:text-yellow-200 bg-yellow-100 dark:bg-yellow-900 rounded-lg transition-all hover:bg-yellow-200 dark:hover:bg-yellow-800 hover:text-yellow-700"
      >
        Warning
      </a>

      {/* 🔹 2️⃣ Secondary Link Badges */}
      <a
        href="#"
        className="px-4 py-1 text-sm font-semibold border border-indigo-500 text-indigo-600 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900 rounded-lg transition-all hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-700"
      >
        Indigo
      </a>
      <a
        href="#"
        className="px-4 py-1 text-sm font-semibold border border-purple-500 text-purple-600 dark:text-purple-200 bg-purple-100 dark:bg-purple-900 rounded-lg transition-all hover:bg-purple-200 dark:hover:bg-purple-800 hover:text-purple-700"
      >
        Purple
      </a>
      <a
        href="#"
        className="px-4 py-1 text-sm font-semibold border border-pink-500 text-pink-600 dark:text-pink-200 bg-pink-100 dark:bg-pink-900 rounded-lg transition-all hover:bg-pink-200 dark:hover:bg-pink-800 hover:text-pink-700"
      >
        Pink
      </a>

      {/* 🔹 3️⃣ Special Styled Link Badges */}
      <a
        href="#"
        className="px-4 py-1 text-sm font-semibold border border-gray-500 text-gray-600 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700"
      >
        Neutral
      </a>
      <a
        href="#"
        className="px-4 py-1 text-sm font-semibold border border-teal-500 text-teal-600 dark:text-teal-200 bg-teal-100 dark:bg-teal-900 rounded-lg transition-all hover:bg-teal-200 dark:hover:bg-teal-800 hover:text-teal-700"
      >
        Teal
      </a>
      <a
        href="#"
        className="px-4 py-1 text-sm font-semibold border border-orange-500 text-orange-600 dark:text-orange-200 bg-orange-100 dark:bg-orange-900 rounded-lg transition-all hover:bg-orange-200 dark:hover:bg-orange-800 hover:text-orange-700"
      >
        Orange
      </a>
    </div>
  );
};

export const IconBadges = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center bg-gray-50 p-6 dark:bg-gray-900">
      {/* 1️⃣ Time Badge - "2 Min Away" with Clock Icon */}
      <span className="flex items-center px-4 py-1 text-sm font-semibold text-blue-700 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-lg">
        <svg
          className="w-4 h-4 mr-1 text-blue-500 dark:text-blue-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6l4 2"
          ></path>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        2 Min Away
      </span>

      {/* 2️⃣ Distance Badge - "5 Miles Away" with Location Icon */}
      <span className="flex items-center px-4 py-1 text-sm font-semibold text-green-700 dark:text-green-200 bg-green-100 dark:bg-green-900 rounded-lg">
        <svg
          className="w-4 h-4 mr-1 text-green-500 dark:text-green-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2C8.13 2 5 5.13 5 9c0 4 4 9 7 12 3-3 7-8 7-12 0-3.87-3.13-7-7-7z"
          ></path>
          <circle cx="12" cy="9" r="2"></circle>
        </svg>
        5 Miles Away
      </span>

      {/* 3️⃣ Alert Badge - "High Priority" with Alert Icon */}
      <span className="flex items-center px-4 py-1 text-sm font-semibold text-red-700 dark:text-red-200 bg-red-100 dark:bg-red-900 rounded-lg">
        <svg
          className="w-4 h-4 mr-1 text-red-500 dark:text-red-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v4m0 4h.01"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.07 19.07A10 10 0 1 1 19.07 5.07"
          ></path>
        </svg>
        High Priority
      </span>

      {/* 4️⃣ Online Status Badge - "Active Now" with Online Indicator */}
      <span className="flex items-center px-4 py-1 text-sm font-semibold text-teal-700 dark:text-teal-200 bg-teal-100 dark:bg-teal-900 rounded-lg">
        <svg
          className="w-4 h-4 mr-1 text-teal-500 dark:text-teal-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
        </svg>
        Active Now
      </span>

      {/* 5️⃣ Download Badge - "Downloaded 1.2K Times" with Download Icon */}
      <span className="flex items-center px-4 py-1 text-sm font-semibold text-purple-700 dark:text-purple-200 bg-purple-100 dark:bg-purple-900 rounded-lg">
        <svg
          className="w-4 h-4 mr-1 text-purple-500 dark:text-purple-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12l4 4m0 0l4-4m-4 4V4"
          ></path>
        </svg>
        Downloaded 1.2K Times
      </span>
    </div>
  );
};

export const NotificationBadges = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center items-center bg-gray-50 p-6 dark:bg-gray-900">
      {/* 1️⃣ WhatsApp Message Badge */}
      <div className="relative">
        <div className="w-14 h-14 flex items-center justify-center bg-green-500 rounded-lg">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10l9 9m0 0l9-9m-9 9V3"
            ></path>
          </svg>
        </div>
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-7 h-7 text-xs font-bold text-white bg-red-500 border-2 border-white dark:border-gray-900 rounded-full">
          4
        </span>
      </div>

      {/* 2️⃣ Facebook Friend Request Badge */}
      <div className="relative">
        <div className="w-14 h-14 flex items-center justify-center bg-blue-600 rounded-lg">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V5a4 4 0 00-8 0v6M20 21v-6a4 4 0 00-8 0v6"
            ></path>
          </svg>
        </div>
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-7 h-7 text-xs font-bold text-white bg-red-500 border-2 border-white dark:border-gray-900 rounded-full">
          12
        </span>
      </div>

      {/* 3️⃣ Instagram Likes Badge */}
      <div className="relative">
        <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21C7.5 16.5 4 13.5 4 10a4 4 0 118 0 4 4 0 118 0c0 3.5-3.5 6.5-8 11z"
            ></path>
          </svg>
        </div>
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-7 h-7 text-xs font-bold text-white bg-red-500 border-2 border-white dark:border-gray-900 rounded-full">
          99+
        </span>
      </div>

      {/* 4️⃣ Twitter Notifications Badge */}
      <div className="relative">
        <div className="w-14 h-14 flex items-center justify-center bg-sky-500 rounded-lg">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v4m0 0a7 7 0 00-7 7m14 0a7 7 0 00-7-7m0 0v4m-4 4h8"
            ></path>
          </svg>
        </div>
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-7 h-7 text-xs font-bold text-white bg-red-500 border-2 border-white dark:border-gray-900 rounded-full">
          24
        </span>
      </div>

      {/* 5️⃣ Email Inbox Badge */}
      <div className="relative">
        <div className="w-14 h-14 flex items-center justify-center bg-gray-700 dark:bg-gray-800 rounded-lg">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l9 6 9-6m-18 6v6h18v-6"
            ></path>
          </svg>
        </div>
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-7 h-7 text-xs font-bold text-white bg-red-500 border-2 border-white dark:border-gray-900 rounded-full">
          20
        </span>
      </div>
    </div>
  );
};

export const IconOnlyBadges = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center items-center bg-gray-50 p-6 dark:bg-gray-900">
      {/* 1️⃣ Email Notification Badge */}
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
        <svg
          className="w-6 h-6 text-blue-600 dark:text-blue-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 16"
        >
          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
        </svg>
      </span>

      {/* 2️⃣ Verified Check Badge */}
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900">
        <svg
          className="w-10 flex justify-center items-center h-10 text-green-600 dark:text-green-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 1.5L12.5 5l4.5.5-3 3 1 4.5-4-2-4 2 1-4.5-3-3 4.5-.5L10 1.5Z" />
        </svg>
      </span>

      {/* 3️⃣ Info Badge */}
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800">
        <svg
          className="w-6 h-6 text-gray-600 dark:text-gray-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16Zm1 12h-2V9h2v5Zm0-6h-2V5h2v3Z" />
        </svg>
      </span>

      {/* 4️⃣ Warning Alert Badge */}
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900">
        <svg
          className="w-6 h-6 text-yellow-600 dark:text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 1l9 18H1L10 1Zm0 14a1.5 1.5 0 110 3 1.5 1.5 0 010-3Zm1-3h-2V8h2v4Z" />
        </svg>
      </span>
    </div>
  );
};

export const ButtonWithBade = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 bg-gray-50 p-6 dark:bg-gray-900">
      {/* <!-- Button 1: Messages --> */}
      <button className="relative flex items-center gap-2 rounded-lg border border-blue-500 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-200 hover:text-blue-700 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-200">
        Messages
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
          6
        </span>
      </button>

      {/* <!-- Button 2: Notifications --> */}
      <button className="relative flex items-center gap-2 rounded-lg border border-red-500 bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 transition-all hover:bg-red-200 hover:text-red-700 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-800 dark:hover:text-red-200">
        Notifications
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          3
        </span>
      </button>

      {/* <!-- Button 3: Alerts --> */}
      <button className="relative flex items-center gap-2 rounded-lg border border-green-500 bg-green-100 px-4 py-2 text-sm font-semibold text-green-600 transition-all hover:bg-green-200 hover:text-green-700 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800 dark:hover:text-green-200">
        Alerts
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
          2
        </span>
      </button>

      {/* <!-- Button 4: Updates --> */}
      <button className="relative flex items-center gap-2 rounded-lg border border-yellow-500 bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-600 transition-all hover:bg-yellow-200 hover:text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-200">
        Updates
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs text-white">
          5
        </span>
      </button>

      {/* <!-- Button 5: Requests --> */}
      <button className="relative flex items-center gap-2 rounded-lg border border-indigo-500 bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 transition-all hover:bg-indigo-200 hover:text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-200">
        Requests
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-xs text-white">
          8
        </span>
      </button>

      {/* <!-- Button 6: Likes --> */}
      <button className="relative flex items-center gap-2 rounded-lg border border-pink-500 bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600 transition-all hover:bg-pink-200 hover:text-pink-700 dark:bg-pink-900 dark:text-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-200">
        Likes
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs text-white">
          10
        </span>
      </button>
    </div>
  );
};

import { useRef } from "react";

export const ClosableBadge = () => {
  const containerRef = useRef(null);

  const removeBadge = (event) => {
    event.target.closest(".badge").remove();
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap gap-4 p-10 justify-center items-center bg-gray-50 dark:bg-gray-900"
    >
      <div className="badge flex items-center gap-2 px-4 py-1 text-sm font-semibold text-blue-700 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-full">
        Info
        <button
          className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 focus:outline-none"
          onClick={removeBadge}
        >
          ×
        </button>
      </div>

      <div className="badge flex items-center gap-2 px-4 py-1 text-sm font-semibold text-red-700 dark:text-red-200 bg-red-100 dark:bg-red-900 rounded-lg">
        Danger
        <button
          className="text-red-700 dark:text-red-300 hover:text-red-900 dark:hover:text-red-100 focus:outline-none"
          onClick={removeBadge}
        >
          ×
        </button>
      </div>

      <div className="badge flex items-center gap-2 px-4 py-1 text-sm font-semibold text-green-700 dark:text-green-200 bg-green-100 dark:bg-green-900 rounded">
        Success
        <button
          className="text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-100 focus:outline-none"
          onClick={removeBadge}
        >
          ×
        </button>
      </div>

      <div className="badge flex items-center gap-2 px-4 py-1 text-sm font-semibold text-yellow-700 dark:text-yellow-200 bg-yellow-100 dark:bg-yellow-900 rounded-full">
        Warning
        <button
          className="text-yellow-700 dark:text-yellow-300 hover:text-yellow-900 dark:hover:text-yellow-100 focus:outline-none"
          onClick={removeBadge}
        >
          ×
        </button>
      </div>

      <div className="badge flex items-center gap-2 px-4 py-1 text-sm font-semibold text-indigo-700 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
        Indigo
        <button
          className="text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100 focus:outline-none"
          onClick={removeBadge}
        >
          ×
        </button>
      </div>

      <div className="badge flex items-center gap-2 px-4 py-1 text-sm font-semibold text-purple-700 dark:text-purple-200 bg-purple-100 dark:bg-purple-900 rounded">
        Purple
        <button
          className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 focus:outline-none"
          onClick={removeBadge}
        >
          ×
        </button>
      </div>

      <div className="badge flex items-center gap-2 px-4 py-1 text-sm font-semibold text-pink-700 dark:text-pink-200 bg-pink-100 dark:bg-pink-900 rounded-full">
        Pink
        <button
          className="text-pink-700 dark:text-pink-300 hover:text-pink-900 dark:hover:text-pink-100 focus:outline-none"
          onClick={removeBadge}
        >
          ×
        </button>
      </div>

      <div className="badge flex items-center gap-2 px-4 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-lg">
        Neutral
        <button
          className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none"
          onClick={removeBadge}
        >
          ×
        </button>
      </div>

      <div className="badge flex items-center gap-2 px-4 py-1 text-sm font-semibold text-teal-700 dark:text-teal-200 bg-teal-100 dark:bg-teal-900 rounded">
        Teal
        <button
          className="text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-teal-100 focus:outline-none"
          onClick={removeBadge}
        >
          ×
        </button>
      </div>

      <div className="badge flex items-center gap-2 px-4 py-1 text-sm font-semibold text-orange-700 dark:text-orange-200 bg-orange-100 dark:bg-orange-900 rounded-full">
        Orange
        <button
          className="text-orange-700 dark:text-orange-300 hover:text-orange-900 dark:hover:text-orange-100 focus:outline-none"
          onClick={removeBadge}
        >
          ×
        </button>
      </div>
    </div>
  );
};
