import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import React from "react";

type Props = {};

const DownloadTheApp = (props: Props) => {
  const testimonials = [
    {
      img: "/testimonial-01.jpg",
      tesst: "Buddy",
      desc: "I love how reliable BuddyRide is. Whether I’m heading to the airport or just around town, I always find a comfortable ride at a great price!",
      name: "James, London",
      position: "Software Engineer",
    },
    {
      img: "/testimonial-02.jpg",
      tesst: "*Hassle-Free Travel Across the City*",
      desc: "Finally, an app that delivers on convenience! Booking a ride with BuddyRide is quick and hassle-free. It’s perfect for my daily trips across the city.",
      name: "Sophie, London",
      position: "University Lecturer",
    },
    {
      img: "/testimonial-01.jpg",
      tesst: "Buddy",
      desc: "I love how reliable BuddyRide is. Whether I’m heading to the airport or just around town, I always find a comfortable ride at a great price!",
      name: "James, London",
      position: "Software Engineer",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2">
        <div className="">
          <Image src="/download-app-01.png" alt="download-the-app" />
        </div>
        <div className="flex justify-center flex-col">
          <h1 className="text-black/30 text-lg font-semibold">
            Join your buddies today{" "}
          </h1>
          <h1 className="font-black text-4xl text-primary">
            Download BuddyRide{" "}
          </h1>
          <p>
            Get where you need to go—fast, safe, and hassle-free. Download the
            BuddyRide app today and connect with trusted drivers for smooth,
            convenient rides whenever you need them!
          </p>
          <div className="flex gap-4 items-center">
            <Image
              src="/app-store.png"
              radius="none"
              className="w-40"
              alt="app-store-logo"
            />
            <Image
              src="/play-store.png"
              radius="none"
              className="w-40"
              alt="play-store-logo"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F3F5F7]">
        <h1 className="text-black/30 text-lg">Testimonials</h1>
        <h1 className="font-black text-primary text-4xl">
          What People are saying
        </h1>
        <div className="grid grid-cols-3"></div>
      </div>
    </div>
  );
};

export default DownloadTheApp;
