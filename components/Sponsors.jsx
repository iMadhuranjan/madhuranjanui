import React from "react";
import Image from "next/image";
import Link from "next/link";

const sponsors = [
  {
    name: "OmniSocialTools",
    logo: "/sponsor/omnisociaTools.png",
    link: "https://omnisocialtools.com/",
  },
 
];

export default function Sponsors() {
  return (
    <div className="px-4 py-3  w-full max-w-xs">
      <h5 className="text-xs font-semibold text-neutral-500 dark:text-neutral-300 uppercase mb-4 tracking-wide">
        Sponsors
      </h5>

      <div className="flex flex-col gap-1 ">
        {sponsors.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 flex items-center justify-center border border-neutral-300 dark:border-neutral-700"
          >
            <div className="relative w-full h-full">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain"
              />
            </div>
          </a>
        ))}
      </div>

      <Link
        href="/contact"
        className="mt-4 block text-center text-base font-semibold text-violet-600 dark:text-blue-500 hover:underline"
      >
        Become a Sponsor
      </Link>
    </div>
  );
}
