'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';

const TiltedCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), {
    damping: 20,
    stiffness: 150,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative w-full h-full cursor-pointer select-none"
    >
      <div 
        style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }}
        className="relative w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

// Sparkle header element common across sections
const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center gap-2 mb-4">
    <h3 className="text-lg md:text-xl font-display font-black tracking-wider text-[#ff6a00] uppercase">
      {title}
    </h3>
    <svg className="w-4 h-4 text-[#ff6a00] animate-pulse-slow" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  </div>
);

interface AboutSectionProps {
  scrollProgress?: MotionValue<number>;
}

export default function AboutSection({ scrollProgress }: AboutSectionProps) {
  const defaultProgress = useMotionValue(0);
  const progress = scrollProgress || defaultProgress;

  // Smooth scroll-driven transitions for content
  const opacity = useTransform(progress, [0, 0.45, 0.6], [1, 1, 0]);
  const blurVal = useTransform(progress, [0, 0.45, 0.6], [0, 0, 10]);
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`);

  // Floating orange star that detaches (fades out in this section as floating star overlay takes over)
  const startStarOpacity = useTransform(progress, [0, 0.1], [1, 0]);

  return (
    <motion.section 
      id="about"
      style={{ opacity, filter }}
      className="relative min-h-[70vh] w-full bg-transparent text-[#111111] py-12 px-6 md:px-12 lg:px-24 overflow-hidden selection:bg-[#ff6a00] selection:text-white"
    >
      {/* Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* LEFT COLUMN: Media, Contact, Skills, Languages, Interests */}
        <div className="lg:col-span-5 flex flex-col space-y-12">
          
          {/* Stylized Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ perspective: 1000 }}
            className="relative w-full aspect-[3/2] max-w-[450px] mx-auto lg:mx-0"
          >
            <TiltedCard>
              <Image
                src="/assets/sachin_portrait_real.png"
                alt="Sachin - Creative Designer"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover mix-blend-multiply"
                priority
              />
            </TiltedCard>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            
          >
            <SectionHeader title="CONTACT" />
            <div className="space-y-3 font-sans">
              
              {/* Email Address */}
              <a 
                href="mailto:swamynathansachin@gmail.com"
                className="flex items-center gap-3 group w-fit"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-white group-hover:bg-[#ff6a00] transition-colors duration-300">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-sm font-black text-neutral-800 tracking-tight group-hover:text-[#ff6a00] transition-colors duration-300">
                  swamynathansachin@gmail.com
                </span>
              </a>

            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            
          >
            <SectionHeader title="EDUCATION" />
            <div className="space-y-1 font-sans">
              <h4 className="font-black text-neutral-800 text-sm md:text-base leading-tight">
                Bachelor of Arts in Computer Science.
              </h4>
              <p className="text-xs text-neutral-500 font-bold italic leading-relaxed">
                Dr. SNS Rajalakshmi College of Arts and Science, Coimbatore (Mar 2020 – May 2023)
              </p>
            </div>
          </motion.div>

          {/* LANGUAGES */}
           <motion.div
             initial={{ opacity: 0, y: 25 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             
           >
             <SectionHeader title="LANGUAGES" />
              <p className="text-xs text-neutral-500 font-bold italic leading-relaxed">English | Malayalam | Tamil</p>
           </motion.div>

          {/* TECHNICAL SKILLS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            
          >
            <SectionHeader title="TECHNICAL SKILLS" />
            <div className="flex flex-wrap gap-3">
              <div className="w-14 h-14 rounded-2xl bg-neutral-900 flex items-center justify-center text-[#f6f1e8] font-sans font-black text-lg shadow-sm hover:scale-105 hover:bg-[#ff6a00] transition-all duration-300 cursor-default">
                Ai
              </div>
              <div className="w-14 h-14 rounded-2xl bg-neutral-900 flex items-center justify-center text-[#f6f1e8] font-sans font-black text-lg shadow-sm hover:scale-105 hover:bg-[#ff6a00] transition-all duration-300 cursor-default">
                Ps
              </div>

              <div className="w-14 h-14 rounded-2xl bg-neutral-900 flex items-center justify-center text-[#f6f1e8] shadow-sm hover:scale-105 hover:bg-[#ff6a00] transition-all duration-300 cursor-default">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 12 18">
                  <path d="M3 18C4.65685 18 6 16.6569 6 15V12H3C1.34315 12 0 13.3431 0 15C0 16.6569 1.34315 18 3 18Z"/>
                  <path d="M0 9C0 7.34315 1.34315 6 3 6H6V12H3C1.34315 12 0 10.6569 0 9Z"/>
                  <path d="M0 3C0 1.34315 1.34315 0 3 0H6V6H3C1.34315 6 0 4.65685 0 3Z"/>
                  <path d="M6 0H9C10.6569 0 12 1.34315 12 3C12 4.65685 10.6569 6 9 6H6V0Z"/>
                  <path d="M6 6H9C10.6569 6 12 7.34315 12 9C12 10.6569 10.6569 12 9 12H6V6Z"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Profile, Education, Experience */}
        <div className="lg:col-span-7 flex flex-col space-y-16 lg:pt-4">
          
          {/* ABOUT ME PROFILE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            
          >
            <svg className="w-8 h-8 text-[#ff6a00] mb-2 animate-pulse-slow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-[#ff6a00] uppercase">
              ABOUT ME
            </h2>
            <p className="text-sm md:text-base text-neutral-800 font-sans leading-relaxed font-semibold max-w-2xl">
              I’m a graphic designer with over two years of experience turning ideas into compelling visual stories that elevate brands.
            </p>
            <p className="text-sm md:text-base text-neutral-800 font-sans leading-relaxed font-semibold mt-4 max-w-2xl">
              Fueled by coffee and tight deadlines, I thrive on the challenge of perfecting every detail – even when that "one small change" feels like a marathon.
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-neutral-800 font-sans leading-relaxed mt-4 max-w-2xl">
              <li>Brand identity & logo design</li>
              <li>Print & digital posters</li>
              <li>Social‑media creatives & campaigns</li>
              <li>Packaging and product visualization</li>
            </ul>
            <p className="text-sm md:text-base text-neutral-800 font-sans leading-relaxed font-semibold mt-4 max-w-2xl">
              I blend strategic thinking with bold aesthetics, delivering designs that capture attention faster than a scroll‑through feed.
            </p>



          </motion.div>

          {/* EXPERIENCE TIMELINE */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col space-y-6"
          >
            <SectionHeader title="EXPERIENCE" />
            
  <div className="grid grid-cols-[105px_1fr] md:grid-cols-[135px_1fr] gap-x-6 gap-y-8 font-sans">
  {/* Item 1 */}
  <div className="text-right flex flex-col justify-start">
    <span className="font-black text-neutral-800 text-xs md:text-sm leading-tight">Graphic Designer</span>
    <span className="text-[10px] text-neutral-500 font-bold mt-1 font-mono">Apr 2025 – Dec 2025</span>
  </div>
  <div className="flex flex-col justify-start">
    <span className="font-black text-[#ff6a00] text-xs md:text-sm leading-tight">Geekstack, Coimbatore</span>
    <span className="text-[11px] text-neutral-600 mt-1 leading-relaxed font-semibold">
      • Designed logos, posters, and digital creatives to support branding and marketing initiatives.
      • Collaborated with teams to deliver creative solutions for digital and promotional content.
      • Utilized Adobe Photoshop, Adobe Illustrator, and Canva for high-quality visual designs.
    </span>
  </div>

  {/* Item 2 */}
  <div className="text-right flex flex-col justify-start">
    <span className="font-black text-neutral-800 text-xs md:text-sm leading-tight">Graphic Designer</span>
    <span className="text-[10px] text-neutral-500 font-bold mt-1 font-mono">Mar 2024 – Mar 2025</span>
  </div>
  <div className="flex flex-col justify-start">
    <span className="font-black text-[#ff6a00] text-xs md:text-sm leading-tight">Dazzletech Solutions, Coimbatore</span>
    <span className="text-[11px] text-neutral-600 mt-1 leading-relaxed font-semibold">
      • Created 100+ professional logos using Adobe Creative Suite, enhancing brand identity and brand recognition.
      • Developed marketing creatives, banners, and promotional visuals using Adobe Photoshop and Adobe Illustrator.
      • Handled client requirements and feedback, ensuring smooth communication and timely delivery of high-quality design projects.
    </span>
  </div>

  {/* Item 3 */}
  <div className="text-right flex flex-col justify-start">
    <span className="font-black text-neutral-800 text-xs md:text-sm leading-tight">UI/UX Designer Intern</span>
    <span className="text-[10px] text-neutral-500 font-bold mt-1 font-mono">Oct 2023 – Feb 2024</span>
  </div>
  <div className="flex flex-col justify-start">
    <span className="font-black text-[#ff6a00] text-xs md:text-sm leading-tight">Zesdro Technologies (Intern), Kochin</span>
    <span className="text-[11px] text-neutral-600 mt-1 leading-relaxed font-semibold">
      • Collaborated with the design team to create wireframes, prototypes, and mockups for web and mobile applications.
      • Ensured alignment with client requirements, usability standards, and brand guidelines.
      • Designed high-quality user interfaces and interactions using Figma.
    </span>
  </div>
</div>          </motion.div>

        </div>

      </div>

      {/* Floating Orange Star that detaches */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-20">
        <motion.div 
          style={{ opacity: startStarOpacity }}
          className="relative flex flex-col items-center gap-2 cursor-pointer"
        >
          <div className="absolute inset-0 w-8 h-8 bg-[#ff6a00]/30 rounded-full filter blur-md -translate-x-1/4 -translate-y-1/4" />
          <svg className="w-8 h-8 text-[#ff6a00] relative z-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
          <span className="text-[8px] tracking-[0.3em] text-[#ff6a00]/50 font-sans uppercase font-bold mt-2">
            SCROLL DOWN TO EXPLORE
          </span>
        </motion.div>
      </div>

    </motion.section>
  );
}
