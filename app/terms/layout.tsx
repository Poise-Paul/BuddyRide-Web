export const metadata = {
  title: "Terms and Conditions | BuddyRide - User Agreement",
  description:
    "Review the BuddyRide Terms and Conditions — service rules, user responsibilities and safety guidelines for on-demand private and shared rides and carpool ride-sharing in the UK, Sweden, Nigeria and Canada.",
  keywords: [
    "BuddyRide terms",
    "user agreement",
    "ride-sharing legal",
    "terms of service Nigeria",
    "UK carpooling rules",
  ],
};
export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center">{children}</div>
    </section>
  );
}
