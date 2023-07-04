/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  exclude: ['/admin*', '/auth/login', '/write'],
  robotsTxtOptions: {
    additionalSitemaps: [`${process.env.SITE_URL}blog/server-sitemap.xml`],
  },
};
