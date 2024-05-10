const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const IS_PROD = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: IS_PROD ? '/' : '',
        disallow: IS_PROD ? '' : '/',
      },
    ],
  },
};
