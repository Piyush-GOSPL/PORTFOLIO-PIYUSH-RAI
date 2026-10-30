import React from "react";
import { motion } from "framer-motion";
import { Code2, Cloud, Network, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { TechGlobe } from "@/three/TechnologyGlobe/TechGlobe";
import { profileData } from "@/data/profile";

const iconMap = {
  Code2: Code2,
  Cloud: Cloud,
  Network: Network,
  ShieldCheck: ShieldCheck,
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-[#F8FAFC] border-t border-slate-100 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-dots opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#0090D2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono text-[#1263B5] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF]" />
            SECTION 02 // ARCHITECTURE & PURPOSE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            WHERE CODE MEETS <span className="text-gradient">INFRASTRUCTURE</span>.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Bridging the gap between software engineering and enterprise infrastructure. Many developers only write application code, while network engineers only handle topology links. I integrate both: building modern full-stack web applications backed by resilient cloud configurations, deterministic Cisco routing, and perimeter firewall security.
          </p>
        </div>

        {/* Two-Column Layout: Left (Four Core Pillars) vs Right (3D Digital Tech Structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 4 Expertise Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {profileData.expertiseAreas.map((area, idx) => {
                const IconComponent = iconMap[area.icon as keyof typeof iconMap] || Code2;

                return (
                  <motion.div
                    key={area.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-glass-md hover:border-[#0090D2]/40 transition-all duration-300"
                  >
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#0090D2] bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100">
                        {area.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#1263B5] group-hover:bg-[#1263B5] group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#1263B5] transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs font-mono text-[#0090D2] mt-0.5 mb-2.5 font-medium">
                      {area.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {area.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                      {area.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-50 text-slate-700 border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Practical Philosophy Banner */}
            <div className="p-5 rounded-2xl glass-panel border-blue-200/60 flex items-start gap-4 mt-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1263B5] to-[#0090D2] flex items-center justify-center text-white shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#111827]">
                  Production Integrity & Honest Technical Execution
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Every project presented here reflects actual production web applications, live client systems, or lab configurations verified in Cisco Packet Tracer and EVE-NG. No fabricated achievements or inflated percentages.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Floating Digital Tech Structure */}
          <div className="lg:col-span-5 h-[450px] sm:h-[500px] w-full relative rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden flex items-center justify-center">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 cyber-grid opacity-50" />

            {/* 3D Tech Globe */}
            <div className="w-full h-full relative">
              <TechGlobe />
            </div>

            {/* Floating Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-mono shadow-sm">
              <div className="flex justify-between items-center text-slate-600">
                <span className="text-[#1263B5] font-bold">SYSTEM TOPOLOGY</span>
                <span className="text-[10px] text-slate-400">4 PILLARS ACTIVE</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1 font-sans">
                Full-Stack Architecture • Multi-Cloud Deployment • Cisco Protocols • IT Infrastructure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
