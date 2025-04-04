export function HeroSectionWithCard() {
  return (
    <div className="relative overflow-hidden bg-gray-50 py-16 px-4 dark:bg-gray-900">
      <div className="absolute inset-0 opacity-10 dark:opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]"></div>
      </div>

      <div className="animate-float absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-emerald-400/10 blur-[100px]"></div>

      <div className="animate-float animation-delay-3000 absolute right-1/4 bottom-1/3 h-72 w-72 rounded-[50%] bg-indigo-400/10 blur-[100px]"></div>
      <div className="animate-float animation-delay-6000 absolute top-1/3 right-1/3 h-48 w-48 rotate-45 bg-amber-400/10 blur-[80px]"></div>
      <div className="relative z-10 container mx-auto flex w-full items-center px-4">
        <div className="w-fit">
          <div className="mb-8 overflow-hidden">
            <div className="animate-slide-up inline-block rounded-full border border-gray-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/80">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text font-medium text-transparent">
                🚀 Next-Gen Solutions
              </span>
            </div>
          </div>

          <h3 className="mb-6 text-5xl leading-tight font-bold md:text-6xl">
            <span className="relative">
              <span className="absolute -inset-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 blur-lg dark:opacity-20"></span>
              <span className="relative bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                Redefining
              </span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Digital Experience
            </span>
          </h3>

          <p className="relative mb-10 max-w-xl text-xl text-gray-600 md:text-2xl dark:text-gray-300">
            We craft immersive digital solutions that blend innovation with
            flawless execution.
            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-indigo-400 to-purple-400 transition-transform duration-500 group-hover:scale-x-100"></span>
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <span className="relative z-10">Start Your Project</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 h-full w-2 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-[300%]"></span>
            </a>

            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-transparent px-8 py-4 font-semibold text-gray-800 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch Demo
            </a>
          </div>

          <div className="mt-16 flex flex-col items-center gap-8 sm:flex-row">
            <div className="flex -space-x-3">
              <img
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User"
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="User"
              />
            </div>
            <div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 font-medium text-gray-800 dark:text-gray-200">
                  4.9
                </span>
                <span className="mx-1 text-gray-500">•</span>
                <span className="text-gray-600 dark:text-gray-400">
                  Trusted by 2,000+ companies
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-1 hidden -translate-y-1/2 lg:block xl:right-15">
          <div className="perspective-1000 relative h-[500px] w-96">
            <div className="absolute inset-0 rotate-3 transform rounded-2xl border border-gray-200 bg-white/80 shadow-2xl backdrop-blur-lg transition-transform duration-700 group-hover:rotate-6 dark:border-gray-700 dark:bg-gray-800/80"></div>
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-xl dark:border-gray-700 dark:from-gray-800 dark:to-gray-700">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
                  <svg
                    className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  New Feature
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-800 dark:text-white">
                Interactive Dashboard
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Explore real-time data with our cutting-edge analytics
                interface.
              </p>
              <div className="mt-auto rounded-lg border border-gray-100 bg-white p-4 shadow-inner dark:border-gray-600 dark:bg-gray-700">
                <div className="mb-2 flex justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Performance
                  </span>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    87%
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-600">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSectionWithMinimalDesign() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-white px-6 py-20 dark:bg-gray-900">
      <h3 className="mb-4 max-w-4xl text-center text-5xl leading-normal font-extrabold text-gray-800 sm:text-6xl lg:text-7xl dark:text-gray-100">
        Crafting{" "}
        <span className="underline decoration-pink-500 decoration-wavy ">
          {" "}
          Exceptional{" "}
        </span>
        Digital Experiences
      </h3>
      <p className="mb-8 max-w-2xl text-center text-lg text-gray-600 sm:text-xl dark:text-gray-300">
        Our team of professionals helps transform businesses with modern web,
        mobile, and cloud solutions that spark real change.
      </p>
      <button
        type="button"
        className="rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow transition-transform duration-300 hover:scale-105 hover:bg-pink-600"
      >
        Start Your Journey
      </button>
    </div>
  );
}

export function ModernHeroSection() {
  return (
    <div className="relative isolate w-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 py-16 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-gray-700"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg
          x="50%"
          y="-1"
          className="overflow-visible fill-gray-50 dark:fill-gray-800"
        >
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            stroke-width="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>

      <div
       className="absolute top-2 left-[calc(50%_-_11rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%_-_30rem)]"

        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 dark:opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div
        className="absolute right-[calc(50%_-_11rem)] bottom-0 -z-10 transform-gpu blur-3xl sm:right-[calc(50%_-_30rem)]"

        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#9089fc] to-[#80ff72] opacity-20 dark:opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl dark:from-blue-400 dark:to-purple-400">
            Transform Your Digital Presence
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Harness the power of next-generation solutions designed to propel
            your business forward in today's competitive landscape.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="#"
              className="group relative transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <span className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
              Get Started
              <span className="absolute -top-1 -right-1 h-3 w-3 animate-ping rounded-full bg-purple-300"></span>
            </a>
            <a
              href="#"
              className="group relative transform rounded-full px-6 py-3 text-sm leading-6 font-semibold text-gray-900 ring-1 ring-gray-900/10 transition-all duration-300 hover:scale-105 hover:ring-gray-900/20 dark:text-white dark:ring-white/10 dark:hover:ring-white/20"
            >
              <span className="absolute inset-0 rounded-full bg-gray-900 opacity-0 transition-opacity duration-300 group-hover:opacity-10 dark:bg-white"></span>
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col gap-y-6 rounded-2xl border border-gray-200 bg-white/10 p-8 shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50">
            <div className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
              98%
            </div>
            <div className="text-base leading-7 text-gray-600 dark:text-gray-300">
              Client satisfaction rate across all our solutions and services.
            </div>
          </div>
          <div className="flex flex-col gap-y-6 rounded-2xl border border-gray-200 bg-white/10 p-8 shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50">
            <div className="text-3xl font-bold tracking-tight text-purple-600 dark:text-purple-400">
              4.9/5
            </div>
            <div className="text-base leading-7 text-gray-600 dark:text-gray-300">
              Average rating from over 500 customer reviews.
            </div>
          </div>
          <div className="flex flex-col gap-y-6 rounded-2xl border border-gray-200 bg-white/10 p-8 shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50">
            <div className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
              24/7
            </div>
            <div className="text-base leading-7 text-gray-600 dark:text-gray-300">
              Dedicated support team available around the clock.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSectionWithUmagge() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white sm:flex-row dark:bg-gray-900">
      <div className="absolute top-0 right-0 hidden h-full w-1/2 sm:block">
        <svg
          className="h-full w-full text-gray-100 dark:text-gray-800"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 100,0 100,100 0,100" />
        </svg>
      </div>

      <div className="z-10 flex w-full items-center justify-center p-8 sm:w-1/2 sm:p-4 md:p-5 lg:p-10">
        <div className="max-w-xl">
          <h3 className="mb-6 text-4xl leading-tight font-bold text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
              Built to Inspire
            </span>
            <br />
            Extraordinary Growth
          </h3>

          <p className="mb-8 text-lg text-gray-600 md:text-xl dark:text-gray-300">
            Transform your workflow with our AI-powered platform designed for
            forward-thinking businesses ready to scale new heights.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 text-center font-medium text-white shadow-lg transition-all duration-300 hover:to-blue-600 hover:shadow-xl"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"></span>
            </a>

            <a
              href="#"
              className="flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-6 py-3 font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch Demo
            </a>
          </div>

          <div className="mt-12 flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8">
            <div className="flex -space-x-2">
              <img
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User avatar"
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User avatar"
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="User avatar"
              />
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>Trusted by 10,000+ businesses</p>
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1">4.9/5 (2,500+ reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full sm:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent sm:bg-gradient-to-r sm:from-white sm:to-transparent dark:from-gray-900 dark:sm:from-gray-900"></div>

        <img
          src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1460&q=80"
          alt="Modern office workspace"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />

        <div className="absolute bottom-8 left-8 hidden max-w-xs rounded-xl bg-white p-6 shadow-2xl sm:block dark:bg-gray-800">
          <div className="flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Lightning Fast
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                90% faster than competitors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroWithIssustartor() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-50 dark:bg-gray-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/20"></div>
        <div className="absolute top-1/3 -right-40 h-80 w-80 rotate-45 bg-purple-100/40 blur-3xl dark:bg-purple-900/20"></div>
        <div className="absolute right-0 bottom-0 h-64 w-64 -rotate-12 bg-green-100/40 blur-3xl dark:bg-green-900/20"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16">
        <div className="absolute -right-24 -bottom-24 -z-10 h-64 w-64 rotate-45 bg-white dark:bg-gray-900"></div>
        <div className="absolute -right-24 -bottom-24 -z-10 h-60 w-60 rotate-45 border-[16px] border-blue-500/10 dark:border-blue-400/10"></div>

        <div className="lg:w-1/2">
          <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            <span className="block">Build The Future</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-500">
              With Cutting-Edge Tech
            </span>
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We empower visionaries with tools that transform industries. Join
            thousands of innovators already shaping tomorrow's landscape.
          </p>
          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row">
            <a
              href="#"
              className="group relative flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3.5 text-sm font-medium text-white shadow-[0_4px_15px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-gray-800 hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)] dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              <span className="absolute right-0 -mr-2 h-4 w-4 rounded-full bg-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="absolute right-0 -mr-2 h-4 w-4 animate-ping rounded-full bg-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              Start Building
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <a
              href="#"
              className="group flex items-center rounded-lg px-6 py-3.5 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5 text-blue-600 transition-colors duration-300 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch Demo
            </a>
          </div>
        </div>

        <div className="mt-16 lg:mt-0 lg:w-1/2 lg:pl-12">
          <div className="relative aspect-[1.2/1] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50 p-8 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-500/10 dark:bg-blue-400/10"></div>
            <div className="absolute bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-500/10 dark:bg-purple-400/10"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-10">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <pattern
                  id="grid-pattern"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.5"
                  />
                </pattern>
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  fill="url(#grid-pattern)"
                />
              </svg>
            </div>

            <div className="absolute top-1/3 left-1/4 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-100 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600 dark:text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="absolute right-1/4 bottom-1/3 flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600 dark:text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </div>

            <div className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl dark:from-blue-500 dark:to-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSectionWithBlankImage() {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-amber-200/70 via-transparent to-transparent blur-3xl dark:from-amber-900/30"></div>
      <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-teal-200/60 via-transparent to-transparent blur-3xl dark:from-teal-900/30"></div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-10 lg:flex lg:items-center lg:px-8">
        <div className="lg:w-2/3 lg:pr-16">
          <h3 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl dark:text-white">
            <span className="block">Redefine</span>
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-amber-500 to-teal-500 bg-clip-text text-transparent">
                What's Possible
              </span>
              <span className="absolute -bottom-2 left-0 h-3 w-full bg-amber-300/40 dark:bg-teal-700/40"></span>
            </span>
          </h3>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300">
            Break boundaries with our visionary solutions designed for
            tomorrow's challenges. Where innovation meets execution.
          </p>

          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row">
            <a
              href="#"
              className="relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:shadow-xl"
            >
              <span className="relative z-10">Start Your Journey</span>
              <span className="animate-gradient-shift absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-[length:400%_400%] opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-lg px-6 py-4 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 transition-all hover:bg-gray-50 hover:ring-gray-900/20 dark:text-white dark:ring-white/10 dark:hover:bg-gray-800/50 dark:hover:ring-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-teal-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                />
              </svg>
              Watch Our Story
            </a>
          </div>
        </div>

        <div className="relative mt-16 lg:mt-0 lg:w-1/3">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-2xl dark:bg-gray-800">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-100/20 to-teal-100/20 dark:from-amber-900/20 dark:to-teal-900/20">
              <svg
                className="h-1/2 w-1/2 text-gray-300 dark:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-teal-400/10 blur-xl dark:bg-teal-600/10"></div>
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-amber-400/10 blur-xl dark:bg-amber-600/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GreenStyleHeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-cyan-50 dark:from-green-900 dark:to-cyan-900">
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-30">
        <svg
          className="absolute -top-20 -left-20 h-[120%] w-[120%]"
          viewBox="0 0 1200 1200"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,0V1200H1200V0ZM200,200C400,100,800,300,1000,200s200-300,400-100V1000C1200,1100,1000,900,800,1000S400,1100,200,1000Z"
            className="text-green-200 dark:text-cyan-950"
          ></path>
        </svg>
      </div>
      <div className="animate-float absolute top-1/4 left-10 h-16 w-16 opacity-70">
        <svg
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-green-500 dark:text-green-400"
        >
          <path
            d="M272 320c22.7 0 42.8-14.6 49.7-36.3l1.7-5.5 5.5-1.7c21.7-6.9 36.3-27 36.3-49.7v-3.3l3.3-.3c31.6-3.1 56.5-29.4 56.5-61.3 0-34.1-27.6-61.7-61.7-61.7-31.9 0-58.2 24.9-61.3 56.5l-.3 3.3h-3.3c-22.7 0-42.8 14.6-49.7 36.3l-1.7 5.5-5.5 1.7c-21.7 6.9-36.3 27-36.3 49.7v96z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="animate-float-delay absolute top-1/3 right-20 h-20 w-20 opacity-50">
        <svg
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-45 text-cyan-400 dark:text-cyan-300"
        >
          <path
            d="M272 320c22.7 0 42.8-14.6 49.7-36.3l1.7-5.5 5.5-1.7c21.7-6.9 36.3-27 36.3-49.7v-3.3l3.3-.3c31.6-3.1 56.5-29.4 56.5-61.3 0-34.1-27.6-61.7-61.7-61.7-31.9 0-58.2 24.9-61.3 56.5l-.3 3.3h-3.3c-22.7 0-42.8 14.6-49.7 36.3l-1.7 5.5-5.5 1.7c-21.7 6.9-36.3 27-36.3 49.7v96z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto flex flex-col items-center gap-10 px-6 py-10 lg:flex-row lg:py-16">
        <div className="relative lg:w-1/2">
          <div className="absolute -top-8 -left-8 -z-10 h-full w-full rounded-3xl bg-green-100/50 dark:bg-cyan-900/50"></div>
          <div className="relative space-y-6">
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 shadow-sm dark:bg-green-900/50 dark:text-green-200">
              {" "}
              Sustainable Innovation{" "}
            </span>
            <h3 className="text-5xl leading-tight font-bold text-gray-900 sm:text-6xl md:text-7xl dark:text-white">
              <span className="block">Powering the</span>
              <span className="block bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent dark:from-green-400 dark:to-cyan-400">
                {" "}
                Green Revolution{" "}
              </span>
            </h3>

            <p className="max-w-lg text-xl text-gray-700 dark:text-gray-300">
              We're building the infrastructure for a carbon-neutral future with
              cutting-edge renewable technology and sustainable design
              principles.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-xl bg-gradient-to-r from-green-600 to-cyan-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                {" "}
                Explore Solutions{" "}
              </a>
              <a
                href="#"
                className="group flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-gray-900 shadow-sm ring-1 ring-gray-900/10 transition-all hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:ring-white/10 dark:hover:bg-gray-700"
              >
                <span>Watch Story</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-16 lg:mt-0 lg:w-1/2">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-6 -bottom-6 -z-10 h-full w-full rounded-3xl bg-cyan-100/70 dark:bg-green-900/50"></div>
            <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl dark:border-gray-800">
              <div className="aspect-w-16 aspect-h-9 flex items-center justify-center bg-gradient-to-br from-green-100 to-cyan-100 p-12 dark:from-green-800 dark:to-cyan-800">
                <div className="space-y-4 text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-cyan-500 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Sustainable Tech
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reducing carbon footprint through innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-0 left-0 mb-5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-lg dark:bg-gray-800">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                87%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Reduction in
                <br />
                energy use
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-lg dark:bg-gray-800">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                1.2M+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Tons of CO₂
                <br />
                offset annually
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-lg dark:bg-gray-800">
              <div className="text-3xl font-bold text-green-500 dark:text-green-300">
                240+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Sustainable
                <br />
                projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StylishModernLookingHeroSection() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 h-32 w-32 rotate-45 rounded-lg bg-yellow-400/20 blur-xl dark:bg-yellow-500/20"></div>
        <div className="absolute top-1/3 right-20 h-40 w-40 -rotate-12 rounded-full bg-red-400/15 blur-xl dark:bg-red-600/15"></div>
        <div className="absolute bottom-1/4 left-1/3 h-28 w-28 rotate-30 rounded-lg bg-blue-400/20 blur-xl dark:bg-blue-600/20"></div>
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-12 sm:gap-0 sm:px-8">
        <div className="relative z-10 flex flex-col justify-center sm:col-span-6 sm:col-start-2 sm:row-start-1">
          <div className="mb-6 -rotate-3 transform">
            <span className="inline-block rounded-md bg-black px-4 py-2 text-sm font-bold tracking-wider text-white uppercase shadow-md dark:bg-white dark:text-black">
              {" "}
              New Paradigm{" "}
            </span>
          </div>

          <h3 className="mb-8 text-5xl leading-tight font-bold sm:text-6xl">
            <span className="block text-gray-900 dark:text-white">RETHINK</span>
            <span className="ml-10 block text-yellow-500 dark:text-yellow-400">
              YOUR
            </span>
            <span className="ml-20 block text-red-500 dark:text-red-400">
              DIGITAL
            </span>
            <span className="ml-32 block text-green-500 dark:text-green-400">
              STRATEGY
            </span>
          </h3>

          <div className="ml-3 border-l-4 border-gray-300 pl-6 dark:border-gray-600">
            <p className="text-xl text-gray-700 dark:text-gray-300">
              We architect unconventional solutions for brands that refuse to
              follow the status quo.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <a
              href="#"
              className="group relative overflow-hidden rounded-lg bg-black px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-black"
            >
              <span className="relative z-10 block -skew-x-6 transform">
                EXPLORE WORK
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
            </a>
            <a
              href="#"
              className="group relative overflow-hidden rounded-lg border-2 border-black px-8 py-4 font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <span className="relative z-10 block -skew-x-6 transform">
                MEET THE TEAM
              </span>
            </a>
          </div>
        </div>

        <div className="relative mt-5 sm:col-span-5 sm:col-start-8 sm:row-start-1 sm:mt-0">
          <div className="relative h-full w-full">
            <div className="relative h-96 w-full overflow-hidden rounded-xl shadow-2xl sm:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Creative workspace"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-gray-900/80"></div>
            </div>

            <div className="absolute top-1/3 -right-6 hidden h-32 w-32 rotate-45 bg-blue-600 shadow-lg sm:block dark:bg-blue-500"></div>
          </div>
        </div>

        <div className="relative z-10 mt-10 grid grid-cols-2 gap-8 sm:col-span-12 sm:mt-32 sm:grid-cols-4 sm:gap-0">
          <div className="text-center">
            <div className="text-5xl font-bold text-red-500 dark:text-red-400">
              18+
            </div>
            <div className="mt-3 text-sm tracking-wider text-gray-600 uppercase dark:text-gray-400">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 dark:text-white">
              200+
            </div>
            <div className="mt-3 text-sm tracking-wider text-gray-600 uppercase dark:text-gray-400">
              Clients Worldwide
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-500 dark:text-green-400">
              97%
            </div>
            <div className="mt-3 text-sm tracking-wider text-gray-600 uppercase dark:text-gray-400">
              Retention Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-500 dark:text-yellow-400">
              42
            </div>
            <div className="mt-3 text-sm tracking-wider text-gray-600 uppercase dark:text-gray-400">
              Awards Won
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/4 hidden h-64 w-64 rounded-full border-2 border-gray-900/10 sm:block dark:border-gray-600/20"></div>
    </div>
  );
}
