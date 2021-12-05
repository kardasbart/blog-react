import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

function PostTemplate(props) {
  // Here pageContext is passed in at build time by gatsby-node.js
  const { frontmatter, body } = props.pageContext;
  const listItems = frontmatter["custom_list"].map((value) => <li>{value}</li>);
  return (
    <div>
      {/** Header to our post */}
      <div className="header">
        <h1>{frontmatter.title}</h1>
        <p>{new Date(frontmatter.date).toLocaleDateString()}</p>
        <ul>
          <h2>{listItems}</h2>
        </ul>

        <h2>{frontmatter.slug}</h2>
      </div>

      {/** Post Body */}
      <div className="body">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </div>
  );
}

export default PostTemplate;
