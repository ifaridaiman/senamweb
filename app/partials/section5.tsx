import React from "react";

const Section5 = () => {
  return (
    <section id="section5" data-color="#C9DA2C" className="bg-[#C9DA2C] h-screen flex justify-center items-center">
      <div className="max-w-[1600px] grid md:grid-cols-2 items-center">
        <div className="flex flex-row justify-center px-4 " data-aos="fade-right">
          <div className="px-4">
            <p className="text-[#42526D] text-5xl font-black">03.</p>
          </div>
          <div className=" w-fit">
            <p className="text-[#42526D] text-3xl mb-4 font-bold">{`Amazing Results`}</p>
            <hr className="border-[#42526D]" />
            <p className="text-[#42526D] text-base mt-4">{`Senam has been dedicated to transforming lives for over 6 years, and our track record speaks for itself.`}</p>
            <p className="text-[#42526D] text-base mt-4">{`With a team of experienced Senam Certified Coaches, we’ve successfully guided and supported over 400 clients on their journey towards achieving their health and fitness targets.`}</p>
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
