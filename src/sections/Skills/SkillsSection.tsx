import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Server, Database, Cloud, Network, Shield, Layers, Cpu, Check, Info } from "lucide-react";
import { skillCategories, SkillCategory, SkillItem } from "@/data/skills";

const categoryIcons: Record<string, any> = {
  frontend: Layout,
  backend: Server,
  networking: Network,
  cloud: Cloud,
  security: Shield,
  database: Database,
  erp: Layers,
  tools: Cpu,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("frontend");
  const [activeSkillDetail, setActiveSkillDetail] = useState<SkillItem | null>(
    skillCategories[0].skills[0]
  );

  const selectedCategory =
    skillCategories.find((cat) => cat.id === selectedCategoryId) || skillCategories[0];

  return (
    <section id="skills" className="relative py-28 bg-white border-t border-slate-100 overflow-hidden">
      {/* Background Grid & Lighting */}
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1263B5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#00C8FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono text-[#1263B5] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0090D2]" />
            SECTION 03 // TECHNICAL STACK UNIVERSE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            COMPREHENSIVE <span className="text-gradient">SKILLS</span> MATRIX.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Exploration across frontend architectures, backend APIs, enterprise Cisco networking protocols, multi-cloud platforms, and ERP workflows. Click any skill card to examine architectural utility and implementation contexts.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200/80 mb-10">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layout;
            const isSelected = category.id === selectedCategoryId;

            return (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategoryId(category.id);
                  setActiveSkillDetail(category.skills[0]);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                  isSelected
                    ? "bg-[#1263B5] text-white border-[#1263B5] shadow-sm shadow-[#1263B5]/25"
                    : "bg-white text-slate-700 border-slate-200 hover:border-[#0090D2] hover:bg-slate-50"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#00C8FF]" : "text-slate-400"}`} />
                <span>{category.title}</span>
                <span
                  className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {category.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Content: Skill Cards Grid + Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Cards Grid (7 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">{selectedCategory.title}</h3>
                <p className="text-xs text-[#0090D2] font-mono mt-0.5">{selectedCategory.subtitle}</p>
              </div>
              <span className="text-xs font-mono text-slate-400">Click a card to inspect</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <AnimatePresence mode="wait">
                {selectedCategory.skills.map((skill, index) => {
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
                          ? "bg-white border-[#0090D2] shadow-glass-md ring-2 ring-[#00C8FF]/20"
                          : "bg-white border-slate-200 hover:border-[#0090D2]/50 hover:shadow-sm"
                      }`}
                    >
                      {/* Top Status */}
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                          {skill.category}
                        </span>
                        {skill.featured && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-blue-50 text-[#1263B5] border border-blue-100 font-semibold">
                            Core
                          </span>
                        )}
                      </div>

                      {/* Skill Name */}
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#1263B5] transition-colors flex items-center gap-1.5">
                        <span>{skill.name}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF]" />}
                      </h4>

                      {/* Brief Snippet */}
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {skill.description}
                      </p>

                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>Inspect detail</span>
                        <Info className="w-3 h-3 text-[#0090D2] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Deep-Dive Skill Inspector Panel (5 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 p-6 rounded-3xl bg-slate-50/90 border border-slate-200 shadow-glass-sm backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1263B5] text-white flex items-center justify-center font-bold text-xs">
                    PR
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                      ARCHITECTURAL SPEC
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      Technical Verification
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Verified
                </span>
              </div>

              {activeSkillDetail ? (
                <div className="mt-5 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#0090D2] font-semibold">
                      SELECTED TECHNOLOGY
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                      {activeSkillDetail.name}
                    </h3>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      IMPLEMENTATION CONTEXT
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {activeSkillDetail.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                      PRODUCTION ATTRIBUTES
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                        <span className="text-[10px] text-slate-400 block">DOMAIN</span>
                        <span className="font-semibold text-slate-800 uppercase text-[11px]">
                          {activeSkillDetail.category}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                        <span className="text-[10px] text-slate-400 block">STANDARD</span>
                        <span className="font-semibold text-[#1263B5] text-[11px]">
                          Production Grade
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1263B5] shrink-0 mt-0.5" />
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Applied across client websites, enterprise simulations, and production deployments.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center text-xs font-mono text-slate-400">
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
