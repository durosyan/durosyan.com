/* https://www.gatsbyjs.com/docs/gatsby-config/ */
module.exports = {
  siteMetadata: {
    title: `durosyan`,
    siteUrl: `https://www.durosyan.com`,
    description: `personal site for a web developer`,
  },
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Durosyan`,
        short_name: `Durosyan`,
        icon: `src/assets/face_logo.svg`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
  ],
};
