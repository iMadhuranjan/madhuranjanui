export function SimpleFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
      <div className="container mx-auto max-w-7xl px-4 py-5 text-center sm:px-6 lg:px-8">
        <div className="mb-6">
          <a
            href="#"
            className="inline-flex items-center justify-center text-2xl font-semibold text-neutral-900 dark:text-white"
          >
            <svg
              className="mr-2 h-6 w-6 text-neutral-900 dark:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 13l10-5v10l-10 5-10-5V10l10 5z" />
            </svg>
            MadhurajnanUI
          </a>
          <p className="mx-auto mt-2 max-w-md text-sm text-neutral-500 dark:text-neutral-400">
            Build fast with clean, responsive, and modern Tailwind CSS
            components built for dark and light themes.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          <a
            href="#"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            {" "}
            About{" "}
          </a>
          <a
            href="#"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            {" "}
            Components{" "}
          </a>
          <a
            href="#"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            {" "}
            Docs{" "}
          </a>
          <a
            href="#"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            {" "}
            Blog{" "}
          </a>
          <a
            href="#"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            {" "}
            FAQs{" "}
          </a>
          <a
            href="#"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            {" "}
            Contact{" "}
          </a>
        </nav>

        <div className="mt-8 text-xs text-neutral-400 dark:text-neutral-500">
          © MadhurajnanUI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function FooterWitLinks() {
  return (
    <div className="bg-gray-900 px-4 py-12 text-gray-300 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <svg
              className="h-8 w-8 text-purple-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-bold text-white">MadhurajnanUI</span>
          </div>
          <p className="text-gray-400">
            Build modern websites without ever leaving your HTML.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block w-24 text-gray-400 transition-colors hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-24 text-gray-400 transition-colors hover:text-white"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-24 text-gray-400 transition-colors hover:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-24 text-gray-400 transition-colors hover:text-white"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-24 text-gray-400 transition-colors hover:text-white"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block w-24 text-gray-400 transition-colors hover:text-white"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-24 text-gray-400 transition-colors hover:text-white"
              >
                Tutorials
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-24 text-gray-400 transition-colors hover:text-white"
              >
                API Reference
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-24 text-gray-400 transition-colors hover:text-white"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-24 text-gray-400 transition-colors hover:text-white"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Newsletter</h3>
          <p className="text-gray-400">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-4 flex max-w-7xl flex-col items-center justify-between border-t border-gray-800 pt-4 md:flex-row">
        <p className="text-sm text-gray-500">
          © 2023 MadhurajnanUI. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-6 md:mt-0">
          <a
            href="#"
            className="text-sm text-gray-500 transition-colors hover:text-gray-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 transition-colors hover:text-gray-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 transition-colors hover:text-gray-300"
          >
            Cookies
          </a>
        </div>
      </div>
    </div>
  );
}

export function FooterWithCOmpanyIcon() {
  return (
    <div className="border-t border-gray-800 bg-gray-900 px-4 py-12 text-gray-300 sm:px-6 lg:px-8 dark:border-gray-700">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <div className="flex items-center">
              <img
                src="https://placehold.co/40x40"
                alt="Logo"
                className="h-10 w-10 rounded-lg"
              />
              <span className="ml-3 text-xl font-bold text-white">
                MadhuranjanUI
              </span>
            </div>
            <p className="text-gray-400">
              Building beautiful interfaces with utility-first CSS. Join our
              community of frontend developers.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col gap-2 flex-wrap sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none w-full md:w-28 "
                required
              />
              <button
                type="submit"
                className="rounded-md bg-purple-600 px-4 py-2 font-medium text-white transition-colors hover:bg-purple-700"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="my-8 border-t border-gray-800"></div>

        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 text-sm text-gray-500 md:mb-0">
            © 2025 MadhurajnanUI. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-gray-500 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 transition-colors hover:text-white"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FooterWithAppDownload() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white px-6 py-16 sm:px-12 lg:px-24 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg"></div>
              <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                MadhuranjanUI
              </span>
            </div>

            <p className="mt-6 max-w-md text-center text-gray-500 lg:text-left dark:text-gray-400">
              Elevating digital experiences through innovative design and
              cutting-edge technology.
            </p>

            <div className="mt-8 w-full max-w-md">
              <div className="flex rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-gray-700">
                <input
                  type="email"
                  placeholder="Join our newsletter"
                  className="w-full border-0 bg-transparent px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400"
                />
                <button className="rounded-r-lg bg-gradient-to-r from-purple-500 to-blue-500 px-4 font-medium text-white transition-all hover:from-purple-600 hover:to-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
              </div>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative h-64 w-64">
              <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 opacity-20 blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 transform">
                <div className="h-full w-full rounded-2xl bg-gray-100 shadow-2xl dark:bg-gray-700">
                  <div className="absolute inset-0 m-3 overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                    <div className="h-full w-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900"></div>
                  </div>
                </div>
              </div>
              <div className="animate-float absolute top-0 right-0 h-16 w-16 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg"></div>
              <div className="animate-float animation-delay-2000 absolute bottom-0 left-0 h-12 w-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg"></div>
            </div>
          </div>
        </div>

        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700"></div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              <img
                className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800"
                src="/avatar/avatar4.jpg"
                alt="User avatar"
              />
              <img
                className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800"
                src="/avatar/girl.jpeg"
                alt="User avatar"
              />
              <img
                className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800"
                src="/avatar/avatar3.jpg"
                alt="User avatar"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.672.49-1.118-.197-1.118-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.672.49-1.118-.197-1.118-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.672.49-1.118-.197-1.118-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.672.49-1.118-.197-1.118-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.672.49-1.118-.197-1.118-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Trusted by 5,000+ customers worldwide
              </span>
            </div>
          </div>

          <div className="flex space-x-3">
            <button className="flex items-center rounded-lg bg-gray-900 px-3 py-2 dark:bg-gray-700">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
              <div className="ml-2 text-left">
                <div className="text-[10px] text-gray-300">Download on the</div>
                <div className="-mt-1 text-sm font-semibold text-white">
                  App Store
                </div>
              </div>
            </button>
            <button className="flex items-center rounded-lg bg-gray-900 px-3 py-2 dark:bg-gray-700">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
              </svg>
              <div className="ml-2 text-left">
                <div className="text-[10px] text-gray-300">Get it on</div>
                <div className="-mt-1 text-sm font-semibold text-white">
                  Google Play
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
