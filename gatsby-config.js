module.exports = {
  siteMetadata: {
    title: 'Tester-roo',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-remark',
      'gatsby-plugin-sass',
      'gatsby-plugin-page-transitions',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `src`,
              path: `${__dirname}/src/`,
          },
      }
  ],
}
