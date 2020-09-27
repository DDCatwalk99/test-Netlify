module.exports = {
  siteMetadata: {
    title: `六甲道バル`,
    description: `JR六甲道駅を中心に、美味しいお店やオシャレなバルを紹介しています。`,
    author: `DDCatwalk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `六甲道バル`,
        short_name: `六甲道バル`,
        start_url: `/`,
        background_color: `#4caf50`,
        theme_color: `#4caf50`,
        display: `minimal-ui`,
        icon: `src/images/wine-flat512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
      // 'gatsby-plugin-styled-components',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
