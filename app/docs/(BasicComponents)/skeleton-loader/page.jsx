import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  ProfileCardSkeletonCode,
  SkeletonWithAvatartTitleDewwcriptonCode,
  TextCloudSkeletonCode,
  VideoSkeletonCode,
} from "./SkeletonCode";
import {
  ProfileCardSkeleton,
  SkeletonWithAvatar,
  TextCloudSkeleton,
  VideoSkeleton,
} from "./Skeleton";
import SectionHeading from "@/components/SectionHeading";
import CommonStyle from "@/helper/style";
import NextPrevNavigation from "@/components/Nextprev";
import Link from "next/link";
import Adsense2 from "@/Adsense/Adsense2";

const page = () => {
  return (
    <div className={CommonStyle.containerEntry}>
      <SectionHeading
        id="tailwind-skeleton-components"
        heading="Tailwind CSS Skeleton Components"
        description="Discover a collection of versatile skeleton loaders built with Tailwind CSS. These placeholders help improve user experience during content loading states and support both light and dark themes."
      />

      <div className="mb-3 border-l-4 border-blue-600 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/20 p-4 rounded-md">
        <p className="text-base text-blue-800 dark:text-blue-200 ">
          Want to build your own custom skeleton loader? Use our{" "}
          <Link
            href="/tools/skeleton"
            className="font-semibold text-violet-900 hover:text-blue-500 dark:text-blue-100 dark:hover:text-white hover:underline"
          >
            Tailwind Skeleton Generator
          </Link>{" "}
          to instantly turn your HTML into responsive, beautiful skeleton
          components with support for dark mode no setup needed.
        </p>
      </div>

      <h2 className={CommonStyle.docHeading} id="skeleton-avatar-text">
        Skeleton with Avatar, Title & Description
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A commonly used skeleton layout with an avatar, heading, and short
        description.
      </p>
      <MainContainer code={SkeletonWithAvatartTitleDewwcriptonCode}>
        <SkeletonWithAvatar />
      </MainContainer>

      <h2 className={CommonStyle.docHeading} id="video-skeleton-placeholder">
        Video Skeleton Placeholder
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A responsive skeleton that mimics a video player layout with centered
        icon.
      </p>
      <MainContainer code={VideoSkeletonCode}>
        <VideoSkeleton />
      </MainContainer>

<Adsense2/>
      <h2 className={CommonStyle.docHeading} id="text-cloud-skeleton">
        Text Cloud Skeleton
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        A more complex multi-line text skeleton that reflects realistic content
        flow.
      </p>
      <MainContainer code={TextCloudSkeletonCode}>
        <TextCloudSkeleton />
      </MainContainer>

      <h2 className={CommonStyle.docHeading} id="profile-card-skeleton">
        Profile Card Skeleton
      </h2>
      <p className="mt-2 text-gray-900 dark:text-gray-200 pl-2">
        Simulates a user profile card with avatar, name, subtitle, and content
        lines.
      </p>
      <MainContainer code={ProfileCardSkeletonCode}>
        <ProfileCardSkeleton />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/skeleton-loader"} />
    </div>
  );
};

export default page;



export const metadata = {
  title: "Tailwind CSS Skeleton Loader Components - Madhuranjan UI",
  description:
    "Explore a variety of responsive and customizable skeleton loader components built with Tailwind CSS. Ideal for improving perceived performance during content loading. Supports both light and dark themes.",
  keywords: [
    "Tailwind CSS Skeleton",
    "Skeleton Loaders",
    "Loading Placeholders",
    "Tailwind Loading UI",
    "Avatar Skeleton",
    "Text Skeleton",
    "Video Skeleton",
    "Profile Card Skeleton",
    "Dark Mode Skeleton",
  ],
  openGraph: {
    title: "Tailwind CSS Skeleton Components - Madhuranjan UI",
    description:
      "Discover beautifully designed skeleton loaders with Tailwind CSS. Includes avatar, text, card, and video loading placeholders for modern UIs with light/dark theme support.",
    url: "https://madhuranjanui.com/docs/skeleton-loader",
    type: "website",
  },
};
