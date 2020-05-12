module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `zwlzhwha`,
        dataset: `production`,
        overlayDrafts: true,
        watchMode: true,
        token:
          "sk5tblXYGjoOCmKMAMmU8YD5xi4OA5mVErv9Zup3MwAL878A3nPHh4I6M847AxGlMITRfPRZi6pXI8eq8uAKap3tf3lasz0niv9Ye2C3hSHWDHUnyMLzwq23UpaZ72M7RVIRsesgnbH2hi6jlX2lzneOfOSiLRFTtoe8poyqn69HxumyAYIW",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
