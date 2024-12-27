import React from "react";
import Image from "next/image";
import Link from "next/link";
const Section1 = () => {
  
  return (
    <section
      id="section1"
      data-color=""
      className="h-screen w-auto relative -top-20 z-0 bg-hero-banner bg-no-repeat bg-cover flex justify-center items-center flex-col gap-4"
    >
      <Image
        src={`/assets/logo/senamLogo_TextOnly.svg`}
        width={434}
        height={25}
        alt="Senam"
        className="w-1/2"
      />
      <div className="typewriter">
        <h1 className="text-white text-base md:text-5xl ">Strength</h1>
      </div>
      <div className="mt-8">
        <Link href={"https://bookings.vibefam.com/senamhub/signup/"} className="p-5 bg-[#C9DA2C] w-fit rounded-full text-[#42526D] font-medium text-xl">Register Pre-Sale</Link>
      </div>
    </section>
  );
};

export default Section1;
