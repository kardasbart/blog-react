import React from "react";

import { Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    // <Container display="flex" flexGrow={1} justifyContent="flex-end">
    <Typography variant="h6" component="div" textAlign="center" m={5}>
      Copyright © 2021 Bartosz&nbsp;Kardas All&nbsp;Rights&nbsp;Reserved
    </Typography>
    // </Container>
  );
}
