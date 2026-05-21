'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { FiArrowRight } from 'react-icons/fi';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const CinematicButton = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  // Futuristic asymmetric leaf/shield shape
  const shapeClass = "rounded-tl-[22px] rounded-br-[22px] rounded-tr-[4px] rounded-bl-[4px]";

  return (
    <div className="relative group select-none">
      
      {/* Outer ambient glow matching the asymmetric shape */}
      {variant === 'primary' && (
        <div className={cn(
          "absolute inset-0 bg-[#ff5a00]/25 blur-xl opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none",
          shapeClass
        )} />
      )}

      {/* 3D Button Base */}
      <button
        className={cn(
          "relative border-none p-0 cursor-pointer outline-none active:outline-none focus:outline-none select-none",
          shapeClass,
          variant === 'primary' && "bg-[#802200] shadow-[0_8px_24px_rgba(0,0,0,0.6)]",
          variant === 'outline' && "bg-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.4)]",
          className
        )}
        {...props}
      >
        {/* 3D Top Surface with satisfying mechanical click */}
        <span 
          className={cn(
            "block px-10 py-[18px] font-display text-[10px] md:text-[11px] tracking-[0.3em] font-black uppercase flex items-center justify-center gap-3 select-none transition-transform duration-[120ms] ease-out transform",
            shapeClass,
            
            // Primary Sunset Gradient top
            variant === 'primary' && [
              "bg-gradient-to-r from-[#ff5a00] via-[#ff7c33] to-[#ffaa66]",
              "text-white border border-[#ff5a00]/30",
              "-translate-y-[5px] group-hover:-translate-y-[8px] group-active:translate-y-0",
              "shadow-[0_4px_12px_rgba(255,90,0,0.15)] group-hover:shadow-[0_8px_24px_rgba(255,90,0,0.3)]"
            ],

            // Outline / Alternate Glass top
            variant === 'outline' && [
              "bg-black/60 backdrop-blur-md text-white border border-white/20",
              "-translate-y-[5px] group-hover:-translate-y-[8px] group-active:translate-y-0"
            ]
          )}
          style={{ textShadow: variant === 'primary' ? '0 1px 3px rgba(0,0,0,0.2)' : 'none' }}
        >
          {/* Text */}
          <span className="relative z-10">{children}</span>

          {/* Dynamic high-tech circular arrow */}
          <div className="relative z-10 flex items-center justify-center w-5 h-5 rounded-full bg-white/15 border border-white/10 group-hover:bg-white/30 group-hover:border-white/30 transition-all duration-300">
            <FiArrowRight className="text-[11px] group-hover:translate-x-0.5 transition-transform duration-300" />
          </div>
        </span>
      </button>
    </div>
  );
};
