import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Sparkles, Mail, Github, Linkedin, Network, ArrowUpRight, ShieldCheck } from "lucide-react";
import { HeroCanvas } from "@/three/HeroScene/HeroCanvas";
import { profileData } from "@/data/profile";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#071426]"
    >
      {/* Background Cyber Grid & Radiant Network Glows */}
      <div className="absolute inset-0 cyber-grid-dark opacity-60 pointer-events-none" />

      {/* Animated Blue Network Lines SVG overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#168BFF" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#168BFF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M -100 200 Q 300 100 600 350 T 1400 200"
            fill="none"
            stroke="url(#netGrad)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            className="animate-pulse"
          />
          <path
            d="M 100 600 Q 500 400 900 650 T 1600 500"
            fill="none"
            stroke="url(#netGrad)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />
        </svg>
      </div>

      {/* Radiant Gradient Halos */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-hero-gradient pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#168BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Hero Typography & Call-To-Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6 pt-4 lg:pt-0"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-[#A7B7CC] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-ping" />
            <span className="font-semibold text-white">ENTERPRISE INFRASTRUCTURE & CODE</span>
            <span className="text-white/20">•</span>
            <span className="text-[#00D4FF]">ACTIVE</span>
          </div>

          {/* Large Hero Heading: 64–76px Desktop, 38–44px Mobile */}
          <div className="space-y-1">
            <h2 className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase font-bold text-[#00D4FF]">
              SYSTEM ARCHITECT & ENGINEER
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.08] font-heading">
              PIYUSH <span className="text-gradient">RAI</span>
            </h1>
          </div>

          {/* Subtitle: Network Engineer | Full Stack Developer | Cloud & IT Infrastructure */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono">
            <span className="px-3 py-1 rounded-lg bg-[#10243D] border border-white/10 font-semibold text-[#00D4FF]">
              Network Engineer
            </span>
            <span className="text-[#A7B7CC]">•</span>
            <span className="px-3 py-1 rounded-lg bg-[#10243D] border border-white/10 font-semibold text-[#168BFF]">
              Full Stack Developer
            </span>
            <span className="text-[#A7B7CC]">•</span>
            <span className="px-3 py-1 rounded-lg bg-[#10243D] border border-white/10 font-semibold text-white">
              Cloud & IT Infrastructure
            </span>
          </div>

          {/* Professional Description */}
          <p className="text-[#A7B7CC] text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            {profileData.bio}
          </p>

          {/* Action Buttons: Explore Projects & Download Resume */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#infra-projects"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#168BFF] to-[#00D4FF] text-white font-medium text-sm sm:text-base shadow-glow-cyan hover:shadow-glow-blue transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href={profileData.resumeDownloadUrl}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-card text-white font-medium text-sm sm:text-base hover:border-[#00D4FF] transition-all duration-300"
            >
              <FileText className="w-4 h-4 text-[#00D4FF]" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links & Verified Stats */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-[#A7B7CC] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-[#A7B7CC] hover:text-[#168BFF] hover:border-[#168BFF] transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-[#A7B7CC] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-colors"
                title="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Dynamic Verified Stats */}
            <div className="flex items-center gap-6 text-xs font-mono text-[#A7B7CC]">
              {profileData.stats.slice(0, 3).map((st, i) => (
                <React.Fragment key={st.label}>
                  {i > 0 && <div className="w-[1px] h-6 bg-white/10" />}
                  <div>
                    <span className="font-bold text-white block text-base font-heading">
                      {st.value}
                    </span>
                    <span className="text-[11px] text-[#A7B7CC]">{st.label.split(" ")[0]}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Centerpiece Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 h-[440px] sm:h-[500px] lg:h-[600px] w-full relative flex items-center justify-center"
        >
          {/* Chrome & Blue Glass 3D Sphere Canvas */}
          <div className="w-full h-full relative">
            <HeroCanvas />

            {/* Interactive Instruction Pill */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#10243D]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#A7B7CC] shadow-md pointer-events-none select-none">
              Interactive 3D Sphere • Hover or drag to orbit
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#A7B7CC] hover:text-[#00D4FF] transition-colors group cursor-pointer z-20"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase mb-1">SCROLL</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#00D4FF]" />
      </a>
    </section>
  );
};
