/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
});
const withSvgr = require('next-plugin-svgr');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-GB", "pl-PL"],
    defaultLocale: "en-GB",
    domains: [
      {
        domain: "pooch.rocks",
        defaultLocale: "en-GB",
      },
    ],
  },
};

module.exports = withPWA(withSvgr(nextConfig));
