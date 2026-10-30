import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, CheckCircle, X, ChevronRight, Globe, Layers } from "lucide-react";
import { webProjectsData, WebProject } from "@/data/webProjects";

export const WebProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<WebProject | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Web Platforms" },
    { id: "Full Stack Web", label: "Full Stack" },
    { id: "Enterprise Frontend", label: "Commercial Web" },
    { id: "Systems & EdTech", label: "EdTech Platform" },
    { id: "ERP Customization", label: "ERPNext Customization" },
  ];

  const filteredProjects =
    categoryFilter === "all"
      ? webProjectsData
      : webProjectsData.filter((p) => p.category === categoryFilter);

  return (
    <section
      id="web-projects"
      className="relative py-28 bg-[#071426] border-t border-white/10 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-grid-dark opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10243D] border border-white/10 text-[11px] font-mono text-[#00D4FF] font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
              SECTION 04B // WEB DEVELOPMENT PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
              FULL STACK <span className="text-gradient">WEB SYSTEMS</span>.
            </h2>
            <p className="mt-3 text-[#A7B7CC] text-base sm:text-lg leading-relaxed font-sans">
              Production e-commerce architectures, international corporate platforms, exam simulation engines, and enterprise Frappe/ERPNext business workflows.
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
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative flex flex-col justify-between rounded-3xl glass-card border border-white/10 hover:border-[#00D4FF]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Graphic Mockup Header */}
              <div className="relative h-48 w-full bg-gradient-to-br from-[#071426] via-[#10243D] to-[#168BFF]/40 p-5 flex flex-col justify-between overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 cyber-grid-dark opacity-30" />
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#00D4FF]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                {/* Top Info Bar */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#00D4FF] bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    SYSTEM {project.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/90 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {project.status}
                  </span>
                </div>

                {/* Mockup Title */}
                <div className="relative z-10">
                  <span className="text-[10px] font-mono text-[#00D4FF] tracking-widest uppercase block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00D4FF] transition-colors font-heading">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs sm:text-sm text-[#A7B7CC] leading-relaxed mb-4 font-sans line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Architecture Bullet Highlights */}
                  <div className="space-y-1.5 border-t border-white/5 pt-3">
                    {project.architectureHighlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#F1F5F9] font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills & Actions */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#071426] text-[#A7B7CC] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#168BFF]/20 text-[#00D4FF]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 px-3 rounded-xl bg-[#071426] hover:bg-[#168BFF] hover:text-white text-[#A7B7CC] text-xs font-semibold font-mono transition-colors flex items-center justify-center gap-1 border border-white/10 hover:border-transparent"
                    >
                      <span>Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3.5 rounded-xl bg-gradient-to-r from-[#168BFF] to-[#00D4FF] hover:opacity-90 text-white text-xs font-semibold font-mono transition-all flex items-center gap-1 shadow-sm"
                        title="Visit Live System"
                      >
                        <span>Live</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
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
                    <span>SYSTEM {selectedProject.number}</span>
                    <span>•</span>
                    <span>{selectedProject.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading">
                    {selectedProject.title}
                  </h3>
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
                    ARCHITECTURE & PURPOSE
                  </h4>
                  <p className="text-sm text-[#F1F5F9] leading-relaxed font-sans">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#A7B7CC] mb-2">
                    KEY ARCHITECTURAL HIGHLIGHTS
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.architectureHighlights.map((hl, idx) => (
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
                    CORE FEATURES & CAPABILITIES
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-[#071426] text-xs font-mono text-[#00D4FF] border border-white/10 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#A7B7CC] mb-2">
                    TECHNOLOGY STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#10243D] text-white border border-white/10"
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
                  Status: <strong className="text-white">{selectedProject.status}</strong>
                </span>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-xl text-xs font-mono text-[#A7B7CC] hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                  {selectedProject.website && (
                    <a
                      href={selectedProject.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-[#168BFF] to-[#00D4FF] text-white hover:opacity-90 transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Visit Live System</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

