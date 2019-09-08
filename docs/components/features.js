import styled from "styled-components"
import { Eye, Minimize2, Sliders } from "react-feather"
import { colors } from "../constants"
import { Grid, Col } from "lil-grid"

const StyledList = styled.section`
  margin: 10rem 0;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background: ${colors.blue_700};
    border-radius: 50%;
    color: ${colors.blue_100};
    margin-bottom: 2rem;
  }
  @media (min-width: 50rem) {
    flex-direction: row;
  }
`

export default function Features() {
  return (
    <StyledList>
      <Grid className="feature">
        <Col className="feature" span={[12, 4]}>
          <div className="icon">
            <Eye />
          </div>
          <p>
            <strong>Dead Simple</strong>
          </p>
          <p>Built with an easy to understand and intuative API.</p>
        </Col>
        <Col className="feature" span={[12, 4]}>
          <div className="icon">
            <Minimize2 />
          </div>
          <p>
            <strong>Tiny</strong>
          </p>
          <p>Just 1.3 Kilobytes gzipped means that there's almost no overhead.</p>
        </Col>
        <Col className="feature" span={[12, 4]}>
          <div className="icon">
            <Sliders />
          </div>
          <p>
            <strong>Composable</strong>
          </p>
          <p>
            Built with composition in mind and fully extendable just like
            styled-components.
          </p>
        </Col>
      </Grid>
    </StyledList>
  )
}
