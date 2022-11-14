/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  images: {
    domains: ['img.thosefree.com','img0.baidu.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname);
      config.resolve.alias['@@'] = path.resolve(__dirname, './components');
      return config;
  } 
}

module.exports = nextConfig
