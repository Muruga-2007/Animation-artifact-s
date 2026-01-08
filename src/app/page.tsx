import BackgroundCanvas from "@/components/ui/BackgroundCanvas";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import ServicesPreview from "@/components/sections/ServicesPreview";
import IndustryPanels from "@/components/sections/IndustryPanels";
import CaseStudiesTeaser from "@/components/sections/CaseStudiesTeaser";
import Process from "@/components/sections/Process";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            {/* Global Background Simulation */}
            <BackgroundCanvas />

            <div className="relative z-10 flex flex-col">
                <Hero />
                <TrustedBy />
                <ServicesPreview />
                <IndustryPanels />
                <CaseStudiesTeaser />
                <Process />
                <FinalCTA />
            </div>
        </main>
    );
}
