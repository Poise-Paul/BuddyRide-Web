"use client";

import { Image } from "@heroui/image";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import ComingSoonModal from "../Modals/WaitListModal";
import { usePathname } from "next/navigation";
import SocialsComingSoonModal from "../Modals/SocialMediaModal";
import { useDisclosure } from "@heroui/modal";

type Props = {};

const Footer = (props: Props) => {
  const [openWaitlistModal, setOpenWaitlistModal] = useState(false);

  const {
    isOpen: isSocialModalOpen,
    onOpen: onSocialModalOpen,
    onOpenChange: onSocialModalChange,
  } = useDisclosure();

  const path = usePathname();

  return (
    <div className="bg-[#F3F5F7] overflow-hidden relative sm:mx-20 my-10 rounded-3xl flex xm:flex-col md:gap-40 gap-24 px-10 py-20">
      <div className="flex flex-col gap-3">
        <Image
          onClick={() => (window.location.href = "/")}
          src="/Primary-Logo.svg"
          radius="none"
          className="cursor-pointer"
          alt="brand-logo"
          height={60}
          width={60}
        />
        <h1 className="font-NeuePlakExtendedBold">BUDDYRIDE</h1>
        <div className="border-2 max-w-40 border-t-2 border-primary" />
        <p className="font-semibold text-[#5E6461]">
          The best ride-sharing platform.
        </p>
        <div className="flex gap-3">
          <Link onPress={onSocialModalOpen} className="cursor-pointer">
            <div className="h-10 flex justify-center items-center bg-white rounded-full w-10">
              <FaFacebook className="text-primary text-2xl" />
            </div>
          </Link>
          <Link onPress={onSocialModalOpen} className="cursor-pointer">
            <div className="bg-white flex justify-center items-center w-10 h-10 rounded-full">
              <FaXTwitter className="text-primary text-2xl" />
            </div>
          </Link>
          <Link onPress={onSocialModalOpen} className="cursor-pointer">
            <div className="bg-white flex justify-center items-center h-10 w-10 rounded-full">
              <AiFillInstagram className="text-primary text-2xl" />
            </div>
          </Link>
          <Link onPress={onSocialModalOpen} className="cursor-pointer">
            <div className="bg-white h-10 flex justify-center items-center w-10 rounded-full">
              <FaLinkedin className="text-primary text-2xl" />
            </div>
          </Link>
          <Link onPress={onSocialModalOpen} className="cursor-pointer">
            <div className="bg-white flex justify-center items-center h-10 w-10 rounded-full">
              <AiOutlineTikTok className="text-primary text-2xl" />
            </div>
          </Link>
        </div>
      </div>
      <div className="grid sm:grid-cols-4 xm:gap-5 mb-20">
        <div className="flex gap-5 flex-col">
          <div>
            <h1 className="font-semibold">BuddyRide</h1>
            <ul className="text-[#5E6461] text-sm mt-4 font-medium flex flex-col gap-3">
              <Link as="button" onPress={() => setOpenWaitlistModal(true)}>
                Sign Up As Driver
              </Link>
              <Link as="button" onPress={() => setOpenWaitlistModal(true)}>
                Sign Up As Passenger
              </Link>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">Parent Company</h1>
            <p className="text-primary font-bold">MALLKIS LTD</p>
          </div>
        </div>
        <div className="">
          <h1 className="font-semibold">Useful Links</h1>
          <ul className="text-[#5E6461] text-sm mt-4 font-medium flex flex-col gap-3">
            <Link
              className={`hover:text-primary cursor-pointer text-[#5E6461] ${
                path === "/about" ? "text-primary font-bold" : ""
              }`}
              href="about"
            >
              About Us
            </Link>
            <Link
              href="faq"
              className={`hover:text-primary cursor-pointer text-[#5E6461] ${
                path === "/faq" ? "text-primary font-bold" : ""
              }`}
            >
              FAQ
            </Link>
            <Link
              href="terms"
              className={`hover:text-primary cursor-pointer text-[#5E6461] ${
                path === "/terms" ? "text-primary font-bold" : ""
              }`}
            >
              Terms of service
            </Link>
            <Link
              href="privacy"
              className={`hover:text-primary cursor-pointer text-[#5E6461] ${
                path === "/privacy" ? "text-primary font-bold" : ""
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              href="contact"
              className={`hover:text-primary cursor-pointer text-[#5E6461] ${
                path === "/contact" ? "text-primary font-bold" : ""
              }`}
            >
              Contact Us
            </Link>
            <Link
              href="help"
              className={`hover:text-primary cursor-pointer text-[#5E6461] ${
                path === "/help" ? "text-primary font-bold" : ""
              }`}
            >
              Help Center
            </Link>
            <Link
              href="refund"
              className={`hover:text-primary cursor-pointer text-[#5E6461] ${
                path === "/refund" ? "text-primary font-bold" : ""
              }`}
            >
              Refunds & Cancellations
            </Link>
          </ul>
        </div>

        <div className="">
          <h1 className="font-semibold">Safety</h1>
          <ul className="text-[#5E6461] text-sm mt-4 font-medium flex flex-col gap-3">
            <Link
              className={`hover:text-primary text-[#5E6461] ${
                path === "/driver" ? "text-primary font-bold" : ""
              } cursor-pointer`}
              href="/driver"
            >
              Driver Safety
            </Link>
            <Link
              className={`hover:text-primary text-[#5E6461] ${
                path === "/passenger" ? "text-primary font-bold" : ""
              } cursor-pointer `}
              href="/passenger"
            >
              Passenger Safety
            </Link>
          </ul>
        </div>
        <div className="">
          <h1 className="font-semibold">Address</h1>
          <p className="text-[#5E6461] text-sm mt-4 font-medium flex flex-col gap-3">
            32 Salix Court Whitebeam Close Salford M6 5HL
          </p>
        </div>
      </div>

      {/* Secondary Color */}
      <div className="h-60 w-60 rounded-full -bottom-24 -right-14 bg-secondary absolute" />
      {/* Footer Messages */}
      <div className="absolute bottom-0 pb-5 left-0 right-0 flex justify-center">
        <p className="text-sm text-[#5E6461]">
          © 2025 BuddyRide. All rights reserved.
        </p>
      </div>
      {/* Modal */}
      <ComingSoonModal
        isOpen={openWaitlistModal}
        onClose={() => setOpenWaitlistModal(false)}
      />
      <SocialsComingSoonModal
        isOpen={isSocialModalOpen}
        onOpenChange={onSocialModalChange}
      />
    </div>
  );
};

export default Footer;
