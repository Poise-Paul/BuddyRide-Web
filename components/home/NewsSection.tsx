import { Image } from "@heroui/image";
import React from "react";

type Props = {};

const NewsSection = (props: Props) => {
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
    <div className="flex my-20 items-center flex-col">
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-black/30">BuddyRide blogs and News</h1>
        <h1 className="text-4xl text-primary font-black">
          Latest BuddyRide Blog
        </h1>
      </div>

      <div className="flex gap-5 my-20">
        <div className="flex drop-shadow-lg rounded-2xl">
          <div className="rounded-xl flex">
            <Image
              src="/News-Section.jpg"
              radius="none"
              className="rounded-l-2xl h-full object-cover"
              alt="news-section"
            />
          </div>
          <div className="flex  bg-white border-[#A6A6A6] rounded-r-2xl border-1  flex-col gap-4 p-5">
            <div className="flex items-center justify-between">
              <h1 className="font-bold">News</h1>
              <p className="text-black/50">03/06/2025</p>
            </div>
            <h1 className="font-bold text-2xl">
              The Future of Ride-Sharing: <br /> How BuddyRide is Changing the
              Game
            </h1>
            <p className="text-black/50 text-lg">
              Ride-sharing has transformed urban mobility, making transportation
              more flexible and accessible. BuddyRide takes it further by
              ensuring safety, affordability, and convenience, connecting riders
              with trusted drivers for a seamless experience. Discover how
              BuddyRide is reshaping the industry with reliable service and a
              customer-first approach...
            </p>
          </div>
        </div>
        <div className="flex flex-col p-4 border-1 rounded-2xl border-[#A6A6A6] gap-7">
          {news.map((x, key) => (
            <div key={key} className="grid grid-cols-3 gap-2">
              <Image src={x.img} height={100} width={600} className="object-cover" alt="news-second" />
              <div className="col-span-2 gap-1">
                <h1 className="text-sm font-bold">{x.title}</h1>
                <small className="text-black/50 font-semibold text-tiny">
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
