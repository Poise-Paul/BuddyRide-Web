export const metadata = {
  title: "Contact Us | BuddyRide Support & Inquiries",
  description:
    "Have questions or need assistance with BuddyRide? Reach out to our support team for help with your account, rides, or driver registrations in Nigeria and the UK.",
  keywords: [
    "BuddyRide support",
    "contact BuddyRide",
    "ride-sharing help",
    "customer service Nigeria",
    "UK travel assistance",
  ],
};

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block text-center w-full justify-center">
        {children}
      </div>
    </section>
  );
}
