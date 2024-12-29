import {
  mulishBold,
  mulishLight,
  outerSansMedium,
  outerSansRegular,
} from "@/app/fonts/font";
import React from "react";

const Section2 = () => {
  return (
    <div className="md:max-w-[1600px] mx-auto">
      <div className="h-auto md:h-screen flex flex-col justify-top items-center py-28 px-8">
        <h2 className={`${outerSansRegular.className} text-6xl`}>
          BE THE FIRST TO KNOW
        </h2>
        <p className={`${mulishLight.className} text-4xl`}>
          WHEN SENAM PRE-SALE DROPS
        </p>
        <div className="mt-20 min-w-[320px] max-w-[800px]">
          <div className={`flex flex-col mb-4`}>
            <label
              className={`${mulishBold.className} text-xl font-black mb-2`}
            >
              First Name *
            </label>
            <input className="p-2 w-full rounded" type="text" />
          </div>
          <div className={`flex flex-col mb-4`}>
            <label
              className={`${mulishBold.className} text-xl font-black mb-2`}
            >
              Last Name *
            </label>
            <input className="p-2 w-full rounded" type="text" />
          </div>
          <div className={`flex flex-col mb-4`}>
            <label
              className={`${mulishBold.className} text-xl font-black mb-2`}
            >
              Phone *
            </label>
            <input className="p-2 w-full rounded" type="text" />
          </div>
          <div className={`flex flex-col mb-4`}>
            <label
              className={`${mulishBold.className} text-xl font-black mb-2`}
            >
              Email *
            </label>
            <input className="p-2 w-full rounded" type="text" />
          </div>
          <div>
            <button
              className={`w-[320px] p-4 bg-black text-white rounded text-xl ${mulishLight.className}`}
              type="submit"
            >
              Submit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
