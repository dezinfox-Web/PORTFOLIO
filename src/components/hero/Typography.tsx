'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Typography() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sachinRef = useRef<HTMLHeadingElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize SplitType
    const designSplit = new SplitType(designRef.current!, { types: 'chars' });
    const portfolioSplit = new SplitType(portfolioRef.current!, { types: 'chars' });

    const tl = gsap.timeline({ delay: 0.2 });

    // 1. DESIGN Animation
    tl.fromTo(designSplit.chars,
      { opacity: 0, y: 60, filter: 'blur(8px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.6,
        stagger: 0.025,
        ease: 'power3.out'
      }
    );

    // 2. PORTFOLIO Animation
    tl.fromTo(portfolioSplit.chars,
      { opacity: 0, scale: 1.2, filter: 'blur(10px)' },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.7,
        stagger: 0.018,
        ease: 'power3.out'
      },
      "-=0.5"
    );

    // 3. Sachin Script Animation (Down to Up)
    tl.fromTo(sachinRef.current,
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.0,
        ease: 'power4.out'
      },
      "-=0.4"
    );

    return () => {
      designSplit.revert();
      portfolioSplit.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative z-30 flex flex-col items-center justify-center text-center select-none pointer-events-none">
      <div className="relative mb-[-1.2rem] md:mb-[-2.2rem] lg:mb-[-2.6rem] z-20">
        <h2
          ref={sachinRef}
          className="text-primary text-5xl md:text-[5.5rem] lg:text-[6.5rem] normal-case tracking-normal leading-none select-none"
          style={{ fontFamily: 'var(--font-signature)' }}
        >
          Sachin
        </h2>
      </div>

      <div
        ref={designRef}
        className="text-white text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none"
      >
        DESIGN
      </div>

      <div
        ref={portfolioRef}
        className="text-primary text-5xl md:text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none mt-[-1rem] md:mt-[-1rem]"
      >
        PORTFOLIO
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex gap-4 mt-6 text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/40"
      >
        <span>Graphic Design</span>
        <span className="text-primary">•</span>
        <span>Branding</span>
        <span className="text-primary">•</span>
        <span>UI/UX</span>
        <span className="text-primary">•</span>
        <span>Typography</span>
      </motion.div>
    </div>
  );
}
