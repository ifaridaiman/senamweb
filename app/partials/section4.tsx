import React from "react";
import { mulishLight, outerSansMedium, outerSansRegular } from "../fonts/font";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import Image from "next/image";

const Section4 = () => {
  return (
    <section
      id="section4"
      data-color="#FAFBEA"
      className="bg-[#FAFBEA] h-auto md:h-screen flex justify-center items-center px-8 gap-4"
    >
      <div className="max-w-7xl grid md:grid-cols-2 h-full">
        <div className="order-2 md:order-1 md:border-r-2 border-[#575757] px-4 md:pr-10 py-10 items-center flex flex-row justify-center  h-full">
          <div className="pt-8 md:pt-0">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              // pagination={{
              //   clickable: true,
              // }}
              // modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src={`/assets/coach/senamCoach1.png`}
                  alt="senam coach 1"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={`/assets/coach/senamCoach2.png`}
                  alt="senam coach 1"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={`/assets/coach/senamCoach3.png`}
                  alt="senam coach 1"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={`/assets/coach/senamCoach4.png`}
                  alt="senam coach 1"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={`/assets/coach/senamCoach5.png`}
                  alt="senam coach 1"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div
          className="order-1 md:order-2 flex flex-row justify-center items-center  px-4 pr-10 py-10 md:px-8 h-full"
          data-aos="fade-in"
        >
          <div className="px-4">
            <p
              className={`text-[#42526D] text-4xl md:text-9xl font-black ${outerSansMedium.className}`}
            >
              02.
            </p>
          </div>
          <div className=" w-fit">
            <p
              className={`text-[#42526D] text-3xl mb-4 font-bold ${outerSansRegular.className}`}
            >{`State of the Art Equipments`}</p>
            <hr className="border-[#42526D]" />
            <p
              className={`text-[#42526D] text-base mt-4 ${mulishLight.className}`}
            >{`Our brand new facility in Senam ensures you feel energized and motivated to get your workouts. With the greatest equipment on offer, you'll have everything you need to crush your fitness goals.`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
