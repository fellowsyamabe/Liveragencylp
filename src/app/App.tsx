import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { StrengthsSection } from "./components/StrengthsSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { RecruitSection } from "./components/RecruitSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      <Header />
      <HeroSection />
      <AboutSection />
      <StrengthsSection />
      <BenefitsSection />
      <RecruitSection />
      <Footer />
    </div>
  );
}
