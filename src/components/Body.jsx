import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

function Body(props) {
  return (
    <div>
      <MDXRenderer>{props.body}</MDXRenderer>
    </div>
  );
}

export default Body;
