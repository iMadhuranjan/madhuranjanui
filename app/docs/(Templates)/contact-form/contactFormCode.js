export const contactPagecode=`   <div class="flex min-h-screen items-center justify-center bg-gray-50 p-4 transition-colors duration-300 dark:bg-gray-900">
  <div class="flex w-full transform flex-col overflow-hidden bg-white shadow-xl transition-transform duration-300 md:flex-row dark:bg-gray-800">
     <div class="w-full p-8 sm:p-10 md:w-1/2 lg:p-12">
      <div class="mb-6 flex items-center">
        <svg class="mr-3 h-10 w-10 text-purple-600 dark:text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
        <h1 class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-3xl font-bold text-transparent dark:from-purple-400 dark:to-blue-300">Contact Us</h1>
      </div>

      <p class="mb-8 text-lg text-gray-600 dark:text-gray-300">We're here to help! Reach out with questions, feedback, or partnership opportunities.</p>

      <form class="space-y-5">
        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </div>
            <input type="text" placeholder="John Doe" class="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-purple-400" />
          </div>
        </div>

        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input type="email" placeholder="your@email.com" class="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-purple-400" />
          </div>
        </div>

        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
          <select class="w-full appearance-none rounded-lg border border-gray-300 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-[length:1.5rem] bg-[right_1rem_center] bg-no-repeat px-4 py-3 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-purple-400">
            <option>General Inquiry</option>
            <option>Technical Support</option>
            <option>Partnership</option>
            <option>Feedback</option>
          </select>
        </div>

        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <div class="relative">
            <div class="absolute top-3 left-3">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
              </svg>
            </div>
            <textarea rows="4" placeholder="Your message here..." class="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-purple-400"></textarea>
          </div>
        </div>

        <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:from-purple-700 hover:to-blue-600 hover:shadow-lg">
          <svg class="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          Send Message
        </button>
      </form>
    </div>

    <div class="flex w-full flex-col justify-center bg-gradient-to-br from-purple-500 to-blue-600 p-8 text-white sm:p-10 md:w-1/2 lg:p-12">
      <h2 class="mb-6 text-2xl font-bold">Other Ways to Connect</h2>

      <div class="space-y-6">
        <div class="flex items-start">
          <div class="mr-4 flex-shrink-0 rounded-full bg-white/20 p-3">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold">Visit Us</h3>
            <p class="opacity-90">123 Business Ave<br />San Francisco, CA 94107</p>
          </div>
        </div>

        <div class="flex items-start">
          <div class="mr-4 flex-shrink-0 rounded-full bg-white/20 p-3">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold">Call Us</h3>
            <p class="opacity-90">+1 (555) 123-4567<br />Mon-Fri, 9am-5pm PST</p>
          </div>
        </div>

        <div class="flex items-start">
          <div class="mr-4 flex-shrink-0 rounded-full bg-white/20 p-3">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold">Support</h3>
            <p class="opacity-90">help@company.com<br />24/7 customer support</p>
          </div>
        </div>
      </div>

      <div class="mt-8 border-t border-white/20 pt-6">
        <h3 class="mb-4 font-semibold">Follow Us</h3>
        <div class="flex space-x-4">
          <a href="#" class="rounded-full bg-white/20 p-2 transition hover:bg-white/30">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a href="#" class="rounded-full bg-white/20 p-2 transition hover:bg-white/30">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" class="rounded-full bg-white/20 p-2 transition hover:bg-white/30">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
          </a>
          <a href="#" class="rounded-full bg-white/20 p-2 transition hover:bg-white/30">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`

export const ContactPageCompoentPageCode=` <div class="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-4 transition-all duration-300 dark:from-gray-900 dark:to-gray-800">
  <div class="w-full max-w-lg overflow-hidden rounded-2xl border border-white/30 bg-white/80 shadow-2xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-gray-800/90">
     <div class="relative bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
      <div class="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 transform rounded-full bg-white/10"></div>
      <div class="relative z-10">
        <h2 class="text-3xl font-bold">Let's Connect</h2>
        <p class="mt-2 opacity-90">We'd love to hear from you. Send us a message!</p>
      </div>
    </div>

     <div class="space-y-5 p-6 md:p-8">
      <form class="space-y-5">
         <div class="relative">
          <input type="text" id="name" class="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-4 py-3 placeholder-transparent transition focus:border-indigo-500 focus:ring-0 dark:border-gray-600 dark:focus:border-purple-400" placeholder=" " />
          <label for="name" class="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-500 dark:text-gray-300 dark:peer-focus:text-purple-400">Full Name</label>
        </div>

        <div class="relative">
          <input type="email" id="email" class="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-4 py-3 placeholder-transparent transition focus:border-indigo-500 focus:ring-0 dark:border-gray-600 dark:focus:border-purple-400" placeholder=" " />
          <label for="email" class="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-500 dark:text-gray-300 dark:peer-focus:text-purple-400">Email Address</label>
        </div>

        <div class="relative">
          <select id="subject" class="peer w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-4 py-3 focus:border-indigo-500 focus:ring-0 dark:border-gray-600 dark:focus:border-purple-400">
            <option value="" selected disabled hidden></option>
            <option>General Inquiry</option>
            <option>Support Request</option>
            <option>Partnership</option>
            <option>Feedback</option>
          </select>
          <label for="subject" class="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-500 dark:text-gray-300 dark:peer-focus:text-purple-400">Subject</label>
          <div class="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 transform">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        <div class="relative">
          <textarea id="message" rows="3" class="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-4 py-3 placeholder-transparent transition focus:border-indigo-500 focus:ring-0 dark:border-gray-600 dark:focus:border-purple-400" placeholder=" "></textarea>
          <label for="message" class="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-500 dark:text-gray-300 dark:peer-focus:text-purple-400">Your Message</label>
        </div>

        <button type="submit" class="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Send Message
        </button>
      </form>

       <div class="relative flex items-center py-5">
        <div class="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <span class="mx-4 flex-shrink text-gray-500 dark:text-gray-400">or</span>
        <div class="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>

       <div class="space-y-4">
        <div class="text-center text-gray-600 dark:text-gray-300">Connect with us on social media</div>
        <div class="flex justify-center space-x-6">
          <a href="#" class="group rounded-full bg-gray-100 p-2 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
            <svg class="h-6 w-6 text-gray-700 transition-colors group-hover:text-indigo-500 dark:text-gray-300 dark:group-hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          <a href="#" class="group rounded-full bg-gray-100 p-2 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
            <svg class="h-6 w-6 text-gray-700 transition-colors group-hover:text-indigo-500 dark:text-gray-300 dark:group-hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a href="#" class="group rounded-full bg-gray-100 p-2 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
            <svg class="h-6 w-6 text-gray-700 transition-colors group-hover:text-indigo-500 dark:text-gray-300 dark:group-hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </a>
          <a href="#" class="group rounded-full bg-gray-100 p-2 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
            <svg class="h-6 w-6 text-gray-700 transition-colors group-hover:text-indigo-500 dark:text-gray-300 dark:group-hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

     <div class="border-t border-gray-100 bg-gray-50 p-6 text-center text-sm text-gray-600 dark:border-gray-700/50 dark:bg-gray-700/30 dark:text-gray-300">
      <p>Prefer direct contact? Email us at <a href="mailto:hello@example.com" class="text-indigo-600 hover:underline dark:text-purple-400">hello@example.com</a></p>
      <p class="mt-1">or call <a href="tel:+1234567890" class="text-indigo-600 hover:underline dark:text-purple-400">+1 (234) 567-890</a></p>
    </div>
  </div>
</div>`

export const ContactPageWithAddressCode=` <div class="bg-gradient-to-br from-violet-50 to-blue-50 px-4 py-12 transition-colors duration-300 sm:px-6 dark:from-gray-900 dark:to-blue-950/50">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
     <div class="rounded-xl border border-white/30 bg-white/80 p-6 text-gray-800 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl sm:p-8 dark:border-gray-700/50 dark:bg-gray-800/90 dark:text-gray-50">
      <div class="mb-6 flex items-center gap-3">
        <svg class="h-8 w-8 text-violet-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
        <h3 class="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-2xl font-bold text-transparent dark:from-violet-400 dark:to-blue-400">Get In Touch</h3>
      </div>

      <form class="space-y-5">
        <div class="relative">
          <input type="text" placeholder=" " class="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-4 py-3 transition focus:border-violet-500 focus:ring-0 dark:border-gray-600 dark:focus:border-blue-400" />
          <label class="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-violet-500 dark:text-gray-300 dark:peer-focus:text-blue-400">Your Name</label>
        </div>

        <div class="relative">
          <input type="email" placeholder=" " class="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-4 py-3 transition focus:border-violet-500 focus:ring-0 dark:border-gray-600 dark:focus:border-blue-400" />
          <label class="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-violet-500 dark:text-gray-300 dark:peer-focus:text-blue-400">Email Address</label>
        </div>

        <div class="relative">
          <textarea rows="3" placeholder=" " class="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-4 py-3 transition focus:border-violet-500 focus:ring-0 dark:border-gray-600 dark:focus:border-blue-400"></textarea>
          <label class="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-violet-500 dark:text-gray-300 dark:peer-focus:text-blue-400">Your Message</label>
        </div>

        <button type="submit" class="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:from-violet-700 hover:to-blue-700 hover:shadow-lg">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          Send Message
        </button>
      </form>
    </div>

     <div class="flex flex-col overflow-hidden rounded-xl border border-white/30 bg-white/80 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl dark:border-gray-700/50 dark:bg-gray-800/90">
      <div class="flex-1 p-6 text-gray-800 sm:p-8 dark:text-gray-50">
        <div class="mb-6 flex items-center gap-3">
          <svg class="h-8 w-8 text-violet-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
          <h3 class="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-2xl font-bold text-transparent dark:from-violet-400 dark:to-blue-400">Find Us</h3>
        </div>

        <div class="space-y-5">
          <div class="flex items-start gap-4">
            <div class="mt-1 flex-shrink-0 rounded-lg bg-violet-100 p-2 dark:bg-blue-900/50">
              <svg class="h-5 w-5 text-violet-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold">Our Location</h4>
              <p class="text-gray-600 dark:text-gray-300">1234 Main Street, Suite 500<br />Example City, XY 12345</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="mt-1 flex-shrink-0 rounded-lg bg-violet-100 p-2 dark:bg-blue-900/50">
              <svg class="h-5 w-5 text-violet-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold">Contact Info</h4>
              <p class="text-gray-600 dark:text-gray-300">
                <a href="mailto:info@company.com" class="transition hover:text-violet-600 dark:hover:text-blue-400">info@company.com</a><br />
                <a href="tel:+15554567890" class="transition hover:text-violet-600 dark:hover:text-blue-400">+1 (555) 456-7890</a>
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="mt-1 flex-shrink-0 rounded-lg bg-violet-100 p-2 dark:bg-blue-900/50">
              <svg class="h-5 w-5 text-violet-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold">Business Hours</h4>
              <p class="text-gray-600 dark:text-gray-300">
                Monday - Friday: 9AM - 5PM<br />
                Saturday: 10AM - 2PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`

export const ContactPageWithCardCode=`<div class="bg-gradient-to-br from-violet-50 to-blue-50 px-4 py-9 transition-colors duration-300 sm:px-6 dark:from-gray-900 dark:to-blue-950">
  <div class="mx-auto mb-16 max-w-4xl text-center">
    <h2 class="mb-4 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl dark:from-violet-400 dark:to-blue-400">Let's Create Something Amazing</h2>
    <p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">Whether you have a project in mind or just want to explore possibilities, we're excited to connect with you.</p>
  </div>

  <div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
    <div class="group relative overflow-hidden rounded-xl border border-white/30 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-gray-700/50 dark:bg-gray-800/90">
      <div class="absolute inset-0 bg-gradient-to-br from-violet-100/50 to-blue-100/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-900/30 dark:to-violet-900/30"></div>
      <div class="relative z-10">
        <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-violet-100 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-900/50">
          <svg class="h-8 w-8 text-violet-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
          </svg>
        </div>
        <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Live Chat Support</h3>
        <p class="mb-6 text-gray-600 dark:text-gray-300">Get instant answers from our friendly support team available 24/7 to assist you.</p>
        <a href="#" class="inline-flex items-center font-medium text-violet-600 transition-colors group-hover:text-violet-700 dark:text-blue-400 dark:group-hover:text-blue-300">
          Start Chat
          <svg class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>

    <div class="group relative overflow-hidden rounded-xl border border-white/30 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-gray-700/50 dark:bg-gray-800/90">
      <div class="absolute inset-0 bg-gradient-to-br from-violet-100/50 to-blue-100/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-900/30 dark:to-violet-900/30"></div>
      <div class="relative z-10">
        <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-violet-100 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-900/50">
          <svg class="h-8 w-8 text-violet-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
          </svg>
        </div>
        <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Schedule a Meeting</h3>
        <p class="mb-6 text-gray-600 dark:text-gray-300">Book a consultation with our experts to discuss your project in detail.</p>
        <a href="#" class="inline-flex items-center font-medium text-violet-600 transition-colors group-hover:text-violet-700 dark:text-blue-400 dark:group-hover:text-blue-300">
          Book Now
          <svg class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>

    <div class="group relative overflow-hidden rounded-xl border border-white/30 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-gray-700/50 dark:bg-gray-800/90">
      <div class="absolute inset-0 bg-gradient-to-br from-violet-100/50 to-blue-100/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-900/30 dark:to-violet-900/30"></div>
      <div class="relative z-10">
        <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-violet-100 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-900/50">
          <svg class="h-8 w-8 text-violet-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
          </svg>
        </div>
        <h3 class="mb-3 text-xl font-bold text-gray-800 dark:text-white">Visit Our Office</h3>
        <p class="mb-6 text-gray-600 dark:text-gray-300">
          1234 Innovation Drive, Suite 500<br />
          Tech City, CA 90210
        </p>
        <a href="#" class="inline-flex items-center font-medium text-violet-600 transition-colors group-hover:text-violet-700 dark:text-blue-400 dark:group-hover:text-blue-300">
          Get Directions
          <svg class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>

  <div class="mx-auto mt-16 max-w-2xl text-center">
    <div class="rounded-xl border border-white/30 bg-white/80 p-8 shadow-lg backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/90">
      <h3 class="mb-4 text-2xl font-bold text-gray-800 dark:text-white">Ready to Start Your Project?</h3>
      <p class="mx-auto mb-6 max-w-lg text-gray-600 dark:text-gray-300">Send us a message and we'll get back to you within 24 hours to discuss how we can help bring your vision to life.</p>
      <a href="#" class="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:from-violet-700 hover:to-blue-700 hover:shadow-lg">
        Contact Our Team
        <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      </a>
    </div>
  </div>
</div>
`

export const ContactPageWithFaqCode=` <div class="bg-gradient-to-b from-violet-50 to-white px-4 py-16 dark:from-blue-900 dark:to-gray-900">
  <div class="mx-auto max-w-6xl text-gray-800 dark:text-gray-50">
     <div class="mb-12 flex flex-col items-center md:flex-row">
      <div class="mb-6 flex items-center justify-center md:mb-0 md:w-1/3">
        <div class="rounded-full bg-gradient-to-r from-violet-600 to-blue-500 p-2">
          <img src="https://via.placeholder.com/150" alt="Company Logo" class="h-24 w-24 rounded-full border-4 border-white object-cover dark:border-gray-900" />
        </div>
      </div>
      <div class="text-center md:w-2/3 md:pl-8 md:text-left">
        <h2 class="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-4xl font-extrabold text-transparent dark:from-violet-400 dark:to-blue-300">Get In Touch</h2>
        <p class="mt-3 max-w-2xl text-lg text-gray-600 dark:text-gray-300">Have questions or need assistance? Our team is ready to help you with any inquiries.</p>
      </div>
    </div>

     <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
       <div class="rounded-sm bg-white p-8 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
        <div class="mb-6 flex items-center">
          <div class="rounded-lg bg-violet-100 p-2 dark:bg-blue-900/30">
            <svg class="h-6 w-6 text-violet-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          <h3 class="ml-3 text-xl font-bold">Contact Information</h3>
        </div>

        <p class="mb-6 text-gray-600 dark:text-gray-300">Reach out directly or browse our FAQ section for quick answers.</p>

        <div class="space-y-4">
          <div class="flex items-start">
            <svg class="mt-0.5 mr-3 h-5 w-5 text-violet-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <div>
              <p class="font-medium">Email Address</p>
              <a href="mailto:contact@company.com" class="text-violet-600 hover:underline dark:text-blue-400">contact@company.com</a>
            </div>
          </div>

          <div class="flex items-start">
            <svg class="mt-0.5 mr-3 h-5 w-5 text-violet-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <div>
              <p class="font-medium">Phone Number</p>
              <a href="tel:+15551234567" class="text-violet-600 hover:underline dark:text-blue-400">(555) 123-4567</a>
            </div>
          </div>

          <div class="flex items-start">
            <svg class="mt-0.5 mr-3 h-5 w-5 text-violet-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <div>
              <p class="font-medium">Office Location</p>
              <p class="text-gray-600 dark:text-gray-300">123 Business Ave, Suite 400<br />San Francisco, CA 94107</p>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <p class="mb-3 text-sm font-medium">Follow Us</p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-600 transition hover:text-violet-600 dark:text-gray-300 dark:hover:text-blue-400">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.323-.595 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" class="text-gray-600 transition hover:text-violet-600 dark:text-gray-300 dark:hover:text-blue-400">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href="#" class="text-gray-600 transition hover:text-violet-600 dark:text-gray-300 dark:hover:text-blue-400">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.323-.595 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

       <div class="rounded-sm bg-white p-8 shadow-lg transition-shadow hover:shadow-xl lg:col-span-2 dark:bg-gray-800">
        <h3 class="mb-6 text-xl font-bold">Send Us a Message</h3>
        <form class="space-y-5">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
              <input type="text" class="w-full rounded-lg border border-gray-300 p-3 transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="John" required />
            </div>
            <div>
              <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
              <input type="text" class="w-full rounded-lg border border-gray-300 p-3 transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="Doe" required />
            </div>
          </div>

          <div>
            <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <input type="email" class="w-full rounded-lg border border-gray-300 p-3 transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="your@email.com" required />
          </div>

          <div>
            <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
            <input type="text" class="w-full rounded-lg border border-gray-300 p-3 transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="How can we help?" required />
          </div>

          <div>
            <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
            <textarea rows="5" class="w-full rounded-lg border border-gray-300 p-3 transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100" placeholder="Tell us about your inquiry..." required></textarea>
          </div>

          <button type="submit" class="w-full rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-3 font-medium text-white shadow transition duration-300 hover:from-violet-700 hover:to-blue-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800">Send Message</button>
        </form>
      </div>
    </div>

     <div class="mt-16 rounded-sm bg-white p-8 shadow-lg dark:bg-gray-800">
      <div class="mb-10 text-center">
        <h3 class="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent dark:from-violet-400 dark:to-blue-300">Frequently Asked Questions</h3>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Find quick answers to common questions below</p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-700/50">
          <h4 class="flex items-center text-lg font-semibold">
            <svg class="mr-2 h-5 w-5 text-violet-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            How quickly will I receive a response?
          </h4>
          <p class="mt-2 text-gray-600 dark:text-gray-300">Our support team typically responds within 24 hours during business days. For urgent matters, please call our support line.</p>
        </div>

        <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-700/50">
          <h4 class="flex items-center text-lg font-semibold">
            <svg class="mr-2 h-5 w-5 text-violet-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Where can I find service details?
          </h4>
          <p class="mt-2 text-gray-600 dark:text-gray-300">Visit our Services page for comprehensive information about all offerings. You can also request a custom quote through our contact form.</p>
        </div>

        <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-700/50">
          <h4 class="flex items-center text-lg font-semibold">
            <svg class="mr-2 h-5 w-5 text-violet-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            What are your business hours?
          </h4>
          <p class="mt-2 text-gray-600 dark:text-gray-300">Our office is open Monday-Friday from 9AM to 6PM EST. After-hours support is available for premium service plans.</p>
        </div>

        <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-700/50">
          <h4 class="flex items-center text-lg font-semibold">
            <svg class="mr-2 h-5 w-5 text-violet-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Do you offer emergency support?
          </h4>
          <p class="mt-2 text-gray-600 dark:text-gray-300">Yes, we provide 24/7 emergency support for critical issues. Additional fees may apply for after-hours emergency services.</p>
        </div>
      </div>

      <div class="mt-8 text-center">
        <p class="text-gray-600 dark:text-gray-300">Still have questions? <a href="#" class="font-medium text-violet-600 hover:underline dark:text-blue-400">Contact our support team</a></p>
      </div>
    </div>
  </div>
</div>`