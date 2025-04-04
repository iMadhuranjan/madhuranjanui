"use client";
import { motion } from "framer-motion";
import { FiZap, FiCode, FiSun } from "react-icons/fi";

const StatsBadges = () => {
  const stats = [
    {
      icon: <FiZap className="text-violet-500" />,
      text: "500+ Components",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
      borderColor: "border-violet-200 dark:border-violet-800/50",
    },

    {
      icon: <FiSun className="text-amber-500" />,
      text: "Light + Dark Mode",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-800/50",
    },
    {
      icon: <FiCode className="text-blue-500" />,
      text: "Zero Dependencies",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800/50",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-wrap justify-center gap-2 px-1 md:gap-4 mb-10 "
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center px-4 py-2 rounded-full ${stat.bgColor} border ${stat.borderColor} shadow-sm hover:shadow-md transition-all duration-100`}
        >
          <span className="mr-2 text-lg">{stat.icon}</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
            {stat.text}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsBadges;
