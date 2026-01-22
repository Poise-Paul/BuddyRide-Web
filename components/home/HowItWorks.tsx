"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import React, { useEffect, useState } from "react";
import { Input } from "@heroui/input";
import ComingSoonModal from "../Modals/WaitListModal";

type Props = {};

const HowItWorks = (_props: Props) => {
  const [openWaitlistModal, setOpenWaitlistModal] = useState(false);
  const images = [
    {
      title: "Find Ride",
      desc: "Find ride from the list of rides created by different drivers",
      img: "/work-person-01.jpg",
    },
    {
      title: "Send Request",
      desc: "Send join request to join any ride of your choice.",
      img: "/work-person-02.jpg",
    },
    {
      title: "Make Payment",
      desc: "Make payments the same way you’re comfortable with",
      img: "/work-person-03.jpg",
    },
    {
      title: "Join Ride",
      desc: "Join ride with other passengers and enjoy your journey",
      img: "/work-person-04.jpg",
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
    <div className="md:my-20 my-12 flex flex-col gap-20 overflow-hidden">
      <div className="sm:mx-20 flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="md:text-4xl text-2xl font-NeuePlakExtendedBlack text-primary">
          How it works
        </h1>
        <p className="max-w-xl">
          BuddyRide connects riders with trusted drivers for safe, hassle-free
          trips. Just request, match, and ride!
        </p>
      </div>
      <div className="flex gap-5 xm:flex-col sm:overflow-hidden">
        {images.map((x, key) => (
          <div key={key}>
            <div className="relative rounded-xl">
              <Image
                alt={`work-person-0${key}`}
                className="object-cover"
                src={x.img}
                height={isSmall ? 320 : 420}
                width={isSmall ? 500 : 600}
              />
              <div className="absolute bottom-0 z-10 flex h-full flex-col items-baseline justify-end gap-2 rounded-xl bg-gradient-to-t from-black to-transparent p-6">
                <h1 className="md:text-3xl text-2xl font-NeuePlakExtendedBlack text-white">
                  {x.title}
                </h1>
                <p className="text-white md:text-base">{x.desc}</p>
                <Button
                  onPress={() => setOpenWaitlistModal(true)}
                  className="w-fit bg-primary text-white"
                  size={isSmall ? "sm" : "md"}
                  radius="sm"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal Change Updates */}
      <ComingSoonModal
        isOpen={openWaitlistModal}
        onClose={() => setOpenWaitlistModal(false)}
      />
    </div>
  );
};

export default HowItWorks;
