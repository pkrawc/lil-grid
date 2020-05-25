import React from "react"
import { Grid, Col } from "./index"

export default { title: "Grid" }

export function Basic() {
  const columns = [
    ["12", "6"],
    ["12", "6"],
    ["12", "3"],
    ["12", "3"],
    ["12", "3"],
    ["12", "3"],
    ["12", "2"],
    ["12", "2"],
    ["12", "2"],
    ["12", "2"],
    ["12", "2"],
    ["12", "2"],
  ]
  const styles = {
    bg: "black",
  }
  return (
    <Grid gap="24px" minHeight="calc(100vh - 1rem)" columns={12}>
      {columns.map((span, i) => (
        <Col {...styles} key={i} span={span} />
      ))}
      <Col {...styles} span={6} gridRow={["span 2"]} />
      <Col {...styles} span={6} />
      <Col {...styles} span={6} />
    </Grid>
  )
}
