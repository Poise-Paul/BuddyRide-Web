"use client";

import { Calendar, AlertCircle, Clock, Undo2, ShieldAlert } from "lucide-react";
import { Card, CardBody } from "@heroui/card";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Divider } from "@heroui/divider";

const RefundPolicy = () => {
  return (
    <div className="bg-[#F3F5F7] min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* --- Header Section --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-NeuePlakBold text-[#CD1396] mb-4">
            Cancellation & Refund Policy
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-500 font-NeuePlakSemibold">
            <Calendar size={18} />
            <span>Last Updated: December 2025</span>
          </div>
          <p className="mt-6 text-gray-600 font-NeuePlakRegular text-lg max-w-2xl mx-auto">
            This policy outlines how cancellations, penalties, and refunds work
            for all BuddyRide journeys across Nigeria and the UK.
          </p>
        </div>

        {/* --- Quick Summary Cards --- */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <Card className="border-none shadow-sm bg-green-50">
            <CardBody className="flex flex-row items-center gap-4">
              <Clock className="text-green-600" size={24} />
              <div>
                <p className="font-NeuePlakBold text-green-800">Free Window</p>
                <p className="text-sm text-green-700">
                  Cancel 30+ mins before start
                </p>
              </div>
            </CardBody>
          </Card>
          <Card className="border-none shadow-sm bg-red-50">
            <CardBody className="flex flex-row items-center gap-4">
              <AlertCircle className="text-red-600" size={24} />
              <div>
                <p className="font-NeuePlakBold text-red-800">Late Fee</p>
                <p className="text-sm text-red-700">
                  45% charge for late cancels
                </p>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* --- Policy Content --- */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
          <Accordion
            variant="splitted"
            className="px-0"
            selectionMode="multiple"
            defaultExpandedKeys={["1"]}
          >
            {/* Section 1: Passenger Cancellations */}
            <AccordionItem
              key="1"
              aria-label="Passenger Cancellations"
              title={
                <span className="font-NeuePlakBold text-xl text-primary">
                  1. Passenger Cancellations
                </span>
              }
              startContent={<Undo2 className="text-primary" size={20} />}
              className="mb-4 border border-gray-100 shadow-none rounded-2xl"
            >
              <div className="space-y-6 pb-4 text-left font-NeuePlakRegular text-gray-600">
                <div>
                  <h4 className="font-NeuePlakBold text-green-600 text-lg">
                    1.1 Free Cancellation Window
                  </h4>
                  <p>
                    Passengers may cancel free of charge if they cancel{" "}
                    <strong>at least 30 minutes before</strong> the start of the
                    journey.
                  </p>
                </div>
                <Divider />
                <div>
                  <h4 className="font-NeuePlakBold text-orange-600 text-lg">
                    1.2 Charged Cancellations
                  </h4>
                  <p className="mb-2">Fees apply in the following scenarios:</p>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>
                      <strong>Late Cancellation:</strong> If you cancel within
                      30 minutes of start time, a <strong>45% charge</strong>{" "}
                      applies.
                    </li>
                    <li>
                      <strong>Last Minute Booking:</strong> If you book a ride
                      starting in &lt; 30 mins, and cancel after 10 mins of
                      booking, a <strong>45% charge</strong> applies.
                    </li>
                  </ul>
                </div>
                <Divider />
                <div>
                  <h4 className="font-NeuePlakBold text-red-600 text-lg">
                    1.3 No-Shows
                  </h4>
                  <p>
                    If a passenger does not show up: <strong>No refund</strong>{" "}
                    will be issued. Repeated no-shows may result in account
                    warnings or suspension.
                  </p>
                </div>
              </div>
            </AccordionItem>

            {/* Section 2: Driver Cancellations */}
            <AccordionItem
              key="2"
              aria-label="Driver Cancellations"
              title={
                <span className="font-NeuePlakBold text-xl text-primary">
                  2. Driver Cancellations
                </span>
              }
              startContent={<ShieldAlert className="text-primary" size={20} />}
              className="mb-4 border border-gray-100 shadow-none rounded-2xl"
            >
              <div className="space-y-4 pb-4 font-NeuePlakRegular text-gray-600">
                <p>
                  Drivers are expected to honor scheduled rides. If a driver
                  cancels, passengers receive a <strong>full refund</strong>.
                </p>
                <div className="bg-gray-50 text-left p-6 rounded-2xl border border-gray-200">
                  <h4 className="font-NeuePlakBold text-lg mb-4 text-black">
                    Driver Penalties:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex gap-2">
                      <span className="font-bold text-black">•</span>
                      <span>
                        <strong>Early Cancellation:</strong> No penalty if
                        cancelled 1+ hour before start.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-red-600">•</span>
                      <span>
                        <strong className="text-red-600">
                          Late Cancellation:
                        </strong>{" "}
                        &lt; 1 hour before start results in a{" "}
                        <strong>45% penalty</strong> deducted from earnings.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-red-600">•</span>
                      <span>
                        <strong className="text-red-600">
                          Short-Notice Rides:
                        </strong>{" "}
                        For rides created to start within the hour, you have a{" "}
                        <strong>20-minute grace period</strong> to cancel. After
                        20 mins, a 45% penalty applies.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

            {/* Section 3: Refunds & Disputes */}
            <AccordionItem
              key="3"
              aria-label="Refunds & Disputes"
              title={
                <span className="font-NeuePlakBold text-xl text-primary">
                  3. Refunds & Disputes
                </span>
              }
              className="mb-4 border border-gray-100 shadow-none rounded-2xl"
            >
              <div className="space-y-6 text-left pb-4 font-NeuePlakRegular text-gray-600">
                <div>
                  <h4 className="font-NeuePlakBold text-black">
                    Refund Process
                  </h4>
                  <p>
                    Refunds are automatically triggered if a driver cancels,
                    misconduct is verified, or technical issues occur.
                    Processing takes <strong>3–7 business days</strong>.
                  </p>
                </div>
                <div>
                  <h4 className="font-NeuePlakBold text-black">
                    Dispute Resolution
                  </h4>
                  <p>
                    Request a review within <strong>24 hours</strong> of the
                    ride. We investigate using GPS data and chat logs to ensure
                    a fair outcome.
                  </p>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>

        {/* --- Footer CTA --- */}
        <div className="mt-12 text-center bg-primary p-8 rounded-[32px] text-white">
          <h3 className="font-NeuePlakBold text-2xl mb-2">
            Need to contest a charge?
          </h3>
          <p className="font-NeuePlakRegular opacity-90 mb-6">
            Our support team is available 24/7 to review your trip details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@buddyridenow.com"
              className="bg-white text-primary px-8 py-3 rounded-full font-NeuePlakBold hover:bg-opacity-90 transition-all"
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
