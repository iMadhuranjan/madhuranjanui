export const simpleRegsitationFormcode=`<div class="flex min-h-screen items-center justify-center bg-gray-100 px-4 font-sans dark:bg-gray-950">
  <div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800 dark:shadow-lg dark:shadow-black/30">
    <h2 class="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">Create an Account</h2>
    <form class="space-y-5">
      <div>
        <label for="full_name" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
        <input type="text" id="full_name" class="mt-1 w-full rounded-lg border border-gray-300 p-2.5 transition duration-150 ease-in-out focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-violet-400" placeholder="John Doe" />
      </div>
      <div>
        <label for="email" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input type="email" id="email" class="mt-1 w-full rounded-lg border border-gray-300 p-2.5 transition duration-150 ease-in-out focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-violet-400" placeholder="you@example.com" />
      </div>
      <div>
        <label for="password" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
        <input type="password" id="password" class="mt-1 w-full rounded-lg border border-gray-300 p-2.5 transition duration-150 ease-in-out focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-violet-400" placeholder="••••••••" />
      </div>
      <div>
        <label for="confirm_password" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
        <input type="password" id="confirm_password" class="mt-1 w-full rounded-lg border border-gray-300 p-2.5 transition duration-150 ease-in-out focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-violet-400" placeholder="••••••••" />
      </div>
      <button type="submit" class="w-full rounded-lg bg-violet-600 py-2.5 font-semibold text-white transition duration-150 ease-in-out hover:bg-violet-700 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800">Sign Up</button>
    </form>
    <p class="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
      Already have an account?
      <a href="#" class="font-medium text-violet-600 hover:underline dark:text-violet-400 dark:hover:text-violet-300">Login</a>
    </p>
  </div>
</div>
`
export const registerWithIconCode=` <div class="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8 dark:from-gray-900 dark:to-gray-800">
      <div class="w-full max-w-md overflow-hidden rounded-xl bg-white p-0 shadow-lg dark:bg-gray-800">
        <div class="h-2 w-full bg-gradient-to-r from-violet-600 to-blue-500"></div>

        <div class="p-6 sm:p-8">
          <div class="mb-4 flex justify-center">
            <div class="rounded-full bg-violet-100 p-3 dark:bg-violet-900/30">
              <svg
                class="h-8 w-8 text-violet-600 dark:text-violet-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                ></path>
              </svg>
            </div>
          </div>

          <h2 class="mb-2 text-center text-2xl font-bold text-gray-800 dark:text-white">
            Create your account
          </h2>
          <p class="mb-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Join our community today
          </p>

          <form class="space-y-5">
            <div>
              <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Username
              </label>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  class="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                  placeholder="Your username"
                  required
                />
              </div>
            </div>

            <div>
              <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-gray-400"
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
                </div>
                <input
                  type="email"
                  class="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="password"
                  class="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                  placeholder="••••••••"
                  required
                />
              </div>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Minimum 8 characters with numbers and symbols
              </p>
            </div>

            <div class="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700"
                required
              />
              <label
                for="terms"
                class="ml-2 block text-sm text-gray-700 dark:text-gray-300"
              >
                {" "}
                I agree to the{" "}
                <a
                  href="#"
                  class="text-violet-600 hover:underline dark:text-violet-400"
                >
                  Terms
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  class="text-violet-600 hover:underline dark:text-violet-400"
                >
                  Privacy Policy
                </a>{" "}
              </label>
            </div>

            <button
              type="submit"
              class="w-full rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 px-4 py-3 font-medium text-white shadow transition duration-300 hover:from-violet-700 hover:to-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800"
            >
              Create Account
            </button>
          </form>

          <div class="relative my-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="bg-white px-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                Or sign up with
              </span>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-3">
            <button class="flex items-center justify-center rounded-lg border border-gray-300 p-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <svg class="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </button>

            <button class="flex items-center justify-center rounded-lg border border-gray-300 p-2 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <svg class="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.323-.595 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"
                  fill="#1877F2"
                />
              </svg>
            </button>

            <button class="flex items-center justify-center rounded-lg border border-gray-300 p-2  hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </button>
          </div>
          <p class="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?
            <a
              href="#"
              class="font-medium text-violet-600 hover:underline dark:text-violet-400"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>`

    export const RegsiterWithAddressCode=`<div class="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8 dark:from-gray-900 dark:to-gray-800">
  <div class="w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800">
     <div class="h-2 w-full bg-gradient-to-r from-violet-600 to-blue-500"></div>

    <div class="p-6 sm:p-8">
       <div class="mb-4 flex justify-center">
        <div class="rounded-full bg-violet-100 p-3 dark:bg-violet-900/30">
          <svg class="h-8 w-8 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
          </svg>
        </div>
      </div>

      <h2 class="mb-2 text-center text-2xl font-bold text-gray-800 dark:text-white">Create Your Account</h2>
      <p class="mb-6 text-center text-sm text-gray-500 dark:text-gray-400">Join our community today</p>

      <form class="space-y-5">
         <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
            <div class="relative">
              <input type="text" class="block w-full rounded-lg border border-gray-300 p-2.5 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="John" required />
            </div>
          </div>
          <div>
            <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
            <div class="relative">
              <input type="text" class="block w-full rounded-lg border border-gray-300 p-2.5 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="Doe" required />
            </div>
          </div>
        </div>

         <div>
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <input type="email" class="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="your@email.com" required />
          </div>
        </div>

         <div>
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <input type="tel" class="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="+1 555 123 4567" required />
          </div>
        </div>

         <div>
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Street Address</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <input type="text" class="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="1234 Main St" required />
          </div>
        </div>

         <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">City</label>
            <input type="text" class="block w-full rounded-lg border border-gray-300 p-2.5 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="Springfield" required />
          </div>
          <div>
            <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Country</label>
            <select class="block w-full rounded-lg border border-gray-300 p-2.5 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100">
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
             </select>
          </div>
        </div>

         <div>
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <input type="password" class="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="••••••••" required />
          </div>
          <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Minimum 8 characters with numbers and symbols</p>
        </div>

         <div class="flex items-center">
          <input id="terms" name="terms" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700" required />
          <label for="terms" class="ml-2 block text-sm text-gray-700 dark:text-gray-300"> I agree to the <a href="#" class="text-violet-600 hover:underline dark:text-violet-400">Terms</a> and <a href="#" class="text-violet-600 hover:underline dark:text-violet-400">Privacy Policy</a> </label>
        </div>

         <button type="submit" class="w-full rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 px-4 py-3 font-medium text-white shadow transition duration-300 hover:from-violet-700 hover:to-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800">Create Account</button>

         <p class="text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?
          <a href="#" class="font-medium text-violet-600 hover:underline dark:text-violet-400">Sign in</a>
        </p>
      </form>
    </div>
  </div>
</div>
`

export const RegisterWithTermCodetionCode=`<div class="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
  <div class="w-full max-w-md rounded-md bg-white p-6 shadow dark:bg-gray-800">
    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white">Register Your Account</h2>
    <form class="space-y-4">
      <div>
        <label class="block text-sm text-gray-700 dark:text-gray-300">Username</label>
        <input type="text" class="mt-1 w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="Username" />
      </div>
      <div>
        <label class="block text-sm text-gray-700 dark:text-gray-300">Email</label>
        <input type="email" class="mt-1 w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="email@example.com" />
      </div>
      <div>
        <label class="block text-sm text-gray-700 dark:text-gray-300">Password</label>
        <input type="password" class="mt-1 w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="******" />
      </div>
      <div class="flex items-center">
        <input type="checkbox" id="terms" class="h-4 w-4 border-gray-300 text-violet-600 focus:ring-violet-500 dark:border-gray-600" />
        <label for="terms" class="ml-2 text-sm text-gray-700 dark:text-gray-300"
          >I agree to the <a href="#" class="text-violet-600 hover:underline dark:text-violet-400">Terms of Service</a> and
          <a href="#" class="text-violet-600 hover:underline dark:text-violet-400">Privacy Policy</a>
        </label>
      </div>
      <button class="w-full rounded-md bg-violet-600 py-2 font-semibold text-white hover:bg-violet-700">Sign Up</button>
    </form>
    <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
      Already have an account?
      <a href="#" class="text-violet-600 hover:underline dark:text-violet-400">Login</a>
    </p>
  </div>
</div>
`

export const RegisterWithImageCode=` <div class="flex min-h-screen flex-col bg-white md:flex-row dark:bg-gray-900">
   <div class="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:w-1/2 md:p-12 dark:from-gray-900 dark:to-gray-800">
    <div class="w-full max-w-md">
       <div class="mb-8 flex justify-center">
        <div class="rounded-xl bg-violet-100 p-3 dark:bg-violet-900/30">
          <svg class="h-10 w-10 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
          </svg>
        </div>
      </div>

      <h1 class="mb-2 text-center text-3xl font-bold text-gray-800 dark:text-white">Create Your Account</h1>
      <p class="mb-8 text-center text-gray-500 dark:text-gray-400">Join our community today</p>

       <div class="mb-6 grid grid-cols-3 gap-3">
        <button class="flex items-center justify-center rounded-lg border border-gray-300 p-3 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700">
          <svg class="h-5 w-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
        </button>
        <button class="flex items-center justify-center rounded-lg border border-gray-300 p-3 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.323-.595 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z" />
          </svg>
        </button>
        <button class="flex items-center justify-center rounded-lg border border-gray-300 p-3 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="#181717">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </button>
      </div>

      <div class="relative mb-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300 dark:border-gray-700"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="bg-gray-50 px-2 text-sm text-gray-500 dark:bg-gray-900 dark:text-gray-400">Or with email</span>
        </div>
      </div>

       <form class="space-y-5">
        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <input type="text" class="block w-full rounded-lg border border-gray-300 p-3 pl-10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" placeholder="John Doe" required />
          </div>
        </div>

        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <input type="email" class="block w-full rounded-lg border border-gray-300 p-3 pl-10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" placeholder="your@email.com" required />
          </div>
        </div>

        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <input type="password" class="block w-full rounded-lg border border-gray-300 p-3 pl-10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" placeholder="••••••••" required />
          </div>
          <div class="mt-2 flex items-center space-x-2">
            <div class="h-1 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div class="h-full w-1/3 bg-red-500"></div>
            </div>
            <span class="text-xs text-gray-500 dark:text-gray-400">Weak</span>
          </div>
        </div>

        <div class="flex items-center">
          <input id="terms" name="terms" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 dark:border-gray-700 dark:bg-gray-800" required />
          <label for="terms" class="ml-2 block text-sm text-gray-700 dark:text-gray-300"> I agree to the <a href="#" class="text-violet-600 hover:underline dark:text-violet-400">Terms</a> and <a href="#" class="text-violet-600 hover:underline dark:text-violet-400">Privacy Policy</a> </label>
        </div>

        <button type="submit" class="w-full rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 px-4 py-3 font-medium text-white shadow transition duration-300 hover:from-violet-700 hover:to-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800">Create Account</button>
      </form>

      <p class="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        Already have an account?
        <a href="#" class="font-medium text-violet-600 hover:underline dark:text-violet-400">Sign in</a>
      </p>
    </div>
  </div>

   <div class="relative hidden md:block md:w-1/2">
    <img src="/template/register.png" alt="Registration Visual" class="h-full w-full object-cover" />
    <div class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-8">
      <div class="max-w-md">
        <h3 class="text-2xl font-bold text-white">Welcome to Our Community</h3>
        <p class="mt-2 text-gray-200">Join thousands of satisfied users who are already benefiting from our services.</p>
        <div class="mt-4 flex items-center space-x-2">
          <div class="flex -space-x-2">
            <img class="h-8 w-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
            <img class="h-8 w-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
            <img class="h-8 w-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" />
          </div>
          <span class="text-sm text-gray-200">+2,500 active users</span>
        </div>
      </div>
    </div>
  </div>
</div>
`