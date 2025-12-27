import { Image } from "@heroui/image";
import React from "react";

type Props = {};

const NewsSection = (_props: Props) => {
  const news = [
    {
      img: "/news-02.jpg",
      title:
        "Top Tips for a Smooth Ride: How to Get the Best Experience with BuddyRide...",
      date: "03/06/2025",
    },
    {
      img: "/news-03.jpg",
      title: "Meet Our Drivers: Stories from the People Behind BuddyRide",
      date: "07/06/2025",
    },
    {
      img: "/news-04.jpg",
      title: "Why Ride-Sharing is the Smart Choice for Commuters in the UK",
      date: "20/06/2025",
    },
  ];

  return (
    <div className="mb-20 mt-64 flex flex-col items-center">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-black/30">BuddyRide blogs and News</h1>
        <h1 className="text-4xl font-black text-primary">
          Latest BuddyRide Blog
        </h1>
      </div>

      <div className="my-20 xm:mt-28 flex xm:flex-col gap-5">
        <div className="flex xm:flex-col rounded-2xl drop-shadow-lg">
          <div className="flex sm:rounded-xl">
            <Image
              alt="news-section"
              className="h-full sm:rounded-l-2xl xm:rounded-t-2xl object-cover"
              radius="none"
              src="/News-Section.jpg"
            />
          </div>
          <div className="flex flex-col gap-4 sm:rounded-r-2xl border-1 border-[#A6A6A6] bg-white p-5">
            <div className="flex items-center justify-between">
              <h1 className="font-bold">News</h1>
              <p className="text-black/50">03/06/2025</p>
            </div>
            <h1 className="text-2xl font-bold">
              The Future of Ride-Sharing: <br /> How BuddyRide is Changing the
              Game
            </h1>
            <p className="text-lg text-black/50">
              Ride-sharing has transformed urban mobility, making transportation
              more flexible and accessible. BuddyRide takes it further by
              ensuring safety, affordability, and convenience, connecting riders
              with trusted drivers for a seamless experience. Discover how
              BuddyRide is reshaping the industry with reliable service and a
              customer-first approach...
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-7 rounded-2xl border-1 border-[#A6A6A6] p-4">
          {news.map((x, key) => (
            <div key={key} className="grid sm:grid-cols-3 gap-2">
              <Image
                alt="news-second"
                src={x.img}
                width={600}
                className="object-cover h-44 sm:h-24"
              />

              <div className="col-span-2 gap-1">
                <h1 className="text-sm font-bold">{x.title}</h1>
                <small className="text-tiny font-semibold text-black/50">
                  {x.date}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
