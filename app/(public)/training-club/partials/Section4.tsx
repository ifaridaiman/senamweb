import { mulishBold, mulishLight, outerSansRegular } from "@/app/fonts/font";
import React from "react";
import Link from "next/link";

const Section4 = () => {
  return (
    <div className="bg-[#FAFBEA] h-auto pt-10 md:pt-24 text-black">
      <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row justify-top p-8" data-aos="fade-up">
        <div className="w-full md:w-1/2">
          <h1 className={`${outerSansRegular.className} text-5xl mb-8`}>
            Train With Purpose
          </h1>
          <ol
            className={`${outerSansRegular.className} text-xl md:text-3xl list-decimal ml-5 md:ml-10`}
          >
            <li>Hypertrophy/Endurance</li>
            <li>Strength/Endurance</li>
            <li>Maximal Output</li>
            <li>Deload</li>
          </ol>
        </div>
        <div className="w-full md:w-1/2">
          <div>
            <p className={`${mulishLight.className} text-xl md:text-2xl mt-4`}>
              Every session has a <span className={`${mulishBold.className}`}>purpose</span> and is designed to help you achieve
              <span className={`${mulishBold.className}`}>fat loss, build muscle,</span> and improve your <span className={`${mulishBold.className}`}>overall fitness.</span>
            </p>
            <p className={`${mulishLight.className} text-xl md:text-2xl mt-4`}>
              Our program runs for <span className={`${mulishBold.className}`}>2 months (8 weeks)</span> and focuses on building
              strength, endurance, conditioning, and cardio. <span className={`${mulishBold.className}`}>Not a short-term bootcamp like Senam did before,</span> this program is designed to help you achieve long-term
              results and make consistent progress over time.
            </p>
            <p className={`${mulishLight.className} text-xl md:text-2xl mt-4`}>
              <span className={`${mulishBold.className}`}>After 8 weeks, the program cycles back to Week 1,</span> keeping your
              training balanced and purposeful. Each phase integrates GRID and
              GROUND sessions into a complete fitness journey.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/" className={`px-8 py-4 rounded-full bg-[#C9DA2C] ${mulishBold.className}`}>Become a member</Link>
          </div>
        </div>
      </div>
      <div className="w-full h-80 bg-hero-trainingCLub-banner-2 bg-cover bg-no-repeat bg-center bg-gray-50"></div>
    </div>
  );
};

export default Section4;
