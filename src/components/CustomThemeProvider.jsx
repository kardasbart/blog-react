import React from "react";
import { useState, useMemo, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { getDesignTokens } from "components/theme.js";
export const ThemeContext = React.createContext(null);

export default function CustomThemeProvider({ children }) {
  let localMode = null;
  if (typeof window !== "undefined") {
    localMode = localStorage.getItem("themeMode");
  }
  if (!localMode) localMode = "light";
  const [mode, setMode] = useState(localMode);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const context = {
    toggleTheme: toggleTheme,
    currentTheme: mode,
  };
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
