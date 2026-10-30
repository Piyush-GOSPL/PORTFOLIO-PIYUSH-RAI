import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Server, Database, Shield, Layers, HardDrive, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { CloudCanvas } from "@/three/CloudScene/CloudCanvas";
import { cloudComponents, cloudProviders, CloudComponent } from "@/data/cloudData";

export const CloudSection: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<CloudComponent | null>(
    cloudComponents[0]
  );
  const [activeProvider, setActiveProvider] = useState<string>("all");

  const filteredComponents =
    activeProvider === "all"
      ? cloudComponents
      : cloudComponents.filter(
          (c) => c.provider.toLowerCase() === activeProvider.toLowerCase() || c.provider === "Hybrid"
        );

  return (
    <section
      id="cloud-infrastructure"
      className="relative py-28 bg-[#F8FAFC] border-t border-slate-100 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00C8FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1263B5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono text-[#1263B5] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0090D2]" />
            SECTION 06 // CLOUD ARCHITECTURE & VIRTUALIZATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            SCALABLE <span className="text-gradient">CLOUD</span> ECOSYSTEM.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Multi-cloud infrastructure engineered across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform. High availability application load balancers, secure VPC private networking, managed MySQL/MariaDB database clusters, and persistent object storage.
          </p>
        </div>

        {/* Technology Labels: AWS, MICROSOFT AZURE, GOOGLE CLOUD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {cloudProviders.map((provider) => {
            const isSelected = activeProvider === provider.id;

            return (
              <div
                key={provider.id}
                onClick={() => setActiveProvider(activeProvider === provider.id ? "all" : provider.id)}
                className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? "bg-white border-[#0090D2] shadow-glass-md ring-2 ring-[#0090D2]/20"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#1263B5] uppercase">
                    CLOUD PROVIDER
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: provider.accent }}
                  />
                </div>
                <h3 className="text-base font-extrabold text-[#111827]">{provider.name}</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {provider.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main 3D Cloud Canvas + Component Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 3D Cloud Computing Visualization (7 Cols) */}
          <div className="lg:col-span-7 h-[500px] w-full rounded-3xl bg-gradient-to-b from-white to-blue-50/50 border border-slate-200 shadow-glass-md relative overflow-hidden flex flex-col justify-between">
            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-700 pointer-events-auto shadow-sm">
                <Cloud className="w-3.5 h-3.5 text-[#0090D2]" />
                <span>3D Cloud Mesh Orbit</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-white/80 px-2.5 py-1 rounded-full border border-slate-200 pointer-events-none">
                Click nodes to inspect specs
              </span>
            </div>

            {/* 3D Canvas */}
            <div className="w-full h-full">
              <CloudCanvas
                selectedComponent={selectedComponent}
                onSelectComponent={(comp) => setSelectedComponent(comp)}
              />
            </div>

            {/* Quick Component Selector Strip */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex gap-1.5 overflow-x-auto pb-1 scrollbar-none pointer-events-auto">
              {cloudComponents.map((c) => {
                const isSelected = selectedComponent?.id === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedComponent(c)}
                    className={`shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all border ${
                      isSelected
                        ? "bg-[#1263B5] text-white border-[#1263B5] shadow-sm"
                        : "bg-white/90 text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {c.name.split(" ")[0]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Cloud Node Technical Specifications (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-glass-md space-y-6">
              {selectedComponent ? (
                <>
                  <div className="border-b border-slate-100 pb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-[#1263B5] font-semibold uppercase">
                        {selectedComponent.provider} • {selectedComponent.category}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-[#0090D2] font-semibold border border-blue-100">
                        Active Component
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#111827]">
                      {selectedComponent.name}
                    </h3>
                    <p className="text-xs font-mono text-[#0090D2] mt-0.5">
                      {selectedComponent.tagline}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      ARCHITECTURAL PURPOSE
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                      {selectedComponent.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      SPECIFICATIONS & PROTOCOLS
                    </h4>
                    <div className="space-y-2">
                      {selectedComponent.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs font-mono"
                        >
                          <span className="text-slate-500">{spec.label}</span>
                          <span className="font-semibold text-slate-800">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      CORRESPONDING CLOUD SERVICES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedComponent.services.map((srv) => (
                        <span
                          key={srv}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-50 text-[#1263B5] border border-blue-100"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="py-12 text-center text-xs font-mono text-slate-400">
                  Click any 3D cloud node to inspect technical specifications.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
