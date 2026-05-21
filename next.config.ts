import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    // @ts-ignore
    allowedDevOrigins: ['172.19.200.199'],
  },
};

export default nextConfig;
