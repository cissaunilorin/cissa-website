/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'cissa-website-nu.vercel.app'],
  },
};

module.exports = nextConfig;
