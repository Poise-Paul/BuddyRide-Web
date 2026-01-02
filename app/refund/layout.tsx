export const metadata = {
  title: "Refunds & Cancellations | BuddyRide - Policy & Procedures",
  description:
    "Understand the BuddyRide refund and cancellation policy. Learn about booking updates, refund eligibility, and cancellation fees for users in Nigeria and the UK.",
  keywords: [
    "BuddyRide refund policy",
    "cancel ride-share booking",
    "ride-sharing refunds Nigeria",
    "UK carpooling cancellation",
    "booking refund rules",
  ],
};
export default function RefundsAndCancellationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center w-full justify-center">{children}</div>
    </section>
  );
}
