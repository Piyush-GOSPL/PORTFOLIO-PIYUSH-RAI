import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Sparkles, Mail, Github, Linkedin, Terminal, Shield, Network, Server } from "lucide-react";
import { HeroCanvas } from "@/three/HeroScene/HeroCanvas";
import { profileData } from "@/data/profile";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white"
    >
      {/* Background Cyber Grid & Radiant Lighting */}
      <div className="absolute inset-0 cyber-grid opacity-75 pointer-events-none" />

      {/* Radiant Gradient Halos (Subtle Apple-style lighting) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-b from-[#00C8FF]/10 via-[#0090D2]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#1263B5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#00C8FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Hero Typography & Call-To-Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6 pt-4 lg:pt-0"
        >
          {/* Futuristic Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-slate-700 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-900">AVAILABLE FOR OPPORTUNITIES</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">1–2 YRS EXP</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] uppercase font-bold text-[#1263B5]">
              HELLO, I'M PIYUSH RAI
            </h2>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#111827] leading-[1.1]">
              BUILDING <span className="text-gradient">DIGITAL</span> EXPERIENCES.
              <br />
              CONNECTING <span className="text-gradient">TECHNOLOGIES</span>.
            </h1>
          </div>

          {/* Professional Titles */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-slate-600">
            <div className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 font-semibold text-[#1263B5]">
              FULL STACK DEVELOPER
            </div>
            <span className="text-slate-400">|</span>
            <div className="px-3 py-1 rounded-md bg-blue-50 border border-blue-200 font-semibold text-[#0090D2]">
              CLOUD & NETWORK ENGINEER
            </div>
          </div>

          {/* Professional Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            {profileData.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1263B5] via-[#0090D2] to-[#00C8FF] text-white font-medium text-sm shadow-md hover:shadow-glow-blue transition-all duration-300 hover:scale-[1.02]"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href={`mailto:${profileData.email}?subject=Resume%20Request%20-%20Piyush%20Rai`}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel text-slate-800 font-medium text-sm hover:border-[#0090D2] hover:bg-blue-50/40 transition-all duration-300"
            >
              <FileText className="w-4 h-4 text-[#1263B5]" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

          {/* Social Links & Quick Specs */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-600 hover:text-[#0090D2] hover:border-[#0090D2] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-600 hover:text-[#1263B5] hover:border-[#1263B5] transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-600 hover:text-[#00C8FF] hover:border-[#00C8FF] transition-colors"
                title="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono text-slate-500">
              <div>
                <span className="font-bold text-slate-900 block text-base">6+</span>
                <span>Platforms Live</span>
              </div>
              <div className="w-[1px] h-6 bg-slate-200" />
              <div>
                <span className="font-bold text-slate-900 block text-base">16+</span>
                <span>Cisco Labs</span>
              </div>
              <div className="w-[1px] h-6 bg-slate-200" />
              <div>
                <span className="font-bold text-[#0090D2] block text-base">100%</span>
                <span>Verified Code</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Centerpiece Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 h-[420px] sm:h-[480px] lg:h-[580px] w-full relative flex items-center justify-center"
        >
          {/* Chrome & Blue Glass 3D Sphere Canvas */}
          <div className="w-full h-full relative">
            <HeroCanvas />

            {/* Subtle Interactive Instruction Pill */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-[10px] font-mono text-slate-500 shadow-sm pointer-events-none select-none">
              Interactive 3D Sphere • Move mouse to tilt
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 hover:text-[#1263B5] transition-colors group cursor-pointer z-20"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase mb-1">SCROLL</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-[#0090D2]" />
      </a>
    </section>
  );
};
