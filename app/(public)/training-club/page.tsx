'use client'
import React, {useEffect} from "react";
import AOS from "aos";

import Section1 from "./partials/Section1";
import Section2 from "./partials/Section2";
import Section3 from "./partials/Section3";
import Section4 from "./partials/Section4";
import Section5 from "./partials/Section5";
import Navbar from "@/components/Navbar";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once
    });
  },[])
  return (
    <>
      <Navbar />
      <Section1 />
      <div className="z-20 relative">
        <div className="relative top-0 left-0 w-full  h-36 shadow-2xl bg-gradient-to-b from-transparent to-black z-10"></div>

        <Section2 />
        <Section4 />
        <Section3 />
        
        <Section5 />
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Page;
