'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { AmbientGlow } from '@/components/hero/Background';
import Objects from '@/components/hero/Objects';
import Typography from '@/components/hero/Typography';
import { CinematicButton } from '@/components/ui/Button';
import { FiMousePointer } from 'react-icons/fi';
import AboutSection from '@/components/AboutSection';
import LogoFolioSection from '@/components/LogoFolioSection';
import LogoGridSection from '@/components/LogoGridSection';
import VisualIdentityIntroSection from '@/components/VisualIdentityIntroSection';
import VisualIdentityListSection from '@/components/VisualIdentityListSection';
import WebDesignSection from '@/components/WebDesignSection';
import PrintDesignSection from '@/components/PrintDesignSection';
import PrintDesignGridSection from '@/components/PrintDesignGridSection';
import PosterDesignSection from '@/components/PosterDesignSection';
import PosterGallerySection from '@/components/PosterGallerySection';
import ContactFooterSection from '@/components/ContactFooterSection';

export default function Home() {
  const handleEnterExperience = () => {
    if (logoSectionRef.current) {
      logoSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logoSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: logoSectionRef,
    offset: ["start end", "start start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
    mass: 0.5
  });

  // Background transition: light beige to deep textured black
  const transitionBg = useTransform(
    smoothProgress,
    [0, 0.45, 0.55, 1],
    ["#f6f1e8", "#f6f1e8", "#0a0a0a", "#0a0a0a"]
  );

  // Floating Star viewport Y position
  const starY = useTransform(
    smoothProgress,
    [0, 0.45, 0.55, 1],
    ["82vh", "50vh", "50vh", "22vh"]
  );

  // Floating Star scale
  const starScale = useTransform(
    smoothProgress,
    [0, 0.45, 0.55, 1],
    [1, 1.8, 1.8, 1.2]
  );

  // Floating Star opacity (fades in as transition starts at 0, and fades out as it hands off to static star at 0.95)
  const starOpacity = useTransform(
    smoothProgress,
    [0, 0.1, 0.95, 1],
    [0, 1, 1, 0]
  );

  // Floating Star glow scale & opacity
  const starGlowScale = useTransform(
    smoothProgress,
    [0, 0.45, 0.55, 1],
    [0.6, 2.5, 2.5, 0.8]
  );

  const starGlowOpacity = useTransform(
    smoothProgress,
    [0, 0.45, 0.55, 1],
    [0, 0.8, 0.8, 0]
  );

  return (
    <main className="relative min-h-screen bg-dark-100 overflow-hidden">
      {/* Base Cinematic Elements */}
            <AmbientGlow />

            {/* Hero Section */}
            <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">

              {/* 4-Corner Objects */}
              <Objects />




              {/* Main Content Block — shifted down */}
              <div className="flex flex-col items-center mt-20">

                {/* Main Text Content */}
                <Typography />

                {/* Single High-End CTA Button */}
                <div className="relative z-40 mt-10">
                  <CinematicButton variant="primary" onClick={handleEnterExperience}>
                    ENTER EXPERIENCE
                  </CinematicButton>
                </div>
              </div>

              {/* Spinning Circular Awwwards-Style Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-10 left-32 z-40 w-24 h-24 flex items-center justify-center pointer-events-none"
              >

                {/* Central Bouncing Glowing Arrow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: [-4, 4, -4],
                      boxShadow: [
                        "0 0 8px rgba(255, 90, 0, 0.2)",
                        "0 0 20px rgba(255, 90, 0, 0.6)",
                        "0 0 8px rgba(255, 90, 0, 0.2)"
                      ]
                    }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-9 h-9 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center backdrop-blur-sm"
                  >
                    <svg
                      className="w-4 h-4 text-primary animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>



              {/* Right Stats Detail */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-1 text-[10px] tracking-[0.2em] uppercase text-white/30"
              >
                <span className="text-primary font-bold">48.029° N</span>
                <span>7.218° E</span>
                <div className="w-12 h-px bg-white/10 my-4" />
                <span>CINEMATIC EXPERIENCE</span>
              </motion.div>

            </section>

            {/* Cinematic Section Transition Wrapper */}
            <motion.div
              style={{ backgroundColor: transitionBg }}
              className="relative w-full overflow-hidden"
            >
              {/* Premium Editorial About Section */}
              <div className="relative z-40">
                <AboutSection scrollProgress={smoothProgress} />
              </div>

              {/* Connecting Floating Orange Star */}
              <motion.div
                style={{
                  top: starY,
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                  scale: starScale,
                  opacity: starOpacity,
                }}
                className="fixed pointer-events-none z-[80] flex items-center justify-center w-12 h-12"
              >
                <div className="absolute inset-0 w-8 h-8 bg-[#ff6a00]/30 rounded-full filter blur-md -translate-x-1/4 -translate-y-1/4" />
                <svg className="w-8 h-8 text-[#ff6a00] relative z-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </motion.div>

              {/* Floating Star Glow Backdrop */}
              <motion.div
                style={{
                  top: starY,
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                  scale: starGlowScale,
                  opacity: starGlowOpacity,
                }}
                className="fixed pointer-events-none z-[70] w-48 h-48 bg-[#ff6a00]/20 rounded-full filter blur-[50px]"
              />

              {/* Premium Interactive Logo Folio Section */}
              <div ref={logoSectionRef} className="relative z-40">
                <LogoFolioSection scrollProgress={smoothProgress} />
              </div>

              {/* New Premium Editorial Logo Grid Section (Beige background) */}
              <div className="relative z-40">
                <LogoGridSection scrollProgress={smoothProgress} />
              </div>

              {/* Standalone Visual Identity Intro Section (Black background) */}
              <VisualIdentityIntroSection />

              {/* Visual Identity list section (Beige background) */}
              <VisualIdentityListSection />

              {/* Print Design section (Black background) */}
              <PrintDesignSection />

              {/* Print Design Grid section (Beige background) */}
              <PrintDesignGridSection scrollProgress={smoothProgress} />

              {/* Poster Design section (Black background) */}
              <PosterDesignSection />

              {/* Poster Gallery section (Light beige theme) */}
              <PosterGallerySection />

              {/* Contact / Footer Section */}
              <ContactFooterSection />
            </motion.div>
    </main>
  );
}
