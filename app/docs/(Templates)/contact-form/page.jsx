import TemplateContainer from '@/components/TemplateContainer'
import React from 'react'
import { contactPagecode, ContactPageCompoentPage, ContactPageCompoentPageCode, ContactPageWithAddressCode, ContactPageWithCardCode, ContactPageWithFaqCode } from './contactFormCode'
import { ContactPage, ContactPageCompoent, ContactPageWithAddress, ContactPageWithCard, ContactPageWithFaq } from './ContactForm'
import BlockkHeading from '@/components/BlockHeading';
import CommonStyle from '@/helper/style';
import NextPrevNavigation from '@/components/Nextprev';
import Adsense3 from '@/Adsense/Adsense3';

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <BlockkHeading
        id="main-contact"
        heading="Tailwind CSS Contact Pages"
        description="Explore our diverse collection of Contact page designs, each crafted to facilitate communication with your audience. Whether you need a simple contact form or a detailed layout with address and FAQs, these templates help you engage effortlessly."
      />

      {/* 1. Contact Page Component */}
      <h2 className={CommonStyle.docHeading} id="contact-page-component">
        Contact Page Component
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A versatile layout ideal for basic inquiries and quick contact options.
      </p>
      <TemplateContainer code={ContactPageCompoentPageCode}>
        <ContactPageCompoent />
      </TemplateContainer>

      {/* 2. Contact Page */}
      <h2 className={CommonStyle.docHeading} id="contact-page">
        Contact Page
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A clean, modern design providing a straightforward contact experience.
      </p>
      <TemplateContainer code={contactPagecode}>
        <ContactPage />
      </TemplateContainer>
<Adsense3/>
      {/* 3. Contact Page With Address */}
      <h2 className={CommonStyle.docHeading} id="contact-page-address">
        Contact Page With Address
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Highlight your office location and contact details with this informative layout.
      </p>
      <TemplateContainer code={ContactPageWithAddressCode}>
        <ContactPageWithAddress />
      </TemplateContainer>

      {/* 4. Contact Page With Card */}
      <h2 className={CommonStyle.docHeading} id="contact-page-card">
        Contact Page With Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Engage visitors with a card-based design that neatly organizes contact options.
      </p>
      <TemplateContainer code={ContactPageWithCardCode}>
        <ContactPageWithCard />
      </TemplateContainer>
<Adsense3/>
      {/* 5. Contact Page With FAQ */}
      <h2 className={CommonStyle.docHeading} id="contact-page-faq">
        Contact Page With FAQ
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Include frequently asked questions to provide instant support and clarity.
      </p>
      <TemplateContainer code={ContactPageWithFaqCode}>
        <ContactPageWithFaq />
      </TemplateContainer>

      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/contact-form"} />
    </div>
  );
};

export default Page;



export const metadata = {
  title: "Tailwind CSS Contact Page Components - Madhuranjan UI",
  description:
    "Explore responsive and elegant Tailwind CSS Contact page templates. Includes layouts with address info, cards, FAQs, and simple forms to help you connect with your audience effortlessly.",
  keywords: [
    "Tailwind CSS Contact Page",
    "Contact Form Components",
    "Responsive Contact Layout",
    "Contact Page with FAQ",
    "Tailwind Address Form",
    "Contact Us Design",
    "Modern Contact Templates",
    "Card Based Contact UI",
    "Tailwind Communication Forms",
    "Simple Contact Page Tailwind",
  ],
  openGraph: {
    title: "Tailwind CSS Contact Page Components - Madhuranjan UI",
    description:
      "Discover beautifully designed Contact page components built with Tailwind CSS. Choose from forms with cards, address sections, and FAQs — all responsive and dark mode ready.",
    url: "https://madhuranjanui.com/docs/contact-form",
    type: "website",
  },
};
