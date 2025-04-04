export function Simpelcta() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-800 px-6 py-20 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-1/2 left-[20%] h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-purple-500 mix-blend-screen blur-[80px]"></div>
          <div className="absolute top-1/3 right-[15%] h-[300px] w-[300px] rounded-full bg-indigo-500 mix-blend-screen blur-[100px]"></div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ready to transform{" "}
                <span className="text-amber-300">your business</span>?
              </h3>
              <p className="mt-6 text-lg leading-8 text-indigo-100">
                Join 10,000+ companies who've accelerated their growth with our
                platform. Get started in minutes.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="#"
                  className="group relative flex-1 transform rounded-xl bg-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:shadow-xl sm:flex-none"
                >
                  <span className="relative z-10">Start free trial</span>
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </a>

                <a
                  href="#"
                  className="group flex items-center justify-center gap-2 text-lg font-medium text-white transition-colors hover:text-amber-200"
                >
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
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Watch demo</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-md"></div>
                <img
                  src="https://illustrations.popsy.co/amber/digital-nomad.svg"
                  alt="Happy customer illustration"
                  className="animate-float relative z-10 h-full w-full object-contain"
                  style={{ animation: "float 6s ease-in-out infinite" }}
                />
              </div>

              <div className="absolute -top-10 -left-10 hidden lg:block">
                <div className="rounded-2xl bg-white p-4 shadow-xl">
                  <div className="text-3xl font-bold text-indigo-900">10K+</div>
                  <div className="text-sm text-indigo-600">Happy Customers</div>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 hidden lg:block">
                <div className="rounded-2xl bg-white p-4 shadow-xl">
                  <div className="text-3xl font-bold text-indigo-900">4.9★</div>
                  <div className="text-sm text-indigo-600">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SimpleCTASEction() {
  return (
    <div className="relative p-5 py-10 text-center dark:bg-black">
      <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
        Ready to join our happy customers?
      </h3>
      <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
        See what we can do for your business with our 14-day free trial
      </p>

      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-violet-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl dark:from-blue-600 dark:to-blue-500">
          <span className="relative z-10 flex items-center">
            Start Free Trial
            <svg
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-violet-700 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-700 dark:to-blue-600"></span>
        </button>

        <button className="flex items-center justify-center rounded-full border-2 border-violet-500 bg-white px-8 py-4 font-bold text-violet-600 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-blue-400 dark:bg-gray-800 dark:text-blue-300">
          <svg
            className="mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          Watch Demo
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        <svg
          className="mr-2 h-4 w-4 text-violet-500 dark:text-blue-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        No credit card required • Cancel anytime
      </div>
    </div>
  );
}

export function BeautifulCtaSection() {
  return (
    <div className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-800 px-6 py-10 dark:bg-black">
      <div
        className="absolute inset-0 -z-10 bg-[size:50px_50px] opacity-20 [mask-image:linear-gradient(to_bottom_right,white,transparent)]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBhdGggZD0iTTAgMGg1MHY1MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoNTB2NTBIMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')",
        }}
      ></div>

      <div className="absolute inset-0 -z-10 overflow-hidden opacity-40">
        <div
          className="absolute animate-[float_15s_linear_infinite] rounded-full bg-white"
          style={{
            width: "3px",
            height: "3px",
            top: "20%",
            left: "15%",
            animationDelay: "0s",
          }}
        ></div>
        <div
          className="absolute animate-[float_12s_linear_infinite] rounded-full bg-white"
          style={{
            width: "2px",
            height: "2px",
            top: "50%",
            left: "30%",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="absolute animate-[float_18s_linear_infinite] rounded-full bg-white"
          style={{
            width: "4px",
            height: "4px",
            top: "70%",
            left: "60%",
            animationDelay: "4s",
          }}
        ></div>
        <div
          className="absolute animate-[float_10s_linear_infinite] rounded-full bg-white"
          style={{
            width: "2.5px",
            height: "2.5px",
            top: "30%",
            left: "80%",
            animationDelay: "1s",
          }}
        ></div>
      </div>

      <div className="mx-auto flex items-center justify-center">
        <div className="text-center lg:text-left">
          <h3 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            your business
          </h3>
          <p className="mt-6 text-xl leading-8 text-purple-100">
            Join{" "}
            <span className="font-semibold text-white">10,000+ companies</span>{" "}
            achieving breakthrough results with our platform.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row lg:justify-start">
            <div className="group relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-amber-400 to-pink-500 opacity-75 blur-md transition-all duration-300 group-hover:opacity-100"></div>
              <button className="relative rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 px-8 py-4 text-lg font-bold text-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110">
                Start free trial
              </button>
            </div>

            <button className="group flex items-center gap-2 text-lg font-medium text-white transition-all hover:text-amber-300">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-300 after:transition-all after:duration-300 group-hover:after:w-full">
                {" "}
                See live demo{" "}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          <div className="mt-16">
            <p className="text-sm font-medium text-purple-200">
              TRUSTED BY INDUSTRY LEADERS
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-8 lg:justify-start">
              <div className="text-xl font-bold text-white/80 transition-all duration-300 hover:scale-110 hover:text-white">
                Google
              </div>
              <div className="text-xl font-bold text-white/80 transition-all duration-300 hover:scale-110 hover:text-white">
                Apple
              </div>
              <div className="text-xl font-bold text-white/80 transition-all duration-300 hover:scale-110 hover:text-white">
                Amazon
              </div>
              <div className="text-xl font-bold text-white/80 transition-all duration-300 hover:scale-110 hover:text-white">
                Microsoft
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CtaWithContactForm() {
  return (
    <div className="relative isolate mx-auto overflow-hidden bg-gradient-to-br from-white to-gray-50 shadow-2xl dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/3 left-[60%] h-[300px] w-[300px] rounded-full bg-purple-500 blur-[100px] dark:bg-purple-900/50"></div>
        <div className="absolute top-2/3 right-[60%] h-[300px] w-[300px] rounded-full bg-blue-500 blur-[100px] dark:bg-blue-900/50"></div>
      </div>

      <div className="p-8 sm:p-10 lg:p-12">
        <div className="mb-10 text-center">
          <h3 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Elevate Your Business
            </span>
          </h3>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Join{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              10,000+
            </span>{" "}
            companies revolutionizing their workflow with our platform
          </p>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="transform rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800/50">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              10K+
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Happy Users
            </div>
          </div>
          <div className="transform rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800/50">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              99.9%
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Uptime</div>
          </div>
          <div className="transform rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800/50">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              4.9★
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Avg Rating
            </div>
          </div>
          <div className="transform rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800/50">
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
              24/7
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Support</div>
          </div>
        </div>

        <div className="mb-10 space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2 text-gray-900 focus:border-purple-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white"
              placeholder=" "
            />
            <label
              for="name"
              className="absolute top-2 left-0 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 dark:text-gray-400 dark:peer-focus:text-purple-400"
            >
              Your Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2 text-gray-900 focus:border-purple-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white"
              placeholder=" "
            />
            <label
              for="email"
              className="absolute top-2 left-0 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 dark:text-gray-400 dark:peer-focus:text-purple-400"
            >
              Email Address
            </label>
          </div>
          <div className="relative">
            <textarea
              id="message"
              rows="3"
              className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2 text-gray-900 focus:border-purple-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white"
              placeholder=" "
            ></textarea>
            <label
              for="message"
              className="absolute top-2 left-0 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 dark:text-gray-400 dark:peer-focus:text-purple-400"
            >
              Your Message
            </label>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl">
            <span className="relative z-10">Get Started Free</span>
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </button>
          <button className="group relative overflow-hidden rounded-xl border-2 border-purple-600 bg-transparent px-8 py-4 font-bold text-purple-600 transition-all duration-300 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-gray-800/50">
            <span className="relative z-10">Schedule Demo</span>
            <span className="absolute inset-0 rounded-xl bg-purple-600/5 transition-opacity duration-300 group-hover:bg-purple-600/10 dark:bg-purple-400/5 dark:group-hover:bg-purple-400/10"></span>
          </button>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <p className="mb-6 text-center text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-2xl font-bold text-gray-700 opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100 dark:text-gray-300">
              Google
            </div>
            <div className="text-2xl font-bold text-gray-700 opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100 dark:text-gray-300">
              Microsoft
            </div>
            <div className="text-2xl font-bold text-gray-700 opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100 dark:text-gray-300">
              Amazon
            </div>
            <div className="text-2xl font-bold text-gray-700 opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100 dark:text-gray-300">
              Apple
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CtaWithContactFormAndTrust() {
  return (
    <div className="relative m-4 mx-4 max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 font-sans text-gray-800 shadow-2xl transition-all duration-500 dark:border-gray-700 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-purple-500 opacity-10 blur-xl dark:opacity-5"></div>
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500 opacity-10 blur-xl dark:opacity-5"></div>

      <div className="relative z-10 mb-10 text-center">
        <div className="mb-4 inline-block rounded-full border border-purple-200 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 dark:border-purple-800/50 dark:from-purple-900/30 dark:to-blue-900/30">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-sm font-medium text-transparent">
            ✨ Premium Experience
          </span>
        </div>
        <h3 className="mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 bg-clip-text text-4xl leading-tight font-extrabold text-transparent md:text-5xl">
          Elevate Your{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-black dark:text-white">
              {" "}
              Digital Presence
            </span>
            <span className="absolute bottom-0 left-0 -z-0 h-3 w-full -rotate-1 bg-blue-400/20 dark:bg-blue-500/30"></span>
          </span>
        </h3>
        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
          Join our exclusive community of innovators and transform your workflow
          with cutting-edge solutions tailored for your success.
        </p>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/50 dark:hover:border-purple-500/50">
          <div className="mb-2 text-3xl font-bold text-purple-600 transition-colors group-hover:text-purple-700 dark:text-purple-400 dark:group-hover:text-purple-300">
            10K+
          </div>
          <div className="text-sm text-gray-500 transition-colors group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
            Satisfied Clients
          </div>
          <div className="mt-3 h-1 w-1/2 bg-gradient-to-r from-purple-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
        </div>
        <div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/50 dark:hover:border-blue-500/50">
          <div className="mb-2 text-3xl font-bold text-blue-600 transition-colors group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300">
            24/7
          </div>
          <div className="text-sm text-gray-500 transition-colors group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
            Dedicated Support
          </div>
          <div className="mt-3 h-1 w-1/2 bg-gradient-to-r from-blue-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
        </div>
        <div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/50 dark:hover:border-pink-500/50">
          <div className="mb-2 text-3xl font-bold text-pink-600 transition-colors group-hover:text-pink-700 dark:text-pink-400 dark:group-hover:text-pink-300">
            99.9%
          </div>
          <div className="text-sm text-gray-500 transition-colors group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
            Uptime Guarantee
          </div>
          <div className="mt-3 h-1 w-1/2 bg-gradient-to-r from-pink-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
        </div>
        <div className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/50 dark:hover:border-indigo-500/50">
          <div className="mb-2 text-3xl font-bold text-indigo-600 transition-colors group-hover:text-indigo-700 dark:text-indigo-400 dark:group-hover:text-indigo-300">
            5x
          </div>
          <div className="text-sm text-gray-500 transition-colors group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
            Performance Boost
          </div>
          <div className="mt-3 h-1 w-1/2 bg-gradient-to-r from-indigo-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
        </div>
      </div>

      <form className="mb-10 space-y-5 rounded-xl border border-gray-200/70 bg-white/50 p-6 shadow-sm backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/30">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label
              for="luxury-name"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="luxury-name"
                className="w-full rounded-lg border border-gray-300/80 bg-white/80 px-4 py-3 pl-10 placeholder-gray-400/70 transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-purple-500/50 dark:border-gray-600/70 dark:bg-gray-800/70 dark:placeholder-gray-500"
                placeholder="Johnathan Smith"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label
              for="luxury-email"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="luxury-email"
                className="w-full rounded-lg border border-gray-300/80 bg-white/80 px-4 py-3 pl-10 placeholder-gray-400/70 transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-purple-500/50 dark:border-gray-600/70 dark:bg-gray-800/70 dark:placeholder-gray-500"
                placeholder="you@company.com"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label
            for="luxury-message"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Your Vision
          </label>
          <textarea
            id="luxury-message"
            rows="4"
            className="w-full rounded-lg border border-gray-300/80 bg-white/80 px-4 py-3 placeholder-gray-400/70 transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-purple-500/50 dark:border-gray-600/70 dark:bg-gray-800/70 dark:placeholder-gray-500"
            placeholder="Describe your ambitious project..."
          ></textarea>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="luxury-consent"
            className="rounded border-gray-300/80 text-purple-600 focus:ring-purple-500/50 dark:border-gray-600/70"
          />
          <label
            for="luxury-consent"
            className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
          >
            {" "}
            I agree to receive exclusive offers and updates{" "}
          </label>
        </div>
      </form>

      <div className="mb-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
        <button className="group relative transform overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-0.5 hover:from-purple-700 hover:to-blue-600 hover:shadow-xl focus:ring-2 focus:ring-purple-500/70 focus:outline-none">
          <span className="relative z-10">Begin Your Journey</span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          <span className="absolute top-0 left-0 h-0.5 w-full bg-white/30 transition-all duration-700 group-hover:h-full group-hover:opacity-10"></span>
        </button>
        <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-purple-600/30 px-6 py-3 font-medium text-purple-600 transition-all duration-300 hover:border-purple-600/50 hover:bg-purple-50/50 focus:ring-2 focus:ring-purple-500/30 focus:outline-none dark:border-purple-400/30 dark:text-purple-400 dark:hover:border-purple-400/50 dark:hover:bg-gray-800/50">
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Explore Features
        </button>
        <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-300/70 bg-white/80 px-6 py-3 font-medium text-gray-800 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md focus:ring-2 focus:ring-gray-500/20 focus:outline-none dark:border-gray-700/50 dark:bg-gray-800/50 dark:text-gray-200 dark:hover:bg-gray-700/70">
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
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Save Proposal
        </button>
      </div>

      <div className="mt-12 border-t border-gray-200/70 pt-8 dark:border-gray-700/50">
        <div className="flex flex-col items-center">
          <div className="mb-6 flex items-center">
            <div className="flex -space-x-2">
              <img
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                src="https://randomuser.me/api/portraits/women/43.jpg"
                alt="User 1"
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User 2"
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="User 3"
              />
            </div>
            <div className="ml-4 text-left">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  4.98/5
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Rated by 850+ professionals
              </p>
            </div>
          </div>
          <p className="mb-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Trusted by teams at world-className companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80 transition-opacity hover:opacity-100">
            <div className="bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-xl font-bold text-transparent dark:from-gray-300 dark:to-gray-100">
              TechVision
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-xl font-bold text-transparent dark:from-blue-400 dark:to-blue-300">
              InfiniteLoop
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-xl font-bold text-transparent dark:from-purple-400 dark:to-purple-300">
              NovaCore
            </div>
            <div className="bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-xl font-bold text-transparent dark:from-pink-400 dark:to-pink-300">
              QuantumSoft
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CtaWithBackgroudLine() {
  return (
    <div className="relative isolate mx-auto max-w-7xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-50 p-5 shadow-2xl md:p-12 lg:p-16 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-indigo-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-gray-700"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>

      <div className="mx-auto text-center">
        <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
          Ready to transform your{" "}
          <span className="text-indigo-600 dark:text-indigo-400">business</span>?
        </h3>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          Join thousands of satisfied customers who are already seeing results.
          Start your journey today with our 14-day free trial.
        </p>

        <div className="mx-auto mt-10 flex max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="relative w-full flex-grow sm:w-auto">
            <label for="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-xl border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-600 dark:placeholder:text-gray-500 dark:focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="flex-none rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started{" "}
            <span aria-hidden="true" className="ml-1">
              →
            </span>
          </button>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-8 text-sm leading-6 text-gray-600 sm:flex-row dark:text-gray-400">
          <div className="flex items-center">
            <div className="flex -space-x-0.5">
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <span className="ml-2">5-star rating</span>
          </div>

          <div className="hidden sm:block sm:h-4 sm:w-px sm:bg-gray-300 dark:sm:bg-gray-600"></div>

          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
            </svg>
            <span className="ml-2">Trusted by 10,000+ customers</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export function SimpleCardCta(){
    return(
        <div className="relative m-2 mx-auto max-w-2xl">
  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur-md"></div>
  <div className="relative rounded-2xl bg-white p-8 md:p-10 dark:bg-gray-900">
    <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">Let's make something <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">awesome!</span></h3>
    <p className="mt-4 text-gray-600 dark:text-gray-300">Fun, creative solutions for your boldest ideas.</p>
    <div className="mt-8">
      <button className="relative rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/30">
        Start Creating
        <span className="absolute -top-2 -right-2 flex h-5 w-5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex h-5 w-5 rounded-full bg-pink-500"></span>
        </span>
      </button>
    </div>
    <div className="mt-8 flex justify-center gap-2">
      <div className="h-3 w-3 rounded-full bg-pink-400"></div>
      <div className="h-3 w-3 rounded-full bg-purple-400"></div>
      <div className="h-3 w-3 rounded-full bg-blue-400"></div>
    </div>
  </div>
</div>

    )
}

export function GradientBgCtaSection(){
  return(
    <div className="relative overflow-hidden py-20 dark:bg-black">
   <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
    <div className="h-96 w-96 rounded-full bg-gradient-to-br from-teal-400 to-green-500 opacity-30 blur-3xl dark:opacity-20"></div>
    <div className="h-96 w-96 rounded-full bg-gradient-to-br from-lime-400 to-green-400 opacity-20 blur-3xl dark:opacity-10"></div>
  </div>
   <div className="relative z-10 mx-auto max-w-7xl px-6 text-center sm:px-10">
    <h3 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-gray-100">Our Journey, <span className="bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">Reimagined</span></h3>
    <p className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl dark:text-gray-300">We pioneer technology that empowers growth – building solutions from the ground up to elevate businesses worldwide.</p>
    <div className="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6">
      <a href="#" className="inline-block rounded-lg bg-gradient-to-r from-teal-500 to-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:from-teal-600 hover:to-green-600 md:text-base"> Get Started </a>
      <a href="#" className="inline-block rounded-lg border border-teal-500 px-6 py-3 text-sm font-semibold text-teal-600 transition-colors duration-300 hover:bg-teal-50 md:text-base dark:border-teal-300 dark:text-teal-300 dark:hover:bg-gray-800"> Learn More </a>
    </div>
  </div>
</div>

  )
}