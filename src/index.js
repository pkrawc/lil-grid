import styled from "styled-components"
import { space, layout, color, grid, flexbox } from "styled-system"

const Grid = styled.section.attrs(
  ({ gap, columns, gridTemplateColumns, gridGap }) => {
    return {
      gridGap: gap ? gap : gridGap,
      gridTemplateColumns: columns
        ? `repeat(${columns}, 1fr)`
        : gridTemplateColumns,
    }
  }
)`
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

function getSpan(span, offset) {
  const spanArr = Array.isArray(span) ? span : [span]
  const offsetArr = Array.isArray(offset) ? offset : [offset]
  console.log(spanArr)
  return spanArr.map((span, idx) => {
    const start = offsetArr[idx] || offsetArr[offsetArr.length - 1] || "auto"
    return `${start} / span ${span}`
  })
}

const Col = styled.div.attrs(
  ({
    span = null,
    spanRow = null,
    gridColumn,
    gridRow,
    offset = null,
    offsetRow = null,
    theme = {},
  }) => {
    const columns = span ? getSpan(span, offset) : gridColumn
    const rows = spanRow ? getSpan(spanRow, offsetRow) : gridRow
    return {
      theme: {
        breakpoints: ["40rem", "60rem", "80rem", "100rem", "120rem"],
        ...theme,
      },
      gridColumn: columns,
      gridRow: rows,
    }
  }
)`
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
