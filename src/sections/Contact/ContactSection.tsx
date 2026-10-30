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

    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus("success");
    }, 500);
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#071426] border-t border-white/10 overflow-hidden"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-dark opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#168BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10243D] border border-white/10 text-[11px] font-mono text-[#00D4FF] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
            SECTION 08 // INITIATE TRANSMISSION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            LET'S BUILD SOMETHING <span className="text-gradient">EXTRAORDINARY</span>.
          </h2>
          <p className="mt-4 text-[#A7B7CC] text-base sm:text-lg leading-relaxed font-sans">
            Have an idea, an enterprise networking challenge, or an engineering opportunity? Let's connect and create something meaningful.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl glass-card border border-white/10 shadow-glass-dark space-y-5">
              <span className="text-xs font-mono font-bold tracking-wider text-[#00D4FF] uppercase block">
                DIRECT CHANNELS
              </span>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#071426] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#168BFF]/15 text-[#00D4FF] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A7B7CC] uppercase block">
                      EMAIL
                    </span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#00D4FF] transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-[#A7B7CC] hover:text-[#00D4FF] hover:bg-white/5 transition-colors"
                  title="Copy email address"
                >
                  {emailCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-[#071426] border border-white/10 flex items-center justify-between hover:border-[#00D4FF]/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#168BFF]/15 text-[#00D4FF] flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A7B7CC] uppercase block">
                      LINKEDIN
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                      piyush-rai-43b5a9241
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#00D4FF] group-hover:translate-x-0.5 transition-transform">
                  ›
                </span>
              </a>

              {/* GitHub Card */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-[#071426] border border-white/10 flex items-center justify-between hover:border-[#168BFF]/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-white flex items-center justify-center">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A7B7CC] uppercase block">
                      GITHUB
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                      PiyushKumarRai
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#168BFF] group-hover:translate-x-0.5 transition-transform">
                  ›
                </span>
              </a>
            </div>

            {/* Quick Response Notice */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#10243D] to-[#071426] border border-white/10 text-xs text-[#A7B7CC] leading-relaxed">
              <span className="font-bold text-white block mb-1 font-heading">
                Rapid Response Within 24 Hours
              </span>
              Whether you are looking to architect enterprise Cisco/Juniper routing, stage data center hardware, or build full-stack web applications, feel free to transmit a direct message.
            </div>
          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl glass-card border border-white/10 shadow-glass-dark">
              <div className="mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Send Transmission
                  </h3>
                  <p className="text-xs font-mono text-[#A7B7CC] mt-0.5">
                    Direct Email Gateway
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-[#00D4FF]" />
              </div>

              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading">
                    Message Prepared & Email Client Launched!
                  </h4>
                  <p className="text-xs text-[#A7B7CC] max-w-sm mx-auto leading-relaxed font-sans">
                    Thank you, {formData.name}. If your default email client did not launch, feel free to directly email: <strong>{profileData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-[#168BFF] text-white hover:bg-[#00D4FF] hover:text-[#071426] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-[#A7B7CC] uppercase tracking-wider block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border border-white/10 text-xs text-white focus:outline-none focus:border-[#00D4FF] transition-all font-sans"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-[#A7B7CC] uppercase tracking-wider block mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border border-white/10 text-xs text-white focus:outline-none focus:border-[#00D4FF] transition-all font-sans"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-[#A7B7CC] uppercase tracking-wider block mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Infrastructure Project / Engineering Discussion"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border border-white/10 text-xs text-white focus:outline-none focus:border-[#00D4FF] transition-all font-sans"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-[#A7B7CC] uppercase tracking-wider block mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your technical requirements, network architecture, or opportunity..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#071426] border border-white/10 text-xs text-white focus:outline-none focus:border-[#00D4FF] transition-all font-sans resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#168BFF] to-[#00D4FF] text-white text-xs font-mono font-semibold tracking-wider uppercase hover:shadow-glow-cyan transition-all duration-300 flex items-center justify-center gap-2"
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
