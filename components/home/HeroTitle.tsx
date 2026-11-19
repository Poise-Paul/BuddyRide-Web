"use client";
import { Button } from "@heroui/button";
import React, { useEffect, useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import ComingSoonModal from "../Modals/WaitListModal";
import { Alert } from "@heroui/alert";
import DownloadOnMobileModal from "../Modals/DesktopModal";

type Props = {};

const HeroTitle = (_props: Props) => {
  const [openWaitlistModal, setOpenWaitlistModal] = useState(false);
  const [device, setDevice] = useState("desktop");
  const [showMobileModal, setShowMobileModal] = useState(false);

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
    <div className="flex flex-col gap-5 text-center">
      <p className="text-xl font-NeuePlakExtendedBold text-black/30">
        Welcome to BuddyRide
      </p>
      <h1 className="text-4xl font-black font-NeuePlakExtendedBlack text-primary">
        Ride Now or Share the Journey. Always Save.
      </h1>
      <p className="text-center max-w-3xl mx-auto">
        BuddyRide gets you where you&apos;re going across the UK, Sweden,
        Nigeria and Canada. In the UK and Sweden, request an on-demand ride —
        on your own, or shared with other passengers going your way — and agree
        your price with a nearby driver before you go. In Nigeria and Canada,
        join a carpool with a driver already heading your way and split the
        cost.
      </p>
      <div className="flex justify-center gap-5">
        <Button
          onPress={openApp}
          className="bg-primary px-10 font-medium text-white"
          radius="sm"
        >
          Get Started
        </Button>
        <Button
          onPress={openApp}
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
      {/* Modal */}
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

export default HeroTitle;

// Waitlist -- setOpenWaitlistModal(true)
