// import { getImage } from "gatsby-plugin-image";
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  // This is the query we will use to fetch data from GraphQL
  // This query will look for markdown files that have `/posts/` in
  // Their absolute path. If you keep your posts in another place you will
  // Need to change this
  // Inside each file we need the title, date, slug and the posts body
  const query = await graphql(`
    query Posts {
      allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // Check for any errors in the query
  if (query.errors) {
    throw query.errors;
  }

  // Get the posts and put them into a nice object
  const posts = query.data.allMdx.edges;

  // Fetch the post template we created in teh previous step
  const postTemplate = path.resolve(__dirname, "src", "templates", "post.jsx");

  // Iterate over every post we queried, then for every post call
  // actions.createPage() to build a page with the data and template
  posts.forEach((post) => {
    const slug = post.node.frontmatter.slug;
    // Now we finally create the page
    // We assign every page the path we just created and build it
    // Using our postTemplate component. We also pass in some context about the post
    // Which will be used by the template via pageProps
    actions.createPage({
      path: "/post/" + slug,
      component: postTemplate,
      context: { slug: slug },
    });
  });
};
