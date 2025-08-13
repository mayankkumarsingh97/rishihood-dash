/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath:  process.env.NODE_ENV === 'production' ? '/rishihood-dash' : '',
  images: {
    unoptimized: true, // This is required for static export with images
  },
   assetPrefix: process.env.NODE_ENV === 'production' ? '/rishihood-dash/' : '',
};

module.exports = nextConfig;