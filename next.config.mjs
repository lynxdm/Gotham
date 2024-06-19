import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensures that Sass looks for .scss files in the styles directory
  sassOptions: {
    includePaths: [path.join(new URL('.', import.meta.url).pathname, 'src/styles')],
  },
  experimental: {
    appDir: true, // This enables the app directory feature in Next.js 13
  },
  // Allows for import and use of SVGs as jsx components
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
