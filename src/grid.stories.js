import React from "react"
import { Grid, Col } from "./index"

export default { title: "Grid" }

export function Basic() {
  const columns = [
    ["span 12", "span 6"],
    ["span 12", "span 6"],
    ["span 12", "span 3"],
    ["span 12", "span 3"],
    ["span 12", "span 3"],
    ["span 12", "span 3"],
    ["span 12", "span 2"],
    ["span 12", "span 2"],
    ["span 12", "span 2"],
    ["span 12", "span 2"],
    ["span 12", "span 2"],
    ["span 12", "span 2"],
  ]
  return (
    <Grid gridGap="24px">
      {columns.map((span, i) => (
        <Col key={i} height="10rem" bg="black" gridColumn={span} />
      ))}
      <Col bg="black" gridColumn={["span 6"]} gridRow={["span 2"]} />
      <Col height="10rem" bg="black" gridColumn={["span 6"]} />
      <Col height="10rem" bg="black" gridColumn={["span 6"]} />
    </Grid>
  )
}
