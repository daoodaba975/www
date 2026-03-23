/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx"],
  reactStrictMode: true,
  transpilePackages: ["@phosphor-icons/react"],
};

module.exports = nextConfig;
