"use client";
import DocsSidebar from "@/components/Sidebar";
import Sponsors from "@/components/Sponsors";
import TableOfContents from "@/components/Toc";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Sidebar (Hidden on mobile) */}
      <div className="hidden lg:flex lg:flex-col w-auto min-w-[12rem] max-w-[16rem] sticky top-16 h-[calc(100vh_-_4rem)] overflow-auto">
        <DocsSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full lg:w-[70%]" id="main-content">
        {children}
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block lg:w-[15%] sticky top-16 h-[calc(100vh_-_4rem)]">
        <div className="h-full flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <TableOfContents excludeIds="main-title" className="h-full" />
          </div>
          <div className="border-t border-neutral-200 dark:border-neutral-700">
            <Sponsors />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
