"use client";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiAngular,
  SiAstro,
  SiRemix,
  SiSolid,
  SiQwik,
} from "react-icons/si";

const FrameworkCompatibility = () => {
  const frameworks = [
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-gray-800 dark:text-gray-100",
    },
    { name: "Vue", icon: SiVuedotjs, color: "text-[#4FC08D]" },
    { name: "Svelte", icon: SiSvelte, color: "text-[#FF3E00]" },
    { name: "Angular", icon: SiAngular, color: "text-[#DD0031]" },
    { name: "Astro", icon: SiAstro, color: "text-[#FF5D01]" },
    { name: "Remix", icon: SiRemix, color: "text-gray-700 dark:text-gray-300" },
    { name: "Solid", icon: SiSolid, color: "text-[#2C4F7C]" },
    { name: "Qwik", icon: SiQwik, color: "text-[#18B6F6]" },
  ];

  return (
    <div className="relative bg-white dark:bg-gray-950 py-8 overflow-hidden">
      {/* Exact same dotted background as hero section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
          >
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
              Framework Agnostic
            </span>{" "}
            Components
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Works everywhere - from React to Svelte to vanilla HTML
          </motion.p>
        </div>

        {/* Compact framework grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4 mb-8"
        >
          {frameworks.map((framework, index) => {
            const Icon = framework.icon;
            return (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-300 dark:border-gray-800 shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <Icon
                  className={`h-6 w-6 sm:h-8 sm:w-8 mb-2 ${framework.color}`}
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {framework.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Benefits in compact pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center  items-center gap-3"
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200 text-sm backdrop-blur-sm">
            <FiCheckCircle className="mr-1.5" />
            Pure Tailwind CSS
          </div>

          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-sm backdrop-blur-sm">
            <FiCheckCircle className="mr-1.5" />
            Dark Mode Ready
          </div>

          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm backdrop-blur-sm">
            <FiCheckCircle className="mr-1.5" />
            Zero Dependencies
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FrameworkCompatibility;
