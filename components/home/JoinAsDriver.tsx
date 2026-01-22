"use client";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import React, { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import ComingSoonModal from "../Modals/WaitListModal";

type Props = {};

const JoinAsDriver = (_props: Props) => {
  const [openWaitlistModal, setOpenWaitlistModal] = useState(false);

  const list = [
    "Create Rides for passengers/customers to join for long journeys or short.",
    "Drive and earn money while you set the rates you like, completely on you.",
    "You set the destination and pickup for every ride no one orders you around.",
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
    <div className="md:my-20 my-10 grid sm:grid-cols-2 md:gap-20 gap-10">
      <div>
        <Image alt="join-as-driver" src="/join-as-driver.jpg" />
      </div>
      <div className="flex flex-col justify-center gap-4">
        <p className="text-xl font-NeuePlakSemibold text-black/30">
          Become a driver
        </p>
        <h1 className="md:text-4xl text-3xl font-NeuePlakExtendedBlack text-primary">
          Join As A Driver
        </h1>
        <ul className="flex max-w-96 flex-col gap-4">
          {list.map((x, key) => (
            <li key={key} className="flex gap-2">
              <IoMdCheckmark className="text-2xl text-primary" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
        <Button
          onPress={() => setOpenWaitlistModal(true)}
          size={isSmall ? "sm" : "md"}
          className="w-fit rounded-lg bg-primary px-10 text-white"
        >
          Join Now
        </Button>
      </div>

      {/* Modal */}
      <ComingSoonModal
        isOpen={openWaitlistModal}
        onClose={() => setOpenWaitlistModal(false)}
      />
    </div>
  );
};

export default JoinAsDriver;
