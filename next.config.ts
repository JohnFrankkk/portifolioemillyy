import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false, // Hides the 'N' (Next.js static route) indicator
  },
};

export default nextConfig;
