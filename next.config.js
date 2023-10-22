/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.lovepik.com",
        // port: "",
      },
    ],
  },
};

module.exports = nextConfig;
