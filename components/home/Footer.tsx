import { Image } from "@heroui/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";
import { Link } from "@heroui/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#F3F5F7] overflow-hidden relative mx-20 my-10 rounded-3xl flex gap-40 px-10 py-20">
      <div className="flex flex-col gap-3">
        <Image
          src="/Primary-Logo.svg"
          radius="none"
          alt="brand-logo"
          height={60}
          width={60}
        />
        <h1 className="font-semibold">BUDDYRIDE</h1>
        <div className="border-2 max-w-40 border-t-2 border-primary" />
        <p className="font-semibold text-[#5E6461]">
          The best sharing ride platform in London, UK
        </p>
        <div className="flex gap-3">
          <Link className="cursor-pointer">
            <div className="h-10 flex justify-center items-center bg-white rounded-full w-10">
              <FaFacebook className="text-primary text-2xl" />
            </div>
          </Link>
          <Link className="cursor-pointer">
            <div className="bg-white flex justify-center items-center w-10 h-10 rounded-full">
              <FaXTwitter className="text-primary text-2xl" />
            </div>
          </Link>
          <Link className="cursor-pointer">
            <div className="bg-white flex justify-center items-center h-10 w-10 rounded-full">
              <AiFillInstagram className="text-primary text-2xl" />
            </div>
          </Link>
          <Link className="cursor-pointer">
            <div className="bg-white h-10 flex justify-center items-center w-10 rounded-full">
              <FaLinkedin className="text-primary text-2xl" />
            </div>
          </Link>
          <Link className="cursor-pointer">
            <div className="bg-white flex justify-center items-center h-10 w-10 rounded-full">
              <AiOutlineTikTok className="text-primary text-2xl" />
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="flex gap-5 flex-col">
          <div>
            <h1 className="font-semibold">BuddyRide</h1>
            <ul className="text-[#5E6461] text-sm mt-4 font-medium flex flex-col gap-3">
              <li>Sign Up As Driver</li>
              <li>Sign Up As Passenger</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">Parent Company</h1>
            <p className="text-[#5E6461] font-medium">MALLKIS LTD</p>
          </div>
        </div>
        <div className="">
          <h1 className="font-semibold">Useful Links</h1>
          <ul className="text-[#5E6461] text-sm mt-4 font-medium flex flex-col gap-3">
            <li>About Us</li>
            <li>FAQ</li>
            <li>Terms of service</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div className="">
          <h1 className="font-semibold">Safety</h1>
          <ul className="text-[#5E6461] text-sm mt-4 font-medium flex flex-col gap-3">
            <li>Driver Safety</li>
            <li>Passenger Safety</li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-semibold">Address</h1>
          <p className="text-[#5E6461] text-sm mt-4 font-medium flex flex-col gap-3">
            1000 North Circular Road, London Borough of Brent, NW2 7FJ, United
            Kingdom
          </p>
        </div>
      </div>

      {/* Secondary Color */}
      <div className="h-60 w-60 rounded-full -bottom-24 -right-14 bg-secondary absolute" />
    </div>
  );
};

export default Footer;
