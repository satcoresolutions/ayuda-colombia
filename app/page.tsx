import CategorySection from "@/components/home/CategorySection";
import EmergencyNotice from "@/components/home/EmergencyNotice";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TerritorySection from "@/components/home/TerritorySection";

export default function HomePage() {
  return (
    <>
      <Hero />

      <main>
        <CategorySection />
        <HowItWorks />
        <TerritorySection />
        <EmergencyNotice />
      </main>
    </>
  );
}