/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'res.cloudinary.com'],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig
