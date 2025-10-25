/** @type {import('next').NextConfig} */
const nextConfig = {
     eslint: {
    // Disable ESLint failure during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
