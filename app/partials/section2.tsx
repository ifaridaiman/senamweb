import Link from "next/link";
import React from "react";
import { mulishBold, outerSansMedium, outerSansRegular } from "../fonts/font";
import { mulishLight } from "../fonts/font";

const Section2 = () => {
  return (
    <section
      id="why-senam"
      data-color="#FAFBEA"
      className="bg-[#FAFBEA] h-auto md:h-screen flex justify-center items-center py-24 px-8 md:py-0 md:px-0"
    >
      <div className="max-w-7xl grid md:grid-cols-2 h-full">
        <div className="flex flex-col justify-center md:pr-10 py-4 h-full">
          <div className="w-fit" data-aos="fade-in">
            <p
              className={`text-3xl mb-4 font-bold text-black ${outerSansRegular.className}`}
            >{`Senam is a strength and conditioning space in Wangsa Maju, Kuala Lumpur, designed for all fitness levels and ages.`}</p>
            <hr className="border-black" />
            <p
              className={`text-base mt-4 text-black ${mulishLight.className}`}
            >{`Offering a modern, inspiring environment that blends lifestyle and community, Senam is committed to delivering an elite workout experience.`}</p>
            <p className={`text-base mt-4 text-black ${mulishLight.className}`}>{`With over 20+ AM and PM group sessions running Monday through Saturday, our programs are thoughtfully designed to enhance both your physical and mental well-being.`}</p>
            <p className={`text-base mt-4 text-black ${mulishLight.className}`}>{`Whether you're focused on building strength and power or improving endurance, conditioning, and cardio, our sessions support effective fat loss and muscle developmen.`}</p>
            <div className="flex justify-end mt-8">
              <Link
                href={"https://bookings.vibefam.com/senamhub/signup/"}
                className={`p-5 bg-[#C9DA2C] w-fit rounded text-black ${outerSansMedium.className}`}
                target="_blank"
              >
                Become a member
              </Link>
            </div>
          </div>
        </div>
        <div
        className="md:border-l-2 border-[#575757] px-4 md:pl-10 flex flex-col justify-center h-full  text-black"
          data-aos="fade-in"
        >
          <div className="border-t-2 md:border-t-0 py-4">
            <p className={`text-base mb-4 ${mulishLight.className}`}>{`Senam’s mission and focus is to deliver an elite workout experience supported by a lifestyle that promotes balance, longevity, and well-being. We empower our clients and their community with the tools and environment to improve their day-to-day lives, helping them achieve their goals and live with a greater quality of life.`}</p>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
              <p className={`text-base mb-4 ${mulishLight.className}`}>{`Our commitment is to inspire our community to reach their fitness goals and embrace the journey toward improved health and wellbeing. At Senam, we believe in doing it together—because transformation happens when we susah senam bersama`}</p>
              <p className={`text-base mb-4 ${mulishLight.className}`}>We pride ourselves on delivering the ultimate <span className={`${mulishBold.className}`}>60-minute experience daily</span>. By utilizing a combination of <span className={`${mulishBold.className}`}>GRID</span> and <span className={`${mulishBold.className}`}>GROUND</span> workouts, we help individuals burn fat, build muscle,and develop strength, resilience, and confidence.</p>
            </div>

            <ol className={`text-2xl list-decimal list-inside ml-2 ${outerSansRegular.className}`}>
              <li>{`Certified Coaches`}</li>
              <li>{`Nutrition Monitoring & Group Support`}</li>
              <li>{`Amazing Results`}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
