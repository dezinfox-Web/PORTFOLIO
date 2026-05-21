'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AmbientGlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, delay: 0.1, ease: "easeOut" }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] cinematic-glow"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.2, ease: "easeOut" }}
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] cinematic-glow"
        style={{ background: 'radial-gradient(circle, #ff5a00 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 bg-[#0a0a0a]/80" />
    </div>
  );
};

export const FloatingParticles = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0
          }}
          animate={{
            y: [null, (Math.random() - 0.5) * 100 + "%"],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
          className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export const GrainOverlay = () => {
  return <div className="noise-overlay" />;
};
