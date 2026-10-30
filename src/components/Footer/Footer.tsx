import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";
import { navLinks } from "@/data/navigation";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#071426] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 cyber-dots-dark opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand & Manifesto (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#168BFF] to-[#00D4FF] p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-[#0B1930] rounded-[10px] flex items-center justify-center font-bold text-xs bg-gradient-to-r from-[#168BFF] to-[#00D4FF] bg-clip-text text-transparent font-heading">
                  PR
                </div>
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white block font-heading">
                  PIYUSH RAI
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#00D4FF] uppercase block -mt-1 font-semibold">
                  BEYOND DIGITAL
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A7B7CC] leading-relaxed max-w-sm font-sans">
              "Building Digital Experiences. Connecting Technologies. Powering Enterprise Infrastructure."
              Bridging enterprise Cisco networking, data center hardware, and modern full-stack web applications.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#10243D] border border-white/10 text-[#A7B7CC] hover:text-[#00D4FF] hover:border-[#00D4FF] flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#10243D] border border-white/10 text-[#A7B7CC] hover:text-[#168BFF] hover:border-[#168BFF] flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="w-8 h-8 rounded-lg bg-[#10243D] border border-white/10 text-[#A7B7CC] hover:text-[#00D4FF] hover:border-[#00D4FF] flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Dynamic Navigation (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase block font-heading">
              SYSTEM SECTIONS
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#A7B7CC] font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="hover:text-[#00D4FF] transition-colors"
                >
                  › {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Production Platforms & Deployments (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase block font-heading">
              VERIFIED SYSTEMS
            </span>
            <div className="space-y-1.5 text-xs text-[#A7B7CC] font-mono">
              <a
                href="https://arojimafoods.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#00D4FF] truncate"
              >
                • Arojima Foods (E-Commerce)
              </a>
              <a
                href="https://www.volttracksolar.co.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#00D4FF] truncate"
              >
                • VoltTrack Solar (NZ)
              </a>
              <a
                href="https://www.sanatan.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#00D4FF] truncate"
              >
                • Sanatan NZ
              </a>
              <a
                href="https://www.bizapps365.co.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#00D4FF] truncate"
              >
                • BizApps365 (Enterprise)
              </a>
              <span className="block text-slate-500 text-[11px] pt-1">
                • VMart DC Migration & RGCI GPU
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A7B7CC]">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Piyush Rai. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#00D4FF]">Futuristic Enterprise Infrastructure</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10243D] border border-white/10 text-[#A7B7CC] hover:text-white hover:border-[#00D4FF] transition-all"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#00D4FF]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
