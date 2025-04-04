import TemplateContainer from "@/components/TemplateContainer";
import React from "react";
import {
  BeautifulTeamCardCode,
  CircleCardTeamPageCode,
  MeetourTeamCode,
  simpleTeamCardCode,
  TeamDescripopnWithCode,
} from "./teamSectionCode";
import {
  BeautifulResponeTeamCard,
  CircleCardTeamPage,
  MeetourTeamPage,
  SimpleTeamCard,
  TeamSectionWithDescripion,
} from "./TeamSection";
import NextPrevNavigation from "@/components/Nextprev";
import CommonStyle from "@/helper/style";
import BlockkHeading from "@/components/BlockHeading";
import Adsense3 from "@/Adsense/Adsense3";
const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <BlockkHeading
        id="main-team"
        heading="Tailwind CSS Team Sections"
        description="Explore our collection of team section designs. Each template is crafted to showcase your team members in an engaging and visually appealing way, giving visitors a glimpse of your company's culture."
      />

      {/* 1. Simple Team Card */}
      <h2 className={CommonStyle.docHeading} id="simple-team-card">
        Simple Team Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A clean and straightforward layout to highlight individual team members.
      </p>
      <TemplateContainer code={simpleTeamCardCode}>
        <SimpleTeamCard />
      </TemplateContainer>

      {/* 2. Team Section with Description */}
      <h2 className={CommonStyle.docHeading} id="team-description">
        Team Section with Description
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Combines team profiles with descriptive text to provide context and
        background.
      </p>
      <TemplateContainer code={TeamDescripopnWithCode}>
        <TeamSectionWithDescripion />
      </TemplateContainer>
<Adsense3/>
      {/* 3. Beautiful Responsive Team Card */}
      <h2 className={CommonStyle.docHeading} id="beautiful-team-card">
        Beautiful Responsive Team Card
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A visually appealing team card designed to capture attention with style.
      </p>
      <TemplateContainer code={BeautifulTeamCardCode}>
        <BeautifulResponeTeamCard />
      </TemplateContainer>

      {/* 4. Circle Card Team Page */}
      <h2 className={CommonStyle.docHeading} id="circle-card-team">
        Circle Card Team Page
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A modern layout featuring circular cards for a unique team presentation.
      </p>
      <TemplateContainer code={CircleCardTeamPageCode}>
        <CircleCardTeamPage />
      </TemplateContainer>
<Adsense3/>
      {/* 5. Meet Our Team Page */}
      <h2 className={CommonStyle.docHeading} id="meet-our-team">
        Meet Our Team
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A comprehensive page designed to showcase your team with detailed
        profiles.
      </p>
      <TemplateContainer code={MeetourTeamCode}>
        <MeetourTeamPage />
      </TemplateContainer>

      {/* Next/Previous Navigation */}
      <NextPrevNavigation currentPath={"/docs/team-section"} />
    </div>
  );
};

export default Page;



export const metadata = {
  title: "Tailwind CSS Team Section Components - Madhuranjan UI",
  description:
    "Showcase your team with beautifully crafted Tailwind CSS team section components. Includes simple cards, circular layouts, responsive designs, and detailed team profiles — all fully responsive and customizable.",
  keywords: [
    "Tailwind CSS Team Section",
    "Meet the Team UI",
    "Team Card Layout",
    "Responsive Team Design",
    "Circle Team Cards",
    "Team Member Profile",
    "Tailwind Company Team Section",
    "Team Showcase Template",
    "Team Grid Layout",
    "Tailwind Team Components",
  ],
  openGraph: {
    title: "Tailwind CSS Team Section Components - Madhuranjan UI",
    description:
      "Explore responsive and visually engaging Tailwind CSS components to highlight your team. Includes stylish cards, descriptions, circular designs, and detailed team layouts.",
    url: "https://madhuranjanui.com/docs/team-section",
    type: "website",
  },
};
