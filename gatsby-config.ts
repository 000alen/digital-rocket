import type { GatsbyConfig } from "gatsby";
import languages from "./src/data/languages";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Digital Rocket",
    siteUrl: `https://digital-rocket.netlify.app/`,
    languages,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Digital Rocket",
        short_name: "DR",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#4ade80",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "landing",
        path: `${__dirname}/landing`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-T3412X7NMK",
          // "GA-TRACKING_ID", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],

        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        
        // This object is used for configuration specific to this plugin
        // pluginConfig: {
        //   // Puts tracking script in the head instead of the body
        //   head: false,
        //   // Setting this parameter is also optional
        //   respectDNT: true,
        //   // Avoids sending pageview hits from custom paths
        //   exclude: ["/preview/**", "/do-not-track/me/too/"],
        //   // Defaults to https://www.googletagmanager.com
        //   origin: "YOUR_SELF_HOSTED_ORIGIN",
        // },
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
        // markdownRemark: {
        //   postPage: "src/templates/blog.tsx",
        //   query: `
        //   {
        //     allMarkdownRemark {
        //       edges {
        //         node {
        //           frontmatter {
        //             path,
        //           }
        //         }
        //       }
        //     }
        //   }
        //   `,
        // },
      },
    },
  ],
};

export default config;
