// next.config.ts – GitHub Pages static export configuration
import type { NextConfig } from "next";

/**
 * The repository name is "PORTFOLIO"; GitHub Pages serves the site from
 * `https://dezinfox-Web.github.io/PORTFOLIO/`.  Therefore we set `basePath`
 * accordingly and enable a static export.
 */
const nextConfig: NextConfig = {
  // Build a fully static site that can be served from any static host
  output: "export",
  // Base path must match the repository name on GitHub Pages
  basePath: "/PORTFOLIO",
  // GitHub Pages does not support Next.js image optimisation, so disable it
  images: { unoptimized: true },
  // Optional: keep existing dev indicator settings if you like
  devIndicators: false,
  experimental: {
    // @ts-ignore – existing custom dev origin (preserve if needed)
    allowedDevOrigins: ["172.19.200.199"],
  },
};

export default nextConfig;
