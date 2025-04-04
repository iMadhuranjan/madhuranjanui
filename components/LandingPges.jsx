"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// 1) Import useTheme from next-themes
import { useTheme } from "next-themes";

const BlockTemplates = () => {
  // 2) Access current theme
  const { theme } = useTheme();

  const blocks = [
    {
      name: "Landing Pages",
      count: 7,
      path: "/docs/landing-page",
      // Provide both images
      imgLight: "/images/LightLandingPage.webp",
      imgDark: "/images/LandingPage.png",
      description: "Stunning landing pages Made With Pure Tailwind CSS",
    },
    {
      name: "About Page",
      count: 8,
      path: "/docs/about-page",
      imgLight: "/images/LightAbout.webp",
      imgDark: "/images/about.webp",
      description: "About us Page Section With Dark & Light Mode Compatibility",
    },
    {
      name: "Hero Section",
      count: 8,
      path: "/docs/hero-section",
      imgLight: "/images/LightHero.webp",
      imgDark: "/images/herosection.webp",
      description: "Modern & Professional Hero Sections Made in Tailwind",
    },
    {
      name: "Pricing Page",
      count: 8,
      path: "/docs/pricing",
      imgLight: "/images/LightPricing.webp",
      imgDark: "/images/pricing.webp",
      description: "Best Pricing Page With Many Designs Ready to Use",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const scrollRefs = useRef([]);
  const scrollPositions = useRef(blocks.map(() => 0));
  const animationFrames = useRef([]);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const startAutoScroll = (index) => {
    setHoveredIndex(index);
    const container = scrollRefs.current[index];
    if (!container) return;

    // Clear any existing animation frame
    if (animationFrames.current[index]) {
      cancelAnimationFrame(animationFrames.current[index]);
    }

    const scrollHeight = container.scrollHeight - container.clientHeight;
    let startTime = null;
    let lastTimestamp = null;

    const animateScroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      if (!lastTimestamp) lastTimestamp = timestamp;

      const elapsed = timestamp - startTime;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Calculate scroll position (faster scroll with easing)
      const progress = Math.min(elapsed / 5000, 1); // 5s for full scroll
      const easedProgress = easeInOutCubic(progress);
      const newPosition = easedProgress * scrollHeight;

      // Only scroll if we have more to scroll
      if (scrollPositions.current[index] < scrollHeight) {
        container.scrollTop = newPosition;
        scrollPositions.current[index] = newPosition;
        animationFrames.current[index] = requestAnimationFrame(animateScroll);
      } else {
        // Reset to top when reaching bottom
        scrollPositions.current[index] = 0;
        container.scrollTop = 0;
        startTime = null;
        animationFrames.current[index] = requestAnimationFrame(animateScroll);
      }
    };

    animationFrames.current[index] = requestAnimationFrame(animateScroll);
  };

  const stopAutoScroll = (index) => {
    setHoveredIndex(null);
    if (animationFrames.current[index]) {
      cancelAnimationFrame(animationFrames.current[index]);
    }

    // Smoothly return to top
    const container = scrollRefs.current[index];
    if (container) {
      const returnToTop = () => {
        const currentPos = container.scrollTop;
        if (currentPos > 0) {
          container.scrollTop = Math.max(currentPos - 30, 0);
          requestAnimationFrame(returnToTop);
        } else {
          scrollPositions.current[index] = 0;
        }
      };
      returnToTop();
    }
  };

  // Easing function for smooth scrolling
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  useEffect(() => {
    return () => {
      // Clean up all animation frames on unmount
      animationFrames.current.forEach((frame) => {
        if (frame) cancelAnimationFrame(frame);
      });
    };
  }, []);

  return (
    <div className="relative bg-white dark:bg-gray-950 py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute top-10 -right-20 h-64 w-64 rounded-full bg-gradient-to-r from-amber-600/20 to-orange-500/20 blur-3xl" />
        <div className="absolute bottom-10 -left-20 h-64 w-96 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-600/20 blur-3xl" />
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        onMouseMove={handleMouseMove}
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Premium
            </span>{" "}
            Block Templates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Ready to use templates with stunning designs, compatible with dark
            and light themes, and fully responsive.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blocks.map((block, index) => {
            const background = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, rgba(245, 158, 11, 0.1), transparent 80%)`;

            return (
              <motion.div
                key={block.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                onMouseEnter={() => startAutoScroll(index)}
                onMouseLeave={() => stopAutoScroll(index)}
              >
                {/* Card content */}
                <div className="relative bg-white dark:bg-gray-900 rounded-xl h-full overflow-hidden border border-gray-200 dark:border-gray-800">
                  <div
                    ref={(el) => (scrollRefs.current[index] = el)}
                    className="relative h-64 bg-gray-100 dark:bg-gray-800 overflow-hidden overflow-y-auto no-scrollbar"
                  >
                    {/* Use the theme to pick which image to load */}
                    <img
                      src={theme === "dark" ? block.imgDark : block.imgLight}
                      alt={`${block.name} template preview`}
                      className="w-full h-auto object-cover transition-all duration-100"
                      style={{ minHeight: "100%" }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {block.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                          {block.description}
                        </p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-600 to-orange-500 animate-pulse mt-1" />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200">
                        {block.count}+ templates
                      </span>
                      <Link href={block.path}>
                        <motion.span
                          whileHover={{ x: 4 }}
                          className="text-amber-600 dark:text-amber-400 text-sm font-medium flex items-center"
                        >
                          View
                          <FiArrowRight className="ml-1" />
                        </motion.span>
                      </Link>
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
          {/* 3) Make the button more stylish */}
          <Link href="/docs/about-page" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-amber-600 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-100 transform-gpu overflow-hidden group"
            >
              <span className="relative z-10 flex items-center text-base uppercase tracking-wide">
                Explore All Templates
                <FiArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
            </motion.button>
          </Link>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-400"
          >
            <span className="font-bold text-amber-600 dark:text-amber-400">
              100+
            </span>{" "}
            premium templates ready for your next project
          </motion.p>
        </motion.div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default BlockTemplates;
