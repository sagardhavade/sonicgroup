/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        hostname: "blog.bizpluscrm.com",
        // hostname: "bizpluscrm.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
