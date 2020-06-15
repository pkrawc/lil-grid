import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  space: [12, 24, 36, 48, 60],
}

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator
