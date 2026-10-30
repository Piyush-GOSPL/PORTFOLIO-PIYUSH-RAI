import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight, TrendingUp } from "lucide-react";
import { experienceData, ExperienceItem } from "@/data/experience";

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-28 bg-[#071426] border-t border-white/10 overflow-hidden"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-dark opacity-50 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#168BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10243D] border border-white/10 text-[11px] font-mono text-[#00D4FF] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
            SECTION 06 // PROFESSIONAL TRAJECTORY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            PROFESSIONAL <span className="text-gradient">EXPERIENCE</span>.
          </h2>
          <p className="mt-4 text-[#A7B7CC] text-base sm:text-lg leading-relaxed font-sans">
            Verified engineering roles spanning Cisco enterprise networking, network security, proof-of-concept testing, and large-scale onboarding workflow coordination.
          </p>
        </div>

        {/* Animated Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#168BFF]/40 space-y-12 max-w-4xl">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot with Cyan Glow */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-5 h-5 rounded-full bg-[#071426] border-4 border-[#00D4FF] group-hover:scale-125 group-hover:border-white transition-transform duration-300 shadow-glow-cyan" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-[#00D4FF]/40 transition-all duration-300">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-semibold text-[#00D4FF] tracking-wider uppercase">
                        {exp.type}
                      </span>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          Current Role
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00D4FF] transition-colors font-heading">
                      {exp.role}
                    </h3>
                    <div className="text-sm sm:text-base font-semibold text-[#168BFF] mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-[#A7B7CC] gap-1">
                    <span className="inline-flex items-center gap-1.5 bg-[#071426] px-3 py-1 rounded-md border border-white/10 text-white font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#00D4FF]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#A7B7CC]">
                      <MapPin className="w-3 h-3 text-[#168BFF]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {exp.responsibilities.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F1F5F9] leading-relaxed font-sans">
                      <CheckCircle className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics Highlight Banner if present */}
                {exp.metrics && (
                  <div className="mb-5 p-3 rounded-xl bg-[#168BFF]/10 border border-[#168BFF]/20 flex items-center gap-2 text-xs font-mono text-[#00D4FF]">
                    <TrendingUp className="w-4 h-4 shrink-0" />
                    <span>Highlight: <strong>{exp.metrics}</strong></span>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-mono text-[#A7B7CC] uppercase mr-1">
                    Domain Tech:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#071426] text-[#A7B7CC] border border-white/10 group-hover:border-[#00D4FF]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
