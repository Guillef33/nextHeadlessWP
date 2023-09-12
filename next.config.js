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

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);

module.exports = withNextIntl(nextConfig);
