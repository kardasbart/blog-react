import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Container from "@mui/material/Container";

export default function SwitchImg(props) {
  console.log(props.primary);
  console.log(props.secondary);
  return (
    <Container
      disableGutters
      sx={{
        flexGrow: 1,
        display: "flex",
        overflow: "hidden",
        position: "relative",
        minHeight: "300px",
        minWidth: "300px",
      }}
    >
      <Container
        disableGutters
        sx={{
          display: "flex",
          flexGrow: 1,
          overflow: "hidden",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <GatsbyImage
          image={props.isPrimaryShown ? props.primary : props.secondary}
          alt="Secondary image"
          // style={{
          //   position: "absolute",
          // }}
        />
        {/* {props.isPrimaryShown && (
          <GatsbyImage image={props.secondary} alt="Primary image" />
        )} */}
      </Container>
    </Container>
  );
}
