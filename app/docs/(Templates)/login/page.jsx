import TemplateContainer from "@/components/TemplateContainer";
import React from "react";
import {
  AdvanedLoginFormCode,
  LoginPageWithImageCode,
  LogonWithThreeSocialMeidaCode,
  MostAvnacedLoginFormCode,
  simpleLoginFormCode,
} from "./loginCode";
import {
  AdvanedLoginFormPage,
  LoginWith3SocialMeida,
  SimpleLoginForm,
  LoginPageWithImage,
  MostAdvanedLoginPage,
} from "./Login";
import MainContainer from "@/components/MainContainer";
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
        id="main-login"
        heading="Tailwind CSS Login Forms"
        description="Explore our range of login form designs, from simple and clean layouts to advanced forms with social media integration. Each design is optimized for a seamless user experience."
      />

      {/* 1. Simple Login Form */}
      <h2 className={CommonStyle.docHeading} id="simple-login">
        Simple Login Form
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A basic, straightforward login form designed for quick access.
      </p>
      <TemplateContainer code={simpleLoginFormCode}>
        <SimpleLoginForm />
      </TemplateContainer>

      {/* 2. Advanced Login Form */}
      <h2 className={CommonStyle.docHeading} id="advanced-login">
        Advanced Login Form
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A feature-rich form offering additional security and enhanced
        validation.
      </p>
      <MainContainer code={AdvanedLoginFormCode}>
        <AdvanedLoginFormPage />
      </MainContainer>
      <Adsense2 />
      {/* 3. Login with Social Media */}
      <h2 className={CommonStyle.docHeading} id="login-social">
        Login with Social Media
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Incorporates social media buttons for seamless login via popular
        platforms.
      </p>
      <MainContainer code={LogonWithThreeSocialMeidaCode}>
        <LoginWith3SocialMeida />
      </MainContainer>

      {/* 4. Login Page with Image */}
      <h2 className={CommonStyle.docHeading} id="login-with-image">
        Login Page with Image
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A stylish login page enhanced with an impactful image.
      </p>
      <TemplateContainer code={LoginPageWithImageCode}>
        <LoginPageWithImage />
      </TemplateContainer>
      <Adsense3 />
      {/* 5. Most Advanced Login Form */}
      <h2 className={CommonStyle.docHeading} id="most-advanced-login">
        Most Advanced Login Form
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Our most sophisticated login design, packed with features for an optimal
        experience.
      </p>
      <TemplateContainer code={MostAvnacedLoginFormCode}>
        <MostAdvanedLoginPage />
      </TemplateContainer>

      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/login"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Login Page Components - Madhuranjan UI",
  description:
    "Explore modern Tailwind CSS login form designs including simple layouts, advanced validation, social login buttons, and image-enhanced pages. Built for responsiveness and a seamless user experience.",
  keywords: [
    "Tailwind CSS Login",
    "Login Page Components",
    "Advanced Login Form",
    "Social Media Login",
    "Login Form with Image",
    "Responsive Login UI",
    "Tailwind Login Templates",
    "Modern Login Design",
    "Authentication UI Tailwind",
    "User Login Components",
  ],
  openGraph: {
    title: "Tailwind CSS Login Page Components - Madhuranjan UI",
    description:
      "Browse stylish and responsive login forms built with Tailwind CSS. Includes simple, advanced, and social-enabled login pages tailored for user-friendly authentication.",
    url: "https://madhuranjanui.com/docs/login",
    type: "website",
  },
};
