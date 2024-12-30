import { mulishBold, mulishLight, outerSansRegular } from "@/app/fonts/font";
import React from "react";

const Section3 = () => {
  return (
    <div className="bg-[#FAFBEA] text-[#42526D] h-auto py-10 md:py-24">
      <div
        className="max-w-7xl mx-auto h-full flex flex-col justify-top p-8"
        data-aos="fade-up"
      >
        <div>
          <h1 className={`${outerSansRegular.className} text-5xl  `}>
            Know your sessions
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          <div className="w-full md:w-1/2">
            <div>
              <h3
                className={`${outerSansRegular.className} text-xl md:text-2xl`}
              >
                GRID
              </h3>
              <p
                className={`${mulishLight.className} text-xl md:text-2xl mt-4`}
              >
                Push your limits in GRID sessions by focusing on compound
                movements like squats, deadlifts, bench presses, and hip
                thrusts, along with other foundational exercises designed to
                build strength and muscle.
              </p>
              <p className={`${mulishLight.className} text-xl md:text-2xl`}>
                Take your training to the next level with dynamic exercises such
                as cleans, push presses, thrusters, and barbell complexes.{" "}
              </p>
              <p className={`${mulishLight.className} text-xl md:text-2xl`}>
                GRID sessions are built around developing Strength power, and
                endurance, helping you achieve a well-rounded and resilient
                body.
              </p>
            </div>
            <div className="mt-8">
              <h5
                className={`${outerSansRegular.className} text-2xl md:text-3xl`}
              >
                GRID Training Throughout the Week
              </h5>
              <div className="mt-4">
                <p className={`${mulishBold.className} text-xl md:text-2xl`}>
                  Monday & Tuesday
                </p>
                <p className={`${mulishLight.className} text-xl md:text-2xl`}>
                  Lower Body
                </p>
              </div>
              <div className="mt-4">
                <p className={`${mulishBold.className} text-xl md:text-2xl`}>
                  Wednesday & Thursday
                </p>
                <p className={`${mulishLight.className} text-xl md:text-2xl`}>
                  Upper Body
                </p>
              </div>
              <div className="mt-4">
                <p className={`${mulishBold.className} text-xl md:text-2xl`}>
                  Friday
                </p>
                <p className={`${mulishLight.className} text-xl md:text-2xl`}>
                  Deadlifts
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div>
              <h3
                className={`${outerSansRegular.className} text-xl md:text-2xl`}
              >
                GROUND
              </h3>
              <p
                className={`${mulishLight.className} text-xl md:text-2xl mt-4`}
              >
                GROUND sessions combine a variety of cardiovascular movements,
                refreshed weekly to keep your workouts engaging and dynamic. The
                primary goal is to improve your ability to sustain both physical
                and mental stamina over extended periods, ensuring steady
                progress and a stronger, healthier you.
              </p>
            </div>
            <div className="mt-8">
              <h5
                className={`${outerSansRegular.className} text-2xl md:text-3xl`}
              >
                GROUND Training Throughout the Week
              </h5>
              <div className="mt-4">
                <p className={`${mulishBold.className} text-xl md:text-2xl`}>
                  Monday & Friday
                </p>
                <ul
                  className={`list-disc ml-5 md:ml-8 text-xl md:text-2xl ${mulishLight.className}`}
                >
                  <li>Power-Focused Interval Weight Training</li>
                  <li>Building Cardiovascular Endurance</li>
                  <li>Enhancing Energy Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
