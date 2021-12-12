import React from "react";
import MainLayout from "layouts/MainLayout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SwitchImg from "components/SwitchImg";
import { getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export default function PostTemplate({ data }) {
  // Here pageContext is passed in at build time by gatsby-node.js
  // const { frontmatter, body } = data.mdx;\
  const { body, frontmatter } = data.mdx;
  return (
    <MainLayout>
      <h1>{frontmatter.title}</h1>
      <small>{frontmatter.date}</small>
      <p>{frontmatter.abstract}</p>
      <SwitchImg
        primary={getImage(frontmatter.primary_thumb)}
        secondary={getImage(frontmatter.secondary_thumb)}
      />
      <MDXRenderer>{body}</MDXRenderer>
    </MainLayout>
  );
}
export const query = graphql`
  query PostsData($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        slug
        abstract
        primary_thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
        secondary_thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
