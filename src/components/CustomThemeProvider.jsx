import React from "react";
import { useState, useMemo, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";

import { getDesignTokens } from "components/theme.js";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function CustomThemeProvider({ children }) {
  let localMode = localStorage.getItem("themeMode");
  if (localMode === null) localMode = "light";
  const [mode, setMode] = useState(localMode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Button
          onClick={colorMode.toggleColorMode}
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: 1,
            p: 3,
          }}
        >
          {theme.palette.mode} mode
        </Button>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
