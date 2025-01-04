import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { outerSansMedium } from "../fonts/font";
import Image from "next/image";
const Section1 = () => {
  return (
    <section
      id="section1"
      data-color=""
      className="h-screen w-auto relative z-20 bg-hero-banner-mobile-1 md:bg-hero-banner-desktop-1 bg-no-repeat bg-cover "
    >
      <Navbar />
      <div className="flex justify-center items-center flex-col gap-4 h-full">
        <Image
          src={`/assets/logo/senamLogoWhite_LOGO.svg`}
          width={434}
          height={25}
          alt="Senam"
          className="w-1/2 block md:hidden"
        />
        <div className="typewriter">
          <h1 className="text-white text-base md:text-5xl">
            <span className="typewriter-text"></span>
          </h1>
        </div>

        <div className="mt-8">
          <Link
            href={"https://bookings.vibefam.com/senamhub/signup/"}
            className={`p-5 bg-[#daff00] w-fit rounded-full text-[#42526D] text-xl ${outerSansMedium.className}`}
          >
            Register Pre-Sale
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section1;
