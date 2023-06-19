/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: false,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
        appDir: true,
        optimizeCss: true, // enabling this will enable SSR for Tailwind
    },
    images: {
        domains: [
            'lh3.googleusercontent.com',
            "k.kakaocdn.net",
            "https://petnmat-dev.s3.ap-northeast-2.amazonaws.com"
        ],
    },
}

module.exports = nextConfig
