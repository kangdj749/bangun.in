"use client";


import Hero from "@/components/Hero"

import HybridWhatsAppCTA from "@/components/HybridWhatsAppCTA"

import TrustStrip from "@/components/TrustStripSection";
import AboutPreviewSection from "@/components/AboutPreviewSection";
import ServicesPreviewSection from "@/components/ServicesPreviewSection";
import VisionSection from "@/components/VisionSection";
import LegalSection from "@/components/LegalSection";
import FinalCTASection from "@/components/FinalCTASection";
import SectionWrapper from "@/components/SectionWrapper";

import Footer from "@/components/Footer";

const LandingPage: React.FC = () => {
  

  return (
    <main className="relative">
           
      
         <SectionWrapper>
            <Hero />
         </SectionWrapper>
         
         <SectionWrapper>
           <TrustStrip />
         </SectionWrapper>

         <SectionWrapper>
          <AboutPreviewSection/>  
         </SectionWrapper>

         <SectionWrapper>
           <ServicesPreviewSection/>
         </SectionWrapper>

         <SectionWrapper>
            <VisionSection/>
         </SectionWrapper>

         <SectionWrapper>
            <LegalSection/>
         </SectionWrapper>

         <SectionWrapper withDivider={false}>
         <FinalCTASection/>
         </SectionWrapper>

                                   
          {/* WhatsApp CTA hybrid */}
          <HybridWhatsAppCTA />

        </main>
  );
};

export default LandingPage;
