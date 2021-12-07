import React from "react";
import MainLayout from "layouts/MainLayout";
import { MDXRenderer } from "gatsby-plugin-mdx";

function PostTemplate(props) {
  // Here pageContext is passed in at build time by gatsby-node.js
  const { frontmatter, body } = props.pageContext;
  return (
    <MainLayout>
      <MDXRenderer>{body}</MDXRenderer>
    </MainLayout>
  );
}

export default PostTemplate;
