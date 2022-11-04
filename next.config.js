/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['1stwebdesigner.com', 'cdn.singulart.com', 'cdn.dribbble.com'],
  },
};

module.exports = nextConfig;
