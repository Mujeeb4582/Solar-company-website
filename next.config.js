/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placehold.co"],
  },
};

module.exports = nextConfig;
