import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, CheckCircle, Clock } from "lucide-react";
import { educationData, certificationData } from "@/data/certifications";

export const EducationSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative py-28 bg-[#0B1930] border-t border-white/10 overflow-hidden"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-dots-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10243D] border border-white/10 text-[11px] font-mono text-[#00D4FF] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
            SECTION 07 // ACADEMIC & CERTIFICATION ROADMAP
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            EDUCATION & <span className="text-gradient">CERTIFICATIONS</span>.
          </h2>
          <p className="mt-4 text-[#A7B7CC] text-base sm:text-lg leading-relaxed font-sans">
            Formal computer science engineering foundation alongside hands-on lab preparation across Cisco, AWS, Azure, Fortinet, and Enterprise Linux.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Formal Academic Education (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#A7B7CC] uppercase">
              <GraduationCap className="w-4 h-4 text-[#00D4FF]" />
              ACADEMIC DEGREE
            </div>

            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-3xl glass-card border border-white/10 shadow-glass-dark space-y-4"
              >
                <div>
                  <span className="text-xs font-mono text-[#00D4FF] font-semibold">
                    {edu.period}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1 font-heading">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-semibold text-[#168BFF] mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs font-mono text-[#A7B7CC] mt-0.5">
                    Field: {edu.field}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase text-[#A7B7CC] tracking-wider block">
                    Core Coursework & Specialized Labs
                  </span>
                  {edu.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#F1F5F9] font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-1.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Transparency Note */}
            <div className="p-5 rounded-2xl bg-[#071426] border border-white/10 text-xs text-[#A7B7CC] leading-relaxed space-y-1">
              <span className="font-bold text-[#00D4FF] block flex items-center gap-1.5 font-heading">
                <Clock className="w-4 h-4 text-[#00D4FF]" />
                Certification Transparency
              </span>
              <p className="font-sans">
                Tracks indicated as <strong>"In Active Preparation"</strong> represent comprehensive hands-on lab practice and curriculum study (Cisco IOS Packet Tracer/EVE-NG, AWS Cloud Architectures) progressing toward formal examination.
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Certification Preparation Tracks (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#A7B7CC] uppercase">
              <Award className="w-4 h-4 text-[#168BFF]" />
              SPECIALIZATION & CERTIFICATION TRACKS
            </div>

            <div className="space-y-4">
              {certificationData.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl glass-card border border-white/10 hover:border-[#00D4FF]/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] font-mono text-[#A7B7CC] uppercase tracking-wider block">
                        {cert.issuer}
                      </span>
                      <h4 className="text-base font-bold text-white font-heading">
                        {cert.title}
                      </h4>
                    </div>

                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold border ${cert.badgeColor}`}
                    >
                      {cert.status}
                    </span>
                  </div>

                  <p className="text-xs text-[#A7B7CC] leading-relaxed mb-3 font-sans">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {cert.coreTopics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#071426] text-[#A7B7CC] border border-white/5"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
