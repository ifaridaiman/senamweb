import { mulishBold, mulishLight, outerSansRegular } from "@/app/fonts/font";
import React from "react";

const Section2 = () => {
  return (
    <div className=" text-white h-auto bg-black" id="how-senam-training-work">
      <div className="max-w-7xl h-2/3 mx-auto p-8 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div data-aos="fade-up">
            <p className={`${mulishBold.className} text-2xl md:text-5xl`}>
              WHAT WE OFFER
            </p>
          </div>
          <div data-aos="fade-up">
            <p className={`${mulishLight.className} text-xl md:text-2xl`}>
              Senam Hub is a strength and conditioning space designed for all
              fitness levels and age groups. Offering a modern and inspiring
              environment that blends lifestyle and community, Senam is
              dedicated to delivering an elite workout experience.
            </p>

            <div className="mt-8">
              <h3
                className={`${outerSansRegular.className} text-xl md:text-2xl mb-4`}
              >
                Senam Wangsa Maju Membership
              </h3>
              <p className={`${mulishLight.className} text-base md:text-xl`}>
                Memberships are 2 months commitment that auto-renew every 2
                month. You can opt to have your contract expire at the end of
                the 2 months before it auto-renews at no cost.
              </p>
            </div>
            <div className="mt-8">
              <h3
                className={`${outerSansRegular.className} text-xl md:text-2xl mb-4`}
              >
                What Does Senam Membership Give You?
              </h3>
              <ul
                className={`${mulishLight.className} text-xl md:text-2xl list-disc ml-5 md:ml-8`}
              >
                <li className={`${mulishLight.className} text-base md:text-xl`}>
                  <span className={`${mulishBold.className}`}>Unlimited access</span> to 20+ group strength & conditioning sessions
                  weekly.
                </li>
                <li className={`${mulishLight.className} text-base md:text-xl`}>
                  <span className={`${mulishBold.className}`}>Nutritional advice</span> to complement your training.
                </li>
                <li className={`${mulishLight.className} text-base md:text-xl`}>
                  Exciting <span className={`${mulishBold.className}`}>challenges</span> to keep you motivated and progressing.
                </li>
                <li className={`${mulishLight.className} text-base md:text-xl`}>
                  Exclusive access to our <span className={`${mulishBold.className}`}>private online community</span> for support
                  and engagement.
                </li>
                <li className={`${mulishLight.className} text-base md:text-xl`}>
                  Special <span className={`${mulishBold.className}`}>events</span> and <span className={`${mulishBold.className}`}>workshops</span> throughout the year.
                </li>
                <li className={`${mulishLight.className} text-base md:text-xl`}>
                  Complimentary <span className={`${mulishBold.className}`}>InBody checkups</span> to track your progress
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-80 bg-hero-trainingCLub-banner-1 bg-cover bg-no-repeat bg-center bg-gray-50"></div>
    </div>
  );
};

export default Section2;
