export const MaintanceCardCode=`<div class="flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 p-6">
  <div class="bg-opacity-90 max-w-lg rounded-lg bg-gray-900 p-10 text-center shadow-2xl">
    <!-- Rotating Gear Icon -->
    <div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-800">
      <svg class="h-12 w-12 animate-spin text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v.01M12 18v.01M6.343 6.343l.01.01M17.657 17.657l.01.01M6 12h.01M18 12h.01M6.343 17.657l.01-.01M17.657 6.343l.01-.01" />
      </svg>
    </div>
    <!-- Maintenance Message -->
    <h1 class="mb-4 text-4xl font-extrabold text-white sm:text-5xl">We&rsquo;ll Be Back Soon!</h1>
    <p class="mb-8 text-lg text-gray-300">Our website is currently undergoing scheduled maintenance. We’re working hard to improve our service and will be back online shortly. Thank you for your patience.</p>
    <!-- Contact Button -->
    <a href="mailto:support@example.com" class="inline-block rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-colors duration-300 hover:bg-indigo-700"> Contact Support </a>
    <!-- Footer Note -->
    <p class="mt-8 text-xs text-gray-500">&copy; 2023 Your Company Name. All rights reserved.</p>
  </div>
</div>
`
export const SystemMaintanceCode=`<div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
  <!-- Geometric background pattern -->
  <div class="absolute inset-0 opacity-10 dark:opacity-20">
    <svg class="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0,0 L100,0 L100,100 L0,100 Z M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" stroke-width="0.5" class="text-gray-300 dark:text-gray-700"></path>
      <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="currentColor" stroke-width="0.5" class="text-gray-300 dark:text-gray-700"></path>
    </svg>
  </div>

  <!-- Floating tools illustration -->
  <div class="animate-float absolute top-1/4 left-1/4 h-16 w-16 opacity-80">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-blue-500 dark:text-blue-400">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
  <div class="animate-float-delay absolute top-1/3 right-1/4 h-20 w-20 opacity-60">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-amber-500 dark:text-amber-400">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>

  <!-- Main content -->
  <div class="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
    <!-- Warning icon -->
    <div class="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-amber-500 dark:bg-amber-900/50 dark:text-amber-400">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    </div>

    <!-- Headline -->
    <h1 class="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
      <span class="block">System</span>
      <span class="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-amber-400">Maintenance</span>
    </h1>

    <!-- Description -->
    <div class="mx-auto mb-10 max-w-2xl space-y-4 text-gray-600 dark:text-gray-300">
      <p class="text-lg">We're performing scheduled maintenance to improve your experience.</p>
      <p class="text-lg">Our team is working hard to bring everything back online as soon as possible.</p>
    </div>

    <!-- Progress indicator -->
    <div class="mb-10 w-full max-w-md">
      <div class="mb-2 flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>Maintenance Progress</span>
        <span>65%</span>
      </div>
      <div class="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div class="h-full bg-gradient-to-r from-blue-500 to-amber-500" style="width: 65%"></div>
      </div>
    </div>

    <!-- Status cards -->
    <div class="mb-12 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
        <div class="text-gray-700 dark:text-gray-300">Team Working</div>
      </div>
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="mb-2 text-3xl font-bold text-amber-600 dark:text-amber-400">99.9%</div>
        <div class="text-gray-700 dark:text-gray-300">Uptime Guarantee</div>
      </div>
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">30min</div>
        <div class="text-gray-700 dark:text-gray-300">Estimated Completion</div>
      </div>
    </div>

    <!-- Contact info -->
    <div class="text-sm text-gray-500 dark:text-gray-400">
      <p>Need immediate assistance? Contact our support team:</p>
      <p class="mt-2 font-medium text-blue-600 dark:text-blue-400">support@company.com</p>
    </div>
  </div>
</div>
`

export const SystemRebootCode=`<div class="relative min-h-screen overflow-hidden bg-gray-950 text-cyan-100">
  <!-- Circuit board grid background -->
  <div class="absolute inset-0 opacity-20">
    <svg class="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0,0 L100,0 L100,100 L0,100 Z M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" stroke-width="0.3" stroke-dasharray="1,1"></path>
      <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" stroke-width="0.3" stroke-dasharray="1,1"></path>
      <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="0.2" stroke-dasharray="1,1"></line>
      <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" stroke-width="0.2" stroke-dasharray="1,1"></line>
    </svg>
  </div>

  <!-- Animated scanning line -->
  <div class="animate-scan absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"></div>

  <!-- Floating tech elements -->
  <div class="absolute top-1/4 left-1/5 h-12 w-12 animate-pulse opacity-70">
    <svg viewBox="0 0 24 24" class="text-purple-400">
      <path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" />
    </svg>
  </div>
  <div class="absolute top-1/3 right-1/4 h-14 w-14 animate-pulse opacity-60 delay-1000">
    <svg viewBox="0 0 24 24" class="text-amber-300">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      <path fill="currentColor" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  </div>

  <!-- Main content -->
  <div class="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
    <!-- Holographic status indicator -->
    <div class="relative mb-10">
      <div class="absolute -inset-2 rounded-full bg-cyan-400/20 blur-md"></div>
      <div class="relative flex h-28 w-28 items-center justify-center rounded-full bg-gray-900 ring-2 ring-cyan-400/50">
        <div class="animate-spin-slow h-20 w-20 rounded-full border-4 border-dashed border-cyan-400/30"></div>
        <div class="absolute flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-cyan-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Headline with glitch effect -->
    <h1 class="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
      <span class="block text-cyan-300">SYSTEM</span>
      <span class="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">REBOOT IN PROGRESS</span>
    </h1>

    <!-- Description with terminal-style animation -->
    <div class="mx-auto mb-10 max-w-2xl border-l-2 border-cyan-400/50 pl-4 text-left font-mono">
      <p class="mb-2 text-cyan-300">> Maintenance_Initiated.exe</p>
      <p class="mb-2 text-cyan-100">> Running system diagnostics...</p>
      <p class="mb-2 text-amber-300">> Upgrading security protocols [65%]</p>
      <p class="text-green-300">> Estimated completion: <span class="text-cyan-400">00:34:27</span></p>
    </div>

    <!-- Tech specs grid -->
    <div class="mb-12 grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
      <div class="rounded-lg border border-cyan-400/20 bg-gray-900/50 p-4 backdrop-blur-sm">
        <div class="font-mono text-2xl font-bold text-cyan-400">98.7%</div>
        <div class="mt-1 text-xs text-gray-400">SYSTEM INTEGRITY</div>
      </div>
      <div class="rounded-lg border border-purple-400/20 bg-gray-900/50 p-4 backdrop-blur-sm">
        <div class="font-mono text-2xl font-bold text-purple-400">v4.2.1</div>
        <div class="mt-1 text-xs text-gray-400">UPDATE VERSION</div>
      </div>
      <div class="rounded-lg border border-amber-400/20 bg-gray-900/50 p-4 backdrop-blur-sm">
        <div class="font-mono text-2xl font-bold text-amber-400">12</div>
        <div class="mt-1 text-xs text-gray-400">ACTIVE NODES</div>
      </div>
      <div class="rounded-lg border border-green-400/20 bg-gray-900/50 p-4 backdrop-blur-sm">
        <div class="font-mono text-2xl font-bold text-green-400">0</div>
        <div class="mt-1 text-xs text-gray-400">CRITICAL ERRORS</div>
      </div>
    </div>

    <!-- Status message -->
    <div class="mx-auto mb-8 max-w-lg text-sm text-cyan-300/80">
      <p>This scheduled maintenance will enhance performance and security.</p>
      <p class="mt-2">All systems will automatically restore when complete.</p>
    </div>

    <!-- Emergency contact -->
    <div class="border-t border-gray-800 pt-6 text-xs text-gray-500">
      <p>URGENT ISSUES? CONTACT <span class="text-cyan-400">CRISIS@SYSDOMAIN.COM</span></p>
    </div>
  </div>
</div>
`

export const SystemMaintanceAdvancedCode=`<div class="relative min-h-screen overflow-hidden bg-gray-950 text-gray-100">
  <!-- Circuit board background pattern -->
  <div class="absolute inset-0 opacity-10">
    <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="1 2"></path>
      <path d="M50,0 L50,100 M0,50 L100,50" stroke="currentColor" stroke-width="0.3"></path>
      <circle cx="20" cy="20" r="1" fill="currentColor"></circle>
      <circle cx="80" cy="20" r="1" fill="currentColor"></circle>
      <circle cx="20" cy="80" r="1" fill="currentColor"></circle>
      <circle cx="80" cy="80" r="1" fill="currentColor"></circle>
    </svg>
  </div>

  <!-- Animated status lights -->
  <div class="absolute top-8 right-8 flex gap-3">
    <span class="h-3 w-3 animate-pulse rounded-full bg-red-500"></span>
    <span class="h-3 w-3 animate-pulse rounded-full bg-yellow-500 delay-100"></span>
    <span class="h-3 w-3 animate-pulse rounded-full bg-green-500 delay-200"></span>
  </div>

  <div class="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-16 sm:px-8">
    <!-- Animated server rack icon -->
    <div class="mb-12">
      <div class="relative h-24 w-24">
        <div class="absolute inset-0 rounded-lg bg-gray-800 shadow-lg">
          <div class="absolute top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gray-600"></div>
          <div class="absolute top-5 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gray-600"></div>
          <div class="absolute top-8 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gray-600"></div>
          <div class="absolute top-11 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gray-600"></div>
          <div class="absolute top-14 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gray-600"></div>
          <div class="absolute top-17 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gray-600"></div>
          <div class="absolute top-20 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gray-600"></div>
        </div>
        <div class="absolute -bottom-2 left-1/2 h-4 w-12 -translate-x-1/2 rounded-b-lg bg-gray-700"></div>
        <div class="absolute top-1/2 -left-2 h-12 w-4 -translate-y-1/2 rounded-l-lg bg-gray-700"></div>
        <div class="absolute top-1/2 -right-2 h-12 w-4 -translate-y-1/2 rounded-r-lg bg-gray-700"></div>
      </div>
    </div>

    <!-- Headline -->
    <h1 class="mb-6 text-center text-4xl font-bold sm:text-5xl">
      <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">System Maintenance</span>
      <br />In Progress
    </h1>

    <!-- Status message -->
    <div class="mb-8 w-full max-w-lg rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
      <div class="flex items-start gap-4">
        <svg class="h-6 w-6 flex-shrink-0 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
        <div>
          <h2 class="mb-2 text-lg font-semibold">Scheduled Infrastructure Upgrade</h2>
          <p class="text-gray-400">We're currently performing critical maintenance to improve performance and reliability. Our systems will be back online shortly.</p>
        </div>
      </div>
    </div>

    <!-- Progress indicators -->
    <div class="mb-12 w-full max-w-md">
      <div class="mb-4 flex justify-between text-sm text-gray-400">
        <span>Update Progress</span>
        <span>65% Complete</span>
      </div>
      <div class="h-2 w-full overflow-hidden rounded-full bg-gray-800">
        <div class="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-500" style="animation: progressBar 3s ease-in-out infinite alternate;"></div>
      </div>
      <div class="mt-2 text-right text-xs text-gray-500">Estimated completion: 45 minutes</div>
    </div>

    <!-- What's being improved -->
    <div class="mb-12 grid gap-6 sm:grid-cols-2">
      <div class="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
        <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/50 text-blue-400">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 class="mb-2 text-lg font-semibold">Performance Boost</h3>
        <p class="text-gray-400">Upgrading servers for 3x faster response times and smoother user experience.</p>
      </div>
      <div class="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
        <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-900/50 text-purple-400">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </div>
        <h3 class="mb-2 text-lg font-semibold">Enhanced Security</h3>
        <p class="text-gray-400">Implementing new security protocols to better protect your data.</p>
      </div>
    </div>

    <!-- Support contact -->
    <div class="text-center">
      <p class="mb-4 text-gray-400">Need immediate assistance?</p>
      <a href="mailto:support@example.com" class="inline-flex items-center gap-2 rounded-lg border border-gray-800 bg-gray-900 px-6 py-3 font-medium hover:bg-gray-800">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        Contact Support
      </a>
    </div>

    <!-- Animated floating dots -->
    <div class="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-900/20 blur-xl"></div>
    <div class="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-purple-900/20 blur-xl"></div>
  </div>

  <!-- Footer -->
  <div class="absolute right-0 bottom-0 left-0 border-t border-gray-800/50 py-4 text-center text-sm text-gray-500">
    <p>© 2023 Your Company. All rights reserved.</p>
  </div>
</div>
`

export const QuantumMaintanceCode=  `<div class="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black text-white dark:bg-black dark:text-white">
  <!-- Quantum particle background -->
  <div class="absolute inset-0 opacity-30">
    <div class="absolute h-full w-full [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]">
      <svg class="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="quantum-dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="0.5" fill="currentColor" class="text-indigo-500/50"></circle>
            <circle cx="40" cy="20" r="0.8" fill="currentColor" class="text-blue-400/40"></circle>
            <circle cx="20" cy="40" r="0.6" fill="currentColor" class="text-purple-500/60"></circle>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#quantum-dots)"></rect>
      </svg>
    </div>
  </div>

  <!-- Floating quantum orbs -->
  <div class="animate-orb-pulse absolute -top-[300px] -left-[200px] -z-10 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-indigo-600/10 to-blue-600/10 blur-[100px]"></div>
  <div class="animate-orb-pulse-delay absolute -right-[200px] -bottom-[300px] -z-10 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-[120px]"></div>

  <!-- Main content -->
  <div class="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
    <!-- Quantum loader -->
    <div class="relative mb-12 h-32 w-32">
      <div class="animate-spin-slow absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30"></div>
      <div class="animate-spin-slow-reverse absolute inset-4 rounded-full border-2 border-dashed border-purple-400/30"></div>
      <div class="animate-spin-medium absolute inset-8 rounded-full border-2 border-dashed border-indigo-400/30"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="h-6 w-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-400/30"></div>
      </div>
    </div>

    <!-- Headline with quantum effect -->
    <h1 class="mb-8 text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
      <span class="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Quantum</span>
      <span class="block bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Maintenance</span>
    </h1>

    <!-- Status message -->
    <div class="mx-auto mb-12 max-w-2xl space-y-6">
      <p class="text-xl text-blue-200/90">We're performing <span class="font-medium text-purple-300">quantum-level optimizations</span> to deliver unparalleled performance.</p>
      <div class="inline-flex items-center rounded-full border border-gray-700/50 bg-gray-800/50 px-4 py-2 backdrop-blur-sm">
        <div class="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
        <span class="font-mono text-sm text-green-300">SYSTEMS STABILIZING</span>
      </div>
    </div>

    <!-- Quantum progress matrix -->
    <div class="mb-16 w-full max-w-3xl">
      <div class="mb-4 grid grid-cols-5 gap-2">
        <div class="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
        <div class="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" style="width: 85%"></div>
        <div class="h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600" style="width: 65%"></div>
        <div class="h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600" style="width: 45%"></div>
        <div class="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600" style="width: 25%"></div>
      </div>
      <div class="flex justify-between font-mono text-xs text-gray-400">
        <span>Q-BIT STABILIZATION</span>
        <span>72% COMPLETE</span>
      </div>
    </div>

    <!-- Quantum status modules -->
    <div class="mb-16 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
      <div class="rounded-xl border border-gray-700/30 bg-gray-800/30 p-6 backdrop-blur-sm transition-colors hover:border-blue-400/30">
        <div class="mb-2 text-3xl font-bold text-blue-400">9.8K</div>
        <div class="text-sm text-blue-200/80">QUANTUM OPERATIONS</div>
        <div class="mt-4 h-1 w-full rounded-full bg-gray-700">
          <div class="h-1 rounded-full bg-blue-400" style="width: 92%"></div>
        </div>
      </div>
      <div class="rounded-xl border border-gray-700/30 bg-gray-800/30 p-6 backdrop-blur-sm transition-colors hover:border-purple-400/30">
        <div class="mb-2 text-3xl font-bold text-purple-400">14ns</div>
        <div class="text-sm text-purple-200/80">LATENCY IMPROVEMENT</div>
        <div class="mt-4 h-1 w-full rounded-full bg-gray-700">
          <div class="h-1 rounded-full bg-purple-400" style="width: 78%"></div>
        </div>
      </div>
      <div class="rounded-xl border border-gray-700/30 bg-gray-800/30 p-6 backdrop-blur-sm transition-colors hover:border-indigo-400/30">
        <div class="mb-2 text-3xl font-bold text-indigo-400">100%</div>
        <div class="text-sm text-indigo-200/80">DATA INTEGRITY</div>
        <div class="mt-4 h-1 w-full rounded-full bg-gray-700">
          <div class="h-1 rounded-full bg-indigo-400" style="width: 100%"></div>
        </div>
      </div>
    </div>

    <!-- Quantum countdown -->
    <div class="mb-8 text-center">
      <div class="mb-2 text-sm text-gray-400">ESTIMATED COMPLETION</div>
      <div class="font-mono text-4xl font-bold text-blue-300">00:24:37</div>
    </div>

    <!-- Emergency portal -->
    <div class="border-t border-gray-800 pt-8 text-xs text-gray-500">
      <p>QUANTUM ENTANGLEMENT REQUIRED? <span class="text-blue-400">CONTACT@QUANTUMSYS.COM</span></p>
    </div>
  </div>
</div>
`