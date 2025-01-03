import React from "react";
import { mulishLight, outerSansMedium, outerSansRegular } from "../fonts/font";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import Image from "next/image";

const Section5 = () => {
  return (
    <section
      id="section5"
      data-color="#292929"
      className="bg-[#292929] h-screen flex justify-center items-center px-8 gap-4"
    >
      <div className="max-w-7xl grid md:grid-cols-2 h-full">
        <div
          className="flex flex-row justify-center items-center  px-4 pr-10 py-10 md:px-8 h-full"
          data-aos="fade-right"
        >
          <div className="px-4">
            <p
              className={`text-white text-4xl md:text-9xl font-black ${outerSansMedium.className}`}
            >
              03.
            </p>
          </div>
          <div className=" w-fit">
            <p
              className={`text-white text-3xl mb-4 font-bold ${outerSansRegular.className}`}
            >{`Amazing Results`}</p>
            <hr className="border-white" />
            <p
              className={`text-white text-base mt-4 ${mulishLight}`}
            >{`Senam has been operating for over 8 years, proudly helping over 500 clients achieve their health and fitness goals, whether it's weight loss, building strength, or improving mobility. The results speak for themselves—take a look at some of our inspiring before-and-after transformations.`}</p>
          </div>
        </div>
        <div className=" md:border-l-2 px-4 md:pl-10 py-10 items-center flex flex-row justify-center  h-full">
          <div className="">
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
      </div>
    </section>
  );
};

export default Section5;
