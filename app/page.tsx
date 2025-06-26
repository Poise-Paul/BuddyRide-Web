import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import HeroTitle from "@/components/home/HeroTitle";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <HeroTitle />
      <div className="w-screen">
        <Image
          radius="none"
          src="/Car-trip.png"
          alt="car-trip"
          className="w-screen h-full"
        />
      </div>
      <HowItWorks />
    </section>
  );
}
