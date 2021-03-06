import React from "react";
import { navigate } from "gatsby";
import { useContext } from "react";

import AppBar from "@mui/material/AppBar";
import { Stack, Typography } from "@mui/material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon, LightMode, DarkMode } from "@mui/icons-material";

import Link from "components/Link";
import DarkModeButton from "components/DarkModeButton";

//TODO GQL query
const pages = [
  { name: "Start here", link: "/start" },
  { name: "Blog", link: "/" },
  { name: "About", link: "/about" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    console.log("MenuNav");
    setAnchorElNav(null);
  };

  const handleCloseNavMenuButton = (link) => {
    setAnchorElNav(null);
    navigate(link);
  };

  return (
    <AppBar position="static">
      <Stack
        height={64}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <IconButton
          sx={{ display: { xs: "block", sm: "none" } }}
          size="large"
          disableRipple
          aria-label="navigation menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" noWrap component="div">
          Bartech blog
        </Typography>
        <Stack
          sx={{ display: { xs: "none", sm: "flex" } }}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={4}
        >
          {pages.map((page) => (
            <Typography
              display="block"
              variant="h6"
              noWrap
              component={Link}
              to={page.link}
              key={page.link}
            >
              {page.name}
            </Typography>
          ))}
        </Stack>
        <Menu
          sx={{ display: { xs: "block", sm: "none" } }}
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {pages.map((page) => (
            <MenuItem
              key={page.link}
              link={page.link}
              onClick={() => {
                handleCloseNavMenuButton(page.link);
              }}
            >
              <Typography textAlign="center">{page.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
        <DarkModeButton />
      </Stack>
    </AppBar>
  );
};
export default Navbar;
