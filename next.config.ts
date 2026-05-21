import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Outputs static HTML/CSS/JS to an 'out' folder
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js dynamic image optimization
  },
  turbopack: {
    root: __dirname,
  },
  assetPrefix: '/PORTFOLIO/',
};

export default nextConfig;
