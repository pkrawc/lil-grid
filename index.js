import styled from "styled-components"

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: 2rem;
`

Grid.defaultProps = {
  columns: 12
}

const getIndex = (arr, idx) => arr[idx] || arr[arr.length - 1]

const getOffset = (arr, idx) => (getIndex(arr, idx) === "auto" ? "auto" : getIndex(arr, idx) + 1)

const Col = styled.div`
  grid-column: ${({ offset }) => getOffset(offset, 0)} / span ${({ span }) => getIndex(span, 0)};
  @media (min-width: 40rem) {
    grid-column: ${({ offset }) => getOffset(offset, 1)} / span ${({ span }) => getIndex(span, 1)};
  }
  @media (min-width: 60rem) {
    grid-column: ${({ offset }) => getOffset(offset, 2)} / span ${({ span }) => getIndex(span, 2)};
  }
  @media (min-width: 80rem) {
    grid-column: ${({ offset }) => getOffset(offset, 3)} / span ${({ span }) => getIndex(span, 3)};
  }
  @media (min-width: 100rem) {
    grid-column: ${({ offset }) => getOffset(offset, 4)} / span ${({ span }) => getIndex(span, 4)};
  }
`

Col.defaultProps = {
  offset: ["auto"],
  span: [12]
}

export { Grid, Col }
