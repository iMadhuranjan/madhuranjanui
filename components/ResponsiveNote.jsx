import { FaInfoCircle } from "react-icons/fa";

export default function ResponsiveNote() {
  return (
    <div className="p-2 mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-indigo-700 dark:to-blue-700 rounded-lg shadow-lg">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <FaInfoCircle className="w-8 h-8 text-white" />
        </div>
        <div className="ml-4">
          <p className="text-white font-semibold text-base">
            All our components are fully responsive and perform flawlessly on
            every device.
          </p>
          <p className="mt-1 text-white text-sm">
            All components are fully responsive and adapt to any screen size.
            While mobile previews may appear condensed, they will display
            perfectly on actual devices. Test them on{" "}
            <a
              href="https://play.tailwindcss.com/#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              Tailwind CSS Play
            </a>
            . or resize your browser to see the responsiveness in action.
          </p>
        </div>
      </div>
    </div>
  );
}
