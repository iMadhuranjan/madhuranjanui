import MainContainer from '@/components/MainContainer'
import React from 'react'
import { CheckedSwitchReactCode, CheckedSwitchToogleCode, DefailtToogleCode, DisabledToofgleCode, sizeToogleCode, TitleWithDecriptionCode, ToogleTopWithCode, ToogleWithColoredCode, ToogleWithIconCode } from './ToogleSwitchCode'
import { CheckSwitchToogle, ColoredToole, DeaaultToogle, DisabledToogle, SizeToogle, ToogleWithIcon, ToogleWithToolTip, TooglSwtchWithTIleAndDexcription } from './ToogleSwitch'
import ReactContainer from '@/components/ReactContainer'
import NextPrevNavigation from '@/components/Nextprev'
import CommonStyle from '@/helper/style'
import SectionHeading from '@/components/SectionHeading'
import Adsense3 from '@/Adsense/Adsense3'
import Adsense2 from '@/Adsense/Adsense2'


const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
        heading="Tailwind CSS Toggle Switch Components"
        description="Discover a curated collection of toggle switch components built with Tailwind CSS. Each toggle offers intuitive on/off functionality with modern design aesthetics, responsive behavior, and accessibility in mind."
      />

      <p className="mb-5 text-gray-900 dark:text-gray-200 pl-2">
        This collection of toggle components provides a variety of options from simple default toggles to variants enhanced with icons, tooltips, and color accents. Whether you need a compact toggle for settings or an advanced switch with titles and descriptions, these examples are designed to deliver a seamless user experience.
      </p>

      {/* 1. Default Toggle */}
      <h2 className={CommonStyle.docHeading} id="default-toggle">
        Default Toggle
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A basic toggle switch offering simple on/off functionality with clean styling.
      </p>
      <MainContainer code={DefailtToogleCode}>
        <DeaaultToogle />
      </MainContainer>

      {/* 2. Checked Switch Toggle */}
      <h2 className={CommonStyle.docHeading} id="checked-switch-toggle">
        Checked Switch Toggle
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A toggle switch that is pre-checked by default and integrated with React for dynamic state handling.
      </p>
      <ReactContainer
        htmlCode={CheckedSwitchToogleCode}
        reactCode={CheckedSwitchReactCode}
      >
        <CheckSwitchToogle />
      </ReactContainer>
<Adsense3/>
      {/* 3. Size Toggle */}
      <h2 className={CommonStyle.docHeading} id="size-toggle">
        Size Toggle
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A versatile toggle switch available in multiple sizes to fit different design requirements.
      </p>
      <MainContainer code={sizeToogleCode}>
        <SizeToogle />
      </MainContainer>

      {/* 4. Toggle with Icon */}
      <h2 className={CommonStyle.docHeading} id="toggle-with-icon">
        Toggle with Icon
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A toggle switch that incorporates an icon to enhance its visual appeal and user interactivity.
      </p>
      <MainContainer code={ToogleWithIconCode}>
        <ToogleWithIcon />
      </MainContainer>
<Adsense3/>
      {/* 5. Colored Toggle */}
      <h2 className={CommonStyle.docHeading} id="colored-toggle">
        Colored Toggle
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A vibrant toggle switch variant that uses accent colors to indicate its active state.
      </p>
      <MainContainer code={ToogleWithColoredCode}>
        <ColoredToole />
      </MainContainer>

      {/* 6. Toggle with Tooltip */}
      <h2 className={CommonStyle.docHeading} id="toggle-with-tooltip">
        Toggle with Tooltip
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A toggle switch enhanced with a tooltip to provide additional context or instructions.
      </p>
      <MainContainer code={ToogleTopWithCode}>
        <ToogleWithToolTip />
      </MainContainer>
<Adsense3/>
      {/* 7. Toggle with Title and Description */}
      <h2 className={CommonStyle.docHeading} id="toggle-title-description">
        Toggle with Title and Description
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        An advanced toggle switch that includes a title and detailed description for a more informative experience.
      </p>
      <MainContainer code={TitleWithDecriptionCode}>
        <TooglSwtchWithTIleAndDexcription />
      </MainContainer>

      {/* 8. Disabled Toggle */}
      <h2 className={CommonStyle.docHeading} id="disabled-toggle">
        Disabled Toggle
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A toggle switch rendered in a disabled state to indicate non-interactivity.
      </p>
      <MainContainer code={DisabledToofgleCode}>
        <DisabledToogle />
      </MainContainer>
<Adsense2/>
      <NextPrevNavigation  currentPath={"/docs/toggle-switch"} />
    </div>
  );
};

export default Page;


export const metadata = {
  title: "Tailwind CSS Toggle Switch Components - Madhuranjan UI",
  description:
    "Explore a complete collection of Tailwind CSS toggle switch components. Includes default, icon-based, tooltip-enhanced, colored, and disabled toggles—all responsive and accessible for modern interfaces.",
  keywords: [
    "Tailwind CSS Toggle",
    "Toggle Switch UI",
    "Switch Component",
    "Tailwind Dark Mode Toggle",
    "Custom Toggle Switch",
    "React Toggle",
    "Colored Toggle",
    "Toggle with Tooltip",
    "Toggle with Title and Description",
    "Disabled Toggle Switch",
  ],
  openGraph: {
    title: "Tailwind CSS Toggle Components - Madhuranjan UI",
    description:
      "Discover customizable toggle switches built with Tailwind CSS. Includes toggles with icons, tooltips, sizes, descriptions, and disabled states. Perfect for interactive UIs.",
    url: "https://madhuranjanui.com/docs/toggle",
    type: "website",
  },
};
