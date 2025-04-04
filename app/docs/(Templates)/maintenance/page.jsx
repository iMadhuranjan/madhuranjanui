import TemplateContainer from "@/components/TemplateContainer";
import React from "react";
import {
  MaintanceCardCode,
  QuantumMaintanceCode,
  SystemMaintanceAdvancedCode,
  SystemMaintanceCode,
  SystemRebootCode,
} from "./maintenanceCode";
import {
  MaintainceCard,
  QuantumMaintance,
  SystemMaintance,
  SystemMaintanceAdvance,
  SytemReboot,
} from "./Maintance";
import NextPrevNavigation from "@/components/Nextprev";
import CommonStyle from "@/helper/style";
import BlockkHeading from "@/components/BlockHeading";
import Adsense3 from "@/Adsense/Adsense3";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <BlockkHeading
        id="main-maintenance"
        heading="Tailwind CSS Maintenance Pages"
        description="Keep your users informed with our maintenance page designs. Whether it’s a scheduled update, a system reboot, or extended maintenance, each layout is designed to communicate status clearly and effectively."
      />

      {/* 1. Maintenance Card */}
      <h2 className={CommonStyle.docHeading} id="maintenance-card">
        Maintenance Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A clean, card-based layout that communicates scheduled maintenance details.
      </p>
      <TemplateContainer code={MaintanceCardCode}>
        <MaintainceCard />
      </TemplateContainer>

      {/* 2. System Maintenance */}
      <h2 className={CommonStyle.docHeading} id="system-maintenance">
        System Maintenance
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A straightforward page to inform users about ongoing system maintenance.
      </p>
      <TemplateContainer code={SystemMaintanceCode}>
        <SystemMaintance />
      </TemplateContainer>
<Adsense3/>
      {/* 3. System Reboot */}
      <h2 className={CommonStyle.docHeading} id="system-reboot">
        System Reboot
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Notify your users about an imminent system reboot with this simple, effective design.
      </p>
      <TemplateContainer code={SystemRebootCode}>
        <SytemReboot />
      </TemplateContainer>

      {/* 4. Advanced System Maintenance */}
      <h2 className={CommonStyle.docHeading} id="advanced-maintenance">
        Advanced System Maintenance
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A comprehensive layout that provides detailed updates during extended maintenance periods.
      </p>
      <TemplateContainer code={SystemMaintanceAdvancedCode}>
        <SystemMaintanceAdvance />
      </TemplateContainer>
<Adsense3/>
      {/* 5. Quantum Maintenance */}
      <h2 className={CommonStyle.docHeading} id="quantum-maintenance">
        Quantum Maintenance
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A futuristic design that leverages innovative visuals to communicate maintenance status.
      </p>
      <TemplateContainer code={QuantumMaintanceCode}>
        <QuantumMaintance />
      </TemplateContainer>

      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/maintenance"} />
    </div>
  );
};

export default Page;


export const metadata = {
  title: "Tailwind CSS Maintenance Page Components - Madhuranjan UI",
  description:
    "Explore a collection of Tailwind CSS maintenance page templates for informing users about system downtime, reboots, and scheduled updates. Designs range from simple cards to futuristic layouts all responsive and user-friendly.",
  keywords: [
    "Tailwind CSS Maintenance",
    "Maintenance Page Templates",
    "System Reboot UI",
    "Scheduled Downtime Page",
    "Maintenance Card Design",
    "System Update UI",
    "Advanced Maintenance Layout",
    "Tailwind Error Page",
    "Responsive Maintenance Components",
    "Website Maintenance Notice",
  ],
  openGraph: {
    title: "Tailwind CSS Maintenance Page Components - Madhuranjan UI",
    description:
      "Keep users informed during downtime with well-designed Tailwind CSS maintenance pages. Includes clean card layouts, reboot notices, and advanced system maintenance templates.",
    url: "https://madhuranjanui.com/docs/maintenance",
    type: "website",
  },
};
