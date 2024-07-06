/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export', // Remove if we want to use node.js server
};

export default nextConfig;
