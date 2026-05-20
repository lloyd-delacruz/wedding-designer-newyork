import Hero from "@/components/home/Hero";
import Welcome from "@/components/home/Welcome";
import FeaturedBridal from "@/components/home/FeaturedBridal";
import PressLogos from "@/components/home/PressLogos";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <FeaturedBridal />
      <PressLogos />
      <CtaSection />
    </>
  );
}
