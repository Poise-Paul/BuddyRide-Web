import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { ShieldCheck, MapPin, Star, UserCheck, PhoneCall } from "lucide-react";

const PassengerSafety = () => {
  const safetyFeatures = [
    {
      title: "Vetted Drivers",
      desc: "Every BuddyRide driver undergoes biometric identity verification and a manual document review.",
      icon: <UserCheck className="text-primary" size={24} />,
    },
    {
      title: "Share Your Trip",
      desc: "Send family or friends a live tracking link so they can follow your ride in real time — no app needed.",
      icon: <MapPin className="text-primary" size={24} />,
    },
    {
      title: "Help With Every Trip",
      desc: "Chat with or email our support team from any trip in the app — your trip details are shared automatically.",
      icon: <ShieldCheck className="text-primary" size={24} />,
    },
    {
      title: "Two-Way Ratings",
      desc: "Our community stays high-quality through mandatory ratings after every single ride.",
      icon: <Star className="text-primary" size={24} />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20 px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-NeuePlakBold mb-4">
          Your Safety is Our Priority
        </h1>
        <p className="max-w-2xl mx-auto font-NeuePlakRegular text-lg opacity-90">
          From the moment you book until you reach your destination, we’ve built
          safety into every step of your journey.
        </p>
      </section>

      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {safetyFeatures.map((f, i) => (
            <Card key={i} className="border-none bg-slate-50 shadow-sm">
              <CardBody className="p-6">
                <div className="mb-4">{f.icon}</div>
                <h3 className="font-NeuePlakBold text-xl mb-2">{f.title}</h3>
                <p className="text-gray-600 font-NeuePlakRegular text-sm">
                  {f.desc}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Action Section */}
        <div className="bg-black text-white rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-left">
            <h2 className="text-3xl font-NeuePlakBold mb-4 text-white">
              Emergency?
            </h2>
            <p className="font-NeuePlakRegular text-gray-400">
              If you are in immediate danger, call your local emergency number
              first. Then let us know what happened through the app or live
              chat.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as="a"
              href="tel:999"
              className="bg-white text-black font-NeuePlakBold px-8"
              radius="full"
            >
              999 (UK)
            </Button>
            <Button
              as="a"
              href="tel:112"
              className="bg-white text-black font-NeuePlakBold px-8"
              radius="full"
            >
              112 (SE / NG)
            </Button>
            <Button
              as="a"
              href="tel:911"
              className="bg-white text-black font-NeuePlakBold px-8"
              radius="full"
            >
              911 (CA)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerSafety;
