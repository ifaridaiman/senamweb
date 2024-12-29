import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mulishLight, outerSansRegular } from "@/app/fonts/font";
const Section1 = () => {
  return (
    <section
      id="section1"
      data-color=""
      className="h-screen w-auto z-0 bg-hero-comingSoon-banner-mobile md:bg-hero-comingSoon-banner-desktop bg-center-18 md:bg-center bg-no-repeat bg-cover flex justify-between flex-col p-20"
    >
      <div className="flex justify-center ">
        <Image
          src={`/assets/logo/SENAM_LOGO.png`}
          width={150}
          height={25}
          alt="Senam"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
          <h1 className={`text-white text-xl md:text-5xl mb-4 ${outerSansRegular.className}`}>WANGSA MAJU</h1>
          <h2 className={`text-white text-base md:text-4xl mb-4 ${mulishLight.className}`}>SENAM MEMBERSHIP</h2>
      </div>
    </section>
  );
};

export default Section1;
