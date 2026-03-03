"use client";



import SectionWrapper from "@/components/SectionWrapper";
import AboutHeroSection from "@/components/Tentang/AboutHeroSection";
import BackgroundSection from "@/components/Tentang/BackgroundSection";
import CTASection from "@/components/Tentang/CTASection";
import GovernanceSection from "@/components/Tentang/GovernanceSection";
import GrowthVisionSection from "@/components/Tentang/GrowthVisionSection";
import MultidisciplinarySection from "@/components/Tentang/MultidisciplinarySection";
import PhilosophySection from "@/components/Tentang/PhilosophySection";

const LandingPage: React.FC = () => {
  

  return (
    <main className="relative">
          {/* Navbar 
          <Navbar />*/}
    
       <AboutHeroSection />

        <BackgroundSection />

        <PhilosophySection/>
        
        <MultidisciplinarySection/>

        <GovernanceSection/>

        <GrowthVisionSection/>

        <CTASection/>
        

        </main>
  );
};

export default LandingPage;
