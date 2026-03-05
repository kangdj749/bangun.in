"use client";
import ArchitectureSection from "@/components/Layanan/ArchitectureSection";
import CTALayananSection from "@/components/Layanan/CTALayananSection";
import EngineeringSection from "@/components/Layanan/EngineeringSection";
import ServicesHeroSection from "@/components/Layanan/ServicesHeroSection";
import SistemKerjaSection from "@/components/Layanan/SistemKerjaSection";
import SpatialPlanningSection from "@/components/Layanan/SpatialPlanningSection";
import TopographyGeotechSection from "@/components/Layanan/TopographyGeotechSection";

const LandingPage: React.FC = () => {
  

  return (
    <main className="relative">
          {/* Navbar 
          <Navbar />*/}
     
       <ServicesHeroSection />
       
        
        <SpatialPlanningSection/>
        
        <ArchitectureSection/>
        
        <EngineeringSection/>

        
        <TopographyGeotechSection/>
        
        <SistemKerjaSection/>
       

        <CTALayananSection/>
        

        </main>
  );
};

export default LandingPage;
