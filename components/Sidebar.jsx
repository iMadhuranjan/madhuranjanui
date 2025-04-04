"use client";
import React from "react";
import Link from "next/link";
import { menuSections } from "./Navbar";
import { usePathname } from "next/navigation";

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="relative h-full overflow-y-auto overflow-x-hidden custom-scrollbar border-r dark:bg-gray-900">
      <aside className="p-3">
        <h2 className="text-xl font-bold mb-3">Documentation</h2>
        <Link
          href="/docs/quick-start"
          className={`block mb-3 text-foreground/70 hover:text-foreground duration-150 hover:scale-105 transition-transform transform-origin-left ${
            pathname === "/docs/quick-start"
              ? "bg-blue-100 dark:bg-blue-900 rounded px-2 py-1 font-semibold text-violet-600 dark:text-violet-200"
              : ""
          }`}
        >
          Quick Start
        </Link>
        {menuSections.map((section) => (
          <div key={section.title} className="mb-8">
            <h3 className="font-semibold text-foreground/90 mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.name} className="min-w-0">
                    <Link
                      href={item.href}
                      className={`block text-foreground/70 hover:text-foreground duration-150 hover:scale-105 transition-transform transform-origin-left dark:hover:text-blue-300 
                        ${
                          isActive
                            ? "bg-blue-100 dark:bg-blue-900 rounded px-2 py-1 font-semibold text-violet-600 dark:text-violet-100"
                            : ""
                        } 
                        whitespace-normal break-words overflow-hidden max-w-full px-2 py-1`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </aside>
    </div>
  );
}
