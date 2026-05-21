'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const FLOATING_LOGOS = [
  { src: '/assets/icons/Zaara Impex final-01.png', name: 'Zaara Impex', top: '15%', left: '15%', depth: 0.8, w: 'w-24 md:w-28', floatDuration: 6, floatRangeX: 12, floatRangeY: 18, rotateRange: 3 },
  { src: '/assets/icons/dark house-01.png', name: 'Dark House', top: '32%', left: '10%', depth: 0.4, w: 'w-20 md:w-24', floatDuration: 8, floatRangeX: 18, floatRangeY: 12, rotateRange: -4 },
  { src: '/assets/icons/kimachi final 2-01-01.png', name: 'Kimachi', top: '42%', left: '22%', depth: 0.6, w: 'w-24 md:w-28', floatDuration: 7, floatRangeX: -12, floatRangeY: 22, rotateRange: 2 },
  { src: '/assets/icons/mandara.png', name: 'Mandara', top: '16%', left: '72%', depth: 0.9, w: 'w-16 md:w-20', floatDuration: 5, floatRangeX: 20, floatRangeY: 12, rotateRange: -3 },
  { src: '/assets/icons/wallpaper-02.png', name: 'Wallpaper', top: '28%', left: '85%', depth: 0.3, w: 'w-20 md:w-24', floatDuration: 9, floatRangeX: -18, floatRangeY: -18, rotateRange: 5 },
  { src: '/assets/icons/your logo final-06.png', name: 'Your Logo', top: '38%', left: '65%', depth: 0.7, w: 'w-22 md:w-26', floatDuration: 7.5, floatRangeX: 15, floatRangeY: -12, rotateRange: -2 },
  { src: '/assets/icons/DFX-03.png', name: 'DFX', top: '65%', left: '12%', depth: 0.5, w: 'w-20 md:w-24', floatDuration: 8.5, floatRangeX: -12, floatRangeY: 15, rotateRange: 4 },
  { src: '/assets/icons/ChatGPT Image May 19, 2026, 12_44_11 PM.png', name: 'Creative Studio', top: '78%', left: '26%', depth: 0.9, w: 'w-24 md:w-28', floatDuration: 5.5, floatRangeX: 20, floatRangeY: 20, rotateRange: -3 },
  { src: '/assets/icons/ChatGPT Image May 19, 2026, 12_44_22 PM.png', name: 'Digital Identity', top: '84%', left: '8%', depth: 0.4, w: 'w-20 md:w-24', floatDuration: 9.5, floatRangeX: 10, floatRangeY: -22, rotateRange: 3 },
  { src: '/assets/icons/ChatGPT Image May 19, 2026, 12_44_25 PM.png', name: 'Concept Art', top: '62%', left: '78%', depth: 0.8, w: 'w-24 md:w-28', floatDuration: 6.5, floatRangeX: -22, floatRangeY: 12, rotateRange: -2 },
  { src: '/assets/icons/ChatGPT Image May 19, 2026, 12_44_28 PM.png', name: 'Brand Guide', top: '74%', left: '60%', depth: 0.5, w: 'w-20 md:w-24', floatDuration: 8.2, floatRangeX: 12, floatRangeY: 18, rotateRange: 4 },
  { src: '/assets/icons/ChatGPT Image May 19, 2026, 12_44_48 PM.png', name: 'Aesthetic Logo', top: '85%', left: '82%', depth: 0.7, w: 'w-22 md:w-26', floatDuration: 7.2, floatRangeX: -15, floatRangeY: -15, rotateRange: -3 },
  { src: '/assets/icons/ChatGPT Image May 19, 2026, 12_44_51 PM.png', name: 'Creative Space', top: '48%', left: '46%', depth: 0.25, w: 'w-16 md:w-20', floatDuration: 10, floatRangeX: 8, floatRangeY: 8, rotateRange: 2 }
];

export default function FloatingUniverseSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // High performance spring physics for mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) - 0.5;
      const y = ((e.clientY - rect.top) / rect.height) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      id="brand-universe" 
      className="relative min-h-[110vh] w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-12 flex flex-col justify-between items-center overflow-hidden select-none"
    >
      {/* High-End Cinematic Noise Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-[5]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Center Spotlight & Deep Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,90,0,0.06)_0%,rgba(10,10,10,0)_60%)] pointer-events-none z-[1]" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[#ff5a00]/3 rounded-full filter blur-[100px] pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#ff5a00]/3 rounded-full filter blur-[100px] pointer-events-none z-[1]" />

      {/* Scattered Floating Universe Logos */}
      <div className="absolute inset-0 w-full h-full z-10">
        {FLOATING_LOGOS.map((logo, index) => {
          // Parallax transforms based on depth factor
          const transX = useTransform(smoothMouseX, (x) => x * logo.depth * 90);
          const transY = useTransform(smoothMouseY, (y) => y * logo.depth * 90);
          
          const baseOpacity = 0.2 + (logo.depth * 0.75);
          const baseBlur = (1 - logo.depth) * 4;

          return (
            <motion.div
              key={index}
              style={{
                top: logo.top,
                left: logo.left,
                x: transX,
                y: transY,
                zIndex: Math.round(logo.depth * 20) + 10,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            >
              {/* Continuous Drift Animation */}
              <motion.div
                animate={{
                  x: [0, logo.floatRangeX, -logo.floatRangeX, 0],
                  y: [0, logo.floatRangeY, -logo.floatRangeY, 0],
                  rotate: [0, logo.rotateRange, -logo.rotateRange, 0]
                }}
                transition={{
                  duration: logo.floatDuration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror"
                }}
                className="relative flex items-center justify-center p-3 rounded-xl transition-all duration-500"
              >
                {/* Silver state turning into branded state on hover */}
                <div 
                  style={{
                    opacity: baseOpacity,
                    filter: `blur(${baseBlur}px) grayscale(1) invert(1) brightness(1.2)`,
                  }}
                  className="w-full transition-all duration-500 group-hover:opacity-100 group-hover:filter-none group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-[0_0_15px_rgba(255,90,0,0.5)]"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className={`${logo.w} object-contain`} 
                    style={{
                      maxHeight: `${Math.round(40 + logo.depth * 40)}px`
                    }}
                  />
                </div>

                {/* Subtitle tag floating above logo on hover */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 text-[8px] tracking-[0.2em] font-display uppercase font-semibold text-[#ff5a00] px-2 py-0.5 rounded border border-[#ff5a00]/30 whitespace-nowrap z-[99]">
                  {logo.name}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Top Section Layout Helper */}
      <div className="relative z-20 w-full max-w-7xl flex justify-between items-center opacity-30 text-[9px] tracking-[0.25em] uppercase font-display font-medium">
        <span>[ Sandboxed Brand Space ]</span>
        <span>Interactive Parallax Depth</span>
      </div>

      {/* Central Immersive Typography */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center my-auto pointer-events-none">
        <div className="absolute inset-0 w-96 h-24 bg-[#ff5a00]/5 filter blur-3xl rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#ff5a00] font-semibold mb-6 flex items-center gap-3">
          <span className="w-1 h-1 rounded-full bg-[#ff5a00] animate-ping" />
          Brand Sandbox
        </span>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase leading-[0.9] text-white">
          IDENTITIES <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5a00] to-[#ff7d33] drop-shadow-[0_0_30px_rgba(255,90,0,0.15)]">
            THAT FLOAT
          </span>
        </h2>

        <p className="max-w-md text-xs md:text-sm text-stone-400 font-sans tracking-wide leading-relaxed mt-6 px-4">
          A suspended orbit of visual concepts, fluidly responsive to mouse interaction. Hover any identity to reveal its color profiles.
        </p>
      </div>

      {/* Bottom Coordinates Section */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8 opacity-30 text-[9px] tracking-[0.15em] font-sans">
        <div className="flex gap-4">
          <span>Depth Range: 0.25x - 1.0x</span>
          <span>•</span>
          <span>Suspended Assets: 13</span>
        </div>
        <div>
          <span>© 2026 SACHIN DESIGN LAB</span>
        </div>
      </div>
    </section>
  );
}
