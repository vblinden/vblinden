const { withContentlayer } = require('next-contentlayer');

const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];

// if (process.env.NODE_ENV === 'production') {
securityHeaders.push({
  key: 'Content-Security-Policy',
  value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' *.twitter.com;
      frame-src *.youtube-nocookie.com;
      child-src *.youtube-nocookie.com *.twitter.com;
      style-src 'self' 'unsafe-inline';
      img-src * blob: data:;
      media-src 'none';
      connect-src *;
      font-src 'self';
    `.replace(/\n/g, ''),
});
// }

module.exports = withContentlayer({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
});
