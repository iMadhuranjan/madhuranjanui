export const SimpleCardCode = `<div class="bg-white dark:bg-gray-900 shadow-lg rounded-sm p-6 max-w-sm">
  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Card Title</h3>
  <p class="text-gray-600 dark:text-gray-300 mt-2">
    This is a simple card with a title and description using Tailwind CSS.
  </p>
</div>
`

export const CardWithIconAndHoverEffectCode = `<div class="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 dark:bg-gray-800 min-h-screen justify-center items-center">
  
  <!-- Card 1: Title, Description, and Button -->
  <div class="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 max-w-sm transition-transform transform hover:scale-105 hover:shadow-xl">
    <div class="flex items-center space-x-3">
      <svg class="w-8 h-8 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m2 0h-1m2 0h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z"></path>
      </svg>
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Professional Card</h3>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">
      This is a beautifully designed professional card with a smooth hover effect.
    </p>
    <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-400 transition">
      Learn More
    </button>
  </div>

  <!-- Card 2: Title, Description, and Link -->
  <div class="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 max-w-sm transition-transform transform hover:scale-105 hover:shadow-xl">
    <div class="flex items-center space-x-3">
      <svg class="w-8 h-8 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path>
      </svg>
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Elegant Card</h3>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mt-2">
      This card has a modern look with an engaging hover effect and dark mode support.
    </p>
    <a href="#" class="mt-4 inline-block text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 transition font-medium">
      Read More →
    </a>
  </div>

</div>
`;

export const CardWithImageTitleDescritpionAndIMageCode = `<div class="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 dark:bg-gray-800 min-h-screen justify-center items-center">
  
  <!-- Modern News/Article Card with Button -->
  <div class="max-w-md bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
    <img src="https://via.placeholder.com/400" alt="Tech News" class="w-full h-56 object-cover">
    <div class="p-6">
      <h3 class="text-2xl font-bold">Latest Innovations in AI 2025</h3>
      <p class="mt-2 text-gray-300">Explore the groundbreaking advancements in artificial intelligence that are shaping the future.</p>
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition">
        Learn More →
      </button>
    </div>
  </div>

  <!-- Modern News/Article Card with Link -->
  <div class="max-w-md bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
    <img src="https://via.placeholder.com/400" alt="Tech Trends" class="w-full h-56 object-cover">
    <div class="p-6">
      <h3 class="text-2xl font-bold">Breaking: Web 3.0 Revolution</h3>
      <p class="mt-2 text-gray-300">Discover how Web 3.0 is changing the way we interact with the internet, from decentralization to blockchain.</p>
      <a href="#" class="mt-4 inline-block text-blue-400 hover:text-blue-300 transition font-medium flex items-center gap-2">
        Read More →
      </a>
    </div>
  </div>

</div>
`;

export const HorizontalCardCode = `<div class="flex flex-col gap-6 p-6 bg-gray-100 dark:bg-gray-900 min-h-screen justify-center items-center">

  <!-- Horizontal Card 1: Image on Left, SVG Icon in Title, Button -->
  <div class="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-3xl w-full">
    <img src="https://cdn.pixabay.com/photo/2023/04/07/09/58/artificial-intelligence-7906197_1280.jpg" 
         alt="AI Technology" class="w-full md:w-1/2 h-64 object-cover">
    <div class="p-6 flex flex-col justify-center">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
        <svg class="w-6 h-6 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m2 0h-1m2 0h.01M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z"></path>
        </svg>
        The Future of AI
      </h3>
      <p class="mt-2 text-gray-600 dark:text-gray-300">
        Artificial intelligence is revolutionizing industries, automating processes, and reshaping the way we interact with technology.
      </p>
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 dark:hover:bg-blue-400 transition">
        Learn More →
      </button>
    </div>
  </div>

  <!-- Horizontal Card 2: Image on Left, SVG Icon in Title, Link -->
  <div class="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-3xl w-full">
    <img src="https://cdn.pixabay.com/photo/2019/06/17/19/48/blockchain-4280758_1280.jpg" 
         alt="Blockchain Technology" class="w-full md:w-1/2 h-64 object-cover">
    <div class="p-6 flex flex-col justify-center">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
        <svg class="w-6 h-6 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6"></path>
        </svg>
        The Power of Blockchain
      </h3>
      <p class="mt-2 text-gray-600 dark:text-gray-300">
        Decentralization and blockchain technology are transforming digital security, finance, and data transparency.
      </p>
      <a href="#" class="mt-4 inline-block text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 transition font-medium flex items-center gap-2">
        Read More →
      </a>
    </div>
  </div>

</div>
`;

export const BorderCardCode = `<div class="grid  grid-cols-1 items-center justify-center gap-6 bg-gray-100 p-6 sm:grid-cols-2 lg:grid-cols-2 dark:bg-gray-900">
  <!-- Card 1: Top Border -->
  <div class="rounded-xl border-t-4 border-violet-500 bg-white p-6 text-gray-900 shadow-lg dark:border-blue-500 dark:bg-gray-800 dark:text-white">
    <h3 class="text-lg font-bold">Top Border Card</h3>
    <p class="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptas iusto itaque.</p>
    <a href="#" class="mt-4 inline-block font-medium text-violet-500 transition hover:text-violet-600 dark:text-blue-500 dark:hover:text-blue-400"> Card link → </a>
  </div>

  <!-- Card 2: Bottom Border -->
  <div class="rounded-xl border-b-4 border-violet-500 bg-white p-6 text-gray-900 shadow-lg dark:border-blue-500 dark:bg-gray-800 dark:text-white">
    <h3 class="text-lg font-bold">Bottom Border Card</h3>
    <p class="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, consequuntur.</p>
    <a href="#" class="mt-4 inline-block font-medium text-violet-500 transition hover:text-violet-600 dark:text-blue-500 dark:hover:text-blue-400"> Card link → </a>
  </div>

  <!-- Card 3: Left Border -->
  <div class="rounded-xl border-l-4 border-violet-500 bg-white p-6 text-gray-900 shadow-lg dark:border-blue-500 dark:bg-gray-800 dark:text-white">
    <h3 class="text-lg font-bold">Left Border Card</h3>
    <p class="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, veniam?.</p>
    <a href="#" class="mt-4 inline-block font-medium text-violet-500 transition hover:text-violet-600 dark:text-blue-500 dark:hover:text-blue-400"> Card link → </a>
  </div>

  <!-- Card 4: Right Border -->
  <div class="rounded-xl border-r-4 border-violet-500 bg-white p-6 text-gray-900 shadow-lg dark:border-blue-500 dark:bg-gray-800 dark:text-white">
    <h3 class="text-lg font-bold">Right Border card</h3>
    <p class="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, soluta!.</p>
    <a href="#" class="mt-4 inline-block font-medium text-violet-500 transition hover:text-violet-600 dark:text-blue-500 dark:hover:text-blue-400"> Card link → </a>
  </div>
</div>
`
export const AuthoreCardCode = `<div class="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
    <!-- Profile Photo -->
    <div class="flex justify-center mt-6">
        <img class="w-24 h-24 rounded-full border-4 border-violet-500 dark:border-blue-500 object-cover" 
             src="https://via.placeholder.com/150" alt="Author Profile Photo">
    </div>

    <!-- Author Details -->
    <div class="p-6 text-center">
        <!-- Name -->
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h2>
        <!-- Designation -->
        <p class="text-sm text-violet-600 dark:text-blue-400 mt-1">Senior Software Engineer</p>
        <!-- Description -->
        <p class="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Passionate about building scalable web applications and contributing to open-source projects. Loves to share knowledge and mentor aspiring developers.
        </p>
    </div>

    <!-- Social Media Icons -->
    <div class="flex justify-center space-x-4 pb-6">
        <!-- Twitter -->
        <a href="#" class="text-violet-600 dark:text-blue-400 hover:text-violet-800 dark:hover:text-blue-300 transition">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
        </a>
        <!-- GitHub -->
        <a href="#" class="text-violet-600 dark:text-blue-400 hover:text-violet-800 dark:hover:text-blue-300 transition">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.67-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.024 2.87.782.088-.608.342-1.024.624-1.304-2.18-.248-4.474-1.08-4.474-4.813 0-1.062.38-1.932 1.03-2.682-.103-.25-.447-1.28.098-2.68 0 0 .84-.273 2.75 1.022A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.022 2.747-1.022.547 1.398.202 2.43.1 2.68.65.75 1.03 1.618 1.03 2.682 0 3.741-2.29 4.564-4.466 4.813.352.304.664.75.664 1.513 0 1.09-.01 1.967-.01 2.235 0 .267.18.576.688.48C21.135 20.18 24 16.425 24 12.017 24 6.484 19.523 2 12 2z" clip-rule="evenodd" />
            </svg>
        </a>
        <!-- LinkedIn -->
        <a href="#" class="text-violet-600 dark:text-blue-400 hover:text-violet-800 dark:hover:text-blue-300 transition">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        </a>
    </div>
</div>`;

export const DotoCardCode = `<div class="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
    <!-- Card Header -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">To-Do List</h2>
        <p class="text-sm text-violet-600 dark:text-blue-400 mt-1">Tasks to complete today</p>
    </div>

    <!-- List Items -->
    <div class="p-6">
        <ul class="space-y-4">
            <!-- List Item 1 -->
            <li class="flex items-center">
                <span class="flex-shrink-0 w-5 h-5 bg-violet-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-violet-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </span>
                <span class="ml-3 text-gray-700 dark:text-gray-300">Complete project proposal</span>
            </li>

            <!-- List Item 2 -->
            <li class="flex items-center">
                <span class="flex-shrink-0 w-5 h-5 bg-violet-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-violet-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </span>
                <span class="ml-3 text-gray-700 dark:text-gray-300">Review team updates</span>
            </li>

            <!-- List Item 3 -->
            <li class="flex items-center">
                <span class="flex-shrink-0 w-5 h-5 bg-violet-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-violet-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </span>
                <span class="ml-3 text-gray-700 dark:text-gray-300">Prepare for client meeting</span>
            </li>

            <!-- List Item 4 -->
            <li class="flex items-center">
                <span class="flex-shrink-0 w-5 h-5 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </span>
                <span class="ml-3 text-gray-400 dark:text-gray-500 line-through">Send weekly report</span>
            </li>
        </ul>
    </div>

    <!-- Card Footer -->
    <div class="p-6 border-t border-gray-200 dark:border-gray-700">
        <button class="w-full bg-violet-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-violet-700 dark:hover:bg-blue-600 transition">
            Add New Task
        </button>
    </div>
</div>`;

export const PricingTableCode = `<div class="flex flex-wrap gap-3 py-6 px-3 ">

  <!-- ===== FIRST REFERENCE: SINGLE PLAN (BASIC) ===== -->
<div class="mx-auto max-w-sm transform overflow-hidden rounded-xl bg-white shadow-2xl transition-all duration-300 dark:bg-gray-800">
  <!-- Top colored bar + icon/title -->
  <div class="bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 text-center">
    <h3 class="text-2xl font-bold tracking-wide text-white">Basic Plan</h3>
    <p class="mt-1 text-sm text-pink-200">Perfect for getting started</p>
  </div>

  <!-- Card Content -->
  <div class="p-8">
    <!-- Icon -->
    <div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900">
      <img src="https://img.icons8.com/ios-filled/100/ff6b6b/idea.png" alt="Basic Plan Icon" class="h-12 w-12 object-contain" />
    </div>

    <!-- Price -->
    <div class="mb-6 text-center">
      <p class="text-4xl font-extrabold text-gray-900 dark:text-white">
        $09
        <span class="text-base font-normal text-gray-500 dark:text-gray-400">
          / student <br />
          per month
        </span>
      </p>
    </div>

    <!-- Features -->
    <ul class="mb-8 space-y-3 text-gray-700 dark:text-gray-300">
      <li class="flex items-center space-x-3">
        <span class="text-pink-600 dark:text-pink-400">&#10003;</span>
        <span>Consectetur adipiscing elit</span>
      </li>
      <li class="flex items-center space-x-3">
        <span class="text-pink-600 dark:text-pink-400">&#10003;</span>
        <span>Sed do eiusmod tempor</span>
      </li>
      <li class="flex items-center space-x-3">
        <span class="text-pink-600 dark:text-pink-400">&#10003;</span>
        <span>Incididunt dolore magna aliqua</span>
      </li>
      <li class="flex items-center space-x-3">
        <span class="text-pink-600 dark:text-pink-400">&#10003;</span>
        <span>Ut enim ad minim veniam</span>
      </li>
      <li class="flex items-center space-x-3">
        <span class="text-pink-600 dark:text-pink-400">&#10003;</span>
        <span>Quis nostrud exercitation</span>
      </li>
    </ul>

    <!-- CTA -->
    <button class="w-full transform rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:from-pink-700 hover:to-purple-700">Start Free 7 Days Trial</button>
  </div>
</div>

<!-- ===== SECOND REFERENCE: SINGLE PLAN (SPRINT) ===== -->
<div class="mx-auto max-w-sm transform overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 dark:bg-gray-800">
  <div class="p-6">
    <!-- Plan Title -->
    <h3 class="mb-3 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">Sprint Plan</h3>

    <!-- Price -->
    <div class="mb-4 text-center">
      <p class="text-5xl leading-tight font-extrabold text-gray-900 dark:text-gray-100">
        €3,490
        <span class="text-lg font-medium text-gray-500 dark:text-gray-400">/mo</span>
      </p>
      <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Pause or cancel anytime • 7-day money-back guarantee</p>
    </div>

    <!-- CTA Button -->
    <div class="mb-6 flex justify-center">
      <button class="w-full rounded-lg bg-green-500 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-green-600">Get Started</button>
    </div>

    <!-- Features List -->
    <ul class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
      <li class="flex items-center space-x-3">
        <div class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200">✓</div>
        <span>Two-week design sprint</span>
      </li>
      <li class="flex items-center space-x-3">
        <div class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200">✓</div>
        <span>Unlimited requests & revisions</span>
      </li>
      <li class="flex items-center space-x-3">
        <div class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200">✓</div>
        <span>Up to 1 meeting per week</span>
      </li>
      <li class="flex items-center space-x-3">
        <div class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200">✓</div>
        <span>Avg. 2-3 days delivery</span>
      </li>
      <li class="flex items-center space-x-3">
        <div class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200">✓</div>
        <span>Dev-ready Figma files</span>
      </li>
      <li class="flex items-center space-x-3">
        <div class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200">✓</div>
        <span>Slack Collaboration</span>
      </li>
    </ul>
  </div>
</div>

<!-- ===== THIRD REFERENCE: SINGLE PLAN (ENTRY) ===== -->
<div class="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl">
  <div class="p-6">
    <!-- Plan Title -->
    <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-3">Entry Plan</h3>

    <!-- Price -->
    <div class="text-center mb-4">
      <p class="text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
        €90.75
        <span class="text-lg font-medium text-gray-500 dark:text-gray-400">/month</span>
      </p>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
        Includes 5 team member seats • Additional seats at €9.00/mo
      </p>
    </div>

    <!-- CTA Button -->
    <div class="flex justify-center mb-6">
      <button 
        class="w-full py-3 px-6 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-200"
      >
        Get Started
      </button>
    </div>

    <!-- Features List -->
    <ul class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
      <li class="flex items-center space-x-3">
        <div class="flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full">
          ✓
        </div>
        <span>5 Users included</span>
      </li>
      <li class="flex items-center space-x-3">
        <div class="flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full">
          ✓
        </div>
        <span>Up to 30 user seats</span>
      </li>
      <li class="flex items-center space-x-3">
        <div class="flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full">
          ✓
        </div>
        <span>1 Space included</span>
      </li>
      <li class="flex items-center space-x-3">
        <div class="flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full">
          ✓
        </div>
        <span>Activity Log</span>
      </li>
      <li class="flex items-center space-x-3">
        <div class="flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full">
          ✓
        </div>
        <span>Custom Roles</span>
      </li>
    </ul>
  </div>
</div>

  </div>
`

export const CardWithListAndImageCode = `<div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
  <!-- Card Header -->
  <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
    <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100">Recent Customers</h3>
    <a href="#" class="text-violet-500 dark:text-blue-500 text-sm font-medium hover:underline">View all</a>
  </div>

  <!-- Customer List -->
  <ul class="divide-y divide-gray-200 dark:divide-gray-700">
    
    <!-- Customer Item -->
    <li class="flex items-center justify-between px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
      <div class="flex items-center space-x-3">
        <img src="https://i.pravatar.cc/40?img=1" alt="Neil Sims" class="w-10 h-10 rounded-full">
        <div>
          <p class="font-semibold text-gray-900 dark:text-gray-100">Neil Sims</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">neil@email.com</p>
        </div>
      </div>
      <p class="text-gray-900 dark:text-gray-100 font-semibold">$320</p>
    </li>

    <!-- Customer Item -->
    <li class="flex items-center justify-between px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
      <div class="flex items-center space-x-3">
        <img src="https://i.pravatar.cc/40?img=2" alt="Bonnie Green" class="w-10 h-10 rounded-full">
        <div>
          <p class="font-semibold text-gray-900 dark:text-gray-100">Bonnie Green</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">bonnie@email.com</p>
        </div>
      </div>
      <p class="text-gray-900 dark:text-gray-100 font-semibold">$3,467</p>
    </li>

    <!-- Customer Item -->
    <li class="flex items-center justify-between px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
      <div class="flex items-center space-x-3">
        <img src="https://i.pravatar.cc/40?img=3" alt="Michael Gough" class="w-10 h-10 rounded-full">
        <div>
          <p class="font-semibold text-gray-900 dark:text-gray-100">Michael Gough</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">michael@email.com</p>
        </div>
      </div>
      <p class="text-gray-900 dark:text-gray-100 font-semibold">$67</p>
    </li>

    <!-- Customer Item -->
    <li class="flex items-center justify-between px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
      <div class="flex items-center space-x-3">
        <img src="https://i.pravatar.cc/40?img=4" alt="Lana Byrd" class="w-10 h-10 rounded-full">
        <div>
          <p class="font-semibold text-gray-900 dark:text-gray-100">Lana Byrd</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">lana@email.com</p>
        </div>
      </div>
      <p class="text-gray-900 dark:text-gray-100 font-semibold">$367</p>
    </li>

    <!-- Customer Item -->
    <li class="flex items-center justify-between px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
      <div class="flex items-center space-x-3">
        <img src="https://i.pravatar.cc/40?img=5" alt="Thomas Lean" class="w-10 h-10 rounded-full">
        <div>
          <p class="font-semibold text-gray-900 dark:text-gray-100">Thomas Lean</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">thomas@email.com</p>
        </div>
      </div>
      <p class="text-gray-900 dark:text-gray-100 font-semibold">$2,367</p>
    </li>

  </ul>
</div>
`

export const StatsCardCode = `<div class="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 text-center">
    
    <!-- Stat Item 1 -->
    <div class="transition-all duration-300 transform hover:scale-105">
      <h2 class="text-3xl font-extrabold text-violet-500 dark:text-blue-500">50K+</h2>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Active Users</p>
    </div>

    <!-- Stat Item 2 -->
    <div class="transition-all duration-300 transform hover:scale-105">
      <h2 class="text-3xl font-extrabold text-violet-500 dark:text-blue-500">120M+</h2>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Monthly Requests</p>
    </div>

    <!-- Stat Item 3 -->
    <div class="transition-all duration-300 transform hover:scale-105">
      <h2 class="text-3xl font-extrabold text-violet-500 dark:text-blue-500">10K+</h2>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Business Partners</p>
    </div>

    <!-- Stat Item 4 -->
    <div class="transition-all duration-300 transform hover:scale-105">
      <h2 class="text-3xl font-extrabold text-violet-500 dark:text-blue-500">250+</h2>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Team Members</p>
    </div>

    <!-- Stat Item 5 -->
    <div class="transition-all duration-300 transform hover:scale-105">
      <h2 class="text-3xl font-extrabold text-violet-500 dark:text-blue-500">5M+</h2>
      <p class="text-gray-600 dark:text-gray-300 text-sm">API Integrations</p>
    </div>

    <!-- Stat Item 6 -->
    <div class="transition-all duration-300 transform hover:scale-105">
      <h2 class="text-3xl font-extrabold text-violet-500 dark:text-blue-500">99.9%</h2>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Uptime Guarantee</p>
    </div>

  </div>
</div>
`

export const BlogPostCode = `<div class="max-w-sm md:max-w-md mx-auto bg-white dark:bg-gray-800 rounded-sm shadow-lg overflow-hidden transform transition-all duration-300 ">
    <!-- Featured Image -->
    <img 
        src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
        alt="Blog Featured Image" 
        class="w-full h-48 object-cover"
    />

    <!-- Blog Content -->
    <div class="p-6">
        <!-- Category -->
        <span class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
            #Technology
        </span>

        <!-- Title -->
        <h2 class="mt-4 text-xl font-bold text-gray-900 dark:text-white">The Future of AI in Web Development</h2>

        <!-- Description -->
        <p class="mt-2 text-gray-600 dark:text-gray-300">
            Artificial intelligence is transforming the way we build and interact with websites. Learn how AI tools are shaping the future of web development.
        </p>

        <!-- Author Details -->
        <div class="mt-6 flex items-center">
            <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Author Avatar" 
                class="w-10 h-10 rounded-full object-cover"
            />
            <div class="ml-3">
                <p class="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">August 18, 2023</p>
            </div>
        </div>

        <!-- Read More Button -->
        <button 
            class="mt-6 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
        >
            Read More
        </button>
    </div>
</div>`


export const CardWithWarningCode = `<div class="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
    <!-- Alert Bar -->
    <div class="relative bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 flex items-center justify-between">
        <div class="flex items-center space-x-3">
            <span class="text-xl">🔔</span>
            <span class="text-sm font-medium">Please update your card details.</span>
        </div>
        <input type="checkbox" id="close-alert" class="peer hidden">
        <label for="close-alert" class="cursor-pointer text-white text-xl hover:text-red-200 transition-colors">✕</label>
    </div>

    <!-- Card Content -->
    <div class="p-6 peer-checked:hidden">
        <!-- Title -->
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center space-x-3">
            <span class="text-2xl">🌐</span>
            <span>Custom CMS for Startups</span>
        </h3>

        <!-- Description -->
        <p class="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Because it's about motivating the doers.  
            Because I'm here to follow my dreams and inspire others.
        </p>

        <!-- Learn More Link -->
        <a href="#" class="mt-5 inline-flex items-center text-violet-600 dark:text-blue-400 font-medium hover:text-violet-700 dark:hover:text-blue-300 transition-colors">
            Learn More →
        </a>
    </div>
</div>`

export const iMacCardCode = `<div class="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl shadow-lg w-80 mx-auto">
    <div class="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 flex items-center justify-center">
        <svg class="h-24 w-24 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
            <rect width="6" height="2" x="9" y="18" rx="1"></rect>
        </svg>
    </div>
    <div class="mt-4">
        <span class="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md">Up to 35% off</span>
    </div>
    <h3 class="mt-2 text-gray-800 dark:text-white font-semibold text-lg">
        Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
    </h3>
    <div class="flex items-center mt-2">
        <div class="flex text-yellow-400">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z"/></svg>
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z"/></svg>
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z"/></svg>
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z"/></svg>
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z"/></svg>
        </div>
        <span class="text-gray-600 dark:text-gray-400 text-sm ml-2">5.0 (455)</span>
    </div>
    <div class="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-2">
        <span class="flex items-center mr-4">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"/></svg>
            Fast Delivery
        </span>
        <span class="flex items-center">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.1 6.3L22 9l-5 4.8L18.2 22 12 18.5 5.8 22 7 13.8 2 9l6.9-1 3.1-6z"/></svg>
            Best Price
        </span>
    </div>
    <div class="flex justify-between items-center mt-4">
        <span class="text-2xl font-bold text-gray-800 dark:text-white">$1,699</span>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20a2 2 0 1 1 4 0h6v2H4v-2h6zm2-16a6 6 0 0 1 6 6c0 2.2-1.2 4.1-3 5.2V16h-6v-2.8a5.9 5.9 0 0 1-3-5.2 6 6 0 0 1 6-6zM4 6h2a4 4 0 1 0 8 0h2a6 6 0 0 1-12 0z"/></svg>
            Add to cart
        </button>
    </div>
</div>

`;

export const iPhoneCode = `<div class="mx-auto w-full max-w-2xl rounded-xl bg-gray-100 p-4 shadow-lg dark:bg-gray-900">
  <div class="flex flex-col items-center space-y-6 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-6">
    <!-- Product Image Placeholder -->
    <div class="flex h-52 w-full items-center justify-center rounded-lg bg-gray-300 sm:w-40 dark:bg-gray-700">
      <svg class="h-44 w-44 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <rect width="12" height="20" x="6" y="2" rx="3"></rect>
        <circle cx="12" cy="18" r="1"></circle>
      </svg>
    </div>
    <!-- Product Details -->
    <div class="w-full flex-1">
      <h3 class="text-center text-lg font-semibold text-gray-800 sm:text-left dark:text-white">Apple iPhone 15 Pro Max</h3>
      <div class="mt-1 flex flex-wrap items-center justify-center space-x-2 sm:justify-start">
        <span class="text-2xl font-bold text-gray-900 dark:text-white">$1999</span>
        <div class="flex text-yellow-400">
          <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" /></svg>
          <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" /></svg>
          <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" /></svg>
          <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" /></svg>
          <svg class="h-5 w-5 fill-current text-gray-400" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z" /></svg>
        </div>
        <span class="text-sm text-gray-600 dark:text-gray-400">(4,889 Reviews)</span>
      </div>
      <!-- Color Selection -->
      <div class="mt-3 flex flex-wrap items-center justify-center space-x-3 sm:justify-start">
        <span class="text-gray-800 dark:text-gray-300">Color:</span>
        <div class="flex space-x-2">
          <span class="h-6 w-6 rounded-full border-2 border-white bg-black dark:border-gray-800"></span>
          <span class="h-6 w-6 rounded-full border-2 border-white bg-blue-600 dark:border-gray-800"></span>
          <span class="h-6 w-6 rounded-full border-2 border-white bg-pink-600 dark:border-gray-800"></span>
          <span class="h-6 w-6 rounded-full border-2 border-white bg-teal-500 dark:border-gray-800"></span>
        </div>
      </div>
      <!-- Quantity Selector -->
      <div class="mt-3 flex flex-wrap items-center justify-center space-x-3 sm:justify-start">
        <span class="text-gray-800 dark:text-gray-300">Qty:</span>
        <div class="flex items-center rounded-lg bg-gray-200 px-3 py-1 dark:bg-gray-700">
          <button class="px-2 text-gray-600 dark:text-gray-300">-</button>
          <span class="px-3 text-gray-800 dark:text-white">5</span>
          <button class="px-2 text-gray-600 dark:text-gray-300">+</button>
        </div>
      </div>
      <!-- Divider -->
      <div class="my-4 border-t border-gray-300 dark:border-gray-700"></div>
      <!-- Actions -->
      <div class="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
        <button class="flex w-full items-center justify-center rounded-lg border border-gray-400 p-2 text-gray-700 hover:bg-gray-200 sm:w-auto dark:border-gray-600 dark:text-white dark:hover:bg-gray-800">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
        </button>
        <button class="flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
          <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20a2 2 0 1 1 4 0h6v2H4v-2h6zm2-16a6 6 0 0 1 6 6c0 2.2-1.2 4.1-3 5.2V16h-6v-2.8a5.9 5.9 0 0 1-3-5.2 6 6 0 0 1 6-6zM4 6h2a4 4 0 1 0 8 0h2a6 6 0 0 1-12 0z" /></svg>
          Add to cart
        </button>
      </div>
    </div>
  </div>
</div>
`

export const VerticalCode = `<div class="bg-gray-100 dark:bg-gray-900 p-6 rounded-sm shadow-md w-full max-w-xs mx-auto">
    <!-- Product Image -->
    <div class="flex justify-center">
        <div class="bg-gray-300 dark:bg-gray-700 rounded-lg w-36 h-48 flex items-center justify-center">
            <svg class="h-32 w-12 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 2h8v20H8zM10 5h4v14h-4z"></path>
            </svg>
        </div>
    </div>
    
    <!-- Brand -->
    <div class="text-center mt-3">
        <span class="text-xs font-semibold text-blue-500">SONY</span>
    </div>

    <!-- Product Name -->
    <h3 class="mt-2 text-center text-lg font-semibold text-gray-800 dark:text-white">
        PlayStation®5 Console – 1TB, PRO Controller
    </h3>

    <!-- Ratings -->
    <div class="flex justify-center items-center mt-2">
        <div class="flex text-yellow-400">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z"/></svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z"/></svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z"/></svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z"/></svg>
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.3l5.1 2.7-1.3-5.6 4.2-3.7-5.7-.5L12 5l-2.3 5.2-5.7.5 4.2 3.7-1.3 5.6z"/></svg>
        </div>
        <span class="text-gray-600 dark:text-gray-400 text-sm ml-2">4.9 (5,654)</span>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-300 dark:border-gray-700 my-3"></div>

    <!-- Pricing -->
    <div class="text-center">
        <span class="text-2xl font-bold text-gray-900 dark:text-white">$599,00</span>
        <div class="text-gray-600 dark:text-gray-400 text-sm mt-1">
            <span class="font-semibold text-gray-800 dark:text-white">$499</span> ex. VAT
        </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-300 dark:border-gray-700 my-3"></div>

    <!-- Action Buttons -->
    <div class="flex justify-center space-x-4">
        <button class="border border-gray-400 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
            Wishlist
        </button>
        <button class="border border-gray-400 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
            Compare
        </button>
    </div>

    <!-- Add to Cart Button -->
    <button class="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center justify-center hover:bg-blue-700">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20a2 2 0 1 1 4 0h6v2H4v-2h6zm2-16a6 6 0 0 1 6 6c0 2.2-1.2 4.1-3 5.2V16h-6v-2.8a5.9 5.9 0 0 1-3-5.2 6 6 0 0 1 6-6zM4 6h2a4 4 0 1 0 8 0h2a6 6 0 0 1-12 0z"/>
        </svg>
        Add to cart
    </button>
</div>
`

export const simpleEcommercecardCode = `<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-sm mx-auto p-4">
    <!-- Product Image -->
    <div class="relative">
        <img src="https://via.placeholder.com/400x300" alt="Product Image" class="w-full h-48 object-contain rounded-md">
        <!-- Wishlist Button -->
        <label class="absolute top-2 right-2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition">
            <input type="checkbox" class="hidden peer">
            <svg class="w-6 h-6 text-gray-700 dark:text-gray-300 peer-checked:fill-red-500 peer-checked:stroke-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                </path>
            </svg>
        </label>
    </div>

    <!-- Product Details -->
    <div class="mt-4">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">Product Title</h2>
        <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">
            This is a short description of the product. It highlights the key features and benefits.
        </p>
        <!-- Reviews -->
        <div class="mt-3 flex items-center">
            <div class="flex space-x-1">
                <!-- Star Icons -->
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">(123 reviews)</span>
            </div>
        </div>
        <!-- Price & Add to Cart -->
        <div class="mt-4 flex items-center justify-between">
            <span class="text-2xl font-bold text-gray-900 dark:text-white">$49.99</span>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Add to Cart
            </button>
        </div>
    </div>
</div>
`

export const TestomincalCode=`<div class="max-w-sm w-full mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    <!-- User Profile -->
    <div class="flex items-center space-x-4">
        <img src="https://via.placeholder.com/50" alt="User Profile" class="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600">
        <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
        </div>
    </div>

    <!-- Rating -->
    <div class="flex items-center mt-3">
        <div class="flex space-x-1">
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
        </div>
    </div>

    <!-- User Comment -->
    <p class="mt-3 text-gray-700 dark:text-gray-300">
        "The product quality is amazing! I am really impressed with the design and durability."
    </p>
</div>
`