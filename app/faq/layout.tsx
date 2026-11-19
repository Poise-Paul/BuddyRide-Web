export const metadata = {
  title: "FAQs | BuddyRide - Everything You Need to Know",
  description:
    "Answers about on-demand private and shared rides, carpooling, driver requirements, payments in GBP, SEK, NGN and CAD, and safety on BuddyRide.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center">{children}</div>
    </section>
  );
}
