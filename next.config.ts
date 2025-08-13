import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // New way to enable static export
  images: { unoptimized: true },
  basePath: "/rishihood-dash",
  assetPrefix: "/rishihood-dash/",
};

export default nextConfig;
