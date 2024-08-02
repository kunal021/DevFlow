/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TINYMCE_API_KEY: process.env.TINYMCE_API_KEY,
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
};

export default nextConfig;
