import React from "react";
import { motion } from "framer-motion";
import { Network, Server, Code2, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { TechGlobe } from "@/three/TechnologyGlobe/TechGlobe";
import { profileData } from "@/data/profile";

const corePillars = [
  {
    number: "01",
    title: "Enterprise Cisco & Juniper Networking",
    subtitle: "Routing, Switching & Layer 2/3 Topologies",
    description: "Deep configuration of Cisco IOS environments, VLAN 802.1Q segmentation, Inter-VLAN routing, OSPF, BGP, Spanning-Tree, and Juniper Junos OS switches.",
    icon: Network,
    tech: ["Cisco IOS", "Junos OS", "OSPF & BGP", "VLAN / 802.1Q", "EtherChannel"]
  },
  {
    number: "02",
    title: "Data Center & Infrastructure Deployments",
    subtitle: "GPU Servers, Colocation & Migrations",
    description: "Physical rack assembly, hardware RAID provisioning, high-density GPU computing servers (RGCI), tier-3 colocation, and full data center migrations (VMart).",
    icon: Server,
    tech: ["GPU Servers", "Hardware RAID", "DC Colocation", "DC Migration", "Linux IPMI"]
  },
  {
    number: "03",
    title: "Network Security & Perimeter Firewalls",
    subtitle: "DLP, NGFW, ACLs & ZTNA Concepts",
    description: "Configuring perimeter defenses, Data Loss Prevention (DLP) demonstration testing, standard/extended ACLs, NAT/PAT translations, and Zero Trust access rules.",
    icon: ShieldCheck,
    tech: ["Endpoint DLP", "Next-Gen Firewalls", "ACL & NAT/PAT", "ZTNA", "SD-WAN"]
  },
  {
    number: "04",
    title: "Full Stack Software Engineering",
    subtitle: "Modern Web Systems & Resilient APIs",
    description: "Engineering production web platforms using React, TypeScript, Python, Django, and MySQL. Building commercial e-commerce systems, ERP customizations, and certification tools.",
    icon: Code2,
    tech: ["React.js", "Python / Django", "TypeScript", "MySQL / MariaDB", "ERPNext / Frappe"]
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-[#0B1930] border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-dots-dark opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#168BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10243D] border border-white/10 text-[11px] font-mono text-[#00D4FF] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
            SECTION 02 // ARCHITECTURAL PILLARS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            WHERE CODE MEETS <span className="text-gradient">INFRASTRUCTURE</span>.
          </h2>
          <p className="mt-4 text-[#A7B7CC] text-base sm:text-lg leading-relaxed font-sans">
            Bridging deterministic enterprise network hardware with scalable software engineering. While software engineers often treat networks as a black box and network engineers focus solely on packets, I integrate both: delivering rock-solid physical infrastructure, hardened firewall perimeters, and modern full-stack web applications.
          </p>
        </div>

        {/* Two-Column Layout: Left (Pillars) vs Right (3D Tech Globe) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 4 Core Pillar Cards */}
          <div className="lg:col-span-7 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative p-6 rounded-2xl glass-card border border-white/10 hover:border-[#00D4FF]/40 transition-all duration-300"
                  >
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#00D4FF] bg-[#071426] px-2.5 py-1 rounded-md border border-white/10">
                        {pillar.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#071426] border border-white/10 flex items-center justify-center text-[#168BFF] group-hover:text-[#00D4FF] group-hover:border-[#00D4FF]/50 transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-base font-bold text-white group-hover:text-[#00D4FF] transition-colors font-heading">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-[#00D4FF] mt-0.5 mb-2 font-medium">
                      {pillar.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-[#A7B7CC] leading-relaxed mb-4 font-sans">
                      {pillar.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {pillar.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#071426] text-[#A7B7CC] border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Philosophy Banner */}
            <div className="p-5 rounded-2xl glass-card border border-[#00D4FF]/30 flex items-start gap-4 mt-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#168BFF] to-[#00D4FF] flex items-center justify-center text-white shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-heading">
                  Production Rigor & Honest Engineering
                </h4>
                <p className="text-xs text-[#A7B7CC] mt-1 leading-relaxed font-sans">
                  All experience items, network topologies, and web platforms presented in this portfolio reflect real production systems, client deliveries, and verified lab configurations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Floating Tech Globe */}
          <div className="lg:col-span-5 h-[450px] sm:h-[500px] w-full relative rounded-3xl bg-[#071426] border border-white/10 shadow-glass-dark overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 cyber-grid-dark opacity-40 pointer-events-none" />

            <div className="w-full h-full relative">
              <TechGlobe />
            </div>

            {/* Floating Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#10243D]/90 backdrop-blur-md border border-white/10 text-xs font-mono shadow-lg">
              <div className="flex justify-between items-center text-[#A7B7CC]">
                <span className="text-[#00D4FF] font-bold">SYSTEM TOPOLOGY</span>
                <span className="text-[10px] text-white/50">4 PILLARS ACTIVE</span>
              </div>
              <p className="text-[11px] text-[#A7B7CC] mt-1 font-sans">
                Cisco Routing • Data Center Hardware • DLP Security • Full-Stack Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
