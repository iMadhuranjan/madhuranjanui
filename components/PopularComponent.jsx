"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const PopularComponents = () => {
  const components = [
    {
      name: "Buttons",
      count: 180,
      path: "/docs/button",
      lightImage: "/images/buttons-light.png",
      darkImage: "/images/buttons-dark.png",
    },
    {
      name: "Cards",
      count: 24,
      path: "/docs/card",
      lightImage: "/images/cards-light.png",
      darkImage: "/images/cards-dark.png",
    },
    {
      name: "Inputs",
      count: 20,
      path: "/docs/input-field",
      lightImage: "/images/inputs-light.png",
      darkImage: "/images/inputs-dark.png",
    },
    {
      name: "Badges",
      count: 60,
      path: "/docs/badge",
      lightImage: "/images/badges-light.png",
      darkImage: "/images/badges-dark.png",
    },
    {
      name: "Avatars",
      count: 29,
      path: "/docs/avatar",
      lightImage: "/images/avatars-light.png",
      darkImage: "/images/avatars-dark.png",
    },
    {
      name: "Spinner",
      count: 40,
      path: "/docs/spinner",
      lightImage: "/images/spinner-light.png",
      darkImage: "/images/spinner-dark.png",
    },
    {
      name: "table",
      count: 8,
      path: "/docs/table",
      lightImage: "/images/table-light.png",
      darkImage: "/images/table-dark.png",
    },
    {
      name: "Pagination",
      count: 5,
      path: "/docs/pagination",
      lightImage: "/images/Pagination-light.png",
      darkImage: "/images/Pagination-dark.png",
    },
  ];

  const totalComponents = "500";
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <div className="relative bg-white dark:bg-gray-950 py-10 overflow-hidden">
      {/* Hero-style background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-r from-violet-600/20 to-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-600/20 blur-3xl" />
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        onMouseMove={(e) => {
          const { left, top } = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - left);
          mouseY.set(e.clientY - top);
        }}
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
              Cutting-Edge
            </span>{" "}
            UI Components
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Premium components with stunning design and seamless dark mode
            support
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {components.map((component, index) => {
            const background = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.1), transparent 80%)`;

            return (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group rounded-xl overflow-hidden"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 p-px rounded-2xl bg-gradient-to-br from-violet-600/30 via-blue-500/30 to-transparent">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background }}
                />

                {/* Card content */}
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-[15px] h-full overflow-hidden border border-gray-200/50 dark:border-gray-800/50">
                  <div className="relative h-52 md:h-48 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                    {/* Light Mode Image */}
                    <div className="dark:hidden">
                      <img
                        src={component.lightImage}
                        alt={`${component.name} light preview`}
                        fill
                        className="object-contain h-full w-full p-1 transition-transform duration-400  "
                      />
                    </div>
                    {/* Dark Mode Image */}
                    <div className="hidden dark:block w-full">
                      <img
                        src={component.darkImage}
                        alt={`${component.name} dark preview`}
                        fill
                        className="object-fill p-1 w-full transition-transform duration-400  "
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      <Link href={component.path} className="block h-full">
                        {" "}
                        {component.name}{" "}
                      </Link>
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
                        {component.count}+ variants
                      </span>
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 animate-pulse" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              <Link href="/docs/accordion">Explore All Components</Link>
              <FiArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-400"
          >
            <span className="font-bold text-violet-600 dark:text-violet-400">
              {totalComponents}+
            </span>{" "}
            premium components ready for your next project
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default PopularComponents;
