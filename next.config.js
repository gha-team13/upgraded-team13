require("dotenv").config(); // Load environment variables from .env

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    FLAGSMITH_KEY: process.env.FLAGSMITH_KEY, // Expose environment variables
  },
};

module.exports = nextConfig;
