'use client'
import React, { useState, useEffect } from "react";
import Section1 from "./partials/section1";
import Section2 from "./partials/section2";
import Section3 from "./partials/section3";
import Section4 from "./partials/section4";
import Section5 from "./partials/section5";
import Section6 from "./partials/section6";
import Section7 from "./partials/section7";
import Section8 from "./partials/section8";

const Page = () => {
  const [showGoToTop, setShowGoToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#F9F7ED]">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <div className="bg-black text-white">
        <Section6 />
        <Section7 />
        <Section8 />
      </div>
      {showGoToTop && (
        <button
          onClick={handleGoToTop}
          className="fixed bottom-4 right-4 bg-white text-black py-3 px-5 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Page;
