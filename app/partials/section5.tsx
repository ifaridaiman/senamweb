import React from "react";
import { mulishLight, outerSansMedium, outerSansRegular } from "../fonts/font";

const Section5 = () => {
  return (
    <section id="section5" data-color="#C9DA2C" className="bg-[#C9DA2C] h-screen flex justify-center items-center">
      <div className="max-w-[1600px] grid md:grid-cols-2 items-center">
        <div className="flex flex-row justify-center px-4 " data-aos="fade-right">
          <div className="px-4">
            <p className={`text-[#42526D] text-4xl md:text-9xl font-black ${outerSansMedium.className}`}>03.</p>
          </div>
          <div className=" w-fit">
            <p className={`text-[#42526D] text-3xl mb-4 font-bold ${outerSansRegular.className}`}>{`Amazing Results`}</p>
            <hr className="border-[#42526D]" />
            <p className={`text-[#42526D] text-base mt-4 ${mulishLight}`}>{`Senam has been operating for over 8 years, proudly helping over 500 clients achieve their health and fitness goals, whether it's weight loss, building strength, or improving mobility. The results speak for themselves—take a look at some of our inspiring before-and-after transformations.`}</p>
          </div>
        </div>
        <div className="border-l-2 pl-10">
          <div className="grid grid-cols-3">
            <div className="thumbnail w-[360px] h-[331px] bg-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
