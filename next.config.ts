// next.config.ts (or next.config.js using similar syntax)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app'
      },      
      {
        protocol: 'https',
        hostname: 'skillicons.dev'
      },
      {
        protocol: 'https',
        hostname: 'github-readme-streak-stats.herokuapp.com'
      },
    ]
  },
  /* other config options here */
};

export default nextConfig;
