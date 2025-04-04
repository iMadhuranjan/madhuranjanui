import { FaCheckDouble } from "react-icons/fa";

export default function AlpineNotice() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-md border-l-4 border-r-4 border-y shadow-sm border-violet-500 dark:border-blue-500">
      <div className="flex items-center">
        <FaCheckDouble className="hidden lg:block mr-3 w-6 h-6 text-red-500 dark:text-red-900" />
        <p className="text-gray-800 dark:text-gray-100">
          This component relies on Alpine.js. Please ensure that Alpine.js is
          installed and properly configured before using this component.
        </p>
      </div>
    </div>
  );
}
