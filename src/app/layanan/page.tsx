"use client";



import ArchitectureSection from "@/components/Layanan/ArchitectureSection";
import CTALayananSection from "@/components/Layanan/CTALayananSection";
import EngineeringSection from "@/components/Layanan/EngineeringSection";
import IntegratedWorkflowSection from "@/components/Layanan/IntegratedWorkflowSection";
import PlanningSection from "@/components/Layanan/PlanningSection";
import ServicesHeroSection from "@/components/Layanan/ServicesHeroSection";
import TopographySection from "@/components/Layanan/TopographySection";
import SectionWrapper from "@/components/SectionWrapper";




const LandingPage: React.FC = () => {
  

  return (
    <main className="relative">
          {/* Navbar 
          <Navbar />*/}
       <SectionWrapper>
       <ServicesHeroSection />
       </SectionWrapper>     

        <SectionWrapper>
        <PlanningSection />
        </SectionWrapper>    
        <ArchitectureSection/>
        
        <EngineeringSection/>

        <SectionWrapper>    
        <TopographySection/>
        </SectionWrapper>    

        <SectionWrapper>
        <IntegratedWorkflowSection/>
        </SectionWrapper>    

        <CTALayananSection/>
        

        </main>
  );
};

export default LandingPage;
