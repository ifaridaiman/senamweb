import React from "react";
import Image from "next/image";

const Section3 = () => {
  return (
    <section id="section3" data-color="#292929" className="bg-[#292929] h-auto md:h-screen flex justify-center items-center py-8 gap-4">
      <div className="max-w-[1600px] grid md:grid-cols-2 items-center ">
        <div className="flex flex-row justify-center px-8" data-aos="fade-right">
          <div className="px-4">
            <p className="text-[#C9DA2C] text-9xl font-black">01.</p>
          </div>
          <div className=" w-fit">
            <p className="text-[#C9DA2C] text-5xl mb-4 font-bold">Certified <br/> Coaches</p>
            <hr className="border-[#C9DA2C]" />
            <p className="text-[#C9DA2C] text-base mt-4">{`Led by founder Isrul Firdaus, our team of SenamCoaches is here to motivate and assist you in achieveing your health and fitness goals. Our coaches are experts in their field, ensuring a consistent and high-quality fitness exprience for every participants.`}</p>
            {/* <p className="text-[#C9DA2C] text-base mt-4">{`Our coaches are experts in their field, ensuring a consistent and high-quality fitness experience for every participant.`}</p> */}
          </div>
        </div>
        <div className=" md:border-l-2 px-4 md:pl-10 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 border-t-2 md:border-t-0 pt-8 md:pt-0">
            <div className="flex items-center justify-center">
              <Image src={`/assets/coach/senamCoach1.png`} alt="senam coach 1" width={250} height={250} />
            </div>
            <div className="flex items-center justify-center">
              <Image src={`/assets/coach/senamCoach2.png`} alt="senam coach 1" width={250} height={250} />
            </div>
            <div className="flex items-center justify-center">
              <Image src={`/assets/coach/senamCoach3.png`} alt="senam coach 1" width={250} height={250} />
            </div>
            <div className="flex items-center justify-center">
              <Image src={`/assets/coach/senamCoach4.png`} alt="senam coach 1" width={250} height={250} />
            </div>
            <div className="flex items-center justify-center">
              <Image src={`/assets/coach/senamCoach5.png`} alt="senam coach 1" width={250} height={250} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
