export function SimpleStartsCard(){
    return(
      <div className="mx-auto max-w-7xl p-4">
      <div className="flex flex-wrap items-center justify-center gap-5 p-4">
        <div className="w-52 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">Users</p>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">1,234</p>
        </div>
        <div className="w-52 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">Revenue</p>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$56K</p>
        </div>
        <div className="w-52 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">Orders</p>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">789</p>
        </div>
        <div className="w-52 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">Reviews</p>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">123</p>
        </div>
      </div>
    </div>
    
    )
}

export function SimppleStats(){
  return(
    <section className="py-20 bg-white dark:bg-gray-900">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center p-6 lg:border-r border-gray-200 dark:border-gray-700">
          <div className="font-bold text-4xl md:text-5xl text-indigo-600 dark:text-indigo-400 mb-3 leading-none whitespace-nowrap">
            350+
          </div>
          <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center font-medium">
            Certified Experts
          </span>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center p-6 border-t sm:border-t-0 lg:border-r border-gray-200 dark:border-gray-700">
          <div className="font-bold text-4xl md:text-5xl text-indigo-600 dark:text-indigo-400 mb-3 leading-none whitespace-nowrap">
            1.2K+
          </div>
          <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center font-medium">
            Happy Clients
          </span>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center p-6 border-t sm:border-t-0 lg:border-r border-gray-200 dark:border-gray-700">
          <div className="font-bold text-4xl md:text-5xl text-indigo-600 dark:text-indigo-400 mb-3 leading-none whitespace-nowrap">
            850+
          </div>
          <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center font-medium">
            Projects Completed
          </span>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center p-6 border-t sm:border-t-0">
          <div className="font-bold text-4xl md:text-5xl text-indigo-600 dark:text-indigo-400 mb-3 leading-none whitespace-nowrap">
            98%
          </div>
          <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center font-medium">
            Customer Satisfaction
          </span>
        </div>
      </div>
    </div>
  </section>
  
  
  )
}

export function StatsWithCustomColor(){
  return(
    <div className="mx-auto max-w-7xl px-4 py-10 bg-white dark:bg-gray-900">
  <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8 text-center">
    <div className="md:w-1/3">
      <h3 className="text-5xl font-extrabold text-purple-600">15M+</h3>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        We’ve empowered over fifteen million people around the world, making their day-to-day tasks simpler and more efficient.
      </p>
    </div>
    <div className="md:w-1/3">
      <h3 className="text-5xl font-extrabold text-purple-600">60M+</h3>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Our app is one of the top downloads on Google Play and the Apple App Store, providing a seamless user experience for everyone.
      </p>
    </div>
    <div className="md:w-1/3">
      <h3 className="text-5xl font-extrabold text-purple-600">99%</h3>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        We consistently achieve a 99% satisfaction rate, with users praising our intuitive design and reliable performance.
      </p>
    </div>
  </div>
</div>

  )
}

export function StatesWithIndicator(){
  return(
    <div className="mx-auto max-w-7xl bg-white px-4 py-10 dark:bg-gray-900">
  <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
     <div>
      <p className="mb-2 text-gray-500 dark:text-gray-400">Expert Consultants</p>
      <div className="flex items-center justify-center space-x-2">
        <span className="inline-block h-3 w-3 rounded-sm bg-purple-600"></span>
        <span className="text-3xl font-bold text-gray-900 dark:text-white">260+</span>
      </div>
    </div>
     <div>
      <p className="mb-2 text-gray-500 dark:text-gray-400">Active Clients</p>
      <div className="flex items-center justify-center space-x-2">
        <span className="inline-block h-3 w-3 rounded-sm bg-yellow-500"></span>
        <span className="text-3xl font-bold text-gray-900 dark:text-white">975+</span>
      </div>
    </div>
     <div>
      <p className="mb-2 text-gray-500 dark:text-gray-400">Projects Delivered</p>
      <div className="flex items-center justify-center space-x-2">
        <span className="inline-block h-3 w-3 rounded-sm bg-pink-500"></span>
        <span className="text-3xl font-bold text-gray-900 dark:text-white">724+</span>
      </div>
    </div>
     <div>
      <p className="mb-2 text-gray-500 dark:text-gray-400">Orders in Queue</p>
      <div className="flex items-center justify-center space-x-2">
        <span className="inline-block h-3 w-3 rounded-sm bg-teal-500"></span>
        <span className="text-3xl font-bold text-gray-900 dark:text-white">89+</span>
      </div>
    </div>
  </div>
</div>

  )
}

export function StatsWithIcons(){
  return(
<section className="py-5 bg-white dark:bg-gray-900 flex justify-center items-center">
  <div className="mx-auto px-4 ">

    <div className="flex justify-center items-center flex-wrap p-4 gap-4">

       <div className="relative group p-4 w-72 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg">
        <div className="absolute top-6 right-6 w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77-.064 2.17-.887 3.332-2.602 3.467-1.98.146-3.263-1.485-2.913-3.442.425-2.344 1.34-4.356 1.686-4.795zM0 12.735c.136 3.104 1.17 5.785 3.547 6.875 2.378 1.088 6.632.907 9.353-.485 2.72-1.393 3.12-3.53 3.12-3.53s-1.393 1.988-4.532 3.104c-3.136 1.116-7.15 1.18-9.66-.122C.433 16.21 0 14.17 0 12.735zm6.635-2.512c-1.087 2.05-1.393 4.665-.995 6.295.4 1.63 1.53 3.442 4.122 3.665 2.594.22 4.33-1.95 4.15-4.05-.18-2.093-1.18-4.737-2.6-6.07-1.42-1.33-3.34-1.93-4.677-.84zm15.822 2.53c1.53 1.77 1.82 4.88.658 6.29-1.16 1.41-3.462 1.66-4.84.25-1.38-1.41-1.61-4.23-.41-6.08 1.2-1.85 3.35-2.3 4.6-.46zM12 22.02c5.407 0 9.79-4.373 9.79-9.767S17.407 2.48 12 2.48 2.21 6.853 2.21 12.253 6.593 22.02 12 22.02z"/>
          </svg>
        </div>
        <div className="text-5xl font-bold text-gray-800 dark:text-white mb-2">260+</div>
        <div className="text-lg font-medium text-gray-600 dark:text-gray-300">Ruby Experts</div>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400"> Sevelopers with 5+ years experience</div>
      </div>
 
       <div className="relative group  w-72 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg">
        <div className="absolute top-6 right-6 w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-8 h-8 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.572 2.383a1.839 1.839 0 00-1.945 0L1.077 7.233a1.838 1.838 0 000 3.204l8.55 4.85a1.839 1.839 0 001.945 0l8.55-4.85a1.838 1.838 0 000-3.204l-8.55-4.85zM1.677 17.677v4.694a1.839 1.839 0 002.572 1.645l8.55-4.85a1.838 1.838 0 00.918-1.59v-4.694l-6.735 3.877a1.838 1.838 0 01-1.836.015l-3.469-1.997zm20.646 0l-3.469 1.997a1.838 1.838 0 01-1.836-.015l-6.735-3.877v4.694c0 .653.35 1.255.918 1.59l8.55 4.85a1.839 1.839 0 002.572-1.645v-4.694z"/>
          </svg>
        </div>
        <div className="text-5xl font-bold text-gray-800 dark:text-white mb-2">975+</div>
        <div className="text-lg font-medium text-gray-600 dark:text-gray-300">Next.js Projects</div>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">High-performance React applications</div>
      </div>

         <div className="relative group p-4 w-72 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg">
        <div className="absolute top-6 right-6 w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div className="text-5xl font-bold text-gray-800 dark:text-white mb-2">724+</div>
        <div className="text-lg font-medium text-gray-600 dark:text-gray-300">Projects Delivered</div>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">On-time completion rate: 98%</div>
      </div>

    </div>
  </div>
</section>
  )
}

export function StatsWithHorizontalDescritpion(){
  return(
    <section className="py-5 bg-gray-50 dark:bg-gray-900">
  <div className="mx-auto px-4 text-center">
    <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white">
      Our results in numbers
    </h3>
    <p className="mt-2 text-gray-600 dark:text-gray-300">
      Using the following Tailwind CSS Stats you can show stats, heading, and description horizontally.
    </p>

    <div className="mt-10 flex justify-center items-center gap-5 flex-wrap">

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left w-full md:w-72">
        <span className="text-indigo-600 dark:text-indigo-400 text-3xl font-bold">240%</span>
        <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">Company growth</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-300">
          Company's remarkable growth journey as we continually innovate and drive towards new heights of success.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left w-full md:w-72">
        <span className="text-indigo-600 dark:text-indigo-400 text-3xl font-bold">175+</span>
        <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">Team members</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-300">
          Our very talented team members are the powerhouse of Pagedone and pillars of our success.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left w-full md:w-72">
        <span className="text-indigo-600 dark:text-indigo-400 text-3xl font-bold">625+</span>
        <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">Projects Completed</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-300">
          We have accomplished more than 625 projects worldwide and we are still counting many more.
        </p>
      </div>

    </div>
  </div>
</section>

  )
}

export function StatsWithTreingNumber(){
  return(
    <div className="mx-auto p-3">
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-black">
      <div className="grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-4 md:divide-x md:divide-y-0 dark:divide-gray-700">
         <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">Revenue</span>
            <span className="text-xs font-semibold text-green-500">+4.53%</span>
          </div>
          <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$405,097.00</div>
        </div>
         <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">Overdue invoices</span>
            <span className="text-xs font-semibold text-red-500">+14.06%</span>
          </div>
          <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$12,787.00</div>
        </div>
         <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">Outstanding invoices</span>
            <span className="text-xs font-semibold text-green-500">-1.93%</span>
          </div>
          <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$245,988.00</div>
        </div>
         <div className="p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">Expenses</span>
            <span className="text-xs font-semibold text-red-500">+10.08%</span>
          </div>
          <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$30,156.00</div>
        </div>
      </div>
    </div>
  </div>
  

  )
}