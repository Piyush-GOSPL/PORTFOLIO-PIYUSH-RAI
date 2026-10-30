import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, CheckCircle, Clock } from "lucide-react";
import { educationList, certificationTracks } from "@/data/experience";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-28 bg-[#F8FAFC] border-t border-slate-100 overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono text-[#1263B5] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF]" />
            SECTION 08 // ACADEMIC & CERTIFICATION ROADMAP
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            EDUCATION & <span className="text-gradient">CERTIFICATIONS</span>.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Honest and rigorous professional development. Below is the formal computer science academic foundation alongside active industry certification preparation tracks across Cisco, AWS, Azure, and network security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Formal Academic Education (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-500 uppercase">
              <GraduationCap className="w-4 h-4 text-[#1263B5]" />
              ACADEMIC DEGREE
            </div>

            {educationList.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-glass-sm space-y-4"
              >
                <div>
                  <span className="text-xs font-mono text-[#0090D2] font-semibold">
                    {edu.period}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600">
                    {edu.institution}
                  </p>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    Field: {edu.field}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">
                    Core Coursework & Specialized Labs
                  </span>
                  {edu.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1263B5] mt-1.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Preparation Distinction Notice */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-slate-600 leading-relaxed space-y-1">
              <span className="font-bold text-[#1263B5] block flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0090D2]" />
                Certification Transparency
              </span>
              <p>
                All tracks indicated as <strong>"In Active Preparation"</strong> represent comprehensive hands-on lab practice and curriculum study (Cisco IOS Packet Tracer/EVE-NG, AWS Cloud Architectures) progressing toward formal examination.
              </p>
            </div>
          </div>

          {/* Right Column: Certification Preparation Tracks (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-500 uppercase">
              <Award className="w-4 h-4 text-[#0090D2]" />
              SPECIALIZATION & CERTIFICATION TRACKS
            </div>

            <div className="space-y-4">
              {certificationTracks.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#0090D2]/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        {cert.issuer}
                      </span>
                      <h4 className="text-base font-bold text-slate-900">
                        {cert.title}
                      </h4>
                    </div>

                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold border ${cert.badgeColor}`}
                    >
                      {cert.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {cert.coreTopics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-50 text-slate-600 border border-slate-200/60"
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
