/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['your-image-domain.com'], // Add domains for optimized images
    },
    env: {
      MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
    },
  }
  
  module.exports = {
    nextConfig,
    async redirects() {
      return [
        {
          source: '/client',
          destination: '/client/dashboard',
          permanent: true,
        },
        {
          source: '/driver',
          destination: '/driver/dashboard',
          permanent: true,
        },
      ]
    },
  }