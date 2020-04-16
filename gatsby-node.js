const path = require("path");

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const portfolioTemplate = path.resolve(`src/components/portfolioItem.js`);
        //const portfolioLayout = path.resolve(`src/layouts/portfolioLayout.js`);
        // Query for markdown nodes to use in creating pages.
        resolve(
            graphql(
                `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
            ).then(result => {
                if (result.errors) {
                    reject(result.errors);
                }

                // Create pages for each markdown file.
                result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    const path = node.frontmatter.path;
                    createPage({
                        path,
                        component: portfolioTemplate,
                        // If you have a layout component at src/layouts/blog-layout.js
                        //layout: 'portfolioLayout',
                        // In your blog post template's graphql query, you can use path
                        // as a GraphQL variable to query for data from the markdown file.
                        context: {
                            path,
                        },
                    });
                });
            })
        );
    });
};