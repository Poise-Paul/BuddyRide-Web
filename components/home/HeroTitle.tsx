import { Button } from "@heroui/button";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

type Props = {};

const HeroTitle = (_props: Props) => {
  return (
    <div className="flex flex-col gap-5 text-center">
      <p className="text-xl font-semibold text-black/30">
        Welcome to BuddyRide
      </p>
      <h1 className="text-4xl font-black text-primary">
        Find a Ride. Share the Journey. Save Money.
      </h1>
      <p className="text-center">
        BuddyRide connects drivers with empty seats to riders looking for a
        convenient, affordable way to travel. Whether you&apos;re commuting,
        heading on a road trip, or just exploring the city, BuddyRide makes it
        easy to share a ride, split the cost, and make new connections!
      </p>
      <div className="flex justify-center gap-5">
        <Button className="bg-primary px-10 font-medium text-white" radius="sm">
          Get Started
        </Button>
        <Button
          className="bg-[#F8F9FA] px-5 font-medium text-[#1E1E1E]"
          radius="sm"
          startContent={
            <div className="flex gap-2">
              <FaApple />
              <div className="border-r-1 border-black" />
              <FaGooglePlay />
            </div>
          }
        >
          Download App
        </Button>
      </div>
    </div>
  );
};

export default HeroTitle;
