import styled from "styled-components"
import { space, layout, color, grid, flexbox } from "styled-system"

const Grid = styled.section`
  display: grid;
  ${layout};
  ${space};
  ${grid};
  ${flexbox};
  ${color};
`

Grid.defaultProps = {
  gridTemplateColumns: "repeat(12, 1fr)",
  gridGap: "2rem",
}

const Col = styled.div`
  ${layout};
  ${space};
  ${grid};
  ${flexbox};
  ${color};
`

Col.defaultProps = {
  gridColumn: "1 / -1",
}

export { Grid, Col }
