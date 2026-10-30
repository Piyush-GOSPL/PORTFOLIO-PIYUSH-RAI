import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { IntroLoader } from "@/components/Loader/IntroLoader";
import { Navbar } from "@/components/Navbar/Navbar";
import { HeroSection } from "@/sections/Hero/HeroSection";
import { AboutSection } from "@/sections/About/AboutSection";
import { SkillsSection } from "@/sections/Skills/SkillsSection";
import { ProjectsSection } from "@/sections/Projects/ProjectsSection";
import { NetworkingLabSection } from "@/sections/NetworkingLab/NetworkingLabSection";
import { CloudSection } from "@/sections/CloudInfrastructure/CloudSection";
import { ExperienceSection } from "@/sections/Experience/ExperienceSection";
import { EducationSection } from "@/sections/Education/EducationSection";
import { ContactSection } from "@/sections/Contact/ContactSection";
import { Footer } from "@/components/Footer/Footer";

export const App: React.FC = () => {
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111827] flex flex-col selection:bg-[#0090D2] selection:text-white">
      {/* Intro Loading Sequence */}
      {!loaderComplete && (
        <IntroLoader onComplete={() => setLoaderComplete(true)} />
      )}

      {/* Global Futuristic Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <NetworkingLabSection />
        <CloudSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
