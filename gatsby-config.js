const siteMetadata = require('./site-metadata.json')

module.exports = {
    pathPrefix: '/',
    siteMetadata: {
    siteMetadata,
    siteUrl: `https://service.tuanducdesign.com`,
        },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    // It's important to specify the maxWidth (in pixels) of
                    // the content container as this plugin uses this as the
                    // base for generating different widths of each image.
                    maxWidth: 1200,
                    withWebp: true,
                    quality: 80,
                  },
                }
              ],
            },
          },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `Tuan Duc Design`,
            short_name: `TD Service`,
            start_url: `/`,
            background_color: `#fff`,
            theme_color: `#fe2c55`,
            display: `standalone`,
            icon: 'static/images/58111AA6-D0D9-4C10-BC6C-068FDAC2CE6D_4_5005_c.jpeg',
            cache_busting_mode: 'none',
          },
        },
        {
          resolve: 'gatsby-plugin-google-tagmanager',
          options: {
            id: 'GTM-PJL9SWW',
            defaultDataLayer: { platform: 'gatsby' },
          },
        },
        {
          resolve: 'gatsby-plugin-offline',
          options: {
            workboxConfig: {
              runtimeCaching: [{
                // Use cacheFirst since these don't need to be revalidated (same RegExp
                // and same reason as above)
                urlPattern: /(\.js$|\.css$|[^:]static\/)/,
                handler: 'CacheFirst',
              },
              {
                // page-data.json files, static query results and app-data.json
                // are not content hashed
                urlPattern: /^https?:.*\/page-data\/.*\.json/,
                handler: 'StaleWhileRevalidate',
              },
              {
                // Add runtime caching of various other page resources
                urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
                handler: 'StaleWhileRevalidate',
              },
              {
                // Google Fonts CSS (doesn't end in .css so we need to specify it)
                urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
                handler: 'StaleWhileRevalidate',
              },
              ],
            },
          },
        },
        {
          resolve: `gatsby-plugin-google-adsense`,
          options: {
            publisherId: `ca-pub-4183134625750063`
          },
        },
        'gatsby-plugin-optimize-svgs',
        'gatsby-plugin-robots-txt',
        'gatsby-plugin-sitemap',
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        }
    ]
};
