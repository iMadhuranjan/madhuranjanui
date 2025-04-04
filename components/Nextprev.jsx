import Adsense5 from "@/Adsense/Adsense5";
import { Menu } from "@/helper/menuSection";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function NextPrevNavigation({ currentPath }) {
  if (!Menu || !Array.isArray(Menu)) {
    console.error("Menu is not an array or is undefined!");
    return null;
  }

  let allItems = [];

  // Flatten the sections
  Menu.forEach((section) => {
    if (section.items && Array.isArray(section.items)) {
      allItems = allItems.concat(section.items);
    }
  });

  // Find current index
  const currentIndex = allItems.findIndex((item) => item.href === currentPath);

  if (currentIndex === -1) {
    console.error("Current path not found in Menu:", currentPath);
    return null;
  }

  // Get previous and next items
  const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-t border-b pb-4 px-4 border-gray-300 dark:border-gray-700 pt-4">
        {/* Previous Button */}
        {prevItem ? (
          <Link
            href={prevItem.href}
            className="flex items-center gap-2 px-4 py-2 text-base font-semibold rounded-sm shadow-sm 
                     bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 
                     dark:from-gray-800 dark:to-gray-700 dark:text-white 
                     hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 
                     transition-all duration-300"
          >
            <FaArrowLeft className="text-gray-600 dark:text-gray-300" />
            {prevItem.name}
          </Link>
        ) : (
          <div />
        )}

        {/* Next Button */}
        {nextItem ? (
          <Link
            href={nextItem.href}
            className="flex items-center gap-2 px-4 py-2 text-base font-semibold rounded-sm shadow-md 
                     bg-gradient-to-r from-blue-500 to-blue-600 text-white 
                     dark:from-blue-700 dark:to-blue-800 
                     hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-800 dark:hover:to-blue-900 
                     transition-all duration-300"
          >
            {nextItem.name}
            <FaArrowRight className="text-white" />
          </Link>
        ) : (
          <div />
        )}
      </div>
      <Adsense5 />
    </>
  );
}
