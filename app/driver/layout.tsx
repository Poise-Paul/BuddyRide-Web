export const metadata = {
  metadataBase: new URL("https://buddyridenow.com"),
  title: "Driver Safety | BuddyRide - Secure Partnerships & Support",
  description:
    "Explore BuddyRide's driver safety features — passenger verification, trip logging, in-app chat and support on every trip — for drivers in the UK, Sweden, Nigeria and Canada.",
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
