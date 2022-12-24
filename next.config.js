/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['links.papareact.com','randomuser.me','cdn.sanity.io'],
  },
}
