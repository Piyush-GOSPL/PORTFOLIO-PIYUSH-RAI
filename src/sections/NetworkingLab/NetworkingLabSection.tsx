import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Network,
  Terminal,
  Activity,
  CheckCircle,
  Copy,
  Check,
  RotateCcw,
  Maximize2,
  Info,
  Server,
  Shield,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { NetworkCanvas } from "@/three/NetworkTopology/NetworkCanvas";
import {
  networkTopics,
  networkDevices,
  NetworkTopic,
  NetworkDevice,
} from "@/data/networkingLabs";

export const NetworkingLabSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<NetworkTopic>(networkTopics[0]);
  const [selectedDevice, setSelectedDevice] = useState<NetworkDevice | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"commands" | "verification" | "device">("commands");

  const handleCopyCommands = (commands: string[], idx: number) => {
    navigator.clipboard.writeText(commands.join("\n"));
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      id="networking-lab"
      className="relative py-28 bg-[#FFFFFF] border-t border-slate-100 overflow-hidden"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-[#0090D2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono text-[#1263B5] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF] animate-pulse" />
            SECTION 05 // SIGNATURE 3D CISCO LAB
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            ENTERPRISE <span className="text-gradient">NETWORKING</span> TOPOLOGY.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Interactive isometric 3D enterprise topology featuring edge routers, L2/L3 multi-layer switches, next-gen perimeter firewalls, and application servers. Select any of the 16 enterprise networking protocols below to illuminate active packet paths and inspect verified Cisco IOS CLI syntax.
          </p>
        </div>

        {/* 16 Interactive Topics Filter Strip */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#1263B5]" />
              SELECT PROTOCOL LAB ({networkTopics.length} MODULES)
            </span>
            <span className="text-[11px] font-mono text-[#0090D2]">
              Active: {selectedTopic.number}. {selectedTopic.title}
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
            {networkTopics.map((topic) => {
              const isActive = selectedTopic.id === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    setSelectedTopic(topic);
                    setSelectedDevice(null);
                  }}
                  className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 border flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#0F172A] text-[#00C8FF] border-[#00C8FF] shadow-sm shadow-[#00C8FF]/20"
                      : "bg-white text-slate-700 border-slate-200 hover:border-[#0090D2] hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-[#00C8FF]" : "bg-slate-300"
                    }`}
                  />
                  <span>
                    {topic.number < 10 ? `0${topic.number}` : topic.number}. {topic.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main 3D Topology Canvas + Interactive Inspector Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 3D Interactive Topology Canvas (7 Cols) */}
          <div className="lg:col-span-7 h-[540px] w-full rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
            {/* Top Bar inside 3D Canvas */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs font-mono text-[#00C8FF] pointer-events-auto">
                <Activity className="w-3.5 h-3.5 text-[#00C8FF] animate-spin" />
                <span>PACKET ENGINE ACTIVE</span>
              </div>

              <div className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-slate-400">
                Left-Click + Drag: Rotate • Scroll: Zoom
              </div>
            </div>

            {/* Canvas Component */}
            <div className="w-full h-full">
              <NetworkCanvas
                selectedTopic={selectedTopic}
                selectedDevice={selectedDevice}
                onSelectDevice={(device) => {
                  setSelectedDevice(device);
                  setActiveTab("device");
                }}
              />
            </div>

            {/* Bottom Status Ribbon */}
            <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-xs text-white flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  TOPOLOGY ROUTE
                </span>
                <span className="font-mono text-xs text-[#00C8FF] font-semibold">
                  {selectedTopic.packetFlow[0]?.label || "Layer 2/3 Convergence"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                <span>{selectedTopic.activeDevices.length} Nodes Highlighted</span>
              </div>
            </div>
          </div>

          {/* Right: Cisco CLI & Diagnostic Terminal (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden min-h-[540px]">
            {/* Terminal Header */}
            <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2">
                  cisco-ios-lab@piyush:~$
                </span>
              </div>

              {/* Tabs */}
              <div className="flex rounded-lg bg-slate-800 p-0.5 text-[11px] font-mono">
                <button
                  onClick={() => setActiveTab("commands")}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === "commands"
                      ? "bg-[#1263B5] text-white font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  CLI Config
                </button>
                <button
                  onClick={() => setActiveTab("verification")}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === "verification"
                      ? "bg-[#1263B5] text-white font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Verification
                </button>
                {selectedDevice && (
                  <button
                    onClick={() => setActiveTab("device")}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === "device"
                        ? "bg-[#1263B5] text-white font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Node Specs
                  </button>
                )}
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4 font-mono text-xs text-slate-300 overflow-y-auto">
              {/* Topic Information & Theory */}
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-3">
                  <span className="text-[10px] text-[#00C8FF] tracking-wider uppercase font-semibold">
                    {selectedTopic.category}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    ID: LAB-{selectedTopic.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {selectedTopic.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed font-sans">
                  {selectedTopic.explanation}
                </p>

                {/* Key Concepts */}
                <div className="mt-3 space-y-1">
                  {selectedTopic.keyConcepts.map((concept, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300 font-sans">
                      <span className="text-[#00C8FF] font-bold">›</span>
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tab: CLI Commands */}
              {activeTab === "commands" && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                      CISCO IOS SYNTAX
                    </span>
                    <button
                      onClick={() => handleCopyCommands(selectedTopic.ciscoCommands, 1)}
                      className="inline-flex items-center gap-1 text-[11px] text-[#00C8FF] hover:underline"
                    >
                      {copiedIndex === 1 ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Commands</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/60 border border-slate-800 text-emerald-400 space-y-1 overflow-x-auto text-[11px]">
                    {selectedTopic.ciscoCommands.map((cmd, i) => (
                      <div
                        key={i}
                        className={cmd.startsWith("!") ? "text-slate-500 italic" : "text-emerald-400"}
                      >
                        {cmd}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Verification Commands */}
              {activeTab === "verification" && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                      SHOW & VERIFICATION EXEC COMMANDS
                    </span>
                    <button
                      onClick={() => handleCopyCommands(selectedTopic.verificationCommands, 2)}
                      className="inline-flex items-center gap-1 text-[11px] text-[#00C8FF] hover:underline"
                    >
                      {copiedIndex === 2 ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Syntax</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/60 border border-slate-800 text-sky-300 space-y-1.5 overflow-x-auto text-[11px]">
                    {selectedTopic.verificationCommands.map((vcmd, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-slate-600">#</span>
                        <span>{vcmd}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Device Node Specs */}
              {activeTab === "device" && selectedDevice && (
                <div className="space-y-3 p-3.5 rounded-xl bg-black/50 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">
                      {selectedDevice.label}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-[#1263B5] text-white">
                      {selectedDevice.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans">
                    {selectedDevice.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[10px] pt-2 border-t border-slate-800">
                    <div>
                      <span className="text-slate-500 block">IP CONFIG:</span>
                      <span className="text-[#00C8FF]">{selectedDevice.ip}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">SEGMENT:</span>
                      <span className="text-slate-300">{selectedDevice.vlan || "Routed Fabric"}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Disclaimer Notice required by specification */}
              <div className="pt-3 border-t border-slate-900 text-[10px] text-slate-500 leading-normal flex items-start gap-2">
                <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  Interactive educational demonstration. Commands reflect Cisco IOS standards tested in Packet Tracer and EVE-NG virtual laboratories.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
