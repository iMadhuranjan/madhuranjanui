import SectionHeading from "@/components/SectionHeading";
import FlowbiteTailwindPreview from "./Accordation1";
import SimpleFaq, {
  FaqWithShadow,
  InnerFaq,
  FaQWithBorder,
  FaqWithMinusPlus,
} from "./MyAccordation";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense3 from "@/Adsense/Adsense3";

export default function AccordionDemo() {
  const SimpleFaqCode =
    `  <div class="max-w-5xl mx-auto p-3 bg-white dark:bg-gray-900 shadow-lg transition-all">
      <div class="space-y-4">

        <details class="group bg-gray-100 dark:bg-gray-800 rounded-lg p-3 shadow-md transition-all  ">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 py-1 rounded-lg   [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Accordion 1</span>
            <svg class="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Accordion 1. It provides useful information about the topic.
          </p>
        </details>

        <details class="group bg-gray-100 dark:bg-gray-800 rounded-lg p-3 shadow-md transition-all  ">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 py-1 rounded-lg   [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Accordion 2</span>
            <svg class="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Accordion 2. It contains additional details that expand when clicked.
          </p>
        </details>

        <details class="group bg-gray-100 dark:bg-gray-800 rounded-lg p-3 shadow-md transition-all  ">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 py-1 rounded-lg   [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Accordion 3</span>
            <svg class="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Accordion 3. Click to reveal more details about this section.
          </p>
        </details>

      </div>
    </div>`.trim();

  const BorderFaqCode =
    `<div class="max-w-5xl mx-auto p-2 bg-white dark:bg-black  transition-all">
      <div class="space-y-4">

        <details class="group bg-gray-100 dark:bg-gray-900 rounded-lg p-3 transition-all border-2 border-gray-400 ">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 py-1 rounded-lg   [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Accordion 1</span>
            <svg class="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Accordion 1. It provides useful information about the topic.
          </p>
        </details>

        <details class="group bg-gray-100 dark:bg-gray-900 rounded-lg p-3 transition-all border-2 border-gray-400  ">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 py-1 rounded-lg   [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Accordion 2</span>
            <svg class="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Accordion 2. It contains additional details that expand when clicked.
          </p>
        </details>

        <details class="group bg-gray-100 dark:bg-gray-900 rounded-lg p-3 transition-all border-2 border-gray-400">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 py-1 rounded-lg   [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Accordion 3</span>
            <svg class="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            This is the content for Accordion 3. Click to reveal more details about this section.
          </p>
        </details>

      </div>
    </div>`.trim();

  const innerFaqCode =
    ` <div class="max-w-5xl mx-auto p-3 bg-white dark:bg-gray-900 shadow-xl transition-all">

    <div class="space-y-6">

      <details class="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-900 rounded-lg p-2 shadow-md transition-all">
        <summary class="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all py-2 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
          <span className="font-semibold">Main FAQ 1</span>
          <svg class="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-800 dark:text-gray-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          This is the content for Main FAQ 1. Below are more specific FAQs related to this topic:
        </p>

        <details class="group bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-900 rounded-lg p-2 mt-3 shadow-sm transition-all">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-md font-medium text-gray-900 dark:text-white transition-all py-1 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Inner FAQ 1.1</span>
            <svg class="h-5 w-5 transform transition-transform duration-300 group-open:rotate-180 text-gray-500 dark:text-gray-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            This is the answer to Inner FAQ 1.1.
          </p>
        </details>


      </details>

      <details class="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-900 rounded-lg p-2 shadow-md transition-all">
        <summary class="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all py-2 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
          <span className="font-semibold">Main FAQ 2</span>
          <svg class="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-800 dark:text-gray-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          This is the content for Main FAQ 2. Below are more specific FAQs related to this topic:
        </p>

        <details class="group bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-900 rounded-lg p-2 mt-3 shadow-sm transition-all">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-md font-medium text-gray-900 dark:text-white transition-all py-1 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Inner FAQ 2.1</span>
            <svg class="h-5 w-5 transform transition-transform duration-300 group-open:rotate-180 text-gray-500 dark:text-gray-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            This is the answer to Inner FAQ 2.1.
          </p>
        </details>

        <details class="group bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-900 rounded-lg p-2 mt-3 shadow-sm transition-all">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-md font-medium text-gray-900 dark:text-white transition-all py-1 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Inner FAQ 2.2</span>
            <svg class="h-5 w-5 transform transition-transform duration-300 group-open:rotate-180 text-gray-500 dark:text-gray-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            This is the answer to Inner FAQ 2.2.
          </p>
        </details>
      </details>

      <details class="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-900 rounded-lg p-2 shadow-md transition-all">
        <summary class="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all py-2 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
          <span className="font-semibold">Main FAQ 3</span>
          <svg class="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-800 dark:text-gray-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          This is the content for Main FAQ 3. Below are more specific FAQs related to this topic:
        </p>

        <details class="group bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-900 rounded-lg p-2 mt-3 shadow-sm transition-all">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-md font-medium text-gray-900 dark:text-white transition-all py-1 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Inner FAQ 3.1</span>
            <svg class="h-5 w-5 transform transition-transform duration-300 group-open:rotate-180 text-gray-500 dark:text-gray-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            This is the answer to Inner FAQ 3.1.
          </p>
        </details>

        <details class="group bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-900 rounded-lg p-2 mt-3 shadow-sm transition-all">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-md font-medium text-gray-900 dark:text-white transition-all py-1 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Inner FAQ 3.2</span>
            <svg class="h-5 w-5 transform transition-transform duration-300 group-open:rotate-180 text-gray-500 dark:text-gray-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            This is the answer to Inner FAQ 3.2.
          </p>
        </details>

        <details class="group bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-900 rounded-lg p-2 mt-3 shadow-sm transition-all">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-md font-medium text-gray-900 dark:text-white transition-all py-1 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Inner FAQ 3.3</span>
            <svg class="h-5 w-5 transform transition-transform duration-300 group-open:rotate-180 text-gray-500 dark:text-gray-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            This is the answer to Inner FAQ 3.3.
          </p>
        </details>


      </details>

    </div>

  </div>`.trim();

  const PlusFaqCode =
    ` <div class="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-xl rounded-xl transition-all">
     

      <div class="space-y-4">
        <details class="group bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-md transition-all">
          <summary class="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>What is Tailwind CSS?</span>
            <svg class="h-6 w-6 text-purple-600 dark:text-purple-400 transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12h-12m6-6v12" class="group-open:hidden" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" class="hidden group-open:block" />
            </svg>
          </summary>
          <p class="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            Tailwind CSS is a utility-first framework that helps you build custom UI designs faster with predefined utility classes.
          </p>
        </details>

        <details class="group bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-md transition-all">
          <summary class="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Is Tailwind CSS free?</span>
            <svg class="h-6 w-6 text-purple-600 dark:text-purple-400 transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12h-12m6-6v12" class="group-open:hidden" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" class="hidden group-open:block" />
            </svg>
          </summary>
          <p class="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            Yes, Tailwind CSS is completely free and open-source. You can use it for any personal or commercial project.
          </p>
        </details>

        <details class="group bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-md transition-all">
          <summary class="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Can I customize Tailwind CSS?</span>
            <svg class="h-6 w-6 text-purple-600 dark:text-purple-400 transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12h-12m6-6v12" class="group-open:hidden" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" class="hidden group-open:block" />
            </svg>
          </summary>
          <p class="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            Absolutely! Tailwind is highly customizable using the <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">tailwind.config.js</code> file.
          </p>
        </details>

        <details class="group bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-md transition-all">
          <summary class="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>How do I install Tailwind CSS?</span>
            <svg class="h-6 w-6 text-purple-600 dark:text-purple-400 transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12h-12m6-6v12" class="group-open:hidden" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" class="hidden group-open:block" />
            </svg>
          </summary>
          <p class="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            You can install Tailwind via npm, yarn, or use a CDN. Example:
            <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">npm install -D tailwindcss</code>.
          </p>
        </details>
      </div>
    </div>`.trim();

  const FaqWithShadowCode =
    `<div class="max-w-4xl mx-auto p-3 space-y-1 bg-white dark:bg-gray-900 shadow-xl rounded-xl transition-all">
      <div class="space-y-3">
        <details class="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-md transition-all">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 rounded-lg  dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>What is Tailwind CSS?</span>
            <svg class="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            Tailwind CSS is a utility-first framework that provides low-level utility classes to build custom UI designs quickly.
          </p>
        </details>

        <details class="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-md transition-all">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 rounded-lg  dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>How do I install Tailwind CSS?</span>
            <svg class="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            You can install Tailwind CSS via npm, yarn, or a CDN. Example:
            <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">npm install -D tailwindcss</code>.
          </p>
        </details>

        <details class="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-md transition-all">
          <summary class="flex items-center justify-between gap-3 cursor-pointer text-lg font-semibold text-gray-900 dark:text-white transition-all px-3 rounded-lg dark:hover:bg-gray-800 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
            <span>Can I customize Tailwind?</span>
            <svg class="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            Yes! Tailwind is highly customizable via the
            <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">tailwind.config.js</code> file.
          </p>
        </details>
      </div>
    </div>`.trim();

  const currentPage = "/docs/accordion"; // Manually set this for each page

  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Section Heading */}
      <SectionHeading
        id="main-title"
        heading={"Tailwind CSS Accordion"}
        description={
          "Effortlessly integrate our Tailwind CSS accordion component to display hidden information dynamically. Built entirely with Tailwind CSS, no additional dependencies required. Just copy and paste into your project and start using it instantly."
        }
      />

      {/* Simple Tailwind CSS Accordion */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="simple-accordion"
      >
        Simple Accordion
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        This is a basic accordion built using only Tailwind CSS. It provides a
        minimalist yet functional design, making it a great choice for
        displaying collapsible content without additional styling.
      </p>

      <FlowbiteTailwindPreview code={SimpleFaqCode}>
        <SimpleFaq />
      </FlowbiteTailwindPreview>

      {/* Accordion With Border */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="Border-Accordion"
      >
        Border Accordion
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        This accordion version includes a border around each item, adding better
        separation between sections. Ideal for structured FAQs where clarity is
        important.
      </p>
      <FlowbiteTailwindPreview code={BorderFaqCode}>
        <FaQWithBorder />
      </FlowbiteTailwindPreview>

      <Adsense3 />
      {/* Shadow Accordion */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="shadow-accordion-tailwind-css"
      >
        Shadow Accordion
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        This accordion enhances the UI by adding soft shadow effects, making the
        elements visually distinct and providing a modern, elevated look.
      </p>
      <FlowbiteTailwindPreview code={FaqWithShadowCode}>
        <FaqWithShadow />
      </FlowbiteTailwindPreview>

      {/* Inner Accordion */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="inner-accordion-tailwind-css"
      >
        Nested Accordion
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        The inner accordion structure allows nesting, making it useful for
        multi-level FAQs where users can expand additional sub-sections inside
        an already expanded item.
      </p>
      <FlowbiteTailwindPreview code={innerFaqCode}>
        <InnerFaq />
      </FlowbiteTailwindPreview>

      <Adsense3 />
      {/* Plus/Minus Animation Accordion */}
      <h2
        className="text-xl md:text-2xl font-bold py-2 pl-2"
        id="plus-animation-accordion-tailwind-css"
      >
        Plus Animation Accordion
      </h2>
      <p className="text-gray-700 dark:text-gray-300 pl-2">
        This accordion includes an animated plus (+) and minus (-) icon,
        enhancing the user experience by visually indicating whether an item is
        open or closed.
      </p>
      <FlowbiteTailwindPreview code={PlusFaqCode}>
        <FaqWithMinusPlus />
      </FlowbiteTailwindPreview>

      <NextPrevNavigation currentPath={currentPage} />
    </div>
  );
}

export const metadata = {
  title: "Pure Tailwind CSS Accordion (FAQs) - Madhuranjan UI",
  description:
    "Effortlessly integrate a Tailwind CSS Accordion into your project. Our responsive and stylish FAQs component is built with pure Tailwind css no dependencies required! Optimized for  Dark and Light Mode",
  keywords: [
    "Tailwind CSS Accordion",
    "FAQ Accordion",
    "Tailwind Components",
    "Expandable FAQ",
    "Collapsible Accordion",
    "Responsive UI",
    "Tailwind UI",
  ],
  openGraph: {
    title: "Tailwind CSS Accordion (Copy & Paste) - Madhuranjan UI",
    description:
      "Get a fully customizable Tailwind CSS accordion component for FAQs, collapsible sections, and more. Just copy, paste, and use it instantly.",
  },
};
