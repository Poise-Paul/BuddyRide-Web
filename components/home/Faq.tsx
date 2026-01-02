import React from "react";
import FaqAccordion from "./FaqAccordion";

type Props = {
  filteredList?: any;
};

export const accordionList = [
  {
    quest: "What is BuddyRide?",
    ans: "BuddyRide is a community-driven ride-sharing platform available in Nigeria and the UK. We connect drivers with empty seats to passengers looking for affordable, convenient travel—whether for daily commutes or long-distance journeys.",
  },
  {
    quest: "How does BuddyRide work?",
    ans: "It's simple: Request → Match → Ride.\n\n• **Drivers** post a ride with their destination, time, and available seats.\n• **Passengers** search for rides, send a request to join, and pay through the platform once accepted.",
  },
  {
    quest: "How do I book a ride?",
    ans: "1. Open the app and search by origin, destination, and date.\n2. Browse the list or check 'Rides Close to Me'.\n3. Tap 'Join Ride' on the option that suits your schedule.\n4. Once the driver accepts, your spot is confirmed!",
  },
  {
    quest: "What payment methods do you accept?",
    ans: [
      {
        label: "Nigeria:",
        value: "use the In-App Wallet (fund via bank transfer/card) or PayPal.",
      },
      { label: "UK:", value: "Pay directly via your PayPal wallet." },
    ],
    intro: "We support secure payments tailored to your region:\n\n",
    outro:
      "\n\nAll payments are held securely by the platform until the ride is complete.",
  },
  {
    quest: "What currencies are supported?",
    ans: "We currently process payments in **Nigerian Naira (NGN)** and **British Pounds (GBP)** depending on your region.",
  },
  {
    quest: "How is pricing determined?",
    ans: "We ensure fair pricing for everyone. While the app calculates a recommended fare based on distance, time, and base costs, drivers ultimately set the price for their seats. This ensures rates remain competitive and often cheaper than solo travel.",
  },
  {
    quest: "Is BuddyRide safe?",
    ans: "Safety is our top priority. We use a multi-step verification process:\n1. **Account Verification:** Email verification via OTP upon sign-up.\n2. **Identity Check:** Biometric verification for drivers and passengers.\n3. **Cashless:** All payments are handled in-app to avoid cash-on-spot issues.",
  },
  {
    quest: "Can I schedule a ride in advance?",
    ans: "Yes! BuddyRide is designed for planned travel. You can browse upcoming rides days or weeks in advance, making it perfect for airport transfers or inter-city trips.",
  },
  {
    quest: "How do I create an account?",
    ans: "Download the BuddyRide app or visit our website. Click 'Sign Up', choose whether to join as a Driver or Passenger (or both!), and follow the prompts. We will send a one-time password (OTP) to your email to verify your account immediately.",
  },
  {
    quest: "What happens if I need to cancel?",
    ans: "You can cancel via the app. However, we ask that you do so as early as possible to avoid inconveniencing the driver or other passengers. Please check our specific Cancellation Policy in the app for details on fees or refunds.",
  },
  {
    quest: "Who can drive for BuddyRide?",
    ans: "Drivers must have a valid driving licence, a road-legal vehicle (with valid MOT in the UK) if you reside in the UK, and insurance. You must be 18+ and pass our verification checks.",
  },
  {
    quest: "I have an issue. How do I contact support?",
    ans: "We are here to help! You can reach us via the 'Contact' form in the app or email us directly at support@buddyridenow.com.",
  },
];

const FAQ = ({ filteredList }: Props) => {
  // const accordionList = [
  //   {
  //     quest: "What is BuddyRide?",
  //     ans: "BuddyRide is a community-driven ride-sharing platform available in Nigeria and the UK. We connect drivers with empty seats to passengers looking for affordable, convenient travel—whether for daily commutes or long-distance journeys.",
  //   },
  //   {
  //     quest: "How does BuddyRide work?",
  //     ans: "It's simple: Request → Match → Ride.\n\n• **Drivers** post a ride with their destination, time, and available seats.\n• **Passengers** search for rides, send a request to join, and pay through the platform once accepted.",
  //   },
  //   {
  //     quest: "How do I book a ride?",
  //     ans: "1. Open the app and search by origin, destination, and date.\n2. Browse the list or check 'Rides Close to Me'.\n3. Tap 'Join Ride' on the option that suits your schedule.\n4. Once the driver accepts, your spot is confirmed!",
  //   },
  //   {
  //     quest: "What payment methods do you accept?",
  //     ans: [
  //       {
  //         label: "Nigeria:",
  //         value:
  //           "use the In-App Wallet (fund via bank transfer/card) or PayPal.",
  //       },
  //       { label: "UK:", value: "Pay directly via your PayPal wallet." },
  //     ],
  //     intro: "We support secure payments tailored to your region:\n\n",
  //     outro:
  //       "\n\nAll payments are held securely by the platform until the ride is complete.",
  //   },
  //   {
  //     quest: "What currencies are supported?",
  //     ans: "We currently process payments in **Nigerian Naira (NGN)** and **British Pounds (GBP)** depending on your region.",
  //   },
  //   {
  //     quest: "How is pricing determined?",
  //     ans: "We ensure fair pricing for everyone. While the app calculates a recommended fare based on distance, time, and base costs, drivers ultimately set the price for their seats. This ensures rates remain competitive and often cheaper than solo travel.",
  //   },
  //   {
  //     quest: "Is BuddyRide safe?",
  //     ans: "Safety is our top priority. We use a multi-step verification process:\n1. **Account Verification:** Email verification via OTP upon sign-up.\n2. **Identity Check:** Biometric verification for drivers and passengers.\n3. **Cashless:** All payments are handled in-app to avoid cash-on-spot issues.",
  //   },
  //   {
  //     quest: "Can I schedule a ride in advance?",
  //     ans: "Yes! BuddyRide is designed for planned travel. You can browse upcoming rides days or weeks in advance, making it perfect for airport transfers or inter-city trips.",
  //   },
  //   {
  //     quest: "How do I create an account?",
  //     ans: "Download the BuddyRide app or visit our website. Click 'Sign Up', choose whether to join as a Driver or Passenger (or both!), and follow the prompts. We will send a one-time password (OTP) to your email to verify your account immediately.",
  //   },
  //   {
  //     quest: "What happens if I need to cancel?",
  //     ans: "You can cancel via the app. However, we ask that you do so as early as possible to avoid inconveniencing the driver or other passengers. Please check our specific Cancellation Policy in the app for details on fees or refunds.",
  //   },
  //   {
  //     quest: "Who can drive for BuddyRide?",
  //     ans: "Drivers must have a valid driving licence, a road-legal vehicle (with valid MOT in the UK) if you reside in the UK, and insurance. You must be 18+ and pass our verification checks.",
  //   },
  //   {
  //     quest: "I have an issue. How do I contact support?",
  //     ans: "We are here to help! You can reach us via the 'Contact' form in the app or email us directly at support@buddyridenow.com.",
  //   },
  // ];
  return (
    <div className="bg-[#F3F5F7] w-screen sm:p-20 p-5">
      <div className="flex text-center justify-center my-10 items-center flex-col gap-4">
        <p className="text-black/30 font-NeuePlakExtendedSemiBold text-xl">
          Have Questions for us?
        </p>
        <h1 className="font-NeuePlakExtendedBlack text-5xl text-primary">FAQs</h1>
        <p className="text-lg max-w-2xl font-semibold">
          Gain insights and expand your understanding of BuddyRide by finding
          answers to all your questions.
        </p>
      </div>
      <div>
        <FaqAccordion items={filteredList || accordionList} />
      </div>
    </div>
  );
};

export default FAQ;
