'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface CornerObjectProps {
  src: string;
  alt: string;
  corner: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size: string;          // Tailwind w-* class
  parallaxSpeed: number;
  delay: number;
  rotate?: number;       // resting rotation in degrees
  offsetX?: number;      // horizontal nudge in px (positive = right)
  offsetY?: number;      // vertical nudge in px (positive = down)
}

const CORNER_STYLES: Record<CornerObjectProps['corner'], string> = {
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
};

// Each corner flies in from its own direction
const CORNER_FROM: Record<CornerObjectProps['corner'], { x: number; y: number }> = {
  'top-left': { x: -220, y: -220 },
  'top-right': { x: 220, y: -220 },
  'bottom-left': { x: -220, y: 220 },
  'bottom-right': { x: 220, y: 220 },
};

const CornerObject = ({
  src, alt, corner, size, parallaxSpeed, delay, rotate = 0, offsetX = 0, offsetY = 0,
}: CornerObjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const from = CORNER_FROM[corner];
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        x: from.x,
        y: from.y,
        scale: 1.15,
        rotate: rotate + (from.x > 0 ? 15 : -15),
        filter: 'blur(18px)',
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate,
        filter: 'blur(0px)',
        duration: 2.2,
        delay: delay + 1.5,
        ease: 'power4.out',
      }
    );
  }, [corner, delay, rotate]);

  const isRight = corner.endsWith('-right');
  const isBottom = corner.startsWith('bottom-');

  return (
    <div
      ref={ref}
      className={`absolute ${CORNER_STYLES[corner]} ${size} pointer-events-none`}
      data-parallax-speed={parallaxSpeed}
      style={{ 
        rotate: `${rotate}deg`, 
        marginLeft: isRight ? undefined : `${offsetX}px`,
        marginRight: isRight ? `${-offsetX}px` : undefined,
        marginTop: isBottom ? undefined : `${offsetY}px`,
        marginBottom: isBottom ? `${offsetY}px` : undefined,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
        priority
      />
    </div>
  );
};

export default function Objects() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const xPos = e.clientX / window.innerWidth - 0.5;
      const yPos = e.clientY / window.innerHeight - 0.5;

      const objects = containerRef.current.querySelectorAll('[data-parallax-speed]');
      objects.forEach((obj) => {
        const speed = parseFloat(obj.getAttribute('data-parallax-speed') || '0');
        gsap.to(obj, {
          x: xPos * speed * 60,
          y: yPos * speed * 60,
          duration: 1.8,
          ease: 'power2.out',
        });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-35 overflow-hidden pointer-events-none">



      {/* TOP RIGHT — Notebook */}
      <CornerObject
        src="/assets/obj-logo-transparent.png"
        alt="Studio Logo"
        corner="top-right"
        size="w-[18rem]"
        parallaxSpeed={0.4}
        delay={0.4}
        rotate={6}
        offsetX={-150}
        offsetY={40}
      />

      {/* TOP LEFT — Tablet */}
      <CornerObject
        src="/assets/obj-tablet.png"
        alt="Drawing Tablet"
        corner="top-left"
        size="w-[18rem]"
        parallaxSpeed={0.35}
        delay={0.6}
        rotate={22}
        offsetX={160}
        offsetY={40}
      />

      {/* BOTTOM RIGHT — Headset */}
      <CornerObject
        src="/assets/obj-headset.png"
        alt="Headset"
        corner="bottom-right"
        size="w-[14rem] md:w-[22rem]"
        parallaxSpeed={0.45}
        delay={0.8}
        rotate={-24}
        offsetY={20}
        offsetX={-90}
      />

    </div>
  );
}
