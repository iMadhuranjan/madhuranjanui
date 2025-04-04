export const DefaultListGroup = () => {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="w-full max-w-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white  border border-neutral-300 dark:border-neutral-800 shadow-md">
        <button className="w-full text-left px-4 py-3 border-b border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none transition">
          Profile
        </button>
        <button className="w-full text-left px-4 py-3 border-b border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none transition">
          Settings
        </button>
        <button className="w-full text-left px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none transition">
          Newsletter
        </button>
      </div>
    </div>
  );
};

export function ListGroupWithIcons() {
  return (
    <div className="flex justify-center items-center p-5 dark:bg-black">
      <div className="w-full max-w-xs bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-md">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-t-lg">
          <svg
            className="w-5 h-5 text-gray-900 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-semibold">Newsletter</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
          <svg
            className="w-5 h-5 text-gray-900 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15V9m0 0l-3 3m3-3l3 3M9 21h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z"
            />
          </svg>
          <span className="font-semibold">Downloads</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-b-lg">
          <svg
            className="w-5 h-5 text-gray-900 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-6a2 2 0 00-2-2h-6M9 20H4v-6a2 2 0 012-2h6m-6 0a2 2 0 00-2 2v6m8-10V5a2 2 0 012-2h4a2 2 0 012 2v6m-6 0a2 2 0 012-2"
            />
          </svg>
          <span className="font-semibold">Team Account</span>
        </div>
      </div>
    </div>
  );
}

export function StripeListGroup() {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="w-full max-w-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 rounded-lg border border-neutral-300 dark:border-neutral-800 shadow-md overflow-hidden">
        <button className="w-full text-left px-4 py-3 border-b border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-gray-800 text-neutral-900 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none transition">
          Profile
        </button>
        <button className="w-full text-left px-4 py-3 border-b border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none transition">
          Settings
        </button>
        <button className="w-full text-left px-4 py-3 border-b border-neutral-300 dark:border-neutral-800 dark:bg-gray-800 bg-neutral-100  text-neutral-900 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none transition">
          Newsletter
        </button>
        <button className="w-full text-left px-4 py-3 border-b border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none transition">
          Security
        </button>
        <button className="w-full text-left px-4 py-3 bg-neutral-100 text-neutral-900 dark:bg-gray-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none transition">
          Logout
        </button>
      </div>
    </div>
  );
}

export function ListGroupWithBadge() {
  return (
    <div className="flex justify-center items-center p-4 dark:bg-black">
      <div className="w-full max-w-xs bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md">
        <button className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500">
          <span className="font-semibold">Dashboard</span>
          <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            New
          </span>
        </button>
        <button className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500">
          <span className="font-semibold">Messages</span>
          <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            5
          </span>
        </button>
        <button className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500">
          <span className="font-semibold">Notifications</span>
          <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            99+
          </span>
        </button>
      </div>
    </div>
  );
}

export function HorizontalListGroup() {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="flex w-fit overflow-hidden rounded-lg border border-neutral-300 bg-white text-neutral-900 shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
        <button className="flex items-center gap-2 border-r border-neutral-300 bg-neutral-100 px-4 py-3 text-neutral-900 transition hover:bg-neutral-200 focus:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v2a3 3 0 01-3 3h14a3 3 0 01-3-3V8a6 6 0 00-6-6zM4 10V8a4 4 0 118 0v2H4z"></path>
          </svg>
          Profile
        </button>
        <button className="flex items-center gap-2 border-r border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition hover:bg-neutral-200 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-700">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4zm11 5H5v2h10V8zm0 4H5v2h10v-2z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Settings
        </button>
        <button className="flex items-center gap-2 border-r border-neutral-300 bg-neutral-100 px-4 py-3 text-neutral-900 transition hover:bg-neutral-200 focus:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 0H4v10h12V5z"></path>
          </svg>
          Newsletter
        </button>
        <button className="flex items-center gap-2 border-r border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition hover:bg-neutral-200 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-700">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 2a6 6 0 00-6 6v2a3 3 0 01-3 3h14a3 3 0 01-3-3V8a6 6 0 00-6-6zm4 6V8a4 4 0 10-8 0v2h8zm-3 6a2 2 0 10-4 0h4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Security
        </button>
        <button className="flex items-center gap-2 bg-neutral-100 px-4 py-3 text-neutral-900 transition hover:bg-neutral-200 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3 10a7 7 0 1114 0A7 7 0 013 10zm7-5a5 5 0 100 10A5 5 0 0010 5zm0 7a2 2 0 11-4 0 2 2 0 014 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
}

export function ListGroupWithToggleAndBadge() {
  return (
    <div className="flex justify-center items-center p-4 dark:bg-black">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-md p-4">
        
         <div className="flex items-center justify-between py-3 border-b border-gray-300 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold">Two-Factor Authentication</span>
          </div>
           <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 peer-checked:bg-white"></div>
          </label>
        </div>

         <div className="flex items-center justify-between py-3 border-b border-gray-300 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405a2.032 2.032 0 00-1.43-.595h-6m0 0H9m3 0H9m6 0a2 2 0 11-4 0" />
            </svg>
            <span className="font-semibold">Auto Updates</span>
          </div>
          <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Enabled</span>
        </div>

         <div className="flex items-center justify-between py-3 border-b border-gray-300 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 1.656-2.686 3-6 3s-6-1.344-6-3 2.686-3 6-3 6 1.344 6 3z" />
            </svg>
            <span className="font-semibold">Privacy Mode</span>
          </div>
          <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">Limited</span>
        </div>

         <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
            <span className="font-semibold">Dark Mode</span>
          </div>
           <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 peer-checked:bg-white"></div>
          </label>
        </div>

      </div>
    </div>
  );
}


export function ListGroupWithCheckBox() {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="w-full max-w-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-800 rounded-lg shadow-md">
        {/* <!-- List Item 1 --> */}
        <label className="flex items-center gap-3 px-4 py-3 border-b border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <span>Task Management</span>
        </label>

        {/* <!-- List Item 2 --> */}
        <label className="flex items-center gap-3 px-4 py-3 border-b border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <span>Project Updates</span>
        </label>

        {/* <!-- List Item 3 --> */}
        <label className="flex items-center gap-3 px-4 py-3 border-b border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <span>Team Meetings</span>
        </label>

        {/* <!-- List Item 4 --> */}
        <label className="flex items-center gap-3 px-4 py-3 border-b border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <span>Reports & Analytics</span>
        </label>

        {/* <!-- List Item 5 --> */}
        <label className="flex items-center gap-3 px-4 py-3 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <span>Security & Compliance</span>
        </label>
      </div>
    </div>
  );
}
