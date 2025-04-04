import MainContainer from "@/components/MainContainer";
import React from "react";
import {
  ColoredStarRatingCode,
  RatingWithTextCommentLink,
  SimpleStarRatingCode,
  StarRatingSIzeeCode,
  StarRatingWithCommentCode,
} from "./ratingCode";
import {
  ColoredStarRating,
  DifferentSizeRatingStart,
  RatingWithTextCommentlink,
  SimpleStartRating,
  StartRatingWithComment,
} from "./Rating";
import NextPrevNavigation from "@/components/Nextprev";
import CommonStyle from "@/helper/style";
import SectionHeading from "@/components/SectionHeading";
import Adsense3 from "@/Adsense/Adsense3";

const Page = () => {
  return (
    <div className="w-full px-2 md:px-4 py-3 md:py-5">
      {/* Main Section Heading */}
      <SectionHeading
        id="main-title"
        heading="Tailwind CSS Star Rating Components"
        description="Discover our range of responsive and customizable star rating components built with Tailwind CSS. Perfect for reviews, feedback, and user engagement, each design is optimized for a seamless UI experience."
      />

      {/* 1. Simple Star Rating */}
      <h2 className={CommonStyle.docHeading} id="simple-star-rating">
        Simple Star Rating
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        A clean and straightforward star rating component ideal for quick
        feedback and review systems.
      </p>
      <MainContainer code={SimpleStarRatingCode}>
        <SimpleStartRating />
      </MainContainer>

      {/* 2. Different Size Star Rating */}
      <h2 className={CommonStyle.docHeading} id="different-size-star-rating">
        Different Size Star Rating
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Explore our versatile star rating component available in various sizes
        to fit any design.
      </p>
      <MainContainer code={StarRatingSIzeeCode}>
        <DifferentSizeRatingStart />
      </MainContainer>

<Adsense3/>
      {/* 3. Star Rating with Comment */}
      <h2 className={CommonStyle.docHeading} id="star-rating-with-comment">
        Star Rating with Comment
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Enhance your feedback system with a star rating that includes a comment
        option for more detailed reviews.
      </p>
      <MainContainer code={StarRatingWithCommentCode}>
        <StartRatingWithComment />
      </MainContainer>

      {/* 4. Rating with Text Comment Link */}
      <h2 className={CommonStyle.docHeading} id="rating-with-text-comment-link">
        Rating with Text Comment Link
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Combine visual ratings with textual feedback and links, providing a
        comprehensive review interface.
      </p>
      <MainContainer code={RatingWithTextCommentLink}>
        <RatingWithTextCommentlink />
      </MainContainer>

<Adsense3/>
      {/* 5. Colored Star Rating */}
      <h2 className={CommonStyle.docHeading} id="colored-star-rating">
        Colored Star Rating
      </h2>
      <p className="mb-3 text-gray-900 dark:text-gray-200 pl-2">
        Add visual interest to your reviews with vibrant colored stars that can
        be customized to match your brand.
      </p>
      <MainContainer code={ColoredStarRatingCode}>
        <ColoredStarRating />
      </MainContainer>

      <NextPrevNavigation currentPath={"/docs/rating"} />
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Tailwind CSS Star Rating Components - Madhuranjan UI",
  description:
    "Explore responsive and customizable Tailwind CSS star rating components. Includes simple stars, size variants, comment fields, text-linked feedback, and vibrant colored options—perfect for modern review UIs.",
  keywords: [
    "Tailwind CSS Star Rating",
    "Star Rating Component",
    "Rating UI Tailwind",
    "Feedback Component",
    "Responsive Rating",
    "Colored Star Rating",
    "Star Rating with Comment",
    "Tailwind Review UI",
    "Dark Mode Rating",
    "Interactive Rating System",
  ],
  openGraph: {
    title: "Tailwind CSS Star Rating UI Components - Madhuranjan UI",
    description:
      "Discover interactive and stylish star rating components built with Tailwind CSS. Ideal for reviews, feedback forms, and user engagement—fully responsive and theme-aware.",
    url: "https://madhuranjanui.com/docs/rating",
    type: "website",
  },
};
