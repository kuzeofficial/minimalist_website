/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "s3.us-west-2.amazonaws.com",
      "cristianfonseca.com",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://cristianfonseca.com/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
