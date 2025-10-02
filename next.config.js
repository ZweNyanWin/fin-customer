// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/fin-customer',
  assetPrefix: '/fin-customer',
  experimental: { instrumentationHook: true },
};

export default nextConfig;
