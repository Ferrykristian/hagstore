/* DESIGN: Mangekyou Sharingan — Aged Domain Supplier Landing Page */
import Navbar from "@/components/Navbar";
import SharinganLoader from "@/components/SharinganLoader";
import ParticleCanvas from "@/components/ParticleCanvas";
import CrowAnimation from "@/components/CrowAnimation";
import HeroSection from "@/components/HeroSection";
import DomainShowcase from "@/components/DomainShowcase";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ background: "#0a0203", minHeight: "100vh", position: "relative" }}>
      <SharinganLoader />
      {/* Global ambient effects */}
      <ParticleCanvas />
      <CrowAnimation />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <HeroSection />
        <DomainShowcase />
        <WhyUs />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
