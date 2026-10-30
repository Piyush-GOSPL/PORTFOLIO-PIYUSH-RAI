import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers, ArrowUpRight, CheckCircle, Sparkles, X, ChevronRight } from "lucide-react";
import { projectsData, Project } from "@/data/projects";

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "Full Stack", label: "Full Stack" },
    { id: "Enterprise Web", label: "Enterprise Web" },
    { id: "Networking & Systems", label: "Networking Platforms" },
    { id: "ERP Solutions", label: "ERPNext Customization" },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28 bg-[#F8FAFC] border-t border-slate-100 overflow-hidden">
      {/* Background Subtle Ambiance */}
      <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#0090D2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono text-[#1263B5] font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF]" />
              SECTION 04 // FEATURED PRODUCTION SYSTEMS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
              CINEMATIC <span className="text-gradient">PROJECT</span> GALLERY.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Real commercial applications, production e-commerce architectures, corporate platforms, and systems software engineered with high reliability.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  filter === cat.id
                    ? "bg-[#1263B5] text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-[#0090D2]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Floating Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative flex flex-col justify-between rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-glass-lg hover:border-[#0090D2]/50 transition-all duration-500 overflow-hidden"
            >
              {/* Top Graphic Showcase Header */}
              <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-[#1263B5] p-5 flex flex-col justify-between overflow-hidden">
                {/* Background Cyber Grid */}
                <div className="absolute inset-0 cyber-grid opacity-30" />
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#00C8FF]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                {/* Top Bar inside card */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#00C8FF] bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    PROJECT {project.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/80 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {project.status}
                  </span>
                </div>

                {/* Mockup Title Presentation */}
                <div className="relative z-10">
                  <span className="text-[10px] font-mono text-[#38BDF8] tracking-widest uppercase block mb-1">
                    {project.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00C8FF] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Architecture Bullet Highlights */}
                  <div className="space-y-1.5 border-t border-slate-100 pt-3">
                    {project.architectureHighlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1263B5] mt-1 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-50 text-slate-700 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-[#1263B5]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1263B5] text-slate-700 text-xs font-semibold font-mono transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-xl bg-[#1263B5] hover:bg-[#0F5298] text-white text-xs font-semibold font-mono transition-all flex items-center gap-1 shadow-sm"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 bg-gradient-to-r from-slate-900 to-[#1263B5] text-white flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-xs font-mono text-[#00C8FF]">
                    <span>PROJECT {selectedProject.number}</span>
                    <span>•</span>
                    <span>{selectedProject.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
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
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    SYSTEM OVERVIEW
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    KEY ARCHITECTURAL HIGHLIGHTS
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.architectureHighlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                        <CheckCircle className="w-4 h-4 text-[#1263B5] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    FEATURES & MODULES
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-blue-50/60 text-[11px] font-mono text-slate-800 border border-blue-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0090D2]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    TECHNOLOGY STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Status: <strong className="text-slate-800">{selectedProject.status}</strong>
                </span>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-xl text-xs font-mono text-slate-600 hover:bg-slate-200 transition-colors"
                  >
                    Close
                  </button>
                  {selectedProject.website && (
                    <a
                      href={selectedProject.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-[#1263B5] text-white hover:bg-[#0090D2] transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Visit Live Website</span>
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

