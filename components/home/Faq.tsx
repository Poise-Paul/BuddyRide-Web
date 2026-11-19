import React from "react";
import FaqAccordion from "./FaqAccordion";

type Props = {
  filteredList?: any;
};

// Kept in step with the app's FAQ (BuddyRide-Mobile i18n faqScreen.items).
export const accordionList = [
  {
    quest: "What is BuddyRide?",
    ans: "BuddyRide is a community-driven ride platform available in the UK, Sweden, Nigeria and Canada. We connect drivers with passengers looking for affordable, convenient travel — whether for daily commutes or long-distance journeys. In the UK and Sweden, you request an **on-demand ride** — private, or **shared** with other passengers going your way — and agree a price with a nearby driver; in Nigeria and Canada, you **join carpools** posted by drivers and split the cost.",
  },
  {
    quest: "Which countries is BuddyRide available in?",
    ans: [
      { label: "UK and Sweden:", value: "on-demand rides — request a private or shared ride when you need it." },
      { label: "Nigeria and Canada:", value: "carpool ride-sharing — join planned rides posted by drivers." },
    ],
    intro: "BuddyRide works in four countries:\n\n",
    outro: "\n\nThe app automatically shows you the right kind of ride for the country you sign up in.",
  },
  {
    quest: "Can I share a ride with other passengers in the UK or Sweden?",
    ans: "Yes! As well as private rides, BuddyRide offers **shared rides** in the UK and Sweden: you ride with other passengers heading the same way, so the trip costs less. Shared rides are fair to everyone — if a passenger cancels after another has been matched, only the cancelling passenger pays the cancellation fee, and a late passenger pays their own waiting charge.",
  },
  {
    quest: "How does BuddyRide work?",
    ans: "**On demand (UK and Sweden):** enter your pickup and destination, propose a price, and a nearby driver accepts it or sends a counter-offer. Pick the offer you like and you're on your way — on your own, or sharing the ride with other passengers heading the same way.\n\n**Carpool ride-sharing (Nigeria and Canada):** drivers post a ride with their destination, time and available seats. Passengers search for rides, send a request to join, and pay through the platform once accepted.",
  },
  {
    quest: "How do I book a ride?",
    ans: "**In the UK and Sweden:**\n1. Enter your pickup, any stops, and your destination.\n2. Propose a price for the trip.\n3. Choose a driver offer you like — your ride is confirmed when a driver accepts.\n\n**In Nigeria and Canada:**\n1. Search by origin, destination and date, or check 'Rides Close to Me'.\n2. Tap 'Join Ride' on the option that suits your schedule.\n3. Once the driver accepts, your spot is confirmed!",
  },
  {
    quest: "What payment methods do you accept?",
    ans: [
      { label: "UK, Sweden and Canada:", value: "pay by card, securely through Stripe." },
      { label: "Nigeria:", value: "use the in-app wallet, funded by bank transfer or card." },
    ],
    intro: "We support secure payments tailored to your region:\n\n",
    outro: "\n\nAll payments are held securely by the platform until the ride is complete.",
  },
  {
    quest: "What currencies are supported?",
    ans: "We process payments in **British Pounds (GBP)**, **Swedish Krona (SEK)**, **Nigerian Naira (NGN)** and **Canadian Dollars (CAD)**, depending on your region.",
  },
  {
    quest: "How is pricing determined?",
    ans: "We ensure fair pricing for everyone. In the UK and Sweden, you propose a price and the driver can accept it or send a counter-offer — the price agreed in the app is what you pay. In Nigeria and Canada, the app suggests a fare based on distance, time and base costs, and drivers set the price for their seats. This keeps rates competitive and often cheaper than solo travel.",
  },
  {
    quest: "Is BuddyRide safe?",
    ans: "Safety is our top priority:\n1. **Account Verification:** Email verification via OTP upon sign-up.\n2. **Identity Check:** Biometric verification for drivers and passengers.\n3. **Cashless:** All payments are handled in-app to avoid cash-on-spot issues.\n4. **Live Tracking:** Share your live trip with family or friends so they can follow your journey in real time.",
  },
  {
    quest: "Can I share my live location during a ride?",
    ans: "Yes! Tap the **Share Trip** icon on your active ride screen to generate a live tracking link, then send it to family or friends however you like. They can follow your trip in real time on a web page — no app download or BuddyRide account needed. The link stops working once the ride is over.",
  },
  {
    quest: "Can I schedule a ride in advance?",
    ans: "In Nigeria and Canada, yes — you can browse upcoming carpools days or weeks in advance, which is perfect for airport transfers or inter-city trips. In the UK and Sweden, rides are on demand: request one when you're ready to go.",
  },
  {
    quest: "How do I create an account?",
    ans: "Download the BuddyRide app, choose your country, then tap 'Sign Up' and choose whether to join as a Driver or Passenger. We will send a one-time password (OTP) to your email to verify your account immediately.",
  },
  {
    quest: "What happens if I need to cancel?",
    ans: "You can cancel in the app — please do so as early as possible. Fees depend on your country and how far the trip has got, and the app always shows any fee before you confirm. See our **Cancellation & Refund Policy** for the details for your country.",
  },
  {
    quest: "How do refunds work?",
    ans: "Refunds are made automatically when a driver cancels, when we verify misconduct, or when a technical issue disrupts the booking. They go back to your original payment method and may take 3–7 business days to appear. If you think a charge was wrong, ask for a review within **24 hours** of the ride.",
  },
  {
    quest: "Who can drive for BuddyRide?",
    ans: "Drivers must have a valid driving licence recognised in the country where they drive, insurance, and a roadworthy vehicle that meets local requirements — e.g. a valid MOT in the UK, a valid inspection (besiktning) in Sweden, a valid roadworthiness certificate in Nigeria, or your province's vehicle safety requirements in Canada. You must be 18+ and pass our verification checks.",
  },
  {
    quest: "I have an issue. How do I contact support?",
    ans: "We are here to help! Use **live chat** on this website or in the app (Help → Chat with us), or email support@buddyridenow.com. For a problem with a specific trip, open it in the app and tap **Chat** or **Email** under 'Need help with this trip?' — we'll get the trip's details automatically.",
  },
];

const FAQ = ({ filteredList }: Props) => {
 
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
