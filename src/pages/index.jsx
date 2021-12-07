import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import MainLayout from "layouts/MainLayout";

function App() {
  // This query will get all of your posts
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
          <a href={path}>{title}</a>
          <p> {date}</p>
        </li>
      );
    });
  return <MainLayout body={b} />;
}

export default App;
