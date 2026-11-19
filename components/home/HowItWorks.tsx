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
import DownloadOnMobileModal from "../Modals/DesktopModal";
import { COUNTRIES, RIDE_MODE_LABEL, RideMode } from "@/config/countries";

type Props = {};

const HowItWorks = (_props: Props) => {
  const [openWaitlistModal, setOpenWaitlistModal] = useState(false);
  const [device, setDevice] = useState("desktop");
  const [showMobileModal, setShowMobileModal] = useState(false);

  // The two ways BuddyRide works, by country (config/countries.ts).
  const [mode, setMode] = useState<RideMode>("on-demand");
  const stepsByMode: Record<RideMode, { title: string; desc: string; img: string }[]> = {
    "on-demand": [
      {
        title: "Set Your Trip",
        desc: "Enter your pickup and destination, and ride privately or share with others going your way.",
        img: "/work-person-01.jpg",
      },
      {
        title: "Name Your Price",
        desc: "Propose a fare. Nearby drivers accept it or send you a counter-offer.",
        img: "/work-person-02.jpg",
      },
      {
        title: "Pick a Driver",
        desc: "Choose the offer you like and pay securely in the app.",
        img: "/work-person-03.jpg",
      },
      {
        title: "Ride",
        desc: "Track your driver live and share your trip with family or friends.",
        img: "/work-person-04.jpg",
      },
    ],
    "ride-sharing": [
      {
        title: "Find Ride",
        desc: "Find a ride from the list of rides created by drivers heading your way.",
        img: "/work-person-01.jpg",
      },
      {
        title: "Send Request",
        desc: "Send a request to join any ride of your choice.",
        img: "/work-person-02.jpg",
      },
      {
        title: "Make Payment",
        desc: "Pay securely in the app once the driver accepts.",
        img: "/work-person-03.jpg",
      },
      {
        title: "Join Ride",
        desc: "Ride with other passengers and split the cost of the journey.",
        img: "/work-person-04.jpg",
      },
    ],
  };
  const images = stepsByMode[mode];

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

  // Download App

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) setDevice("android");
    else if (/iPad|iPhone|iPod/.test(ua)) setDevice("ios");
  }, []);

  const openApp = () => {
    if (device === "ios") {
      window.location.href =
        "https://apps.apple.com/us/app/buddyride/id6751210259";
      return;
    } else if (device === "android") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.elonpaul.buddyrideapp";
      return;
    } else if (device === "desktop") {
      setShowMobileModal(true);
    }
  };
  return (
    <div className="md:my-20 my-12 flex flex-col gap-20 overflow-hidden">
      <div className="sm:mx-20 flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="md:text-4xl text-2xl font-NeuePlakExtendedBlack text-primary">
          How it works
        </h1>
        <p className="max-w-xl">
          BuddyRide connects riders with trusted drivers for safe, hassle-free
          trips. How you ride depends on where you are:
        </p>
        <div
          role="tablist"
          aria-label="Ride type"
          className="mt-2 flex flex-wrap justify-center gap-2 rounded-full bg-[#F3F5F7] p-1"
        >
          {(["on-demand", "ride-sharing"] as RideMode[]).map((m) => (
            <button
              key={m}
              role="tab"
              type="button"
              aria-selected={mode === m}
              onClick={() => setMode(m)}
              className={`rounded-full px-5 py-2 text-sm font-NeuePlakSemibold transition-colors ${
                mode === m ? "bg-primary text-white" : "text-black/60 hover:text-primary"
              }`}
            >
              {RIDE_MODE_LABEL[m]} ·{" "}
              {COUNTRIES.filter((c) => c.mode === m)
                .map((c) => `${c.flag} ${c.key === "uk" ? "UK" : c.name}`)
                .join(" ")}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-5 xm:flex-col sm:overflow-hidden">
        {images.map((x, key) => (
          <div key={`${mode}-${key}`}>
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
                  onPress={openApp}
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
      <DownloadOnMobileModal
        isOpen={showMobileModal}
        onOpenChange={() => setShowMobileModal(false)}
      />
    </div>
  );
};

export default HowItWorks;
