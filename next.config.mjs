/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep development manifests away from the production `.next` directory.
  // On Windows, concurrent scanners/processes can otherwise lock these small
  // JSON files while Next is compiling a route and surface errno -4094.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'http', hostname: '127.0.0.1', port: '8001' },
      { protocol: 'http', hostname: '127.0.0.1', port: '8002' },
      { protocol: 'https', hostname: 'brandz-pakistan.softsuitetech.com' },
    ],
  },
};

export default nextConfig;
