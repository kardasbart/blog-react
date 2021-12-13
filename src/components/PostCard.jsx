import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getImage } from "gatsby-plugin-image";

import SwitchImg from "./SwitchImg";
import Link from "./Link";

export default function PostCard({ data, flipped }) {
  const order = flipped === 1 ? "row" : "row-reverse";
  console.log(order);
  return (
    <Card
      component={Link}
      to={data.link}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: order,
        },
      }}
    >
      <CardMedia
        sx={{
          width: { xs: "auto", sm: "50%" },
          height: { xs: "50%", sm: "auto" },
        }}
      >
        <SwitchImg
          primary={getImage(data.primary_thumb)}
          secondary={getImage(data.secondary_thumb)}
        />
      </CardMedia>
      <CardContent
        sx={{
          width: { xs: "auto", sm: "50%" },
          height: { xs: "50%", sm: "auto" },
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.abstract}
        </Typography>
        <Typography variant="body" color="text.secondary">
          {data.date}
        </Typography>
      </CardContent>
    </Card>
  );
}
