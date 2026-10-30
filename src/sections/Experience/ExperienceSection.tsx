import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { experiences } from "@/data/experience";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 bg-white border-t border-slate-100 overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono text-[#1263B5] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0090D2]" />
            SECTION 07 // PROFESSIONAL TRAJECTORY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            ENGINEERING <span className="text-gradient">EXPERIENCE</span>.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            1–2 years of hands-on production engineering delivering full-stack web solutions, client platforms, ERP custom scripts, and network simulation testbeds.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-blue-200/60 space-y-12 max-w-4xl">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-[#1263B5] group-hover:scale-125 group-hover:border-[#00C8FF] transition-transform duration-300 shadow-sm" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-glass-md hover:border-[#0090D2]/40 transition-all duration-300">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#0090D2] tracking-wider uppercase block">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1263B5] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-slate-700 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 gap-1">
                    <span className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#1263B5]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Achievements Bullet Points */}
                <div className="space-y-2 mb-6">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 text-[#1263B5] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-mono text-slate-400 uppercase mr-1">
                    Stack:
                  </span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white text-slate-700 border border-slate-200 shadow-2xs"
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
