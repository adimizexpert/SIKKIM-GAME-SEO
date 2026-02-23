/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['sikkimgamelogin.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  swcMinify: true,

  // 301 redirects: /k/ keyword (doorway) pages → relevant main pages
  async redirects() {
    const kRedirects = [
      { source: '/k/sikkim-gaming', destination: '/', permanent: true },
      { source: '/k/sikkim-gaming/', destination: '/', permanent: true },
      { source: '/k/sikkim-game', destination: '/', permanent: true },
      { source: '/k/sikkim-game/', destination: '/', permanent: true },
      { source: '/k/sikkim-game-register', destination: '/register', permanent: true },
      { source: '/k/sikkim-game-register/', destination: '/register', permanent: true },
      { source: '/k/sikkim-game-logo', destination: '/about-sikkim-game', permanent: true },
      { source: '/k/sikkim-game-logo/', destination: '/about-sikkim-game', permanent: true },
      { source: '/k/sikkim-game-login', destination: '/login', permanent: true },
      { source: '/k/sikkim-game-login/', destination: '/login', permanent: true },
      { source: '/k/sikkim-game-lottery', destination: '/guide', permanent: true },
      { source: '/k/sikkim-game-lottery/', destination: '/guide', permanent: true },
      { source: '/k/sikkim-game-online', destination: '/guide', permanent: true },
      { source: '/k/sikkim-game-online/', destination: '/guide', permanent: true },
      { source: '/k/sikkim-game-download', destination: '/download', permanent: true },
      { source: '/k/sikkim-game-download/', destination: '/download', permanent: true },
      { source: '/k/sikkim-game-link-2025', destination: '/guide', permanent: true },
      { source: '/k/sikkim-game-link-2025/', destination: '/guide', permanent: true },
      { source: '/k/sikkim-game-download-app', destination: '/download', permanent: true },
      { source: '/k/sikkim-game-download-app/', destination: '/download', permanent: true },
      { source: '/k/sikkim-game-apk', destination: '/download', permanent: true },
      { source: '/k/sikkim-game-apk/', destination: '/download', permanent: true },
      { source: '/k/sikkim-game-5000-bonus', destination: '/bonus', permanent: true },
      { source: '/k/sikkim-game-5000-bonus/', destination: '/bonus', permanent: true },
      { source: '/k/sikkim-game-40-bonus', destination: '/bonus', permanent: true },
      { source: '/k/sikkim-game-40-bonus/', destination: '/bonus', permanent: true },
      { source: '/k/sikkim-game-30-bonus', destination: '/bonus', permanent: true },
      { source: '/k/sikkim-game-30-bonus/', destination: '/bonus', permanent: true },
      { source: '/k/sikkim-game-100-deposit', destination: '/bonus', permanent: true },
      { source: '/k/sikkim-game-100-deposit/', destination: '/bonus', permanent: true },
      { source: '/k/sikkim-game-100-deposit-screenshot', destination: '/bonus', permanent: true },
      { source: '/k/sikkim-game-100-deposit-screenshot/', destination: '/bonus', permanent: true },
      { source: '/k/sikkim-game-2025', destination: '/guide', permanent: true },
      { source: '/k/sikkim-game-2025/', destination: '/guide', permanent: true },
    ]
    // (1) http → https: handled by middleware.ts (next.config cannot see protocol)
    // (2) http://www → https://sikkimgamelogin.com and (3) https://www → https://sikkimgamelogin.com:
    const canonicalRedirects = [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.sikkimgamelogin.com' }],
        destination: 'https://sikkimgamelogin.com/:path*',
        permanent: true,
      },
    ]
    return [...kRedirects, ...canonicalRedirects]
  },
}

module.exports = nextConfig

