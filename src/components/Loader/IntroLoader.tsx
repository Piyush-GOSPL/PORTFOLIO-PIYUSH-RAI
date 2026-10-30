import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
          }, 400);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 6;
        return Math.min(100, prev + step);
      });
    }, 70);

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
        exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-50 bg-[#FFFFFF] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
      >
        {/* Subtle Cyber Grid Background */}
        <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />

        {/* Ambient Glows */}
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#0090D2]/15 via-[#00C8FF]/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
          {/* Rotating Metallic 3D Badge with Blue Glow */}
          <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
            {/* Outer spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#0090D2]/40"
            />
            {/* Inner counter-spinning ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-t-[#00C8FF] border-r-transparent border-b-[#1263B5] border-l-transparent"
            />
            {/* Chrome metallic center core */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 via-slate-300 to-slate-400 p-[1px] shadow-lg flex items-center justify-center border border-white">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-white via-slate-100 to-slate-200 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-[#0090D2] animate-pulse" />
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
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider text-[#111827]">
              PIYUSH RAI
            </h1>
            <p className="text-xs md:text-sm font-mono tracking-[0.25em] text-[#0090D2] font-semibold uppercase">
              BEYOND DIGITAL
            </p>
            <p className="text-xs text-slate-500 pt-1 font-mono">
              Where Code Meets Infrastructure
            </p>
          </motion.div>

          {/* Progress Bar & Percentage */}
          <div className="w-full mt-8 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono text-slate-500">
              <span>SYSTEM INITIALIZING</span>
              <span className="font-semibold text-[#1263B5]">{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/60 p-[1px]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#1263B5] via-[#0090D2] to-[#00C8FF] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Skip Button */}
          <div className="mt-8">
            <button
              onClick={handleSkip}
              className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono text-slate-500 hover:text-[#0090D2] border border-slate-200 hover:border-[#0090D2]/50 rounded-full transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <span>Skip Intro</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
