'use client'
import Section1 from "./partials/section1";
import Section2 from "./partials/section2";
import Section3 from "./partials/section3";
import Section4 from "./partials/section4";
import Section5 from "./partials/section5";
import AOS from "aos";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once
    });
  },[])
  
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />

    </>
  );
}
