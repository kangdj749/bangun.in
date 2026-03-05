"use client";




import AboutHeroSection from "@/components/Tentang/AboutHeroSection";

import CompanyPositioningSection from "@/components/Tentang/CompanyPositioningSection";
import CTASection from "@/components/Tentang/CTASection";

import GrowthDirectionSection from "@/components/Tentang/GrowthDirectionSection";

import LegalComplianceSection from "@/components/Tentang/LegalComplianceSection";


import VisionValuesSection from "@/components/Tentang/VisionValuesSection";

const LandingPage: React.FC = () => {
  

  return (
    <main className="relative">
          {/* Navbar 
          <Navbar />*/}
    
       <AboutHeroSection />

        <CompanyPositioningSection />

        <VisionValuesSection/>
        
        <LegalComplianceSection/>

        <GrowthDirectionSection/>

      
        <CTASection/>
        

        </main>
  );
};

export default LandingPage;
