/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    optimizeCss: true, // enabling this will enable SSR for Tailwind
  },
  images : {
    domains: [
        'lh3.googleusercontent.com',
        "k.kakaocdn.net",
    ],
  }
}

module.exports = nextConfig
