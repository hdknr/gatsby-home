/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [{
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
        {
            resolve: `gatsby-plugin-graphql-codegen`,
            options: {
                fileName: `types/graphqlTypes.d.ts`,
            },
        },
        "gatsby-plugin-postcss",
        "gatsby-plugin-emotion",
        {
            resolve: "gatsby-plugin-purgecss",
            options: {
                content: [
                    require("path").join(
                        process.cwd(),
                        "src/**/!(*.d).{js,jsx,ts,tsx,md,mdx}"
                    ),
                ],
                printRejected: true,
                develop: true,
                tailwind: true,
                whitelist: ["emoji"],
            },
        },
    ]
}