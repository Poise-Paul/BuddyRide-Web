import { Image } from "@heroui/image";
import HeroTitle from "@/components/home/HeroTitle";
import HowItWorks from "@/components/home/HowItWorks";
import JoinAsDriver from "@/components/home/JoinAsDriver";
import JoinAsPassenger from "@/components/home/JoinAsPassenger";
import DownloadTheApp from "@/components/home/DownloadTheApp";
import NewsSection from "@/components/home/NewsSection";
import FAQ from "@/components/home/Faq";
import Questions from "@/components/home/Questions";

export default function Home() {
  return (
    <section className="flex  flex-col items-center justify-center gap-4 py-8 md:py-10">
      <HeroTitle />
      <div className="w-screen">
        <Image radius="none" src="/Car-trip.jpg" alt="car-trip" className="" />
      </div>
      <HowItWorks />
      <JoinAsDriver />
      <JoinAsPassenger />
      <DownloadTheApp />
      <NewsSection />
      <FAQ />
      <Questions />
    </section>
  );
}
