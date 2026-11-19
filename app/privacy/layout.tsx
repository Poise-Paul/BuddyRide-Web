export const metadata = {
  title: "Privacy Policy | BuddyRide - How We Protect Your Data",
  description:
    "Read the BuddyRide Privacy Policy — what we collect, how we use and protect it, and your rights in the UK, Sweden, Nigeria and Canada.",
  keywords: [
    "BuddyRide terms",
    "user agreement",
    "ride-sharing legal",
    "terms of service Nigeria",
    "UK carpooling rules",
  ],
};
export default function PrivacyLayout({
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
