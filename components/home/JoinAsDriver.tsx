import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

type Props = {};

const JoinAsDriver = (props: Props) => {
  const list = [
    "Create Rides for passengers/customers to join for long journeys or short.",
    "Drive and earn money while you set the rates you like, completely on you.",
    "You set the destination and pickup for every ride no one orders you around.",
  ];
  return (
    <div className="grid my-20 grid-cols-2 gap-20">
      <div>
        <Image
          src="/join-as-driver.png"
        
          alt="join-as-driver"
        />
      </div>
      <div className="flex justify-center flex-col gap-4">
        <p className="font-semibold text-xl text-black/30">Become a driver</p>
        <h1 className="text-4xl font-black text-primary">Join As A Driver</h1>
        <ul className="flex max-w-96 flex-col gap-4">
          {list.map((x, key) => (
            <li key={key} className="flex gap-2">
              <IoMdCheckmark className="text-primary text-2xl" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
        <Button className="bg-primary w-fit px-10 text-white rounded-lg">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default JoinAsDriver;
