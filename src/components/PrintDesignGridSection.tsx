'use client';

import React from 'react';
import { motion, useMotionValue, useTransform, MotionValue } from 'framer-motion';

interface PrintDesignGridSectionProps {
  scrollProgress?: MotionValue<number>;
}

const GRID_ITEMS = [
  // Row 1
  { type: 'text', id: 'header' },
  { type: 'image', src: '/assets/print/v1.jpg.jpeg', alt: 'Print Design 1' },
  { type: 'image', src: '/assets/print/v2.jpeg', alt: 'Print Design 2' },
  
  // Row 2
  { type: 'text', id: 'body' },
  { type: 'image', src: '/assets/print/v3.jpg.jpeg', alt: 'Print Design 3' },
  { type: 'image', src: '/assets/print/v4.jpg.jpeg', alt: 'Print Design 4' },
  
  // Row 3
  { type: 'image', src: '/assets/print/v5.jpeg', alt: 'Print Design 5' },
  { type: 'text', id: 'stats' },
  { type: 'text', id: 'footer' }
];

export default function PrintDesignGridSection({ scrollProgress }: PrintDesignGridSectionProps) {
  const defaultProgress = useMotionValue(1);
  const progress = scrollProgress || defaultProgress;

  // Smooth scroll-driven transitions for content fade-in
  const opacity = useTransform(progress, [0.1, 0.3, 1], [0, 1, 1]);
  const blurVal = useTransform(progress, [0.1, 0.3, 1], [8, 0, 0]);
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`);

  const imageItemsOnly = GRID_ITEMS.filter(item => item.type === 'image');

  return (
    <motion.section 
      id="printdesigngrid" 
      style={{ opacity, filter }}
      className="relative w-full bg-[#f6f1e8] text-stone-900 py-16 px-6 md:px-12 lg:px-24 overflow-hidden selection:bg-[#ff5a00] selection:text-white"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5a00]/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* DESKTOP LAYOUT (3x3 Grid) */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-3 border-collapse select-none">
          {GRID_ITEMS.map((item, index) => {
            const isLastCol = index % 3 === 2;
            const isLastRow = Math.floor(index / 3) === 2;
            const borderClasses = `
              ${!isLastCol ? 'border-r' : ''} 
              ${!isLastRow ? 'border-b' : ''} 
              border-dotted border-stone-300/80
            `;

            if (item.type === 'text') {
              if (item.id === 'header') {
                return (
                  <div key={index} className={`p-8 flex flex-col justify-start items-start ${borderClasses}`}>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00] animate-pulse" />
                      <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500 font-display font-semibold">
                        Portfolio - Print Design
                      </span>
                    </div>
                  </div>
                );
              }
              if (item.id === 'body') {
                return (
                  <div key={index} className={`p-8 flex flex-col justify-center items-start ${borderClasses}`}>
                    <div className="flex flex-col gap-5">
                      <h2 className="text-[48px] font-display font-black tracking-tight text-[#161d31] leading-none uppercase">
                        PRINT GALLERY
                      </h2>
                      <p className="text-xs font-sans text-stone-600 leading-relaxed font-semibold max-w-[280px]">
                        From editorial layouts to creative branding materials, my print designs focus on tactile experiences and visual hierarchy.
                      </p>
                    </div>
                  </div>
                );
              }
              if (item.id === 'stats') {
                return (
                  <div key={index} className={`p-8 flex flex-col justify-center items-start ${borderClasses}`}>
                    <div className="flex flex-col gap-1 text-[10px] tracking-[0.15em] font-sans font-bold text-stone-500 uppercase">
                      <span className="text-[#ff5a00] font-black">CURATED COLLECTION</span>
                      <span>EDITORIAL & BRANDING</span>
                    </div>
                  </div>
                );
              }
              if (item.id === 'footer') {
                return (
                  <div key={index} className={`p-8 flex flex-col justify-end items-end text-right w-full ${borderClasses}`}>
                    <span className="text-[10px] tracking-[0.15em] font-sans font-bold text-stone-500 uppercase">
                      Date: 2023 - 2026
                    </span>
                  </div>
                );
              }
            }

            // Image item
            return (
              <div 
                key={index} 
                className={`p-6 flex items-center justify-center ${borderClasses} group transition-colors duration-300 hover:bg-[#f2ece0]/40 overflow-hidden relative`}
              >
                <div className="relative w-full h-[250px] flex items-center justify-center overflow-hidden rounded-md shadow-sm">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-[#ff5a00]/0 group-hover:bg-[#ff5a00]/10 transition-colors duration-500 pointer-events-none" />
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
                Portfolio - Print Design
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#161d31] leading-none">
              PRINT GALLERY
            </h2>
            <p className="text-xs font-sans text-stone-600 leading-relaxed font-semibold max-w-lg mt-2">
              From editorial layouts to creative branding materials, my print designs focus on tactile experiences and visual hierarchy.
            </p>
            <span className="text-[9px] tracking-[0.15em] font-sans font-bold text-stone-500 uppercase mt-2">
              Date: 2023 - 2026
            </span>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-dotted border-stone-300/80 w-full">
            {imageItemsOnly.map((item, idx) => {
              return (
                <div 
                  key={idx} 
                  className="py-6 px-4 flex items-center justify-center border-r border-b border-dotted border-stone-300/80 group hover:bg-[#f2ece0]/40 transition-colors duration-300"
                >
                  <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden rounded-md shadow-sm">
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#ff5a00]/0 group-hover:bg-[#ff5a00]/10 transition-colors duration-500 pointer-events-none" />
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
