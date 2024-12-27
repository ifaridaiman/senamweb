"use client";
import {
  mulishLight,
  outerSansMedium,
  outerSansRegular,
} from "@/app/fonts/font";
import React from "react";
import ScrollingText from "./InifiniteText";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="p-8 grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 pb-10">
              <div>
                <h4
                  className={`text-white text-2xl md:text-5xl mb-4 ${outerSansMedium.className}`}
                >
                  Our Location
                </h4>
                <p className={`${mulishLight.className} text-base text-white`}>
                  No.11b-2, Jalan 2a/27a Seksyen 1 Wangsa Maju
                  53300 Kuala Lumpur
                </p>
              </div>
              <div>
                <h4
                  className={`text-white text-2xl md:text-5xl mb-4 ${outerSansMedium.className}`}
                >
                  Contact Us
                </h4>
                <p className={`${mulishLight.className} text-base text-white`}>
                  +6012-345 6789
                </p>
                <p className={`${mulishLight.className} text-base text-white`}>
                  info@senamclub.my
                </p>
              </div>
            </div>
            <div className="text-white flex gap-8 pb-10">
                <Link className="text-xl underline text-[#C9DA2C] hover:text-[#8D991F]" href="https://www.google.com/maps/@3.2019868,101.7318412,3a,75y,209.74h,106.04t/data=!3m7!1e1!3m5!1snEZOhG2hrK6GUse56-9RUQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-16.0391699064307%26panoid%3DnEZOhG2hrK6GUse56-9RUQ%26yaw%3D209.74410126850609!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">Google Maps</Link>
                <Link className="text-xl underline text-[#C9DA2C] hover:text-[#8D991F]" href="https://waze.com/ul/hw2864yyvu">Waze</Link>
                <Link className="text-xl underline text-[#C9DA2C] hover:text-[#8D991F]" href="https://www.instagram.com/senamclub/">Instagram</Link>
                {/* <Link className="text-xl underline text-[#C9DA2C] hover:text-[#8D991F]" href="/">Facebook</Link> */}
            </div>
          </div>

          <div className="grid grid-cols-1 border-t-2 border-slate-50 md:border-t-0 md:border-l-2 md:pl-10 pt-10 md:pt-0 justify-center items-center">
            <p
              className={`text-3xl md:text-6xl text-white ${outerSansRegular.className}`}
            >
              Take your Journey.
              <br />
              Change your Body.
              <br /> Find your soul.
            </p>
          </div>
        </div>
      </div>
      <ScrollingText />
      <div className="flex justify-center items-center mt-8">
        <p className="text-white">{year} Senam Club . Site By Red</p>
      </div>
    </>
  );
};

export default Footer;
