import { mulishLight, outerSansRegular } from "@/app/fonts/font";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuMoveDown } from "react-icons/lu";

const Section1 = () => {
  return (
    <div
      className="text-white h-screen bg-hero-trainingCLub-banner-logo bg-cover bg-center sticky top-0 z-10"
      style={{ isolation: "isolate" }}
    >
      <div className="flex justify-center items-center flex-col gap-28 h-full">
        <div className="flex justify-center items-center flex-col gap-56">
          <h2 className={`${outerSansRegular.className} text-6xl text-center pb-28`}>
            Training Club
          </h2>
          {/* <Image
            src={"/assets/logo/senamLogo_IconOnly.png"}
            width={120}
            height={120}
            alt="Senam Club LOGO"
          /> */}
        </div>
        <div className=" animate-pulse text-center flex flex-col items-center gap-4">
          <p className={`${mulishLight.className} text-2xl`}>BY SENAM</p>
          <Link href={"#how-senam-training-work"}>
            <LuMoveDown size={35} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section1;
