export const metadata = {
  title: "About Us | BuddyRide - Our Mission & Community",
  description:
    "Learn about BuddyRide's mission to make travel fairer and more affordable across the UK, Sweden, Nigeria and Canada — with on-demand private and shared rides, and community carpooling.",
  keywords: [
    "BuddyRide mission",
    "carpooling Nigeria",
    "UK ride sharing",
    "sustainable travel",
    "about BuddyRide",
  ],
};

export default function AboutLayout({
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
