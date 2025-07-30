/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/vargas_dev' : '',
  assetPrefix: isProd ? '/vargas_dev/' : '',
};

module.exports = nextConfig;
