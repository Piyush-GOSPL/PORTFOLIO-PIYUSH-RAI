import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#F8FAFC] border-t border-slate-200/80 pt-16 pb-12 overflow-hidden">
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 cyber-dots opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          {/* Brand & Manifesto (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1263B5] via-[#0090D2] to-[#00C8FF] p-[1px] shadow-sm">
                <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center font-bold text-xs bg-gradient-to-r from-[#1263B5] to-[#0090D2] bg-clip-text text-transparent">
                  PR
                </div>
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-[#111827] block">
                  PIYUSH RAI
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#0090D2] uppercase block -mt-1 font-semibold">
                  BEYOND DIGITAL
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              "Building Digital Experiences. Connecting Technologies. Powering the Future."
              Specializing in full-stack software development, cloud technologies, and enterprise Cisco networking.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#1263B5] hover:border-[#1263B5] flex items-center justify-center transition-colors shadow-2xs"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#0090D2] hover:border-[#0090D2] flex items-center justify-center transition-colors shadow-2xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#00C8FF] hover:border-[#00C8FF] flex items-center justify-center transition-colors shadow-2xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider text-slate-900 uppercase block">
              SYSTEM SECTIONS
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 font-mono">
              <a href="#hero" className="hover:text-[#1263B5] transition-colors">› Hero 3D</a>
              <a href="#about" className="hover:text-[#1263B5] transition-colors">› Architecture</a>
              <a href="#skills" className="hover:text-[#1263B5] transition-colors">› Tech Skills</a>
              <a href="#projects" className="hover:text-[#1263B5] transition-colors">› Project Gallery</a>
              <a href="#networking-lab" className="hover:text-[#0090D2] text-[#0090D2] font-semibold transition-colors">› Cisco 3D Lab</a>
              <a href="#cloud-infrastructure" className="hover:text-[#1263B5] transition-colors">› Cloud Systems</a>
              <a href="#experience" className="hover:text-[#1263B5] transition-colors">› Experience</a>
              <a href="#education" className="hover:text-[#1263B5] transition-colors">› Certifications</a>
            </div>
          </div>

          {/* Live Systems & Production Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider text-slate-900 uppercase block">
              VERIFIED PLATFORMS
            </span>
            <div className="space-y-1.5 text-xs text-slate-600 font-mono">
              <a
                href="https://arojimafoods.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#1263B5] truncate"
              >
                • Arojima Foods (E-Commerce)
              </a>
              <a
                href="https://www.volttracksolar.co.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#1263B5] truncate"
              >
                • VoltTrack Solar (NZ)
              </a>
              <a
                href="https://www.sanatan.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#1263B5] truncate"
              >
                • Sanatan NZ
              </a>
              <a
                href="https://www.bizapps365.co.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#1263B5] truncate"
              >
                • BizApps365 (Enterprise)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Piyush Rai. All rights reserved.</span>
            <span>•</span>
            <span className="text-slate-400">Light Futuristic Architecture</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#1263B5] hover:border-[#1263B5] transition-all shadow-2xs"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#0090D2]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
