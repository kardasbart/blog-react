import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Carousel from "react-material-ui-carousel";

export default function SwitchImg(props) {
  console.log(props.primary);
  console.log(props.secondary);
  return (
    <Carousel
      duration={200}
      interval={5000}
      indicatorContainerProps={{
        style: {
          bottom: "1rem",
          marginTop: "0px",
          position: "absolute",
          textAlign: "center", // 4
          zIndex: 99,
        },
      }}
    >
      <GatsbyImage
        image={props.primary}
        alt="Primary image"
        style={{
          height: "30vh",
        }}
      />
      <GatsbyImage
        image={props.secondary}
        alt="Primary image"
        style={{
          height: "30vh",
        }}
      />
    </Carousel>
  );
}
