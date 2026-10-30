import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, Copy, Check, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side Validation
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.subject.trim()) {
      setStatus("error");
      setErrorMessage("Please enter a subject.");
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setStatus("error");
      setErrorMessage("Please write a message with at least 10 characters.");
      return;
    }

    setStatus("submitting");

    // Provide immediate mailto launch to guarantee guaranteed transmission
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus("success");
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#FFFFFF] border-t border-slate-100 overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0090D2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono text-[#1263B5] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF]" />
            SECTION 09 // INITIATE TRANSMISSION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            LET'S BUILD SOMETHING <span className="text-gradient">EXTRAORDINARY</span>.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Have an idea, a technical challenge or an opportunity? Let's connect and create something meaningful.
          </p>
        </div>

        {/* Contact Layout: Left Details vs Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact & Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-glass-sm space-y-5">
              <span className="text-xs font-mono font-bold tracking-wider text-[#1263B5] uppercase block">
                DIRECT CONTACT CHANNELS
              </span>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1263B5] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      EMAIL
                    </span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#1263B5] transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-slate-400 hover:text-[#0090D2] hover:bg-slate-50 transition-colors"
                  title="Copy email address"
                >
                  {emailCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between hover:border-[#0090D2]/50 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0090D2] flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      LINKEDIN
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#1263B5] transition-colors">
                      piyush-rai-43b5a9241
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#0090D2] group-hover:translate-x-0.5 transition-transform">
                  ›
                </span>
              </a>

              {/* GitHub Card */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between hover:border-[#1263B5]/50 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      GITHUB
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#1263B5] transition-colors">
                      Piyush-GOSPL
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#1263B5] group-hover:translate-x-0.5 transition-transform">
                  ›
                </span>
              </a>
            </div>

            {/* Quick Response Notice */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-slate-50 to-white border border-blue-100/80 text-xs text-slate-600 leading-relaxed">
              <span className="font-bold text-slate-900 block mb-1">
                Typical Response Within 24 Hours
              </span>
              Whether you are looking to build a new web application, deploy ERPNext, or collaborate on networking systems, feel free to send a message.
            </div>
          </div>

          {/* Right Column: Validated Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-glass-md">
              <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Send Transmission
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    Validated Message Pipeline
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-[#0090D2]" />
              </div>

              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Message Prepared & Email Client Launched!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name}. If your default email client didn't open automatically, you can directly email me at: <strong>{profileData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-[#1263B5] text-white hover:bg-[#0090D2] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-600 uppercase tracking-wider block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0090D2] focus:bg-white transition-all font-sans"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-600 uppercase tracking-wider block mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0090D2] focus:bg-white transition-all font-sans"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-600 uppercase tracking-wider block mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Engineering Discussion"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0090D2] focus:bg-white transition-all font-sans"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-600 uppercase tracking-wider block mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your technical requirement, project scope, or opportunity..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#0090D2] focus:bg-white transition-all font-sans resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1263B5] via-[#0090D2] to-[#00C8FF] text-white text-xs font-mono font-semibold tracking-wider uppercase hover:shadow-glow-blue transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>TRANSMIT MESSAGE</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
