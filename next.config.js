/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'ik.imagekit.io',
              pathname: '/b6jjt4sjt/**',
            },
        ]
     }
}

module.exports = nextConfig
