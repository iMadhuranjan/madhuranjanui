import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  registerWithIconCode,
  RegisterWithImageCode,
  RegisterWithTermCodetionCode,
  RegsiterWithAddressCode,
  simpleRegsitationFormcode,
} from "./registerCode";
import {
  RegisetWithTermAndCondition,
  RegisterWithIcon,
  RegistrationWithImage,
  ResgisterWithAddress,
  SimpleRegistrationForm,
} from "./Register";
import NextPrevNavigation from "@/components/Nextprev";
import CommonStyle from "@/helper/style";
import BlockkHeading from "@/components/BlockHeading";
import Adsense2 from "@/Adsense/Adsense2";
import Adsense3 from "@/Adsense/Adsense3";
const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <BlockkHeading
        id="main-registration"
        heading="Tailwind CSS Registration Forms"
        description="Explore our collection of registration form designs. Each template is tailored to provide a seamless user onboarding experience with unique features, from simple registration to detailed forms with terms, icons, and address fields."
      />

      {/* 1. Registration with Terms & Conditions */}
      <h2 className={CommonStyle.docHeading} id="registration-term">
        Registration with Terms &amp; Conditions
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A registration form that includes terms and conditions for user
        compliance.
      </p>
      <MainContainer code={RegisterWithTermCodetionCode}>
        <RegisetWithTermAndCondition />
      </MainContainer>

      {/* 2. Simple Registration Form */}
      <h2 className={CommonStyle.docHeading} id="simple-registration">
        Simple Registration Form
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A minimalistic registration form designed for a quick and easy sign-up.
      </p>
      <MainContainer code={simpleRegsitationFormcode}>
        <SimpleRegistrationForm />
      </MainContainer>
<Adsense2/>
      {/* 3. Registration with Icon */}
      <h2 className={CommonStyle.docHeading} id="registration-icon">
        Registration with Icon
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A modern registration form featuring icons to enhance the user
        experience.
      </p>
      <MainContainer code={registerWithIconCode}>
        <RegisterWithIcon />
      </MainContainer>

      {/* 4. Registration with Address */}
      <h2 className={CommonStyle.docHeading} id="registration-address">
        Registration with Address
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A comprehensive form that collects address details along with basic
        information.
      </p>
      <MainContainer code={RegsiterWithAddressCode}>
        <ResgisterWithAddress />
      </MainContainer>
<Adsense3/>
      {/* 5. Registration with Image */}
      <h2 className={CommonStyle.docHeading} id="registration-image">
        Registration with Image
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A visually engaging registration form that incorporates an image for
        added appeal.
      </p>
      <MainContainer code={RegisterWithImageCode}>
        <RegistrationWithImage />
      </MainContainer>

      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/register"} />
    </div>
  );
};

export default Page;


export const metadata = {
  title: "Tailwind CSS Registration Form Components - Madhuranjan UI",
  description:
    "Explore beautiful and functional registration form templates built with Tailwind CSS. Includes simple forms, terms & conditions, icons, address fields, and image-enhanced layouts all responsive and user-friendly.",
  keywords: [
    "Tailwind CSS Registration",
    "Register Form Components",
    "Sign Up Page Tailwind",
    "Registration with Terms",
    "Tailwind Sign Up Form",
    "Register Form with Icons",
    "Tailwind Registration UI",
    "Address Field Registration",
    "Responsive Signup Forms",
    "Tailwind Auth Components",
  ],
  openGraph: {
    title: "Tailwind CSS Registration Form Components - Madhuranjan UI",
    description:
      "Browse responsive and styled registration forms created with Tailwind CSS. Perfect for onboarding users with support for terms, icons, addresses, and custom layouts.",
    url: "https://madhuranjanui.com/docs/register",
    type: "website",
  },
};
