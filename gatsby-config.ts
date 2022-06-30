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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-T3412X7NMK",

        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,

        // Setting this parameter is optional
        // anonymize: true,

        // Setting this parameter is also optional
        // respectDNT: true,

        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],

        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        
        // Defers execution of google analytics script after page load
        // defer: false,
        
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
        
        // defaults to false
        enableWebVitalsTracking: true,
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
