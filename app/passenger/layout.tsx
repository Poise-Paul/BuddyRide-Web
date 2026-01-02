export const metadata = {
  title: "Passenger Safety | BuddyRide - Your Security is Our Priority",
  description:
    "Discover how BuddyRide keeps you safe with vetted drivers, real-time trip tracking, and in-app emergency tools for every journey in Nigeria and the UK.",
  keywords: [
    "BuddyRide safety",
    "passenger security",
    "safe ride-sharing Nigeria",
    "UK carpooling safety",
    "vetted drivers",
    "real-time trip tracking",
  ],
};

export default function PassengerSafetyLayout({
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
