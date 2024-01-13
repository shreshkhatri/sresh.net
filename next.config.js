/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'standalone',
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    }
}

module.exports = nextConfig
