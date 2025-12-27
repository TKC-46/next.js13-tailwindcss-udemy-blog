import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      "source.unsplash.com"
    ],
  },
};

export default nextConfig;
