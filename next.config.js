/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/upcoming',
            destination: '/index?filter=upcoming',
          },
          {
            source: '/top-rated',
            destination: '/index?filter=top-rated',
          },
          
        ];
    },
    async headers() {
      return [
        {
          source: '/movies/:id',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=3600',
            },
          ],
        },
      ];
    }
}

module.exports = nextConfig
