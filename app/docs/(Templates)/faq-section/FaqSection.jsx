export function SimpleFAQSection() {
  return (
    <div className="bg-gray-50 py-5 text-gray-800  px-2 dark:bg-gray-900 dark:text-gray-50">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-4xl font-extrabold">
            Frequently Asked Questions
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-violet-700 dark:text-blue-200">
            Find quick answers to common questions about our products and
            services.
          </p>
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden  dark:shadow-lg dark:hover:shadow-xl">
            <div className="flex items-start p-2">
              <div className="mt-1 mr-4 h-6 w-6 flex-shrink-0 text-violet-600 dark:text-blue-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">
                  How do I reset my password?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You can reset your password by clicking "Forgot Password" on
                  the login page. We'll send a secure link to your registered
                  email to create a new password. If you don't receive the email
                  within 5 minutes, please check your spam folder.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden   transition-all duration-200  dark:shadow-lg dark:hover:shadow-xl">
            <div className="flex items-start p-6">
              <div className="mt-1 mr-4 h-6 w-6 flex-shrink-0 text-violet-600 dark:text-blue-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">
                  What is the refund policy?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We offer a 30-day money-back guarantee on all our products. If
                  you're unsatisfied for any reason, simply contact our support
                  team within 30 days of purchase for a full refund. Digital
                  products must be deactivated to qualify for refunds.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden   transition-all duration-200  dark:shadow-lg dark:hover:shadow-xl">
            <div className="flex items-start p-6">
              <div className="mt-1 mr-4 h-6 w-6 flex-shrink-0 text-violet-600 dark:text-blue-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">
                  Where can I find documentation?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All documentation is available under the "Docs" section in
                  your dashboard. We also provide API references, developer
                  guides, and video tutorials. For advanced topics, check our
                  Knowledge Base or community forums.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden   transition-all duration-200  dark:shadow-lg dark:hover:shadow-xl">
            <div className="flex items-start p-6">
              <div className="mt-1 mr-4 h-6 w-6 flex-shrink-0 text-violet-600 dark:text-blue-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">
                  How do I contact support?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our support team is available 24/7 via live chat in the app.
                  You can also email support@example.com or call +1 (555)
                  123-4567 during business hours (9AM-5PM EST). Average response
                  time is under 2 hours for priority issues.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden   transition-all duration-200  dark:shadow-lg dark:hover:shadow-xl">
            <div className="flex items-start p-6">
              <div className="mt-1 mr-4 h-6 w-6 flex-shrink-0 text-violet-600 dark:text-blue-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! We offer a 14-day free trial with full access to all
                  features. No credit card required to start. At the end of your
                  trial, you can choose any of our paid plans to continue using
                  the service.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-violet-700 dark:text-blue-300">
            Still have questions?{" "}
            <a
              href="#"
              className="font-semibold underline transition-colors hover:text-violet-900 dark:hover:text-white"
            >
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqQithAccordation() {
  return (
    <div className="bg-violet-50 px-6 py-6 dark:bg-blue-900">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow-xl transition-all dark:bg-gray-900">
        <div className="mb-10 text-center">
          <h3 className="mb-3 text-4xl font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h3>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 dark:text-gray-300">
            Find answers to the most commonly asked questions. If you still have
            queries, feel free to contact us directly.
          </p>
        </div>
        <div className="space-y-4">
          <details className="group rounded-lg border border-gray-200 bg-gray-100 p-5 shadow-md transition-all dark:border-gray-700 dark:bg-gray-800">
            <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              <span>How do I create an account?</span>
              <svg
                className="h-6 w-6 transform text-violet-600 transition-transform duration-300 group-open:rotate-180 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12h-12m6-6v12"
                  className="group-open:hidden"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12H6"
                  className="hidden group-open:block"
                />
              </svg>
            </summary>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              Click on the "Sign Up" button at the top right and fill out your
              personal details to get started with your account.
            </p>
          </details>
          <details className="group rounded-lg border border-gray-200 bg-gray-100 p-5 shadow-md transition-all dark:border-gray-700 dark:bg-gray-800">
            <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              <span>What payment methods do you accept?</span>
              <svg
                className="h-6 w-6 transform text-violet-600 transition-transform duration-300 group-open:rotate-180 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12h-12m6-6v12"
                  className="group-open:hidden"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12H6"
                  className="hidden group-open:block"
                />
              </svg>
            </summary>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              We accept Visa, Mastercard, PayPal, Apple Pay, and most major
              credit cards for seamless payment experience.
            </p>
          </details>
          <details className="group rounded-lg border border-gray-200 bg-gray-100 p-5 shadow-md transition-all dark:border-gray-700 dark:bg-gray-800">
            <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              <span>Can I use the platform on mobile?</span>
              <svg
                className="h-6 w-6 transform text-violet-600 transition-transform duration-300 group-open:rotate-180 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12h-12m6-6v12"
                  className="group-open:hidden"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12H6"
                  className="hidden group-open:block"
                />
              </svg>
            </summary>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              Yes, our platform is fully optimized for all devices and works
              great on mobile, tablet, and desktop.
            </p>
          </details>
          <details className="group rounded-lg border border-gray-200 bg-gray-100 p-5 shadow-md transition-all dark:border-gray-700 dark:bg-gray-800">
            <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              <span>How secure is my data?</span>
              <svg
                className="h-6 w-6 transform text-violet-600 transition-transform duration-300 group-open:rotate-180 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12h-12m6-6v12"
                  className="group-open:hidden"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12H6"
                  className="hidden group-open:block"
                />
              </svg>
            </summary>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              We use bank-level encryption and follow best practices to ensure
              your data is safe and private.
            </p>
          </details>
          <details className="group rounded-lg border border-gray-200 bg-gray-100 p-5 shadow-md transition-all dark:border-gray-700 dark:bg-gray-800">
            <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              <span>How can I contact customer support?</span>
              <svg
                className="h-6 w-6 transform text-violet-600 transition-transform duration-300 group-open:rotate-180 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12h-12m6-6v12"
                  className="group-open:hidden"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12H6"
                  className="hidden group-open:block"
                />
              </svg>
            </summary>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              You can email us at support@example.com or use the live chat on
              our website. We're available 24/7.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}

export function FaqWithSearchhbar() {
  return (
    <div className="bg-gray-50 px-4 py-5 transition-colors duration-300 dark:bg-gray-900">
      <div className="mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Help Center
          </p>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about our products and services
          </p>

          <div className="mx-auto mt-8 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 transition-all focus:border-transparent focus:ring-2 focus:ring-purple-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <svg
                className="absolute top-3.5 right-3 h-5 w-5 text-gray-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="cursor-pointer rounded-xl border border-transparent bg-white p-6 shadow-md transition-shadow hover:border-purple-500 hover:shadow-lg dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <div className="mr-4 rounded-lg bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Getting Started
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Learn how to set up and use our products
            </p>
          </div>

          <div className="cursor-pointer rounded-xl border border-transparent bg-white p-6 shadow-md transition-shadow hover:border-purple-500 hover:shadow-lg dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <div className="mr-4 rounded-lg bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Billing & Plans
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Questions about payments and subscriptions
            </p>
          </div>

          <div className="cursor-pointer rounded-xl border border-transparent bg-white p-6 shadow-md transition-shadow hover:border-purple-500 hover:shadow-lg dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <div className="mr-4 rounded-lg bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Troubleshooting
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Solutions to common problems
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="mb-6 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <svg
                className="mr-3 h-6 w-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Getting Started
            </h3>

            <div className="space-y-4">
              <details className="group rounded-lg border border-gray-200 bg-white p-5 shadow-md transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  <span>How do I create an account?</span>
                  <svg
                    className="h-6 w-6 transform text-purple-600 transition-transform duration-300 group-open:rotate-180 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <div className="mt-3 space-y-2 leading-relaxed text-gray-700 dark:text-gray-300">
                  <p>Creating an account is simple:</p>
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>Click "Sign Up" in the top right corner</li>
                    <li>Enter your email and create a password</li>
                    <li>Verify your email address</li>
                    <li>Complete your profile information</li>
                  </ol>
                  <p className="pt-2">
                    The whole process takes less than 2 minutes.
                  </p>
                </div>
              </details>

              <details className="group rounded-lg border border-gray-200 bg-white p-5 shadow-md transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  <span>What are the system requirements?</span>
                  <svg
                    className="h-6 w-6 transform text-purple-600 transition-transform duration-300 group-open:rotate-180 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <div className="mt-3 space-y-2 leading-relaxed text-gray-700 dark:text-gray-300">
                  <p>Our platform works on most modern devices and browsers:</p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>
                      <strong>Desktop:</strong> Chrome, Firefox, Safari, Edge
                      (latest versions)
                    </li>
                    <li>
                      <strong>Mobile:</strong> iOS 13+, Android 10+
                    </li>
                    <li>
                      <strong>Internet:</strong> Minimum 5Mbps connection
                    </li>
                  </ul>
                  <p className="pt-2">
                    For best performance, we recommend using the latest version
                    of Chrome.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div>
            <h3 className="mb-6 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <svg
                className="mr-3 h-6 w-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                ></path>
              </svg>
              Billing & Plans
            </h3>

            <div className="space-y-4">
              <details className="group rounded-lg border border-gray-200 bg-white p-5 shadow-md transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  <span>What payment methods do you accept?</span>
                  <svg
                    className="h-6 w-6 transform text-purple-600 transition-transform duration-300 group-open:rotate-180 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <div className="mt-3 space-y-2 leading-relaxed text-gray-700 dark:text-gray-300">
                  <p>We accept all major payment methods:</p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Credit/Debit Cards (Visa, Mastercard, Amex)</li>
                    <li>PayPal</li>
                    <li>Bank Transfers (for annual plans)</li>
                    <li>Apple Pay & Google Pay</li>
                  </ul>
                  <p className="pt-2">
                    All payments are processed securely with 256-bit encryption.
                  </p>
                </div>
              </details>

              <details className="group rounded-lg border border-gray-200 bg-white p-5 shadow-md transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  <span>Can I change or cancel my plan?</span>
                  <svg
                    className="h-6 w-6 transform text-purple-600 transition-transform duration-300 group-open:rotate-180 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <div className="mt-3 space-y-2 leading-relaxed text-gray-700 dark:text-gray-300">
                  <p>Yes, you can change or cancel your plan anytime:</p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Upgrade/downgrade from your account settings</li>
                    <li>
                      Cancellations take effect at the end of your billing
                      period
                    </li>
                    <li>No long-term contracts or cancellation fees</li>
                  </ul>
                  <p className="pt-2">
                    Changes to your plan are prorated based on your billing
                    cycle.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-white p-8 text-center shadow-md dark:bg-gray-800">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-purple-600 dark:text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Still need help?
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Our support team is available 24/7
            </p>
            <button className="rounded-lg bg-purple-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-purple-700">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaqWithLabelButton() {
  return (
    <div className="bg-gray-50 transition-colors duration-200 dark:bg-gray-900">
      <div className="container mx-auto px-2 py-5">
        <header className="mb-12 text-center">
          <p className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </p>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about our product and services.
          </p>
        </header>

        <div className="mx-auto mb-12 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 bg-white px-5 py-3 pr-12 text-gray-900 transition-all focus:border-transparent focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
            <svg
              className="absolute top-3.5 right-4 h-5 w-5 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <button className="bg-primary-500 rounded-full px-4 py-2 font-medium text-white">
            All Questions
          </button>
          <button className="rounded-full bg-gray-200 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            Getting Started
          </button>
          <button className="rounded-full bg-gray-200 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            Account
          </button>
          <button className="rounded-full bg-gray-200 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            Billing
          </button>
          <button className="rounded-full bg-gray-200 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            Technical
          </button>
        </div>

        <div className="mx-auto max-w-5xl space-y-6">
          <div className="overflow-hidden rounded-xl bg-white shadow-xl transition-all dark:bg-gray-800">
            <div className="border-b border-gray-200 p-3 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Getting Started
              </h3>
            </div>
            <div className="space-y-4 p-3">
              <details className="group rounded-lg border border-gray-200 bg-gray-100 p-5 shadow-md transition-all dark:border-gray-600 dark:bg-gray-700">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  <span>What is Tailwind CSS?</span>
                  <svg
                    className="text-primary-500 h-6 w-6 transform transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12h-12m6-6v12"
                      className="group-open:hidden"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                      className="hidden group-open:block"
                    />
                  </svg>
                </summary>
                <div className="mt-3 space-y-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  <p>
                    Tailwind CSS is a utility-first CSS framework packed with
                    classes like{" "}
                    <code className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-600">
                      flex
                    </code>
                    ,{" "}
                    <code className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-600">
                      pt-4
                    </code>
                    ,{" "}
                    <code className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-600">
                      text-center
                    </code>{" "}
                    and{" "}
                    <code className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-600">
                      rotate-90
                    </code>{" "}
                    that can be composed to build any design, directly in your
                    markup.
                  </p>
                  <p>
                    Unlike other CSS frameworks like Bootstrap or Materialize,
                    Tailwind doesn't come with predefined components. Instead,
                    it gives you the building blocks to create your own unique
                    designs.
                  </p>
                </div>
              </details>

              <details className="group rounded-lg border border-gray-200 bg-gray-100 p-5 shadow-md transition-all dark:border-gray-600 dark:bg-gray-700">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  <span>How do I install Tailwind CSS?</span>
                  <svg
                    className="text-primary-500 h-6 w-6 transform transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12h-12m6-6v12"
                      className="group-open:hidden"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                      className="hidden group-open:block"
                    />
                  </svg>
                </summary>
                <div className="mt-3 space-y-2 leading-relaxed text-gray-700 dark:text-gray-300">
                  <p>You can install Tailwind CSS via npm:</p>
                  <pre className="overflow-x-auto rounded bg-gray-200 p-3 text-sm dark:bg-gray-600">
                    <code>
                      npm install -D tailwindcss postcss autoprefixer npx
                      tailwindcss init
                    </code>
                  </pre>
                  <p>Or via CDN (for quick prototyping only):</p>
                  <pre className="overflow-x-auto rounded bg-gray-200 p-3 text-sm dark:bg-gray-600">
                    <code>
                      &lt;script
                      src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
                    </code>
                  </pre>
                </div>
              </details>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-white shadow-xl transition-all dark:bg-gray-800">
            <div className="border-b border-gray-200 p-3 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Account & Security
              </h3>
            </div>
            <div className="space-y-4 p-3">
              <details className="group rounded-lg border border-gray-200 bg-gray-100 p-5 shadow-md transition-all dark:border-gray-600 dark:bg-gray-700">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  <span>How do I reset my password?</span>
                  <svg
                    className="text-primary-500 h-6 w-6 transform transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12h-12m6-6v12"
                      className="group-open:hidden"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                      className="hidden group-open:block"
                    />
                  </svg>
                </summary>
                <div className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  <p>To reset your password:</p>
                  <ol className="mt-2 list-decimal space-y-2 pl-5">
                    <li>Go to the login page and click "Forgot password"</li>
                    <li>
                      Enter the email address associated with your account
                    </li>
                    <li>Check your email for a password reset link</li>
                    <li>
                      Click the link and follow the instructions to set a new
                      password
                    </li>
                  </ol>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    If you don't receive the email, please check your spam
                    folder or contact support.
                  </p>
                </div>
              </details>

              <details className="group rounded-lg border border-gray-200 bg-gray-100 p-5 shadow-md transition-all dark:border-gray-600 dark:bg-gray-700">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  <span>How do I enable two-factor authentication?</span>
                  <svg
                    className="text-primary-500 h-6 w-6 transform transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12h-12m6-6v12"
                      className="group-open:hidden"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                      className="hidden group-open:block"
                    />
                  </svg>
                </summary>
                <div className="mt-3 space-y-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  <p>To enable two-factor authentication (2FA):</p>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>Log in to your account</li>
                    <li>Go to Account Settings → Security</li>
                    <li>Click "Enable Two-Factor Authentication"</li>
                    <li>
                      Scan the QR code with your authenticator app (like Google
                      Authenticator or Authy)
                    </li>
                    <li>Enter the 6-digit code from your app to verify</li>
                    <li>Save your backup codes in a secure place</li>
                  </ol>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We strongly recommend enabling 2FA for added security.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-white shadow-xl transition-all dark:bg-gray-800">
            <div className="border-b border-gray-200 p-3 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Billing & Payments
              </h3>
            </div>
            <div className="space-y-4 p-3">
              <details className="group rounded-lg border border-gray-200 bg-gray-100 p-5 shadow-md transition-all dark:border-gray-600 dark:bg-gray-700">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  <span>What payment methods do you accept?</span>
                  <svg
                    className="text-primary-500 h-6 w-6 transform transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12h-12m6-6v12"
                      className="group-open:hidden"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                      className="hidden group-open:block"
                    />
                  </svg>
                </summary>
                <div className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  <p>We accept the following payment methods:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      All major credit cards (Visa, MasterCard, American
                      Express, Discover)
                    </li>
                    <li>PayPal</li>
                    <li>Apple Pay</li>
                    <li>Google Pay</li>
                    <li>Bank transfers (for annual plans)</li>
                  </ul>
                  <p className="mt-3">
                    All payments are processed securely with 256-bit SSL
                    encryption.
                  </p>
                </div>
              </details>

              <details className="group rounded-lg border border-gray-200 bg-gray-100 p-5 shadow-md transition-all dark:border-gray-600 dark:bg-gray-700">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 transition-all dark:text-white [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  <span>Can I cancel my subscription anytime?</span>
                  <svg
                    className="text-primary-500 h-6 w-6 transform transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12h-12m6-6v12"
                      className="group-open:hidden"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                      className="hidden group-open:block"
                    />
                  </svg>
                </summary>
                <div className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  <p>
                    Yes, you can cancel your subscription at any time. Here's
                    what you need to know:
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>
                      Monthly plans: Cancel anytime and you won't be charged for
                      the next billing cycle
                    </li>
                    <li>
                      Annual plans: You'll continue to have access until the end
                      of your current billing period
                    </li>
                    <li>No cancellation fees or penalties</li>
                  </ul>
                  <p className="mt-3">To cancel:</p>
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>Go to your Account Settings</li>
                    <li>Click on "Billing"</li>
                    <li>Select "Cancel Subscription"</li>
                    <li>Follow the prompts to confirm</li>
                  </ol>
                </div>
              </details>
            </div>
          </div>
        </div>

        <div className="bg-primary-500 mx-auto mt-5 max-w-5xl rounded-xl p-3 text-black dark:text-white">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 md:mb-0">
              <h3 className="mb-2 text-2xl font-bold">Still have questions?</h3>
              <p className="opacity-90">Our support team is here to help you.</p>
            </div>
            <button className="text-primary-500 rounded-lg dark:bg-gray-700 dark:bg-black px-6 py-3 font-medium transition-colors hover:bg-gray-100">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
