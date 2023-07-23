import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `KitWeb Gatsby Template`,
    description: ``,
    siteUrl: `http://localhost:8000`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    // Uncomment for SanityCMS support
    // 
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: 'PROJECT_ID',
    //     dataset: 'production',
    //     watchMode: true
    //   },
    // },
    "gatsby-plugin-postcss",
    // Uncomment for GAnalytics support
    // 
    // {
    //   resolve: "gatsby-plugin-google-gtag",
    //   options: {
    //     trackingIds: [
    //       "REPLACE_ME_WITH_GTAG"
    //     ]
    //   }
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};

export default config;
