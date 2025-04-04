import TemplateContainer from "@/components/TemplateContainer";
import {
  BeautifulCtaSectionCode,
  ContactFormWithCtaAndTrustCode,
  CtaWithBackgroudnLineCode,
  CtaWithContactFormCode,
  gradientBorderCtaSectionCode,
  SImpleCardCtaCode,
  SimpleCTACode,
  SimpleCtaSectionCode,
} from "./ctaSectionCode";
import {
  BeautifulCtaSection,
  CtaWithBackgroudLine,
  CtaWithContactForm,
  CtaWithContactFormAndTrust,
  GradientBgCtaSection,
  Simpelcta,
  SimpleCardCta,
  SimpleCTASEction,
} from "./CtaSection";
import BlockkHeading from "@/components/BlockHeading";
import CommonStyle from "@/helper/style";
import NextPrevNavigation from "@/components/Nextprev";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense3 from "@/Adsense/Adsense3";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <BlockkHeading
        id="main-cta"
        heading="Tailwind CSS Call To Action (CTA) Pages"
        description="Browse our versatile CTA templates designed to drive engagement and conversions. Each layout is crafted to capture attention and prompt your audience to take action."
      />

      {/* 1. Simple CTA */}
      <h2 className={CommonStyle.docHeading} id="simple-cta">
        Simple CTA
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A straightforward design focused on a clear and direct call-to-action.
      </p>
      <TemplateContainer code={SimpleCTACode}>
        <Simpelcta />
      </TemplateContainer>

      {/* 2. Simple CTA Section */}
      <h2 className={CommonStyle.docHeading} id="simple-cta-section">
        Simple CTA Section
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        An engaging section with concise messaging to prompt user interaction.
      </p>
      <TemplateContainer code={SimpleCtaSectionCode}>
        <SimpleCTASEction />
      </TemplateContainer>
      <Adsense2 />
      {/* 3. Simple Card CTA */}
      <h2 className={CommonStyle.docHeading} id="simple-card-cta">
        Simple Card CTA
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A card-style design that highlights a specific offer or action.
      </p>
      <TemplateContainer code={SImpleCardCtaCode}>
        <SimpleCardCta />
      </TemplateContainer>

      {/* 4. Gradient Border CTA Section */}
      <h2 className={CommonStyle.docHeading} id="gradient-border-cta">
        Gradient Border CTA Section
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A modern layout featuring a striking gradient border to emphasize your
        CTA.
      </p>
      <TemplateContainer code={gradientBorderCtaSectionCode}>
        <GradientBgCtaSection />
      </TemplateContainer>
      <Adsense3 />
      {/* 5. Beautiful CTA Section */}
      <h2 className={CommonStyle.docHeading} id="beautiful-cta">
        Beautiful CTA Section
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A visually appealing design that seamlessly combines imagery and text.
      </p>
      <TemplateContainer code={BeautifulCtaSectionCode}>
        <BeautifulCtaSection />
      </TemplateContainer>

      {/* 6. CTA With Contact Form */}
      <h2 className={CommonStyle.docHeading} id="cta-contact-form">
        CTA With Contact Form
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Integrate a contact form directly within your call-to-action for
        immediate lead capture.
      </p>
      <TemplateContainer code={CtaWithContactFormCode}>
        <CtaWithContactForm />
      </TemplateContainer>
      <Adsense3 />
      {/* 7. Contact Form With CTA And Trust */}
      <h2 className={CommonStyle.docHeading} id="cta-contact-form-trust">
        Contact Form With CTA And Trust
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Enhance credibility by combining a contact form with trust signals
        alongside your CTA.
      </p>
      <TemplateContainer code={ContactFormWithCtaAndTrustCode}>
        <CtaWithContactFormAndTrust />
      </TemplateContainer>

      {/* 8. CTA With Background Line */}
      <h2 className={CommonStyle.docHeading} id="cta-background-line">
        CTA With Background Line
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A unique design that features a background line to add a stylish touch
        to your CTA.
      </p>
      <TemplateContainer code={CtaWithBackgroudnLineCode}>
        <CtaWithBackgroudLine />
      </TemplateContainer>
      <Adsense3 />
      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/cta-section"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Call To Action (CTA) Components - Madhuranjan UI",
  description:
    "Browse modern and responsive Tailwind CSS Call To Action (CTA) components designed to boost user engagement. Includes card-based CTAs, gradient borders, integrated contact forms, and more.",
  keywords: [
    "Tailwind CSS CTA",
    "Call To Action Components",
    "CTA Card Layout",
    "Tailwind Engagement UI",
    "CTA with Contact Form",
    "Trust Signal CTA",
    "Gradient Border CTA",
    "Simple CTA Section",
    "Tailwind Conversion UI",
    "Responsive CTA Design",
  ],
  openGraph: {
    title: "Tailwind CSS Call To Action (CTA) Components - Madhuranjan UI",
    description:
      "Explore high-converting CTA components crafted with Tailwind CSS. From sleek cards to contact-integrated CTAs, these sections are built to drive clicks and conversions.",
    url: "https://madhuranjanui.com/docs/cta-section",
    type: "website",
  },
};
