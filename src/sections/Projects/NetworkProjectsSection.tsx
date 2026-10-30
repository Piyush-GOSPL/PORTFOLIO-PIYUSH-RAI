import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Cpu,
  Network,
  FileSearch,
  Server,
  HardDrive,
  ChevronRight,
  CheckCircle,
  X,
  Sparkles,
  Layers,
} from "lucide-react";
import { networkProjectsData, NetworkProject } from "@/data/networkProjects";

const iconMap = {
  Shield: Shield,
  Cpu: Cpu,
  Network: Network,
  FileSearch: FileSearch,
  Server: Server,
  HardDrive: HardDrive,
};

export const NetworkProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<NetworkProject | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Infrastructure" },
    { id: "Security", label: "Security & DLP" },
    { id: "Compute & Servers", label: "GPU & Compute" },
    { id: "Routing & Switching", label: "Routing & Switches" },
    { id: "Data Center Migration", label: "Data Center Migration" },
    { id: "Network Design", label: "Audit & Design" },
  ];

  const filteredProjects =
    categoryFilter === "all"
      ? networkProjectsData
      : networkProjectsData.filter((p) => p.category === categoryFilter);

  return (
    <section
      id="infra-projects"
      className="relative py-28 bg-[#0B1930] border-t border-white/10 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-dots-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#168BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10243D] border border-white/10 text-[11px] font-mono text-[#00D4FF] font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
              SECTION 04A // NETWORK & INFRASTRUCTURE PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
              MISSION-CRITICAL <span className="text-gradient">INFRASTRUCTURE</span>.
            </h2>
            <p className="mt-3 text-[#A7B7CC] text-base sm:text-lg leading-relaxed font-sans">
              Real enterprise deployments: Data Loss Prevention (DLP) staging, RGCI high-density GPU servers, Juniper switch colocation, and data center migrations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  categoryFilter === cat.id
                    ? "bg-[#168BFF] text-white shadow-glow-cyan"
                    : "bg-[#10243D] text-[#A7B7CC] border border-white/10 hover:border-[#00D4FF]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = iconMap[project.iconName] || Server;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between rounded-3xl glass-card border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 overflow-hidden"
              >
                {/* Top Banner with Icon & Number */}
                <div className="p-6 pb-4 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: "#071426",
                        borderColor: `${project.accentColor}40`,
                        color: project.accentColor,
                      }}
                    >
                      <Icon className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#00D4FF] uppercase block">
                        PROJECT {project.number}
                      </span>
                      <span className="text-xs font-mono text-[#A7B7CC] block truncate max-w-[180px]">
                        {project.clientOrDomain}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#071426] text-[#00D4FF] border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors font-heading">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A7B7CC] mt-2 leading-relaxed font-sans line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    {/* Hardware & Tools Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.toolsAndHardware.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#071426] text-[#A7B7CC] border border-white/5"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.toolsAndHardware.length > 3 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#168BFF]/20 text-[#00D4FF]">
                          +{project.toolsAndHardware.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 px-3 rounded-xl bg-[#071426] hover:bg-[#168BFF] hover:text-white text-[#A7B7CC] text-xs font-semibold font-mono transition-all flex items-center justify-center gap-1.5 border border-white/10 hover:border-transparent"
                    >
                      <span>Expand Technical Specs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expandable Technical Specification Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0B1930] rounded-3xl shadow-2xl border border-white/15 overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 bg-gradient-to-r from-[#071426] to-[#10243D] text-white flex items-start justify-between border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-xs font-mono text-[#00D4FF]">
                    <span>PROJECT {selectedProject.number}</span>
                    <span>•</span>
                    <span>{selectedProject.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-[#A7B7CC] font-mono mt-0.5">
                    Domain / Client: {selectedProject.clientOrDomain}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#A7B7CC] mb-1.5">
                    DEPLOYMENT OVERVIEW
                  </h4>
                  <p className="text-sm text-[#F1F5F9] leading-relaxed font-sans">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#A7B7CC] mb-2">
                    TECHNICAL EXECUTION HIGHLIGHTS
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.technicalHighlights.map((hl, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[#F1F5F9] bg-[#071426] p-3 rounded-xl border border-white/10 font-sans"
                      >
                        <CheckCircle className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#A7B7CC] mb-2">
                    TOOLS, HARDWARE & APPLIANCES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.toolsAndHardware.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#10243D] text-[#00D4FF] border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 border-t border-white/10 bg-[#071426] flex items-center justify-between">
                <span className="text-xs font-mono text-[#A7B7CC]">
                  Verification: <strong className="text-white">{selectedProject.status}</strong>
                </span>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl text-xs font-mono font-semibold bg-[#168BFF] text-white hover:bg-[#00D4FF] hover:text-[#071426] transition-colors"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
