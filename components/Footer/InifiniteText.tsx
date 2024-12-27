import { outerSansRegular } from "@/app/fonts/font";
import React from "react";

const ScrollingText = () => {
  return (
    <div className={`relative w-full h-[150px] mx-auto overflow-hidden z-10 border-y-2 border-slate-50 ${outerSansRegular.className}`}>
      <div className="absolute top-0 left-0 flex items-center justify-start w-full h-full whitespace-nowrap scale-200">
        <div className="flex animate-scroll">
          <h1 className="m-0 text-[60px] md:text-[120px] text-white transition-all ease duration-200">
            
            {" "}
            <a
              href="https://bookings.vibefam.com/senamhub/signup/"
              target="_blank"
              className="text-white no-underline hover:text-transparent hover:[-webkit-text-stroke:1px_white]"
            >
              Become A Member &#42;
            </a>{" "}
            
          </h1>
          <h1 className="m-0 text-[60px] md:text-[120px] text-white transition-all ease duration-200">
            {" "}
            <a
              href="https://bookings.vibefam.com/senamhub/signup/"
              target="_blank"
              className="text-white no-underline hover:text-transparent hover:[-webkit-text-stroke:1px_white]"
            >
              Become A Member &#42;
            </a>{" "}
            
          </h1>
          <h1 className="m-0 text-[60px] md:text-[120px] text-white transition-all ease duration-200">
            {" "}
            <a
              href="https://bookings.vibefam.com/senamhub/signup/"
              target="_blank"
              className="text-white no-underline hover:text-transparent hover:[-webkit-text-stroke:1px_white]"
            >
              Become A Member &#42;
            </a>{" "}
            
          </h1>
          <h1 className="m-0 text-[60px] md:text-[120px] text-white transition-all ease duration-200">
            {" "}
            <a
              href="https://bookings.vibefam.com/senamhub/signup/"
              target="_blank"
              className="text-white no-underline hover:text-transparent hover:[-webkit-text-stroke:1px_white]"
            >
              Become A Member &#42;
            </a>{" "}
            
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
