/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

// exports.createPages = async (props) => {
//   const { page, actions, graphql } = props;
//   const { createPage } = actions;
//   console.log(props);
//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/product\//)) {
//     page.matchPath = "/product/*";
//     console.log(page);
//     page.context.name = "Clear Cup + Cleanser + Wipes";
//     // Update the page.
//     createPage(page);
//   }
// };
// console.log("products".match(/^\/product/));
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/product\//)) {
//     page.matchPath = "/product/*";
//     console.log(page, "pagepagepagepage", actions);
//     page.context.name = "Clear Cup + Cleanser + Wipes";
//     // Update the page.
//     createPage(page);
//   }
// };
// console.log("products".match(/^\/product/));
/**
 * Custom Webpack config
 * */

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    /**
     * Adds aliases for paths (like components)
     * so you don't get lost in relative hell -> '../../../'
     */
    resolve: {
      alias: {
        "@components": path.join(__dirname, "./src/components"),
        "@images": path.join(__dirname, "./src/images"),
        "@tools": path.join(__dirname, "./src/tools"),
        "@templates": path.join(__dirname, "./src/templates"),
      },
    },
    /**
     * Allows importing of HTML files.
     * */
    module: {
      rules: [
        {
          test: /\.(html)$/,
          use: {
            loader: "html-loader",
          },
        },
      ],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
  })
}
