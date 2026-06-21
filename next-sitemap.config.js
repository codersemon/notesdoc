/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://learn.emonkhan.me",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
