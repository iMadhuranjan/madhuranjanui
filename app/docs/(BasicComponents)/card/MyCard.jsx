export function SimpleCard() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white dark:bg-gray-900 shadow-lg border m-4 rounded-sm p-6 max-w-sm">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Card Title
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          This is a simple card with a title and description using Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export function CardWithHoverAndIcon() {
  return (
    <div className="flex gap-3 md:gap-6 p-3 dark:bg-gray-800 flex-wrap justify-center items-center">
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 max-w-sm transition-transform transform hover:scale-105 hover:shadow-xl">
        <div className="flex items-center space-x-3">
          <svg
            className="w-8 h-8 text-blue-500 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              d="M13 16h-1v-4h-1m2 0h-1m2 0h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z"
            ></path>
          </svg>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Professional Card
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          This is a beautifully designed professional card with a smooth hover
          effect.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-400 transition">
          Learn More
        </button>
      </div>

      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 max-w-sm transition-transform transform hover:scale-105 hover:shadow-xl">
        <div className="flex items-center space-x-3">
          <svg
            className="w-8 h-8 text-green-500 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
            ></path>
          </svg>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Elegant Card
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          This card has a modern look with an engaging hover effect and dark
          mode support.
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 transition font-medium"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}

export function CardWithImageTitleDescritpion() {
  return (
    <div className="flex flex-wrap gap-3 py-6 px-2 bg-gray-100 dark:bg-gray-900 justify-center items-center">
      <div className="max-w-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg overflow-hidden shadow-md  hover:shadow-2xl transition-transform transform">
        <img
          src="/Image/Nature.jpg"
          alt="Tech News"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold">Latest Innovations in AI 2025</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Explore the groundbreaking advancements in artificial intelligence
            that are shaping the future.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 dark:hover:bg-blue-400 transition">
            Learn More →
          </button>
        </div>
      </div>

      <div className="max-w-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform">
        <img
          src="/Image/Nature.jpg"
          alt="Tech Trends"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold">Breaking: Web 3.0 Revolution</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Discover how Web 3.0 is changing the way we interact with the
            internet, from decentralization to blockchain.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition font-medium flex items-center gap-2"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}

export function HorizontalCard() {
  return (
    <div className="flex flex-col gap-8 py-6 px-3 bg-gray-100 dark:bg-gray-900 justify-center items-center">
      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-3xl w-full transform transition-all duration-300 hover:shadow-2xl">
        <img
          src="/Image/Nature.jpg"
          alt="AI Technology"
          className="w-full md:w-1/2 h-48 md:h-auto object-cover"
        />
        <div className="p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <svg
              className="w-8 h-8 text-blue-500 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M13 16h-1v-4h-1m2 0h-1m2 0h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z"
              ></path>
            </svg>
            The Future of AI
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Artificial intelligence is transforming industries by automating
            processes and reshaping human interactions with technology.
          </p>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg w-fit items-center gap-2 hover:bg-blue-600 dark:hover:bg-blue-400 transition-transform transform hover:scale-105">
            Learn More →
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-3xl w-full transform transition-all duration-300 hover:shadow-2xl">
        <img
          src="/Image/Nature2.jpg"
          alt="Blockchain Technology"
          className="w-full md:w-1/2 h-48 md:h-auto object-cover"
        />
        <div className="p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <svg
              className="w-8 h-8 text-green-500 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M9 12h6"
              ></path>
            </svg>
            The Power of Blockchain
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Decentralization and blockchain technology are revolutionizing
            digital security, finance, and data transparency.
          </p>
          <a
            href="#"
            className="mt-6 inline-block text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 transition-transform transform hover:scale-105 font-medium flex items-center gap-2"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}

export function BorderCard() {
  return (
    <div className="grid items-center justify-center gap-3 bg-gray-100 py-6 px-3 lg:grid-cols-2 dark:bg-gray-900">
      <div className="rounded-xl border-t-4 border-violet-500 bg-white p-6 text-gray-900 shadow-lg dark:border-blue-500 dark:bg-gray-800 dark:text-white">
        <h3 className="text-lg font-bold">Top Border Card</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          voluptas iusto itaque.
        </p>
        <a
          href="#"
          className="mt-4 inline-block font-medium text-violet-500 transition hover:text-violet-600 dark:text-blue-500 dark:hover:text-blue-400"
        >
          {" "}
          Card link →{" "}
        </a>
      </div>

      <div className="rounded-xl border-b-4 border-violet-500 bg-white p-6 text-gray-900 shadow-lg dark:border-blue-500 dark:bg-gray-800 dark:text-white">
        <h3 className="text-lg font-bold">Bottom Border Card</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
          consequuntur.
        </p>
        <a
          href="#"
          className="mt-4 inline-block font-medium text-violet-500 transition hover:text-violet-600 dark:text-blue-500 dark:hover:text-blue-400"
        >
          {" "}
          Card link →{" "}
        </a>
      </div>

      <div className="rounded-xl border-l-4 border-violet-500 bg-white p-6 text-gray-900 shadow-lg dark:border-blue-500 dark:bg-gray-800 dark:text-white">
        <h3 className="text-lg font-bold">Left Border Card</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, veniam?.
        </p>
        <a
          href="#"
          className="mt-4 inline-block font-medium text-violet-500 transition hover:text-violet-600 dark:text-blue-500 dark:hover:text-blue-400"
        >
          {" "}
          Card link →{" "}
        </a>
      </div>

      <div className="rounded-xl border-r-4 border-violet-500 bg-white p-6 text-gray-900 shadow-lg dark:border-blue-500 dark:bg-gray-800 dark:text-white">
        <h3 className="text-lg font-bold">Right Border card</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
          soluta!.
        </p>
        <a
          href="#"
          className="mt-4 inline-block font-medium text-violet-500 transition hover:text-violet-600 dark:text-blue-500 dark:hover:text-blue-400"
        >
          {" "}
          Card link →{" "}
        </a>
      </div>
    </div>
  );
}

export function AuthorCard() {
  return (
    <div className="w-fit md:max-w-sm my-5 mx-3 py-4 p-2 md:mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 flex flex-col justify-center items-center ">
      <div className="flex justify-center mt-6">
        <img
          className="w-24 h-24 rounded-full border-4 border-violet-500 dark:border-blue-500 object-cover"
          src="/avatar/girl.jpeg"
          alt="Author Profile Photo"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          John Doe
        </h3>
        <p className="text-sm text-violet-600 dark:text-blue-400 mt-1">
          Senior Software Engineer
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
          Passionate about building scalable web applications and contributing
          to open-source projects. Loves to share knowledge and mentor aspiring
          developers.
        </p>
      </div>

      <div className="flex justify-center space-x-4 pb-6">
        <a
          href="#"
          className="text-violet-600 dark:text-blue-400 hover:text-violet-800 dark:hover:text-blue-300 transition"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a
          href="#"
          className="text-violet-600 dark:text-blue-400 hover:text-violet-800 dark:hover:text-blue-300 transition"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.67-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.024 2.87.782.088-.608.342-1.024.624-1.304-2.18-.248-4.474-1.08-4.474-4.813 0-1.062.38-1.932 1.03-2.682-.103-.25-.447-1.28.098-2.68 0 0 .84-.273 2.75 1.022A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.022 2.747-1.022.547 1.398.202 2.43.1 2.68.65.75 1.03 1.618 1.03 2.682 0 3.741-2.29 4.564-4.466 4.813.352.304.664.75.664 1.513 0 1.09-.01 1.967-.01 2.235 0 .267.18.576.688.48C21.135 20.18 24 16.425 24 12.017 24 6.484 19.523 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="#"
          className="text-violet-600 dark:text-blue-400 hover:text-violet-800 dark:hover:text-blue-300 transition"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export function DotoCard() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="mx-2 md:max-w-md md:px-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-100 ">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            To-Do List
          </h3>
          <p className="text-sm text-violet-600 dark:text-blue-400 mt-1">
            Tasks to complete today
          </p>
        </div>

        <div className="p-6">
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="flex-shrink-0 w-5 h-5 bg-violet-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-violet-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              <span className="ml-3 text-gray-700 dark:text-gray-300">
                Complete project proposal
              </span>
            </li>

            <li className="flex items-center">
              <span className="flex-shrink-0 w-5 h-5 bg-violet-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-violet-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              <span className="ml-3 text-gray-700 dark:text-gray-300">
                Review team updates
              </span>
            </li>

            <li className="flex items-center">
              <span className="flex-shrink-0 w-5 h-5 bg-violet-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-violet-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              <span className="ml-3 text-gray-700 dark:text-gray-300">
                Prepare for client meeting
              </span>
            </li>

            <li className="flex items-center">
              <span className="flex-shrink-0 w-5 h-5 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              <span className="ml-3 text-gray-400 dark:text-gray-500 line-through">
                Send weekly report
              </span>
            </li>
          </ul>
        </div>

        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <button className="w-fit bg-violet-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-violet-700 dark:hover:bg-blue-600 transition">
            Add New Task
          </button>
        </div>
      </div>
    </div>
  );
}

export function PricingTableCard() {
  return (
    <div className="flex flex-wrap gap-3 py-6 px-3 ">
      <div className="mx-auto max-w-sm transform overflow-hidden rounded-xl bg-white shadow-2xl transition-all duration-300 dark:bg-gray-800">
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 text-center">
          <h3 className="text-2xl font-bold tracking-wide text-white">
            Basic Plan
          </h3>
          <p className="mt-1 text-sm text-pink-200">
            Perfect for getting started
          </p>
        </div>

        <div className="p-8">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900">
            <img
              src="https://img.icons8.com/ios-filled/100/ff6b6b/idea.png"
              alt="Basic Plan Icon"
              className="h-12 w-12 object-contain"
            />
          </div>

          <div className="mb-6 text-center">
            <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
              $09
              <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                / student <br />
                per month
              </span>
            </p>
          </div>

          <ul className="mb-8 space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center space-x-3">
              <span className="text-pink-600 dark:text-pink-400">&#10003;</span>
              <span>Consectetur adipiscing elit</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-pink-600 dark:text-pink-400">&#10003;</span>
              <span>Sed do eiusmod tempor</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-pink-600 dark:text-pink-400">&#10003;</span>
              <span>Incididunt dolore magna aliqua</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-pink-600 dark:text-pink-400">&#10003;</span>
              <span>Ut enim ad minim veniam</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-pink-600 dark:text-pink-400">&#10003;</span>
              <span>Quis nostrud exercitation</span>
            </li>
          </ul>

          <button className="w-full transform rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:from-pink-700 hover:to-purple-700">
            Start Free 7 Days Trial
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-sm transform overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 dark:bg-gray-800">
        <div className="p-6">
          <h3 className="mb-3 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
            Sprint Plan
          </h3>

          <div className="mb-4 text-center">
            <p className="text-5xl leading-tight font-extrabold text-gray-900 dark:text-gray-100">
              €3,490
              <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                /mo
              </span>
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Pause or cancel anytime • 7-day money-back guarantee
            </p>
          </div>

          <div className="mb-6 flex justify-center">
            <button className="w-full rounded-lg bg-green-500 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-green-600">
              Get Started
            </button>
          </div>

          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-center space-x-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200">
                ✓
              </div>
              <span>Two-week design sprint</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200">
                ✓
              </div>
              <span>Unlimited requests & revisions</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200">
                ✓
              </div>
              <span>Up to 1 meeting per week</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200">
                ✓
              </div>
              <span>Avg. 2-3 days delivery</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200">
                ✓
              </div>
              <span>Dev-ready Figma files</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200">
                ✓
              </div>
              <span>Slack Collaboration</span>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- ===== THIRD REFERENCE: SINGLE PLAN (ENTRY) ===== --> */}
      <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl">
        <div className="p-6">
          {/* <!-- Plan Title --> */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-3">
            Entry Plan
          </h3>

          {/* <!-- Price --> */}
          <div className="text-center mb-4">
            <p className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
              €90.75
              <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                /month
              </span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Includes 5 team member seats • Additional seats at €9.00/mo
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <button className="w-full py-3 px-6 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-200">
              Get Started
            </button>
          </div>

          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full">
                ✓
              </div>
              <span>5 Users included</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full">
                ✓
              </div>
              <span>Up to 30 user seats</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full">
                ✓
              </div>
              <span>1 Space included</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full">
                ✓
              </div>
              <span>Activity Log</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full">
                ✓
              </div>
              <span>Custom Roles</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ListWithImageCard() {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          Recent Customers
        </h3>
        <a
          href="#"
          className="text-violet-500 dark:text-blue-500 text-sm font-medium hover:underline"
        >
          View all
        </a>
      </div>

      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <div className="flex items-center space-x-3">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="Neil Sims"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Neil Sims
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                neil@email.com
              </p>
            </div>
          </div>
          <p className="text-gray-900 dark:text-gray-100 font-semibold">$320</p>
        </li>

        <li className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <div className="flex items-center space-x-3">
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="Bonnie Green"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Bonnie Green
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                bonnie@email.com
              </p>
            </div>
          </div>
          <p className="text-gray-900 dark:text-gray-100 font-semibold">
            $3,467
          </p>
        </li>

        <li className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <div className="flex items-center space-x-3">
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="Michael Gough"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Michael Gough
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                michael@email.com
              </p>
            </div>
          </div>
          <p className="text-gray-900 dark:text-gray-100 font-semibold">$67</p>
        </li>

        <li className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <div className="flex items-center space-x-3">
            <img
              src="https://i.pravatar.cc/40?img=4"
              alt="Lana Byrd"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Lana Byrd
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                lana@email.com
              </p>
            </div>
          </div>
          <p className="text-gray-900 dark:text-gray-100 font-semibold">$367</p>
        </li>

        <li className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <div className="flex items-center space-x-3">
            <img
              src="https://i.pravatar.cc/40?img=5"
              alt="Thomas Lean"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                Thomas Lean
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                thomas@email.com
              </p>
            </div>
          </div>
          <p className="text-gray-900 dark:text-gray-100 font-semibold">
            $2,367
          </p>
        </li>
      </ul>
    </div>
  );
}

export function StatsCard() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl space-y-3  shadow-lg">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6  text-center">
        <div className="transition-all duration-300 transform hover:scale-105">
          <h3 className="text-3xl font-extrabold text-violet-500 dark:text-blue-500">
            50K+
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Active Users
          </p>
        </div>

        <div className="transition-all duration-300 transform hover:scale-105">
          <h3 className="text-3xl font-extrabold text-violet-500 dark:text-blue-500">
            120M+
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Monthly Requests
          </p>
        </div>

        <div className="transition-all duration-300 transform hover:scale-105">
          <h3 className="text-3xl font-extrabold text-violet-500 dark:text-blue-500">
            10K+
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Business Partners
          </p>
        </div>

        <div className="transition-all duration-300 transform hover:scale-105">
          <h3 className="text-3xl font-extrabold text-violet-500 dark:text-blue-500">
            250+
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Team Members
          </p>
        </div>

        <div className="transition-all duration-300 transform hover:scale-105">
          <h3 className="text-3xl font-extrabold text-violet-500 dark:text-blue-500">
            5M+
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            API Integrations
          </p>
        </div>

        <div className="transition-all duration-300 transform hover:scale-105">
          <h3 className="text-3xl font-extrabold text-violet-500 dark:text-blue-500">
            99.9%
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Uptime Guarantee
          </p>
        </div>
      </div>
    </div>
  );
}

export function BlogPost() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-sm mx-2 md:max-w-md mx-auto bg-white dark:bg-gray-800 rounded-sm shadow-lg overflow-hidden transform transition-all duration-300 ">
        <img
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Blog Featured Image"
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
            #Technology
          </span>

          <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
            The Future of AI in Web Development
          </h3>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Artificial intelligence is transforming the way we build and
            interact with websites. Learn how AI tools are shaping the future of
            web development.
          </p>

          <div className="mt-6 flex items-center">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Author Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                John Doe
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                August 18, 2023
              </p>
            </div>
          </div>

          <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export function CardWithWarning() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="max-w-sm mx-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-100 hover:shadow-2xl">
        <div className="relative bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl">🔔</span>
            <span className="text-sm font-medium">
              Please update your card details.
            </span>
          </div>
          <input type="checkbox" id="close-alert" className="peer hidden" />
          <label
            for="close-alert"
            className="cursor-pointer text-white text-xl hover:text-red-200 transition-colors"
          >
            ✕
          </label>
        </div>

        <div className="p-6 peer-checked:hidden">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center space-x-3">
            <span className="text-2xl">🌐</span>
            <span>Custom CMS for Startups</span>
          </h3>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire others.
          </p>

          <a
            href="#"
            className="mt-5 inline-flex items-center text-violet-600 dark:text-blue-400 font-medium hover:text-violet-700 dark:hover:text-blue-300 transition-colors"
          >
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
}

export function ImacCard() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-lg w-80 mx-auto">
      <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 flex items-center justify-center">
        {/* <svg
          className="h-44 w-44 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <rect width="6" height="2" x="9" y="18" rx="1"></rect>
        </svg> */}
        <img src="/Image/Imac.jpg" className="h-40 w-full object-cover" />
      </div>
      <div className="mt-4">
        <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
          Up to 35% off
        </span>
      </div>
      <h3 className="mt-2 text-gray-800 dark:text-white font-semibold text-lg">
        Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
      </h3>
      <div className="flex items-center mt-2">
        <div className="flex text-yellow-400">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
          </svg>
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
          </svg>
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
          </svg>
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
          </svg>
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
          </svg>
        </div>
        <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">
          5.0 (455)
        </span>
      </div>
      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-2">
        <span className="flex items-center mr-4">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v2H3zm0 7h18v2H3zm0 7h18v2H3z" />
          </svg>
          Fast Delivery
        </span>
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.1 6.3L22 9l-5 4.8L18.2 22 12 18.5 5.8 22 7 13.8 2 9l6.9-1 3.1-6z" />
          </svg>
          Best Price
        </span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-2xl font-bold text-gray-800 dark:text-white">
          $1,699
        </span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20a2 2 0 1 1 4 0h6v2H4v-2h6zm2-16a6 6 0 0 1 6 6c0 2.2-1.2 4.1-3 5.2V16h-6v-2.8a5.9 5.9 0 0 1-3-5.2 6 6 0 0 1 6-6zM4 6h2a4 4 0 1 0 8 0h2a6 6 0 0 1-12 0z" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export function IphoneCard() {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-xl bg-gray-100 p-4 shadow-lg dark:bg-gray-800">
      <div className="flex flex-col items-center space-y-6 md:flex-row md:items-start sm:space-y-0 sm:space-x-6">
        <div className="flex h-52 w-full items-center justify-center rounded-lg bg-gray-300 sm:w-40 dark:bg-gray-700">
          <svg
            className="h-40 w-40 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <rect width="12" height="20" x="6" y="2" rx="3"></rect>
            <circle cx="12" cy="18" r="1"></circle>
          </svg>
        </div>

        <div className="w-full flex-1">
          <h3 className="text-center text-lg font-semibold text-gray-800 sm:text-left dark:text-white">
            Apple iPhone 15 Pro Max
          </h3>
          <div className="mt-1 flex flex-wrap items-center justify-center space-x-2 sm:justify-start">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              $1999
            </span>
            <div className="flex text-yellow-400">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
              </svg>
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
              </svg>
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
              </svg>
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
              </svg>
              <svg
                className="h-5 w-5 fill-current text-gray-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
              </svg>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              (4,889 Reviews)
            </span>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center space-x-3 sm:justify-start">
            <span className="text-gray-800 dark:text-gray-300">Color:</span>
            <div className="flex space-x-2">
              <span className="h-6 w-6 rounded-full border-2 border-white bg-black dark:border-gray-800"></span>
              <span className="h-6 w-6 rounded-full border-2 border-white bg-blue-600 dark:border-gray-800"></span>
              <span className="h-6 w-6 rounded-full border-2 border-white bg-pink-600 dark:border-gray-800"></span>
              <span className="h-6 w-6 rounded-full border-2 border-white bg-teal-500 dark:border-gray-800"></span>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center space-x-3 sm:justify-start">
            <span className="text-gray-800 dark:text-gray-300">Qty:</span>
            <div className="flex items-center rounded-lg bg-gray-200 px-3 py-1 dark:bg-gray-700">
              <button className="px-2 text-gray-600 dark:text-gray-300">-</button>
              <span className="px-3 text-gray-800 dark:text-white">5</span>
              <button className="px-2 text-gray-600 dark:text-gray-300">+</button>
            </div>
          </div>
          <div className="my-4 border-t border-gray-300 dark:border-gray-700"></div>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button className="flex w-full items-center justify-center rounded-lg border border-gray-400 p-2 text-gray-700 hover:bg-gray-200 sm:w-auto dark:border-gray-600 dark:text-white dark:hover:bg-gray-800">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            <button className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20a2 2 0 1 1 4 0h6v2H4v-2h6zm2-16a6 6 0 0 1 6 6c0 2.2-1.2 4.1-3 5.2V16h-6v-2.8a5.9 5.9 0 0 1-3-5.2 6 6 0 0 1 6-6zM4 6h2a4 4 0 1 0 8 0h2a6 6 0 0 1-12 0z" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VerticalEcommerceCard() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md max-w-xs mx-auto">
      <div className="flex justify-center">
        <div className="bg-gray-300 dark:bg-gray-700 rounded-lg w-full h-48 flex items-center justify-center">
          {/* <svg className="h-32 w-12 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 2h8v20H8zM10 5h4v14h-4z"></path>
            </svg> */}
          <img
            src="/Image/PlayStation.jpg"
            className="w-full h-48 rounded-xl p-1 object-cover"
          />
        </div>
      </div>

      <div className="text-center mt-3">
        <span className="text-xs font-semibold text-blue-500">SONY</span>
      </div>

      <h3 className="mt-2 text-center text-lg font-semibold text-gray-800 dark:text-white">
        PlayStation®5 Console – 1TB, PRO Controller
      </h3>

      <div className="flex justify-center items-center mt-2">
        <div className="flex text-yellow-400">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
          </svg>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" />
          </svg>
        </div>
        <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">
          4.9 (5,654)
        </span>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 my-3"></div>

      <div className="text-center">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          $599,00
        </span>
        <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
          <span className="font-semibold text-gray-800 dark:text-white">$499</span>{" "}
          ex. VAT
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 my-3"></div>

      <div className="flex justify-center space-x-4">
        <button className="border border-gray-400 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
          Wishlist
        </button>
        <button className="border border-gray-400 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
          Compare
        </button>
      </div>

      <button className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center justify-center hover:bg-blue-700">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20a2 2 0 1 1 4 0h6v2H4v-2h6zm2-16a6 6 0 0 1 6 6c0 2.2-1.2 4.1-3 5.2V16h-6v-2.8a5.9 5.9 0 0 1-3-5.2 6 6 0 0 1 6-6zM4 6h2a4 4 0 1 0 8 0h2a6 6 0 0 1-12 0z" />
        </svg>
        Add to cart
      </button>
    </div>
  );
}

export function SimpleCardProduct() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:max-w-sm md:mx-auto p-4">
      <div className="relative">
        <img
          src="/Image/AllIpheone.png"
          alt="Product Image"
          className="w-full h-48 object-contain rounded-md"
        />
        <label className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition">
          <input type="checkbox" className="hidden peer" />
          <svg
            className="w-6 h-6 text-gray-700 dark:text-gray-300 peer-checked:fill-red-500 peer-checked:stroke-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </label>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Product Title
        </h3>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          This is a short description of the product. It highlights the key
          features and benefits.
        </p>
        <div className="mt-3 flex items-center">
          <div className="flex space-x-1">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              (123 reviews)
            </span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            $49.99
          </span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export function TestomincalCard(){
  return(
    <div className="max-w-sm w-full mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
     <div className="flex items-center space-x-4">
        <img src="/avatar/girl.jpeg" alt="User Profile" className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600"/>
        <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
        </div>
    </div>

     <div className="flex items-center mt-3">
        <div className="flex space-x-1">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
        </div>
    </div>

     <p className="mt-3 text-gray-700 dark:text-gray-300">
        "The product quality is amazing! I am really impressed with the design and durability."
    </p>
</div>

  )
}