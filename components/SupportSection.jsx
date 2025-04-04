"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const SupportSection = () => {
  const supporters = [
    {
      name: "OmniSocialTools",
      darkLogo: "/sponsor/LightOmniSocial.png",
      logo: "/sponsor/omnisociaTools.png",
      url: "https://omnisocialtools.com/",
    },
  ];

  return (
    <div className="relative bg-white dark:bg-gray-950 pb-5 pt-10 overflow-hidden">
      {/* Dotted background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="">Supported</span> By Our{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
              Amazing Partners
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thanks to these incredible partners who help make our platform
            possible. Their support allows us to provide free resources and
            continue growing.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5">
          {supporters.map((supporter, index) => (
            <motion.div
              key={supporter.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex items-center justify-center gap-4 flex-wrap"
            >
              <Link
                href={supporter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-100 border border-gray-200 dark:border-gray-800 hover:border-amber-500/30 dark:hover:border-amber-400/30"
              >
                <div className="w-40 h-9 flex items-center justify-center">
                  <img
                    src={supporter.logo}
                    srcSet={`${supporter.logo} 1x, ${supporter.darkLogo} 2x`}
                    alt={supporter.name}
                    className="h-full w-full object-contain dark:hidden"
                  />
                  <img
                    src={supporter.darkLogo}
                    srcSet={`${supporter.darkLogo} 1x, ${supporter.logo} 2x`}
                    alt={supporter.name}
                    className="h-full w-full object-contain hidden dark:block"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to support our mission and join these amazing partners?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-amber-600 to-orange-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Become a Supporter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SupportSection;
