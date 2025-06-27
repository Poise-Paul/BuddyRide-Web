import { Image } from "@heroui/image";
import React from "react";

const DownloadTheApp = () => {
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
      tesst: "*Hassle-Free Travel Across the City*",
    },
    {
      desc: "BuddyRide makes commuting across London effortless! The drivers are professional, the app is seamless, and I always feel safe. It’s my go-to for getting around.",
      img: "/testimonial-03.jpg",
      name: "Emma, London",
      position: "Marketing Manager",
      tesst: "*Seamless London Commutes*",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2">
        <div>
          <Image alt="download-the-app" src="/download-app-01.png" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-lg font-semibold text-black/30">
            Join your buddies today
          </h1>
          <h1 className="text-4xl font-black text-primary">
            Download BuddyRide
          </h1>
          <p>
            Get where you need to go—fast, safe, and hassle-free. Download the
            BuddyRide app today and connect with trusted drivers for smooth,
            convenient rides whenever you need them!
          </p>
          <div className="flex items-center gap-4">
            <Image
              alt="app-store-logo"
              className="w-40"
              radius="none"
              src="/app-store.png"
            />
            <Image
              alt="play-store-logo"
              className="w-40"
              radius="none"
              src="/play-store.png"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#F3F5F7] p-20 text-center">
        <h1 className="text-2xl font-semibold text-black/30">Testimonials</h1>
        <h1 className="text-4xl font-black text-primary">
          What People are saying
        </h1>
        <div className="my-20 grid grid-cols-3 gap-5">
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
    </div>
  );
};

export default DownloadTheApp;
