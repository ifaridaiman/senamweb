import { mulishLight, outerSansRegular } from "@/app/fonts/font";
import Image from "next/image";
import React from "react";

const Section6 = () => {
  return (
    <div className="md:max-w-[1600px] mx-auto" data-aos="fade-up">
      <div className="flex flex-col-reverse md:flex-row gap-4 h-auto md:h-screen justify-center items-top md:p-20 p-8 ">
        <div className="w-full md:w-2/3">
          <div className={`mb-8`}>
            <h2 className={`${outerSansRegular.className} text-3xl md:text-5xl`}>FAQ</h2>
          </div>
          <div className={`mb-10`}>
            <h4 className={`${outerSansRegular.className} text-2xl md:text-4xl mb-4`}>Q: WHERE IS SENAM LOCATED?</h4>
            <p className={`text-xl md:text-2xl  ${mulishLight.className}`}>{`Previously, Senam operated in multiple locations as a traditional bootcamp. However, we’ve transitioned into a specialized strength and conditioning space, which requires gym equipment. Currently, Senam is located at Wangsa Maju, and you can easily find us by searching "SENAM HUB" on Waze. A second location in Cyberjaya is coming soon!`}</p>
          </div>
          <div className={`mb-8`}>
            <h4 className={`${outerSansRegular.className} text-2xl md:text-4xl mb-4`}>Q: WHAT MEMBERSHIP OPTIONS ARE AVAILABLE?</h4>
            <p className={`text-xl md:text-2xl mb-4 ${mulishLight.className}`}>
              All our memberships are unlimited—train as much as you want! The
              minimum commitment is 2 months, but the membership is flexible and
              auto-renews monthly unless you opt to cancel at no cost after the
              initial term (2 months).
            </p>
            <p className={`text-xl md:text-2xl mb-4 ${mulishLight.className}`}>For those who prefer non-recurring options, we also offer:</p>
            <ul className={`text-xl md:text-2xl mb-4 ${mulishLight.className} list-disc ml-5 md:ml-8`}>
              <li>Walk-In Sessions</li>
              <li>10x Visit Pass</li>
              <li>1=Month Pass</li>
            </ul>
            <p className={`text-xl md:text-2xl mb-4 ${mulishLight.className}`}>
              Keep in mind that non-recurring packages have higher fees compared
              to our membership plans.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <Image
            src={"/assets/comingSoon/senamClub_comingsoon5.png"}
            alt="senamClubComingSoon5"
            width={500}
            height={800}
            className="h-full w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Section6;
