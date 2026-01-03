export const metadata = {
  title: "Help Center | BuddyRide Support & Resource Hub",
  description:
    "Need help with BuddyRide? Visit our Help Center for troubleshooting guides, account support, and safety tips for your journeys in Nigeria and the UK.",
  keywords: [
    "BuddyRide help",
    "customer support",
    "ride-sharing guide",
    "troubleshooting BuddyRide",
    "passenger assistance",
  ],
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block w-full text-center justify-center">{children}</div>
    </section>
  );
}
