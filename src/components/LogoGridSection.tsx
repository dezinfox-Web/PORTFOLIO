'use client';

import React from 'react';
import { motion, useMotionValue, useTransform, MotionValue } from 'framer-motion';

interface LogoGridSectionProps {
  scrollProgress?: MotionValue<number>;
}

const GRID_ITEMS = [
  // Row 1
  { type: 'text', id: 'header' },
  { type: 'logo', src: '/assets/icons/Zaara Impex final-01.png', alt: 'Zaara Impex' },
  { type: 'logo', src: '/assets/icons/dark house-01.png', alt: 'Dark House' },
  { type: 'logo', src: '/assets/icons/kimachi final 2-01-01.png', alt: 'Kimachi' },
  
  // Row 2
  { type: 'text', id: 'body' },
  { type: 'logo', src: '/assets/icons/mandara.png', alt: 'Mandara' },
  { type: 'logo', src: '/assets/icons/your logo final-06.png', alt: 'Your Logo' },
  { type: 'logo', src: '/assets/icons/DFX-03.png', alt: 'DFX' },
  
  // Row 3
  { type: 'text', id: 'stats' },
  { type: 'logo', src: '/assets/icons/ChatGPT Image May 19, 2026, 12_44_11 PM.png', alt: 'Pokkisam' },
  { type: 'logo', src: '/assets/icons/ChatGPT Image May 19, 2026, 12_44_22 PM.png', alt: 'Digital Identity' },
  { type: 'logo', src: '/assets/icons/ChatGPT Image May 19, 2026, 12_44_25 PM.png', alt: 'Brand Design' },
  
  // Row 4
  { type: 'text', id: 'footer' },
  { type: 'logo', src: '/assets/icons/ChatGPT Image May 19, 2026, 12_44_28 PM.png', alt: 'Modern Emblem' },
  { type: 'logo', src: '/assets/icons/ChatGPT Image May 19, 2026, 12_44_48 PM.png', alt: 'Graphic Concept' },
  { type: 'logo', src: '/assets/icons/ChatGPT Image May 19, 2026, 12_44_51 PM.png', alt: 'Visual Art' }
];

export default function LogoGridSection({ scrollProgress }: LogoGridSectionProps) {
  const defaultProgress = useMotionValue(1);
  const progress = scrollProgress || defaultProgress;

  // Smooth scroll-driven transitions for content fade-in
  const opacity = useTransform(progress, [0.1, 0.3, 1], [0, 1, 1]);
  const blurVal = useTransform(progress, [0.1, 0.3, 1], [8, 0, 0]);
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`);

  const logoItemsOnly = GRID_ITEMS.filter(item => item.type === 'logo');

  return (
    <motion.section 
      id="logogrid" 
      style={{ opacity, filter }}
      className="relative w-full bg-[#f6f1e8] text-stone-900 py-16 px-6 md:px-12 lg:px-24 overflow-hidden selection:bg-[#ff5a00] selection:text-white"
    >
      {/* Background Ambient Glow (extremely subtle to maintain beige editorial feel) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5a00]/3 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto w-full">
        
        {/* DESKTOP LAYOUT (Perfect 4x4 Grid) */}
        <div className="hidden lg:grid grid-cols-[1.3fr_1fr_1fr_1fr] grid-rows-4 border-collapse select-none">
          {GRID_ITEMS.map((item, index) => {
            const isLastCol = index % 4 === 3;
            const isLastRow = Math.floor(index / 4) === 3;
            const borderClasses = `
              ${!isLastCol ? 'border-r' : ''} 
              ${!isLastRow ? 'border-b' : ''} 
              border-dotted border-stone-300/80
            `;

            if (item.type === 'text') {
              if (item.id === 'header') {
                return (
                  <div key={index} className={`p-6 flex flex-col justify-start items-start ${borderClasses}`}>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00] animate-pulse" />
                      <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500 font-display font-semibold">
                        Portfolio - Logofolio
                      </span>
                    </div>
                  </div>
                );
              }
              if (item.id === 'body') {
                return (
                  <div key={index} className={`p-6 flex flex-col justify-center items-start ${borderClasses}`}>
                    <div className="flex flex-col gap-5">
                      <h2 className="text-[48px] font-display font-black tracking-tight text-[#161d31] leading-none">
                        LOGOFOLIO
                      </h2>
                      <p className="text-xs font-sans text-stone-600 leading-relaxed font-semibold max-w-[280px]">
                        Throughout my experience as a designer, I have created various logos for individuals, businesses, local startups, and university projects.
                      </p>
                    </div>
                  </div>
                );
              }
              if (item.id === 'stats') {
                return (
                  <div key={index} className={`p-6 flex flex-col justify-center items-start ${borderClasses}`}>
                    <div className="flex flex-col gap-1 text-[10px] tracking-[0.15em] font-sans font-bold text-stone-500 uppercase">
                      <span className="text-[#ff5a00] font-black">12 LOGOS SHAPED</span>
                      <span>EST. 2021 - PRESENT</span>
                    </div>
                  </div>
                );
              }
              if (item.id === 'footer') {
                return (
                  <div key={index} className={`p-6 flex flex-col justify-end items-start ${borderClasses}`}>
                    <span className="text-[10px] tracking-[0.15em] font-sans font-bold text-stone-500 uppercase">
                      Date: 2021 - 2025
                    </span>
                  </div>
                );
              }
            }

            // Logo item
            const isSmallLogo = item.src?.includes('12_44_11') || item.src?.includes('12_44_25') || item.src?.includes('12_44_51');
            return (
              <div 
                key={index} 
                className={`p-6 flex items-center justify-center ${borderClasses} group transition-colors duration-300 hover:bg-[#f2ece0]/40`}
              >
                <div className="relative w-full h-24 flex items-center justify-center">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className={`${
                      isSmallLogo ? 'max-h-[50px] max-w-[65%]' : 'max-h-[72px] max-w-[85%]'
                    } object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE / TABLET LAYOUT */}
        <div className="flex flex-col lg:hidden gap-12 select-none">
          
          {/* Header block info */}
          <div className="flex flex-col gap-4 px-4 text-left border-l-2 border-[#ff5a00] pl-6 py-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00] animate-pulse" />
              <span className="text-[9px] tracking-[0.2em] uppercase text-stone-500 font-display font-bold">
                Portfolio - Logofolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#161d31] leading-none">
              LOGOFOLIO
            </h2>
            <p className="text-xs font-sans text-stone-600 leading-relaxed font-semibold max-w-lg mt-2">
              Throughout my experience as a designer, I have created various logos for individuals, businesses, local startups, and university projects.
            </p>
            <span className="text-[9px] tracking-[0.15em] font-sans font-bold text-stone-500 uppercase mt-2">
              Date: 2021 - 2025
            </span>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-dotted border-stone-300/80 w-full">
            {logoItemsOnly.map((logo, idx) => {
              const isSmallLogo = logo.src?.includes('12_44_11') || logo.src?.includes('12_44_25') || logo.src?.includes('12_44_51');
              return (
                <div 
                  key={idx} 
                  className="py-6 px-4 flex items-center justify-center border-r border-b border-dotted border-stone-300/80 group hover:bg-[#f2ece0]/40 transition-colors duration-300"
                >
                  <div className="relative w-full h-16 flex items-center justify-center">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className={`${
                        isSmallLogo ? 'max-h-[32px] max-w-[65%]' : 'max-h-[48px] max-w-[85%]'
                      } object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </motion.section>
  );
}
