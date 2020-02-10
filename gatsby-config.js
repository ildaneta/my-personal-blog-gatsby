require('dotenv').config();

const queries = require('./src/utils/algolia_queries');

module.exports = {
  siteMetadata: {
    title: `Ilda Neta`,
    position: `Desenvolvedora Front-end`,
    description: `Busco através da escrita demonstrar minhas paixões por tecnologia, soft skills e assuntos comportamentais.`,
    author: `Ilda Neta`,
    siteURL: `https://ildaneta.netlify.com/`
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // needs to be the first to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },

          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // quantidade de dados por vez
        enablePartialUpdates: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ilda Neta`,
        short_name: `Ilda neta`,
        start_url: `/`,
        background_color: `#191921;`,
        theme_color: `#191921;`,
        display: `minimal-ui`,
        // favicon
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ]
};
