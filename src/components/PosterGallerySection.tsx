'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const POSTERS = [
  { src: '/assets/poster/set1.jpeg', alt: 'Poster Set 1', span: 'col-span-1 md:col-span-2 row-span-2', position: 'object-[50%_25%]' },
  { src: '/assets/poster/image copy.png', alt: 'Poster Image 1', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/assets/poster/image copy 2.png', alt: 'Poster Image 2', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/assets/poster/set2.jpeg', alt: 'Poster Set 2', span: 'col-span-1 md:col-span-1 row-span-1', position: 'object-[50%_25%]' },
  { src: '/assets/poster/image copy 3.png', alt: 'Poster Image 3', span: 'col-span-1 md:col-span-1 row-span-2' },
  { src: '/assets/poster/set3.jpeg', alt: 'Poster Set 3', span: 'col-span-1 md:col-span-2 row-span-1' },
  { src: '/assets/poster/image copy 4.png', alt: 'Poster Image 4', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/assets/poster/image copy 5.png', alt: 'Poster Image 5', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/assets/poster/set4.jpeg', alt: 'Poster Set 4', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/assets/poster/image copy 6.png', alt: 'Poster Image 6', span: 'col-span-1 md:col-span-2 row-span-1' },
  { src: '/assets/poster/image.png', alt: 'Poster Image New', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/assets/poster/1 (11).jpeg', alt: 'Poster Set 6', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/assets/poster/set5.jpeg', alt: 'Poster Set 5', span: 'col-span-1 md:col-span-3 row-span-2' },
  { src: '/assets/poster/WhatsApp Image 2026-05-21 at 9.14.30 PM.jpeg', alt: 'Poster Campaign 3', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/assets/poster/1 (19).jpeg', alt: 'Poster Set 7', span: 'col-span-1 md:col-span-1 row-span-1' },
  { src: '/assets/poster/WhatsApp Image 2026-05-21 at 8.44.04 PM.jpeg', alt: 'New Poster Image', span: 'col-span-1 md:col-span-1 row-span-1' },
];

export default function PosterGallerySection() {
  const basePath = process.env.NODE_ENV === 'production' ? '/PORTFOLIO' : '';
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <section 
      ref={containerRef}
      id="poster-gallery" 
      className="relative w-full bg-[#f6f1e8] text-stone-900 py-24 px-6 md:px-12 lg:px-24 overflow-hidden selection:bg-[#ff5a00] selection:text-white"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/3 w-[800px] h-[800px] bg-[#ff5a00]/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Header Info */}
      <motion.div 
        style={{ opacity, y }}
        className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-stone-300/60 pb-8"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5a00] animate-pulse" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-stone-500 font-display font-bold">
              Creative Exhibition
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-[#161d31] leading-none uppercase">
            POSTER <br/>
            <span className="text-[#ff5a00]">GALLERY</span>
          </h2>
        </div>
        
        <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-sm">
          <p className="text-sm font-sans text-stone-600 leading-relaxed font-medium">
            An exploration of typographic hierarchy, bold colors, and striking imagery. Each poster is designed to capture attention and communicate powerfully.
          </p>
          <span className="text-[10px] tracking-[0.15em] font-sans font-bold text-stone-400 uppercase mt-4">Curated selection • EST 2024 - present</span>
        </div>
      </motion.div>

      {/* Innovative Masonry Poster Grid */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {POSTERS.map((poster, index) => {
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative group overflow-hidden rounded-xl bg-stone-200/50 break-inside-avoid mb-6 w-full shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/30"
              >
                {/* Image Container with Zoom */}
                <div className="relative w-full h-auto overflow-hidden bg-stone-100">
                  <img 
                    src={`${basePath}${poster.src}`} 
                    alt={poster.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  {/* Subtle Grainy Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#161d31]/0 group-hover:bg-[#161d31]/20 transition-colors duration-700 pointer-events-none mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                

              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Footer Branding */}
      <div className="max-w-7xl mx-auto w-full mt-24 border-t border-stone-300/60 pt-8 flex justify-between items-center text-stone-400 font-sans text-[10px] tracking-widest uppercase font-bold">
        <span>Innovating Print</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00]" />
          Visual Excellence
        </span>
      </div>
    </section>
  );
}
