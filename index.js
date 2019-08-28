import React from "react"
import styled from "styled-components"

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(${({ theme }) => theme.columns}, 1fr);
  grid-gap: ${({ theme }) => theme.gap};
`

const Grid = ({ children, theme, ...props }) => {
  const breakPoints = {
    ...theme.breakPoints
  },
  const renderChildren = () =>
    React.Children.map(children, child =>
      React.cloneElement(child, {
        breakPoints
      })
    )
  return <StyledGrid {...props}>{renderChildren()}</StyledGrid>
}

Grid.defaultProps = {
  theme: {
    columns: 12,
    gap: 2,
    breakPoints: {
      xsm: 40,
      sm: 60,
      md: 80,
      lg: 100,
      xlg: 120
    }
  }
}

const getIndex = (arr, idx) => arr[idx] || arr[arr.length - 1]

const getOffset = (arr, idx) => (getIndex(arr, idx) === "auto" ? "auto" : getIndex(arr, idx) + 1)

const Col = styled.div`
  grid-column: ${({ offset }) => getOffset(offset, 0)} / span ${({ span }) => getIndex(span, 0)};
  @media (min-width: ${({ breakPoints: { xsm } }) => { xsm }}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 1)} / span ${({ span }) => getIndex(span, 1)};
  }
  @media (min-width: ${({ breakPoints: { sm } }) => { sm }}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 2)} / span ${({ span }) => getIndex(span, 2)};
  }
  @media (min-width: ${({ breakPoints: { md } }) => { md }}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 3)} / span ${({ span }) => getIndex(span, 3)};
  }
  @media (min-width: ${({ breakPoints: { lg } }) => { lg }}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 4)} / span ${({ span }) => getIndex(span, 4)};
  }
  @media (min-width: ${({ breakPoints: { xlg } }) => { xlg }}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 5)} / span ${({ span }) => getIndex(span, 5)};
  }
`

Col.defaultProps = {
  offset: ["auto"],
  span: [12]
}

export { Grid, Col }
