import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Carousel from "react-material-ui-carousel";

export default function SwitchImg(props) {
  console.log(props.primary);
  console.log(props.secondary);
  return (
    <GatsbyImage
      image={props.primary}
      alt="Primary image"
      style={{
        height: "300px",
      }}
    />
  );
}
