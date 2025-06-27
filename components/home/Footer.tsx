import { Image } from "@heroui/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#F3F5F7] flex gap-5 rounded-4xl p-10">
      <div className="">
        <Image src="/Primary-Logo.svg" />
        <h1 className="font-semibold">BUDDYRIDE</h1>
        <div className="border-2 border-t-2 border-primary" />
        <p className="text-lg font-semibold text-[#5E6461]">
          The best sharing ride platform in London, UK
        </p>
        <div className="flex gap-3">
          <div className="h-10 flex justify-center items-center bg-white rounded-full w-10">
            <FaFacebook className="text-primary text-2xl" />
          </div>
          <div className="bg-white flex justify-center items-center w-10 h-10 rounded-full">
            <FaXTwitter className="text-primary text-2xl" />
          </div>
          <div className="bg-white flex justify-center items-center h-10 w-10 rounded-full">
            <AiFillInstagram className="text-primary text-2xl" />
          </div>
          <div className="bg-white h-10 flex justify-center items-center w-10 rounded-full">
            <FaLinkedin className="text-primary text-2xl" />
          </div>
          <div className="bg-white flex justify-center items-center h-10 w-10 rounded-full">
            <AiOutlineTikTok className="text-primary text-2xl" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="">
          <h1 className="font-semibold">BuddyRide</h1>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Footer;
