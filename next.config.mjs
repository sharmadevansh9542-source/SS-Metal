/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/image-gallery',
        destination: '/products',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

