'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WEB_PROJECTS = [
  {
    id: 'aura-studio',
    label: 'Web Design & Creative Direction',
    title: 'AURA STUDIO',
    tags: ['UI/UX Design', 'Creative Development', 'WebGL', 'Framer Motion'],
    description: 'A premium, grid-based minimal portfolio website designed for a contemporary creative studio. Emphasizing fluid animations, bold layout grids, and a cinematic storytelling approach that elevates the brand\'s digital presence.',
    date: 'Date: 2024',
    image: '/assets/web/pg1.png',
    link: '#'
  },
  {
    id: 'nexus-analytics',
    label: 'Interface Design & Complex Data',
    title: 'NEXUS FINANCE',
    tags: ['Dashboard Design', 'Data Visualization', 'Dark Mode UI', 'React Integration'],
    description: 'An editorial, high-contrast digital interface designed for a decentralized finance and analytics platform. Combining complex data visualization with sleek dark aesthetics, providing users with a fast and visually engaging experience.',
    date: 'Date: 2025',
    image: '/assets/web/pg2.png',
    link: '#'
  },
  {
    id: 'solis-apparel',
    label: 'E-Commerce Experience & Brand Story',
    title: 'SOLIS APPAREL',
    tags: ['E-Commerce UI', 'Luxury Branding', 'Immersive UX', 'Tailwind CSS'],
    description: 'A state-of-the-art immersive e-commerce portal built for a luxury sustainable fashion house. Blending clean editorial layouts, immersive product showcases, and interactive 3D elements for a refined shopping journey.',
    date: 'Date: 2025',
    image: '/assets/web/pg3.png',
    link: '#'
  }
];

export default function WebDesignSection() {
  return (
    <section 
      id="web-design-portfolio" 
      className="relative w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden selection:bg-[#ff5a00] selection:text-black border-t border-white/5"
    >
      {/* High-End Cinematic Noise Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-[5]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Ambient Glows */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#ff5a00]/3 rounded-full filter blur-[120px] pointer-events-none z-[1]" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#ff5a00]/3 rounded-full filter blur-[120px] pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-12 mb-20">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00] animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-display font-medium">
              Portfolio - Web Designs
            </span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter uppercase leading-[0.9]">
              DIGITAL <br />
              <span className="text-[#ff5a00] drop-shadow-[0_0_30px_rgba(255,90,0,0.15)]">EXPERIENCES</span>
            </h2>
            <p className="max-w-md text-xs md:text-sm text-stone-400 font-sans tracking-wide leading-relaxed font-medium">
              Crafting immersive, high-performance, and visually stunning web interfaces that bridge advanced typography, fluid motion, and functional UI layouts.
            </p>
          </div>
        </div>

        {/* ================= PROJECTS GRID ================= */}
        <div className="flex flex-col gap-28 md:gap-36">
          {WEB_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center"
              >
                {/* Text Panel (Alternates columns on desktop) */}
                <div className={`flex flex-col gap-6 text-left ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] tracking-[0.25em] text-[#ff5a00] font-sans font-bold uppercase">
                      {project.label}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white mt-1">
                      {project.title}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className="text-[8px] tracking-wider uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded text-stone-300 font-sans font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs md:text-[13px] font-sans text-stone-400 leading-relaxed font-semibold max-w-md mt-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6 pt-2">
                    <span className="text-[9px] tracking-[0.2em] font-sans font-bold text-white/30 uppercase">
                      {project.date}
                    </span>
                    <button className="flex items-center gap-2 group/btn text-[10px] tracking-[0.2em] uppercase font-sans font-bold text-[#ff5a00] hover:text-white transition-colors duration-300">
                      View Case Study
                      <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </button>
                  </div>
                </div>

                {/* Image Panel */}
                <div className={`w-full ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-[#121212] rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark gradient vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
