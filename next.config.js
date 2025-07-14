// @ts-check
const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'media-exp1.licdn.com',
            },
            {
                protocol: 'https',
                hostname: '19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com',
            },
            {
                protocol: 'https',
                hostname: 'marvelapp.com',
            },
            {
                protocol: 'https',
                hostname: 'api.daily.dev',
            },
            {
                protocol: 'https',
                hostname: 'media2.dev.to',
            },
        ],
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
        domains: new Array(), // Ensures a mutable array for domains
    }
};

module.exports = nextConfig
