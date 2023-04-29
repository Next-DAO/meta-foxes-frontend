const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */

const devEnv = {
  TX_LINK_PREFIX: "https://goerli.etherscan.io/tx/",
};

const podEnv = {
  TX_LINK_PREFIX: "https://etherscan.io/tx/",
};

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    deviceSizes: [390, 780, 1024, 1920],
  },
  env: process.env.VERCEL_ENV === "production" ? podEnv : devEnv,
};

module.exports = nextConfig;
