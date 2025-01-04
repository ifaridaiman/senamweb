import React from "react";
import Image from "next/image";
import { mulishLight, outerSansMedium, outerSansRegular } from "../fonts/font";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

const Section3 = () => {
  return (
    <section
      id="section3"
      data-color="#292929"
      className="bg-black h-auto md:h-screen flex justify-center items-center px-8 gap-4"
    >
      <div className="max-w-7xl grid md:grid-cols-2 h-full">
        <div
          className="flex flex-row justify-center items-center  px-4 pr-10 py-10 md:px-8 h-full"
          data-aos="fade-right"
        >
          <div className="px-4">
            <p
              className={`text-[#f9f7ed] text-4xl md:text-9xl font-black ${outerSansMedium.className}`}
            >
              01.
            </p>
          </div>
          <div className=" w-fit">
            <p
              className={`text-[#f9f7ed] text-5xl mb-4 font-bold ${outerSansRegular.className}`}
            >
              Certified <br /> Coaches
            </p>
            <hr className="border-white" />
            <p
              className={`text-[#f9f7ed] text-base mt-4 ${mulishLight.className}`}
            >{`Led by founder Isrul Firdaus, our team of SenamCoaches is here to motivate and assist you in achieveing your health and fitness goals. Our coaches are experts in their field, ensuring a consistent and high-quality fitness exprience for every participants.`}</p>
            {/* <p className="text-[#f9f7ed] text-base mt-4">{`Our coaches are experts in their field, ensuring a consistent and high-quality fitness experience for every participant.`}</p> */}
          </div>
        </div>
        <div className="md:border-l-2 border-slate-900 px-4 md:pl-10 py-10 items-center flex flex-row justify-center  h-full">
          <div className=" border-t-2 md:border-t-0 pt-8 md:pt-0  ">
            <Swiper
              slidesPerView={'auto'}
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
                    width={800}
                    height={800}
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <Image
                    src={`/assets/coach/senamCoach2.png`}
                    alt="senam coach 1"
                    width={800}
                    height={800}
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <Image
                    src={`/assets/coach/senamCoach3.png`}
                    alt="senam coach 1"
                    width={800}
                    height={800}
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <Image
                    src={`/assets/coach/senamCoach4.png`}
                    alt="senam coach 1"
                    width={800}
                    height={800}
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <Image
                    src={`/assets/coach/senamCoach5.png`}
                    alt="senam coach 1"
                    width={800}
                    height={800}
                  />
              </SwiperSlide>
              
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
