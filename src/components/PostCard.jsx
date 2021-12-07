import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "gatsby";

export default function PostCard(props) {
  return (
    <Card
      as={Link}
      className="p-0 m-5"
      to={props.link}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.abstract}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{props.date}</small>
      </Card.Footer>
    </Card>
  );
}
