import styled from "styled-components";

const getIndex = (arr, idx) => (arr[idx] ? arr[idx] : arr[arr.length - 1]);

const getOffset = (arr, idx) =>
  getIndex(arr, idx) === "auto" ? "auto" : getIndex(arr, idx) + 1;

const getBreakpoint = ({ theme: { breakPoints } }, key) => breakPoints[key];

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(${({ theme }) => theme.columns}, 1fr);
  grid-gap: ${({ theme }) => theme.gap}rem;
`;

Grid.defaultProps = {
  theme: {
    columns: 12,
    gap: 2
  }
};

const Col = styled.div`
  grid-column: ${({ offset }) => getOffset(offset, 0)} / span
    ${({ span }) => getIndex(span, 0)};
  @media (min-width: ${props => getBreakpoint(props, "xsm")}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 1)} / span
      ${({ span }) => getIndex(span, 1)};
  }
  @media (min-width: ${props => getBreakpoint(props, "sm")}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 2)} / span
      ${({ span }) => getIndex(span, 2)};
  }
  @media (min-width: ${props => getBreakpoint(props, "md")}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 3)} / span
      ${({ span }) => getIndex(span, 3)};
  }
  @media (min-width: ${props => getBreakpoint(props, "lg")}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 4)} / span
      ${({ span }) => getIndex(span, 4)};
  }
  @media (min-width: ${props => getBreakpoint(props, "xlg")}rem) {
    grid-column: ${({ offset }) => getOffset(offset, 5)} / span
      ${({ span }) => getIndex(span, 5)};
  }
`;

Col.defaultProps = {
  offset: ["auto"],
  span: [12],
  theme: {
    breakPoints: {
      xsm: 40,
      sm: 60,
      md: 80,
      lg: 100,
      xlg: 120
    }
  }
};

export { Grid, Col };
