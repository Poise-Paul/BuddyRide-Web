"use client";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import Link from "next/link";
import ComingSoonModal from "../Modals/WaitListModal";
import { useState } from "react";

const DownloadTheApp = () => {
  const [openWaitlistModal, setOpenWaitlistModal] = useState(false);

  const testimonials = [
    {
      desc: "I love how reliable BuddyRide is. Whether I’m heading to the airport or just around town, I always find a comfortable ride at a great price!",
      img: "/testimonial-01.jpg",
      name: "James, London",
      position: "Software Engineer",
      tesst: "Buddy",
    },
    {
      desc: "Finally, an app that delivers on convenience! Booking a ride with BuddyRide is quick and hassle-free. It’s perfect for my daily trips across the city.",
      img: "/testimonial-02.jpg",
      name: "Sophie, London",
      position: "University Lecturer",
      tesst: "Hassle-Free Travel Across the City",
    },
    {
      desc: "BuddyRide makes commuting across London effortless! The drivers are professional, the app is seamless, and I always feel safe. It’s my go-to for getting around.",
      img: "/testimonial-03.jpg",
      name: "Emma, London",
      position: "Marketing Manager",
      tesst: "Seamless London Commutes",
    },
  ];

  return (
    <div className="flex relative w-full sm:mb-80  flex-col">
      <div className="flex xm:flex-col xm:top-[200rem] md:mx-20 sm:mx-10 gap-10">
        <div className="flex items-center justify-center">
          <Image
            alt="download-the-app"
            className="w-[25rem]"
            src="/download-app-01.jpg"
          />
        </div>
        <div className="flex max-w-xl xm:text-center flex-col gap-4 justify-center">
          <h1 className="text-xl font-NeuePlakExtendedSemiBold text-black/30">
            Join your buddies today
          </h1>
          <h1 className="text-4xl mt-4 font-NeuePlakExtendedBlack text-primary">
            Download BuddyRide
          </h1>
          <p>
            Get to where you need to go—fast, safe, and hassle-free. Download the
            BuddyRide app today and connect with trusted drivers for smooth,
            convenient rides whenever you need them!
          </p>
          <div className="flex items-center gap-4">
            <Image
              alt="app-store-logo"
              className="w-40"
              radius="none"
              src="/app-store.png"
              onClick={() => setOpenWaitlistModal(true)}
            />

            <Image
              alt="play-store-logo"
              className="w-40"
              radius="none"
              src="/play-store.png"
              onClick={() => setOpenWaitlistModal(true)}
            />
          </div>
        </div>
      </div>

      <div className="absolute z-10 -bottom-[29rem] xm:-bottom-[83rem] w-full flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#F3F5F7] sm:p-20 p-10 text-center">
        <h1 className="text-2xl font-NeuePlakExtendedSemiBold text-black/30">
          Testimonials
        </h1>
        <h1 className="text-4xl font-NeuePlakExtendedBlack text-primary">
          What People are saying
        </h1>
        <div className="my-20 grid xm:gap-16 sm:grid-cols-3 gap-5">
          {testimonials.map((x, key) => (
            <div
              key={key}
              className="relative rounded-lg bg-white p-7 drop-shadow-md"
            >
              <div className="absolute left-10 top-[-40px] flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white">
                <Image
                  alt="testimonial-image"
                  className="object-cover"
                  height={70}
                  radius="full"
                  src={x.img}
                  width={70}
                />
              </div>
              <div className="mt-7 flex flex-col gap-1 text-left">
                <p className="font-semibold">{x.tesst}</p>
                <p className="text-tiny text-[#A6A6A6]">{x.desc}</p>
                <h1 className="font-black">{x.name}</h1>
                <p className="font-semibold text-secondary">{x.position}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <div className="flex gap-1">
            <div className="h-2 w-4 rounded-full bg-primary/10" />
            <div className="h-2 w-7 rounded-full bg-primary" />
            <div className="h-2 w-4 rounded-full bg-primary/10" />
          </div>
        </div>
      </div>

      {/* Modals */}
      <ComingSoonModal
        isOpen={openWaitlistModal}
        onClose={() => setOpenWaitlistModal(false)}
      />
    </div>
  );
};

export default DownloadTheApp;
