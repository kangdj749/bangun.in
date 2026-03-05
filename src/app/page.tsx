"use client";


import Hero from "@/components/Hero"

import HybridWhatsAppCTA from "@/components/HybridWhatsAppCTA"

import TrustStrip from "@/components/TrustStripSection";


import FinalCTASection from "@/components/FinalCTASection";
import SectionWrapper from "@/components/SectionWrapper";
import VisualServicesPreview from "@/components/VisualServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";



const LandingPage: React.FC = () => {
  

  return (
    <main className="relative">
           
      
      
        <Hero />
        <VisualServicesPreview/>  
        

          <PortfolioPreview/>  
     

       
           <TrustStrip />
            

         <SectionWrapper withDivider={false}>
         <FinalCTASection/>
         </SectionWrapper>

                                   
          {/* WhatsApp CTA hybrid */}
          <HybridWhatsAppCTA />

        </main>
  );
};

export default LandingPage;
