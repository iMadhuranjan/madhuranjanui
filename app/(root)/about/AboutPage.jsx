 import { motion } from "framer-motion";
import { Code, Copy, LayoutDashboard, Palette, Zap } from "lucide-react";

const AboutPage = () => {
 
  const stats = [
    { value: "300+", label: "Components" },
    { value: "Free", label: "Premium Blocks" },
    { value: "Copy-Paste", label: "Ready to Use" },
    { value: "Growing", label: "Daily Updates" },
  ];

  const features = [
    {
      icon: <Copy size={24} />,
      title: "Copy-Paste Magic",
      description: "Ready-to-use components you can integrate in seconds",
    },
    {
      icon: <Palette size={24} />,
      title: "Beautiful Designs",
      description: "Carefully crafted UI that looks professional",
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "Page Blocks",
      description: "Complete sections for every part of your website",
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimized",
      description: "Lightweight components that don't slow you down",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-6">
            Madhurajan UI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The ultimate collection of free, ready-to-use Tailwind CSS
            components and blocks to build beautiful websites faster.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-800/10 text-center"
            >
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {stat.value}
              </div>
              <div className="text-gray-500 dark:text-gray-400 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Creator Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 dark:opacity-50"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl">
                <div className="h-64 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Code size={80} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Madhuranjan Kushwaha
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400">
                    Full Stack Developer
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-4">
                    Not perfect at frontend or backend, but passionate about
                    building tools that help people create amazing websites.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why I Built Madhurajan UI
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              As a solo developer, I know how time-consuming it can be to build
              beautiful UI from scratch. I created Madhurajan UI to provide
              developers with ready-to-use components that they can simply copy
              and paste into their projects.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              My mission is to make web development faster and more accessible.
              All components and premium blocks are completely free and will
              always remain free. I'm constantly adding new components based on
              real-world needs.
            </p>
            <div className="bg-purple-50 dark:bg-gray-800 border border-purple-100 dark:border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
                Future Plans
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I plan to expand the library with more specialized components,
                templates, and possibly integrations with popular frameworks.
                Your feedback will shape what comes next!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Makes Madhurajan UI Special
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to build modern, beautiful websites at lightning
            speed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg dark:shadow-gray-800/10 hover:shadow-xl dark:hover:shadow-gray-800/20 transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-gray-700 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Something Awesome?
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Start using Madhurajan UI today and save hours of development time
            with our free, ready-to-use components.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Browse Components
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
              Get Started Guide
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
