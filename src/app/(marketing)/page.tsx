import { HeroSection } from "@/components/sections/HeroSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProximosVibioSection } from "@/components/sections/ProximosVibioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuesSection />
      <StatsSection />
      <ProjectsSection />
      <ProximosVibioSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
