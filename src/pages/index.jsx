import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import MainLayout from "layouts/MainLayout";
import PostCard from "components/PostCard";

export default function App() {
  // This query will get all of your posts
  const postsValues = useStaticQuery(metaPostsQuery);
  const postObjects = postsValues.allMdx.edges
    .sort((a, b) => {
      const a_ = a.node.frontmatter.slug;
      const b_ = b.node.frontmatter.slug;
      return ("" + a_).localeCompare(b_);
    })
    .map((edge, index) => {
      const data = edge.node.frontmatter;
      const path = `/post/${data.slug}`;
      data.link = path;
      return (
        <PostCard key={data.slug} data={data} flipped={index % 2}></PostCard>
      );
    });
  return <MainLayout>{postObjects}</MainLayout>;
}

const metaPostsQuery = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
      edges {
        node {
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
    }
  }
`;
