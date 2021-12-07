import React from "react";
import Body from "components/Body";
import MainLayout from "layouts/MainLayout";

function PostTemplate(props) {
  // Here pageContext is passed in at build time by gatsby-node.js
  const { frontmatter, body } = props.pageContext;
  const parsedMdx = <Body body={body}></Body>;
  return <MainLayout body={parsedMdx} />;
}

export default PostTemplate;
