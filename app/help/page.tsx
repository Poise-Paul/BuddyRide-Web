"use client";

import { useState } from "react";
import {
  Search,
  Car,
  Wallet,
  ShieldCheck,
  UserCircle,
  LifeBuoy,
  AlertCircle,
  ChevronRight,
  Mail,
  Instagram,
  Twitter,
  Phone,
} from "lucide-react";
import { Input } from "@heroui/input";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import Image from "next/image";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Getting Started",
      icon: <Car size={32} className="text-primary" />,
      topics: ["How to book a ride", "Vehicle types", "Price estimates"],
    },
    {
      title: "Payments & Wallet",
      icon: <Wallet size={32} className="text-primary" />,
      topics: ["Funding your wallet", "PayPal in the UK", "Refund status"],
    },
    {
      title: "Safety & Security",
      icon: <ShieldCheck size={32} className="text-primary" />,
      topics: [
        "Verification process",
        "Sharing live location",
        "Emergency button",
      ],
    },
    {
      title: "Account Support",
      icon: <UserCircle size={32} className="text-primary" />,
      topics: ["Change phone number", "Password reset", "Delete account"],
    },
  ];

  return (
    <div className="bg-[#F3F5F7] min-h-screen">
      {/* 1. Hero Search Section */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-NeuePlakBold mb-6">
            How can we help?
          </h1>
          <div className="max-w-2xl mx-auto">
            <Input
              isClearable
              size="lg"
              placeholder="Search for articles (e.g. 'refund', 'safety')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClear={() => setSearchQuery("")}
              startContent={<Search className="text-gray-400" />}
              classNames={{
                inputWrapper:
                  "h-16 shadow-xl border-2 focus-within:!border-primary rounded-2xl bg-white",
                input: "text-lg font-NeuePlakRegular",
              }}
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-16 px-6">
        {/* 2. Urgent Support Alert */}
        <div className="mb-12 p-4 bg-primary/5 border border-primary/20 rounded-2xl flex items-center gap-4">
          <div className="bg-primary text-white p-2 rounded-full">
            <AlertCircle size={20} />
          </div>
          <p className="font-NeuePlakRegular text-sm md:text-base">
            <strong>Active Trip?</strong> For immediate assistance during a
            ride, please use the <strong>Safety Toolkit</strong> inside your
            app.
          </p>
        </div>

        {/* 3. Category Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Card
              key={i}
              isPressable
              className="border-none shadow-sm hover:shadow-md transition-shadow"
            >
              <CardBody className="p-8 flex flex-col items-center text-center">
                <div className="mb-4 bg-primary/10 p-4 rounded-2xl">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-NeuePlakBold mb-4">{cat.title}</h3>
                <ul className="text-sm text-gray-500 space-y-2 font-NeuePlakRegular">
                  {cat.topics.map((topic, j) => (
                    <li
                      key={j}
                      className="hover:text-primary cursor-pointer flex items-center justify-center gap-1"
                    >
                      {topic} <ChevronRight size={12} />
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* 4. Support Escalation Section */}
        <section className="mt-24 text-center">
          <div className="bg-white rounded-[40px] p-12 shadow-sm border border-gray-100">
            <LifeBuoy size={48} className="mx-auto text-primary mb-6" />
            <h2 className="text-3xl font-NeuePlakBold mb-4">
              Still need assistance?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8 font-NeuePlakRegular">
              Our support team is available 24/7 for Nigeria and UK users. We
              typically respond within 12 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-primary text-white font-NeuePlakBold h-14 px-10"
                radius="full"
                onPress={() =>
                  (window.location.href = "mailto:support@buddyridenow.com")
                }
              >
                Email Support
              </Button>
              <Button
                variant="bordered"
                className="border-primary text-primary font-NeuePlakBold h-14 px-10"
                radius="full"
                onPress={() => (window.location.href = "tel:+447359592718")}
              >
                Call Support
              </Button>
            </div>
          </div>
        </section>

        {/* --- Support Channels Section --- */}
        <section className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-NeuePlakBold">Our Support Channels</h2>
            <p className="text-gray-500 font-NeuePlakRegular mt-2">
              Choose the most convenient way to reach us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Nigeria Support */}
            <Card className="border-none shadow-sm p-4">
              <CardBody>
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    height={50}
                    width={50}
                    alt="nigerian-flag"
                    src="/nigerian-flag.avif"
                  />
                  {/* Nigeria Flag Colors */}
                  <h3 className="font-NeuePlakBold text-xl">Nigeria Support</h3>
                </div>

                <div className="space-y-4">
                  <a
                    href="tel:+234XXXXXXXXXX"
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">
                        Call/WhatsApp
                      </p>
                      <p className="font-NeuePlakSemibold text-lg">
                        +234 (0) XXX XXX XXXX
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:support.ng@buddyridenow.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">
                        Email Support
                      </p>
                      <p className="font-NeuePlakSemibold text-lg">
                        support@buddyridenow.com
                      </p>
                    </div>
                  </a>
                </div>
              </CardBody>
            </Card>

            {/* UK Support */}
            <Card className="border-none shadow-sm p-4">
              <CardBody>
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    height={50}
                    width={50}
                    alt="nigerian-flag"
                    src="/uk-flag.avif"
                  />
                  <h3 className="font-NeuePlakBold text-xl">UK Support</h3>
                </div>

                <div className="space-y-4">
                  <a
                    href="tel:+447359592718"
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">
                        Call Support
                      </p>
                      <p className="font-NeuePlakSemibold text-lg">
                        +44 7359 592718
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:support.uk@buddyridenow.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">
                        Email Support
                      </p>
                      <p className="font-NeuePlakSemibold text-lg">
                        support@buddyridenow.com
                      </p>
                    </div>
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* General Social Support */}
          <div className="mt-8 flex justify-center gap-6">
            <Button
              variant="light"
              startContent={<Instagram size={20} />}
              className="font-NeuePlakSemibold"
            >
              @BuddyRide
            </Button>
            <Button
              variant="light"
              startContent={<Twitter size={20} />}
              className="font-NeuePlakSemibold"
            >
              @BuddyRideHQ
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpCenter;
