import { mulishBold, mulishLight } from "@/app/fonts/font";
import React from "react";

const Section5 = () => {
  return (
    <div className="text-white border-t border-b border-t-gray-50 border-b-gray-50 bg-black  ">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 justify-top ">
        <div className="pl-10 pr-24 py-8">
          <p className={`${mulishLight.className} text-base md:text-xl`}>
            If you are interested in signing up for Training Club or for a
            membership package, please let us know via the following form. One
            of our staff will give you a call to discuss how Senam Club can help
            you achieve your health & fitness goals.
          </p>
          <div className="pt-8">
            <div className="flex flex-row gap-4">
              <p className={`${mulishLight.className} text-base md:text-xl`}>
                P
              </p>
              <p className={`${mulishLight.className} text-base md:text-xl`}>
                +0126
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p className={`${mulishLight.className} text-base md:text-xl`}>
                E
              </p>
              <p className={`${mulishLight.className} text-base md:text-xl`}>
                senamclub@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="border-l border-gray-50 pl-24 pr-10 py-8 ">
          <input
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
          />
          {/* <select className="block w-full border-0 border-b border-white bg-transparent text-white py-2 text-lg outline-none focus:ring-0 mt-6">
            <option value="" disabled selected>
              Senam Club Membership Package
            </option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select> */}
          <button className={`px-8 py-4 rounded-full mt-10 bg-[#C9DA2C] ${mulishBold.className}`}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section5;
