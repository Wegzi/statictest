import React from "react"
// const Layout = require("./src/components/layout").default
import { ThemeProvider } from "styled-components"

import light from "../src/styles/themes/light"
import "../src/styles/index.scss"

export function wrapRootElement({ element }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it

  return <ThemeProvider theme={light}>{element}</ThemeProvider>
}
