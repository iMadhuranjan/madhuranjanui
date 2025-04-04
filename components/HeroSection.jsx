"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiCode, FiLayers, FiSun, FiZap } from "react-icons/fi";
import StatsBadges from "./StatsBadge";

const MadhurajanUIHero = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-950 md:py-9">
      {/* Modern animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Floating gradient blobs */}
        <motion.div
          initial={{ x: -100, y: -100, opacity: 0.3 }}
          animate={{ x: [0, 100, 0], y: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-r from-violet-600/20 to-blue-500/20 blur-3xl"
        />
        <motion.div
          initial={{ x: 100, y: 100, opacity: 0.3 }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 -right-20 h-72 w-72 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-600/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 md:max-w-7xl mx-auto px-2 py-5 md:py-10 lg:py-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center px-2 md:px-4 py-2 rounded-full dark:bg-indigo-900/30 bg-indigo-100 dark:text-indigo-300 text-indigo-700 mb-6"
        >
          <FiLayers className="mr-2" />
          <span>Pure Tailwind CSS Components</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-[1.8rem] font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-100"
        >
          Make Awesome <span className="">Websites With</span>{" "}
          <span className="mt-2 md:block bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
            Madhurajan UI
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-8 md:max-w-3xl px-4 md:px-1 text-lg text-gray-600 md:text-xl dark:text-gray-300"
        >
          A hand crafted set of modern, responsive UI components built with pure
          Tailwind CSS. No bloat, no dependencies just clean, customizable code.
          Designed to help you move fast, stay consistent, and ship with
          confidence.
        </motion.p>

        <StatsBadges />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
        >
          <Link
            href="/docs/accordion"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-4 text-base font-semibold text-white shadow-lg hover:shadow-violet-500/30 transition-all duration-200"
          >
            <FiCode className="mr-2" />
            Explore All Components
          </Link>
          <Link
            href="/docs/about-page"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center rounded-xl border border-violet-500/50  px-6 py-4 text-base font-semibold text-violet-600 transition-colors hover:bg-violet-50 dark:text-violet-300 dark:border-violet-400/50 dark:hover:bg-gray-800/50"
          >
            <FiLayers className="mr-2" />
            Explore Blocks
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MadhurajanUIHero;
