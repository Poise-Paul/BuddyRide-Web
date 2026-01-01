"use client";

import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import ComingSoonModal from "../Modals/WaitListModal";

type Props = {};

const JoinAsPassenger = (_props: Props) => {
  const [openWaitlistModal, setOpenWaitlistModal] = useState(false);
  const list = [
    "Join rides created by drivers around you and also search for rides available",
    "Pay lesser fees instead of solo rides, split the cost with other passengers",
    "Make friends and build connection with other passengers",
    "Make payment with the platform you’re used to already",
  ];

  return (
    <div className="my-20 grid xm:gap-10 sm:grid-cols-2">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-xl font-semibold text-black/30">
          Become a passenger
        </h1>
        <h1 className="text-4xl font-black text-primary">
          Join As A Passenger
        </h1>
        <ul className="flex max-w-96 flex-col gap-4">
          {list.map((x, key) => (
            <li key={key} className="flex gap-2">
              <IoMdCheckmark className="text-2xl text-primary" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
        <Button onPress={() => setOpenWaitlistModal(true)} className="max-w-fit bg-primary px-10 text-white" radius="sm">
          Join Now
        </Button>
      </div>
      <div>
        <Image alt="join-as-passenger" src="/join-as-passenger.jpg" />
      </div>
      
      {/* Modal */}
      <ComingSoonModal
        isOpen={openWaitlistModal}
        onClose={() => setOpenWaitlistModal(false)}
      />
    </div>
  );
};

export default JoinAsPassenger;
