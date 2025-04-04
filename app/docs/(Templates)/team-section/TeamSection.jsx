export function SimpleTeamCard() {
  return (
    <div className="mx-auto w-full px-4 py-5">
      <h2 className="mb-5 text-center text-3xl font-bold text-gray-900 dark:text-white">
        Our Creative Team
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex w-52 flex-col items-center rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800">
          <img
            src="/avatar/avatar4.jpg"
            alt="Alice Green"
            className="mb-4 h-32 w-32 rounded-full border-4 border-violet-100 object-cover dark:border-blue-900"
          />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Alice Green
          </h3>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
            Marketing Lead
          </p>
          <div className="mt-2 flex gap-4">
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-violet-600 dark:hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-violet-600 dark:hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-violet-600 dark:hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex w-52 flex-col items-center rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800">
          <img
            src="/avatar/avatar3.jpg"
            alt="Bob Johnson"
            className="mb-4 h-32 w-32 rounded-full border-4 border-violet-100 object-cover dark:border-blue-900"
          />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Bob Johnson
          </h3>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
            UI/UX Designer
          </p>
          <div className="mt-2 flex gap-4">
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-violet-600 dark:hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-violet-600 dark:hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-violet-600 dark:hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex w-52 flex-col items-center rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800">
          <img
            src="/avatar/avatar2.jpg"
            alt="Sarah Chen"
            className="mb-4 h-32 w-32 rounded-full border-4 border-violet-100 object-cover dark:border-blue-900"
          />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Sarah Chen
          </h3>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
            Frontend Developer
          </p>
          <div className="mt-2 flex gap-4">
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-violet-600 dark:hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-violet-600 dark:hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-violet-600 dark:hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex w-52 flex-col items-center rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800">
          <img
            src="/avatar/girl.jpeg"
            alt="Sarah Chen"
            className="mb-4 h-32 w-32 rounded-full border-4 border-violet-100 object-cover dark:border-blue-900"
          />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Madhuranjan
          </h3>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
            Full Stack Developer
          </p>
          <div className="mt-2 flex gap-4">
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-violet-600 dark:hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-violet-600 dark:hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 transition-colors hover:text-violet-600 dark:hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export function TeamSectionWithDescripion(){
    return(
        <div className="flex items-center justify-center gap-4 p-4">
  <div className="flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-900">
    <div className="w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
      <img className="h-56 w-full object-cover" src="/avatar/avatar2.jpg" alt="Profile Photo" />

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Lauren Brooks</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">CEO &amp; Co-Founder</p>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Lauren drives the technical strategy of our platform and brand, ensuring top performance and innovation for all products and services.</p>

        <div className="mt-4 flex items-center space-x-4 text-gray-400 dark:text-gray-500">
          <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.59-2.46.69.89-.53 1.57-1.36 1.89-2.36-.83.49-1.74.84-2.71 1.03a4.22 4.22 0 0 0-7.19 2.88c0 .33.03.64.1.94C9.04 8.87 5.75 7 3.39 4.33a4.2 4.2 0 0 0-.57 2.13 4.22 4.22 0 0 0 1.88 3.51 4.2 4.2 0 0 1-1.91-.53v.05a4.23 4.23 0 0 0 3.38 4.14 4.26 4.26 0 0 1-1.9.07 4.23 4.23 0 0 0 3.94 2.93A8.47 8.47 0 0 1 2 17.53a11.93 11.93 0 0 0 6.45 1.89c7.75 0 12-6.54 11.75-12.41.82-.59 1.53-1.33 2.09-2.18Z" />
            </svg>
          </a>
          <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.326 24h11.49v-9.294H9.847v-3.62h2.969V8.413c0-2.938 1.792-4.54 4.41-4.54 1.253 0 2.33.093 2.642.135v3.065l-1.814.001c-1.422 0-1.697.676-1.697 1.67v2.187h3.389l-.442 3.62h-2.947V24h5.777c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.406 0 22.676 0" />
            </svg>
          </a>
          <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.3 3.438 9.799 8.205 11.387.6.11.82-.258.82-.577 
              0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.547-1.387-1.336-1.757-1.336-1.757-1.091-.745.084-.73.084-.73 
              1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.107-.776.418-1.305.76-1.605-2.665-.3-5.467-1.333-5.467-5.93 
              0-1.31.467-2.38 1.235-3.22-.123-.303-.534-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.518 11.518 0 0 1 3.003-.403c1.018.005 
              2.042.137 3.003.403 2.291-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 
              1.233 3.22 0 4.61-2.807 5.626-5.48 5.92.429.369.81 1.096.81 2.21 
              0 1.594-.015 2.878-.015 3.271 0 .319.215.694.825.576C20.565 22.092 
              24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-900">
    <div className="w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
      <img className="h-56 w-full object-cover" src="/avatar/avatar4.jpg" alt="Profile Photo" />

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Madhuranjna</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Lorem ipint incidunt eaque, cupiditate odit laboriosam facilis praesentium atque quibusdam architecto? Lorem. Lorem, ipsum dolor.</p>

        <div className="mt-4 flex items-center space-x-4 text-gray-400 dark:text-gray-500">
          <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.59-2.46.69.89-.53 1.57-1.36 1.89-2.36-.83.49-1.74.84-2.71 1.03a4.22 4.22 0 0 0-7.19 2.88c0 .33.03.64.1.94C9.04 8.87 5.75 7 3.39 4.33a4.2 4.2 0 0 0-.57 2.13 4.22 4.22 0 0 0 1.88 3.51 4.2 4.2 0 0 1-1.91-.53v.05a4.23 4.23 0 0 0 3.38 4.14 4.26 4.26 0 0 1-1.9.07 4.23 4.23 0 0 0 3.94 2.93A8.47 8.47 0 0 1 2 17.53a11.93 11.93 0 0 0 6.45 1.89c7.75 0 12-6.54 11.75-12.41.82-.59 1.53-1.33 2.09-2.18Z" />
            </svg>
          </a>
          <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.326 24h11.49v-9.294H9.847v-3.62h2.969V8.413c0-2.938 1.792-4.54 4.41-4.54 1.253 0 2.33.093 2.642.135v3.065l-1.814.001c-1.422 0-1.697.676-1.697 1.67v2.187h3.389l-.442 3.62h-2.947V24h5.777c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.406 0 22.676 0" />
            </svg>
          </a>
          <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.3 3.438 9.799 8.205 11.387.6.11.82-.258.82-.577 
              0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.547-1.387-1.336-1.757-1.336-1.757-1.091-.745.084-.73.084-.73 
              1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.107-.776.418-1.305.76-1.605-2.665-.3-5.467-1.333-5.467-5.93 
              0-1.31.467-2.38 1.235-3.22-.123-.303-.534-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.518 11.518 0 0 1 3.003-.403c1.018.005 
              2.042.137 3.003.403 2.291-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 
              1.233 3.22 0 4.61-2.807 5.626-5.48 5.92.429.369.81 1.096.81 2.21 
              0 1.594-.015 2.878-.015 3.271 0 .319.215.694.825.576C20.565 22.092 
              24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export function BeautifulResponeTeamCard(){
    return(
        <div className="bg-gray-50 p-8 dark:bg-gray-900">
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile Photo" className="h-14 w-14 rounded-full object-cover" />
        <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Sam Monic <span className="text-gray-400">|</span>
          <span className="text-gray-600 dark:text-gray-300">Founder</span>
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">I’ve established pagedone in 2022 and it was one of the best ideas I’ve had in my life.</p>
      </div>
    </div>

    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ring-2 ring-purple-500 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <img src="https://randomuser.me/api/portraits/women/52.jpg" alt="Profile Photo" className="h-14 w-14 rounded-full object-cover" />
        <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Harshita Patel <span className="text-gray-400">|</span>
          <span className="text-gray-600 dark:text-gray-300">Co-Founder &amp; CEO</span>
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">I am the co founder of pagedone and we’ve pushed our limit so far to make it successful.</p>
      </div>
    </div>

    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <img src="https://randomuser.me/api/portraits/women/58.jpg" alt="Profile Photo" className="h-14 w-14 rounded-full object-cover" />
        <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Radhika Lesli <span className="text-gray-400">|</span>
          <span className="text-gray-600 dark:text-gray-300">Sales Chief</span>
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">I’m the chief executive of sales and closed valuable deals that helped pagedone in growth.</p>
      </div>
    </div>

    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="Profile Photo" className="h-14 w-14 rounded-full object-cover" />
        <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Alexa Kimberly <span className="text-gray-400">|</span>
          <span className="text-gray-600 dark:text-gray-300">Lead Designer</span>
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">I am the co founder of pagedone and we’ve pushed our limit so far to make it successful.</p>
      </div>
    </div>

    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Profile Photo" className="h-14 w-14 rounded-full object-cover" />
        <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Jim Carry <span className="text-gray-400">|</span>
          <span className="text-gray-600 dark:text-gray-300">Product Manager</span>
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">I’ve been lead designer for pagedone since the beginning of it and enjoyed every bit.</p>
      </div>
    </div>

    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <img src="https://randomuser.me/api/portraits/men/95.jpg" alt="Profile Photo" className="h-14 w-14 rounded-full object-cover" />
        <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a href="#" className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          John Doe <span className="text-gray-400">|</span>
          <span className="text-gray-600 dark:text-gray-300">Marketing Lead</span>
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">I’ve established pagedone in 2022 and it was one of the best ideas I’ve had in my life.</p>
      </div>
    </div>
  </div>
</div>

    )
}

export function CircleCardTeamPage(){
    return(
        <div className="bg-gray-50 p-2 text-gray-900 dark:bg-gray-900 dark:text-white">
        <div className="mb-5 text-center">
          <h2 className="mb-2 text-3xl font-bold">Meet the Brains</h2>
          <p className="text-gray-600 dark:text-gray-400">These people work on making our product best.</p>
        </div>
      
        <div className="flex flex-wrap items-center justify-center gap-4 p-2">
          <div className="relative flex w-[350px] flex-col items-center rounded-full bg-white p-8 shadow-lg dark:bg-gray-800">
            <div className="h-28 w-28 overflow-hidden rounded-full ring-4 ring-gray-300 dark:ring-gray-700">
              <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Profile" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <h3 className="text-xl font-semibold">Aaron Steele</h3>
              <span className="text-gray-500">|</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">Founder</span>
            </div>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">I’ve been leading the vision since day one and am proud of our achievements.</p>
            <div className="mt-4 flex space-x-3 text-gray-500 dark:text-gray-400">
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.69 8.094 4.064 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.06c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.416-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.42-.015-.63.961-.69 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="h-5 w-5">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338a53.73 53.73 0 1 1 53.73-53.73A53.73 53.73 0 0 1 53.84 110zm394.48 338h-92.68V302.4c0-34.7-.7-79.27-48.34-79.27-48.34 0-55.78 37.74-55.78 76.72V448h-92.69V148.9h89.04v40.84h1.28c12.41-23.5 42.65-48.34 87.64-48.34 93.88 0 111.22 61.78 111.22 142.3V448z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative flex w-[350px] flex-col items-center rounded-full bg-white p-8 shadow-lg dark:bg-gray-800">
            <div className="h-28 w-28 overflow-hidden rounded-full ring-4 ring-gray-300 dark:ring-gray-700">
              <img src="https://randomuser.me/api/portraits/men/78.jpg" alt="Profile" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <h3 className="text-xl font-semibold">Jacob White</h3>
              <span className="text-gray-500">|</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">Sales Executive</span>
            </div>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">I’ve closed valuable deals that helped us grow exponentially.</p>
            <div className="mt-4 flex space-x-3 text-gray-500 dark:text-gray-400">
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.69 8.094 4.064 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.06c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.416-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.42-.015-.63.961-.69 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="h-5 w-5">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338a53.73 53.73 0 1 1 53.73-53.73A53.73 53.73 0 0 1 53.84 110zm394.48 338h-92.68V302.4c0-34.7-.7-79.27-48.34-79.27-48.34 0-55.78 37.74-55.78 76.72V448h-92.69V148.9h89.04v40.84h1.28c12.41-23.5 42.65-48.34 87.64-48.34 93.88 0 111.22 61.78 111.22 142.3V448z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative flex w-[350px] flex-col items-center rounded-full bg-white p-8 shadow-lg dark:bg-gray-800">
            <div className="h-28 w-28 overflow-hidden rounded-full ring-4 ring-gray-300 dark:ring-gray-700">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Profile" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <h3 className="text-xl font-semibold">Nina Chopra</h3>
              <span className="text-gray-500">|</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">Co-Founder &amp; CEO</span>
            </div>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">I’ve been pushing our limits from day one to make our vision a success.</p>
            <div className="mt-4 flex space-x-3 text-gray-500 dark:text-gray-400">
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.69 8.094 4.064 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.06c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.416-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.42-.015-.63.961-.69 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="h-5 w-5">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338a53.73 53.73 0 1 1 53.73-53.73A53.73 53.73 0 0 1 53.84 110zm394.48 338h-92.68V302.4c0-34.7-.7-79.27-48.34-79.27-48.34 0-55.78 37.74-55.78 76.72V448h-92.69V148.9h89.04v40.84h1.28c12.41-23.5 42.65-48.34 87.64-48.34 93.88 0 111.22 61.78 111.22 142.3V448z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      

    )
}

export function MeetourTeamPage(){
    return(
        <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8 dark:bg-gray-900">
  <div className="text-center">
    <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Meet Our Team</p>
    <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300">A talented group of professionals dedicated to excellence.</p>
  </div>

  <div className="mt-5 flex justify-center items-center p-4 gap-4 flex-wrap">
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl dark:bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-20"></div>
      <div className="p-6 text-center">
        <div className="relative mx-auto h-40 w-40">
          <img className="mx-auto h-40 w-40 rounded-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelFoster" alt="Michael Foster" />
          <div className="absolute inset-0 rounded-full border-4 border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:border-purple-400/50 dark:border-gray-700/30"></div>
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Michael Foster</h3>
        <p className="font-medium text-purple-600 dark:text-purple-400">Co-Founder / CTO</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Technology visionary with 10+ years of experience</p>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">Leadership</span>
          <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-200">Engineering</span>
        </div>
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl dark:bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-pink-600 opacity-0 transition-opacity duration-500 group-hover:opacity-20"></div>
      <div className="p-6 text-center">
        <div className="relative mx-auto h-40 w-40">
          <img className="mx-auto h-40 w-40 rounded-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://api.dicebear.com/7.x/avataaars/svg?seed=DriesVincent" alt="Dries Vincent" />
          <div className="absolute inset-0 rounded-full border-4 border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:border-amber-400/50 dark:border-gray-700/30"></div>
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Dries Vincent</h3>
        <p className="font-medium text-amber-600 dark:text-amber-400">Business Relations</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Building partnerships that drive growth</p>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">Networking</span>
          <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-800 dark:bg-pink-900/30 dark:text-pink-200">Strategy</span>
        </div>
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl dark:bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-0 transition-opacity duration-500 group-hover:opacity-20"></div>
      <div className="p-6 text-center">
        <div className="relative mx-auto h-40 w-40">
          <img className="mx-auto h-40 w-40 rounded-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://api.dicebear.com/7.x/avataaars/svg?seed=LindsayWalton" alt="Lindsay Walton" />
          <div className="absolute inset-0 rounded-full border-4 border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:border-green-400/50 dark:border-gray-700/30"></div>
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Lindsay Walton</h3>
        <p className="font-medium text-green-600 dark:text-green-400">Front-end Developer</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Crafting beautiful, responsive interfaces</p>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-200">React</span>
          <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-200">Tailwind</span>
        </div>
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl dark:bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 opacity-0 transition-opacity duration-500 group-hover:opacity-20"></div>
      <div className="p-6 text-center">
        <div className="relative mx-auto h-40 w-40">
          <img className="mx-auto h-40 w-40 rounded-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://api.dicebear.com/7.x/avataaars/svg?seed=CourtneyHenry" alt="Courtney Henry" />
          <div className="absolute inset-0 rounded-full border-4 border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:border-red-400/50 dark:border-gray-700/30"></div>
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Courtney Henry</h3>
        <p className="font-medium text-red-600 dark:text-red-400">Designer</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Creating visually stunning experiences</p>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-200">UI/UX</span>
          <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-200">Figma</span>
        </div>
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl dark:bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-20"></div>
      <div className="p-6 text-center">
        <div className="relative mx-auto h-40 w-40">
          <img className="mx-auto h-40 w-40 rounded-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://api.dicebear.com/7.x/avataaars/svg?seed=TomCook" alt="Tom Cook" />
          <div className="absolute inset-0 rounded-full border-4 border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:border-indigo-400/50 dark:border-gray-700/30"></div>
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Tom Cook</h3>
        <p className="font-medium text-indigo-600 dark:text-indigo-400">Director of Product</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Shaping the future of our products</p>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200">Product</span>
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">Management</span>
        </div>
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl dark:bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 opacity-0 transition-opacity duration-500 group-hover:opacity-20"></div>
      <div className="p-6 text-center">
        <div className="relative mx-auto h-40 w-40">
          <img className="mx-auto h-40 w-40 rounded-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://api.dicebear.com/7.x/avataaars/svg?seed=WhitneyFrancis" alt="Whitney Francis" />
          <div className="absolute inset-0 rounded-full border-4 border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:border-pink-400/50 dark:border-gray-700/30"></div>
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Whitney Francis</h3>
        <p className="font-medium text-pink-600 dark:text-pink-400">Copywriter</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Words that inspire and engage</p>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-800 dark:bg-pink-900/30 dark:text-pink-200">Content</span>
          <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-800 dark:bg-rose-900/30 dark:text-rose-200">Storytelling</span>
        </div>
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl dark:bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-sky-600 opacity-0 transition-opacity duration-500 group-hover:opacity-20"></div>
      <div className="p-6 text-center">
        <div className="relative mx-auto h-40 w-40">
          <img className="mx-auto h-40 w-40 rounded-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://api.dicebear.com/7.x/avataaars/svg?seed=LeonardKrasner" alt="Leonard Krasner" />
          <div className="absolute inset-0 rounded-full border-4 border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/50 dark:border-gray-700/30"></div>
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Leonard Krasner</h3>
        <p className="font-medium text-cyan-600 dark:text-cyan-400">Senior Designer</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Elevating design to an art form</p>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-200">Design</span>
          <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 dark:bg-sky-900/30 dark:text-sky-200">Branding</span>
        </div>
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl dark:bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-20"></div>
      <div className="p-6 text-center">
        <div className="relative mx-auto h-40 w-40">
          <img className="mx-auto h-40 w-40 rounded-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://api.dicebear.com/7.x/avataaars/svg?seed=FloydMiles" alt="Floyd Miles" />
          <div className="absolute inset-0 rounded-full border-4 border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:border-violet-400/50 dark:border-gray-700/30"></div>
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">Floyd Miles</h3>
        <p className="font-medium text-violet-600 dark:text-violet-400">Principal Designer</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Visionary design leadership</p>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-800 dark:bg-violet-900/30 dark:text-violet-200">Creative</span>
          <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-200">Direction</span>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}