import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  AllAlphabetKeyboardsCode,
  AllKbdCode,
  ArrowKbdCode,
  functionalKeywordsCode,
  ListGroupExampleCode,
} from "./KbdCode";
import {
  AllAlphabetKeyboards,
  AllKeyboard,
  ArrowKbd,
  FunctionalKbds,
  ListGroupExample,
} from "./AllKbd";
import CommonStyle from "@/helper/style";
import SectionHeading from "@/components/SectionHeading";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense3 from "@/Adsense/Adsense3";

const page = () => {
  return (
    <div className={CommonStyle.containerEntry}>
      <SectionHeading
        id="tailwind-keyboards"
        heading="Tailwind CSS KBD (Keyboard) Components"
        description="Explore a collection of stylish and functional keyboard components built with Tailwind CSS. These keys are fully responsive, support both light and dark themes, and offer a sleek UI for various applications."
      />

      <h2 className={CommonStyle.docHeading} id="All-Keyboards">
        All Keyboard Keys
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A complete set of keyboard keys, including letters, numbers, function
        keys, and special keys. These components follow a uniform design system
        ensuring responsiveness and clarity across different devices.
      </p>
      <MainContainer code={AllKbdCode}>
        <AllKeyboard />
      </MainContainer>

      <h2 className={CommonStyle.docHeading} id="List-Groups">
        List Group Keyboard UI
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A structured group of keys that visually categorize different keyboard
        elements. Useful for layouts requiring clear separation between key
        clusters.
      </p>
      <MainContainer code={ListGroupExampleCode}>
        <ListGroupExample />
      </MainContainer>

<Adsense2/>
      <h2 className={CommonStyle.docHeading} id="Function-Keys">
        Functional Keyboard Keys (F1 - F12)
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        Function keys provide quick access to common shortcuts and system
        commands. These keys are styled to match real keyboard aesthetics and
        are fully adaptive to dark/light themes.
      </p>
      <MainContainer code={functionalKeywordsCode}>
        <FunctionalKbds />
      </MainContainer>

      <h2 className={CommonStyle.docHeading} id="Alphabet-Keys">
        Alphabet Keyboard Keys (A - Z)
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        This section includes all alphabetical keys, styled for clarity and
        usability. Perfect for integrating custom keyboard layouts in
        applications or interfaces.
      </p>
      <MainContainer code={AllAlphabetKeyboardsCode}>
        <AllAlphabetKeyboards />
      </MainContainer>

<Adsense3/>
      <h2 className={CommonStyle.docHeading} id="Arrow-Keys">
        Arrow Keys (Small, Medium, Large)
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        Arrow keys in three different sizes (Small, Medium, Large) allow for
        flexibility in UI/UX applications. Each key follows a consistent design
        language, ensuring responsiveness and visual clarity.
      </p>
      <MainContainer code={ArrowKbdCode}>
        <ArrowKbd />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/kbd"} />
    </div>
  );
};

export default page;

export const metadata = {
  title: "Tailwind CSS KBD (Keyboard) Components - Madhuranjan UI ",
  description:
    "Explore a collection of stylish and responsive keyboard components built with Tailwind CSS. Includes function keys, alphabet keys, arrow keys, and more, supporting both light and dark themes.",
  keywords: [
    "Tailwind CSS keyboard",
    "keyboard components",
    "keycaps UI",
    "functional keys",
    "alphabet keys",
    "arrow keys",
    "responsive UI",
    "dark mode keyboard",
  ],
  openGraph: {
    title: "Tailwind CSS Keyboard Components | Madhuranjan UI",
    description:
      "A collection of beautiful and functional keyboard components styled with Tailwind CSS. Includes function keys, alphabet keys, arrow keys, and more.",
  },
};
