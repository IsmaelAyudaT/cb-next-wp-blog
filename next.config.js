if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.WORDPRESS_API_URL,
        port: "",
      },
      {
        protocol: "http",
        hostname: "2.gravatar.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;