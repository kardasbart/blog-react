import React from "react";
import { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getImage } from "gatsby-plugin-image";

import SwitchImg from "./SwitchImg";
import Link from "./Link";

export default function PostCard({ data, flipped }) {
  const order = flipped === 1 ? "row" : "row-reverse";
  const [showFirstThumb, setShowFirstThumb] = useState(true);

  const switchImgComponent = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!switchImgComponent.current) return;
      const box = switchImgComponent.current.getBoundingClientRect();
      if (!box) return;
      const by = box.y;
      const bh = box.height;
      const val = by && bh ? by + bh / 2 : 0;
      console.log("Val", val, window.innerHeight / 2);
      if (val && val < window.innerHeight / 2) setShowFirstThumb(false);
      else setShowFirstThumb(true);
      console.log("BB", by, bh);
      console.log("bool", showFirstThumb);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showFirstThumb, setShowFirstThumb]);

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
        <div ref={switchImgComponent}>
          <SwitchImg
            isPrimaryShown={showFirstThumb}
            primary={getImage(data.primary_thumb)}
            secondary={getImage(data.secondary_thumb)}
          />
        </div>
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
