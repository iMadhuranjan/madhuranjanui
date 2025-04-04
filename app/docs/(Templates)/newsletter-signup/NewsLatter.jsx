export function NewsLatterCard() {
  return (
    <div className="relative isolate m-4 mx-auto max-w-2xl overflow-hidden rounded-sm border border-gray-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-5 shadow-2xl dark:border-gray-700 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-[pulse_8s_infinite] rounded-full bg-purple-300 opacity-20 blur-3xl dark:bg-purple-900"></div>
        <div className="absolute top-0 right-0 h-32 w-32 animate-[float_6s_ease-in-out_infinite_reverse] rounded-full bg-blue-300 opacity-30 blur-xl dark:bg-blue-800"></div>
        <div className="absolute bottom-0 left-0 h-24 w-24 animate-[float_8s_ease-in-out_infinite_2s] rounded-full bg-indigo-300 opacity-30 blur-lg dark:bg-indigo-800"></div>
      </div>

      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg dark:from-purple-500 dark:to-indigo-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Stay in the loop
        </h3>
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Join our newsletter for the latest updates and exclusive content.
        </p>

        <form className="mt-8 sm:mx-auto sm:flex sm:max-w-xl">
          <div className="relative min-w-0 flex-1">
            <label for="email" className="sr-only">
              Email address
            </label>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-400 dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full rounded-full border-0 bg-white/50 py-4 pr-3 pl-10 text-base text-gray-900 shadow-sm ring-1 ring-gray-300 backdrop-blur-sm ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-purple-600 focus:ring-inset dark:bg-gray-800/50 dark:text-white dark:ring-gray-600 dark:placeholder:text-gray-500 dark:focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              className="group relative flex w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:from-purple-500 dark:to-indigo-500"
            >
              Subscribe
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></span>
            </button>
          </div>
        </form>

        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          We care about your data. Read our{" "}
          <a
            href="#"
            className="font-medium text-purple-600 hover:underline dark:text-purple-400"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export function SimpleNewsLatterCard() {
  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-md dark:bg-gray-800 m-3">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          Subscribe to Our Newsletter
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Stay updated with the latest news, trends, and special offers. Don't
          miss out on our exciting updates.
        </p>
      </div>

      <div className="mt-6">
        <form className="space-y-4">
          <div>
            <label for="email" className="sr-only">
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export function FurureticNewsLapperForm() {
  return (
    <div className="relative isolate mx-auto max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-white p-5 font-sans shadow-[0_0_40px_-15px_rgba(124,58,237,0.5)] md:p-12 dark:border-gray-800 dark:bg-gray-900 m-5">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[length:24px_24px] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(107,114,128,0.15)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)]"></div>
      </div>

      <div className="absolute -top-20 -left-20 h-64 w-64 animate-[float_15s_ease-in-out_infinite] rounded-full bg-purple-600/10"></div>
      <div className="absolute -right-10 -bottom-10 h-80 w-80 animate-[float_18s_ease-in-out_infinite_reverse] rounded-full bg-blue-600/10"></div>

      <div className="relative z-10 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center">
          <svg
            className="h-full w-full animate-[pulse_3s_ease-in-out_infinite]"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 0L61.2254 38.8197H100L69.3873 62.8605L80.6127 101.68L50 77.6393L19.3873 101.68L30.6127 62.8605L0 38.8197H38.7746L50 0Z"
              fill="url(#gradient)"
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8B5CF6" />
                <stop offset="100%" stop-color="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h3 className="mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
          Join Our Digital Circle
        </h3>
        <p className="mx-auto max-w-lg text-lg leading-8 text-gray-800 dark:text-gray-300">
          Get{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-300">
            exclusive access
          </span>{" "}
          to cutting-edge content before anyone else
        </p>

        <form className="mt-8 space-y-4">
          <div className="group relative">
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur transition duration-200 group-hover:opacity-100"></div>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="relative w-full rounded-lg border border-gray-300 bg-gray-100 px-6 py-4 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-4 text-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <span>Activate Subscription</span>
            <svg
              className="h-5 w-5 animate-[bounceRight_1.5s_infinite]"
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
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 rounded border-gray-300 bg-gray-100 text-purple-600 transition duration-150 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800"
              checked
            />
            <span className="ml-2 text-gray-800 dark:text-gray-300">
              Weekly Digest
            </span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 transition duration-150 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
            />
            <span className="ml-2 text-gray-800 dark:text-gray-300">
              Product Updates
            </span>
          </label>
        </div>

        <div className="relative mt-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-800 dark:bg-gray-900 dark:text-gray-400">
              Secure & Private
            </span>
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-8">
          <div className="flex items-center text-gray-800 dark:text-gray-400">
            <svg
              className="mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <span>No spam</span>
          </div>
          <div className="flex items-center text-gray-800 dark:text-gray-400">
            <svg
              className="mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span>256-bit encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HorizonatlNewLatter() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 dark:from-purple-900 dark:via-indigo-900 dark:to-pink-800 px-4 py-10">
      <div className="absolute top-0 left-0 h-full w-full opacity-20">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path fill="url(#grad)" d="M0,0V1000H1000V0Z" opacity="0.25"></path>
          <defs>
            <radialGradient
              id="grad"
              cx="50%"
              cy="50%"
              r="50%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stop-color="#ffffff"></stop>
              <stop offset="100%" stop-color="#ffffff" stop-opacity="0"></stop>
            </radialGradient>
          </defs>
          <circle cx="20%" cy="30%" r="150" fill="white" opacity="0.05" />
          <circle cx="80%" cy="70%" r="200" fill="white" opacity="0.05" />
          <circle cx="50%" cy="80%" r="100" fill="white" opacity="0.05" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-3xl text-center">
        <h2 className="mb-4 text-4xl leading-tight font-bold text-gray-900 dark:text-white md:text-5xl">
          Join Our Newsletter
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700 dark:text-gray-200">
          Get exclusive updates, insider tips, and special offers delivered
          straight to your inbox. Be the first to know!
        </p>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
          <div className="relative w-full max-w-md sm:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full min-w-[300px] rounded-none border border-gray-300 bg-white px-6 pl-12 py-4 text-gray-900 placeholder-gray-500 backdrop-blur-sm transition-all duration-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 focus:outline-none dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder-white/70"
            />
            <svg
              className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-500 dark:text-white/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              ></path>
            </svg>
          </div>
          <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 min-w-[180px] px-8 py-4 font-semibold text-white transition-all duration-300 hover:from-pink-600 hover:to-pink-700">
            <span>Subscribe</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-600 dark:text-white/60">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}

export function GlassStyleNewsLatter() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 px-4 py-10">
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="animate-float absolute -top-20 -left-20 h-64 w-64 rounded-full bg-cyan-400 opacity-20 mix-blend-screen blur-3xl filter"></div>
        <div className="animate-float-delay absolute right-0 bottom-10 h-96 w-96 rounded-full bg-pink-500 opacity-20 mix-blend-screen blur-3xl filter"></div>
      </div>

      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30 backdrop-blur-md">
        <div className="absolute -top-1 -left-1 h-12 w-12 border-t-2 border-l-2 border-cyan-300"></div>
        <div className="absolute -right-1 -bottom-1 h-12 w-12 border-r-2 border-b-2 border-pink-300"></div>

        <div className="text-center">
          <svg
            className="mx-auto mb-6 h-14 w-14 text-cyan-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>

          <h2 className="mb-4 bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-4xl font-bold text-transparent">
            Insider Updates
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Join 50,000+ subscribers who get cutting-edge insights every week.
          </p>

          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder=" "
                className="peer w-full rounded-lg border border-white/10 bg-white/5 px-5 py-3.5 text-white transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/20 focus:outline-none"
              />
              <label className="pointer-events-none absolute top-3.5 left-5 text-white/60 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-cyan-300">
                Your email
              </label>
            </div>
            <button className="transform rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/20">
              Get Access
            </button>
          </div>

          <p className="mt-4 text-xs text-white/50">
            No spam. Unsubscribe with 1 click.
          </p>
        </div>
      </div>
    </div>
  );
}

export function BorderNewsLatter() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-white px-4 py-10 dark:bg-black">
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGwyMCAyME0yMCAwTDAgMjAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-30"></div>

  <div className="group relative w-full max-w-2xl rounded-xl border-2 border-transparent bg-gradient-to-br from-purple-600 to-pink-500 p-1 shadow-lg shadow-purple-500/20 dark:from-purple-800 dark:to-pink-700">
    <div className="rounded-xl bg-white p-8 text-center dark:bg-black">
      <div className="mb-8">
        <svg className="mx-auto h-16 w-16 text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </div>

      <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent">THE DIGITAL PULSE</h2>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">Get <span className="font-medium text-pink-400">high-voltage</span> tech news delivered weekly.</p>

      <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
        <input type="email" placeholder="YOUR@EMAIL.COM" className="flex-grow rounded-lg border-2 border-gray-300 bg-white px-5 py-3 font-mono text-gray-900 placeholder-gray-500 transition-all focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400" />
        <button className="rounded-lg border-2 border-transparent bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-medium text-white transition-all hover:border-white/10 hover:shadow-lg hover:shadow-pink-500/30">SUBSCRIBE →</button>
      </div>

      <p className="mt-4 font-mono text-xs text-gray-600 dark:text-gray-400">[ 100% HUMAN-CURATED CONTENT ]</p>
    </div>
  </div>
</div>

  );
}
