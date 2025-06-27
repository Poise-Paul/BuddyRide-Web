import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

type Props = {};

const JoinAsPassenger = (props: Props) => {
  const list = [
    "Join rides created by drivers around you and also search for rides available",
    "Pay lesser fees instead of solo rides, split the cost with other passengers",
    "Make friends and build connection with other passengers",
    "Make payment with the platform you’re used to already",
  ];
  return (
    <div className="grid my-20 grid-cols-2">
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-black/30 text-xl font-semibold">
          Become a passenger
        </h1>
        <h1 className="text-4xl text-primary font-black">
          Join As A Passenger
        </h1>
        <ul className="max-w-96 flex flex-col gap-4">
          {list.map((x, key) => (
            <li key={key} className="flex gap-2">
              <IoMdCheckmark className="text-primary text-2xl" />
              <span> {x}</span>
            </li>
          ))}
        </ul>
        <Button radius="sm" className="bg-primary px-10 max-w-fit text-white">
          Join Now
        </Button>
      </div>
      <div className="">
        <Image src="/join-as-passenger.png" alt="join-as-passenger" />
      </div>
    </div>
  );
};

export default JoinAsPassenger;
