export function SimplePopover() {
  return (
    <div className="flex h-40 items-end justify-center bg-gray-100 p-6 dark:bg-gray-900">
      <div className="group relative inline-block">
        <button className="rounded-md bg-violet-600 dark:bg-blue-600 px-4 py-2 text-white">
          Hover me
        </button>

        <div className="invisible absolute bottom-full left-1/2 mb-3 w-56 -translate-x-1/2 scale-95 transform rounded-lg bg-white p-3 text-gray-900 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-800 dark:text-white">
          <p className="text-sm">This is a simple default popover.</p>
        </div>
      </div>
    </div>
  );
}

export function SocialPopover() {
  return (
    <div className="flex items-end justify-center h-72 dark:bg-gray-900 p-6 bg-gray-100">
      <div className="relative inline-block group">
        <button className="px-4 py-2 bg-violet-600 dark:bg-blue-600 text-white rounded-lg">
          View Profile
        </button>

        <div className="absolute left-1/2 bottom-full transform -translate-x-1/2 mb-3 w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg rounded-lg opacity-0 scale-95 transition-all duration-300 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100">
          <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white dark:bg-gray-800 rotate-45"></div>

          <div className="p-4">
            <div className="flex items-center space-x-3">
              <img
                src="/avatar/girl.jpeg"
                className="rounded-full h-8 w-8"
                alt="User Avatar"
              />
              <div>
                <p className="text-sm font-semibold">Madhuranjan UI</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  @MadhuranjanUI
                </p>
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">
              Crafting high-quality Tailwind CSS components for modern Websites
              🌊.
            </p>
            <div className="mt-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>
                <strong>1,250</strong> Followers
              </span>
              <span>
                <strong>320</strong> Components
              </span>
            </div>
            <button className="mt-3 w-full bg-blue-500 text-white text-sm font-semibold px-4 py-1.5 rounded-lg hover:bg-blue-600">
              Explore Components
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StarPopOver() {
  return (
    <div className="flex h-[28rem] items-end justify-center bg-gray-100 p-6 dark:bg-gray-900">
      <div className="relative group inline-block">
        {/* <!-- Popover Trigger (Button) --> */}
        <button className="rounded-lg bg-violet-600 px-4 py-2 text-white dark:bg-blue-600">
          Hover me
        </button>

        {/* <!-- Popover Content --> */}
        <div className="absolute bottom-full left-1/2 mb-3 w-80 -translate-x-1/2 scale-95 transform rounded-lg bg-white p-3 text-gray-900 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 dark:bg-gray-800 dark:text-white pointer-events-none group-hover:pointer-events-auto">
          <div className="relative w-full p-4 bg-gray-100 text-gray-900 rounded-lg shadow-lg dark:bg-gray-900 dark:text-white">
            {/* <!-- Header with Rating --> */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">5.0</span>
              <div className="flex space-x-1 text-yellow-400">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <a href="#" className="text-violet-600 text-sm dark:text-blue-400">
                See all (4)
              </a>
            </div>

            {/* <!-- Rating Bars --> */}
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <span className="text-sm w-12">5 star</span>
                <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden dark:bg-gray-700">
                  <div className="bg-yellow-400 h-full w-[78%]"></div>
                </div>
                <span className="ml-2 text-sm">78%</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm w-12">4 star</span>
                <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden dark:bg-gray-700">
                  <div className="bg-yellow-400 h-full w-[20%]"></div>
                </div>
                <span className="ml-2 text-sm">20%</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm w-12">3 star</span>
                <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden dark:bg-gray-700">
                  <div className="bg-yellow-400 h-full w-[6%]"></div>
                </div>
                <span className="ml-2 text-sm">6%</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm w-12">2 star</span>
                <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden dark:bg-gray-700">
                  <div className="bg-yellow-400 h-full w-[2%]"></div>
                </div>
                <span className="ml-2 text-sm">2%</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm w-12">1 star</span>
                <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden dark:bg-gray-700">
                  <div className="bg-gray-400 h-full w-[0%] dark:bg-gray-600"></div>
                </div>
                <span className="ml-2 text-sm">0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const InfoPopover = () => {
  return (
    <div className="relative flex justify-center items-end md:h-72 h-96 bg-gray-100 dark:bg-gray-900 p-6">
      <p className="text-gray-800 dark:text-gray-200 text-lg">
        Machine learning is a subset of
        <span className="relative group font-semibold text-blue-600 dark:text-blue-400 cursor-pointer mx-1">
          Artificial Intelligence
          {/* Popover Content */}
          <div className="absolute left-1/2 bottom-full mb-3 w-72 -translate-x-1/2 scale-95 transform opacity-0 shadow-lg rounded-lg bg-white p-4 text-gray-900 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 dark:bg-gray-800 dark:text-white pointer-events-none group-hover:pointer-events-auto">
            <div className="flex flex-col">
              {/* Title */}
              <h3 className="text-lg font-semibold">Artificial Intelligence</h3>
              {/* Content */}
              <p className="text-sm text-gray-600 dark:text-gray-300">
                AI enables machines to simulate human intelligence, learn from
                data, and make decisions. It powers applications like speech
                recognition, automation, and recommendation systems.
              </p>
            </div>
          </div>
        </span>
        that allows systems to learn and improve from experience without being
        explicitly programmed.
      </p>
    </div>
  );
};

export const PopOverWithImage = () => {
  return (
    <div className="h-[28rem] flex justify-center items-start mt-3">
      <div className="group relative inline-block">
        {/* <!-- Trigger Button --> */}
        <button
          type="button"
          className="rounded-lg bg-violet-600 px-4 py-2 text-white shadow-md transition duration-300 hover:bg-violet-700 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Hover Me
        </button>

        {/* <!-- Popover --> */}
        <div className="absolute top-full left-1/2 z-20 mt-3 w-80 -translate-x-1/2 scale-95 transform opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          <div className="rounded-xl border border-gray-200 bg-white p-2 shadow-xl dark:border-gray-700 dark:bg-gray-800">
            {/* <!-- Image --> */}
            <img
              className="h-40 w-full rounded-lg object-cover"
              src="/Image/Nature2.jpg"
              alt="Visual Preview"
            />
            {/* <!-- Content --> */}
            <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
              Visual Preview
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              This engaging popover is perfect for showcasing products,
              highlighting locations, or providing visual tooltips. Fully
              responsive with smooth transitions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
