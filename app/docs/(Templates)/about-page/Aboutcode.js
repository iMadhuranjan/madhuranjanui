import { complex } from "framer-motion"

export const SimpleAboutSectionCode = `   <section class="mb-20">z
        <div class="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 class="mb-6 text-3xl font-bold text-gray-800 dark:text-white">Who We Are</h2>
            <p class="mb-4 leading-relaxed text-gray-600 dark:text-white ">Founded in 2015, we are a passionate team of designers, developers, and strategists dedicated to creating exceptional digital experiences. Our mission is to bridge the gap between technology and business needs.</p>
            <p class="leading-relaxed text-gray-600 dark:text-white">With offices in 3 countries and clients across the globe, we've helped over 500 businesses transform their digital presence and achieve measurable results.</p>
          </div>
          <div class="overflow-hidden rounded-xl shadow-xl">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our team working together" class="h-auto w-full object-cover" />
          </div>
        </div>
      </section>`

export const AboutPageWithCardAndLabbelCode=`  <section class="m-5">
  <div class="grid items-center gap-16 md:grid-cols-2">
    <div class="relative">
       <div class="absolute -top-6 -left-6 -z-10 h-full w-full rounded-2xl bg-purple-100/50 dark:bg-purple-900/50"></div>
       <div class="overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:shadow-purple-200/50 dark:hover:shadow-gray-700/50">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our team working together" class="h-auto w-full object-cover transition-transform duration-700 hover:scale-105" />
      </div>
       <div class="absolute -right-6 -bottom-6 w-2/3 rounded-xl border border-purple-100 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <svg class="absolute -top-3 left-6 h-6 w-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
        <h3 class="mb-2 text-lg font-bold text-gray-800 dark:text-gray-100">Since 2015</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Pioneering digital transformation for businesses worldwide</p>
      </div>
    </div>
    <div>
      <span class="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">About Us</span>
      <h2 class="mb-6 text-3xl font-bold text-gray-800 md:text-4xl dark:text-gray-100">Who <span class="text-indigo-600 dark:text-indigo-400">We Are</span></h2>
      <p class="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">Founded in 2015, we are a passionate team of <span class="font-medium text-gray-800 dark:text-gray-200">designers, developers, and strategists</span> dedicated to creating exceptional digital experiences. Our mission is to bridge the gap between technology and business needs.</p>
      <p class="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">With offices in <span class="font-medium text-gray-800 dark:text-gray-200">3 countries</span> and clients across the globe, we've helped over <span class="font-medium text-gray-800 dark:text-gray-200">500 businesses</span> transform their digital presence and achieve measurable results.</p>
      <div class="flex flex-wrap gap-3">
        <div class="flex items-center rounded-full bg-white px-4 py-2 shadow-sm dark:bg-gray-800">
          <svg class="mr-2 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span class="text-sm font-medium dark:text-gray-300">500+ Clients</span>
        </div>
        <div class="flex items-center rounded-full bg-white px-4 py-2 shadow-sm dark:bg-gray-800">
          <svg class="mr-2 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span class="text-sm font-medium dark:text-gray-300">15 Countries</span>
        </div>
      </div>
    </div>
  </div>
</section>`

export const ourMissionCardSectionCode=`  <section class="m-5">
  <div class="grid items-center gap-16 md:grid-cols-2">
    <div class="order-last md:order-first">
      <h2 class="mb-6 text-3xl font-bold text-gray-800 md:text-4xl dark:text-gray-100">Our <span class="text-green-600 dark:text-green-400">Mission</span></h2>
      <p class="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">Our mission is to empower businesses by delivering innovative digital solutions that drive growth and efficiency.</p>
      <ul class="mb-6 list-disc pl-5 text-gray-600 dark:text-gray-300">
        <li>Innovative technology integration</li>
        <li>Exceptional user experiences</li>
        <li>Reliable and scalable solutions</li>
      </ul>
      <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">We strive to be at the forefront of digital transformation, helping our clients navigate the complexities of modern technology.</p>
    </div>
    <div class="relative">
       <div class="absolute -top-6 -right-6 -z-10 h-full w-full rounded-2xl bg-green-100/50 dark:bg-green-900/50"></div>
       <div class="overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:shadow-green-200/50 dark:hover:shadow-gray-700/50">
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our Mission" class="h-auto w-full object-cover transition-transform duration-700 hover:scale-105" />
      </div>
       <div class="absolute -bottom-6 -left-6 w-2/3 rounded-xl border border-green-100 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <svg class="absolute -top-3 right-6 h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
        <h3 class="mb-2 text-lg font-bold text-gray-800 dark:text-gray-100">Commitment</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">Driven by our core values, we commit to delivering quality and excellence in every project.</p>
      </div>
    </div>
  </div>
</section>`

export const MeetOurTeamAboutSectionCode=`<section class="m-10">
  <div class="grid items-center gap-16 md:grid-cols-2">
    <div class="relative">
      <div class="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl bg-yellow-100/50 dark:bg-yellow-900/50"></div>
      <div class="overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:shadow-yellow-200/50 dark:hover:shadow-gray-700/50">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our Team" class="h-auto w-full object-cover transition-transform duration-700 hover:scale-105" />
      </div>
      <div class="absolute -top-6 -right-6 w-2/3 rounded-xl border border-yellow-100 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-2 text-lg font-bold text-gray-800 dark:text-gray-100">Our Team</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">A diverse group of professionals sharing a common vision, committed to delivering excellence.</p>
      </div>
    </div>
    <div>
      <h2 class="mb-6 text-3xl font-bold text-gray-800 md:text-4xl dark:text-gray-100">Meet Our <span class="text-yellow-600 dark:text-yellow-400">Team</span></h2>
      <p class="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">Our team is composed of experienced designers, developers, and strategists. We foster a collaborative environment that nurtures creativity and drives success.</p>
      <p class="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">Every member brings unique skills and perspectives, fueling our innovative approach to digital solutions.</p>
    </div>
  </div>
</section>
`

export const AboutusWithDetailedCardCode=` <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
   <div class="mb-16 text-center">
    <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">About Our Company</h2>
    <div class="mx-auto mt-4 h-1 w-20 bg-indigo-600"></div>
  </div>

   <div class="grid items-center gap-12 md:grid-cols-2">
     <div>
      <p class="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">Founded in 2015, we started as a small team with big dreams. Today, we've grown into an industry leader with over 50 professionals dedicated to delivering exceptional results for our clients worldwide.</p>
      <p class="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">Our mission is to bridge the gap between technology and business needs through innovative solutions, transparent processes, and measurable results.</p>
      <div class="flex flex-wrap gap-4">
        <div class="flex items-center">
          <svg class="mr-2 h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-gray-700 dark:text-gray-300">500+ Successful Projects</span>
        </div>
        <div class="flex items-center">
          <svg class="mr-2 h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-gray-700 dark:text-gray-300">Global Client Base</span>
        </div>
        <div class="flex items-center">
          <svg class="mr-2 h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-gray-700 dark:text-gray-300">Award-Winning Team</span>
        </div>
      </div>
    </div>

     <div class="relative">
      <div class="overflow-hidden rounded-xl shadow-xl">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our team collaborating" class="h-auto w-full object-cover" />
      </div>
      <div class="absolute -right-6 -bottom-6 rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-lg">
        <div class="text-2xl font-bold">7+</div>
        <div class="text-sm">Years Experience</div>
      </div>
    </div>
  </div>

   <div class="mt-20 grid gap-8 md:grid-cols-3">
    <div class="rounded-xl bg-white p-8 shadow-md transition hover:shadow-lg dark:bg-gray-800">
      <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
        <svg class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 class="mb-3 text-xl font-semibold dark:text-white">Innovation</h3>
      <p class="text-gray-600 dark:text-gray-300">We push boundaries to create solutions that give you a competitive edge.</p>
    </div>
    <div class="rounded-xl bg-white p-8 shadow-md transition hover:shadow-lg dark:bg-gray-800">
      <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
        <svg class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      <h3 class="mb-3 text-xl font-semibold dark:text-white">Integrity</h3>
      <p class="text-gray-600 dark:text-gray-300">Honest communication and ethical practices guide everything we do.</p>
    </div>
    <div class="rounded-xl bg-white p-8 shadow-md transition hover:shadow-lg dark:bg-gray-800">
      <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
        <svg class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <h3 class="mb-3 text-xl font-semibold dark:text-white">Collaboration</h3>
      <p class="text-gray-600 dark:text-gray-300">We work with you as partners, not just service providers.</p>
    </div>
  </div>
</div>`

export const TImelineApprachCode=`  <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mb-16 text-center">
    <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">Our Journey</h2>
    <p class="mx-auto mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300">Milestones that shaped who we are today</p>
  </div>

  <div class="relative">
     <div class="absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-1/2 transform bg-gray-200 md:block dark:bg-gray-700"></div>

     <div class="space-y-12 md:space-y-0">
       <div class="relative md:flex md:items-center md:justify-between md:odd:flex-row-reverse">
        <div class="mb-8 md:mb-0 md:w-5/12">
          <div class="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Company Founded</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">Started in a small garage with just 3 team members and big dreams.</p>
            <span class="mt-4 inline-block text-sm font-medium text-indigo-600">2012</span>
          </div>
        </div>
        <div class="hidden md:block md:w-2/12 md:px-4">
          <div class="mx-auto h-6 w-6 rounded-full bg-indigo-600"></div>
        </div>
        <div class="md:w-5/12"></div>
      </div>

       <div class="relative md:flex md:items-center md:justify-between md:odd:flex-row-reverse">
        <div class="mb-8 md:mb-0 md:w-5/12">
          <div class="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">First Major Client</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">Landed our first Fortune 500 client, validating our approach.</p>
            <span class="mt-4 inline-block text-sm font-medium text-indigo-600">2015</span>
          </div>
        </div>
        <div class="hidden md:block md:w-2/12 md:px-4">
          <div class="mx-auto h-6 w-6 rounded-full bg-indigo-600"></div>
        </div>
        <div class="md:w-5/12"></div>
      </div>

       <div class="relative md:flex md:items-center md:justify-between md:odd:flex-row-reverse">
        <div class="mb-8 md:mb-0 md:w-5/12">
          <div class="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Global Expansion</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">Opened offices in Europe and Asia to serve international clients.</p>
            <span class="mt-4 inline-block text-sm font-medium text-indigo-600">2018</span>
          </div>
        </div>
        <div class="hidden md:block md:w-2/12 md:px-4">
          <div class="mx-auto h-6 w-6 rounded-full bg-indigo-600"></div>
        </div>
        <div class="md:w-5/12"></div>
      </div>

       <div class="relative md:flex md:items-center md:justify-between md:odd:flex-row-reverse">
        <div class="md:w-5/12">
          <div class="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Today</h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">150+ employees serving clients across 30 countries with award-winning solutions.</p>
            <span class="mt-4 inline-block text-sm font-medium text-indigo-600">Present</span>
          </div>
        </div>
        <div class="hidden md:block md:w-2/12 md:px-4">
          <div class="mx-auto h-6 w-6 rounded-full bg-indigo-600"></div>
        </div>
        <div class="md:w-5/12"></div>
      </div>
    </div>
  </div>
</div>`

export const completeAboutUsPafeCode=`<div class="bg-gradient-to-br from-gray-50 to-gray-100 font-sans antialiased dark:from-gray-900 dark:to-gray-800">
  <!-- Hero Section -->
  <header class="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 py-16 text-white dark:from-indigo-800 dark:to-purple-900">
    <div class="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <h1 class="mb-6 bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl dark:from-gray-100 dark:to-gray-300">Our <span class="underline decoration-purple-300 decoration-wavy decoration-2">Story</span></h1>
      <p class="mx-auto max-w-3xl text-xl text-white/90 md:text-2xl">Building <span class="font-semibold">innovative solutions</span> to help businesses thrive in the digital age.</p>
    </div>

    <!-- Wavy divider -->
    <div class="absolute right-0 bottom-0 left-0 h-12 translate-y-1 transform overflow-hidden">
      <svg class="absolute bottom-0 h-12 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" class="text-gray-50 dark:text-gray-800"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" class="text-gray-100 opacity-60 dark:text-gray-700 dark:opacity-60"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" class="text-gray-100 opacity-30 dark:text-gray-600 dark:opacity-30"></path>
      </svg>
    </div>
  </header>

  <main class="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <!-- About Section -->
    <section class="mb-16">
      <div class="grid items-center gap-16 md:grid-cols-2">
        <div class="relative">
          <div class="absolute -top-6 -left-6 -z-10 h-full w-full rounded-2xl bg-purple-100/50 dark:bg-purple-900/50"></div>
          <div class="overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:shadow-purple-200/50">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our team working together" class="h-auto w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div class="absolute -right-6 -bottom-6 w-2/3 rounded-xl border border-purple-100 bg-white p-6 shadow-lg dark:border-purple-700 dark:bg-gray-800">
            <svg class="absolute -top-3 left-6 h-6 w-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            <h3 class="mb-2 text-lg font-bold text-gray-800 dark:text-gray-200">Since 2015</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Pioneering digital transformation for businesses worldwide</p>
          </div>
        </div>
        <div>
          <span class="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">About Us</span>
          <h2 class="mb-6 text-3xl font-bold text-gray-800 md:text-4xl dark:text-gray-200">Who <span class="text-indigo-600 dark:text-indigo-300">We Are</span></h2>
          <p class="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">Founded in 2015, we are a passionate team of <span class="font-medium text-gray-800 dark:text-gray-200">designers, developers, and strategists</span> dedicated to creating exceptional digital experiences. Our mission is to bridge the gap between technology and business needs.</p>
          <p class="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">With offices in <span class="font-medium text-gray-800 dark:text-gray-200">3 countries</span> and clients across the globe, we've helped over <span class="font-medium text-gray-800 dark:text-gray-200">500 businesses</span> transform their digital presence and achieve measurable results.</p>
          <div class="flex flex-wrap gap-3">
            <div class="flex items-center rounded-full bg-white px-4 py-2 shadow-sm dark:bg-gray-800">
              <svg class="mr-2 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-sm font-medium text-gray-800 dark:text-gray-200">500+ Clients</span>
            </div>
            <div class="flex items-center rounded-full bg-white px-4 py-2 shadow-sm dark:bg-gray-800">
              <svg class="mr-2 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-sm font-medium text-gray-800 dark:text-gray-200">15 Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="mb-16">
      <div class="text-center">
        <span class="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">Our Values</span>
        <h2 class="mb-12 text-3xl font-bold text-gray-800 md:text-4xl dark:text-gray-200">Core <span class="text-indigo-600 dark:text-indigo-300">Principles</span></h2>
      </div>
      <div class="grid gap-8 md:grid-cols-3">
        <!-- Value 1 -->
        <div class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800">
          <div class="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-indigo-100/30 transition-all duration-500 group-hover:scale-150 dark:bg-indigo-900/30"></div>
          <div class="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 shadow-sm dark:from-indigo-900 dark:to-purple-900">
            <svg class="h-8 w-8 text-indigo-600 transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Innovation</h3>
          <p class="text-gray-600 dark:text-gray-400">We constantly push boundaries to deliver cutting-edge solutions that drive real impact for our clients.</p>
          <div class="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-indigo-500 to-purple-600 transition-transform duration-500 group-hover:scale-x-100"></div>
        </div>

        <!-- Value 2 -->
        <div class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800">
          <div class="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-indigo-100/30 transition-all duration-500 group-hover:scale-150 dark:bg-indigo-900/30"></div>
          <div class="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 shadow-sm dark:from-indigo-900 dark:to-purple-900">
            <svg class="h-8 w-8 text-indigo-600 transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 class="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Integrity</h3>
          <p class="text-gray-600 dark:text-gray-400">We build trust through transparency, honesty, and ethical business practices in all our relationships.</p>
          <div class="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-indigo-500 to-purple-600 transition-transform duration-500 group-hover:scale-x-100"></div>
        </div>

        <!-- Value 3 -->
        <div class="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800">
          <div class="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-indigo-100/30 transition-all duration-500 group-hover:scale-150 dark:bg-indigo-900/30"></div>
          <div class="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 shadow-sm dark:from-indigo-900 dark:to-purple-900">
            <svg class="h-8 w-8 text-indigo-600 transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 class="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Collaboration</h3>
          <p class="text-gray-600 dark:text-gray-400">We believe the best results come from working closely with our clients and partners as one team.</p>
          <div class="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-indigo-500 to-purple-600 transition-transform duration-500 group-hover:scale-x-100"></div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="mb-16">
      <div class="text-center">
        <span class="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">Our Team</span>
        <h2 class="mb-12 text-3xl font-bold text-gray-800 md:text-4xl dark:text-gray-200">Leadership <span class="text-indigo-600 dark:text-indigo-300">Team</span></h2>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Team Member 1 -->
        <div class="group text-center">
          <div class="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full shadow-xl">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 flex items-center justify-center bg-indigo-600/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div class="flex space-x-4">
                <a href="#" class="text-white hover:text-indigo-200">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" class="text-white hover:text-indigo-200">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Sarah Johnson</h3>
          <p class="mb-2 text-indigo-600 dark:text-indigo-300">CEO &amp; Founder</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Visionary leader with 15+ years in tech</p>
        </div>

        <!-- Team Member 2 -->
        <div class="group text-center">
          <div class="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full shadow-xl">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Chen" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 flex items-center justify-center bg-indigo-600/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div class="flex space-x-4">
                <a href="#" class="text-white hover:text-indigo-200">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" class="text-white hover:text-indigo-200">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Michael Chen</h3>
          <p class="mb-2 text-indigo-600 dark:text-indigo-300">CTO</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Tech innovator and systems architect</p>
        </div>

        <!-- Team Member 3 -->
        <div class="group text-center">
          <div class="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full shadow-xl">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Priya Patel" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 flex items-center justify-center bg-indigo-600/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div class="flex space-x-4">
                <a href="#" class="text-white hover:text-indigo-200">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" class="text-white hover:text-indigo-200">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Priya Patel</h3>
          <p class="mb-2 text-indigo-600 dark:text-indigo-300">Head of Design</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">User experience expert</p>
        </div>

        <!-- Team Member 4 -->
        <div class="group text-center">
          <div class="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full shadow-xl">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="David Kim" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 flex items-center justify-center bg-indigo-600/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div class="flex space-x-4">
                <a href="#" class="text-white hover:text-indigo-200">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" class="text-white hover:text-indigo-200">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">David Kim</h3>
          <p class="mb-2 text-indigo-600 dark:text-indigo-300">Head of Growth</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Marketing and strategy specialist</p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-700 p-12 text-white shadow-2xl dark:from-indigo-800 dark:to-purple-900">
      <div class="relative z-10 grid gap-8 text-center md:grid-cols-4">
        <!-- Animated circles in background -->
        <div class="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/10"></div>
        <div class="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-white/5"></div>

        <div class="group">
          <div class="mb-2 text-4xl font-bold transition-all duration-300 group-hover:text-indigo-200 md:text-5xl">500+</div>
          <div class="text-indigo-100 transition-all duration-300 group-hover:text-white">Happy Clients</div>
          <svg class="mx-auto mt-4 h-1 w-16 text-indigo-300 opacity-0 transition-all duration-300 group-hover:opacity-100" fill="currentColor" viewBox="0 0 100 10">
            <path d="M0,5 C20,8 40,2 60,5 C80,8 100,2 100,5" stroke="currentColor" stroke-width="2" fill="none"></path>
          </svg>
        </div>
        <div class="group">
          <div class="mb-2 text-4xl font-bold transition-all duration-300 group-hover:text-indigo-200 md:text-5xl">120+</div>
          <div class="text-indigo-100 transition-all duration-300 group-hover:text-white">Projects Completed</div>
          <svg class="mx-auto mt-4 h-1 w-16 text-indigo-300 opacity-0 transition-all duration-300 group-hover:opacity-100" fill="currentColor" viewBox="0 0 100 10">
            <path d="M0,5 C20,8 40,2 60,5 C80,8 100,2 100,5" stroke="currentColor" stroke-width="2" fill="none"></path>
          </svg>
        </div>
        <div class="group">
          <div class="mb-2 text-4xl font-bold transition-all duration-300 group-hover:text-indigo-200 md:text-5xl">15+</div>
          <div class="text-indigo-100 transition-all duration-300 group-hover:text-white">Countries Served</div>
          <svg class="mx-auto mt-4 h-1 w-16 text-indigo-300 opacity-0 transition-all duration-300 group-hover:opacity-100" fill="currentColor" viewBox="0 0 100 10">
            <path d="M0,5 C20,8 40,2 60,5 C80,8 100,2 100,5" stroke="currentColor" stroke-width="2" fill="none"></path>
          </svg>
        </div>
        <div class="group">
          <div class="mb-2 text-4xl font-bold transition-all duration-300 group-hover:text-indigo-200 md:text-5xl">98%</div>
          <div class="text-indigo-100 transition-all duration-300 group-hover:text-white">Client Retention</div>
          <svg class="mx-auto mt-4 h-1 w-16 text-indigo-300 opacity-0 transition-all duration-300 group-hover:opacity-100" fill="currentColor" viewBox="0 0 100 10">
            <path d="M0,5 C20,8 40,2 60,5 C80,8 100,2 100,5" stroke="currentColor" stroke-width="2" fill="none"></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative overflow-hidden rounded-3xl bg-white py-5 shadow-xl dark:bg-gray-800">
      <!-- Decorative elements -->
      <div class="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-indigo-100/30 dark:bg-indigo-900/30"></div>
      <div class="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-100/30 dark:bg-purple-900/30"></div>

      <div class="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 class="mb-6 text-3xl font-bold text-gray-800 md:text-4xl dark:text-gray-200">Ready to <span class="text-indigo-600 dark:text-indigo-300">work with us</span>?</h2>
        <p class="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-400">Let's discuss how we can help your business grow and succeed in the digital landscape.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="#" class="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl">
            Get Started
            <svg class="ml-2 h-5 w-5 transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
          <a href="#" class="inline-flex items-center justify-center rounded-lg border border-indigo-600 px-8 py-4 font-medium text-indigo-600 transition-all duration-300 hover:bg-indigo-50 dark:border-indigo-300 dark:text-indigo-300 dark:hover:bg-gray-700">
            Learn More
            <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-gray-900 py-5 text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 md:grid-cols-4">
        <div class="md:col-span-2">
          <h3 class="mb-4 text-xl font-bold">Company</h3>
          <p class="mb-6 text-gray-400">Making technology work for people through innovative solutions and exceptional service.</p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 transition-colors duration-300 hover:text-white">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 transition-colors duration-300 hover:text-white">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 transition-colors duration-300 hover:text-white">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 class="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 transition-colors duration-300 hover:text-white">Home</a></li>
            <li><a href="#" class="text-gray-400 transition-colors duration-300 hover:text-white">About Us</a></li>
            <li><a href="#" class="text-gray-400 transition-colors duration-300 hover:text-white">Services</a></li>
            <li><a href="#" class="text-gray-400 transition-colors duration-300 hover:text-white">Case Studies</a></li>
            <li><a href="#" class="text-gray-400 transition-colors duration-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="mb-4 text-lg font-semibold">Contact</h3>
          <address class="text-gray-400 not-italic">
            <p class="mb-2">123 Business Ave</p>
            <p class="mb-2">San Francisco, CA 94107</p>
            <p class="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@company.com</p>
          </address>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>
`

export const StylishAboutSectionCode=`<div class="mb-28 grid gap-16 md:grid-cols-2 dark:bg-black p-5">
      <div class="order-2 md:order-1">
        <span class="mb-4 inline-block rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-1 text-sm font-medium text-emerald-600 dark:from-emerald-900/30 dark:to-teal-900/30 dark:text-emerald-300">About Us</span>
        <h1 class="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          We <span class="relative whitespace-nowrap text-emerald-500 dark:text-emerald-400">
            <span class="relative z-10">Redefine</span>
            <svg class="absolute -bottom-1 left-0 h-4 w-full text-emerald-200 dark:text-emerald-800" viewBox="0 0 200 20">
              <path d="M0,10 C50,18 150,2 200,10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
            </svg>
          </span> Digital Excellence
        </h1>
        <p class="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          At the intersection of innovation and execution, we craft digital experiences that don't just meet expectations—they redefine them. Founded in 2018, we've grown from a garage startup to a global team of 150+ visionaries.
        </p>
        <div class="flex flex-wrap gap-3">
          <div class="flex items-center rounded-full bg-white px-4 py-2 shadow-sm dark:bg-gray-800">
            <span class="mr-2 flex h-3 w-3 rounded-full bg-emerald-400"></span>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-200">150+ Team Members</span>
          </div>
          <div class="flex items-center rounded-full bg-white px-4 py-2 shadow-sm dark:bg-gray-800">
            <span class="mr-2 flex h-3 w-3 rounded-full bg-amber-400"></span>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Global Presence</span>
          </div>
        </div>
      </div>
      <div class="order-1 md:order-2">
        <div class="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 dark:from-emerald-700/30 dark:to-teal-800/30"></div>
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
               alt="Innovative workspace" 
               class="h-full w-full object-cover transition-transform duration-700 hover:scale-105">
          <div class="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 p-6 shadow-lg backdrop-blur-sm dark:bg-gray-900/90">
            <div class="flex items-center">
              <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Since 2018</p>
                <h3 class="text-lg font-bold text-gray-800 dark:text-white">Pioneering Digital Transformation</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`