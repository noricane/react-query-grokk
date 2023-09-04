const { StrictMode } = require('react')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["upload.wikimedia.org","*.cloudfront.net"],
    },
}

module.exports = nextConfig
