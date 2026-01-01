"use client";

import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { ShieldCheck, Globe, Users, Leaf } from "lucide-react";
import Image from "next/image";
import ComingSoonModal from "@/components/Modals/WaitListModal";
import { useState } from "react";

const AboutPage = () => {
  const [openWaitlistModal, setOpenWaitlistModal] = useState(false);

  const values = [
    {
      title: "Safety First",
      desc: "Multi-step verification including biometrics and OTP checks for every user.",
      icon: <ShieldCheck className="text-primary" size={32} />,
    },
    {
      title: "Community Driven",
      desc: "Connecting the UK and Nigeria through shared journeys and shared stories.",
      icon: <Globe className="text-primary" size={32} />,
    },
    {
      title: "Inclusive Access",
      desc: "Affordable travel for everyone—from students to professionals.",
      icon: <Users className="text-primary" size={32} />,
    },
    {
      title: "Eco-Friendly",
      desc: "Reducing CO2 emissions by filling empty seats already on the road.",
      icon: <Leaf className="text-primary" size={32} />,
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-primary font-NeuePlakBold uppercase tracking-widest mb-4">
            Our Story
          </h4>
          <h1 className="text-4xl md:text-6xl font-bold font-NeuePlakBold text-black mb-6">
            Connecting People, <br /> One Seat at a Time.
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-NeuePlakRegular leading-relaxed">
            BuddyRide was born from a simple observation: thousands of cars
            travel with empty seats every day, while people look for affordable
            ways to commute. We turned that gap into a community.
          </p>
        </div>
      </section>

      {/* 2. Mission & Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl font-NeuePlakBold font-bold mb-6 text-black">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4 font-NeuePlakRegular text-lg">
              We are on a mission to revolutionize transportation across Nigeria
              and the UK. By making ride-sharing social and sustainable, we
              empower drivers to offset costs and provide passengers with
              premium, safe alternatives to traditional transport.
            </p>
            <p className="text-gray-600 font-NeuePlakRegular text-lg">
              Whether it's a daily commute in Lagos or a city-to-city trip in
              the UK, BuddyRide ensures you never have to travel alone or
              overpay for a seat.
            </p>
            <Button
              color="primary"
              onPress={() => setOpenWaitlistModal(true)}
              className="mt-8 font-NeuePlakBold h-12 px-8"
              radius="full"
            >
              Join the Movement
            </Button>
          </div>

          <div className="relative">
            <div className="bg-primary/10 rounded-3xl p-8 aspect-video flex items-center justify-center border-2 border-dashed border-primary/20">
              {/* Replace with a real image of the BuddyRide App or Community */}
              <Image
                alt="about-hero-image"
                className="object-cover rounded-2xl"
                height={320}
                src="/work-person-04.jpg"
                width={480}
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 bg-white shadow-xl p-4 rounded-2xl hidden md:block">
              <p className="text-black font-bold">100% Verified Users</p>
              <p className="text-gray-400 text-xs text-center">
                Security is our priority
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Values Grid */}
      <section className="py-20 bg-black text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-NeuePlakBold mb-4">
              Why BuddyRide?
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Card
                key={i}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
              >
                <CardBody className="p-8 flex flex-col items-center text-center">
                  <div className="mb-4 bg-white p-3 rounded-2xl">{v.icon}</div>
                  <h3 className="text-xl text-white font-NeuePlakBold mb-2">{v.title}</h3>
                  <p className="text-gray-400 font-NeuePlakRegular text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-NeuePlakBold text-black mb-8">
          Ready to share your next journey?
        </h2>
        <Button
          onPress={() => setOpenWaitlistModal(true)}
          className="bg-primary text-white font-NeuePlakBold text-lg h-14 px-12"
          radius="full"
          variant="shadow"
        >
          Download the App
        </Button>
      </section>

      {/* Modal Message */}
      <ComingSoonModal
        isOpen={openWaitlistModal}
        onClose={() => setOpenWaitlistModal(false)}
      />
    </div>
  );
};

export default AboutPage;
