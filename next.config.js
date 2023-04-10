const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    deviceSizes: [390, 780, 1024, 1920],
  },
};

module.exports = nextConfig;
