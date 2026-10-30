import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            onComplete();
          }, 350);
          return 100;
        }
        const step = Math.floor(Math.random() * 14) + 8;
        return Math.min(100, prev + step);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsFinished(true);
    onComplete();
  };

  if (isFinished) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-50 bg-[#071426] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
      >
        {/* Cyber Dark Grid Background */}
        <div className="absolute inset-0 cyber-grid-dark opacity-60 pointer-events-none" />

        {/* Ambient Glows */}
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-[#168BFF]/20 via-[#00D4FF]/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
          {/* Rotating Metallic 3D Badge with Cyan Rim */}
          <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
            {/* Outer spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-[#00D4FF]/40"
            />
            {/* Inner counter-spinning ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-t-[#00D4FF] border-r-transparent border-b-[#168BFF] border-l-transparent"
            />
            {/* Chrome metallic center core */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-[1.5px] shadow-2xl flex items-center justify-center border border-white/20">
              <div className="w-full h-full rounded-2xl bg-[#0B1930] flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-[#00D4FF] animate-pulse" />
              </div>
            </div>
          </div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-1.5"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider text-white font-heading">
              PIYUSH RAI
            </h1>
            <p className="text-xs md:text-sm font-mono tracking-[0.25em] text-[#00D4FF] font-semibold uppercase">
              BEYOND DIGITAL
            </p>
            <p className="text-xs text-[#A7B7CC] pt-1 font-mono">
              Where Code Meets Enterprise Infrastructure
            </p>
          </motion.div>

          {/* Progress Bar & Percentage */}
          <div className="w-full mt-8 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono text-[#A7B7CC]">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#168BFF]" />
                INITIALIZING CORE KERNEL
              </span>
              <span className="font-semibold text-[#00D4FF]">{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-[#10243D] rounded-full overflow-hidden border border-white/10 p-[1px]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#168BFF] via-[#00D4FF] to-white rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Skip Button */}
          <div className="mt-8">
            <button
              onClick={handleSkip}
              className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-[#A7B7CC] hover:text-white border border-white/10 hover:border-[#00D4FF]/50 rounded-full transition-all duration-300 bg-[#0B1930]/80 backdrop-blur-sm"
            >
              <span>Skip Intro</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#00D4FF]" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
