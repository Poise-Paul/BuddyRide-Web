export const metadata = {
  title: "FAQs | BuddyRide - Everything You Need to Know",
  description:
    "Find answers about carpooling, driver requirements, payments in NGN and GBP, and safety measures on BuddyRide.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center">{children}</div>
    </section>
  );
}
