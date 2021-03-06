const path = require("path");

module.exports = {
  plugins: [
	'gatsby-plugin-top-layout',
	'gatsby-plugin-react-helmet',
    'gatsby-plugin-mui-emotion',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.resolve(__dirname, "static", "posts"),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        layouts: path.join(__dirname, "src/layouts"),
        templates: path.join(__dirname, "src/templates"),
        scss: path.join(__dirname, "src/scss"),
        types: path.join(__dirname, "src/types"),
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
      },
    },
  ],
};
