'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 'branding1',
    label: 'Branding Project',
    title: 'Pawlisé',
    description: 'Pawlisé is a premium pet‑care brand delivering gentle, comforting grooming solutions for dogs. Its distinctive visual identity blends playful, modern typography with a warm palette of sunny yellow and regal purple, creating a cheerful yet sophisticated look that resonates with today’s caring pet owners.',
    logoConcept: 'The logo uses rounded playful typography to reflect friendliness, warmth, and care.',
    subtitle: 'Brand Style',
    points: [
      'Soft & minimal aesthetic',
      'Clean packaging design',
      'Friendly and trustworthy feel',
      'Premium pet grooming identity',
    ],
    date: 'Date: 2026',
    image: '/assets/web/pg1.png',
    colors: [],
  },
  {
    id: 'branding2',
    label: 'Branding Project',
    title: 'Haochi Momos',
    description: 'Haochi Momos is a modern momos‑based restaurant brand focused on serving flavorful, fresh, and comforting street‑style dumplings with a contemporary dining experience.',
    logoConcept: 'The logo combines bold and playful typography with an energetic food‑inspired identity to reflect taste, warmth, and youthful vibes.',
    subtitle: 'Brand Style',
    points: [
      'Modern street‑food aesthetic',
      'Bold and vibrant visuals',
      'Clean yet playful branding',
      'Youth‑focused restaurant identity',

    ],
    date: 'Date: 2024',
    image: '/assets/web/pg3.png',
    colors: [],
  },
  {
    id: 'branding3',
    label: 'Branding Project',
    title: 'ChicBee',
    description: 'ChicBee is a trendy kidswear brand designed to bring comfort, style, and playful fashion together for modern children. The brand focuses on cheerful designs, soft aesthetics, and vibrant clothing collections for kids.',
    logoConcept: 'The logo combines playful typography with a stylish modern touch to represent fun, happiness, and youthful energy while maintaining a fashionable identity.',
    subtitle: 'Brand Style',
    points: [
      'Cute and playful aesthetic',
      'Bright and cheerful visuals',
      'Modern kids fashion identity',
      'Soft and friendly branding',

    ],
    date: 'Date: 2026',
    image: '/assets/web/pg4.png',
    colors: [],
  },
  {
    id: 'branding4',
    label: 'Branding Project',
    title: 'Mandara',
    description: 'Mandara is a premium jewellery brand that blends timeless elegance with modern luxury. The brand reflects sophistication, femininity, and refined craftsmanship through every piece.',
    logoConcept: 'The logo features elegant typography with a luxurious and minimal style to represent grace, exclusivity, and timeless beauty.',
    subtitle: 'Brand Style',
    points: [
      'Premium luxury aesthetic',
      'Minimal and elegant visuals',
      'Sophisticated brand identity',
      'Modern yet timeless appeal',

    ],
    date: 'Date: 2025',
    image: '/assets/web/pg2.png',
    colors: [],
  },

];

export default function VisualIdentityListSection() {
  return (
    <section
      id="visual-identity-list"
      className="relative w-full bg-[#f6f1e8] text-stone-900 py-24 px-6 md:px-12 lg:px-24 overflow-hidden selection:bg-[#ff5a00] selection:text-white border-t border-dotted border-stone-300"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-24 md:gap-32">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-12 lg:gap-20 items-start border-b border-dotted border-stone-300/80 pb-20 last:border-b-0 last:pb-0"
          >
            {/* Left Info Column */}
            <div className="flex flex-col gap-6 text-left lg:sticky lg:top-24">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00]" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500 font-display font-semibold">
                    {project.label}
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#ff5a00] leading-none mt-2">
                  {project.title}
                </h3>
              </div>

              <p className="text-xs md:text-[13px] font-sans text-stone-600 leading-relaxed font-semibold max-w-md">
                {project.description}
              </p>
              {project.logoConcept && (
                <>
                  <h5 className="mt-2 text-sm font-semibold">Logo Concept</h5>
                  <p className="mt-1 text-xs md:text-[13px] font-sans leading-relaxed font-medium max-w-md">
                    {project.logoConcept}
                  </p>
                </>
              )}
              {project.subtitle && (
                <h4 className="mt-2 text-sm font-medium text-stone-700">
                  {project.subtitle}
                </h4>
              )}
              {project.points && (
                <ul className="list-disc list-inside mt-1 text-xs text-stone-600">
                  {project.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              )}

                <div className="flex flex-col gap-2 pt-2 text-[10px] tracking-[0.15em] font-sans font-bold text-stone-500 uppercase">
                  <span>{project.date}</span>
                </div>
            </div>

            {/* Right Collage Column */}
            <div className="flex flex-col gap-6">
              {/* Image Container */}
              <div className="flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="max-w-[400px] h-auto object-contain"
                />
              </div>

              {/* Color Palette Swatches */}
              <div className="flex items-center gap-3 mt-2 pl-2">
                <div className="flex gap-2.5">
                  {project.colors.map((color, colorIdx) => (
                    <div
                      key={colorIdx}
                      className="w-8 h-8 rounded-full border border-stone-200/50 shadow-sm flex items-center justify-center group/swatch relative cursor-pointer"
                      style={{ backgroundColor: color }}
                    >
                      {/* Tooltip displaying hex code */}
                      <span className="absolute -top-8 bg-stone-900 text-white text-[8px] tracking-wider px-1.5 py-0.5 rounded opacity-0 group-hover/swatch:opacity-100 transition-opacity duration-300 pointer-events-none uppercase font-bold">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
