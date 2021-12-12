import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "@emotion/styled";

export default function Link(props) {
  const Link = styled(GatsbyLink)`
    text-decoration: none;
    color: inherit;
  `;
  return <Link {...props} />;
}
