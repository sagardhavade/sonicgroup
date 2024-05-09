"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../.next/static/css/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { sliderData } from "./sliderData";
import SingleSlider from "./SingleSlider";

export default function Slider() {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLDivElement>(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress),
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <>
      <section className="mx-auto overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-25">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {sliderData.map((review) => (
            <SwiperSlide key={review?.id}>
              <SingleSlider review={review} />
            </SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </section>
    </>
  );
}
