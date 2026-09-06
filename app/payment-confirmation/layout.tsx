export const metadata = {
  title: "Payment Successful | BuddyRide",
  description:
    "Your BuddyRide payment was completed successfully. Head back to the app to continue your journey.",
  keywords: [
    "BuddyRide payment",
    "payment successful",
    "Stripe payment BuddyRide",
    "ride payment confirmation",
    "BuddyRide checkout",
  ],
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaymentConfirmationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block w-full justify-center text-center">
        {children}
      </div>
    </section>
  );
}
