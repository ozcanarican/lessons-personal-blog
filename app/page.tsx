import HeroSection from "@/components/Hero";
import { LandingRefCards } from "@/components/LandingRefCards";
import { LandingBlogCards } from "@/components/LandingBlogCards";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <LandingBlogCards />
      <LandingRefCards />
    </main>
  );
}
