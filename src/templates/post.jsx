import React from "react";
import MainLayout from "layouts/MainLayout";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function PostTemplate(props) {
  // Here pageContext is passed in at build time by gatsby-node.js
  const { frontmatter, body } = props.pageContext;
  return (
    <MainLayout>
      <h1>{frontmatter.title}</h1>
      <small>{frontmatter.date}</small>
      <p>{frontmatter.abstract}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </MainLayout>
  );
}
