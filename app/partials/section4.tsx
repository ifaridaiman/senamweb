import React from "react";

const Section4 = () => {
  return (
    <section id="section4" data-color="#FAFBEA" className="bg-[#FAFBEA] h-screen flex justify-center items-center">
      <div className="max-w-[1600px] flex flex-col-reverse md:flex-row gap-4 items-center w-full md:h-[320px]">
        
        <div className="px-4 w-1/2 md:border-r-2">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="thumbnail w-[360px] h-[331px] bg-black"></div>
          </div>
        </div>
        <div className="flex flex-row justify-center px-8 border-b-2 md:border-b-0 py-4  md:pl-10 w-full md:w-1/2 h-full" data-aos="fade-left">
          <div className="px-4">
            <p className="text-[#42526D] text-5xl font-black">02.</p>
          </div>
          <div className=" w-fit">
            <p className="text-[#42526D] text-3xl mb-4 font-bold">{`State of the Art Equipments`}</p>
            <hr className="border-[#42526D]" />
            <p className="text-[#42526D] text-base mt-4">{`Our state-of-the-art facility is designed to inspire and energize your fitness journey. Featuring cutting-edge equipment, spacious workout zones, modern restrooms, shower amenities, and inviting outdoor areas, we provide everything you need to crush your goals and enjoy every step of the way.`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;