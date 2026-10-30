import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Network, ShieldAlert, Server, Code2, Cloud, Cpu, Info, Check } from "lucide-react";
import { skillGroupsData, SkillGroup, SkillItem } from "@/data/skills";

const iconMap: Record<string, any> = {
  Network: Network,
  ShieldAlert: ShieldAlert,
  Server: Server,
  Code2: Code2,
  Cloud: Cloud,
  Cpu: Cpu,
};

export const SkillsSection: React.FC = () => {
  const [selectedGroupId, setSelectedGroupId] = useState<string>(skillGroupsData[0].id);
  const [activeSkillDetail, setActiveSkillDetail] = useState<SkillItem | null>(
    skillGroupsData[0].skills[0]
  );

  const selectedGroup =
    skillGroupsData.find((group) => group.id === selectedGroupId) || skillGroupsData[0];

  return (
    <section id="skills" className="relative py-28 bg-[#071426] border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-grid-dark opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#168BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10243D] border border-white/10 text-[11px] font-mono text-[#00D4FF] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
            SECTION 03 // TECHNICAL STACK MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            TECHNICAL <span className="text-gradient">COMPETENCIES</span>.
          </h2>
          <p className="mt-4 text-[#A7B7CC] text-base sm:text-lg leading-relaxed font-sans">
            Organized across 6 distinct engineering domains. Select any category and click on a technology card to view architectural utility and implementation contexts.
          </p>
        </div>

        {/* Dynamic Category Switcher Tabs */}
        <div className="flex flex-wrap gap-2.5 pb-6 border-b border-white/10 mb-10">
          {skillGroupsData.map((group) => {
            const Icon = iconMap[group.iconName] || Network;
            const isSelected = group.id === selectedGroupId;

            return (
              <button
                key={group.id}
                onClick={() => {
                  setSelectedGroupId(group.id);
                  setActiveSkillDetail(group.skills[0]);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isSelected
                    ? "bg-[#168BFF] text-white border-[#00D4FF] shadow-glow-cyan"
                    : "bg-[#10243D] text-[#A7B7CC] border-white/10 hover:border-[#00D4FF]/50 hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-[#00D4FF]"}`} />
                <span>{group.title}</span>
                <span
                  className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                    isSelected ? "bg-black/30 text-white" : "bg-[#071426] text-[#A7B7CC]"
                  }`}
                >
                  {group.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Content: Skill Cards Grid + Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Cards Grid (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="p-4 rounded-xl bg-[#10243D] border border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white font-heading">{selectedGroup.title}</h3>
                <p className="text-xs text-[#00D4FF] font-mono mt-0.5">{selectedGroup.subtitle}</p>
              </div>
              <span className="text-xs font-mono text-[#A7B7CC]">Click a card to inspect</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <AnimatePresence mode="wait">
                {selectedGroup.skills.map((skill, index) => {
                  const isSelected = activeSkillDetail?.name === skill.name;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      onClick={() => setActiveSkillDetail(skill)}
                      className={`cursor-pointer group relative p-4 rounded-2xl border transition-all duration-300 ${
                        isSelected
                          ? "bg-[#152E4E] border-[#00D4FF] shadow-glow-cyan ring-1 ring-[#00D4FF]"
                          : "bg-[#10243D] border-white/10 hover:border-[#00D4FF]/40 hover:bg-[#122A47]"
                      }`}
                    >
                      {/* Top Status */}
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#A7B7CC]">
                          {skill.category}
                        </span>
                        {skill.featured && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#168BFF]/20 text-[#00D4FF] border border-[#00D4FF]/30 font-semibold">
                            Core
                          </span>
                        )}
                      </div>

                      {/* Skill Name */}
                      <h4 className="text-sm font-bold text-white group-hover:text-[#00D4FF] transition-colors flex items-center gap-1.5 font-heading">
                        <span>{skill.name}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />}
                      </h4>

                      {/* Brief Snippet */}
                      <p className="text-[11px] text-[#A7B7CC] mt-1.5 line-clamp-2 leading-relaxed font-sans">
                        {skill.description}
                      </p>

                      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#A7B7CC]">
                        <span>Inspect detail</span>
                        <Info className="w-3 h-3 text-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Deep-Dive Skill Inspector Panel (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 p-6 rounded-3xl glass-card border border-white/10 shadow-glass-dark">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#168BFF] text-white flex items-center justify-center font-bold text-xs font-heading">
                    PR
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A7B7CC] uppercase tracking-widest block">
                      ARCHITECTURAL SPEC
                    </span>
                    <span className="text-xs font-bold text-white font-heading">
                      Technical Verification
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Verified
                </span>
              </div>

              {activeSkillDetail ? (
                <div className="mt-5 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00D4FF] font-semibold">
                      SELECTED TECHNOLOGY
                    </span>
                    <h3 className="text-xl font-extrabold text-white mt-0.5 font-heading">
                      {activeSkillDetail.name}
                    </h3>
                  </div>

                  <div className="p-4 rounded-xl bg-[#071426] border border-white/10">
                    <span className="text-[10px] font-mono text-[#A7B7CC] uppercase tracking-wider block mb-1">
                      IMPLEMENTATION CONTEXT
                    </span>
                    <p className="text-xs text-[#F1F5F9] leading-relaxed font-sans">
                      {activeSkillDetail.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-[#A7B7CC] uppercase tracking-wider block">
                      PRODUCTION ATTRIBUTES
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-lg bg-[#071426] border border-white/10">
                        <span className="text-[10px] text-[#A7B7CC] block">DOMAIN</span>
                        <span className="font-semibold text-white uppercase text-[11px]">
                          {activeSkillDetail.category}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#071426] border border-white/10">
                        <span className="text-[10px] text-[#A7B7CC] block">STANDARD</span>
                        <span className="font-semibold text-[#00D4FF] text-[11px]">
                          Production Grade
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#168BFF]/10 border border-[#168BFF]/20 flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                    <p className="text-[11px] text-[#A7B7CC] leading-relaxed font-sans">
                      Applied across production networks, data center deployments, and commercial codebases.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center text-xs font-mono text-[#A7B7CC]">
                  Select any technology card to view architectural details.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
