import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getImage } from "gatsby-plugin-image";

import SwitchImg from "./SwitchImg";
import Link from "./Link";

export default function PostCardMui({ data }) {
  return (
    <Card
      component={Link}
      to={data.link}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <CardMedia
        component={SwitchImg}
        height="140"
        primary={getImage(data.primary_thumb)}
        secondary={getImage(data.secondary_thumb)}
      />
      <CardContent>
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
