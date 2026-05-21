'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function ContactFooterSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    const container = containerRef.current;
    if (container) container.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (container) container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      id="contact-footer"
      className="relative min-h-[60vh] md:min-h-screen w-full bg-[#111111] text-white flex flex-col justify-between py-8 md:py-16 px-6 md:px-12 select-none overflow-hidden"
    >
      {/* Noise Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-[5]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid Lines Background — editorial feel */}
      <div
        className="absolute inset-0 pointer-events-none z-[2] opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Mouse spotlight */}
      <motion.div
        style={{ left: smoothX, top: smoothY }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,90,0,0.06)_0%,rgba(17,17,17,0)_70%)] pointer-events-none z-[3]"
      />

      {/* Ambient orange glow — center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff5a00]/5 rounded-full filter blur-[120px] pointer-events-none z-[1]" />

      {/* ===== TOP HEADER STRIP ===== */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex justify-between items-start">
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00] animate-pulse" />
            <span className="text-[9px] tracking-[0.35em] text-white/40 font-display font-medium uppercase">Portfolio</span>
          </div>
          <div className="text-[7.5px] tracking-[0.25em] text-white/20 font-sans flex flex-col gap-0.5 pl-3.5 leading-relaxed font-bold">
            <span>THINK.</span>
            <span>DESIGN.</span>
            <span>CREATE.</span>
            <span>REPEAT.</span>
          </div>
        </div>

        {/* Top Right coordinates */}
        <div className="flex flex-col items-end gap-1 pt-1 font-sans text-right">
          <span className="text-[10px] tracking-[0.2em] text-[#ff5a00] font-bold">48.029° N</span>
          <span className="text-[9px] tracking-[0.15em] text-white/30 font-medium">7.218° E</span>
          <div className="w-12 h-[1px] bg-white/10 my-2 ml-auto" />
          <span className="text-[7.5px] tracking-[0.2em] text-white/20 font-medium uppercase">VISUAL IDENTITY COLLECTION</span>
        </div>
      </div>

      {/* ===== CENTER — SIGNATURE ===== */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">

        {/* Optional subtitle above */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[9px] tracking-[0.4em] text-white/25 font-sans uppercase font-bold mb-10"
        >
          Contáctame aquí
        </motion.p>

        {/* SACHIN Signature / Wordmark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-center gap-2"
        >
          {/* Glowing star above signature */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative mb-4"
          >
            <div className="absolute inset-0 w-10 h-10 bg-[#ff5a00]/60 rounded-full filter blur-lg -translate-x-[10%] -translate-y-[10%]" />
            <svg className="w-9 h-9 text-[#ff5a00] relative z-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 12.5 9.5 14.5 11.5C16.5 13.5 24 14 24 14C24 14 16.5 14.5 14.5 16.5C12.5 18.5 12 26 12 26C12 26 11.5 18.5 9.5 16.5C7.5 14.5 0 14 0 14C0 14 7.5 13.5 9.5 11.5C11.5 9.5 12 2 12 2Z" />
            </svg>
          </motion.div>

          {/* Name block */}
          <div className="flex flex-col items-center leading-none select-none">
            <span
              className="text-[15vw] md:text-[11vw] font-display font-black tracking-[-0.04em] text-white uppercase"
              style={{ lineHeight: 0.85 }}
            >
              SACHIN
            </span>
            <span className="text-[3vw] md:text-[2vw] font-sans font-bold tracking-[0.5em] text-[#ff5a00] uppercase mt-3">
              design studio
            </span>
          </div>
        </motion.div>
      </div>

      {/* ===== BOTTOM CONTACT BAR ===== */}
      <div className="relative z-20 w-full max-w-7xl mx-auto mt-auto">
        {/* Top divider line */}
        <div className="w-full h-[1px] bg-white/10 mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-[10px] tracking-[0.18em] text-white/35 font-bold uppercase"
        >
          {/* Phone */}
          <a
            href="tel:+917339119498"
            className="flex items-center gap-2 hover:text-[#ff5a00] transition-colors duration-300 pointer-events-auto"
          >
            <svg className="w-3.5 h-3.5 shrink-0 text-[#ff5a00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +91 73391 19498
          </a>

          {/* Email */}
          <a
            href="mailto:swamynathansachin@gmail.com"
            className="flex items-center gap-2 hover:text-[#ff5a00] transition-colors duration-300 pointer-events-auto"
          >
            <svg className="w-3.5 h-3.5 shrink-0 text-[#ff5a00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            swamynathansachin@gmail.com
          </a>

          {/* Instagram / Social */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#ff5a00] transition-colors duration-300 pointer-events-auto"
          >
            <svg className="w-3.5 h-3.5 shrink-0 text-[#ff5a00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @sachin.design
          </a>
        </motion.div>

        {/* Copyright line */}
        <div className="mt-8 text-center text-[8px] tracking-[0.3em] text-white/15 font-sans font-bold uppercase">
          © 2026 Sachin Design Studio — All Rights Reserved
        </div>
      </div>
    </section>
  );
}
