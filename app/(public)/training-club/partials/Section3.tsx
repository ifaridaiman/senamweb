import { mulishBold, mulishLight, outerSansRegular } from "@/app/fonts/font";
import React from "react";

const Section3 = () => {
  return (
    <div className="bg-[#FAFBEA] text-black h-auto py-10 md:py-24">
      <div
        className="max-w-7xl mx-auto h-full flex flex-col md:flex-row justify-top p-8"
        data-aos="fade-up"
      >
        <div className="w-full md:w-1/2">
          <h1 className={`${outerSansRegular.className} text-7xl  `}>
            Know your <br/> sessions
          </h1>
        </div>
        <div className="w-full md:w-1/2 gap-8 ">
          <div className="w-full">
            <div>
              <h3
                className={`${outerSansRegular.className} text-xl md:text-2xl`}
              >
                GRID
              </h3>
              <p
                className={`${mulishLight.className} text-xl md:text-2xl mt-4`}
              >
                Our GRID sessions prioritize{" "}
                <span className={`${mulishBold.className}`}>
                  strength, power, muscular endurance,
                </span>{" "}
                and{" "}
                <span className={`${mulishBold.className}`}>functional</span>{" "}
                and{" "}
                <span className={`${mulishBold.className}`}>hypertrophy</span>{" "}
                training. By progressively overloading movement patterns,
                improving range of motion,and refining technique, GRID helps you
                build a strong, balanced, and resilient body.
              </p>
            </div>
            {/* <div className="mt-8">
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
            </div> */}
          </div>
          <div className="w-full mt-8">
            <div>
              <h3
                className={`${outerSansRegular.className} text-xl md:text-2xl`}
              >
                GROUND
              </h3>
              <p
                className={`${mulishLight.className} text-xl md:text-2xl mt-4`}
              >
                Our GROUND sessions combine{" "}
                <span className={`${mulishBold.className}`}>conditioning</span>{" "}
                and{" "}
                <span className={`${mulishBold.className}`}>
                  functional movements
                </span>{" "}
                to improve your overall cardiovascular work capacity and
                stamina. These workouts are designed to challenge and elevate
                your fitness to the next level.
              </p>
            </div>
            <div className="mt-8">
              <p
                className={`${mulishLight.className} text-xl md:text-2xl mt-4`}
              >
                Each day, at Senam, there are <span className={`${mulishBold.className}`}>two sessions that run
                simultaneously,</span> side by side: <span className={`${mulishBold.className}`}>GRID (Strength Zone)</span> and <span className={`${mulishBold.className}`}>GROUND
                (Conditioning Zone)</span>.
              </p>
              <p
                className={`${mulishLight.className} text-xl md:text-2xl mt-4`}
              >
                <span className={`${mulishBold.className}`}>The choice is completely up to you</span>—you can alternate between <span className={`${mulishBold.className}`}>GRID</span> and <span className={`${mulishBold.className}`}>GROUND</span> 
                sessions each day, depending on your goals and how you feel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
