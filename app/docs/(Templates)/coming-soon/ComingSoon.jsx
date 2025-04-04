export function SimpleComingSoonPage(params) {
  return (
    <div className="relative flex py-16  w-full items-center justify-center overflow-x-hidden bg-gray-50 font-sans antialiased dark:bg-gray-900">
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-3xl dark:from-purple-800 dark:to-pink-800"></div>
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-gradient-to-br from-pink-400 to-yellow-400 opacity-20 blur-2xl dark:from-pink-700 dark:to-yellow-700"></div>

      <div className="relative z-10 max-w-xl px-6 text-center sm:px-8">
        <svg
          className="mx-auto mb-8 h-20 w-20 text-purple-500 opacity-90 dark:text-purple-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2c-5.534 0-10 4.476-10 10 0 3.243 1.568 6.12 4 
               7.938v1.562c0 .552.448 1 1 
               1s1-.448 1-1v-1c0-.171-.043-.331-.113-.473l-.495-.989c-.117-.233.028-.51.295-.51h9.626c.257 
               0 
               .403.266.295.51l-.495.989c-.07.142-.113.302-.113.473v1c0 
               .552.448 
               1 1 
               1s1-.448 
               1-1v-1.562c2.432-1.818 
               4-4.695 
               4-7.938 
               0-5.524-4.477-10-10-10z"
          ></path>
        </svg>
        <h3 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl dark:text-gray-100">
          We&rsquo;re Almost Ready!
        </h3>
        <p className="mx-auto mb-8 max-w-md text-base text-gray-600 sm:text-lg dark:text-gray-300">
          Our website is coming soon. Sign up below to get notified when we
          launch.
        </p>

        <form className="mx-auto flex max-w-md flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-400 sm:flex-1 dark:bg-gray-800 dark:text-gray-100"
          />
          <button
            type="submit"
            className="rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 font-medium text-white shadow-md transition-transform duration-300 hover:scale-105 hover:from-purple-600 hover:to-pink-600"
          >
            Notify Me
          </button>
        </form>

        <div className="mt-8 flex items-center justify-center space-x-6 text-gray-700 dark:text-gray-300">
          <div className="text-center">
            <div className="text-3xl font-bold">04</div>
            <div className="text-sm tracking-widest uppercase">Days</div>
          </div>
          <span className="inline-block h-6 w-px bg-gray-300 dark:bg-gray-700"></span>
          <div className="text-center">
            <div className="text-3xl font-bold">12</div>
            <div className="text-sm tracking-widest uppercase">Hours</div>
          </div>
          <span className="inline-block h-6 w-px bg-gray-300 dark:bg-gray-700"></span>
          <div className="text-center">
            <div className="text-3xl font-bold">47</div>
            <div className="text-sm tracking-widest uppercase">Min</div>
          </div>
          <span className="inline-block h-6 w-px bg-gray-300 dark:bg-gray-700"></span>
          <div className="text-center">
            <div className="text-3xl font-bold">08</div>
            <div className="text-sm tracking-widest uppercase">Sec</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SometingAmazingisCOming() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-12 sm:px-12 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/20"></div>
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl text-center">
        <h3 className="flex flex-wrap gap-2 p-2 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
          <span className="block">Something</span>
          <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            Amazing
          </span>
          <span className="block">Is Coming</span>
        </h3>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          We're working hard to bring you an extraordinary experience. Stay
          tuned for our grand launch!
        </p>

        <div className="mx-auto mt-12 grid max-w-md grid-cols-4 gap-4 sm:gap-6">
          <div className="flex flex-col items-center">
            <div className="flex h-20 w-full items-center justify-center rounded-xl bg-white/80 text-3xl font-bold text-gray-900 shadow-md backdrop-blur-sm sm:h-24 sm:text-4xl dark:bg-gray-800/80 dark:text-white">
              14
            </div>
            <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              Days
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-20 w-full items-center justify-center rounded-xl bg-white/80 text-3xl font-bold text-gray-900 shadow-md backdrop-blur-sm sm:h-24 sm:text-4xl dark:bg-gray-800/80 dark:text-white">
              08
            </div>
            <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              Hours
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-20 w-full items-center justify-center rounded-xl bg-white/80 text-3xl font-bold text-gray-900 shadow-md backdrop-blur-sm sm:h-24 sm:text-4xl dark:bg-gray-800/80 dark:text-white">
              32
            </div>
            <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              Minutes
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-20 w-full items-center justify-center rounded-xl bg-white/80 text-3xl font-bold text-gray-900 shadow-md backdrop-blur-sm sm:h-24 sm:text-4xl dark:bg-gray-800/80 dark:text-white">
              45
            </div>
            <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              Seconds
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-gray-300 bg-white/50 px-5 py-3 text-gray-900 shadow-sm backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800/50 dark:text-white dark:placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600"
            >
              Notify Me
            </button>
          </form>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Get notified when we launch. No spam, promise.
          </p>
        </div>

        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 h-16 w-16 rounded-full bg-indigo-200/40 blur-xl dark:bg-indigo-900/20"></div>
      <div className="absolute right-10 bottom-20 h-20 w-20 rounded-full bg-purple-200/40 blur-xl dark:bg-purple-900/20"></div>
    </div>
  );
}

export function ComingSoonWithSvgIcon() {
  return (
    <div className="flex w-full overflow-hidden bg-gradient-to-tr from-blue-50 to-sky-100 font-sans text-gray-800 dark:from-gray-800 dark:to-slate-900 dark:text-gray-100">
      <div className="hidden w-1/2 flex-col items-center justify-center p-10 sm:flex">
        <svg
          className="max-h-96 w-auto text-sky-400 opacity-90 dark:text-sky-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 
           2c4.418 
           0 
           8 
           3.582 
           8 
           8s-3.582 
           8-8 
           8-8-3.582-8-8 
           3.582-8 
           8-8z 
           m0 
           14c-3.313 
           0-6 
           2.686-6 
           6h12c0-3.314-2.687-6-6-6z"
          ></path>
        </svg>
        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
          Keep calm, we’re working our magic!
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-center space-y-8 p-8 sm:w-1/2 sm:p-14">
        <h3 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Coming Soon
        </h3>

        <p className="max-w-sm text-center text-gray-600 sm:text-lg dark:text-gray-300">
          Our team is putting the final touches on something awesome. Sign up
          below to stay in the loop.
        </p>

        <form className="flex w-full max-w-md flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-sky-400 dark:focus:ring-sky-300"
          />
          <button
            type="submit"
            className="rounded-md bg-gradient-to-r from-blue-500 to-sky-500 px-6 py-2 font-semibold text-white shadow-md transition-transform duration-300 hover:scale-105 hover:from-blue-600 hover:to-sky-600 dark:hover:from-blue-700 dark:hover:to-sky-700"
          >
            Notify Me
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center space-x-6">
          <div className="text-center">
            <div className="text-3xl font-bold">10</div>
            <div className="text-sm tracking-widest text-gray-500 uppercase dark:text-gray-400">
              Days
            </div>
          </div>
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
          <div className="text-center">
            <div className="text-3xl font-bold">04</div>
            <div className="text-sm tracking-widest text-gray-500 uppercase dark:text-gray-400">
              Hours
            </div>
          </div>
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
          <div className="text-center">
            <div className="text-3xl font-bold">39</div>
            <div className="text-sm tracking-widest text-gray-500 uppercase dark:text-gray-400">
              Min
            </div>
          </div>
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
          <div className="text-center">
            <div className="text-3xl font-bold">27</div>
            <div className="text-sm tracking-widest text-gray-500 uppercase dark:text-gray-400">
              Sec
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LaunchingSoon() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div className="absolute top-1/4 left-20 h-32 w-32 rounded-full bg-indigo-200 blur-xl dark:bg-indigo-900/50"></div>
        <div className="absolute top-1/3 right-32 h-40 w-40 rounded-full bg-purple-200 blur-xl dark:bg-purple-900/50"></div>
        <div className="absolute bottom-1/4 left-1/3 h-28 w-28 rounded-full bg-pink-200 blur-xl dark:bg-pink-900/50"></div>
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-10 sm:px-8">
        <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-gray-800">
          <svg
            className="h-10 w-10 text-indigo-600 dark:text-indigo-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <h3 className="mb-6 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            Launching Soon
          </span>
        </h3>

        <p className="mx-auto max-w-2xl text-center text-xl text-gray-600 dark:text-gray-300">
          We're building something extraordinary. Join our waitlist to be the
          first to know when we go live.
        </p>

        <div className="mt-8 grid grid-cols-4 gap-4 sm:gap-8">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-indigo-600 sm:text-4xl dark:text-indigo-400">
              07
            </div>
            <div className="text-sm tracking-wider text-gray-500 uppercase dark:text-gray-400">
              Days
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-indigo-600 sm:text-4xl dark:text-indigo-400">
              23
            </div>
            <div className="text-sm tracking-wider text-gray-500 uppercase dark:text-gray-400">
              Hours
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-indigo-600 sm:text-4xl dark:text-indigo-400">
              45
            </div>
            <div className="text-sm tracking-wider text-gray-500 uppercase dark:text-gray-400">
              Minutes
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-indigo-600 sm:text-4xl dark:text-indigo-400">
              18
            </div>
            <div className="text-sm tracking-wider text-gray-500 uppercase dark:text-gray-400">
              Seconds
            </div>
          </div>
        </div>

        <div className="mt-10 w-full max-w-md">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-900 shadow-sm focus:border-transparent focus:ring-2 focus:ring-indigo-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
            <button className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
              Notify Me
            </button>
          </div>
          <p className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>

        <div className="mt-16 flex gap-6">
          <a
            href="#"
            className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
          >
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
          >
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
          >
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
