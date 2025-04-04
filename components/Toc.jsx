"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Detects route changes

export default function ScrollSpyNav({
  sectionSelector = "h2",
  containerSelector = "#main-content",
  excludeIds = [],
}) {
  const [sections, setSections] = useState([]);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    // Reset state when route changes
    setSections([]);
    setActiveSection("");

    const container = document.querySelector(containerSelector);
    if (!container) return;

    const headings = Array.from(container.querySelectorAll(sectionSelector))
      .filter((heading) => heading.id && !excludeIds.includes(heading.id))
      .map((heading) => ({
        id: heading.id,
        text: heading.innerText || heading.textContent,
      }));

    setSections(headings);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Ensures new heading is at least 50% visible before switching
    };

    const observer = new IntersectionObserver((entries) => {
      let visibleSection = activeSection;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSection = entry.target.id;
        }
      });
      setActiveSection(visibleSection);
    }, observerOptions);

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname, sectionSelector, containerSelector, excludeIds]); // ✅ Reacts to route changes

  // ✅ Smooth Scroll Function
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed header spacing
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-2 lg:p-3 xl:p-4 sticky top-3 h-fit ">
      <h3 className="font-bold text-lg mb-2">On this page</h3>
      <ul>
        {sections.length > 0 ? (
          sections.map(({ id, text }) => (
            <li key={id} className="py-1">
              <a
                href={`#${id}`}
                onClick={(e) => handleSmoothScroll(e, id)}
                className={`block px-2 py-1 rounded transition ${
                  activeSection === id
                    ? "text-blue-600 dark:text-violet-300 font-semibold border-l-2 border-blue-500 dark:border-violet-600 pl-2"
                    : "text-gray-700 dark:text-gray-400 dark:border-violet-600 hover:text-violet-500 dark:hover:text-violet-100"
                }`}
              >
                {text}
              </a>
            </li>
          ))
        ) : (
          <p className="text-gray-500">Loading Heading...</p>
        )}
      </ul>
    </div>
  );
}
