import { createGlobalStyle } from "styled-components"
import { colors } from "../constants"

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  :root {
    font-size: 12px;
  }
  body {
    font-family: "IBM Plex Mono", monospace;
    font-size: 1.5rem;
    background: ${colors.blue_300};
    color: ${colors.blue_900};
  }
  html, body, h1, h2, h3, h4, h5, p, ul, li, ol {
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5 {
    color: ${colors.blue_700};
    line-height: 1.5;
  }
  h1 {
    margin: 3rem 0 2rem;
    font-size: 4rem;
    font-weight: 200;
  }
  h2 {
    margin: 2rem 0 1rem;
    font-size: 3rem;
    font-weight: 400;
  }
  h3 {
    margin: 1rem 0 1rem;
    font-size: 2rem;
    font-weight: 400;
  }
  h4 {
    margin: 2rem 0 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
  }
  h5 {
    margin: 1rem 0 0.5rem;
    font-size: 1rem;
    font-weight: 700;
  }
  p {
    margin: 0 0 1rem;
    line-height: 1.3334;
  }
  code {
    background: ${colors.blue_900};
    color: ${colors.blue_300};
    padding: 0 0.25rem;
    border-radius: 0.25rem;
  }
  hr {
    border-color: ${colors.blue_900};
  }
  table {
    width: 100%;
    text-align: left;
    background: ${colors.blue_500};
    padding: 1rem;
    color: ${colors.blue_100};
  }
  td,
  th {
    padding: 0 1rem;
  }
  .small {
    font-size: 1rem;
  }
`
