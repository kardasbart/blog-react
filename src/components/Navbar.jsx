import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Link from "components/Link";

//TODO GQL query
const pages = [
  { name: "Start here", link: "/start" },
  { name: "Blog", link: "/" },
  { name: "About", link: "/about" },
];

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Bartech blog
          </Typography>
          {pages.map((page) => (
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to={page.link}
              key={page.link}
              style={{ textDecoration: "none" }}
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              {page.name}
            </Typography>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
