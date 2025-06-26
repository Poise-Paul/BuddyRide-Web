"use client";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";


type Props = {};

const HowItWorks = (props: Props) => {
  const images = [
    {
      title: "Find Ride",
      desc: "Find ride from the list of rides created by different drivers",
      img: "/work-person-01.png",
    },
    {
      title: "Send Request",
      desc: "Send join request to join any ride of your choice.",
      img: "/work-person-02.png",
    },
    {
      title: "Make Payment",
      desc: "Make payments the same way you’re comfortable with",
      img: "/work-person-03.png",
    },
    {
      title: "Join Ride",
      desc: "Join ride with other passengers and enjoy your journey",
      img: "/work-person-04.png",
    },
  ];
  return (
    <div className="">
      <h1 className="text-4xl text-primary font-black">How it works</h1>
      <p className="">
        BuddyRide connects riders with trusted drivers for safe, hassle-free
        trips. Just request, match, and ride!
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {images.map((x, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="rounded-xl relative">
                <Image
                  width={500}
                  height={500}
                  src={x.img}
                  alt={`work-person-0${key}`}
                />

                <div className="absolute bg-gradient-to-t from-black to-transparent h-full rounded-xl  z-10 flex flex-col gap-2 p-6 bottom-0 items-baseline justify-end">
                  <h1 className="text-white text-3xl font-black">{x.title}</h1>
                  <p className="text-white">{x.desc}</p>
                  <Button radius="sm" className="bg-primary w-fit text-white">
                    Get Started
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HowItWorks;
