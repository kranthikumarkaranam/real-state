/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      domains: ['images.unsplash.com', 'plus.unsplash.com'],
    },
  }

  module.exports = nextConfig