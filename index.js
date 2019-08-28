import React from "react"
import styled from "styled-components"

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: ${({ gap }) => gap};
`

const Grid = ({ children, xsmBreak, smBreak, mdBreak, lgBreak, xlgBreak, ...props }) => {
  const renderChildren = () =>
    React.Children.map(children, child =>
      React.cloneElement(child, {
        xsmBreak,
        smBreak,
        mdBreak,
        lgBreak,
        xlgBreak
      })
    )
  return <StyledGrid {...props}>{renderChildren()}</StyledGrid>
}

Grid.defaultProps = {
  columns: 12,
  gap: 2,
  xsmBreak: 40,
  smBreak: 60,
  mdBreak: 80,
  lgBreak: 100,
  xlgBreak: 120
}

const getIndex = (arr, idx) => arr[idx] || arr[arr.length - 1]

const getOffset = (arr, idx) => (getIndex(arr, idx) === "auto" ? "auto" : getIndex(arr, idx) + 1)

const Col = styled.div`
  grid-column: ${({ offset }) => getOffset(offset, 0)} / span ${({ span }) => getIndex(span, 0)};
  @media (min-width: ${({ xsmBreak }) => xsmBreak}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 1)} / span ${({ span }) => getIndex(span, 1)};
  }
  @media (min-width: ${({ smBreak }) => smBreak}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 2)} / span ${({ span }) => getIndex(span, 2)};
  }
  @media (min-width: ${({ mdBreak }) => mdBreak}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 3)} / span ${({ span }) => getIndex(span, 3)};
  }
  @media (min-width: ${({ lgBreak }) => lgBreak}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 4)} / span ${({ span }) => getIndex(span, 4)};
  }
  @media (min-width: ${({ xlgBreak }) => xlgBreak}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 5)} / span ${({ span }) => getIndex(span, 5)};
  }
`

Col.defaultProps = {
  offset: ["auto"],
  span: [12]
}

export { Grid, Col }
