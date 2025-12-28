
// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
    ],
  },
};

module.exports = nextConfig;

