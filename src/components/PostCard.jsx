import React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import Container from "@mui/material/Container";
import SwitchImg from "./SwitchImg";
import { getImage } from "gatsby-plugin-image";

export default function PostCard(props) {
  const computeDirection = (isImageFirst) => {
    if (isImageFirst) return "column";
    else if (/*props.flipped*/ true) return "row-reverse";
    else return "row";
  };
  const [direction, setDirection] = useState(computeDirection(false));
  const computeHalfPostSyle = (isImageFirst) => {
    let result = {
      overflow: "hidden",
      maxHeight: "30vh",
      minHeight: "300px",
      maxWidth: "auto",
    };
    if (!isImageFirst) {
      result.maxWidth = "50%";
    }
    return result;
  };
  const [halfPostCardStyle, setHalfPostCardStyle] = useState(
    computeHalfPostSyle(false)
  );

  return (
    // <Card
    //   as={Link}
    //   className="p-0 m-5"
    //   to={props.link}
    //   style={{ textDecoration: "none", color: "inherit" }}
    // >

    //   <Card.Body style={{ width: "50%" }}>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text>{props.abstract}</Card.Text>
    //     <Card.Text>{props.date}</Card.Text>
    //   </Card.Body>
    // </Card>
    <Link
      // className={flexClass}
      to={props.link}
      className="shadow"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Container style={{ flexDirection: direction }}>
        <SwitchImg
          primary={getImage(props.primary)}
          secondary={getImage(props.secondary)}
          style={halfPostCardStyle}
        />
        <div
          className="p-4 flex flex-column"
          style={{ ...halfPostCardStyle, backgroundColor: "white" }}
        >
          <h3>{props.title}</h3>
          <p className="align-self-stretch" style={{ overflow: "hidden" }}>
            {props.abstract}
          </p>
          <h6>{props.date}</h6>
        </div>
      </Container>
    </Link>
  );
}
