'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface LogoFolioSectionProps {
  scrollProgress: MotionValue<number>;
}

export default function LogoFolioSection({ scrollProgress }: LogoFolioSectionProps) {
  // UI elements (headers, footers) fade in as we scroll into the section
  const uiOpacity = useTransform(scrollProgress, [0.6, 0.9], [0, 1]);

  // Static center star fades in as the floating star hands off
  const headerStarOpacity = useTransform(scrollProgress, [0.85, 0.95], [0, 1]);

  // Title scales and fades in smoothly
  const titleScale = useTransform(scrollProgress, [0.4, 0.9], [0.8, 1]);
  const titleOpacity = useTransform(scrollProgress, [0.4, 0.9], [0, 1]);
  const subtitleOpacity = useTransform(scrollProgress, [0.6, 0.9], [0, 1]);

  return (
    <section
      id="logofolio"
      className="relative min-h-[60vh] md:min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col justify-between py-8 md:py-16 px-6 md:px-12 select-none overflow-hidden"
    >
      {/* Cinematic Grain/Noise Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-[5]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Ambient Spotlights & Blur Spots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,90,0,0.06)_0%,rgba(10,10,10,0)_60%)] pointer-events-none z-[1]" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#ff5a00]/3 rounded-full filter blur-[120px] pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff5a00]/3 rounded-full filter blur-[120px] pointer-events-none z-[1]" />

      {/* ================= HEADER BRAND BLOCK (Top Row) ================= */}
      <motion.div style={{ opacity: uiOpacity }} className="relative z-20 w-full max-w-7xl mx-auto flex justify-between items-start">
        {/* Top Left: Think Motto */}
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00] animate-pulse" />
            <span className="text-[9px] tracking-[0.35em] text-white/40 font-display font-medium">THINK</span>
          </div>
          <div className="text-[7.5px] tracking-[0.25em] text-white/20 font-sans flex flex-col gap-0.5 pl-3.5">
            <span>DESIGN.</span>
            <span>CREATE.</span>
            <span>REPEAT.</span>
          </div>
        </div>

        {/* Center Sparkle */}
        <motion.div
          style={{ opacity: headerStarOpacity }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <div className="absolute inset-0 w-8 h-8 bg-[#ff5a00]/50 rounded-full filter blur-md -translate-x-1/4 -translate-y-1/4" />
          <svg className="w-6 h-6 text-[#ff5a00] relative z-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </motion.div>

        {/* Top Right: Coordinates */}
        <div className="flex flex-col items-end gap-1 pt-1 font-sans text-right">
          <span className="text-[10px] tracking-[0.2em] text-[#ff5a00] font-bold">48.029° N</span>
          <span className="text-[9px] tracking-[0.15em] text-white/30 font-medium">7.218° E</span>
          <div className="w-12 h-[1px] bg-white/10 my-2 ml-auto" />
          <span className="text-[7.5px] tracking-[0.2em] text-white/20 font-medium uppercase">VISUAL IDENTITY COLLECTION</span>
        </div>
      </motion.div>

      {/* ================= CENTRAL DISPLAY TYPOGRAPHY ================= */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10">
        <motion.h2
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="text-[8vw] md:text-[6.5vw] font-display font-black tracking-tighter leading-none uppercase select-none flex items-center justify-center"
        >
          <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">LOGO</span>
          <span className="text-[#ff5a00] ml-[1.5vw] drop-shadow-[0_0_40px_rgba(255,90,0,0.15)]">FOLIO</span>
        </motion.h2>

        <motion.div style={{ opacity: subtitleOpacity }} className="flex items-center gap-3 mt-6">
          <span className="w-1 h-1 rounded-full bg-[#ff5a00]/50" />
          <p className="text-[10px] md:text-xs font-sans tracking-[0.3em] text-white/40 uppercase font-bold">
            BRANDS I&apos;VE SHAPED WITH PURPOSE
          </p>
          <span className="w-1 h-1 rounded-full bg-[#ff5a00]/50" />
        </motion.div>
      </div>

      {/* ================= BOTTOM METRICS / COPYRIGHT BLOCK ================= */}
      <motion.div
        style={{ opacity: uiOpacity }}
        className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-6 opacity-30 text-[9px] tracking-[0.15em] font-sans mt-auto"
      >
        <div className="flex gap-4">
          <span>Creative Showcase</span>
          <span>•</span>
          <span>Suspended Space</span>
        </div>
        <div>
          <span>© 2026 SACHIN DESIGN LAB</span>
        </div>
      </motion.div>
    </section>
  );
}
