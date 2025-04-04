export function SimpleLoginForm(){
  return(
    <div className="flex items-center  m-4 justify-center bg-gray-50 px-4 dark:bg-gray-900">
  <div className="w-full max-w-sm rounded-md bg-white p-6 shadow dark:bg-gray-800">
    <h3 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white">Welcome Back</h3>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email/Username</label>
        <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="Enter your email or username" />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
          <a href="#" className="text-sm text-violet-600 hover:underline dark:text-violet-400">Forgot Password?</a>
        </div>
        <input type="password" className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="******" />
      </div>
      <div className="flex items-center">
        <input id="remember" type="checkbox" className="h-4 w-4 border-gray-300 text-violet-600 focus:ring-violet-500 dark:border-gray-600" />
        <label for="remember" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Remember me</label>
      </div>
      <button className="w-full rounded-md bg-violet-600 py-2 font-medium text-white  hover:bg-violet-700">Sign In</button>
    </form>
    <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
      Not registered?
      <a href="#" className="text-violet-600 hover:underline dark:text-violet-400">Create an account</a>
    </p>
  </div>
</div>

  )
}

export function AdvanedLoginFormPage(){
  return(
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 dark:from-gray-900 dark:to-gray-800">
  <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
    <div className="mb-8 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-violet-600 dark:text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
      <h3 className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">Welcome Back</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Sign in to access your account</p>
    </div>

    <form className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input type="email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pr-4 pl-10 text-gray-900 focus:border-violet-500 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-violet-500 dark:focus:ring-violet-500" placeholder="you@example.com" required />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
          <a href="#" className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-400">Forgot password?</a>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <input type="password" className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pr-4 pl-10 text-gray-900 focus:border-violet-500 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-violet-500 dark:focus:ring-violet-500" placeholder="••••••••" required />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700" />
          <label for="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
        </div>
      </div>

      <button type="submit" className="w-full transform rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-3 font-medium text-white shadow-md  duration-300 hover:from-violet-700 hover:to-blue-600 hover:shadow-lg focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800">Sign In</button>
    </form>

    <div className="mt-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400">Or continue with</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <a href="#" className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm  hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clip-rule="evenodd" />
          </svg>
          <span className="ml-2">GitHub</span>
        </a>

        <a href="#" className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm  hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
          </svg>
          <span className="ml-2">Twitter</span>
        </a>
      </div>

      <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
        Don't have an account?
        <a href="#" className="font-medium text-violet-600 hover:underline dark:text-violet-400">Sign up</a>
      </p>
    </div>
  </div>
</div>

  )
}

export function LoginWith3SocialMeida(){
  return(
    <div className="flex p-4 items-center justify-center bg-gray-100 px-4 font-sans dark:bg-gray-950">
  <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
    <h3 className="mb-6 text-center text-3xl font-bold text-gray-800 dark:text-white">Login</h3>
    <form className="space-y-6">
      <div><label for="emailOrUsername" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email / Username</label> <input type="text" id="emailOrUsername" className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5  duration-150 ease-in-out focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-blue-500" placeholder="you@example.com" /></div>
      <div>
        <div className="mb-1 flex items-center justify-between"><label for="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label> <a href="#" className="text-sm text-violet-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300">Forgot password?</a></div>
        <input type="password" id="password" className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5  duration-150 ease-in-out focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-blue-500" placeholder="••••••••" />
      </div>
      <div className="flex items-center">
        <input type="checkbox" id="remember_me" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-0 dark:border-gray-600 dark:bg-gray-700 dark:text-blue-500 dark:focus:ring-blue-500 dark:focus:ring-offset-gray-800" />
        <label for="remember_me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
      </div>
      <button type="submit" className="w-full rounded-lg bg-violet-600 py-2.5 font-semibold text-white  duration-150 ease-in-out hover:bg-violet-700 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500">Sign In</button>
    </form>

    <div className="my-6 flex items-center">
      <div className="h-px flex-grow bg-gray-300 dark:bg-gray-600"></div>
      <span className="mx-4 text-sm font-medium text-gray-500 dark:text-gray-400">OR</span>
      <div className="h-px flex-grow bg-gray-300 dark:bg-gray-600"></div>
    </div>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <button aria-label="Login with Google" className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 p-2.5 text-sm font-medium text-gray-700  hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-800">
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.712,34.438,44,28.096,44,20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        </svg>
        <span>Google</span>
      </button>
      <button aria-label="Login with Facebook" className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 p-2.5 text-sm font-medium text-gray-700  hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-800">
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
        </svg>
        <span>Facebook</span>
      </button>
      <button aria-label="Login with Github" className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 p-2.5 text-sm font-medium text-gray-700  hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-800">
        <svg className="h-5 w-5 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386C24 5.373 18.627 0 12 0z"></path>
        </svg>
        <span>Github</span>
      </button>
    </div>

    <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
      Don't have an account?
      <a href="#" className="font-medium text-violet-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300">Sign up</a>
    </p>
  </div>
</div>

  )
}

export function LoginPageWithImage(){
  return(
    <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
  <div className="w-full overflow-hidden bg-white shadow-xl dark:bg-gray-800">

    <div className="flex flex-wrap">
       <div className="relative w-full md:w-1/2">
        <img src="/template/loginImage.png" alt="Login Visual" className="h-full w-full object-contain" />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-3">
          <div>
            <h3 className="text-2xl font-bold text-white">Welcome Back</h3>
            <p className="mt-1 text-gray-200">Sign in to access your dashboard</p>
          </div>
        </div>
      </div>

       <div className="flex flex-col w-full justify-center p-4 md:w-1/2">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-violet-100 p-3 dark:bg-violet-900/30">
            <svg className="h-10 w-10 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
            </svg>
          </div>
        </div>

        <h3 className="mb-2 text-center text-2xl font-bold text-gray-800 dark:text-white">Account Login</h3>
        <p className="mb-6 text-center text-gray-500 dark:text-gray-400">Enter your credentials to continue</p>

        <form className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <input type="email" className="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="your@email.com" required />
            </div>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <a href="#" className="text-sm text-violet-600 hover:underline dark:text-violet-400">Forgot password?</a>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <input type="password" className="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="••••••••" required />
            </div>
          </div>

          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700" />
            <label for="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
          </div>

          <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 px-4 py-3 font-medium text-white shadow  duration-300 hover:from-violet-700 hover:to-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800">Sign In</button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm  hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clip-rule="evenodd"></path>
              </svg>
              <span className="ml-2">GitHub</span>
            </a>

            <a href="#" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm  hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
              <span className="ml-2">Twitter</span>
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account?
          <a href="#" className="font-medium text-violet-600 hover:underline dark:text-violet-400">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export function MostAdvanedLoginPage(){
  return(
    <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
  <div className="w-full overflow-hidden  bg-white shadow-2xl dark:bg-gray-800">
    <div className="flex flex-col lg:flex-row">
       <div className="relative hidden lg:block lg:w-1/2">
        <img src="/template/login.png" alt="Login Visual" className="h-full w-full object-contain" />
        <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 via-transparent to-transparent p-8">
          <div>
            <div className="flex items-center">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12..."></path>
              </svg>
              <span className="ml-2 text-xl font-bold text-black dark:text-white">Madhuranjan UI</span>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">Welcome Back</h3>
            <p className="mt-2 text-gray-200">Join thousands of satisfied users</p>
            <div className="mt-6 flex items-center space-x-2">
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                <img className="h-8 w-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                <img className="h-8 w-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" />
              </div>
              <span className="text-sm text-gray-200">+2,500 active users</span>
            </div>
          </div>
        </div>
      </div>

       <div className="p-8 sm:p-10 lg:w-1/2">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Sign in to your account</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Access your dashboard and more</p>
        </div>

         <div className="mb-6 grid grid-cols-3 gap-2 sm:grid-cols-6">
           <a href="#" className="flex justify-center rounded-md p-2   hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </a>

           <a href="#" className="flex justify-center rounded-md p-2  hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866.549 3.921 1.453l2.814-2.814C17.503 2.332 15.139 1.5 12.545 1.5c-6.086 0-11 4.914-11 11s4.914 11 11 11c9.243 0 11.086-7.615 10.405-11.761H12.545z" />
            </svg>
          </a>

           <a href="#" className="flex justify-center rounded-md p-2   hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.323-.595 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z" />
            </svg>
          </a>

           <a href="#" className="flex justify-center rounded-md p-2  hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>

            <a href="#" className="flex justify-center rounded-md p-2  hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

           <a href="#" className="flex justify-center rounded-md p-2  hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400">Or with email</span>
          </div>
        </div>

        <form className="space-y-5">
           <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email address</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <input type="email" className="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="your@email.com" required />
            </div>
          </div>

           <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <a href="#" className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-400">Forgot password?</a>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <input type="password" className="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="••••••••" required />
            </div>
          </div>

           <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700" />
              <label for="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
            </div>
            <div className="flex items-center">
              <input id="two-factor" name="two-factor" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700" />
              <label for="two-factor" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Use 2FA</label>
            </div>
          </div>

           <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 px-4 py-3 font-medium text-white shadow  duration-300 hover:from-violet-700 hover:to-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800">Sign In</button>

           <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Don't have an account? <a href="#" className="font-medium text-violet-600 hover:underline dark:text-violet-400">Sign up</a></p>
            <p className="mt-1">or <a href="#" className="font-medium text-violet-600 hover:underline dark:text-violet-400">continue as guest</a></p>
          </div>
        </form>

         <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">SSL Secure</span>
          </div>
          <div className="flex items-center">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
            </svg>
            <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">Encrypted</span>
          </div>
          <div className="flex items-center">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"></path>
            </svg>
            <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">GDPR Compliant</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}