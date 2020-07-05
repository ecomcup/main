require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'Femmico',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sass',
    'gatsby-plugin-less',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-datocms',
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'ZWU3NDliNjctYjE4NS00MThkLWI5YTctZmEwYzA0Y2Q4Yzc1NjM3Mjk1Mzc0NTUyOTE4NjA4',
        autopop: true
      }
    },
  ],
}
