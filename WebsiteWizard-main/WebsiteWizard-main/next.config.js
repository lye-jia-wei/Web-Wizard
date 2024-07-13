// next.config.js

const nextConfig = {
  images: {
    domains: [
      "pbs.twimg.com",
      "pbs.twimage.com",
      "cloudflare-ipfs.com",
      "randomuser.me",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
