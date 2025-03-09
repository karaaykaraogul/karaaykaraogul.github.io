/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Add any other configuration options here
  // If you need to handle images properly in static export:
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
