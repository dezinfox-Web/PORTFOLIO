'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function VisualIdentityIntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle interactive mouse spotlight offset
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      id="visual-identity-intro"
      className="relative min-h-[60vh] md:min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col justify-between py-8 md:py-16 px-6 md:px-12 select-none overflow-hidden"
    >
      {/* High-End Cinematic Noise Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-[5]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Ambient Spotlight following the mouse cursor */}
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,90,0,0.05)_0%,rgba(10,10,10,0)_70%)] pointer-events-none z-[1]"
      />

      {/* Static Glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[#ff5a00]/3 rounded-full filter blur-[100px] pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#ff5a00]/3 rounded-full filter blur-[100px] pointer-events-none z-[1]" />

      {/* ================= HEADER BRAND BLOCK (Top Row) ================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex justify-between items-start">

        {/* Top Left: Think Motto with orange dot */}
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00] animate-pulse" />
            <span className="text-[9px] tracking-[0.35em] text-white/40 font-display font-medium">THINK</span>
          </div>
          <div className="text-[7.5px] tracking-[0.25em] text-white/20 font-sans flex flex-col gap-0.5 pl-3.5 leading-relaxed font-bold">
            <span>THINK.</span>
            <span>DESIGN.</span>
            <span>CREATE.</span>
            <span>REPEAT.</span>
          </div>
        </div>

        {/* Center 4-Point Sparkle with soft bloom glow */}
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative mt-2"
        >
          <div className="absolute inset-0 w-8 h-8 bg-[#ff5a00]/60 rounded-full filter blur-md -translate-x-[5%] -translate-y-[5%]" />
          <svg className="w-7 h-7 text-[#ff5a00] relative z-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C12 2 12.5 9.5 14.5 11.5C16.5 13.5 24 14 24 14C24 14 16.5 14.5 14.5 16.5C12.5 18.5 12 26 12 26C12 26 11.5 18.5 9.5 16.5C7.5 14.5 0 14 0 14C0 14 7.5 13.5 9.5 11.5C11.5 9.5 12 2 12 2Z" />
          </svg>
        </motion.div>

        {/* Top Right: Coordinates & Collection */}
        <div className="flex flex-col items-end gap-1 pt-1 font-sans text-right">
          <span className="text-[10px] tracking-[0.2em] text-[#ff5a00] font-bold">48.029° N</span>
          <span className="text-[9px] tracking-[0.15em] text-white/30 font-medium">7.218° E</span>
          <div className="w-12 h-[1px] bg-white/10 my-2 ml-auto" />
          <span className="text-[7.5px] tracking-[0.2em] text-white/20 font-medium uppercase font-semibold">VISUAL IDENTITY COLLECTION</span>
        </div>

      </div>

      {/* ================= CENTRAL DISPLAY TYPOGRAPHY & WATERMARK ================= */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10">

        {/* Faint Horizontal Outline Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03] overflow-hidden">
          <h2
            className="text-[16vw] font-poppins font-black tracking-tighter text-white uppercase whitespace-nowrap"
            style={{
              WebkitTextStroke: '2px white',
              fill: 'none',
              color: 'transparent'
            }}
          >
            VISUAL IDENTITY
          </h2>
        </div>

        {/* Main Visual Identity Header Stack */}
        <h2 className="text-[8vw] md:text-[6.5vw] font-poppins font-black tracking-tighter leading-none uppercase select-none flex flex-col items-center justify-center">
          <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.03)]">VISUAL</span>
          <span className="text-[#ff5a00] drop-shadow-[0_0_40px_rgba(255,90,0,0.12)] mt-[0.5vw]">IDENTITY</span>
        </h2>

        {/* Subtitle bottom stack */}
        <div className="flex flex-col items-center gap-2 mt-8 font-sans font-semibold">
          <p className="text-[9px] md:text-[10px] tracking-[0.25em] text-white/50 uppercase">
            • BRANDS ARE MORE THAN JUST A LOOK •
          </p>
          <p className="text-[9px] md:text-[10px] tracking-[0.25em] text-white/30 uppercase">
            THEY ARE <span className="text-[#ff5a00] font-bold">EXPERIENCES</span>.
          </p>
        </div>
      </div>

      {/* ================= BOTTOM DECORATIVE INTERACTIVE BAR ================= */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-between mt-auto pt-8 select-none z-20">
        {/* Horizontal line running across */}
        <div className="absolute left-0 right-0 h-[1px] bg-white/10 top-1/2 -translate-y-1/2" />

        {/* Left Circled S */}
        <div className="relative z-10 bg-[#0a0a0a] pr-4">
          <button className="w-10 h-10 rounded-full border border-[#ff5a00]/40 flex items-center justify-center text-xs text-[#ff5a00] font-display font-bold hover:border-[#ff5a00] hover:text-white transition-all duration-300">
            S
          </button>
        </div>

        {/* Center Down Arrow Circle */}
        <div className="relative z-10 bg-[#0a0a0a] px-4">
          <button className="w-10 h-10 rounded-full border border-[#ff5a00]/40 flex items-center justify-center text-sm text-[#ff5a00] hover:border-[#ff5a00] hover:text-white transition-all duration-300 animate-bounce">
            ↓
          </button>
        </div>

        {/* Right Circled Plus */}
        <div className="relative z-10 bg-[#0a0a0a] pl-4">
          <button className="w-10 h-10 rounded-full border border-[#ff5a00]/40 flex items-center justify-center text-sm text-[#ff5a00] hover:border-[#ff5a00] hover:text-white transition-all duration-300">
            +
          </button>
        </div>
      </div>

    </section>
  );
}
