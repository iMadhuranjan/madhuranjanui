export default function SimpleFaq() {
  return (
    <div className="max-w-5xl mx-auto p-3 bg-white dark:bg-gray-900 shadow-lg transition-all">
      <div className="space-y-4">

        <details className="group bg-gray-100 dark:bg-gray-800 rounded-lg p-3 shadow-md transition-all  ">
          <summary className="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 py-1 rounded-lg   [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Accordion 1</span>
            <svg className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Accordion 1. It provides useful information about the topic.
          </p>
        </details>

        <details className="group bg-gray-100 dark:bg-gray-800 rounded-lg p-3 shadow-md transition-all  ">
          <summary className="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 py-1 rounded-lg   [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Accordion 2</span>
            <svg className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Accordion 2. It contains additional details that expand when clicked.
          </p>
        </details>

        <details className="group bg-gray-100 dark:bg-gray-800 rounded-lg p-3 shadow-md transition-all  ">
          <summary className="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 py-1 rounded-lg   [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Accordion 3</span>
            <svg className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Accordion 3. Click to reveal more details about this section.
          </p>
        </details>

      </div>
    </div>

  );
}

export function FaQWithBorder() {
  return (
    <div className="max-w-5xl mx-auto p-2 bg-white dark:bg-black  transition-all">
      <div className="space-y-4">

        <details className="group bg-gray-100 dark:bg-gray-900 rounded-lg p-3 transition-all border-2 border-gray-400 ">
          <summary className="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 py-1 rounded-lg   [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Accordion 1</span>
            <svg className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Accordion 1. It provides useful information about the topic.
          </p>
        </details>

        <details className="group bg-gray-100 dark:bg-gray-900 rounded-lg p-3 transition-all border-2 border-gray-400  ">
          <summary className="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 py-1 rounded-lg   [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Accordion 2</span>
            <svg className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Accordion 2. It contains additional details that expand when clicked.
          </p>
        </details>

        <details className="group bg-gray-100 dark:bg-gray-900 rounded-lg p-3 transition-all border-2 border-gray-400">
          <summary className="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 py-1 rounded-lg   [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Accordion 3</span>
            <svg className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Accordion 3. Click to reveal more details about this section.
          </p>
        </details>

      </div>
    </div>
  );
}

export function FaqWithShadow() {
  return (

    <div className="max-w-4xl mx-auto p-3 space-y-1 bg-white dark:bg-gray-900 shadow-xl rounded-xl transition-all">

      <div className="space-y-3">

        <details className="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-md transition-all">
          <summary className="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 rounded-lg  dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>What is Tailwind CSS?</span>
            <svg className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            Tailwind CSS is a utility-first framework that provides low-level utility classes to build custom UI designs quickly.
          </p>
        </details>

        <details className="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-md transition-all">
          <summary className="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 rounded-lg  dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>How do I install Tailwind CSS?</span>
            <svg className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            You can install Tailwind CSS via npm, yarn, or a CDN. Example:
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">npm install -D tailwindcss</code>.
          </p>
        </details>

        <details className="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-md transition-all">
          <summary className="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 rounded-lg dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Can I customize Tailwind?</span>
            <svg className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            Yes! Tailwind is highly customizable via the
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">tailwind.config.js</code> file.
          </p>
        </details>


      </div>
    </div>


  )
}

export function InnerFaq() {
  return (
    <div className="max-w-5xl mx-auto p-3 bg-white dark:bg-gray-900 shadow-xl transition-all">

      <div className="space-y-6">

        <details className="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-900 rounded-lg p-2 shadow-md transition-all">
          <summary className="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all py-2 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span className="font-semibold">Main FAQ 1</span>
            <svg className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-800 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Main FAQ 1. Below are more specific FAQs related to this topic:
          </p>

          <details className="group bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-900 rounded-lg p-2 mt-3 shadow-sm transition-all">
            <summary className="flex items-center justify-between gap-3 cursor-pointer text-md font-medium text-gray-900 dark:text-white transition-all py-1 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              <span>Inner FAQ 1.1</span>
              <svg className="h-5 w-5 transform transition-transform duration-300 group-open:rotate-180 text-gray-500 dark:text-gray-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
              This is the answer to Inner FAQ 1.1.
            </p>
          </details>


        </details>

        <details className="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-900 rounded-lg p-2 shadow-md transition-all">
          <summary className="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all py-2 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span className="font-semibold">Main FAQ 2</span>
            <svg className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-800 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Main FAQ 2. Below are more specific FAQs related to this topic:
          </p>

          <details className="group bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-900 rounded-lg p-2 mt-3 shadow-sm transition-all">
            <summary className="flex items-center justify-between gap-3 cursor-pointer text-md font-medium text-gray-900 dark:text-white transition-all py-1 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              <span>Inner FAQ 2.1</span>
              <svg className="h-5 w-5 transform transition-transform duration-300 group-open:rotate-180 text-gray-500 dark:text-gray-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
              This is the answer to Inner FAQ 2.1.
            </p>
          </details>

          <details className="group bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-900 rounded-lg p-2 mt-3 shadow-sm transition-all">
            <summary className="flex items-center justify-between gap-3 cursor-pointer text-md font-medium text-gray-900 dark:text-white transition-all py-1 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              <span>Inner FAQ 2.2</span>
              <svg className="h-5 w-5 transform transition-transform duration-300 group-open:rotate-180 text-gray-500 dark:text-gray-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
              This is the answer to Inner FAQ 2.2.
            </p>
          </details>
        </details>

        <details className="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-900 rounded-lg p-2 shadow-md transition-all">
          <summary className="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all py-2 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span className="font-semibold">Main FAQ 3</span>
            <svg className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-800 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Main FAQ 3. Below are more specific FAQs related to this topic:
          </p>

          <details className="group bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-900 rounded-lg p-2 mt-3 shadow-sm transition-all">
            <summary className="flex items-center justify-between gap-3 cursor-pointer text-md font-medium text-gray-900 dark:text-white transition-all py-1 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              <span>Inner FAQ 3.1</span>
              <svg className="h-5 w-5 transform transition-transform duration-300 group-open:rotate-180 text-gray-500 dark:text-gray-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
              This is the answer to Inner FAQ 3.1.
            </p>
          </details>

          <details className="group bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-900 rounded-lg p-2 mt-3 shadow-sm transition-all">
            <summary className="flex items-center justify-between gap-3 cursor-pointer text-md font-medium text-gray-900 dark:text-white transition-all py-1 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              <span>Inner FAQ 3.2</span>
              <svg className="h-5 w-5 transform transition-transform duration-300 group-open:rotate-180 text-gray-500 dark:text-gray-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
              This is the answer to Inner FAQ 3.2.
            </p>
          </details>

          <details className="group bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-900 rounded-lg p-2 mt-3 shadow-sm transition-all">
            <summary className="flex items-center justify-between gap-3 cursor-pointer text-md font-medium text-gray-900 dark:text-white transition-all py-1 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              <span>Inner FAQ 3.3</span>
              <svg className="h-5 w-5 transform transition-transform duration-300 group-open:rotate-180 text-gray-500 dark:text-gray-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
              This is the answer to Inner FAQ 3.3.
            </p>
          </details>


        </details>

      </div>

    </div>
  )
}

export function FaqWithMinusPlus() {
  return (
    <div className="max-w-5xl mx-auto p-2 bg-white dark:bg-gray-900 shadow-xl rounded-xl transition-all">


      <div className="space-y-4">
        <details className="group bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-md transition-all">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>What is Tailwind CSS?</span>
            <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M18 12h-12m6-6v12" className="group-open:hidden" />
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M18 12H6" className="hidden group-open:block" />
            </svg>
          </summary>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            Tailwind CSS is a utility-first framework that helps you build custom UI designs faster with predefined utility classes.
          </p>
        </details>

        <details className="group bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-md transition-all">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Is Tailwind CSS free?</span>
            <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M18 12h-12m6-6v12" className="group-open:hidden" />
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M18 12H6" className="hidden group-open:block" />
            </svg>
          </summary>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            Yes, Tailwind CSS is completely free and open-source. You can use it for any personal or commercial project.
          </p>
        </details>

        <details className="group bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-md transition-all">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Can I customize Tailwind CSS?</span>
            <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M18 12h-12m6-6v12" className="group-open:hidden" />
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M18 12H6" className="hidden group-open:block" />
            </svg>
          </summary>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            Absolutely! Tailwind is highly customizable using the <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">tailwind.config.js</code> file.
          </p>
        </details>

        <details className="group bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-md transition-all">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>How do I install Tailwind CSS?</span>
            <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M18 12h-12m6-6v12" className="group-open:hidden" />
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M18 12H6" className="hidden group-open:block" />
            </svg>
          </summary>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            You can install Tailwind via npm, yarn, or use a CDN. Example:
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">npm install -D tailwindcss</code>.
          </p>
        </details>
      </div>
    </div>

  )
}

