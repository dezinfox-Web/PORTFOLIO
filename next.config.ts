import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // Outputs static HTML/CSS/JS to an 'out' folder
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js dynamic image optimization
  },
  turbopack: {
    root: __dirname,
  },
  assetPrefix: isProd ? '/PORTFOLIO/' : undefined,
  basePath: isProd ? '/PORTFOLIO' : undefined,
};

export default nextConfig;
