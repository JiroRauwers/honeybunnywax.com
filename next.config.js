/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode : true,
  swcMinify       : true,
  compress        : true,
  images          : {
    formats        : ['image/avif', 'image/webp'],
    remotePatterns : [
      {
        protocol : 'https',
        hostname : 'player.vimeo.com',
        pathname : '/protected/**'
      }
    ]
  },
  pageExtensions: ['page.tsx'],

  compiler: {
    styledComponents: {
      ssr                  : true,
      displayName          : true,
      fileName             : true,
      meaninglessFileNames : ['index', 'styles'],
      cssProp              : true
    }
  },
  eslint: {
    ignoreDuringBuilds: true
  },

  async rewrites() {
    return [
      {
        source      : '/',
        destination : '/home'
      }
    ];
  }
};
