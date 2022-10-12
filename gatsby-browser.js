import "lazysizes";
import React from "react";
import { ThemeProvider } from "./src/context/Theme";

require("prismjs/themes/prism-tomorrow.css");

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
