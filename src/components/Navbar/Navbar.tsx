import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ExternalLink, ArrowRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { navLinks } from "@/data/navigation";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = [
        "hero",
        ...navLinks.map((l) => l.id)
      ];

      const scrollPosition = window.scrollY + 250;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#071426]/90 backdrop-blur-md border-b border-white/10 shadow-glass-dark"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="group flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#168BFF] to-[#00D4FF] p-[1.5px] shadow-sm transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#0B1930] rounded-[10px] flex items-center justify-center">
              <span className="font-bold text-xs bg-gradient-to-r from-[#168BFF] to-[#00D4FF] bg-clip-text text-transparent font-heading">
                PR
              </span>
            </div>
          </div>
          <div>
            <div className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5 font-heading">
              <span>PIYUSH RAI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            </div>
            <p className="text-[10px] font-mono tracking-wider text-[#A7B7CC] uppercase -mt-0.5">
              BEYOND DIGITAL
            </p>
          </div>
        </a>

        {/* Dynamic Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#10243D]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#00D4FF] font-semibold bg-[#168BFF]/20 border border-[#00D4FF]/30"
                    : "text-[#A7B7CC] hover:text-white"
                } ${link.highlight ? "text-[#00D4FF] font-semibold" : ""}`}
              >
                {link.name}
                {link.highlight && (
                  <span className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#A7B7CC] hover:text-[#00D4FF] rounded-full hover:bg-white/5 transition-colors"
            title="GitHub Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#A7B7CC] hover:text-[#168BFF] rounded-full hover:bg-white/5 transition-colors"
            title="LinkedIn Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#168BFF] to-[#00D4FF] text-white shadow-sm hover:shadow-glow-cyan transition-all duration-200"
          >
            <span>Let's Connect</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071426]/95 backdrop-blur-xl border-b border-white/10 px-5 pt-3 pb-6 shadow-2xl space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#A7B7CC] hover:text-[#00D4FF] hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-4">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#A7B7CC] hover:text-[#00D4FF]"
              >
                GitHub
              </a>
              <span className="text-white/20">•</span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#A7B7CC] hover:text-[#168BFF]"
              >
                LinkedIn
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-[#168BFF] to-[#00D4FF] text-white rounded-full"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
