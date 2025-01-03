import { mulishBold, mulishLight, outerSansRegular } from "@/app/fonts/font";
import React from "react";

const Section2 = () => {
  return (
    <div className=" text-white h-auto bg-black" id="how-senam-training-work">
      <div className="max-w-7xl h-2/3 mx-auto p-8 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div data-aos="fade-up">
            <p className={`${mulishBold.className} text-2xl md:text-5xl`}>
              How does Senam Training Work?
            </p>
          </div>
          <div data-aos="fade-up">
            <p className={`${mulishLight.className} text-xl md:text-2xl`}>
              Each day, at Senam Hub, there are two sessions that run
              simultaneously, side by side: GRID (Strength Zone) and GROUND
              (Conditioning Zone).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
              <div>
                <h3 className={`${outerSansRegular.className} text-xl md:text-2xl mb-4`}>GRID</h3>
                <p className={`${mulishLight.className} text-base md:text-xl`}>
                  Our GRID sessions prioritize strength, power, muscular
                  endurance, and functional and hypertrophy training. By
                  progressively overloading movement patterns, improving range
                  of motion, and refining technique, GRID helps you build a
                  strong, balanced, and resilient body.
                </p>
              </div>
              <div>
                <h3 className={`${outerSansRegular.className} text-xl md:text-2xl mb-4`}>GROUND</h3>
                <p className={`${mulishLight.className} text-base md:text-xl`}>
                  Our GROUND sessions combine conditioning and functional
                  movements to improve your overall cardiovascular work capacity
                  and stamina. These workouts are designed to challenge and
                  elevate your fitness to the next level.
                </p>
              </div>
            </div>
            <div className=" mt-10">
              <h5 className={`${outerSansRegular.className} text-xl md:text-2xl mb-4`}>Our program changes every other day.</h5>
              <p className={`${mulishLight.className} text-base md:text-xl`}>
                The choice is completely up to you—you can alternate between
                GRID and GROUND sessions each day, depending on your goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-80 bg-hero-trainingCLub-banner-1 bg-cover bg-no-repeat bg-center bg-gray-50"></div>
    </div>
  );
};

export default Section2;
