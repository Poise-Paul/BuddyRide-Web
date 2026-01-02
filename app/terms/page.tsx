"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Calendar, Mail } from "lucide-react";

const TermsPage = () => {
  const termsGroups = [
    {
      title: "1. Terms of Use",
      content: (
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-NeuePlakBold font-bold text-black mb-1">
              1.1 Eligibility
            </p>
            <p>
              To use BuddyRide, you must be at least 18 years old, have a valid
              email and phone number, and provide accurate information.
            </p>
          </div>
          <div>
            <p className="font-NeuePlakBold font-bold text-black mb-1">
              1.2 Account Responsibilities
            </p>
            <p>
              You are responsible for keeping login details secure. BuddyRide
              may suspend accounts found in violation of these terms.
            </p>
          </div>
          <div>
            <p className="font-NeuePlakBold font-bold text-black mb-1">
              1.3 Service Description
            </p>
            <p>
              BuddyRide connects drivers with passengers. We do not own
              vehicles, employ drivers, or provide transportation directly.
              Drivers operate independently.
            </p>
          </div>
          <div>
            <p className="font-NeuePlakBold font-bold text-black mb-1">
              1.4 Payments & Refunds
            </p>
            <p>
              Payments are handled by secure providers. Drivers set their own
              fares. Refunds or cancellations follow our specific policy.
            </p>
          </div>
          <div>
            <p className="font-NeuePlakBold font-bold text-black mb-1">
              1.7 Liability
            </p>
            <p>
              BuddyRide is not responsible for accidents, injuries, or loss of
              belongings. Users participate at their own risk.
            </p>
          </div>
          <div>
            <p className="font-NeuePlakBold font-bold text-black mb-1">
              1.8 Prohibited Activities
            </p>
            <p>
              Illegal activities, harassment, or misusing payment systems will
              result in immediate removal from the platform.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2. User Conduct Rules",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            To maintain a safe community, all users must follow these standards:
          </p>
          <div>
            <p className="font-NeuePlakBold font-bold text-black mb-1">
              2.1 Respect & Communication
            </p>
            <p>
              Treat others with respect. Aggressive behaviour is not tolerated.
              Communicate clearly regarding pick-up points.
            </p>
          </div>
          <div>
            <p className="font-NeuePlakBold font-bold text-black mb-1">
              2.3 Reliability
            </p>
            <p>
              Drivers and passengers must be punctual. Repeated no-shows may
              lead to account suspension.
            </p>
          </div>
          <div>
            <p className="font-NeuePlakBold font-bold text-black mb-1">
              2.5 Alcohol & Drugs
            </p>
            <p>
              Zero tolerance for operating vehicles or attending rides under the
              influence of illegal substances.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "3. Safety Guidelines",
      content: (
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-NeuePlakBold font-bold text-black mb-1">
              3.1 For Drivers
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Hold a valid driving licence.</li>
              <li>Ensure vehicle is insured, taxed, and MOT-compliant (UK).</li>
              <li>Follow all traffic rules and speed limits.</li>
            </ul>
          </div>
          <div>
            <p className="font-NeuePlakBold font-bold text-black mb-1">
              3.2 For Passengers
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Wear seatbelts throughout the journey.</li>
              <li>Avoid distracting the driver.</li>
              <li>Notify BuddyRide if you feel unsafe.</li>
            </ul>
          </div>
          <div className="p-4 bg-red-50 rounded-xl border border-red-100">
            <p className="font-NeuePlakBold text-red-600 mb-1">
              3.3 Emergency Situations
            </p>
            <p className="text-sm">
              In case of emergencies, call{" "}
              <a href="tel:999" className="font-bold underline">
                999 (UK)
              </a>{" "}
              or{" "}
              <a href="tel:112" className="font-bold underline">
                112 (Nigeria)
              </a>{" "}
              immediately.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "4. Privacy & Updates",
      content:
        "BuddyRide handles all user data in accordance with its Privacy Policy. These terms may be updated from time to time. Continued use of the platform means you accept any revised policies.",
    },
    {
      title: "5. Acceptance of Terms",
      content:
        "By signing up and using BuddyRide, you acknowledge that you have read, understood, and agreed to these Terms of Use, Conduct Rules, and Safety Guidelines.",
    },
  ];

  return (
    <div className="bg-[#F3F5F7] min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-NeuePlakBold text-primary mb-4">
            Terms & Policy
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-500 font-NeuePlakBold">
            <Calendar size={18} />
            <span>Last Updated: December 2025</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
          <p className="mb-8 text-gray-700 font-NeuePlakRegular text-left text-lg leading-relaxed border-l-4 border-primary pl-4">
            By using{" "}
            <span className="font-semibold text-primary">BuddyRide</span> ("the
            platform"), you agree to follow these Terms of Use, Conduct Rules,
            and Safety Guidelines. Please read them carefully.
          </p>

          <Accordion variant="splitted" className="px-0">
            {termsGroups.map((group, index) => (
              <AccordionItem
                key={index}
                aria-label={group.title}
                title={
                  <span className="font-NeuePlakBold font-medium text-xl text-primary">
                    {group.title}
                  </span>
                }
                className="mb-4 border border-gray-100 shadow-none rounded-2xl"
              >
                <div className="font-NeuePlakRegular text-left text-gray-600 pb-4 leading-relaxed">
                  {group.content}
                </div>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Footer Contact */}
          <div className="mt-12 p-8 bg-slate-50 items-center justify-center rounded-[24px] border border-gray-100">
            <h4 className="font-NeuePlakBold font-semibold text-2xl mb-2">
              Questions?
            </h4>
            <p className="text-gray-600 font-NeuePlakRegular mb-4">
              If you have questions about these terms, contact us at:
            </p>
            <div className="text-center flex justify-center items-center mx-auto">
              <a
                href="mailto:support@buddyridenow.com"
                className="flex gap-2 items-center font-NeuePlakSemibold text-primary text-xl hover:underline"
              >
                <Mail size={24} />
                support@buddyridenow.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
