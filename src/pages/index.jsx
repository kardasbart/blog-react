import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import MainLayout from "layouts/MainLayout";
import { Container } from "react-bootstrap";
import PostCard from "components/PostCard";
<script src=""></script>;

export default function App() {
  // This query will get all of your posts
  const postsValues = useStaticQuery(metaPostsQuery);
  const postObjects = postsValues.allMdx.edges
    .sort((a, b) => {
      const a_ = a.node.frontmatter.slug;
      const b_ = b.node.frontmatter.slug;
      return ("" + a_).localeCompare(b_);
    })
    .map((edge) => {
      const { title, date, slug, abstract } = edge.node.frontmatter;
      const path = `/post/${slug}`;
      return (
        <PostCard
          key={slug}
          link={path}
          title={title}
          date={date}
          abstract={abstract}
        ></PostCard>
      );
    });
  return (
    <MainLayout>
      <Container fluid>{postObjects}</Container>
    </MainLayout>
  );
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
          }
        }
      }
    }
  }
`;
