'use client'
import React, { useState, useEffect } from "react";

const GoTop = () => {
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
    <>
      {showGoToTop && (
        <button
          onClick={handleGoToTop}
          className="fixed bottom-4 right-4 bg-white text-black py-3 px-5 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default GoTop;
