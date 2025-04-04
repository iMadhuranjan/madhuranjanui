export const FirstAvatar = () => {
  return (
    <div className="flex flex-wrap gap-6 p-6 bg-gray-50 dark:bg-gray-900 justify-center">
      {/* 1. Simple Circular Avatar */}
      <img
        className="w-16 h-16 rounded-full border-2 border-gray-300"
        src="/avatar/girl.jpeg"
        alt="User Avatar"
      />

      {/* 2. Hover Scaling Effect */}
      <img
        className="w-16 h-16 rounded-full border-2 border-green-500 transition-transform duration-300 hover:scale-110"
        src="/avatar/girl.jpeg"
        alt="User Avatar"
      />

      {/* 3. Avatar with Shadow */}
      <img
        className="w-16 h-16 rounded-full border-2 border-gray-400 shadow-lg"
        src="/avatar/girl.jpeg"
        alt="User Avatar"
      />

      {/* 4. Glow Effect */}
      <img
        className="w-16 h-16 rounded-full border-2 border-purple-500 shadow-lg shadow-purple-300"
        src="/avatar/girl.jpeg"
        alt="User Avatar"
      />

      {/* 5. Avatar with Online Status Indicator */}
      <div className="relative w-16 h-16">
        <img
          className="w-full h-full rounded-full border-2 border-gray-300"
          src="/avatar/girl.jpeg"
          alt="User Avatar"
        />
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
      </div>

      {/* 6. Avatar with Notification Badge */}
      <div className="relative inline-block">
        <img
          className="w-16 h-16 rounded-full border-2 border-gray-300"
          src="/avatar/girl.jpeg"
          alt="User Avatar"
        />
        <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
          3
        </span>
      </div>

      {/* 7. Hover Rotation Effect */}
      <img
        className="w-16 h-16 rounded-full border-2 border-indigo-500 transition-transform duration-300 hover:rotate-12"
        src="/avatar/girl.jpeg"
        alt="User Avatar"
      />

      {/* 8. Grayscale Hover Effect */}
      <img
        className="w-16 h-16 rounded-full border-2 border-gray-300 grayscale hover:grayscale-0 transition-all duration-300"
        src="/avatar/girl.jpeg"
        alt="User Avatar"
      />

      {/* 9. Blur on Hover */}
      <img
        className="w-16 h-16 rounded-full border-2 border-pink-500 transition-all duration-300 hover:blur-sm"
        src="/avatar/girl.jpeg"
        alt="User Avatar"
      />

      {/* 10. Avatar with Double Border Gradient Effect */}
      <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
        <img
          className="w-16 h-16 rounded-full border-4 border-white"
          src="/avatar/girl.jpeg"
          alt="User Avatar"
        />
      </div>

      {/* 11. Square Avatar */}
      <img
        className="w-16 h-16 border-4 border-blue-500"
        src="/avatar/girl.jpeg"
        alt="User Avatar"
      />

      {/* 12. Soft-Rounded Avatar */}
      <img
        className="w-16 h-16 rounded-lg border-2 border-red-500"
        src="/avatar/girl.jpeg"
        alt="User Avatar"
      />
    </div>
  );
};

export const AvatarWithText = () => {
  return (
    <div className="flex flex-wrap gap-3  space-y-5 justify-center items-center bg-gray-50 dark:bg-gray-900">
      {/* 1. Simple Avatar with Name & Role */}
      <div className="flex items-center space-x-3 p-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
          alt="User Avatar"
        />
        <div>
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            Michael Carter
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Software Engineer
          </p>
        </div>
      </div>

      {/* 2. Avatar with Online Status Indicator */}
      <div className="flex items-center space-x-3 p-3">
        <div className="relative">
          <img
            className="w-12 h-12 rounded-full border-2 border-gray-300"
            src="https://i.pravatar.cc/150?img=5"
            alt="User Avatar"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Daniel Lee
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            UI/UX Designer
          </p>
        </div>
      </div>

      {/* 3. Avatar with Notification Badge */}
      <div className="flex items-center space-x-3 p-3">
        <div className="relative">
          <img
            className="w-12 h-12 rounded-full border-2 border-gray-300"
            src="https://i.pravatar.cc/150?img=6"
            alt="User Avatar"
          />
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            5
          </span>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Emily Watson
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">HR Manager</p>
        </div>
      </div>

      {/* 4. Avatar with Gradient Hover Effect */}
      <div className="flex items-center space-x-3 group p-3">
        <img
          className="w-12 h-12 rounded-full border-2 border-gray-300 transition duration-300 group-hover:border-indigo-500 group-hover:shadow-md"
          src="https://i.pravatar.cc/150?img=7"
          alt="User Avatar"
        />
        <div>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Lucas Brown
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Product Manager
          </p>
        </div>
      </div>

      {/* Avatart With Box and Shadow  */}
      <div className="flex flex-wrap  p-3justify-center items-center bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <img
            className="w-14 h-14 rounded-full border-2 border-gray-300"
            src="https://i.pravatar.cc/150?img=11"
            alt="User Avatar"
          />
          <div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Alex Johnson
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Full-Stack Developer
            </p>
            <div className="flex space-x-2 mt-2">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Animation Avatar  */}
      <div className="flex items-center p-3 space-x-3 group">
        <div className="relative">
          <img
            className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 transition duration-300 group-hover:border-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/50"
            src="https://i.pravatar.cc/150?img=8"
            alt="User Avatar"
          />
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Sophia Martinez
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Marketing Specialist
          </p>
        </div>
      </div>

      {/* Green TIck Blinking Avatar  */}
      <div className="flex items-center p-3 space-x-3">
        <div className="relative p-0.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
          <img
            className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-900"
            src="https://i.pravatar.cc/150?img=9"
            alt="User Avatar"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full animate-pulse"></span>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Olivia Brown
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Data Scientist
          </p>
        </div>
      </div>

      {/* Hover to Scale Avatar  */}
      <div className="flex items-center p-3 space-x-3 group">
        <div className="relative">
          <img
            className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 shadow-lg transition duration-300 group-hover:scale-110 group-hover:shadow-xl"
            src="https://i.pravatar.cc/150?img=10"
            alt="User Avatar"
          />
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            James Wilson
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Frontend Developer
          </p>
        </div>
      </div>

      {/* Hover to Tilt Avatar  */}
      <div className="flex items-center p-3 space-x-3 group">
        <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-500 to-teal-500">
          <img
            className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-900 transition duration-300 group-hover:rotate-6"
            src="https://i.pravatar.cc/150?img=11"
            alt="User Avatar"
          />
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Emma Johnson
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Graphic Designer
          </p>
        </div>
      </div>
    </div>
  );
};

export const OverlappingAvata = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 bg-gray-50 p-5 dark:bg-gray-900">
      {/* 1️⃣ Stacked Avatars with Overlapping Effect */}
      <div className="flex items-center space-x-[-10px]">
        <img
          className="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg dark:border-white"
          src="https://i.pravatar.cc/150?img=1"
          alt="User 1"
        />
        <img
          className="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg dark:border-white"
          src="https://i.pravatar.cc/150?img=2"
          alt="User 2"
        />
        <img
          className="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg dark:border-white"
          src="https://i.pravatar.cc/150?img=3"
          alt="User 3"
        />
        <img
          className="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg dark:border-white"
          src="https://i.pravatar.cc/150?img=4"
          alt="User 4"
        />
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-700 text-sm font-bold text-white dark:border-white">
          +99
        </div>
      </div>

      {/* 2️⃣ Rotating Avatars on Hover */}
      <div className="flex items-center space-x-3">
        <img
          className="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-transform duration-300 hover:rotate-12 dark:border-white"
          src="https://i.pravatar.cc/150?img=9"
          alt="User 9"
        />
        <img
          className="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-transform duration-300 hover:rotate-12 dark:border-white"
          src="https://i.pravatar.cc/150?img=10"
          alt="User 10"
        />
        <img
          className="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-transform duration-300 hover:rotate-12 dark:border-white"
          src="https://i.pravatar.cc/150?img=11"
          alt="User 11"
        />
        <img
          className="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-transform duration-300 hover:rotate-12 dark:border-white"
          src="https://i.pravatar.cc/150?img=12"
          alt="User 12"
        />
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-700 text-sm font-bold text-white transition-transform duration-300 hover:rotate-12 dark:border-white">
          +20
        </div>
      </div>

      {/* 3️⃣ Glowing Avatars on Hover */}
      <div className="flex items-center space-x-3">
        <img
          className="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-all duration-300 hover:ring-4 hover:ring-indigo-500 dark:border-white"
          src="https://i.pravatar.cc/150?img=13"
          alt="User 13"
        />
        <img
          className="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-all duration-300 hover:ring-4 hover:ring-indigo-500 dark:border-white"
          src="https://i.pravatar.cc/150?img=14"
          alt="User 14"
        />
        <img
          className="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-all duration-300 hover:ring-4 hover:ring-indigo-500 dark:border-white"
          src="https://i.pravatar.cc/150?img=15"
          alt="User 15"
        />
        <img
          className="h-12 w-12 rounded-full border-2 border-gray-800 shadow-lg transition-all duration-300 hover:ring-4 hover:ring-indigo-500 dark:border-white"
          src="https://i.pravatar.cc/150?img=16"
          alt="User 16"
        />
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-700 text-sm font-bold text-white transition-all duration-300 hover:ring-4 hover:ring-indigo-500 dark:border-white">
          +10
        </div>
      </div>

      {/* 4️⃣ Perfectly Circular Avatars */}
      <div className="flex items-center space-x-3 bg-gray-200 dark:bg-black justify-center p-3 rounded-lg">
        <img
          className="w-16 h-16 rounded-full border-2 border-white object-cover aspect-square hover:scale-110 transition-transform"
          src="https://i.pravatar.cc/150?img=51"
          alt="User 1"
        />
        <img
          className="w-16 h-16 rounded-full border-2 border-white object-cover aspect-square hover:scale-110 transition-transform"
          src="https://i.pravatar.cc/150?img=52"
          alt="User 2"
        />
        <img
          className="w-16 h-16 rounded-full border-2 border-white object-cover aspect-square hover:scale-110 transition-transform"
          src="https://i.pravatar.cc/150?img=53"
          alt="User 3"
        />
        <img
          className="w-16 h-16 rounded-full border-2 border-white object-cover aspect-square hover:scale-110 transition-transform"
          src="https://i.pravatar.cc/150?img=54"
          alt="User 4"
        />
      </div>
    </div>
  );
};

export const DiffertnShapAndSize = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-14 bg-gray-100 dark:bg-gray-900 p-8">
      {/* <!-- 1️⃣ Square Avatars (Different Sizes) --> */}
      <div className="flex flex-wrap gap-3">
        <img
          className="h-10 w-10 border-2 border-white"
          src="https://i.pravatar.cc/150?img=1"
          alt="Avatar"
        />
        <img
          className="h-16 w-16 border-2 border-white"
          src="https://i.pravatar.cc/150?img=1"
          alt="Avatar"
        />
        <img
          className="h-24 w-24 border-2 border-white"
          src="https://i.pravatar.cc/150?img=1"
          alt="Avatar"
        />
        <img
          className="h-32 w-32 border-2 border-white"
          src="https://i.pravatar.cc/150?img=1"
          alt="Avatar"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <img
          className="h-10 w-10 rounded-full border-2 border-white"
          src="https://i.pravatar.cc/150?img=2"
          alt="Avatar"
        />
        <img
          className="h-16 w-16 rounded-full border-2 border-white"
          src="https://i.pravatar.cc/150?img=2"
          alt="Avatar"
        />
        <img
          className="h-24 w-24 rounded-full border-2 border-white"
          src="https://i.pravatar.cc/150?img=2"
          alt="Avatar"
        />
        <img
          className="h-32 w-32 rounded-full border-2 border-white"
          src="https://i.pravatar.cc/150?img=2"
          alt="Avatar"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <img
          className="h-10 w-10 rotate-45 transform border-2 border-white"
          src="https://i.pravatar.cc/150?img=4"
          alt="Avatar"
        />
        <img
          className="h-16 w-16 rotate-45 transform border-2 border-white"
          src="https://i.pravatar.cc/150?img=4"
          alt="Avatar"
        />
        <img
          className="h-24 w-24 rotate-45 transform border-2 border-white"
          src="https://i.pravatar.cc/150?img=4"
          alt="Avatar"
        />
        <img
          className="h-32 w-32 rotate-45 transform border-2 border-white"
          src="https://i.pravatar.cc/150?img=4"
          alt="Avatar"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <img
          className="h-10 w-10 rounded-md border-2 border-white"
          src="https://i.pravatar.cc/150?img=5"
          alt="Avatar"
        />
        <img
          className="h-16 w-16 rounded-md border-2 border-white"
          src="https://i.pravatar.cc/150?img=5"
          alt="Avatar"
        />
        <img
          className="h-24 w-24 rounded-md border-2 border-white"
          src="https://i.pravatar.cc/150?img=5"
          alt="Avatar"
        />
        <img
          className="h-32 w-32 rounded-md border-2 border-white"
          src="https://i.pravatar.cc/150?img=5"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export const AvatarDropDown = () => {
  return (
    <div className="flex gap-10 flex-wrap h-80">
      <div className="relative top-5 left-5">
        <button className="peer h-12 w-12 cursor-pointer rounded-full border-2 border-white transition-all duration-300 hover:scale-110 focus:ring-4 focus:ring-blue-500/50 dark:border-gray-700 dark:focus:ring-blue-700/50">
          <img
            src="https://i.pravatar.cc/150?img=1"
            alt="User Avatar"
            className="h-full w-full rounded-full"
          />
        </button>

        <div className="invisible absolute left-0 mt-2 w-56 -translate-y-2 transform rounded-lg bg-white opacity-0 shadow-xl transition-all duration-300 peer-focus-within:visible peer-focus-within:opacity-100 peer-hover:visible peer-hover:translate-y-0 peer-hover:opacity-100 dark:bg-gray-800">
          <div className="rounded-t-lg bg-gradient-to-r from-blue-500 to-purple-500 p-2 dark:from-blue-600 dark:to-purple-600">
            <p className="text-sm font-semibold text-white">Madhuranjan</p>
            <p className="text-xs text-white/80">HeyMadhuranjan@gmail.com</p>
          </div>

          <div className="p-2">
            <a
              href="#"
              className="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                Profile
              </span>
            </a>
            <a
              href="#"
              className="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                Settings
              </span>
            </a>
            <a
              href="#"
              className="block rounded-md px-4 py-2 text-sm text-red-500 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900 dark:hover:text-white"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
                Sign Out
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
