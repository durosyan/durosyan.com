/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `durosyan`,
    siteUrl: `https://www.durosyan.com`,
    description: `personal site for a web developer`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        pageTransitionDelay: 0,
        defer: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "durosyan.com",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `durosyan`,
        short_name: `durosyan`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-material-ui",
    `gatsby-plugin-offline`
  ],
}
