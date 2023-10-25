/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains:['img.lovepik.com', 'placehold.co', 'i.dummyjson.com']
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: ["img.lovepik.com"],
    //     // port: "",
    //   },
    // ],
  },
};

module.exports = nextConfig;
