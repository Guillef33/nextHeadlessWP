/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "prueba.local",
      },
      {
        protocol: "http",
        hostname: "guilleflores2.peymi.net",
      },
    ],
    domains: ["guilleflores2.peymi.net"],
  },
};

module.exports = nextConfig;
