import { Button } from "@heroui/button";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

type Props = {};

const HeroTitle = (props: Props) => {
  return (
    <div className="text-center flex flex-col gap-5">
      <p className="text-black/30 text-xl font-semibold">
        Welcome to BuddyRide
      </p>
      <h1 className="text-4xl text-primary font-black">
        Find a Ride. Share the Journey. Save Money.
      </h1>
      <p className="text-center">
        BuddyRide connects drivers with empty seats to riders looking for a
        convenient, affordable way to travel. Whether you're commuting, heading
        on a road trip, or just exploring the city, BuddyRide makes it easy to
        share a ride, split the cost, and make new connections!
      </p>
      <div className="gap-5 justify-center flex">
        <Button radius="sm" className="bg-primary px-10 font-medium text-white">
          Get Started
        </Button>
        <Button
          radius="sm"
          startContent={
            <div className="flex gap-2">
              <FaApple /> <div className="border-r-1 border-black" />
              <FaGooglePlay />
            </div>
          }
          className="bg-[#F8F9FA] font-medium px-5 text-[#1E1E1E]"
        >
          Download App
        </Button>
      </div>
    </div>
  );
};

export default HeroTitle;
