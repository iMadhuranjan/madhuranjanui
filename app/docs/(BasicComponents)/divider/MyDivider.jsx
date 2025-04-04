export function BasicDivider() {
  return (
    <div className="space-y-10 py-5">
      <div className="border-t-2 border-dashed border-gray-400 dark:border-gray-500 my-4"></div>
      <div className="border-t border-gray-300 dark:border-gray-600 my-4"></div>
      <div className="border-t-2 border-dotted border-gray-400 dark:border-gray-500 my-4"></div>
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 my-4"></div>

      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span className="px-3 text-gray-500 dark:text-gray-400 text-sm">
          OR
        </span>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <div className="px-3 text-gray-500 dark:text-gray-400">
          <svg
            className="w-5 h-5 text-gray-400 dark:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14M12 5l7 7-7 7"
            ></path>
          </svg>
        </div>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      <div className="relative my-6">
        <div className="border-t-2 border-gray-300 dark:border-gray-600"></div>
        <div className="border-t-2 border-gray-300 dark:border-gray-600 mt-1"></div>
      </div>

      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <div className="px-3">
          <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
        </div>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
    </div>
  );
}

export function SvgDivider() {
  return (
    <>
      <svg
        className="w-full h-16 md:h-24 lg:h-32 text-gray-300 dark:text-gray-600 my-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,181.3C672,171,768,181,864,170.7C960,160,1056,128,1152,138.7C1248,149,1344,203,1392,229.3L1440,256V320H0Z"
        ></path>
      </svg>

      <svg
        className="w-full h-16 md:h-24 lg:h-32 text-gray-300 dark:text-gray-600 my-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,256L80,240C160,224,320,192,480,181.3C640,171,800,181,960,192C1120,203,1280,213,1360,218.7L1440,224V320H0Z"
        ></path>
      </svg>

      <svg
        className="w-full h-16 md:h-24 lg:h-32 my-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          className="fill-gray-300 dark:fill-gray-600"
          d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,181.3C672,171,768,181,864,170.7C960,160,1056,128,1152,138.7C1248,149,1344,203,1392,229.3L1440,256V320H0Z"
        ></path>
      </svg>

      <svg
        className="w-full h-16 md:h-24 lg:h-32 my-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          className="fill-gray-300 dark:fill-gray-600"
          d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,229.3C840,256,960,256,1080,234.7C1200,213,1320,171,1380,149.3L1440,128V320H0Z"
        ></path>
      </svg>

      <svg
        className="w-full h-8 text-gray-300 dark:text-gray-600 my-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,50 L80,10 L160,90 L240,10 L320,90 L400,10 L480,90 L560,10 L640,90 L720,10 L800,90 L880,10 L960,90 L1040,10 L1120,90 L1200,10 L1280,90 L1360,10 L1440,50 V100H0Z"
        ></path>
      </svg>
    </>
  );
}

export function MoreDividers() {
  return (
    <>
      <div className="my-6 flex items-center justify-center">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <div className="mx-4 h-3 w-3 rotate-45 bg-gray-300 dark:bg-gray-600"></div>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>

      <div className="relative my-6 h-2 w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600">
        <div className="absolute inset-0 opacity-50 blur-lg"></div>
      </div>

      <div className="my-6 flex items-center">
        <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">
          Section Title
        </span>
        <div className="ml-4 flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>

      <div className="my-6 flex items-center justify-center">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <div className="mx-4 h-4 w-4 rounded-full bg-gray-300 dark:bg-gray-600"></div>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>

      <div className="flex items-center my-6">
        <div className="w-full h-px bg-gray-300 dark:bg-gray-700"></div>
        <div className="px-4 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm rounded-full mx-4">
          Continue
        </div>
        <div className="w-full h-px bg-gray-300 dark:bg-gray-700"></div>
      </div>

      <div className="my-6">
        <div className="h-1 w-full bg-gray-500 dark:bg-gray-700"></div>
        <div className="h-0.5 w-3/4 bg-gray-300 dark:bg-gray-500 mx-auto mt-1"></div>
      </div>
    </>
  );
}
