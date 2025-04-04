import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  ChatInputTextareaCode,
  COloredTextareaCode,
  CommentTextareaCode,
  DisbaledTextAreaCode,
  SimpleTextAreacode,
  TextareaWithAvatarAndActionCode,
} from "./TestareaCode";
import {
  ChatInputtextarea,
  ColoredTextarea,
  CommentTextarra,
  DisabledTextArea,
  SimpleTextArea,
  TextAreaWithAvatarAndActions,
} from "./TextArea";
import SectionHeading from "@/components/SectionHeading";
import CommonStyle from "@/helper/style";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense3 from "@/Adsense/Adsense3";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
        heading="Tailwind CSS Text Areas"
        description="Explore a collection of text area components built with Tailwind CSS. Each component is crafted for a specific usec ase from simple text input to more advanced layouts with avatars and action icons ensuring a seamless, theme-aware experience."
      />

      {/* 1. Simple Text Area */}
      <h2 className={CommonStyle.docHeading} id="simple-text-area">
        Simple Text Area
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A basic text area for capturing multiline text input.
      </p>
      <MainContainer code={SimpleTextAreacode}>
        <SimpleTextArea />
      </MainContainer>

      {/* 2. Comment Text Area */}
      <h2 className={CommonStyle.docHeading} id="comment-text-area">
        Comment Text Area
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A dedicated text area optimized for writing comments with a clean interface.
      </p>
      <MainContainer code={CommentTextareaCode}>
        <CommentTextarra />
      </MainContainer>
<Adsense2/>
      {/* 3. Colored Text Area */}
      <h2 className={CommonStyle.docHeading} id="colored-text-area">
        Colored Text Area
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A text area enhanced with color accents to draw attention to interactive elements.
      </p>
      <MainContainer code={COloredTextareaCode}>
        <ColoredTextarea />
      </MainContainer>

      {/* 4. Disabled Text Area */}
      <h2 className={CommonStyle.docHeading} id="disabled-text-area">
        Disabled Text Area
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A non-editable text area used to display read-only content.
      </p>
      <MainContainer code={DisbaledTextAreaCode}>
        <DisabledTextArea />
      </MainContainer>
<Adsense3/>
      {/* 5. Text Area with Avatar and Actions */}
      <h2 className={CommonStyle.docHeading} id="textarea-with-avatar-actions">
        Text Area with Avatar and Actions
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        An advanced text area that integrates an avatar and action icons for enhanced interactivity.
      </p>
      <MainContainer code={TextareaWithAvatarAndActionCode}>
        <TextAreaWithAvatarAndActions />
      </MainContainer>

      {/* 6. Chat Input Text Area */}
      <h2 className={CommonStyle.docHeading} id="chat-input-text-area">
        Chat Input Text Area
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A compact text area tailored for chat and messaging interfaces.
      </p>
      <MainContainer code={ChatInputTextareaCode}>
        <ChatInputtextarea />
      </MainContainer>
<Adsense2/>
      <NextPrevNavigation currentPath={"/docs/textarea"} />
    </div>
  );
};

export default Page;


export const metadata = {
  title: "Tailwind CSS Textarea Components - Madhuranjan UI",
  description:
    "Explore a rich set of Tailwind CSS textarea components, including simple, colored, disabled, and advanced variants with avatars and actions. Fully responsive and dark mode compatible.",
  keywords: [
    "Tailwind CSS Textarea",
    "Textarea Component",
    "Multiline Input Field",
    "Tailwind Form Textarea",
    "Comment Box UI",
    "Chat Input Field",
    "Textarea with Avatar",
    "Disabled Textarea",
    "Responsive Textarea",
    "Dark Mode Textarea",
  ],
  openGraph: {
    title: "Tailwind CSS Textarea UI Components - Madhuranjan UI",
    description:
      "Discover beautifully designed Tailwind CSS textarea components including comment fields, chat inputs, and avatar-integrated layouts. Perfect for modern forms and messaging UIs.",
    url: "https://madhuranjanui.com/docs/textarea",
    type: "website",
  },
};
