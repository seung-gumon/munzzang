/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images : {
    domains: [
        'lh3.googleusercontent.com',
        "k.kakaocdn.net",
    ],
  }
}

module.exports = nextConfig
