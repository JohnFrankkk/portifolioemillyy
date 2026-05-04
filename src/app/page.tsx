import Preloader from "@/components/Preloader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Preloader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <FooterSection />
      <FloatingWhatsApp />
    </main>
  );
}
