import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Skip ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip type errors during production builds
    ignoreBuildErrors: true, // ✅ Only works in Next.js 12–13
  },
};

export default nextConfig;
