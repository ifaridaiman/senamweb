"use client";
import {
  mulishBold,
  mulishLight,
  outerSansLight,
  outerSansMedium,
  outerSansRegular,
} from "@/app/fonts/font";
import React from "react";
import InfiniteText from "@/components/Footer/InifiniteText";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-[#FAFBEA]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 pb-10">
              <div>
                <h4
                  className={`text-black text-2xl md:text-5xl mb-4 ${outerSansMedium.className}`}
                >
                  Our Location
                </h4>
                <p className={`${mulishBold.className} text-base text-black`}>
                  Senam Hub
                </p>
                <p
                  className={`${mulishLight.className} text-base text-black flex flex-col`}
                >
                  <span>No.11b-2, Jalan 2a/27a Wangsa Maju</span>
                  <span>Seksyen 1 53300 Kuala Lumpur</span>
                </p>
              </div>
              <div>
                <h4
                  className={`text-black text-2xl md:text-5xl mb-4 ${outerSansMedium.className}`}
                >
                  Contact Us
                </h4>
                <p
                  className={`${mulishLight.className} text-base text-black flex items-center gap-5`}
                >
                  <span>
                    <FaWhatsapp />
                  </span>{" "}
                  +6012-345 6789
                </p>
                <p
                  className={`${mulishLight.className} text-base text-black flex items-center gap-5`}
                >
                  <span>
                    <MdOutlineMailOutline />
                  </span>{" "}
                  info@senamclub.my
                </p>
              </div>
            </div>
            <div className="text-black flex gap-8 pb-10">
              <Link
                className="text-xl underline text-black hover:text-gray-700"
                href="https://www.google.com/maps/@3.2019868,101.7318412,3a,75y,209.74h,106.04t/data=!3m7!1e1!3m5!1snEZOhG2hrK6GUse56-9RUQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-16.0391699064307%26panoid%3DnEZOhG2hrK6GUse56-9RUQ%26yaw%3D209.74410126850609!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              >
                Google Maps
              </Link>
              <Link
                className="text-xl underline text-black hover:text-gray-700"
                href="https://waze.com/ul/hw2864yyvu"
              >
                Waze
              </Link>
              <Link
                className="text-xl underline text-black hover:text-gray-700"
                href="https://www.instagram.com/senamclub/"
              >
                Instagram
              </Link>
              {/* <Link className="text-xl underline text-[#C9DA2C] hover:text-[#8D991F]" href="/">Facebook</Link> */}
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 border-t-2 border-black md:border-t-0 md:border-l-2 px-8 py-8 md:pl-10 md:py-8 justify-center items-center">
              <p
                className={`text-2xl md:text-6xl text-black ${outerSansRegular.className} `}
              >
                CHANGING THE GAME.
                <br />
                TRAIN DIFFERENTLY.
                <br />
                SUSAH SENAM BERSAMA.
              </p>
              <div className="flex justify-start mt-8">
                <Link
                  href={"https://bookings.vibefam.com/senamhub/signup/"}
                  className={`p-5 bg-[#C9DA2C] w-fit rounded text-[#42526D] ${outerSansLight.className}`}
                  target="_blank"
                >
                  Become a member
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfiniteText />
      <div className="flex justify-center items-center mt-8">
        <p className="text-white">{year} Senam Club . Site By Red</p>
      </div>
    </>
  );
};

export default Footer;
