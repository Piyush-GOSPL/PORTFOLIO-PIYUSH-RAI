import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { IntroLoader } from "@/components/Loader/IntroLoader";
import { Navbar } from "@/components/Navbar/Navbar";
import { HeroSection } from "@/sections/Hero/HeroSection";
import { AboutSection } from "@/sections/About/AboutSection";
import { SkillsSection } from "@/sections/Skills/SkillsSection";
import { NetworkProjectsSection } from "@/sections/Projects/NetworkProjectsSection";
import { WebProjectsSection } from "@/sections/Projects/WebProjectsSection";
import { NetworkingLabSection } from "@/sections/NetworkingLab/NetworkingLabSection";
import { ExperienceSection } from "@/sections/Experience/ExperienceSection";
import { EducationSection } from "@/sections/Education/EducationSection";
import { ContactSection } from "@/sections/Contact/ContactSection";
import { Footer } from "@/components/Footer/Footer";

export const App: React.FC = () => {
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    // Lenis Smooth Scrolling
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
    <div className="min-h-screen bg-[#071426] text-[#F1F5F9] flex flex-col selection:bg-[#168BFF] selection:text-white">
      {/* Intro Loading Sequence */}
      {!loaderComplete && (
        <IntroLoader onComplete={() => setLoaderComplete(true)} />
      )}

      {/* Global Futuristic Navigation */}
      <Navbar />

      {/* Main Content Sections with alternating backgrounds */}
      <main className="flex-1">
        {/* 1. Hero: bg-[#071426] */}
        <HeroSection />

        {/* 2. About: bg-[#0B1930] */}
        <AboutSection />

        {/* 3. Skills: bg-[#071426] */}
        <SkillsSection />

        {/* 4A. Network & Infrastructure Projects: bg-[#0B1930] */}
        <NetworkProjectsSection />

        {/* 4B. Web Development Projects: bg-[#071426] */}
        <WebProjectsSection />

        {/* 5. Signature 3D Cisco Networking Lab: bg-[#0B1930] */}
        <NetworkingLabSection />

        {/* 6. Professional Experience Timeline: bg-[#071426] */}
        <ExperienceSection />

        {/* 7. Education & Certifications: bg-[#0B1930] */}
        <EducationSection />

        {/* 8. Contact: bg-[#071426] */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
