import React from "react";
import FaqAccordion from "./FaqAccordion";

type Props = {};

const FAQ = (props: Props) => {
  const accordionList = [
    {
      title: "What is BuddyRide?",
      desc: "BuddyRide is a ride-sharing platform that connects passengers with drivers for safe, affordable, and convenient transportation.",
    },
    {
      title: "How do I book a ride?",
      desc: "BuddyRide is a ride-sharing platform that connects passengers with drivers for safe, affordable, and convenient transportation.",
    },
    {
      title: "What payment methods does BuddyRide accept?",
      desc: "BuddyRide is a ride-sharing platform that connects passengers with drivers for safe, affordable, and convenient transportation.",
    },
    {
      title: "Is BuddyRide safe?",
      desc: "BuddyRide is a ride-sharing platform that connects passengers with drivers for safe, affordable, and convenient transportation.",
    },
    {
      title: "Can I schedule a ride in advance?",
      desc: "BuddyRide is a ride-sharing platform that connects passengers with drivers for safe, affordable, and convenient transportation.",
    },
    {
      title: "How does BuddyRide ensure fair pricing?",
      desc: "BuddyRide is a ride-sharing platform that connects passengers with drivers for safe, affordable, and convenient transportation.",
    },
    {
      title: "What happens if I cancel a ride?",
      desc: "BuddyRide is a ride-sharing platform that connects passengers with drivers for safe, affordable, and convenient transportation.",
    },
  ];
  return (
    <div className="bg-[#F3F5F7] w-screen sm:p-20 p-5">
      <div className="flex text-center justify-center my-10 items-center flex-col gap-4">
        <p className="text-black/30 font-semibold text-xl">Have Questions for us?</p>
        <h1 className="font-black text-5xl text-primary">FAQs</h1>
        <p className="text-lg max-w-2xl font-semibold">
          Gain insights and expand your understanding of BuddyRide by finding
          answers to all your questions.
        </p>
      </div>
      <div>
        <FaqAccordion items={accordionList} />
      </div>
    </div>
  );
};

export default FAQ;
