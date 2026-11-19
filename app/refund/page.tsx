"use client";

import { ReactNode, useState } from "react";
import {
  Calendar,
  AlertCircle,
  Clock,
  Undo2,
  ShieldAlert,
  Timer,
  RotateCcw,
  Scale,
  Wallet,
} from "lucide-react";
import { Card, CardBody } from "@heroui/card";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Divider } from "@heroui/divider";
import { COUNTRIES, SUPPORT_EMAIL } from "@/config/countries";
import { openLiveChat } from "@/utils/liveChat";

// Mirrors the app's Cancellation & Refund screen (BuddyRide-Mobile
// app/(driver)/CancellationAndRefunds.tsx): one cancellation policy per
// ride type and country, the same refunds/disputes everywhere, and the
// drivers' commission and withdrawal terms.

type PolicyKey = "uk" | "sweden" | "carpool";

const TABS: { key: PolicyKey; label: string; sub: string }[] = [
  { key: "uk", label: "🇬🇧 United Kingdom", sub: "On-demand · private & shared" },
  { key: "sweden", label: "🇸🇪 Sweden", sub: "On-demand · private & shared" },
  { key: "carpool", label: "🇳🇬 Nigeria & 🇨🇦 Canada", sub: "Carpool ride-sharing" },
];

const itemClass = "mb-4 border border-gray-100 shadow-none rounded-2xl";
const bodyClass = "space-y-6 pb-4 text-left font-NeuePlakRegular text-gray-600";

const Title = ({ children }: { children: ReactNode }) => (
  <span className="font-NeuePlakBold text-xl text-primary">{children}</span>
);

const Rule = ({
  title,
  tone = "black",
  children,
}: {
  title: string;
  tone?: "green" | "orange" | "red" | "black";
  children: ReactNode;
}) => {
  const color = {
    green: "text-green-600",
    orange: "text-orange-600",
    red: "text-red-600",
    black: "text-black",
  }[tone];
  return (
    <div>
      <h4 className={`font-NeuePlakBold text-lg ${color}`}>{title}</h4>
      <div>{children}</div>
    </div>
  );
};

const Summary = ({
  free,
  fee,
}: {
  free: [string, string];
  fee: [string, string];
}) => (
  <div className="grid sm:grid-cols-2 gap-4 mb-10">
    <Card className="border-none shadow-sm bg-green-50">
      <CardBody className="flex flex-row items-center gap-4">
        <Clock className="text-green-600 shrink-0" size={24} />
        <div className="text-left">
          <p className="font-NeuePlakBold text-green-800">{free[0]}</p>
          <p className="text-sm text-green-700">{free[1]}</p>
        </div>
      </CardBody>
    </Card>
    <Card className="border-none shadow-sm bg-red-50">
      <CardBody className="flex flex-row items-center gap-4">
        <AlertCircle className="text-red-600 shrink-0" size={24} />
        <div className="text-left">
          <p className="font-NeuePlakBold text-red-800">{fee[0]}</p>
          <p className="text-sm text-red-700">{fee[1]}</p>
        </div>
      </CardBody>
    </Card>
  </div>
);

// ------------------------------------------------------------------ UK
const ukSections = [
  <AccordionItem
    key="cancel"
    aria-label="Cancellation Rules"
    title={<Title>1. Cancellation Rules</Title>}
    startContent={<Undo2 className="text-primary" size={20} />}
    className={itemClass}
  >
    <div className={bodyClass}>
      <Rule title="1.1 Before a Driver Accepts" tone="green">
        No cancellation fee.
      </Rule>
      <Divider />
      <Rule title="1.2 Within 2 Minutes of Driver Acceptance" tone="green">
        Free cancellation.
      </Rule>
      <Divider />
      <Rule title="1.3 Charged Cancellations" tone="orange">
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>After the 2-minute grace period:</strong> a{" "}
            <strong>£3 cancellation fee</strong> may apply.
          </li>
          <li>
            <strong>If the driver has already arrived:</strong> a{" "}
            <strong>£4 cancellation fee</strong> may apply.
          </li>
        </ul>
      </Rule>
      <Divider />
      <Rule title="1.4 Passenger No-Show" tone="red">
        After the driver waits <strong>10 minutes</strong>, the passenger may
        be charged a <strong>£5 no-show fee</strong>, which replaces any
        waiting charge.
      </Rule>
      <Divider />
      <Rule title="1.5 Driver Cancels" tone="green">
        <p>
          The passenger pays <strong>£0</strong> and can request another ride.
          There is also <strong>no passenger cancellation fee</strong> when:
        </p>
        <ul className="list-disc ml-5 space-y-1 mt-2">
          <li>
            the driver is significantly delayed, travelling in the wrong
            direction, or asks the passenger to cancel;
          </li>
          <li>the driver has a breakdown or emergency.</li>
        </ul>
      </Rule>
      <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
        <h4 className="font-NeuePlakBold text-lg mb-2 text-black">Shared Rides</h4>
        <p>
          Once another passenger has been matched, cancelling can disrupt the
          shared journey. <strong>Before</strong> another passenger is
          matched, normal cancellation rules apply. <strong>After</strong>{" "}
          another passenger has been matched, the applicable cancellation fee
          applies immediately.
        </p>
      </div>
      <Rule title="1.6 Repeated Cancellations">
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Passengers:</strong> excessive cancellations may result in
            warnings, temporary booking restrictions or an account review.
          </li>
          <li>
            <strong>Drivers:</strong> repeated avoidable cancellations may
            result in warnings, reduced trip opportunities, temporary
            suspension or an account review. A warning flag is raised once a
            driver&apos;s cancellation rate (cancellations ÷ accepted trips)
            reaches <strong>35%</strong>.
          </li>
        </ul>
      </Rule>
      <p>
        The driver is compensated after a passenger cancels, and the app always
        shows any applicable fee before you confirm a cancellation.
      </p>
      <p className="italic bg-primary/5 p-4 rounded-xl border border-primary/10">
        &ldquo;Cancellation fees help compensate drivers for time and travel
        already committed to your journey.&rdquo;
      </p>
    </div>
  </AccordionItem>,
  <AccordionItem
    key="waiting"
    aria-label="Waiting-Time Charges"
    title={<Title>2. Waiting-Time Charges</Title>}
    startContent={<Timer className="text-primary" size={20} />}
    className={itemClass}
  >
    <div className={bodyClass}>
      <ul className="list-disc ml-5 space-y-2">
        <li>
          A <strong>3-minute free grace period</strong> applies once the driver
          arrives — no charge.
        </li>
        <li>
          After 3 minutes, you pay <strong>£0.25 per additional minute</strong>
          , up to a maximum waiting charge of <strong>£5</strong>.
        </li>
        <li>
          After <strong>10 minutes</strong>, the driver may keep waiting or
          mark you as a no-show — the no-show fee then applies instead.
          You&apos;re never charged both.
        </li>
        <li>
          If the driver arrives before your ETA, the waiting clock starts at
          your original ETA, not when the driver arrives early.
        </li>
        <li>
          On shared rides, a late passenger bears their own waiting charge —
          other passengers aren&apos;t penalised.
        </li>
      </ul>
      <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-3">
        <h4 className="font-NeuePlakBold text-black">What you&apos;ll see</h4>
        <p>
          <strong>At 3 minutes:</strong> &ldquo;Your driver has been waiting
          for you. Waiting charges have now started at £0.25/minute.&rdquo;
        </p>
        <p>
          <strong>At 5 minutes:</strong> &ldquo;Your driver has been waiting
          for 5 minutes. £0.50 in waiting charges has been added.&rdquo;
        </p>
        <p>
          <strong>At 10 minutes:</strong> &ldquo;Your driver has been waiting
          for 10 minutes. £1.75 in waiting charges has been added.&rdquo;
        </p>
      </div>
      <p>Waiting charges compensate the driver for their additional waiting time.</p>
    </div>
  </AccordionItem>,
];

// -------------------------------------------------------------- Sweden
const swedenSections = [
  <AccordionItem
    key="cancel"
    aria-label="Cancellation & Waiting Policy"
    title={<Title>1. Cancellation & Waiting Policy</Title>}
    startContent={<Undo2 className="text-primary" size={20} />}
    className={itemClass}
  >
    <div className={bodyClass}>
      <Rule title="1.1 Before Driver Acceptance" tone="green">
        <strong>SEK 0</strong> cancellation fee.
      </Rule>
      <Divider />
      <Rule title="1.2 Within 2 Minutes of Driver Acceptance" tone="green">
        <strong>SEK 0</strong>.
      </Rule>
      <Divider />
      <Rule title="1.3 Charged Cancellations" tone="orange">
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>After 2 minutes:</strong> <strong>SEK 35</strong>{" "}
            cancellation fee.
          </li>
          <li>
            <strong>Driver has arrived + passenger cancels:</strong>{" "}
            <strong>SEK 40</strong>.
          </li>
        </ul>
      </Rule>
      <Divider />
      <Rule title="1.4 Passenger No-Show" tone="red">
        After <strong>5 minutes</strong>, a <strong>SEK 50 no-show fee</strong>{" "}
        applies.
      </Rule>
      <Divider />
      <Rule title="1.5 Driver Cancellation" tone="green">
        <strong>SEK 0</strong> to the passenger, and BuddyRide automatically
        searches for another driver. The same applies if the driver is
        significantly late or travelling in the wrong direction.
      </Rule>
      <Divider />
      <Rule title="Waiting Time">
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>3 minutes free</strong> after the driver arrives, then{" "}
            <strong>SEK 3/minute</strong>, capped at <strong>SEK 50</strong>.
          </li>
          <li>
            <strong>No double charging:</strong> you pay either the accumulated
            waiting charge or the no-show fee, never both.
          </li>
        </ul>
      </Rule>
      <Divider />
      <Rule title="1.6 Shared Rides">
        If one passenger cancels after another passenger has been matched, the
        cancelling passenger bears the applicable cancellation cost; remaining
        passengers are not penalised.
      </Rule>
      <p>Cancellation fees are always shown before you confirm a cancellation.</p>
      <p className="italic bg-primary/5 p-4 rounded-xl border border-primary/10">
        &ldquo;Fair cancellation. Fair waiting. No surprise charges.&rdquo;
      </p>
    </div>
  </AccordionItem>,
];

// ------------------------------------------------ Nigeria & Canada
const carpoolSections = [
  <AccordionItem
    key="cancel"
    aria-label="Passenger Cancellations"
    title={<Title>1. Passenger Cancellations</Title>}
    startContent={<Undo2 className="text-primary" size={20} />}
    className={itemClass}
  >
    <div className={bodyClass}>
      <Rule title="1.1 Free Cancellation Window" tone="green">
        Passengers may cancel free of charge if they cancel{" "}
        <strong>at least 30 minutes before</strong> the start of the journey.
      </Rule>
      <Divider />
      <Rule title="1.2 Charged Cancellations" tone="orange">
        <p className="mb-2">Fees apply in the following scenarios:</p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Late Cancellation:</strong> if you cancel within 30 minutes
            of the start time, a <strong>45% charge</strong> applies.
          </li>
          <li>
            <strong>Last-Minute Booking:</strong> if you book a ride starting in
            less than 30 minutes and cancel more than 10 minutes after booking,
            a <strong>45% charge</strong> applies.
          </li>
        </ul>
      </Rule>
      <Divider />
      <Rule title="1.3 No-Shows" tone="red">
        If a passenger does not show up at the pick-up point,{" "}
        <strong>no refund</strong> is issued. Repeated no-shows may result in
        account warnings.
      </Rule>
    </div>
  </AccordionItem>,
  <AccordionItem
    key="driver"
    aria-label="Driver Cancellations"
    title={<Title>2. Driver Cancellations</Title>}
    startContent={<ShieldAlert className="text-primary" size={20} />}
    className={itemClass}
  >
    <div className={bodyClass}>
      <p>
        Drivers are expected to honour scheduled rides. If a driver cancels,
        passengers receive a <strong>full refund</strong>.
      </p>
      <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
        <h4 className="font-NeuePlakBold text-lg mb-3 text-black">Driver Penalties</h4>
        <ul className="space-y-3">
          <li>
            <strong>Early Cancellation:</strong> no penalty if cancelled more
            than 1 hour before the ride starts.
          </li>
          <li>
            <strong className="text-red-600">Late Cancellation:</strong>{" "}
            cancelling less than 1 hour before the start time results in a{" "}
            <strong>45% penalty</strong> deducted from earnings.
          </li>
          <li>
            <strong className="text-red-600">Short-Notice Rides:</strong> for
            rides created to start within the hour, you have a{" "}
            <strong>20-minute grace period</strong> to cancel. After 20 minutes,
            a 45% penalty applies.
          </li>
          <li>
            <strong>Repeated Cancellations:</strong> frequent cancellations may
            result in account suspension or a lower driver rating.
          </li>
        </ul>
      </div>
    </div>
  </AccordionItem>,
];

// --------------------------------------- the same in every country
const sharedSections = (start: number) => [
  <AccordionItem
    key="refunds"
    aria-label="Refunds Process"
    title={<Title>{start}. Refunds Process</Title>}
    startContent={<RotateCcw className="text-primary" size={20} />}
    className={itemClass}
  >
    <div className={bodyClass}>
      <p>Refunds are automatically triggered when:</p>
      <ul className="list-disc ml-5 space-y-1">
        <li>A driver cancels the ride.</li>
        <li>The Platform verifies misconduct.</li>
        <li>Technical issues disrupt the booking.</li>
      </ul>
      <p className="italic text-gray-500">
        Note: Refunds are processed via the original payment method and may
        take <strong>3–7 business days</strong> to appear in your account.
      </p>
    </div>
  </AccordionItem>,
  <AccordionItem
    key="disputes"
    aria-label="Dispute Resolution"
    title={<Title>{start + 1}. Dispute Resolution</Title>}
    startContent={<Scale className="text-primary" size={20} />}
    className={itemClass}
  >
    <div className={bodyClass}>
      <p>
        If you believe a charge was made in error, you may request a refund
        review within <strong>24 hours</strong> after the ride. BuddyRide will
        investigate and make a final decision based on GPS data and chat logs.
      </p>
      <p>
        To request a review, open the trip in the app and tap{" "}
        <strong>Chat</strong> or <strong>Email</strong> under &ldquo;Need help
        with this trip?&rdquo; — the trip&apos;s details are sent to support
        automatically.
      </p>
    </div>
  </AccordionItem>,
  <AccordionItem
    key="drivers"
    aria-label="For Drivers: Commission & Withdrawals"
    title={<Title>{start + 2}. For Drivers: Commission & Withdrawals</Title>}
    startContent={<Wallet className="text-primary" size={20} />}
    className={itemClass}
  >
    <div className={bodyClass}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-black">
              <th className="py-2 pr-4 font-NeuePlakBold">Country</th>
              <th className="py-2 pr-4 font-NeuePlakBold">BuddyRide commission</th>
              <th className="py-2 pr-4 font-NeuePlakBold">Withdrawals</th>
              <th className="py-2 font-NeuePlakBold">Minimum withdrawal</th>
            </tr>
          </thead>
          <tbody>
            {COUNTRIES.map((c) => (
              <tr key={c.key} className="border-t border-gray-100">
                <td className="py-2 pr-4">
                  {c.flag} {c.name}
                </td>
                <td className="py-2 pr-4">{c.driverCommission} of each trip fare</td>
                <td className="py-2 pr-4">{c.withdrawalEvery}</td>
                <td className="py-2">{c.minimumWithdrawal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        BuddyRide covers withdrawal and transfer charges, so you receive the
        full amount you withdraw.
      </p>
    </div>
  </AccordionItem>,
];

const POLICIES: Record<
  PolicyKey,
  {
    intro: string;
    free: [string, string];
    fee: [string, string];
    sections: ReactNode[];
  }
> = {
  uk: {
    intro: "on-demand rides in the UK, private and shared",
    free: ["Free Window", "Free until 2 minutes after a driver accepts"],
    fee: ["Cancellation Fees", "£3 after 2 minutes · £4 once the driver arrives"],
    sections: [...ukSections, ...sharedSections(3)],
  },
  sweden: {
    intro: "on-demand rides in Sweden, private and shared",
    free: ["Free Window", "Free until 2 minutes after a driver accepts"],
    fee: ["Cancellation Fees", "SEK 35 after 2 minutes · SEK 40 once the driver arrives"],
    sections: [...swedenSections, ...sharedSections(2)],
  },
  carpool: {
    intro: "carpool ride-sharing journeys in Nigeria and Canada",
    free: ["Free Window", "Cancel 30+ minutes before the journey starts"],
    fee: ["Late Fee", "45% charge for late cancellations"],
    sections: [...carpoolSections, ...sharedSections(3)],
  },
};

const RefundPolicy = () => {
  const [active, setActive] = useState<PolicyKey>("uk");
  const policy = POLICIES[active];

  return (
    <div className="bg-[#F3F5F7] min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* --- Header Section --- */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-NeuePlakBold text-[#CD1396] mb-4">
            Cancellation & Refund Policy
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-500 font-NeuePlakSemibold">
            <Calendar size={18} />
            <span>Last Updated: November 2026</span>
          </div>
          <p className="mt-6 text-gray-600 font-NeuePlakRegular text-lg max-w-2xl mx-auto">
            How cancellations, waiting time, refunds and disputes work. The
            rules depend on where you ride — choose your country below.
          </p>
        </div>

        {/* --- Country tabs --- */}
        <div
          role="tablist"
          aria-label="Country"
          className="grid sm:grid-cols-3 gap-2 bg-white p-2 rounded-2xl shadow-sm mb-8"
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={active === tab.key}
              onClick={() => setActive(tab.key)}
              className={`rounded-xl px-4 py-3 text-left transition-colors ${
                active === tab.key ? "bg-primary text-white" : "hover:bg-[#F3F5F7]"
              }`}
            >
              <span className="block font-NeuePlakBold">{tab.label}</span>
              <span
                className={`block text-xs ${
                  active === tab.key ? "text-white/80" : "text-gray-500"
                }`}
              >
                {tab.sub}
              </span>
            </button>
          ))}
        </div>

        <p className="text-gray-600 font-NeuePlakRegular mb-6 text-center">
          This policy applies to all {policy.intro}.
        </p>

        <Summary free={policy.free} fee={policy.fee} />

        {/* --- Policy Content --- */}
        <div className="bg-white rounded-[32px] p-4 sm:p-8 shadow-sm border border-gray-100">
          <Accordion
            key={active}
            variant="splitted"
            className="px-0"
            selectionMode="multiple"
            defaultExpandedKeys={["cancel"]}
          >
            {policy.sections as any}
          </Accordion>
        </div>

        {/* --- Footer CTA --- */}
        <div className="mt-12 text-center bg-primary p-8 rounded-[32px] text-white">
          <h3 className="font-NeuePlakBold text-2xl mb-2">Need to contest a charge?</h3>
          <p className="font-NeuePlakRegular opacity-90 mb-6">
            Chat with our support team or email us, and we&apos;ll review your
            trip details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={openLiveChat}
              className="bg-white text-primary px-8 py-3 rounded-full font-NeuePlakBold hover:bg-opacity-90 transition-all"
            >
              Live Chat
            </button>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="border border-white text-white px-8 py-3 rounded-full font-NeuePlakBold hover:bg-white/10 transition-all"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
