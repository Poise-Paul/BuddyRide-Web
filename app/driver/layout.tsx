export const metadata = {
  metadataBase: new URL("https://buddyridenow.com"),
  title: "Driver Safety | BuddyRide - Secure Partnerships & Support",
  description:
    "Explore BuddyRide's driver safety protocols. From passenger verification and trip logging to 24/7 incident support, we protect our partners on every road in Nigeria and the UK.",
  keywords: [
    "BuddyRide driver safety",
    "partner protection",
    "verified passengers",
    "ride-sharing insurance Nigeria",
    "UK driver support",
    "secure driving app",
  ],
  openGraph: {
    images: ["/driver-safety.jpg"],
  },
};

export default function DriverSafetyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center w-full justify-center">
        {children}
      </div>
    </section>
  );
}
