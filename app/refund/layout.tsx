export const metadata = {
  title: "Refunds & Cancellations | BuddyRide - Policy & Procedures",
  description:
    "The BuddyRide cancellation and refund policy for each country — cancellation fees, waiting time, refunds, disputes and driver withdrawals in the UK, Sweden, Nigeria and Canada.",
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
