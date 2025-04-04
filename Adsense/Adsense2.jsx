"use client"; // Required for Next.js App Router

import React, { useEffect, useRef } from "react";

const Adsense2 = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (window && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }
  }, []);

  return (
    <div ref={adRef} className="w-full my-4">
      {/* Google AdSense Ad   */}
      <ins
        className="adsbygoogle "
        style={{ display: "block" }}
        data-ad-client="ca-pub-1263903450171291"
        data-ad-slot="4779495448"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default Adsense2;
