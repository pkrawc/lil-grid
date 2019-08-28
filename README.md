# Lil Grid

A _tiny_ grid for `styled-components` systems.

## Anatomy

Tiny grid uses `rem` units to give a consistency within your design. You can should be setting the `rem` in your project to a spacing that makes sense for you.

## Usage

Install the package locally along with it's peer dependencies.

```bash
npm install lil-grid styled-components react react-dom
```

Now you can use latticework's grid wherever you can styled components.

```js
import {Grid, Col} from "lil-grid"

export default () => {
  return <Grid>
    <Col span={[12, 4, 6, 12]}>
      I will be 12 columns at the smallest size, then 4, then 6, then 12 again.
    </Col>
  </Grid>
}
```

Make the `Grid` or `Col` components use whatever html tag you want, or even a custom component--as long as it passes className through.

```js

// BlueBackground
// CustomCard

export default () => {
  return <Grid as={BlueBackground}> // will render your grid as the custom background.
    <Col as={CustomCard} /> // will render your column as a card..
  </Grid>
}
```

## Props

### Col

| Name   | Required | Default  | Description                                 |
| ------ | -------- | -------- | ------------------------------------------- |
| span   | true     | [12]     | An array of lenghts for the column to span. |
| offset | false    | ["auto"] | An array of offsets for the column.         |

## Theme

### Grid

```js
// Default theme. Sizing in rems
<Grid theme={{
  gap: 2,
  columns: 12,
  breakPoints: {
    xsm: 40,
    sm: 60,
    md: 80,
    lg: 100,
    xlg: 120
  }
}} />
```