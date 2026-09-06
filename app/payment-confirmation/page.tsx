"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { CheckCircle2, Home, Smartphone, ShieldCheck, Mail } from "lucide-react";

function formatAmount(amount: string | null, currency: string | null) {
  if (!amount) return null;

  const numeric = Number(amount);

  if (Number.isNaN(numeric)) return null;

  // Stripe passes the amount in the smallest currency unit (e.g. cents/kobo).
  const value = numeric >= 1000 ? numeric / 100 : numeric;

  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: (currency || "GBP").toUpperCase(),
    }).format(value);
  } catch {
    return `${value}`;
  }
}

function PaymentConfirmationContent() {
  const params = useSearchParams();
  const [showApp, setShowApp] = useState(false);

  const reference =
    params.get("reference") ||
    params.get("session_id") ||
    params.get("payment_intent") ||
    params.get("ref");
  const amount = formatAmount(params.get("amount"), params.get("currency"));

  useEffect(() => {
    if (typeof navigator === "undefined") return;

    const ua = navigator.userAgent.toLowerCase();

    setShowApp(/iphone|ipad|ipod|android/.test(ua));
  }, []);

  const openApp = () => {
    const ua = navigator.userAgent.toLowerCase();

    if (/android/.test(ua)) {
      window.location.href =
        "intent://open#Intent;scheme=buddyride;package=com.elonpaul.buddyrideapp;end";
    } else {
      window.location.href = "buddyride://open";
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center">
      <Card className="w-full border-none bg-white shadow-sm">
        <CardBody className="flex flex-col items-center gap-6 p-8 md:p-12">
          {/* Brand */}
          <Image
            priority
            alt="BuddyRide"
            className="h-8 w-auto"
            height={32}
            src="/Primary-Logo.svg"
            width={140}
          />

          {/* Success mark */}
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-24 w-24 animate-ping rounded-full bg-green-500/20" />
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-green-500/10">
              <CheckCircle2
                className="text-green-600"
                size={56}
                strokeWidth={2.2}
              />
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="font-NeuePlakBold text-3xl md:text-4xl">
              Payment Successful
            </h1>
            <p className="mx-auto max-w-md font-NeuePlakRegular text-gray-500">
              Your payment has been processed securely. A confirmation and
              receipt have been sent to your email, and your BuddyRide balance
              will update shortly.
            </p>
          </div>

          {(amount || reference) && (
            <div className="w-full rounded-2xl bg-[#F3F5F7] p-5 text-left">
              {amount && (
                <div className="flex items-center justify-between py-1.5">
                  <span className="font-NeuePlakRegular text-sm text-gray-500">
                    Amount paid
                  </span>
                  <span className="font-NeuePlakSemibold text-base">
                    {amount}
                  </span>
                </div>
              )}
              {reference && (
                <div className="flex items-center justify-between gap-4 py-1.5">
                  <span className="font-NeuePlakRegular text-sm text-gray-500">
                    Reference
                  </span>
                  <span className="truncate font-NeuePlakSemibold text-base">
                    {reference}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between py-1.5">
                <span className="font-NeuePlakRegular text-sm text-gray-500">
                  Status
                </span>
                <span className="font-NeuePlakSemibold text-sm text-green-600">
                  Paid
                </span>
              </div>
            </div>
          )}

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
            {showApp && (
              <Button
                className="h-14 bg-primary px-8 font-NeuePlakBold text-white"
                radius="full"
                startContent={<Smartphone size={18} />}
                onPress={openApp}
              >
                Return to BuddyRide App
              </Button>
            )}
            <Button
              as={Link}
              className="h-14 border-primary px-8 font-NeuePlakBold text-primary"
              href="/"
              radius="full"
              startContent={<Home size={18} />}
              variant="bordered"
            >
              Back to Home
            </Button>
          </div>

          <Divider className="my-1" />

          <div className="flex items-center gap-2 font-NeuePlakRegular text-xs text-gray-400">
            <ShieldCheck size={14} />
            <span>Payments are processed securely via Stripe.</span>
          </div>

          <a
            className="flex items-center gap-2 font-NeuePlakSemibold text-sm text-primary"
            href="mailto:support@buddyridenow.com"
          >
            <Mail size={16} />
            Need help with this payment?
          </a>
        </CardBody>
      </Card>
    </div>
  );
}

export default function PaymentConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 font-NeuePlakRegular text-gray-400">
          Loading your confirmation…
        </div>
      }
    >
      <PaymentConfirmationContent />
    </Suspense>
  );
}
