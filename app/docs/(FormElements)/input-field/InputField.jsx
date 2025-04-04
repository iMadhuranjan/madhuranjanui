export function SimpleInputField() {
  return (
    <div className="flex items-center justify-center p-5">
      <div className="w-full max-w-md">
        <label
          for="simple-input"
          className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          {" "}
          Your Name{" "}
        </label>
        <input
          type="text"
          id="simple-input"
          placeholder="Enter your name"
          className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export function InputHeigt() {
  return (
    <div className="p-2 md:p-5 flex justify-center items-center">
      <div className="w-full max-w-md space-y-4">
        {/* <!-- Small Input --> */}
        <div>
          <label
            for="input-sm"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {" "}
            Small Input{" "}
          </label>
          <input
            type="text"
            id="input-sm"
            placeholder="Small"
            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-900 placeholder-gray-400  focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500"
          />
        </div>

        {/* <!-- Medium Input --> */}
        <div>
          <label
            for="input-md"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {" "}
            Medium Input{" "}
          </label>
          <input
            type="text"
            id="input-md"
            placeholder="Medium"
            className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400  focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500"
          />
        </div>

        {/* <!-- Large Input --> */}
        <div>
          <label
            for="input-lg"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {" "}
            Large Input{" "}
          </label>
          <input
            type="text"
            id="input-lg"
            placeholder="Large"
            className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400  focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500"
          />
        </div>

        {/* <!-- Extra Large Input --> */}
        <div>
          <label
            for="input-xl"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {" "}
            Extra Large Input{" "}
          </label>
          <input
            type="text"
            id="input-xl"
            placeholder="Extra Large"
            className="block w-full rounded-md border border-gray-300 bg-white px-5 py-4 text-base text-gray-900 placeholder-gray-400  focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export function InputWithUserNameAndPasswordIcon() {
  return (
    <div className="p-2 flex justify-center items-center md:p-5">
      <div className="w-full max-w-md space-y-4">
        {/* <!-- Username Input with Icon --> */}
        <div>
          <label
            for="username"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {" "}
            Username{" "}
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
              {/* <!-- Heroicons: User --> */}
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0H4.5z"
                />
              </svg>
            </span>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-4 pl-10 text-sm text-gray-900 placeholder-gray-400  focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500"
            />
          </div>
        </div>

        {/* <!-- Password Input with Icon --> */}
        <div>
          <label
            for="password"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {" "}
            Password{" "}
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
              {/* <!-- Heroicons: Lock Closed --> */}
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V7.875a4.5 4.5 0 10-9 0V10.5M5.25 10.5h13.5v9.375a1.125 1.125 0 01-1.125 1.125H6.375a1.125 1.125 0 01-1.125-1.125V10.5z"
                />
              </svg>
            </span>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-4 pl-10 text-sm text-gray-900 placeholder-gray-400  focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DisabledInputField() {
  return (
    <div className="flex justify-center items-center p-2 md:p-5">
      <div className="w-full max-w-md space-y-4">
        <div>
          <label
            for="disabled-text"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {" "}
            Disabled Text Input{" "}
          </label>
          <input
            type="text"
            id="disabled-text"
            placeholder="Can't edit this"
            disabled
            className="block w-full cursor-not-allowed rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-gray-500 placeholder-gray-400  dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-500"
          />
        </div>

        <div>
          <label
            for="disabled-password"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {" "}
            Disabled Password Input{" "}
          </label>
          <input
            type="password"
            id="disabled-password"
            placeholder="********"
            disabled
            className="block w-full cursor-not-allowed rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-gray-500 placeholder-gray-400  dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-500"
          />
        </div>
      </div>
    </div>
  );
}

export function InputFielValidation() {
  return (
    <div className="flex justify-center items-center p-2 md:p-5">
      <div className="w-full max-w-md space-y-6">
        <div>
          <label
            for="username-valid"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Username
          </label>
          <div className="relative">
            <input
              type="text"
              id="username-valid"
              placeholder="johndoe"
              className="block w-full rounded-md border border-green-500 dark:border-green-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 px-4 py-2 text-sm pr-10 transition"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-green-600 dark:text-green-400">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </div>
          <p className="mt-1 text-sm text-green-600 dark:text-green-400">
            Username is available.
          </p>
        </div>

        <div>
          <label
            for="email-error"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="email-error"
              placeholder="you@example.com"
              className="block w-full rounded-md border border-red-500 dark:border-red-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 px-4 py-2 text-sm pr-10 transition"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-red-600 dark:text-red-400">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z"
                />
              </svg>
            </span>
          </div>
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            Please enter a valid email address.
          </p>
        </div>
      </div>
    </div>
  );
}

export function FloatingLabelInputField() {
  return (
    <div className="flex items-center justify-center p-2 md:p-5">
      <div className="w-full max-w-md space-y-6">
        <div className="relative">
          <input
            type="text"
            id="floating-username"
            placeholder=" "
            className="peer block w-full appearance-none rounded-md border border-gray-300 bg-white px-4 pt-6 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-violet-500 focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          <label
            for="floating-username"
            className="absolute top-1 left-3 z-10 origin-[0] scale-75 transform text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-3 peer-focus:scale-75 peer-focus:text-violet-500 dark:text-gray-400 dark:peer-placeholder-shown:text-gray-500 dark:peer-focus:text-blue-400"
          >
            {" "}
            Username{" "}
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="floating-email"
            placeholder=" "
            className="peer block w-full appearance-none rounded-md border border-gray-300 bg-white px-4 pt-6 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-violet-500 focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          <label
            for="floating-email"
            className="absolute top-2 left-3 z-10 origin-[0] scale-75 transform text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-3 peer-focus:scale-75 peer-focus:text-violet-500 dark:text-gray-400 dark:peer-placeholder-shown:text-gray-500 dark:peer-focus:text-blue-400"
          >
            {" "}
            Email address{" "}
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            id="floating-password"
            placeholder=" "
            className="peer block w-full appearance-none rounded-md border border-gray-300 bg-white px-4 pt-6 pb-2 text-sm text-gray-900 placeholder-transparent focus:border-violet-500 focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          <label
            for="floating-password"
            className="absolute top-2 left-3 z-10 origin-[0] scale-75 transform text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-3 peer-focus:scale-75 peer-focus:text-violet-500 dark:text-gray-400 dark:peer-placeholder-shown:text-gray-500 dark:peer-focus:text-blue-400"
          >
            {" "}
            Password{" "}
          </label>
        </div>
      </div>
    </div>
  );
}

export function HelperInput() {
  return (
    <div className="flex items-center justify-center p-2 md:p-5">
      <div className="w-full max-w-md space-y-6">
        <div>
          <label
            for="helper-email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email address
          </label>
          <input
            type="email"
            id="helper-email"
            placeholder="you@example.com"
            className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:border-transparent"
          />
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            We'll never share your email with anyone else.
          </p>
        </div>

        <div>
          <label
            for="helper-password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="helper-password"
            placeholder="********"
            className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:border-transparent"
          />
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Must be at least 8 characters.
          </p>
        </div>
      </div>
    </div>
  );
}

export function PilledInput() {
  return (
    <div className="flex items-center justify-center p-2 md:p-5">
      <div className="w-full max-w-md space-y-6">
        <div>
          <input
            type="text"
            id="pill-input"
            placeholder="Search anything..."
            className="block w-full rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-5 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>
    </div>
  );
}

export function SearchINput() {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 p-2 md:p-5">
      <div className="w-full max-w-md">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 dark:text-gray-400">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-4.35-4.35m1.75-4.4a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>

          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-full border border-gray-300 bg-white py-3 pr-20 pl-10 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500"
          />

          <button
            type="submit"
            className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-violet-500 px-4  py-1.5 flex justify-center items-center mr-1 text-sm text-white transition hover:bg-violet-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      <div className="w-full max-w-md">
        <div className="relative rounded-md shadow-sm">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-4.35-4.35m1.75-4.4a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>

          <input
            type="text"
            placeholder="Search articles..."
            className="w-full rounded-md border border-gray-300 bg-white py-2 pr-24 pl-10 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500"
          />

          <button className="absolute inset-y-0 right-0 rounded-r-md bg-violet-500 px-4 text-sm text-white transition hover:bg-violet-600 dark:bg-blue-600 dark:hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export function NumberInputField() {
  return (
    <div className="flex justify-center items-center p-2 md:p-5">
      <div className="mb-6 w-full max-w-md">
        <label
          for="number-input"
          className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {" "}
          Quantity{" "}
        </label>
        <input
          type="number"
          id="number-input"
          placeholder="Enter a number"
          className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
export function TelInputField() {
  return (
    <div className="flex justify-center items-center p-2 md:p-5">
      <div className="w-full max-w-md mb-6">
        <label
          for="tel-input"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="tel-input"
          placeholder="+1 234 567 8900"
          className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}

export function UrlInputField() {
  return (
    <div className="flex justify-center items-center p-2 md:p-5">
      <div className="w-full max-w-md mb-6">
        <label
          for="url-input"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Website
        </label>
        <input
          type="url"
          id="url-input"
          placeholder="https://example.com"
          className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}
