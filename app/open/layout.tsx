export const metadata = {
  title: "Open Download | BuddyRide - Our Mission & Community",
  description:
    "Get the BuddyRide app — on-demand private and shared rides in the UK and Sweden, and carpool ride-sharing in Nigeria and Canada.",
  keywords: [
    "BuddyRide mission",
    "carpooling Nigeria",
    "UK ride sharing",
    "sustainable travel",
    "about BuddyRide",
  ],
};

export default function OpenLayout({
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
