import Link from "next/link";
import React from "react";

const Section2 = () => {
  return (
    <section
      id="section2"
      data-color="#FAFBEA"
      className="bg-[#FAFBEA] h-screen flex justify-center items-center"
    >
      <div className="max-w-[1600px] grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-4">
          <div className="w-fit" data-aos="fade-in">
            <p
              className={`text-3xl mb-4 font-bold text-[#42526D]`}
            >{`It's more than just a group training.`}</p>
            <hr className="border-[#C9DA2C]" />
            <p
              className={`text-base mt-4 text-[#42526D]`}
            >{`We are a vibrant community united by a common mission.`}</p>
            <p className="text-base mt-4 text-[#42526D]" >{`We aim to lose weight, shed fat, build muscle, and foster overall health and well-being.`}</p>
            <div className="flex justify-end mt-8">
              <Link href={"https://bookings.vibefam.com/senamhub/packages"} className="p-5 bg-[#C9DA2C] w-fit rounded text-[#42526D]">Become a member</Link>
            </div>
          </div>
        </div>
        <div className="md:border-l-2 px-4 md:pl-10 text-[#42526D]" data-aos="fade-in">
          <div className="border-t-2 md:border-t-0 py-4">
            <p className="text-base mb-4">{`At Senam, we’ve crafted a transformative 6-week program, inviting participants into a community united by a common mission;`}</p>
            <p className="text-base bg-[#E9F0A8] p-2 mb-4">{`To shed fat and build muscle concurrently.`}</p>
            <p className="text-base mb-4">{`Our unique blend of workouts, supportive community, and personalized guidance has made Senam a transformative force in the lives of many.`}</p>
            <ol className="text-xl list-decimal list-inside ml-2 font-bold">
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
