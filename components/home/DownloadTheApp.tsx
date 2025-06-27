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
      img: "/testimonial-03.jpg",
      tesst: "*Seamless London Commutes*",
      desc: "BuddyRide makes commuting across London effortless! The drivers are professional, the app is seamless, and I always feel safe. It’s my go-to for getting around.",
      name: "Emma, London",
      position: "Marketing Manager",
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
      <div className="bg-[#F3F5F7] flex flex-col gap-4 rounded-2xl justify-center items-center text-center p-20">
        <h1 className="text-black/30 text-2xl font-semibold">Testimonials</h1>
        <h1 className="font-black text-primary text-4xl">
          What People are saying
        </h1>
        <div className="grid gap-5 my-20 grid-cols-3">
          {testimonials.map((x, key) => (
            <div
              key={key}
              className="bg-white relative p-7 rounded-lg drop-shadow-md"
            >
              <div className="bg-white flex -top-10 left-10 justify-center items-center absolute rounded-full h-[76px] w-[76px]">
                <Image
                  src={x.img}
                  height={70}
                  width={70}
                  radius="full"
                  className="object-cover"
                  alt="testimonial-image"
                />
              </div>
              <div className="text-left mt-7 flex flex-col gap-1">
                <p className="font-semibold">{x.tesst}</p>
                <p className="text-tiny text-[#A6A6A6]">{x.desc}</p>
                <h1 className="font-black">{x.name}</h1>
                <p className="font-semibold text-secondary">{x.position}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <div className="flex gap-1">
            <div className="h-2 w-4 rounded-full bg-primary/10" />
            <div className="h-2 w-7 rounded-full bg-primary" />
            <div className="h-2 w-4 rounded-full bg-primary/10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadTheApp;
