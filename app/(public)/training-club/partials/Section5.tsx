import {
  mulishBold,
  mulishLight,
  outerSansLight,
  outerSansMedium,
} from "@/app/fonts/font";
import React from "react";
import Link from "next/link";
import InfiniteText from "@/components/Footer/InifiniteText";
const Section5 = () => {
  return (
    <>
      <InfiniteText />
      <div className="text-white border-t border-b border-t-gray-50 border-b-gray-50 bg-black  ">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 justify-top ">
          <div className="pl-10 pr-24 py-8">
            <h5
              className={`${outerSansMedium.className} mb-4 text-2xl md:text-4xl`}
            >
              Got Questions About Senam Membership?
            </h5>
            <p className={`${mulishLight.className} text-base md:text-xl`}>
              {`We’re here to help! Whether you’re curious about our programs,
            membership options, or pre-sale offers, don’t hesitate to get in
            touch. Send us an email or WhatsApp, and our team will be happy to
            assist you.`}
            </p>
            <div className="pt-8">
              <div className="flex flex-row gap-4"></div>
              <div className="flex flex-row gap-4"></div>
            </div>
          </div>
          <div className="border-l border-gray-50 pl-24 pr-10 py-8 ">
            <h5 className={`${outerSansMedium.className} text-xl md:text-5xl`}>
              READY TO TRANSFORM YOUR LIFE?
            </h5>
            <div className="flex justify-start mt-8">
              <Link
                href={"https://bookings.vibefam.com/senamhub/signup/"}
                className={`p-5 bg-[#daff00] w-fit rounded text-[#42526D] ${outerSansLight.className}`}
                target="_blank"
              >
                Become a member
              </Link>
            </div>
            {/* <input
            type="text"
            placeholder="Name"
            className="block w-full border-0 border-b border-white bg-transparent text-white py-2 text-lg outline-none focus:ring-0"
          />
          <input
            type="email"
            placeholder="Email"
            className="block w-full border-0 border-b border-white bg-transparent text-white py-2 text-lg outline-none focus:ring-0 mt-6"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="block w-full border-0 border-b border-white bg-transparent text-white py-2 text-lg outline-none focus:ring-0 mt-6"
          /> */}
            {/* <select className="block w-full border-0 border-b border-white bg-transparent text-white py-2 text-lg outline-none focus:ring-0 mt-6">
            <option value="" disabled selected>
              Senam Club Membership Package
            </option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select> */}
            {/* <button
            className={`px-8 py-4 rounded-full mt-10 bg-[#C9DA2C] ${mulishBold.className}`}
          >
            Contact Us
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
