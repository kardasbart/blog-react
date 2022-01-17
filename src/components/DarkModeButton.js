import * as React from "react";
import IconButton from "@mui/material/IconButton";
import useTheme from "@mui/material/styles/useTheme";
import { LightMode, DarkMode } from "@mui/icons-material";
import ColorModeContext from "../ColorModeContext";

function DarkModeButton(props) {
  const { mode } = useTheme().palette;
  const colorMode = React.useContext(ColorModeContext);

  return (
    <IconButton onClick={colorMode.toggleColorMode} {...props}>
      {mode === "dark" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
}

export default DarkModeButton;
