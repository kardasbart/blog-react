import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import MainLayout from "layouts/MainLayout";

export default function App() {
  // This query will get all of your posts
  const b = posts.allMdx.edges
    .sort((a, b) => {
      const a_ = a.node.frontmatter.slug;
      const b_ = b.node.frontmatter.slug;
      return ("" + a_).localeCompare(b_);
    })
    .map((edge) => {
      const { date, slug, title } = edge.node.frontmatter;
      const path = `/post/${slug}`;
      return (
        <li key={path}>
          <Link to={path}>{title}</Link>
          <p> {date}</p>
        </li>
      );
    });
  return <MainLayout>{b}</MainLayout>;
}

const posts = useStaticQuery(graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`);
