"use client";

import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { LucideMessageSquareShare } from "lucide-react";
import React, { useEffect, useState } from "react";

type Props = {};

const NewsSection = (_props: Props) => {
  const news = [
    {
      img: "/work-person-04.jpg",
      title: "5 Ways BuddyRide Makes Your Daily Commute More Affordable...",
      date: "14/01/2026",
      url: "https://medium.com/@buddyrideofficial/5-ways-buddyride-makes-your-daily-commute-more-affordable-7ad92f7971b8",
    },
    {
      img: "/paypal-image.jpg",
      title: "Why We Chose PayPal: Streamlining Global Payments Locally",
      date: "16/01/2026",
      url: "https://medium.com/@buddyrideofficial/why-we-chose-paypal-streamlining-global-payments-locally-75b78711e340",
    },
    {
      img: "/security.jpg",
      title: "Safety First: How We Protect Every “Buddy” on the Road",
      date: "20/06/2025",
      url: "https://medium.com/@buddyrideofficial/safety-first-how-we-protect-every-buddy-on-the-road-80d004993776",
    },
  ];

  function useWindowSize() {
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
      const checkSize = () => setIsSmall(window.innerWidth < 768);
      checkSize(); // Run on mount
      window.addEventListener("resize", checkSize);
      return () => window.removeEventListener("resize", checkSize);
    }, []);

    return isSmall;
  }

  const isSmall = useWindowSize();

  return (
    <div className="md:mb-20 mt-64 xm:mt-[90rem] flex flex-col items-center">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-black/30 font-NeuePlakExtendedSemiBold">
          BuddyRide blogs and News
        </h1>
        <h1 className="text-4xl font-NeuePlakExtendedBlack text-primary">
          Latest BuddyRide Blog
        </h1>
      </div>

      <div className="my-20 xm:mt-16 flex xm:flex-col gap-5">
        <div className="flex xm:flex-col rounded-2xl drop-shadow-lg">
          <div className="flex sm:rounded-xl">
            <Image
              alt="news-section"
              className="h-full sm:rounded-l-2xl xm:rounded-t-2xl object-cover"
              radius="none"
              src="/5-something.jpg"
            />
          </div>
          <div className="flex flex-col gap-4 sm:max-w-[calc(100%-50%)] sm:rounded-r-2xl xm:rounded-b-2xl border-1 border-[#A6A6A6] bg-white p-5">
            <div className="flex items-center justify-between">
              <h1 className="font-bold xm:text-sm">News</h1>
              <p className="text-black/50 xm:text-sm">03/06/2025</p>
            </div>
            <h1 className="md:text-2xl text-lg font-bold">
              The Future of Urban Mobility in the UK and Nigeria
            </h1>
            {isSmall ? (
              <p className="text-sm text-black/50">
                In bustling cities like London and Lagos, traditional
                ride-sharing apps are struggling to keep pace with the realities
                of urban life...
              </p>
            ) : (
              <p className="text-base text-black/50">
                In bustling cities like London and Lagos, traditional
                ride-sharing apps are struggling to keep pace with the realities
                of urban life. High traffic congestion, rising costs, and safety
                concerns have exposed the limits of conventional models. Riders
                are left frustrated, while drivers face mounting challenges.
                Enter BuddyRide—a platform designed to reimagine mobility for
                local needs, not just global trends...
              </p>
            )}
            <Button
              as={Link}
              href="https://medium.com/@buddyrideofficial/the-future-of-urban-mobility-in-the-uk-and-nigeria-0896174b4886"
              isExternal
              showAnchorIcon
              target="_blank"
              variant="flat"
              size={isSmall ? "sm" : "md"}
              color="primary"
              className="font-NeuePlakSemibold"
            >
              Read full story
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-7 rounded-2xl border-1 border-[#A6A6A6] p-4">
          {news.map((x, key) => (
            <div key={key} className="grid sm:grid-cols-3 gap-2">
              <Image
                alt="news-second"
                src={x.img}
                width={800}
                className="object-cover sm:h-28"
              />

              <div className="md:col-span-2 flex-col flex gap-1">
                <h1 className="text-sm font-bold">{x.title}</h1>
                <small className="text-tiny font-semibold text-black/50">
                  {x.date}
                </small>
                <Link
                  className="text-sm font-NeuePlakSemibold inline-flex items-center gap-1 group"
                  target="_blank"
                  href={x.url}
                >
                  Read More
                  <LucideMessageSquareShare className="" size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
