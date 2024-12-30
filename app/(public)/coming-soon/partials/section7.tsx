import { mulishLight, outerSansRegular } from "@/app/fonts/font";
import Image from "next/image";
import React from "react";

const Section7 = () => {
  return (
    <div className="md:max-w-7xl mx-auto" data-aos="fade-up">
      <div className="flex flex-col-reverse md:flex-row gap-4 h-auto md:h-screen justify-center items-top md:p-20 p-8 ">
        <div className="w-full md:w-2/3">
          <div className="mb-16">
            <h4
              className={`${outerSansRegular.className} text-2xl md:text-4xl mb-4`}
            >
              Q: HOW DOES SENAM PROGRAM WORK?
            </h4>
            <p className={`text-xl md:text-2xl  ${mulishLight.className}`}>
              Our program follows a structured 8-week cycle consisting of 4
              progressive phases:
            </p>
            <ul className={`text-xl md:text-2xl list-disc ml-5 md:ml-8 ${mulishLight.className}`}>
              <li>Week 1 & 2: Hypertrophy/Endurance</li>
              <li>Week 3 & 4: Strength/Endurance</li>
              <li>Week 5 & 6: Maximal Output</li>
              <li>Week 7 & 8: Deload</li>
            </ul>
          </div>
          <div className="mb-10">
            <h4 className={`${outerSansRegular.className} text-2xl md:text-4xl mb-6`}>Q: WHAT HAPPEN IF I JOIN IN THE MIDDLE OF THE 8-WEEK CYCLE?</h4>
            <p className={`text-xl md:text-2xl mb-4  ${mulishLight.className}`}>
              New joiners can seamlessly jump into the program at any point
              during the 8-week cycle. For example, if you join in Week 2 or
              even Week 7, you’ll slot into the sessions wherever the group is
              in the program
            </p>
            <p className={`text-xl md:text-2xl mb-4  ${mulishLight.className}`}>
              Our elite trainers are equipped to guide you, ensuring you safely
              integrate into the workouts without risking injury.
            </p>
            <p className={`text-xl md:text-2xl mb-4  ${mulishLight.className}`}>
              The program is designed to constantly cycle through the 4 phases,
              allowing long-term participation and continuous progress for all
              fitness levels.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <Image
            src={"/assets/comingSoon/senamClub_comingsoon6.png"}
            alt="senamClubComingSoon6"
            width={500}
            height={800}
            className="h-full w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Section7;
