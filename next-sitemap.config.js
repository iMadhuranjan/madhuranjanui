/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://madhuranjanui.com',
    generateRobotsTxt: true, // optional but recommended
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
};
