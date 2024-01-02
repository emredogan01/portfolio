"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ProImages, ProImages2 } from "@/constants";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ProjectSlider = () => {
  return (
    <div className="w-[70%] md:w-[40%] bg-slate-300 rounded-lg p-5  bg-opacity-10">
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide className="mb-14">
          <div className="grid grid-cols-2 gap-4 md:px-16">
            {ProImages.map((image) => (
              <div
                className="relative group w-[150px] h-[150px]  md:w-[230px] md:h-[230px]"
                key={image.src}
              >
                <Image
                  src={image.src}
                  alt="project image"
                  width={280}
                  height={280}
                  className="rounded-md h-full w-full object-cover"
                />

                <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-gray-400 via-red-200 to-gray-400 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
                <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white md:text-lg">
                  View Project
                  <FaArrowRight />
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-14">
          <div className="grid grid-cols-2 gap-4 md:px-16">
            {ProImages2.map((image) => (
              <div
                className="relative group w-[150px] h-[150px]  md:w-[230px] md:h-[230px]"
                key={image.src}
              >
                <Image
                  src={image.src}
                  alt="project image"
                  width={280}
                  height={280}
                  className="rounded-md w-full h-full object-cover"
                />

                <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-gray-400 via-red-200 to-gray-400 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
                <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200 text-white md:text-lg">
                  View Project
                  <FaArrowRight />
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
