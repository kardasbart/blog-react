import "@fontsource/exo-2/300.css";
import "@fontsource/exo-2/400.css";
import "@fontsource/exo-2/500.css";
import "@fontsource/exo-2/700.css";

import React from "react";

import CustomThemeProvider from "components/CustomThemeProvider";

export function wrapRootElement({ element, props }) {
  return <CustomThemeProvider {...props}>{element}</CustomThemeProvider>;
}
