/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com', 'upload.wikimedia.org'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
