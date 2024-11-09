/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pm-s3-pics.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
