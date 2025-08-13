import type { NextConfig } from "next";

const nextConfig: NextConfig = {

};
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/rishihood-dash' : '',
  assetPrefix: isProd ? '/rishihood-dash/' : '',
};
export default nextConfig;
