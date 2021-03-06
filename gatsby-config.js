module.exports = {
  siteMetadata: {
    title: 'Tester-roo',
    description: 'Portfolio Site',
    author: "Dan Would"
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-remark',
      'gatsby-plugin-sass',
      'gatsby-plugin-page-transitions',
      'gatsby-plugin-transition-link',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/images`,
          name: 'images',
        },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `src`,
              path: `${__dirname}/src/`,
          },
      },
  ],
}
