const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
];

if (process.env.NODE_ENV === 'production') {
  securityHeaders.push({
    key: 'Content-Security-Policy',
    value: 'default-src \'self\'; img-src *; script-src \'self\'; style-src \'self\'; frame-src youtube-nocookie.com www.youtube-nocookie.com;'
  });
}

module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
